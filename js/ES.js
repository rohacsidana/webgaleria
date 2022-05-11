window.addEventListener("load", init);
function ID(elem) { return document.getElementById(elem); }
function Class(elem) { return document.getElementsByClassName(elem); }
function $(elem) { return document.querySelectorAll(elem); }
function $1(elem) { return document.querySelector(elem); }

const zwRuhak = []
const krRuhak = []
const esemenyKepek = []
for (let i = 1; i <= 50; i++) {
  esemenyKepek.push(i)
}
function init() {
  feltoltEsemeny(esemenyKepek, 0, 10)
}
function feltoltEsemeny(tomb, kezdoIndex, vegIndex) {
  let txt = "";
  for (let i = kezdoIndex; i < vegIndex; i++) {
    txt += `<div class = "kepDiv" style="background-image: url(foKepek/esemeny/${tomb[i]}.jpg);"></div>`
  }
  ID("content").innerHTML = txt;
}