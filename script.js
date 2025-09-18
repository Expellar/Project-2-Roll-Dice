function rolldice() {
  var num1 = Math.floor(Math.random() * 6) + 1;
  var num2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").src = "images/dice" + num1 + ".png";
  document.querySelector(".img2").src = "images/dice" + num2 + ".png";


  for(let i = 1; i <= 6; i++){
    console.log(num1, num2);
  }

  if (num1 > num2) {
        document.getElementById("title").textContent = "Player 1 Wins!";
    } 
  else if (num2 > num1) {
        document.getElementById("title").textContent = "Player 2 Wins!";
    } 
  else {
        document.getElementById("title").textContent = "Draw!";
    }
}

document.getElementById("button").onclick = rolldice



