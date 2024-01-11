const hamburgerIcon = document.querySelector('.hamburgerIcon');
const loginLink = document.querySelector('.loginLink');
const signUpBtn  = document.querySelector('.signUpButton');

const windowScreen = () => { 
    let width = window.innerWidth;

    hamburgerIcon.style.display = 'inline';
    loginLink.classList.add('hidden');
    signUpBtn.classList.add('hidden');
    
    if (width > 992) {
      hamburgerIcon.style.display = 'none';
      loginLink.classList.remove('hidden');
      signUpBtn.classList.remove('hidden');
    }

   
  }

  window.addEventListener('resize', windowScreen);
  document.addEventListener('DOMContentLoaded', windowScreen);