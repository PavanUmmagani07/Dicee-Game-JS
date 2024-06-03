var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1*6)+1);


var randomImage = "dice"+randomNumber1+".png"
var imageSource  = "images/"+randomImage;
var image1 =  document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSource);


var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2*6)+1);

var randomImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

function playerWin() {
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins!"
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").textContent = "Player 2 Wins!"
    }
    else{
        document.querySelector("h1").textContent = "DRAW!"
    }


}
playerWin();

