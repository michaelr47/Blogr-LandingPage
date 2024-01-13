const hamburgerIcon = document.querySelector('.hamburgerIcon');
const loginLink = document.querySelector('.loginLink');
const signUpBtn  = document.querySelector('.signUpButton');
// let navList = document.querySelectorAll('li:not(:first-child)');

const windowWidth = () => { 
    let width = window.innerWidth;

    hamburgerIcon.style.display = 'inline';
    loginLink.classList.add('hidden');
    signUpBtn.classList.add('hidden');
    
    if (width >= 992) {
      hamburgerIcon.style.display = 'none';
      loginLink.classList.remove('hidden');
      signUpBtn.classList.remove('hidden');
    }
    
    
  }
  
  hamburgerIcon.addEventListener('click', () => {
    let navPopupMenu = document.querySelectorAll('.navPopupMenu');
  })


  
  window.addEventListener('resize', windowWidth);
  document.addEventListener('DOMContentLoaded', windowWidth);