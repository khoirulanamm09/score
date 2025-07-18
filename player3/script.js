let scores = [0, 0, 0];

function startGame() {
  const names = [
    document.getElementById("name1").value || "Pemain 1",
    document.getElementById("name2").value || "Pemain 2",
    document.getElementById("name3").value || "Pemain 3"
  ];

  document.getElementById("player1Name").textContent = names[0];
  document.getElementById("player2Name").textContent = names[1];
  document.getElementById("player3Name").textContent = names[2];

  document.getElementById("scoreboard").style.display = "flex";
  document.getElementById("resetArea").style.display = "block";
}

function addScore(playerNumber, point) {
  const index = playerNumber - 1;
  scores[index] = Math.max(0, scores[index] + point);
  document.getElementById("score" + playerNumber).textContent = scores[index];
}

function resetScore() {
  scores = [0, 0, 0];
  for (let i = 1; i <= 3; i++) {
    document.getElementById("score" + i).textContent = "0";
  }
}
