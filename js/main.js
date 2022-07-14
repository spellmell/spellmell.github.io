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