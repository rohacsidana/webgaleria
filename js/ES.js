window.addEventListener("load", init);
function ID(elem) { return document.getElementById(elem); }
function Class(elem) { return document.getElementsByClassName(elem); }
function $(elem) { return document.querySelectorAll(elem); }
function $1(elem) { return document.querySelector(elem); }

const esemenyKepek = []
for (let i = 1; i <= 50; i++) {
  esemenyKepek.push(i)
}
function init() {
  var pozicio = 1
  var kezdoIndex = 0
  var vegIndex = 10

  feltoltEsemeny(esemenyKepek, kezdoIndex, vegIndex)
  ID("bal").addEventListener("click", balra)
  ID("jobb").addEventListener("click", jobbra)

  function jobbra() {
    console.log("jobb gomb")
    if (pozicio < 5) {
      kezdoIndex += 10
      vegIndex += 10
      console.log("jobbravalt")

      pozicio++
    } else {
      kezdoIndex = 0
      vegIndex = 10
      pozicio = 1
    }
    feltoltEsemeny(esemenyKepek, kezdoIndex, vegIndex)
  }
  function balra() {
    console.log("bal gomb")
    if (1 < pozicio && pozicio <= 5) {
      vegIndex -= 10
      kezdoIndex -= 10
      console.log("balravalt")

      pozicio--
    } else {
      kezdoIndex = 40
      vegIndex = 50
      pozicio = 5
    }
    feltoltEsemeny(esemenyKepek, kezdoIndex, vegIndex)
  }
}
function feltoltEsemeny(tomb, kezdoIndex, vegIndex) {
  let txt = "";
  for (let i = kezdoIndex; i < vegIndex; i++) {
    txt += `<div class = "kepDiv" style="background-image: url(foKepek/esemeny/${tomb[i]}.jpg);"></div>`
  }
  ID("content").innerHTML = txt;
}
