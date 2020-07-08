export default class Radio {
  static #all_voices = [];
  static #active_voice = null;
  static #mediaRecorder = null;
  static #recorded_chuncks = [];
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
        const blob = Radio.toBlob(Radio.#recorded_chuncks);
        console.log(Radio.#recorded_chuncks);
        Radio.#recorded_chuncks = [];
        res(blob);
      });
      Radio.#mediaRecorder.stop();
    });
  }
  static play(data) {
    Radio.stop();
    let audio;
    let blob;
    if (typeof data == "number") {
      const voice = Radio.#all_voices[data].audioBlob[0].data;
      blob = Radio.toBlob([new Uint8Array(voice)]);
    } else blob = data;

    audio = Radio.toAudio(blob);
    audio.play();
    Radio.#active_voice = audio;
  }
  static stop() {
    if (Radio.#active_voice) {
      Radio.#active_voice.pause();
      Radio.#active_voice.currentTime = 0.0;
      Radio.#active_voice = null;
    }
  }
  static resume() {
    Radio.#active_voice.resume();
  }
  static addVoices(arr) {
    Radio.#all_voices = [...arr];
  }
  static toAudio(blob) {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    return audio;
  }
  static toBlob(data) {
    return new Blob(data, {
      type: "audio/wav",
    });
  }
}
