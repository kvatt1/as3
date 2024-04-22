 // JavaScript to toggle hamburger menu
  /*function navMenu() {
    var nav = document.querySelector('.small-nav');
    nav.classList.toggle('active');
  }*/

  document.getElementById('mobile-nav').addEventListener('click', function() {
    var navList = document.getElementById('nav');
    if (navList === 'nav') {
        navList.style.display = 'none';
    } 
});