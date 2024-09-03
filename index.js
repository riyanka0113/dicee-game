
var image1 = document.querySelectorAll("img")[0];

var randomNumber1,randomNumber2;

image1.addEventListener("click", function() {select1()});

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.onclick = function() {select1()};

/*for(var i=0;i<image.length;i++)
{
image[i].addEventListener("click",select(i));
}*/

function select1()
{

randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png

image1.setAttribute("src", randomImageSource);

image1.style.pointerEvents = 'none';
image2.style.pointerEvents = 'auto';

image2.onclick = function() {select2();win();};

}

function select2()
{

randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

image2.setAttribute("src", randomImageSource2);

}

function win()
{
//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
image2.style.pointerEvents = 'none';

setTimeout(function() {document.querySelector("h1").innerHTML = "Display winner player";}, 1500);

image1.style.pointerEvents = 'auto';

}