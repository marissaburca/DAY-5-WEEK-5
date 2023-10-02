const motoUp = document.getElementById('capo');
const changeC = document.getElementById('tap');

window.onscroll = function(){
  if(document.documentElement.scrollTop >320){
    motoUp.classList.add('blanc')
    changeC.classList.add('vd')
  } else {
    motoUp.classList.remove('blanc')
    changeC.classList.remove('vd')
  }
}



/* const emme = () => {
  const elements0 = document.querySelectorAll("svg > g > g > g[opacity='0']");
  const elements1 = document.querySelectorAll("svg > g > g > g[opacity='1']");

  let rnd = Math.floor(Math.random() * elements0.length);
  elements0[rnd].setAttribute("opacity", "1");

  rnd = Math.floor(Math.random() * elements1.length);
  elements1[rnd].setAttribute("opacity", "0");
};

setInterval(emme, 200);
 */
const emme = () => {
  const elements = Array.from(document.querySelectorAll("svg > g > g > g[opacity='1']"));
  const shuffledElements = elements.sort(() => Math.random() - 0.5);
  const selectedElements = shuffledElements.slice(0, 30);

  anime({
    targets: selectedElements,
    opacity: [1, 0],
    duration: 8000,
    delay: anime.stagger(8000 / selectedElements.length),
    direction: "normal",
    loop: false
  });

  anime({
    targets: elements.filter((element) => !selectedElements.includes(element)),
    opacity: [0, 1],
    duration: 4000,
    delay: anime.stagger(4000 / (elements.length - selectedElements.length)),
    direction: "normal",
    loop: true
  });
};

setInterval(emme, 200);


