document.addEventListener('DOMContentLoaded', () => {
    const choices = ['piedra', 'papel', 'tijera'];

    document.querySelectorAll('.option').forEach(button => {
        button.onclick = function() {
            const userChoice = this.dataset.choice;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            let result = '';

            if (userChoice === computerChoice) {
                result = `¡Es un empate! Ambos eligieron ${userChoice}.`;
            } else if (
                (userChoice === 'piedra' && computerChoice === 'tijera') ||
                (userChoice === 'papel' && computerChoice === 'piedra') ||
                (userChoice === 'tijera' && computerChoice === 'papel')
            ) {
                result = `¡Ganaste! ${userChoice} vence a ${computerChoice}.`;
            } else {
                result = `¡Perdiste! ${computerChoice} vence a ${userChoice}.`;
            }

            document.getElementById("result").textContent = result;
            document.getElementById("reset").style.display = "block";
        };
    });

    document.getElementById("reset").onclick = function() {
        document.getElementById("result").textContent = '';
        this.style.display = "none";
    };
});
