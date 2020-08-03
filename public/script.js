const themeButton = document.getElementById("themeButton") ;
const body = document.body ;
const theme = localStorage.getItem("theme") ; //caching
const themeText = document.getElementById("theme-text");
const lightIcon = document.getElementById("lightIcon");

if(theme) {
  body.classList.add(theme) ;
}
else {
  body.classList.add("Light");
  localStorage.setItem("theme", "Light") ;
}

themeButton.onclick = () => {
  if (theme === "Light") {
    localStorage.setItem("theme", "Dark");
    lightIcon.classList.add("lightPressed") ;
  } else {
    localStorage.setItem("theme", "Light");
    lightIcon.classList.remove("lightPressed");
  }
  body.classList.toggle("Light");
  body.classList.toggle("Dark");
  } ;