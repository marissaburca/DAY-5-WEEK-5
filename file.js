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




const arr= []
function extractRandomGElementsFromSVG() {
  const svg = document.querySelector('svg.caos');
  const gElements = svg.querySelectorAll('g');
  const randomIndex = Math.floor(Math.random() * gElements.length);
  returnarr.push(gElements[randomIndex]);
}
console.log(extractRandomGElementsFromSVG())
const appears = ()=>{}
