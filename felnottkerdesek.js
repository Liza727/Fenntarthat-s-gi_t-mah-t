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
      ellenorzo_gomb()
    })
}

function feldolgoz(felnottkerdesek) {
    var txt = " "
    felnottkerdesek.forEach(function  (felnottkerdesek){
        txt += ''

    for (const i in felnottkerdesek) {
/*       console.log(i) */
      if (i != "id" && i != "helyesvalasz") {
        if (i === "kerdes") {
          txt += `<h1><span> ${felnottkerdesek[i]}</span></h1>`
        }else{
          txt += `<input type='radio' name="${felnottkerdesek['id']}"><span id="kerdes">${felnottkerdesek[i]}</span><br>`
          
        }
               
          }   
      }
      txt += `<button id="btn">Ellenőrzés</button>` 
        txt +=''

    });
    
/*     console.log(txt) */
    $('article')[0].innerHTML = txt
    
     /* const truegomb = $("input"); */


}

function ellenorzo_gomb(felnottkerdesek) {
  felnottkerdesek.forEach(function  (felnottkerdesek){
  const check = document.getElementById('kerdes');
  const mehetGomb = document.getElementById('btn');
  mehetGomb.addEventListener("click",function(){
    for (const i in felnottkerdesek) {
  
    }
    

  });


});
}



