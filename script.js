const hamburgerIcon = document.querySelector('.hamburgerIcon');
const loginLink = document.querySelector('.loginLink');
const signUpBtn  = document.querySelector('.signUpButton');
// let navList = document.querySelectorAll('li:not(:first-child)');
const mobileNavItems = Array.from(document.querySelectorAll('.navPopupMenu ul li'));

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
  let navPopupMenu = document.querySelector('.navPopupMenu');
  navPopupMenu.style.display = (navPopupMenu.style.display === 'none') ? 'block' : 'none';
});

const toggleMobileNavItem = item => {
  item.addEventListener('click', () => {
    let itemContents = item.querySelector('.sub-nav-items');
    itemContents.style.display = (itemContents.style.display === 'none') ? 'block' : 'none';
  });
};

for (const item of mobileNavItems) {
  toggleMobileNavItem(item);
}
window.addEventListener('resize', windowWidth);
document.addEventListener('DOMContentLoaded', windowWidth);
