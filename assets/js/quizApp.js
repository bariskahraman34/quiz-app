const subjectLinks = document.querySelectorAll('.router');
const container = document.querySelector('.container');
const toggleContainer = document.querySelector('.toggle-container');
const containerLeftSide = document.querySelector('.container-leftside');
const containerRightSide = document.querySelector('.container-rightside');

for (const link of subjectLinks) {
    link.addEventListener('click',getSubject);
}

let subjectName;
let subjectImg;

function getSubject(e){
    e.preventDefault()
    let subject = this.id;
    subjectName = document.querySelector(`#${this.id} span`).textContent;
    subjectImg = document.querySelector(`#${this.id} img`).src;
    return getQuestions(subject);
}

function getQuestions(subject){
    if(subject === "html"){
        return getQuestions(subject);
    }else if(subject === "css"){
        return getQuestions(subject);
    }else if(subject === "js"){
        return getQuestions(subject);
    }else if(subject === "accessibility"){
        return getQuestions(subject);
    }
}

function getQuestions(subject){
    const jsonFilePath = `assets/json/${subject}.json`
    return createQuestions(jsonFilePath)
}


async function createQuestions(questions){
    const response = await fetch(questions);
    const data = await response.json();
    return renderQuestions(data);
}

let currentQuestion = 1;

function getRandomQuestions(allQuestions, numberOfQuestions) {
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, numberOfQuestions);
  }

async function renderQuestions(data){
    const randomQuestions = getRandomQuestions(data,10);
    document.querySelector('.top-bar-container').innerHTML =
    `
    <div class="subject-heading">
        <img src="${subjectImg}"/> 
        <h2>${subjectName}</h2>
    </div>
    <div class="toggle-container">
        <img src="assets/img/sun.svg" alt="">
        <label class="toggle" for="dark-mode">
            <input class="toggle-input" type="checkbox" id="dark-mode">
            <div class="toggle-fill">
            </div>
        </label>
        <img src="assets/img/moon.svg" alt="">
    </div>
    `
    for (const question of randomQuestions.slice(currentQuestion-1,currentQuestion)) {
        document.querySelector('.container-leftside').style.flexDirection = "row";
        containerRightSide.innerHTML = "";
        containerLeftSide.innerHTML = "";
        containerLeftSide.innerHTML += 
        `
        <div class="question-container">
            <div class="question-top">
                <span class="small-text">Question ${currentQuestion} of 10</span>
                <h3 class="question-text">${question.question}</h3>
            </div>
            <div class="progress-bar" style="margin-bottom:92px;">
                <div class="progress-inline" style="width:${(currentQuestion*10)}%"></div>
            </div>
        </div>
        `;
        containerRightSide.innerHTML +=
        `
        <ul class="subject-list">
            <li class="subject-element">
                <a href="#" class="subject-link">
                    <span class="option">A</span>
                    <span class="option-text">${question.answers.a}</span>
                </a>
            </li>
            <li class="subject-element">
                <a href="#" class="subject-link">
                    <span class="option">B</span>
                    <span class="option-text">${question.answers.b}</span>
                </a>
            </li>
            <li class="subject-element">
                <a href="#" class="subject-link">
                    <span class="option">C</span>
                    <span class="option-text">${question.answers.c}</span>
                </a>
            </li>
            <li class="subject-element">
                <a href="#" class="subject-link">
                    <span class="option">D</span>
                    <span class="option-text">${question.answers.d}</span>
                </a>
            </li>
        </ul>
        <button type="submit" class="submit-btn">Cevabı Kaydet</button>
        `;

        const links = document.querySelectorAll('.subject-link');
        for (const subject of links) {
            subject.addEventListener('click',function(e){
                e.preventDefault();
            })
        }
    }
}