import "@styles/style.sass";
import Loader from "@/loader.js";
import Client from "@/client.js";
import Radio from "@/radio.js";
import { ContextReplacementPlugin } from "webpack";

function main() {
  addListener(".mode-switch", "click", onModeItemClick);
  addListener(".list", "click", onAllVoicesClick);
  Client.connect("https://voicy-speaker.herokuapp.com");
  Client.get((data) => {
    console.log(data);
    const counter = document.querySelector(".voice-counter");
    if (counter) counter.innerHTML = +counter.innerHTML++;
    else {
      const list = document.querySelector(".list");
      list.insertAdjacentHTML(
        "afterbegin",
        "<div class='voice-counter'>1</div>",
      );
    }
  });
  Client.user((data) => {
    console.log(data);
  });
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
  const target = onMenuItemClick(e);
  const content = document.querySelector(".content");
  content.innerHTML = "";
  content.innerHTML = `<h1 class="content__text">Active: ${target.getAttribute(
    "mode",
  )}</h1>`;
  if (target.classList.contains("mic")) {
    if (target.classList.contains("recording"))
      Radio.record_stop().then((r) => Radio.play(r));
    //Radio.record_stop().then((r) => Client.send(r));
    else
      Radio.record_start().then(() => {
        console.log("Record start");
      });
    target.classList.toggle("recording");
  } else if (target.classList.contains("stream")) {
  }
}

function onAllVoicesClick(e) {
  onMenuItemClick(e);
  const content = document.querySelector(".content");
  content.style.overflowY = "hidden";
  content.innerHTML = "";
  Loader.setContext(content);
  Loader.play();
  Client.getAll()
    .then((resolve) => resolve.json())
    .then((json) => {
      json.forEach((i, id) => {
        let blob = i.audioBlob instanceof Array ? i.audioBlob[0] : i.audioBlob;
        let size = blob.data.length / 1024;
        if (size < 1) size = blob.data.length + " Bytes";
        else size = size.toFixed(3) + " KiB";
        const voice = document.createElement("div");
        voice.classList.add("voice__item");
        voice.setAttribute("id", id);
        voice.innerHTML = `<div class="voice__item-date">${new Date(
          i.timeStamp,
        ).toLocaleString()}</div><div class="voice__item-size">${size}</div>`;
        content.append(voice);
      });
      content.style.overflowY = "scroll";
      Loader.stop();
      Radio.addVoices(json);
      addListener(".voice__item", "click", onVoiceItemClick);
    });
}

function onVoiceItemClick(e) {
  const target = e.target;
  if (!target.classList.contains("voice__item")) return;
  const id = +target.getAttribute("id");
  Radio.play(id);
}

function addListener(el, t, cb) {
  const current = typeof el === "string" ? document.querySelectorAll(el) : el;
  [].forEach.call(current, (i) => i.addEventListener(t, cb));
}

window.onload = main;
