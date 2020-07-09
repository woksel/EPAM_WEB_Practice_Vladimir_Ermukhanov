import io from "socket.io-client";
export default class Client {
  static #origin = null;
  static #socket = null;
  static connect(url) {
    Client.#origin = new URL(url);
    Client.#socket = io(Client.#origin.href, { reconnection: true });
  }
  static get_all() {
    return fetch(Client.#origin.href + "voices");
  }
  static send(blob) {
    Client.#socket.emit("audioMessage", blob);
  }
  static get(cb) {
    Client.#socket.on("audioMessage", cb);
  }
  static users(cb) {
    Client.#socket.on("user", cb);
  }
}
