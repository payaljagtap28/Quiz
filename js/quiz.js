const quizContainer = document.getElementById('quiz_container');
const category = document.getElementById('category');
const question = document.getElementById('question');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option1');
const option3 = document.getElementById('option1');
const option4 = document.getElementById('option1');
const answer = document.getElementById('answer');
const explain = document.getElementById('explain');

const url = new URL(window.location.href);
const cat = url.searchParams.get('cat');
const topic = url.searchParams.get('topic');
category.innerHTML = `${cat} : ${topic}`

function getQuestions(to){
    switch(to){
        case "hcf":
            return hcf;
        case 'number':
            return numbers;
        case "calender":
            return calender;
        case "anologies":
            return anologies;
        case 'number_series':
            return number_series;    
        case "letter_series":
            return letter_series;
        case 'essential_part':
            return essential_part;
        case "gk":
            return gk;
        case "antonyms":
            return antonyms;
        case "syntonyms":
            return syntonyms;      
        case "banking":
            return banking;
        case "september_2022":
            return september_2022;
        case "decimal_fraction":
            return decimal_fraction;          
        default: category.innerHTML = `${cat} : Topics Not Found !`;
    }
}

for(let obj = 0; obj<getQuestions(topic).length; obj++){
    const box = document.createElement('div');
    box.className = 'box';
    const addHTML = `<h3 class="question text-bold" id="question"> <span class="text-bold text-dark" id="question_count">${obj+1}. </span>${getQuestions(topic)[obj].question}</h3>
    <div class="mt-4">
        <p class="option" id="option1"><span>a. </span>${getQuestions(topic)[obj].op1}</p>
        <p class="option" id="option2"><span>b. </span>${getQuestions(topic)[obj].op2}</p>
        <p class="option" id="option3"><span>c. </span>${getQuestions(topic)[obj].op3}</p>
        <p class="option" id="option4"><span>d. </span>${getQuestions(topic)[obj].op4}</p>
    </div>
    <details class="mt-4">
        <summary class='text-primary'>view answer</summary>
        <p class="answer" id="answer">${getQuestions(topic)[obj].answer}</p>
        <p class="explain" id="explain">${getQuestions(topic)[obj].exp}</p>
    </details>`;
    box.innerHTML = addHTML;
    quizContainer.appendChild(box);
}
