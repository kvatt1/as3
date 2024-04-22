 // JavaScript to toggle hamburger menu
  /*function navMenu() {
    var nav = document.querySelector('.small-nav');
    nav.classList.toggle('active');
  }*/

  document.getElementById('mobile-nav').addEventListener('click', function() {
    var navList = document.getElementById('small-nav');
    if (navList === 'small-nav') {
        navList.style.display = 'flex';
    } 
});