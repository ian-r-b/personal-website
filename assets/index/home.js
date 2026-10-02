var input = null;
this.addEventListener('keypress', event => {
  if (event.keyCode == 13) {
    input = prompt("enter a code (homepage only)");
    if (input == "peepers") {
      document.getElementById('content').style.backgroundImage = 'url(/assets/grid-bg-peeper.gif)'; 
    }
    else {
      document.getElementById('content').style.backgroundImage = 'url(/assets/grid-bg.gif)'; 
    }
  }
})