window.addEventListener('load', init)
function $(elem) {
    return document.querySelectorAll(elem)
  }

function init(){
  fetch("/json/galeria/galeria.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.galeria)
      
    })
}




//fetch data
fetch("/json/galeria/galeria.json")
.then(function (response) {
    return response.json();
})

.then(function (jsonObject){
    const galeria = jsonObject['galeria'];

//create galeria input    
    const elso = galeria.filter(x => x.id === "1");
    const masodik = galeria.filter(x => x.name === "2");
    const harmadik = galeria.filter(x => x.name === "3");
    const negyedik = galeria.filter(x => x.id === "4");
    const otodik = galeria.filter(x => x.id === "5");
    const hatodik = galeria.filter(x => x.id === "6");
    const hetedik = galeria.filter(x => x.id === "7");
    const nyolcadik = galeria.filter(x => x.id === "8");
    const kilencedik = galeria.filter(x => x.id === "9");
    const tizedik = galeria.filter(x => x.id === "10");

    const sort = [];
    sort.push(...elso, ...masodik, ...harmadik, ...negyedik, ...otodik, ...hatodik, ...hetedik,...nyolcadik,...kilencedik,...tizedik)
    console.log(sort);

   // let galeria = galeria.sort('sort');
    sort.forEach(town => {
      let card = document.createElement('div');
      let info = document.createElement('section');
      let kollekcio = document.createElement('h2');
      let keszito = document.createElement('h3');      
      let fotos = document.createElement('p'); 
      let modell = document.createElement('p');
      let mw = document.createElement('p');
      let leiras = document.createElement('p');
      let photo = document.createElement('img'); 
      let alt1photo = document.createElement('img'); 
      let alt2photo = document.createElement('img'); 

      //use template literals
      id.textContent = `ID:${galeria.id}`;
      kollekcio.textContent = `Kollekció:${galeria.kollekcio}`;
      fotos.textContent = `Fotós: ${galeria.fotos}`;
      keszito.textContent = `${galeria.keszito}`;
      modell.textContent = `Modell: ${galeria.modell}`;
      mw.textContent = `Modell: ${galeria.mw}`;
      leiras.textContent = `Leírás: ${galeria.leiras}`;
      photo.src = `galeria/${galeria.photo}`;
      alt1photo.src = `galeria/${galeria.tovabbikepek1}`;
      alt2photo.src = `galeria/${galeria.alt2photo}`;
  
      card.append(info);
      info.append(kollekcio);
      info.append(keszito);
      info.append(fotos);
      info.append(modell);  
      info.append(mw);  
      info.append(leiras);
      card.append(photo);  
      card.append(alt1photo);  
      card.append(alt2photo);  
      document.querySelector(".galeria").appendChild(card);
    });
})