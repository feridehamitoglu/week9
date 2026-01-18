const rollBtn = document.getElementById("rollBtn");
const diceImg1 = document.getElementById("dice1");
const diceImg2 = document.getElementById("dice2");
const resultText = document.getElementById("result");

rollBtn.addEventListener("click", () => {
  rollBtn.disabled = true; // spam click engelle
  resultText.textContent = "Rolling... 🎲";

  let rollInterval = setInterval(() => {
    const temp1 = Math.floor(Math.random() * 6) + 1;
    const temp2 = Math.floor(Math.random() * 6) + 1;

    diceImg1.src = `images/dice${temp1}.png`;
    diceImg2.src = `images/dice${temp2}.png`;
  }, 100); // 0.1 saniyede bir değişsin

  setTimeout(() => {
    clearInterval(rollInterval);

    const final1 = Math.floor(Math.random() * 6) + 1;
    const final2 = Math.floor(Math.random() * 6) + 1;

    diceImg1.src = `images/dice${final1}.png`;
    diceImg2.src = `images/dice${final2}.png`;

    if (final1 > final2) {
      resultText.textContent = "🚩 Player 1 Wins!";
    } else if (final2 > final1) {
      resultText.textContent = "Player 2 Wins! 🚩";
    } else {
      resultText.textContent = "Draw! 🤝";
    }

    rollBtn.disabled = false;
  }, 1500); // 1.5 saniye sonra dur
});
