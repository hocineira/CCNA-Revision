// Variables globales
let currentQuestionIndex = 0;
let selectedQuestions = [];
let userAnswers = {};
let studentName = '';
const TOTAL_QUESTIONS = 60;
const PASSING_SCORE = 70;

// Éléments DOM
const homePage = document.getElementById('home-page');
const examPage = document.getElementById('exam-page');
const resultsPage = document.getElementById('results-page');
const startExamBtn = document.getElementById('start-exam');
const studentNameInput = document.getElementById('student-name');
const questionContainer = document.getElementById('question-container');
const questionCounter = document.getElementById('question-counter');
const studentDisplay = document.getElementById('student-display');
const progressBar = document.getElementById('progress');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const questionDots = document.getElementById('question-dots');

// Fonctions utilitaires
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function selectRandomQuestions() {
    const shuffled = shuffleArray(questionsDB);
    return shuffled.slice(0, TOTAL_QUESTIONS);
}

function showPage(page) {
    homePage.classList.remove('active');
    examPage.classList.remove('active');
    resultsPage.classList.remove('active');
    page.classList.add('active');
}

// Initialiser l'examen
function initExam() {
    studentName = studentNameInput.value.trim() || 'Étudiant';
    selectedQuestions = selectRandomQuestions();
    userAnswers = {};
    currentQuestionIndex = 0;
    
    studentDisplay.textContent = studentName;
    
    createQuestionDots();
    displayQuestion();
    showPage(examPage);
}

// Créer les points de navigation
function createQuestionDots() {
    questionDots.innerHTML = '';
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.textContent = i + 1;
        dot.addEventListener('click', () => goToQuestion(i));
        questionDots.appendChild(dot);
    }
    updateDots();
}

// Mettre à jour les points de navigation
function updateDots() {
    const dots = questionDots.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('current', 'answered');
        if (index === currentQuestionIndex) {
            dot.classList.add('current');
        }
        if (userAnswers[index] !== undefined && userAnswers[index].length > 0) {
            dot.classList.add('answered');
        }
    });
}

// Afficher une question
function displayQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    const isMultiple = question.type === 'multiple';
    const inputType = isMultiple ? 'checkbox' : 'radio';
    
    // Mélanger les options pour cette question
    const optionsWithIndex = question.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    const shuffledOptions = shuffleArray(optionsWithIndex);
    
    // Stocker le mappage pour cette question
    question.shuffledOptions = shuffledOptions;
    
    let html = `
        <span class="question-type">${isMultiple ? 'Choix multiples' : 'Choix unique'}</span>
        <div class="question-text">
            <strong>Question ${currentQuestionIndex + 1}:</strong> ${question.question}
        </div>
        <div class="options-container">
    `;
    
    shuffledOptions.forEach((option, displayIndex) => {
        const isChecked = userAnswers[currentQuestionIndex]?.includes(option.originalIndex);
        html += `
            <div class="option ${isChecked ? 'selected' : ''}" data-index="${option.originalIndex}">
                <input type="${inputType}" 
                       name="question${currentQuestionIndex}" 
                       id="option${displayIndex}" 
                       value="${option.originalIndex}"
                       ${isChecked ? 'checked' : ''}>
                <label for="option${displayIndex}">${option.text}</label>
            </div>
        `;
    });
    
    html += '</div>';
    questionContainer.innerHTML = html;
    
    // Ajouter les événements aux options
    const options = questionContainer.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', () => selectOption(option, isMultiple));
    });
    
    // Mettre à jour l'interface
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${TOTAL_QUESTIONS}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100}%`;
    
    // Gérer les boutons de navigation
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === TOTAL_QUESTIONS - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
    
    updateDots();
}

// Sélectionner une option
function selectOption(optionElement, isMultiple) {
    const input = optionElement.querySelector('input');
    const optionIndex = parseInt(optionElement.dataset.index);
    
    if (!isMultiple) {
        // Pour les questions à choix unique
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        optionElement.classList.add('selected');
        input.checked = true;
        userAnswers[currentQuestionIndex] = [optionIndex];
    } else {
        // Pour les questions à choix multiples
        input.checked = !input.checked;
        optionElement.classList.toggle('selected');
        
        if (!userAnswers[currentQuestionIndex]) {
            userAnswers[currentQuestionIndex] = [];
        }
        
        if (input.checked) {
            if (!userAnswers[currentQuestionIndex].includes(optionIndex)) {
                userAnswers[currentQuestionIndex].push(optionIndex);
            }
        } else {
            userAnswers[currentQuestionIndex] = userAnswers[currentQuestionIndex].filter(i => i !== optionIndex);
        }
    }
    
    updateDots();
}

// Navigation
function goToQuestion(index) {
    currentQuestionIndex = index;
    displayQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Calculer le score
function calculateScore() {
    let correctCount = 0;
    
    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.correctAnswers;
        
        // Vérifier si les réponses sont identiques
        const isCorrect = 
            userAnswer.length === correctAnswer.length &&
            userAnswer.every(ans => correctAnswer.includes(ans)) &&
            correctAnswer.every(ans => userAnswer.includes(ans));
        
        if (isCorrect) {
            correctCount++;
        }
    });
    
    return correctCount;
}

// Afficher les résultats
function showResults() {
    const correctCount = calculateScore();
    const percentage = Math.round((correctCount / TOTAL_QUESTIONS) * 100);
    const passed = percentage >= PASSING_SCORE;
    
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const scoreDisplay = document.getElementById('score-display');
    const scoreDetails = document.getElementById('score-details');
    
    if (passed) {
        resultIcon.innerHTML = '🎉';
        resultTitle.innerHTML = `Félicitations ${studentName} !<br>Vous avez réussi l'examen !`;
        scoreDisplay.className = 'score-display pass';
    } else {
        resultIcon.innerHTML = '😔';
        resultTitle.innerHTML = `Désolé ${studentName},<br>Vous n'avez pas atteint le score minimum.`;
        scoreDisplay.className = 'score-display fail';
    }
    
    scoreDisplay.textContent = `${percentage}%`;
    scoreDetails.innerHTML = `
        <p>Score: ${correctCount}/${TOTAL_QUESTIONS} questions correctes</p>
        <p>Score minimum requis: ${PASSING_SCORE}%</p>
    `;
    
    showPage(resultsPage);
}

