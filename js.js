var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

var burger = document.querySelector(".burger"),
    nav = document.querySelector(".nav")

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-open")
    
})
