const themeButton = document.getElementById("themeButton") ;
const body = document.body ;
const theme = localStorage.getItem("theme") ; //caching
const themeText = document.getElementById("theme-text");
const lightIcon = document.getElementById("lightIcon");

if(theme) {
  body.classList.add(theme) ;
  themeText.innerHTML = theme;
}
else {
  body.classList.add("Light");
  localStorage.setItem("theme", "Light") ;
  themeText.innerHTML = "Light";
}

themeButton.onclick = () => {
  if (theme === "Light") {
    localStorage.setItem("theme", "Dark");
    themeText.innerHTML = "Dark";
    lightIcon.classList.toggle("lightPressed") ;
  } else {
    localStorage.setItem("theme", "Light");
    themeText.innerHTML = "Light";
  }
  body.classList.toggle("Light");
  body.classList.toggle("Dark");
  } ;