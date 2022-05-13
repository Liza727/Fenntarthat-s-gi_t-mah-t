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
var trueid = "trueid";
var falseid = "falseid"

function feldolgoz(felnottkerdesek) {
    var txt = " "
    felnottkerdesek.forEach(function  (felnottkerdesek){
        txt += ''

    for (const i in felnottkerdesek) {
/*       console.log(i) */
      
      if (i != "id" && i != "helyesvalasz") {
        if (i === "kerdes") {
          txt += `<h1><span> ${felnottkerdesek[i]}</span></h1>`
        } else if(i != "v1"){
          txt += `<input type='radio'id="`+falseid+`"  name="${felnottkerdesek['id']}"><span >${felnottkerdesek[i]}</span><br>`
        }
        else{
          txt += `<input type='radio' id="`+trueid+`" name="${felnottkerdesek['id']}"><span >${felnottkerdesek['v1']}</span><br>`
          
        }

          }  
          
      }
      txt += `<button onclick="ellenorzo_gomb()">Ellenőrzés</button>`
      txt += `<p id="output"></p>`
        txt +=''
      
    });
    
/*     console.log(txt) */
    $('article')[0].innerHTML = txt
    
     /* const truegomb = $("input"); */


}

function ellenorzo_gomb() {
  const output = document.querySelector('#output');
  if (document.getElementById("trueid").checked === true) {
    output.innerText=`Helyes válasz`
    console.log("Helyes válasz");
  }else if(document.getElementById("falseid").checked === true){
    output.innerText="Helytelen válasz"
    console.log("Helytelen válasz");
  }else{
    output.innerText="Válasz a lehetőségek közül."
  }
}



