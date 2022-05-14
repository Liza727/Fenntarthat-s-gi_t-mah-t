window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }

function init(){
  $("#adult")[0].addEventListener("click",function () {
    kerdesbetoltes("felnottkerdesek.json");
  });
  $("#mschool")[0].addEventListener("click",function () {
    kerdesbetoltes("altiskkerdesek.json");
  });
  $("#hgschool")[0].addEventListener("click",function () {
    kerdesbetoltes("hightschool.json");
  });  
}

