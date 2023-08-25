const bar = document.getElementById("bar");
const closebutton = document.getElementById("close");
const nav = document.getElementById("navbar");


if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (closebutton) {
  closebutton.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}








const readButtons = document.querySelectorAll('.Read-more');

readButtons.forEach(buttons => {
  const rest = buttons.nextElementSibling;
  buttons.addEventListener('click' , function(){
    rest.style.display = 'block';
  });
});

const readlessButtons = document.querySelectorAll('.Read-less');

readlessButtons.forEach(buttons => {
  const rest = buttons.previousElementSibling;
  buttons.addEventListener('click' , function(){
    rest.style.display = 'none';
  });
});