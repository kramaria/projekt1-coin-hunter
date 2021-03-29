// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


let panacek = document.querySelector("#panacek")
let mince = document.querySelector("#mince");

// startovni pozice panacka
let startTop = panacek.style.top = "50vh"; 
let startLeft = panacek.style.left = "50vw";

// nahodne umiestni mincu na zaciatku hry
let minceY = mince.style.top = (Math.floor(Math.random() * (window.innerHeight - 36)) + 1) + "px";
let minceX = mince.style.left = (Math.floor(Math.random() * (window.innerWidth - 36)) + 1) + "px";

// funkcia, ktora pusti hudbu po prvom kliknuti
function pustiHudbu() {
  hudba.play()
}

// identifikacia pozicie panacika a jeho pohyb vsetkymi smermi
function pohniPanacikom() {    
  let rect = panacek.getBoundingClientRect()
  panacekX = rect.left;
  panacekY = rect.top;

  if (event.key === "ArrowUp" && panacekY > 0) {
    panacek.style.top = (panacekY - 10) +'px';
    panacek.src = "obrazky/panacek-nahoru.png";
  }
  else if (event.key === "ArrowRight" && panacekX < window.innerWidth-64) {
    panacek.style.left = (panacekX + 10) +'px';
    panacek.src = "obrazky/panacek-vpravo.png";
  }
  else if (event.key === "ArrowDown" && panacekY < window.innerHeight-70) {
    panacek.style.top = (panacekY + 10) +'px';
    panacek.src = "obrazky/panacek.png";
  }
  else if (event.key === "ArrowLeft" && panacekX > 0) {
    panacek.style.left = (panacekX - 10) +'px';
    panacek.src = "obrazky/panacek-vlevo.png";
  }
}

// generuje zlatu, striebornu alebo bronzovu mincu
function zmenMincu() {
  let coins = ["mince.png", "mince-stribrna.png", "mince-bronzova.png"]
  let number = Math.floor(Math.random() * coins.length);
  let word = coins[number];
  mince.src = "obrazky/" + word;
}

// pocita skore a ked sa skore rovna 5, zahra zvucku a zahra fanfaru
function spocitajSkore() {
  let skore = document.querySelector ("#score")
  skore.textContent = parseInt(skore.textContent) + 1;

  if (skore.textContent == 5) {
    zvukfanfara.play();
    alert("Gratulujeme! Vyhral/a si.");}
}

// identifikuj poziciu mince, ked sa panacek a mince prekryvaji, nahodne vygeneruj novu poziciu a typ mince, zahraj zvuk, pripocitaj skore
function vezmiMincu() {

  panacekSirka = 64;
  panacekVyska = 70;
  minceSirka = 36;
  minceVyska = 36;

  // identifikacia pozicie mince
  let polohaMince = mince.getBoundingClientRect()
  minceX = polohaMince.left;
  minceY = polohaMince.top;

  // ked sa panacek a mince prekryvaji, nahodne vygeneruj novu poziciu a typ mince, zahraj zvuk, pripocitaj skore
  if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
  mince.style.top = (Math.floor(Math.random() * (window.innerHeight + 1 - 36)) ) + "px";
  
  mince.style.left = (Math.floor(Math.random() * (window.innerWidth + 1 - 36)) ) + "px";
  
  zmenMincu()

  // zahraj zvuk mince
  zvukmince.play()
  
  spocitajSkore()
  }
}


// pri stisku klavesy pusti hudbu, pohni panackem,identifikuj poziciu mince, 
// ked sa panacek a mince prekryvaji, nahodne vygeneruj novu poziciu a typ mince, zahraj zvuk, pripocitaj skore
function stiskKlavesy() {

  let stiskKlavesy = document.addEventListener("keydown", function udalost(event) {

  let hudba = document.querySelector ("#hudba")
  let zvukmince = document.querySelector ("#zvukmince")
  let zvukfanfara = document.querySelector ("#zvukfanfara")
  
  pustiHudbu()
  
  pohniPanacikom()
  
  vezmiMincu()
})}
stiskKlavesy()


  
