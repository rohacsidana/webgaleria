function beolvas(fajlnev, tomb, jsonTomb, callback) {
  fetch("js/"+fajlnev)
    .then((response) => response.json())
    .then((data) => {
      data[jsonTomb].forEach(elem => {
        tomb.push(elem)
      })
      callback(tomb)
    })
    .catch((err) => {
      console.log(err)
    })
}
function feltoltRuhak(tomb) {

  let txt = "";
  for (let i = 0; i < tomb.length; i++) {
    txt += `<div class = "kepDiv" style="background-image: url(${tomb[i].eleresiUt});"><h3 class="nev">${tomb[i].alkotoNev}</h3></div>`
  }
  ID("content").innerHTML = txt; 

}
