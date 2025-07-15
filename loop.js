
    function showMenu() {
  document.querySelector('.hiddennav').innerHTML = `
    <nav>About</nav>
    <nav>Carieer</nav>
    <nav>Event</nav>
    <nav>Product</nav>
    <nav>Support</nav>
  `;
}

let show1 = false;

document.addEventListener('click', () => {
  if (!show1) {
    showMenu();
    show1 = true;
  } else {
    // Optional: clear the menu or toggle differently
    document.querySelector('.hiddennav').innerHTML = '';
    show1 = false;
  }
})
   