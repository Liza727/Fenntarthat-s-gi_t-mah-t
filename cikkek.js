window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }

function init(){
    fetch("cikkek.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data.kerdesek)
      feldolgoz(data.cikkek)
    })
}

function feldolgoz(cikkek) {
    var txt = " "
    cikkek.forEach(function  (cikkek){
        txt += '<h1>'

    for (const i in cikkek) {
      txt += `<span> ${cikkek[i]}</span><br>`
        }
        
        txt +='</h1>'
    });
    console.log(txt)
    $('article')[0].innerHTML = txt
}