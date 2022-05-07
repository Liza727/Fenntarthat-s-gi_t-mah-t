window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }

function init(){
    fetch("kerdesek.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.kerdesek)
      feldolgoz(data.kerdesek)
    })
}

function feldolgoz(kerdesek) {
    var txt = " "
    kerdesek.forEach(function  (kerdesek){
        txt += '<h1>'

    for (const i in kerdesek) {
      console.log(i)
      if (i != "id") {
        if (i === "kerdes") {
          txt += `<span> ${kerdesek[i]}</span><br>`
        }else{
          txt += `<input type='radio' name="${kerdesek['id']}"><span> ${kerdesek[i]}</span><br>`
        }
          }
      }
        
        txt +='</h1>'
    });
    console.log(txt)
    $('article')[0].innerHTML = txt
}