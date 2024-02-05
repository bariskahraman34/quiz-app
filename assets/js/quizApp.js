const subjectLinks = document.querySelectorAll('.subject-link');
const container = document.querySelector('.container');
const toggleContainer = document.querySelector('.toggle-container');

for (const link of subjectLinks) {
    link.addEventListener('click',getSubject);
}

function getSubject(){
    let subject = this.id;
    return getQuestions(subject);
}

function getQuestions(subject){
    if(subject === "html"){
        return htmlQuestions();
    }else if(subject === "css"){
        return cssQuestions();
    }else if(subject === "js"){
        return jsQuestions();
    }else if(subject === "accessibility"){
        return accessibiltyQuestions();
    }
}

function htmlQuestions(){
    const jsonFilePath = 'assets/json/html.json';
    return createQuestions(jsonFilePath);
}

function cssQuestions(){
    const jsonFilePath = 'assets/json/css.json';
    return createQuestions(jsonFilePath);
}

function jsQuestions(){
    const jsonFilePath = 'assets/json/js.json';
    return createQuestions(jsonFilePath);
}

function accessibiltyQuestions(){
    const jsonFilePath = 'assets/json/accessibility.json';
    return createQuestions(jsonFilePath);
}


async function createQuestions(questions){
    const response = await fetch(questions);
    const data = await response.json();
    return renderQuestions(data);
}

async function renderQuestions(data){
    for (const question of data) {
        console.log(question.soru)
    }
}