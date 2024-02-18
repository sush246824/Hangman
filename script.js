const wordsList={
        "Easy":[
            {"text":"pizza" , "hint":"food"},
            {"text":"burger", "hint":"food"},
            {"text":"tiger", "hint":"animal"},
            {"text":"dog", "hint":"pet"},
            {"text":"mat", "hint":"household item"}
        ],

        "Medium":[
            {"text":"Biriyani" , "hint":"food"},
            {"text":"Hamburger", "hint":"food"},
            {"text":"Giraffe", "hint":"animal"},
            {"text":"Sparrow", "hint":"pet"},
            {"text":"Iron", "hint":"household item"}
        ],

        "Hard":[
            {"text":"Spaghetti" , "hint":"food"},
            {"text":"Maccaroni", "hint":"food"},
            {"text":"Ostrich", "hint":"animal"},
            {"text":"parrot", "hint":"pet"},
            {"text":"Cupboard", "hint":"household item"}
        ],
};



var hint;
var word_length;
var selected_word;
const diff_btn = document.querySelectorAll(".btn-difficulty");
const start_game = document.getElementById("start-btn");

function startGame() {
    // on clicking difficulty button
    diff_btn.forEach(button => {
        button.addEventListener("click",selectDifficulty)
    })
    loadGame();
}

function selectDifficulty(e) {
    const button = e.target;
    diff_btn.forEach(btn=>{
        btn.classList.remove('selected');
    })
    let word_level=button.innerHTML;
    const count= wordsList[word_level].length;
    const word_index=Math.floor(Math.random()*count);
    const selected_obj = wordsList[word_level][word_index];
    selected_word = selected_obj["text"];
    hint = "Hint - "+ selected_obj["hint"];
    word_length = selected_word.length;
    button.classList.add('selected');

}

function loadGame() {
    //on clicking start button
    start_game.addEventListener("click", function(){
        if(hint==undefined || word_length==undefined) {
            alert("Please Choose a DifficultyLevel");
            return false;
        }
        window.location.href = './main.html?hint=' + encodeURIComponent(hint) + '&word_length=' + encodeURIComponent(word_length) + '&selected_word=' + encodeURIComponent(selected_word);
    })
}


startGame();