import io from "socket.io-client";
import path from "path";
export default class Client {
  static #origin = null;
  static #socket = null;
  static #controller = null;
  static connect(url) {
    Client.#origin = new URL(url);
    Client.#socket = io(Client.#origin.href, { reconnection: true });
    Client.#controller = new AbortController();
  }
  static abort() {
    Client.#controller.abort();
    Client.#controller = new AbortController();
  }
  static get_all() {
    return fetch(Client.#origin.href + "voices", {
      signal: Client.#controller.signal,
    });
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
