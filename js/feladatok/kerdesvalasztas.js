window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }

  function vonalbetolt() {
    var vonal = document.getElementsByClassName("Title2");
    for (let i = 0; i < vonal.length; i++) {
      vonal[i].style.borderBottom = "5px solid #30A0AD";
    }

  }

function init(){
  
  $("#adult")[0].addEventListener("click",function () {
    kerdesbetoltes("./json/feladatok/adultkerdesek.json");
    vonalbetolt();
  });
  $("#mschool")[0].addEventListener("click",function () {
    kerdesbetoltes("./json/feladatok/middlechoolkerdesek.json");
    vonalbetolt();
  });
  $("#hgschool")[0].addEventListener("click",function () {
    kerdesbetoltes("./json/feladatok/hightschoolkerdesek.json");
    vonalbetolt();
  });  
}

