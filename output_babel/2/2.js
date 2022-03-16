"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.p2 = p2;

var _Base = _interopRequireDefault(require("../assets/Base.jpg"));

var _ = require("../1/1");

var _a = require("../3a/3a");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function p2() {
  document.body.innerHTML = "\n" + "        <header>\n" + "            El dia de la reunion\n" + "            <hr>\n" + "        </header>\n" + "\n" + "        \n" + "        <div>\n" + "            <figure>\n" + "                <img id='img'>\n" + "            </figure>\n" + "        </div>\n" + "\n" + "        <div>\n" + "            <p>\n" + "                <i>“Porque tan serio Ken?”</i> pregunto Michael jocosamente por el intercomunicador.<br>\n" + "                “Finalmente llegaste Michael, llevo 20 minutos extras cubriendo la puerta sin poder rotar”<br>\n" + "                <i>“Tranquilo mi amigo, déjame entrar y en unos 2 minutos llego a suplirte”</i>\n" + "            </p>\n" + "            <p>\n" + "                Notas que sus papeles brillan por su ausencia\n" + "            </p>\n" + "        </div>  \n" + "\n" + " <div class=\"container\">\n" + "                <div class=\"row\">\n" + "                    <div class=\"col\">\n" + "                        <button id=\"anti\"> Dejar entrar a michael</button>\n" + "                    </div>\n" + "                    <div class=\"col\">\n" + "                        <button id=\"web\"> No dejar entrar </button>\n" + "                    </div>\n" + "                </div>\n" + "            </div>\n" + "\n" + "        <footer>\n" + "            <hr>\n" + "            Jose Pablo Monzon 20309\n" + "        </footer>\n";
  document.getElementById('img').src = _Base["default"];

  document.getElementById('anti').onmousedown = function () {
    return (0, _a.p3a)();
  };

  document.getElementById('web').onmousedown = function () {
    return (0, _.p1)();
  };
}