// css cards1 pages switcher
function card1Switcher(page){
  const btnList = ["home","about","portfolio","contact"];
  for(let i=0;i<=btnList.length;i++){
    if(btnList[i] != page){
      $("#"+btnList[i]).css({"visibility":"collapse"});
    } else {
      $("#"+page).css({"visibility":"visible"});
    }
  }
}

// resize cards on scroll
(() => {
  let cardos = document.getElementById("card2");
  let cartres = document.getElementById("card3");
  window.addEventListener(newFunction(), function () {
    let value = window.scrollY;
    cardos.style.marginRight = `${value * 100}px`;
    cartres.style.marginRight = `${value * 100}px`;
  });

  function newFunction() {
    return 'scroll';
  }
})();