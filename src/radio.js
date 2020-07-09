export default class Radio {
  static #all_voices = [];
  static #active_voice = null;
  static #mediaRecorder = null;
  static #active_voice_id = null;
  static #recorded_chuncks = [];
  static #mode = "speaker-mode";
  static set_mode(mode) {
    Radio.#mode = mode;
  }
  static get_mode() {
    return Radio.#mode;
  }
  static record_start() {
    return new Promise((res, rej) => {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          Radio.#mediaRecorder = new MediaRecorder(stream);
          Radio.#mediaRecorder.start();
          Radio.#mediaRecorder.addEventListener("dataavailable", (e) => {
            Radio.#recorded_chuncks.push(e.data);
          });
          res(Radio.#mediaRecorder);
        })
        .catch((e) => {
          rej(e);
        });
    });
  }
  static record_stop() {
    return new Promise((res, rej) => {
      Radio.#mediaRecorder.addEventListener("stop", () => {
        //const blob = Radio.to_blob(Radio.#recorded_chuncks);
        console.log(Radio.#recorded_chuncks);
        res(Radio.#recorded_chuncks);
        Radio.#recorded_chuncks = [];
      });
      Radio.#mediaRecorder.stop();
    });
  }
  static play(data) {
    return new Promise((res, rej) => {
      Radio.stop();
      let audio;
      let blob;
      try {
        if (typeof data == "number") {
          //const voice = Radio.#all_voices[data].audioBlob[0].data;
          const voice =
            Radio.#all_voices[data].audioBlob instanceof Array // ??
              ? Radio.#all_voices[data].audioBlob[0].data // ??
              : Radio.#all_voices[data].audioBlob.data; // ??
          blob = Radio.to_blob([new Uint8Array(voice)]); // ??
          Radio.#active_voice_id = data;
        } else {
          blob = data;
          Radio.#active_voice_id = -1;
        }

        audio = Radio.to_audio(blob);
        Radio.#active_voice = audio;

        audio.play().catch((e) => console.log(e));
        audio.addEventListener("ended", () => {
          Radio.reset_active();
          res();
        });
      } catch {
        console.log("Playback error", data);
      }
    });
  }
  static stop() {
    Radio.pause();
    if (Radio.#active_voice) Radio.#active_voice.currentTime = 0.0;
    Radio.reset_active();
  }
  static resume() {
    if (Radio.#active_voice) Radio.#active_voice.play();
  }
  static pause() {
    if (Radio.#active_voice) Radio.#active_voice.pause();
  }
  static is_playing() {
    return !!Radio.#active_voice;
  }
  static get_active() {
    return Radio.#active_voice;
  }
  static get_active_id() {
    return Radio.#active_voice_id;
  }
  static reset_active() {
    Radio.#active_voice = null;
    Radio.#active_voice_id = null;
  }
  static add_voices(arr) {
    Radio.#all_voices = [...arr];
  }
  static to_audio(blob) {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    return audio;
  }
  static to_blob(data) {
    return new Blob(data, {
      type: "audio/webm",
    });
  }
}
