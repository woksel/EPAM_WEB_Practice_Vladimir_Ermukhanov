import io from "socket.io-client";
export default class Client {
  static #origin = null;
  static #socket = null;
  static connect(url) {
    Client.#origin = new URL(url);
    Client.#socket = io(Client.#origin.href, { reconnection: true });
  }
  static getAll() {
    return fetch(Client.#origin.href + "voices");
  }
  static send(blob) {
    Client.#socket.emit("audioMessage", blob);
  }
  static get(cb) {
    Client.#socket.on("audioMessage", cb);
  }
}
