window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }

function init(){
  $("#adult")[0].addEventListener("click",function () {
    kerdesbetoltes("adultkerdesek.json");
  });
  $("#mschool")[0].addEventListener("click",function () {
    kerdesbetoltes("middlechoolkerdesek.json");
  });
  $("#hgschool")[0].addEventListener("click",function () {
    kerdesbetoltes("hightschoolkerdesek.json");
  });  
}

