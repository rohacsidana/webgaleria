window.addEventListener("load", init);
function ID(elem) { return document.getElementById(elem); }
function Class(elem) { return document.getElementsByClassName(elem); }
function $(elem) { return document.querySelectorAll(elem); }
function $1(elem) { return document.querySelector(elem); }

let kepek = [
  {
    eleresiUt: "chanel1.jpg",
    alt: "chanel1",
    alkotoNev: "Jane Doe",
  },
  {
    eleresiUt: "chanel2.jpg",
    alt: "chanel2",
    alkotoNev: "Jane Doe",
  },
  {
    eleresiUt: "chanel3.jpg",
    alt: "chanel3",
    alkotoNev: "Jane Doe",
  },
  {
    eleresiUt: "dior1.jpg",
    alt: "dior1",
    alkotoNev: "Jane Doe",
  },
  {
    eleresiUt: "fendi1.jpg",
    alt: "fendi1",
    alkotoNev: "Jane Doe",
  },
  {
    eleresiUt: "fendi2.jpg",
    alt: "fendi2",
    alkotoNev: "Jane Doe",
  },
  {
    eleresiUt: "fendi3.jpg",
    alt: "fendi3",
    alkotoNev: "Jane Doe",
  },
  {
    eleresiUt: "fendi4.jpg",
    alt: "fendi4",
    alkotoNev: "Jane Doe",
  },
];

const zwRuhak = []
const krRuhak = []
const esemenyKepek = []

function init() {
  fetch("ruha.json")
    .then(response => response.json())
    .then(data => {
      console.log(data.zwRuhak)
      data.zwRuhak.forEach(elem => {
        zwRuhak.push(elem)
      })
      data.krRuhak.forEach(elem => {
        krRuhak.push(elem)
      })
      data.esemenyKepek.forEach(elem => {
        esemenyKepek.push(elem)
      })
    })
  console.log(zwRuhak)
  console.log(krRuhak)
  console.log(esemenyKepek)
  feltolt();
}

function feltolt() {
  let txt = "";
  for (let i = 0; i < kepek.length; i++) {
    txt += `<div class = "kepDiv" style="background-image: url(kepek/${kepek[i].eleresiUt});"><a href = #><h3 class="nev">${kepek[i].alkotoNev}</h3></a></div>`;
  }
  ID("content").innerHTML = txt;
}