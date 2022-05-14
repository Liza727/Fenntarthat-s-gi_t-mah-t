window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }
  

function init(){
    fetch("felnottkerdesek.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.kerdesek)
      feldolgoz(data.felnottkerdesek)
    })
}

function feldolgoz(felnottkerdesek) {
    var txt = " "
    felnottkerdesek.forEach(function  (felnottkerdesek){
        txt += ''

    for (const i in felnottkerdesek) {
/*       console.log(i) */
      
      if (i != "id" ) {
        if (i === "kerdes") {
          txt += `<h1><span> ${felnottkerdesek[i]}</span></h1>`
        } else if(i === "v1"){
          txt += `<input type='radio' class="trueid" name="${felnottkerdesek['id']}"><span >${felnottkerdesek['v1']}</span><br>`
        }
        else if (i === "v2"){
          txt += `<input type='radio' class="falseid1" name="${felnottkerdesek['id']}"><span >${felnottkerdesek['v2']}</span><br>`
          
        }else{
          txt += `<input type='radio' class="falseid2" name="${felnottkerdesek['id']}"><span >${felnottkerdesek['v3']}</span><br>`
        }

          }  
          
      }
      txt += `<button id="${felnottkerdesek['id']}" onclick="ellenorzo_gomb()">Ellenőrzés</button>`
      txt += `<p class="output"></p>`
        txt +=''
      
    });
    
/*     console.log(txt) */
    $('article')[0].innerHTML = txt
    
     /* const truegomb = $("input"); */


}

function ellenorzo_gomb() {
  const output = $('.output');
  const aktTrueid = $('.trueid')[event.target.id-1];
  const aktFalseid1 = $('.falseid1')[event.target.id-1];
  const aktFalseid2 = $('.falseid2')[event.target.id-1];
  var aktualiskimenet= output[event.target.id-1];
  /* console.log(event.target.id); */
  /* aktualiskimenet.innerHTML= "válasz" */
  if (aktTrueid.checked === true) {
    aktualiskimenet.innerText=`Helyes válasz`;
    console.log("Helyes válasz");
  }else if(aktFalseid1.checked === true){
    aktualiskimenet.innerText="Helytelen válasz";
    console.log("Helytelen válasz");
  }else if(aktFalseid2.checked === true){
    aktualiskimenet.innerText="Helytelen válasz";
    console.log("Helytelen válasz");
  }else{
    aktualiskimenet.innerText="Válasz a lehetőségek közül.";
  }
}



