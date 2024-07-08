/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function generateExcuse() {
  const who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  const action = ["se comió", "se hizo pis", "estrelló", "rompió"];
  const what = ["mis deberes", "mi teléfono", "el coche"];
  const when = [
    "antes de la clase",
    "mientras dormía",
    "mientras hacía ejercicio",
    "durante mi comida",
    "mientras rezaba"
  ];

  const whoIndex = Math.floor(Math.random() * who.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const whatIndex = Math.floor(Math.random() * what.length);
  const whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}
window.onload = function() {
  document.getElementById("excuse").innerHTML = generateExcuse();
};
