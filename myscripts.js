window.onscroll = function() {
const scroll = window.pageYOffset;
  if (scroll > 0) {
    document.getElementById("navbar").classList.add("floatingNav");
  }
  else {
    document.getElementById("navbar").classList.remove("floatingNav");
  }
}
