function resetQuiz() {
    document.getElementById("quiz-form").reset();
}

function submitQuiz() {
    const answers = [
        "HyperText Markup Language",
        "Cascading Style Sheets",
        "JavaScript",
        "1991",
        "getElementById",
        "console.log",
        "CSS",
        "Hypertext Transfer Protocol",
        "Document Object Model",
        "Web Development"
    ];

    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
        if (selectedOption && selectedOption.value === answers[i]) {
            score++;
        }
    }


    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
}
