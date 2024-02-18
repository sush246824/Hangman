
let selectedWord;
let wordLength;
let hint;
let limit=0;
let count=0;

function loadDOMContent() {
    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        hint = urlParams.get('hint');
        wordLength = urlParams.get('word_length');
        selectedWord = urlParams.get('selected_word');
        console.log(selectedWord);
        console.log(wordLength);
        
        displayHint();
        displayWordBlanks();
    })
    limit=0;
    count=0;
}


function displayHint() {
    const selected_hint = document.querySelector(".word-check");
    const h3=document.createElement('h3');
    h3.textContent=hint;
    selected_hint.appendChild(h3);
}

//getting the word blanks 
function displayWordBlanks() {
    const list = document.querySelector(".item1");
        for(i=0;i<wordLength;i++)
        {
            const p= document.createElement('p');
            p.textContent='__';
            list.appendChild(p);
        }
    const keyboard_btn = document.querySelectorAll('.key-btn');
    keyboard_btn.forEach(button => {
        button.addEventListener("click",selectLetters);
    })
}




function selectLetters(e) {
    const button = e.target;
    const word=selectedWord.toUpperCase();
    clickedLetter=button.innerHTML;
    if(word.includes(clickedLetter)) {
        const wordLetters = document.querySelectorAll('p');
        for (let i = 0; i < word.length; i++) {
            if (word[i] === clickedLetter) {
                wordLetters[i].textContent = clickedLetter;
                count++;
            }
        }
        word.replace(clickedLetter,'');
        button.setAttribute('disabled', 'disabled');
    }
    else{
        limit++;
        const imgPath=document.querySelector("#image");
        imgPath.src=`./images/Level ${limit}.png`;
        button.setAttribute('disabled', 'disabled');
    }

    checkEndState(limit,count);
    console.log(count);
}


function checkEndState(limit,count) {
    if(count==wordLength) {
        const wonState = document.querySelector(".won-state");
        const cont = document.querySelector(".grid-container");
        cont.style.display="none";
        wonState.style.display="block";
        const retryButton = document.getElementById('retry-won');
        retryButton.addEventListener("click",()=>{
            window.location.href='index.html';
        })
    }
    else if(limit>6) {
        const lostState = document.querySelector(".lost-state");
        const cont = document.querySelector(".grid-container");
        cont.style.display="none";
        lostState.style.display="block";
        const retryButton = document.getElementById('retry-lost');
        retryButton.addEventListener("click",()=>{
            window.location.href='index.html';
        })
    }
}

loadDOMContent();