window.onload = function() {
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  initSlider();
}
var player1;
var player2;
var player3;
function onYouTubePlayerAPIReady() {
            player1 = new YT.Player('player1', {
              videoId: 'oMFxQsaT274',
              playerVars: { 'autoplay': 1, 'controls': 0,'origin':'http://localhost:3000' }//Поменять автоплей
             });
             player2 = new YT.Player('player2', {
               videoId: 'YE7VzlLtp-4',
               playerVars: { 'autoplay': 0, 'controls': 0,'origin':'http://localhost:3000' }
             });
             player3 = new YT.Player('player3', {
               videoId: 'dQw4w9WgXcQ',
               playerVars: { 'autoplay': 0, 'controls': 0,'origin':'http://localhost:3000' }
             });
             window.addEventListener('scroll', function() {
               player1.pauseVideo();
               player2.pauseVideo();
               player3.pauseVideo();
             });
           }
function initSlider() {
  let strip = document.getElementById('strip');
  let left = 0;
  document.getElementById('slider-left').onclick = sliderleft;
  document.getElementById('slider-right').onclick = sliderright;
  [...document.getElementsByClassName('slider-dots_item')].forEach((f, i) => f.onclick = () => currentSlide(i + 1));

  function sliderleft() {
    left = left - 100;
    if (left < -200) {
      left = 0;
    }
    strip.style.left = left + '%';
    if(left == 0){
      player1.playVideo();
      player2.pauseVideo();
      player3.pauseVideo();
      document.getElementById('slider-right').style.opacity = "0.3";

    }else {
      document.getElementById('slider-right').style.opacity = "1";
    }
    if(left == -100){
      player2.playVideo();
      player1.pauseVideo();
      player3.pauseVideo();
    }else {

    }
    if(left == -200){
      player3.playVideo();
      player2.pauseVideo();
      player1.pauseVideo();
      document.getElementById('slider-left').style.opacity = "0.3";
    }else {
      document.getElementById('slider-left').style.opacity = "1";
    }
    strip.style.left = left + '%';
  }

  function sliderright() {
    left = left + 100;
    if (left > 0) {
      left = -200;
    }
    strip.style.left = left + '%';
    if(left == -200){
      player3.playVideo();
      player2.pauseVideo();
      player1.pauseVideo();
      document.getElementById('slider-left').style.opacity = "0.3";
    }else {
      document.getElementById('slider-left').style.opacity = "1";
    }
    if(left == -100){
      player2.playVideo();
      player1.pauseVideo();
      player3.pauseVideo();
    }else {

    }
    if(left == 0){
      player1.playVideo();
      player2.pauseVideo();
      player3.pauseVideo();
      document.getElementById('slider-right').style.opacity = "0.3";
    }else {
      document.getElementById('slider-right').style.opacity = "1";
    }

  }
  /////////////////////////////////////////////////
  let slideIndex = 1;
  showSlides(slideIndex);

  function currentSlide(n) {

    showSlides(slideIndex = n);
    if (n == 1) {
      left = 0;
      document.getElementsByClassName('slider-dots_item')[n].classList.remove("active");
      document.getElementsByClassName('slider-dots_item')[n+1].classList.remove("active");
      document.getElementsByClassName('slider-dots_item')[n-1].classList.add("active");
      player1.playVideo();
      player2.pauseVideo();
      player3.pauseVideo();
    }
    if (n == 2) {
      left = -100;
      document.getElementsByClassName('slider-dots_item')[n-2].classList.remove("active");
      document.getElementsByClassName('slider-dots_item')[n].classList.remove("active");
      document.getElementsByClassName('slider-dots_item')[n-1].classList.add("active");
      player2.playVideo();
      player1.pauseVideo();
      player3.pauseVideo();
    }
    if (n == 3) {
      left = -200;
      document.getElementsByClassName('slider-dots_item')[n-3].classList.remove("active");
      document.getElementsByClassName('slider-dots_item')[n-2].classList.remove("active");
      document.getElementsByClassName('slider-dots_item')[n-1].classList.add("active");
      player3.playVideo();
      player2.pauseVideo();
      player1.pauseVideo();
    }


  }

  function showSlides(n) {
    let i;
    let slideIndex = 1;
    let slides = document.getElementsByClassName("video");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n == 1) {
      left = 0;
    }
    if (n == 2) {
      left = -100;
    }
    if (n == 3) {
      left = -200;
    }
    strip.style.left = left + '%';
    /*for(let i=0;i<slides.length; i++){
      slides[i].style.display="none";
    }*/
    for (let i = 0; i < dots.length; i++) {
      /*dots[i].className= dots[i].className.replace("","active");*/
      /*slides[i].style.display = "block";*/
      /*dots[i].className+="active";*/
    }
  }

}
