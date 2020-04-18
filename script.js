function showFilm(filminput, section) {

  var film = document.getElementById(filminput);
  console.log(typeof(filminput))
  console.log(typeof(film))
  var menu = document.getElementById(section);
  console.log(typeof(menu))
  menu.style.display = "none";
  film.style.display = "block";
} 


function backToMenu(filminput, section){
  var film = document.getElementById(filminput);
  var menu = document.getElementById(section);
  menu.style.display = "block";
  film.style.display = "none";
}