!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],f=0,v=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);v.length;)v.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([58,1]),n()}({26:function(e,t,n){},27:function(e,t,n){},54:function(e,t){},58:function(e,t,n){"use strict";n.r(t);n(26),n(27);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){if(e!==t)throw new TypeError("Private static access of wrong provenance");return n.get?n.get.call(e):n.value}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,a=[{key:"set_context",value:function(t){!function(e,t,n,r){if(e!==t)throw new TypeError("Private static access of wrong provenance");if(n.set)n.set.call(e,r);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}}(e,e,c,t)}},{key:"play",value:function(){o(e,e,c).insertAdjacentHTML("afterBegin",o(e,e,i))}},{key:"stop",value:function(){o(e,e,c).querySelector(".loader-wrap").remove()}}],(n=null)&&r(t.prototype,n),a&&r(t,a),e}(),i={writable:!0,value:'<div class="loader-wrap"><div class="'.concat(o(a,a,{writable:!0,value:"lds-ellipsis"}),'"><div></div><div></div><div></div><div></div></div></div>')},c={writable:!0,value:document.body},l=n(25),u=n.n(l);n(57);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){if(e!==t)throw new TypeError("Private static access of wrong provenance");return n.get?n.get.call(e):n.value}function v(e,t,n,r){if(e!==t)throw new TypeError("Private static access of wrong provenance");if(n.set)n.set.call(e,r);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}return r}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"connect",value:function(t){v(e,e,p,new URL(t)),v(e,e,y,u()(f(e,e,p).href,{reconnection:!0})),v(e,e,b,new AbortController)}},{key:"abort",value:function(){f(e,e,b).abort(),v(e,e,b,new AbortController)}},{key:"get_all",value:function(){return fetch(f(e,e,p).href+"voices",{signal:f(e,e,b).signal})}},{key:"send",value:function(t){f(e,e,y).emit("audioMessage",t)}},{key:"get",value:function(t){f(e,e,y).on("audioMessage",t)}},{key:"users",value:function(t){f(e,e,y).on("user",t)}}],(n=null)&&s(t.prototype,n),r&&s(t,r),e}(),p={writable:!0,value:null},y={writable:!0,value:null},b={writable:!0,value:null};function m(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){if(e!==t)throw new TypeError("Private static access of wrong provenance");return n.get?n.get.call(e):n.value}function _(e,t,n,r){if(e!==t)throw new TypeError("Private static access of wrong provenance");if(n.set)n.set.call(e,r);else{if(!n.writable)throw new TypeError("attempted to set read only private field");n.value=r}return r}var L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"set_mode",value:function(t){_(e,e,A,t)}},{key:"get_mode",value:function(){return h(e,e,A)}},{key:"record_start",value:function(){return new Promise((function(t,n){navigator.mediaDevices.getUserMedia({audio:!0}).then((function(n){_(e,e,E,new MediaRecorder(n)),h(e,e,E).start(),h(e,e,E).addEventListener("dataavailable",(function(t){h(e,e,j).push(t.data)})),t(h(e,e,E))})).catch((function(e){n(e)}))}))}},{key:"record_stop",value:function(){return new Promise((function(t,n){h(e,e,E).addEventListener("stop",(function(){console.log(h(e,e,j)),t(h(e,e,j)),_(e,e,j,[])})),h(e,e,E).stop()}))}},{key:"play",value:function(t){return new Promise((function(n,r){var o,a;e.stop();try{if("number"==typeof t){var i=h(e,e,k)[t].audioBlob instanceof Array?h(e,e,k)[t].audioBlob[0].data:h(e,e,k)[t].audioBlob.data;a=e.to_blob([new Uint8Array(i)]),_(e,e,T,t)}else a=t,_(e,e,T,-1);o=e.to_audio(a),_(e,e,S,o),o.play().catch((function(e){return console.log(e)})),o.addEventListener("ended",(function(){e.reset_active(),n()}))}catch(e){console.log("Playback error",t)}}))}},{key:"stop",value:function(){e.pause(),h(e,e,S)&&(h(e,e,S).currentTime=0),e.reset_active()}},{key:"resume",value:function(){h(e,e,S)&&h(e,e,S).play()}},{key:"pause",value:function(){h(e,e,S)&&h(e,e,S).pause()}},{key:"is_playing",value:function(){return!!h(e,e,S)}},{key:"get_active",value:function(){return h(e,e,S)}},{key:"get_active_id",value:function(){return h(e,e,T)}},{key:"reset_active",value:function(){_(e,e,S,null),_(e,e,T,null)}},{key:"add_voices",value:function(t){_(e,e,k,m(t))}},{key:"to_audio",value:function(e){var t=URL.createObjectURL(e);return new Audio(t)}},{key:"to_blob",value:function(e){return new Blob(e,{type:"audio/webm"})}}],(n=null)&&g(t.prototype,n),r&&g(t,r),e}(),k={writable:!0,value:[]},S={writable:!0,value:null},E={writable:!0,value:null},T={writable:!0,value:null},j={writable:!0,value:[]},A={writable:!0,value:"speaker-mode"};function P(e){switch(console.log(e),L.get_mode()){case"speaker-mode":var t=document.querySelector(".voice-counter");if(t)t.innerHTML=+t.innerHTML++;else document.querySelector(".list").insertAdjacentHTML("afterBegin","<div class='voice-counter'>1</div>");break;case"stream-mode":var n=L.to_blob(e);L.play(n)}}function O(e){var t=e.target;if(t.classList.contains("menu__item")){var n=t.parentElement.children;return[].forEach.call(n,(function(e){return e.classList.remove("active")})),t.classList.add("active"),t}}function M(e){d.abort();var t=O(e),n=document.querySelector(".content"),r=t.getAttribute("mode");if(n.innerHTML="",n.innerHTML='<h1 class="content__text">Active: '.concat(r,"</h1>"),L.set_mode(r),t.classList.contains("mic")){if(!t.classList.contains("mic-ready"))return void t.classList.add("mic-ready");t.classList.contains("recording")?L.record_stop().then((function(e){d.send(e),n.querySelector(".content__text").classList.remove("recording")})):L.record_start().then((function(){console.log("Record start"),n.querySelector(".content__text").classList.add("recording")})).catch((function(e){return console.log(e)})),t.classList.toggle("recording")}else if(t.classList.contains("stream")){var o;null===(o=document.querySelector(".mic-ready"))||void 0===o||o.classList.remove("mic-ready")}}function q(e){var t;O(e),null===(t=document.querySelector(".mic-ready"))||void 0===t||t.classList.remove("mic-ready");var n=document.querySelector(".content"),r=document.querySelector(".voice-counter");n.style.overflowY="hidden",n.innerHTML="",a.set_context(n),a.play(),d.get_all().then((function(e){return e.json()})).then((function(e){e.reverse().forEach((function(e,t){try{var r=e.audioBlob instanceof Array?e.audioBlob[0]:e.audioBlob,o=r.data.length/1024;o=o<1?r.data.length+" Bytes":o.toFixed(3)+" KiB";var a=document.createElement("div");a.classList.add("voice__item"),a.setAttribute("id",t),a.innerHTML='\n            <div class="voice__item-date">\n              '.concat(new Date(e.timeStamp).toLocaleString(),'\n            </div>\n            <div class="voice__item-size">\n              ').concat(o,'\n            </div>\n            <div class="voice__tool-wrap">\n              <div class="voice__tool play-pause"></div>\n              <div class="voice__tool stop"></div>\n            </div>'),n.append(a)}catch(n){console.log("Unknow voice",t,e)}})),n.style.overflowY="scroll",a.stop(),null==r||r.remove(),L.add_voices(e),B(".voice__tool","click",x)})).catch((function(e){return console.log(e)}))}function x(e){var t=e.target;if(t.classList.contains("voice__tool")){var n=t.closest(".voice__item"),r=+n.getAttribute("id");L.get_active_id()!==r&&(L.stop(),[].forEach.call(n.parentElement.children,(function(e){return e.querySelector(".play-pause").classList.remove("paused")}))),t.classList.contains("play-pause")?(L.is_playing()?t.classList.contains("paused")?L.resume():L.pause():L.play(r).then((function(){return t.classList.remove("paused")})),t.classList.toggle("paused")):t.classList.contains("stop")&&(L.stop(),n.querySelector(".play-pause").classList.remove("paused"))}}function B(e,t,n){var r="string"==typeof e?document.querySelectorAll(e):e;[].forEach.call(r,(function(e){return e.addEventListener(t,n)}))}window.onload=function(){B(".mode-switch","click",M),B(".list","click",q),d.connect("http://localhost:3000"),d.get(P),d.users((function(e){console.log(e)}))}}});