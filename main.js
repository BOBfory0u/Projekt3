const meny = document.querySelector("#fall-meny");
const länkar = document.querySelector(".nav-meny");
const navLogo = document.querySelector("#nav-logo");

// Öpnna fallande menyn
const fallMeny = () => {
  meny.classList.toggle("is-active");
  länkar.classList.toggle("active");
};

meny.addEventListener("click", fallMeny);

// Visa vilken del av sidan man är på när man scrollar. Genom en outline
const highlightMenu = () => {
  const lys = document.querySelector(".highlight");
  const hemMeny = document.querySelector("#sektion_1");
  const omMeny = document.querySelector("#sektion_2");
  const serviceMeny = document.querySelector("#sektion_3");
  let scrollPos = window.scrollY;

  // Skapar fram 'highlight' klassen till mina meny rubriker
  if (window.innerWidth > 960 && scrollPos < 600) {
    hemMeny.classList.add("highlight");
    omMeny.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1300) {
    omMeny.classList.add("highlight");
    hemMeny.classList.remove("highlight");
    serviceMeny.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2500) {
    serviceMeny.classList.add("highlight");
    omMeny.classList.remove("highlight");
    return;
  }

  if ((lys && window.innerWidth < 960 && scrollPos < 600) || lys) {
    lys.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//Stänger av menyn när, man trycker på en av sidorna. (Vid liten skärm)
const hideMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 760 && menuBars) {
    meny.classList.toggle("is-active");
    länkar.classList.remove("active");
  }
}
länkar.addEventListener("click", hideMenu);
navLogo.addEventListener("click", hideMenu);
