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
    for (const key in kerdesek) {
      txt += `<span> ${kerdesek[key]}</span><br>`
        }
        txt +='</h1>'
    });
    console.log(txt)
    $('article')[0].innerHTML = txt
}