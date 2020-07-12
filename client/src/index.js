import "@styles/style.sass";
import Loader from "@/loader.js";
import Client from "@/client.js";
import Radio from "@/radio.js";

function main() {
  addListener(".mode-switch", "click", onModeItemClick);
  addListener(".list", "click", onAllVoicesClick);
  Client.connect("https://voicy-speaker.herokuapp.com");
  Client.get(onData);
  Client.users((data) => {
    console.log(data);
  });
}

function onData(d) {
  console.log(d);
  switch (Radio.get_mode()) {
    case "speaker-mode":
      const counter = document.querySelector(".voice-counter");
      if (counter) counter.innerHTML = +counter.innerHTML++;
      else {
        const list = document.querySelector(".list");
        list.insertAdjacentHTML(
          "afterBegin",
          "<div class='voice-counter'>1</div>",
        );
      }
      break;
    case "stream-mode":
      const blob = Radio.to_blob(d);
      Radio.play(blob);
      break;
    default:
      break;
  }
}

function onMenuItemClick(e) {
  const target = e.target;
  if (!target.classList.contains("menu__item")) return;
  const other = target.parentElement.children;
  [].forEach.call(other, (i) => i.classList.remove("active"));
  target.classList.add("active");
  return target;
}

function onModeItemClick(e) {
  Client.abort();
  const target = onMenuItemClick(e);
  const content = document.querySelector(".content");
  const mode = target.getAttribute("mode");
  content.innerHTML = "";
  content.innerHTML = `<h1 class="content__text">Active: ${mode}</h1>`;
  Radio.set_mode(mode);
  if (target.classList.contains("mic")) {
    if (!target.classList.contains("mic-ready")) {
      target.classList.add("mic-ready");
      return;
    }
    if (target.classList.contains("recording"))
      Radio.record_stop().then((r) => {
        Client.send(r);
        content.querySelector(".content__text").classList.remove("recording");
      });
    else
      Radio.record_start()
        .then(() => {
          console.log("Record start");
          content.querySelector(".content__text").classList.add("recording");
        })
        .catch((e) => console.log(e));
    target.classList.toggle("recording");
  } else if (target.classList.contains("stream")) {
    document.querySelector(".mic-ready")?.classList.remove("mic-ready");
  }
}

function onAllVoicesClick(e) {
  onMenuItemClick(e);
  document.querySelector(".mic-ready")?.classList.remove("mic-ready");
  const content = document.querySelector(".content");
  const counter = document.querySelector(".voice-counter");
  content.style.overflowY = "hidden";
  content.innerHTML = "";

  Loader.set_context(content);
  Loader.play();
  Client.get_all()
    .then((resolve) => resolve.json())
    .then((json) => {
      json.reverse().forEach((i, id) => {
        try {
          let blob =
            i.audioBlob instanceof Array ? i.audioBlob[0] : i.audioBlob; //  ?
          let size = blob.data.length / 1024;
          if (size < 1) size = blob.data.length + " Bytes";
          else size = size.toFixed(3) + " KiB";
          const voice = document.createElement("div");
          voice.classList.add("voice__item");
          voice.setAttribute("id", id);
          voice.innerHTML = `
            <div class="voice__item-date">
              ${new Date(i.timeStamp).toLocaleString()}
            </div>
            <div class="voice__item-size">
              ${size}
            </div>
            <div class="voice__tool-wrap">
              <div class="voice__tool play-pause"></div>
              <div class="voice__tool stop"></div>
            </div>`;
          content.append(voice);
        } catch {
          console.log("Unknow voice", id, i);
        }
      });
      content.style.overflowY = "scroll";
      Loader.stop();
      counter?.remove();
      Radio.add_voices(json);
      addListener(".voice__tool", "click", onVoiceToolClick);
    })
    .catch((e) => console.log(e));
}

function onVoiceToolClick(e) {
  const target = e.target;
  if (!target.classList.contains("voice__tool")) return;
  const parent = target.closest(".voice__item");
  const id = +parent.getAttribute("id");
  if (Radio.get_active_id() !== id) {
    Radio.stop();
    [].forEach.call(parent.parentElement.children, (i) =>
      i.querySelector(".play-pause").classList.remove("paused"),
    );
  }
  if (target.classList.contains("play-pause")) {
    if (Radio.is_playing()) {
      if (target.classList.contains("paused")) Radio.resume();
      else Radio.pause();
    } else {
      Radio.play(id).then(() => target.classList.remove("paused"));
    }
    target.classList.toggle("paused");
  } else if (target.classList.contains("stop")) {
    Radio.stop();
    parent.querySelector(".play-pause").classList.remove("paused");
  }
}

function addListener(el, t, cb) {
  const current = typeof el === "string" ? document.querySelectorAll(el) : el;
  [].forEach.call(current, (i) => i.addEventListener(t, cb));
}

window.onload = main;
