// Getting All Requierd Elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

// if Start Quiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
};

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if Continue button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions();
}

let que_count = 0;

// Getting Quetions And Options From Array
function showQuestions (){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[4].question +'</span>';
    que_text.innerHTML = que_tag;
}

