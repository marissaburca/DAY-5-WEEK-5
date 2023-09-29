const motoUp = document.getElementById("capo")
motoUp.addEventListener("scrollY", (y) => {
  if (y > 410) {
    motoUp.classList.add("blanc");
  } else {
    motoUp.removeClass("blanc");
  }
})
