window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }

function init(){
    fetch("cikkek.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.cikkek)
      feldolgoz(data.cikkek)
    })
}

function feldolgoz(cikkek) {
    var txt = " "
    cikkek.forEach(function  (cikkek){
        txt += '<h1>'

    for (const i in cikkek) {
      console.log(i)
      if (i != "id") {
        if (i === "oldalcim" ) {
          txt += `<h1> ${cikkek[i]}</h1><br>`
        }
        else if (i === "foCim1"  || i === "foCim2") {
          txt += `<h2> ${cikkek[i]}</h2><br>`
        }
        else if (i === "cim1"  || i === "cim2"  || i === "cim3"  || i === "cim4"  || i === "cim5"  || i === "cim6"  || i === "cim7"  || i === "cim8"){
          txt += `<h3> ${cikkek[i]}</h3><br>`
        }
        else if (i.indexOf("bekezdes")>=0 /* === "bekezdes1"  || i === "bekezdes2"  || i === "bekezdes3"  || i === "bekezdes4"  || i === "bekezdes5"  || i === "bekezdes6"  || i === "bekezdes7"  || i === "bekezdes8"  || i === "bekezdes9"  || i === "bekezdes10"  || i === "bekezdes11"  || i === "bekezdes112"  || i === "bekezdes13"  || i === "bekezdes14"  || i === "bekezdes15"  || i === "bekezdes16"  || i === "bekezdes17"  || i === "bekezdes18"  || i === "bekezdes19"*/){
          txt += `<span> ${cikkek[i]}</span><br>`
        }
        else if (i === "link1"){
          txt += `<span> ${cikkek[i]}</span><br>`
        }
        else{
          txt += `<input type='radio' name="${cikkek['id']}"><span> ${cikkek[i]}</span><br>`
        }
          }
      //txt += `<span> ${cikkek[i]}</span><br>`
        }
        
        txt +='</h1>'
    });
    console.log(txt)
    $('article')[0].innerHTML = txt
}