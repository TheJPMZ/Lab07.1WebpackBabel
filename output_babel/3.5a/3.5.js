"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.p35a = p35a;

var _esposa = _interopRequireDefault(require("../assets/esposa.jpg"));

var _ = require("../1/1");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function p35a() {
  document.body.innerHTML = "\n" + "        <header>\n" + "            El dia de la reunion\n" + "            <hr>\n" + "        </header>\n" + "\n" + "        \n" + "        <div>\n" + "            <figure>\n" + "                <img id='img' alt='esposa'>\n" + "            </figure>\n" + "        </div>\n" + "\n" + "        <div>\n" + "            <p>\n" + "                Pierdes la atención. \n" + "            </p>\n" + "            <p>\n" + "                Te enfocas en una foto en tu teléfono, es tu esposa, al igual que tu trabaja en la estación Starlight.<br>\n" + "                Ella se encuentra trabajando en el área de investigación ha sido una pieza clave en descubrir el comportamiento del nuevo especimen, una mujer brillante.<br> Pronto cumplirán una década juntos, como en todas las relaciones hay bajos y altos, pero aun así ella es tu otra mitad. \n" + "            </p>\n" + "            <p>\n" + "                No quieres dejarla, y te preocupa que ultimamente ha estado un poco distante.\n" + "            </p>\n" + "            <p>\n" + "                Un golpe repentino te devuelve a la realidad. De regreso en la oficina de seguridad te das cuenta que eran los documentos de otra persona, por la camara te das cuenta quien era.\n" + "            </p>\n" + "        </div>\n" + "\n" + "<form id='forma' method='get'>\n" + "       <button type='submit'> Continuar </button>\n" + "</form>\n" + "\n" + "        <footer>\n" + "            <hr>\n" + "            Jose Pablo Monzon 20309\n" + "        </footer>\n" + "\n";
  document.getElementById('img').src = _esposa["default"];

  document.getElementById('anti').onmousedown = function () {
    return alert("http://52.7.129.145:3301/");
  };

  document.getElementById('web').onmousedown = function () {
    return (0, _.p1)();
  };
}