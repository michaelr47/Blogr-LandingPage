const windowScreen = () => { 
    let width = window.innerWidth;
    console.log(width);
  }
  
  // Getting the width of the browser whenever the screen resolution changes.
  window.addEventListener('resize', windowScreen);
