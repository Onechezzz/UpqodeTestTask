document.getElementById('slider-left').onclick = sliderleft;
document.getElementById('slider-right').onclick = sliderright;
document.getElementsByClassName('slider-dots_item').onclick = currentSlide;

let left = 0;


window.onload = function(){

  if(left == 0){
    document.getElementById('slider-right').style.opacity = "0.3";
    document.getElementsByClassName('slider-dots_item')[slideIndex-1].classList.add("active");

  }

}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




var player1;
var player2;
var player3;
function onYouTubePlayerAPIReady() {
            player1 = new YT.Player('player1', {
              videoId: '7fAvYHAlDOE',
              playerVars: { 'autoplay': 1, 'controls': 0 }
             });
             player2 = new YT.Player('player2', {
               videoId: 'YE7VzlLtp-4'
             });
             player3 = new YT.Player('player3', {
               videoId: 'dQw4w9WgXcQ'
             });

           }

let strip = document.getElementById('strip');

function startNewVideo() {
    player1.playVideo();
}

function sliderleft(){

  left = left - 1925;
  if (left < -3850 ){
    left = 0;

  }
  if(left == 0){
    player1.playVideo();
    player2.pauseVideo();
    player3.pauseVideo();
    document.getElementById('slider-right').style.opacity = "0.3";

  }else {
    document.getElementById('slider-right').style.opacity = "1";
  }
  if(left == -1925){
    player2.playVideo();
    player1.pauseVideo();
    player3.pauseVideo();
  }else {

  }
  if(left == -3850){
    player3.playVideo();
    player2.pauseVideo();
    player1.pauseVideo();
    document.getElementById('slider-left').style.opacity = "0.3";
  }else {
    document.getElementById('slider-left').style.opacity = "1";
  }
strip.style.left = left + 'px';
}



function sliderright(){

  left = left + 1925;
  if (left > 0 ){
    left = -3850;
  }
  if(left == -3850){
    player3.playVideo();
    player2.pauseVideo();
    player1.pauseVideo();
    document.getElementById('slider-left').style.opacity = "0.3";
  }else {
    document.getElementById('slider-left').style.opacity = "1";
  }
  if(left == -1925){
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
  strip.style.left = left + 'px';

}
/////////////////////////////////////////////////

let slideIndex = 1;

showSlides(slideIndex);
function currentSlide(n){
  showSlides(slideIndex = n);
  if(n == 1){
    left = 0;
    /*document.getElementsByClassName('slider-dots_item')[n-1].addClass('active') = '#564A84';*/
    document.getElementsByClassName('slider-dots_item')[n].classList.remove("active");
    document.getElementsByClassName('slider-dots_item')[n+1].classList.remove("active");
    document.getElementsByClassName('slider-dots_item')[n-1].classList.add("active");
    player1.playVideo();
    player2.pauseVideo();
    player3.pauseVideo();
  }
  if(n == 2){
    left = -1925;
    document.getElementsByClassName('slider-dots_item')[n-2].classList.remove("active");
    document.getElementsByClassName('slider-dots_item')[n].classList.remove("active");
    document.getElementsByClassName('slider-dots_item')[n-1].classList.add("active");
    player2.playVideo();
    player1.pauseVideo();
    player3.pauseVideo();
  }
  if(n == 3){
    left = -3850;
    document.getElementsByClassName('slider-dots_item')[n-3].classList.remove("active");
    document.getElementsByClassName('slider-dots_item')[n-2].classList.remove("active");
    document.getElementsByClassName('slider-dots_item')[n-1].classList.add("active");
    player3.playVideo();
    player2.pauseVideo();
    player1.pauseVideo();
  }
  strip.style.left = left + 'px';
}

function showSlides(n){
  let i;
  let slideIndex = 1;
  let slides = document.getElementsByClassName("strip");
  /*let dots = document.getElementsByClassName("dot");*/

  if(n == 1){
    left = 0;

  }
  if(n == 2){
    left = -1925;

  }
  if(n == 3){
    left = -3850;

  }
  for(let i=0;i<slides.length; i++){
    slides[i].style.display="none";

  }



}

window.addEventListener('scroll', function() {
  player1.pauseVideo();
  player2.pauseVideo();
  player3.pauseVideo();

});






























/*let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length){
    slideIndex = 1
  }
  if(n<1){
    slideIndex = slides.length;
  }
  for(i=0;i<slides.length;i++){
    slides[i].style.display="none";
  }
  for(i = 0; i < dots.length;i++){
    dots[i].className= dots[i].className.replace("active","");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className+="active";
}*/
