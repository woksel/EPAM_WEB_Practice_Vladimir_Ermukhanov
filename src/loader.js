import "@styles/loader.sass";
export default class Loader {
  static #className = "lds-ellipsis";
  static #html = `<div class="loader-wrap"><div class="${
    Loader.#className
  }"><div></div><div></div><div></div><div></div></div></div>`;
  static #context = document.body;
  static set_context(context) {
    Loader.#context = context;
  }
  static play() {
    Loader.#context.insertAdjacentHTML("afterBegin", Loader.#html);
  }
  static stop() {
    Loader.#context.querySelector(`.loader-wrap`).remove();
  }
}
