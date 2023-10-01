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




const emme = () => {
  const elements0 = document.querySelectorAll(".mS > svg > g > g > g[opacity='0']");
  const elements1 = document.querySelectorAll(".mS > svg > g > g > g[opacity='1']");

  let rnd = Math.floor(Math.random() * elements0.length);
  elements0[rnd].setAttribute("opacity", "1");

  rnd = Math.floor(Math.random() * elements1.length);
  elements1[rnd].setAttribute("opacity", "0");
};

