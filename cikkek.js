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
        txt += ''

    for (const i in cikkek) {
      console.log(i)
      if (i != "id") {
        if (i.indexOf("foCim")>=0) {
          txt += `<div class="Focim"><h2> ${cikkek[i]}</h2></div>`
        }
        else if (i.indexOf("cim")>=0){
          txt += `<div class="cim"><h3> ${cikkek[i]}</h3></div>`
        }
        else if (i.indexOf("bekezdes")>=0 /* === "bekezdes1"  || i === "bekezdes2"  || i === "bekezdes3"  || i === "bekezdes4"  || i === "bekezdes5"  || i === "bekezdes6"  || i === "bekezdes7"  || i === "bekezdes8"  || i === "bekezdes9"  || i === "bekezdes10"  || i === "bekezdes11"  || i === "bekezdes112"  || i === "bekezdes13"  || i === "bekezdes14"  || i === "bekezdes15"  || i === "bekezdes16"  || i === "bekezdes17"  || i === "bekezdes18"  || i === "bekezdes19"*/){
          txt += `<div class="bekezdes"><span> ${cikkek[i]}</span><br></div>`
        }
        else if (i === "link1"){
          txt += `<div class="link"><span> ${cikkek[i]}</span></div>`
        }
        else if (i === "szerzo"){
          txt += `<div class="szerzo"><span> ${cikkek[i]}</span></div>`
        }
        else if (i.indexOf("kep")>=0){
          txt += "<img src=\""+cikkek[i]+"\" width= 100px height= 100 px><br>";
          //txt += "<div class="kep"><img src=\""+cikkek[i]+"\" width= 100px height= 100 px><br></div>";
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
            //txt += '<div class="kep"><li><span>"+lista[n]+"</span></li></div>';
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
    $('article')[0].innerHTML = txt
}