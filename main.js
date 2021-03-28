// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program
let panacek = document.querySelector("#panacek")
let mince = document.querySelector("#mince");

startTop = panacek.style.top = "50vh"; 
startLeft = panacek.style.left = "50vw";



function pohybPanacka() {

  let stiskKlavesy = document.addEventListener("keydown", function udalost(event) {

    let hudba = document.querySelector ("#hudba")
    let zvukmince = document.querySelector ("#zvukmince")
    let zvukfanfara = document.querySelector ("#zvukfanfara")
    

    hudba.play()
       
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

    panacekSirka = 64;
    panacekVyska = 70;
    minceSirka = 36;
    minceVyska = 36;

    let polohaMince = mince.getBoundingClientRect()
    minceX = polohaMince.left;
    minceY = polohaMince.top;

    
    
    function pocitadlo() {

      let skore = document.querySelector ("#score")
    
    if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
    mince.style.top = (Math.floor(Math.random() * (window.innerHeight + 1 - 36)) ) + "px";
     
    mince.style.left = (Math.floor(Math.random() * (window.innerWidth + 1 - 36)) ) + "px";
    
    let coins = ["mince.png", "mince-stribrna.png", "mince-bronzova.png"]
    let number = Math.floor(Math.random() * coins.length);
    let word = coins[number];
    mince.src = "obrazky/" + word;
    
    zvukmince.play()

    skore.textContent = parseInt(skore.textContent) + 1;
   
    if (skore.textContent == 5) {
      zvukfanfara.play();
      alert("Gratulujeme! Vyhral/a si.");}
    }
    }
    pocitadlo()

  
  
    
  
})}
pohybPanacka()

function pohybMince() {
  let minceY = mince.style.top = (Math.floor(Math.random() * (window.innerHeight - 36)) + 1) + "px";
  let minceX = mince.style.left = (Math.floor(Math.random() * (window.innerWidth - 36)) + 1) + "px";
}
pohybMince()


  
