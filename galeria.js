window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }

function init(){
    fetch("galeria.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.cikkek)
      feldolgoz(data.cikkek)
    })
}

function feldolgoz(cikkek) {
    var txt = " "
    cikkek.forEach(function  (cikkek){
        txt += ''

    for (const i in cikkek) {
      console.log(i)
      if (i != "id") {
        if (i === "oldalcim" ) {
          txt += `<h1> ${cikkek[i]}</h1>`
        }
        else if (i === "foCim1"  || i === "foCim2") {
          txt += `<h2> ${cikkek[i]}</h2>`
        }
        else if (i === "cim1"  || i === "cim2"  || i === "cim3"  || i === "cim4"  || i === "cim5"  || i === "cim6"  || i === "cim7"  || i === "cim8"){
          txt += `<h3> ${cikkek[i]}</h3>`
        }
        else if (i.indexOf("bekezdes")>=0 /* === "bekezdes1"  || i === "bekezdes2"  || i === "bekezdes3"  || i === "bekezdes4"  || i === "bekezdes5"  || i === "bekezdes6"  || i === "bekezdes7"  || i === "bekezdes8"  || i === "bekezdes9"  || i === "bekezdes10"  || i === "bekezdes11"  || i === "bekezdes112"  || i === "bekezdes13"  || i === "bekezdes14"  || i === "bekezdes15"  || i === "bekezdes16"  || i === "bekezdes17"  || i === "bekezdes18"  || i === "bekezdes19"*/){
          txt += `<span> ${cikkek[i]}</span><br>`
        }
        else if (i === "link1"){
          txt += `<span> ${cikkek[i]}</span>`
        }
        else if (i.indexOf("kep")>=0){
          txt += "<img src=\""+cikkek[i]+"\" width= 100px height= 100 px><br>"
          // FTH_cikkek/hulladek_mentes_vasarlas/adagoló.jpg
         
        }
        else if (i.indexOf("fels")>=0){
          //txt += `<ul> ${cikkek[i]}</ul><br>`
         /* txt += '<ul>';
          for (const x in i.indexOf("fels")!=0){
            txt += `<li><span>${(x.indexOf("fels")>=0)[x.indexOf("fels")>=0]}</span><span> ${(x.indexOf("fels")>=0)[x.indexOf("fels")>=0]}</span><br>`
          }
          txt += '</ul>';*/
          const lista=cikkek[i];          
          //console.log(Object.keys(lista));
          for (const n in lista) {
            //console.log(n);
            txt += "<li><span>"+lista[n]+"</span></li>";
          }
          /*cikkek[i].forEach(function  (n){
            console.log(n);
          })*/
        }
      }
      //txt += `<span> ${cikkek[i]}</span><br>`
        }        
        txt +=''
    });
    console.log(txt)
    $('footer')[0].innerHTML = txt
}