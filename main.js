    let score1 = 0;
    let score2 = 0;

    function startGame() {
      const name1 = document.getElementById("name1").value || "Pemain 1";
      const name2 = document.getElementById("name2").value || "Pemain 2";
      document.getElementById("player1Name").textContent = name1;
      document.getElementById("player2Name").textContent = name2;
      document.getElementById("scoreboard").style.display = "flex";
      document.getElementById("resetArea").style.display = "block";
    }

    function addScore(player, point) {
      if (player === 1) {
        score1 = Math.max(0, score1 + point);
        document.getElementById("score1").textContent = score1;
      } else {
        score2 = Math.max(0, score2 + point);
        document.getElementById("score2").textContent = score2;
      }
    }

    function resetScore() {
      score1 = 0;
      score2 = 0;
      document.getElementById("score1").textContent = score1;
      document.getElementById("score2").textContent = score2;
    }