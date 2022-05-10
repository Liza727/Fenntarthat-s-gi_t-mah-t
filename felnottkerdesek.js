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
      console.log(i)
      if (i != "id" && i != "helyesvalasz") {
        if (i === "kerdes") {
          txt += `<h1><span> ${felnottkerdesek[i]}</span></h1>`
        }else{
          txt += `<input type='radio' name="${felnottkerdesek['id']}"><span id="kerdes">${felnottkerdesek[i]}</span><br>`
        }        
          }
      }
        txt +=''
    });
/*     console.log(txt) */
    $('article')[0].innerHTML = txt

    const truegomb = $("input")
    for (let l = 0; l < truegomb.length; l++) {
      truegomb.addEventListener("change",helyesvalaszellenorzes )
      
    }

    function helyesvalaszellenorzes() {
      
    }
}