// Afficher les corrections
function showAnswersReview() {
    const answersReview = document.getElementById('answers-review');
    const reviewContainer = document.getElementById('review-container');
    
    let html = '';
    
    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.correctAnswers;
        
        const isCorrect = 
            userAnswer.length === correctAnswer.length &&
            userAnswer.every(ans => correctAnswer.includes(ans)) &&
            correctAnswer.every(ans => userAnswer.includes(ans));
        
        html += `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="review-question">
                    <strong>Question ${index + 1}:</strong> ${question.question}
                    <span style="float: right; font-size: 1.5rem;">${isCorrect ? '✅' : '❌'}</span>
                </div>
        `;
        
        if (!isCorrect) {
            // Afficher la réponse de l'utilisateur
            if (userAnswer.length > 0) {
                html += '<div class="review-answer user-answer"><strong>Votre réponse:</strong><br>';
                userAnswer.forEach(idx => {
                    html += `• ${question.options[idx]}<br>`;
                });
                html += '</div>';
            } else {
                html += '<div class="review-answer user-answer"><strong>Votre réponse:</strong> Aucune réponse</div>';
            }
        }
        
        // Afficher la bonne réponse
        html += `<div class="review-answer ${isCorrect ? 'user-correct' : 'correct-answer'}"><strong>Réponse correcte:</strong><br>`;
        correctAnswer.forEach(idx => {
            html += `• ${question.options[idx]}<br>`;
        });
        html += '</div>';
        
        // Afficher l'explication
        if (question.explanation) {
            html += `<div class="explanation"><strong>Explication:</strong> ${question.explanation}</div>`;
        }
        
        html += '</div>';
    });
    
    reviewContainer.innerHTML = html;
    answersReview.style.display = 'block';
    
    // Scroller vers les corrections
    answersReview.scrollIntoView({ behavior: 'smooth' });
}

// Recommencer l'examen
function retryExam() {
    document.getElementById('answers-review').style.display = 'none';
    studentNameInput.value = studentName;
    showPage(homePage);
}

// Confirmation avant de quitter
function confirmSubmit() {
    const unanswered = TOTAL_QUESTIONS - Object.keys(userAnswers).filter(key => userAnswers[key]?.length > 0).length;
    
    let message = 'Êtes-vous sûr de vouloir terminer l\'examen ?';
    if (unanswered > 0) {
        message = `Attention ! Vous avez ${unanswered} question(s) sans réponse.\n\n${message}`;
    }
    
    if (confirm(message)) {
        showResults();
    }
}

// Event Listeners
startExamBtn.addEventListener('click', initExam);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
submitBtn.addEventListener('click', confirmSubmit);
document.getElementById('show-answers').addEventListener('click', showAnswersReview);
document.getElementById('retry-exam').addEventListener('click', retryExam);

// Permettre de démarrer l'examen avec Enter
studentNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        initExam();
    }
});

// Empêcher la fermeture accidentelle de la page pendant l'examen
window.addEventListener('beforeunload', (e) => {
    if (examPage.classList.contains('active')) {
        e.preventDefault();
        e.returnValue = '';
    }
});
