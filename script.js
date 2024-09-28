function calculateScore() {
    const scores = [
        parseInt(document.getElementById('score1').value) || 0,
        parseInt(document.getElementById('score2').value) || 0,
        parseInt(document.getElementById('score3').value) || 0,
        parseInt(document.getElementById('score4').value) || 0,
        parseInt(document.getElementById('score5').value) || 0,
        parseInt(document.getElementById('score6').value) || 0,
        parseInt(document.getElementById('score7').value) || 0,
        parseInt(document.getElementById('score8').value) || 0,
        parseInt(document.getElementById('score9').value) || 0,
        parseInt(document.getElementById('score10').value) || 0,
        parseInt(document.getElementById('score11').value) || 0,
        parseInt(document.getElementById('score12').value) || 0,
        parseInt(document.getElementById('score13').value) || 0,
        parseInt(document.getElementById('score14').value) || 0,
        parseInt(document.getElementById('score15').value) || 0,
        parseInt(document.getElementById('score16').value) || 0,
        parseInt(document.getElementById('score17').value) || 0,
        parseInt(document.getElementById('score18').value) || 0,
        parseInt(document.getElementById('score19').value) || 0,
        parseInt(document.getElementById('score20').value) || 0
    ];

    const totalScore = scores.reduce((a, b) => a + b, 0);

    let resultText;
    if (totalScore >= 90) {
        resultText = "Final Score: " + totalScore + ". Your habits are highly sustainable!";
    } else if (totalScore >= 60) {
        resultText = "Final Score: " + totalScore + ". You're on the right path, but there's room for improvement.";
    } else {
        resultText = "Final Score: " + totalScore + ". Consider making more sustainable choices.";
    }

    document.getElementById('result').innerText = resultText;
}
