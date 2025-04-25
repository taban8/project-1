const movie = document.getElementById("movie");

function playAgain() {
  movie.currentTime = 0;
  movie.play();
}

function pauseVideo() {
  movie.pause();
}

function rateMovie() {
  alert("Thank you for rating Taban Theater! ⭐⭐⭐⭐⭐");
}