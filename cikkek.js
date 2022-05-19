window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }

function init(){
  fetch("cikkek_cim.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.cikkek)
      feldolgoz_cim(data.cikkek_cim)
    });
    fetch("cikkek.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.cikkek)
      feldolgoz(data.cikkek)
    });
}

function feldolgoz_cim(cikkek_cim) {
    var txt = " ";
    var id='';
    txt += "<div class='row'>"
    cikkek_cim.forEach(function  (cikkekcim){
      
      txt += "<div class='column'>"
      for (const i in cikkekcim) {
        if(i === "id"){
          id=cikkekcim[i];
        }
        console.log(i)
        if (i != "id") {
          
          if (i === "kep1"){
            txt += "<a href=\"#"+id+"\"><img src=\""+cikkekcim[i]+"\" width= 100px height= 100 px ></a>";
          }
          
          else if (i === "foCim1") {
            txt += `<span class = "focim "> ${cikkekcim[i]}</span>`
          }
          /*else if (i === "bekezdes1") {
            txt += `<span class = "bekezdes1"> ${cikkekcim[i]}</span>`
          }*/
          else if (i === "szerzo"){
            txt += `<span> ${cikkekcim[i]}</span>`
          }

        }
      }        
      txt +="</div> ";
    });
    txt +="</div> <br>";
    console.log(txt)
    $('article')[0].innerHTML = txt;
}

function feldolgoz(cikkek) {
    var txt = " ";
    var id='';
    cikkek.forEach(function  (cikkek){
        //txt += "<div class='cikk'>"

    for (const i in cikkek) {
      console.log(i);
      if(i === "id"){
        id=cikkek[i];
      }
      if (i != "id") {
        if (i.indexOf("foCim")>=0) {
          txt += `<h2 id=\"`+id+`\"> ${cikkek[i]}</h2>`
        }
        else if (i.indexOf("cim")>=0){
          txt += `<h3> ${cikkek[i]}</h3>`
        }
        else if (i.indexOf("bekezdes")>=0 /* === "bekezdes1"  || i === "bekezdes2"  || i === "bekezdes3"  || i === "bekezdes4"  || i === "bekezdes5"  || i === "bekezdes6"  || i === "bekezdes7"  || i === "bekezdes8"  || i === "bekezdes9"  || i === "bekezdes10"  || i === "bekezdes11"  || i === "bekezdes112"  || i === "bekezdes13"  || i === "bekezdes14"  || i === "bekezdes15"  || i === "bekezdes16"  || i === "bekezdes17"  || i === "bekezdes18"  || i === "bekezdes19"*/){
          txt += `<span> ${cikkek[i]}</span><br>`
        }
        else if (i === "link1"){
          txt += `<span> ${cikkek[i]}</span>`
        }
        else if (i === "szerzo"){
          txt += `<span> ${cikkek[i]}</span>`
        }
        else if (i.indexOf("kep")>=0){
          txt += "<img src=\""+cikkek[i]+"\" width= 100px height= 100 px><br>";
        }
        else if (i.indexOf("fels")>=0){
          const lista=cikkek[i];          
          for (const n in lista) {
            txt += "<li><span>"+lista[n]+"</span>";
          }
        }
      }
        }        
    });
    console.log(txt)
    $('article')[0].innerHTML += txt;

    var elements = document.getElementsByClassName("column");

    var i;

    for (i = 0; i < elements.length; i++) {
      elements[i].style.msFlex = "50%";  // IE10
      elements[i].style.flex = "50%";
    }
    
}