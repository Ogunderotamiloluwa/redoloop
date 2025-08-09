
let all = `
  <div class="disappear">
   <p class="ex">X</p>
    <p class="belowex">About</p>
    <p  class="belowex">Career</p>
    <p class="belowex">Events</p>
    <p class="belowex">Products</p>
    <p class="belowex">Support</p>
  </div>
`;

let show1 = document.querySelector('.show');
let hideEl = document.querySelector('.hide');

show1.addEventListener('click', () => {
  if (hideEl.children.length > 0) {
    hideEl.innerHTML = '';
  } else {
    hideEl.innerHTML = all;
  }
});