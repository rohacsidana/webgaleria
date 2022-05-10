window.addEventListener("load", init);
function ID(elem) { return document.getElementById(elem); }
function Class(elem) { return document.getElementsByClassName(elem); }
function $(elem) { return document.querySelectorAll(elem); }
function $1(elem) { return document.querySelector(elem); }

const zwRuhak = []
const krRuhak = []
const esemenyKepek = []
for (let i = 1; i <= 54; i++) {
  esemenyKepek.push(i).toString + ".jpg"
}


function init() {
  beolvas()
  console.log(zwRuhak)
}
function beolvas() {
  fetch("kepek.json")
    .then((response) => response.json())
    .then((data) => {
      data.zerowaste.forEach(elem => {
        zwRuhak.push(elem)
      })
      feltolt()
    })
    .catch((err) => {
      console.log(err)
    })

}
function feltolt() {
  let txt = "";
  for (let i = 0; i < zwRuhak.length; i++) {
    txt += `<div class = "kepDiv" style="background-image: url(${zwRuhak[i].eleresiUt});"><h3 class="nev">${zwRuhak[i].alkotoNev}</h3></div>`
  }
  ID("content").innerHTML = txt;
}