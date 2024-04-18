const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
const userName = document.querySelector("#userName");
const UserScore = document.querySelector(".score");
const UserAttemp = document.querySelector(".total");
const resultBar = document.querySelector(".result")

let USname = "";
let play = false;
let flag = 0;
score = 0;
attemp = 0;
let word = "";
let scramword = "";
let words = ["happy", "friend", "simple", "smile", "dream", "song", "color", "sunshine", "ocean", "laugh", "jump", "baby", "red", "blue","run", "eat", "small", "good", "fast", "slow", "big", "fun", "star", "moon"];

const showWords = () =>{
    let rand = Math.floor(Math.random() * words.length);
    // console.log(rand);
    let sword = words[rand];
    return sword;
}

const scrambleWords = (arr) =>{
    for (let i = arr.length-1; i>0; i--) {
        const temp = arr[i];
        // console.log(element)
        let j = Math.floor(Math.random()*(i+1));
        // console.log(element);
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.join("")
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess..!!";
        if(flag == 0){
            USname = guess.value;
            console.log(USname);
            userName.innerHTML = `WELLCOME ${USname}..!!`;
            console.log(flag);
            resultBar.style.display = "block"
            flag++;
        }
        guess.value = ''
        guess.placeholder = 'Go for it';
        guess.style.display = "block";
        word = showWords();
        scramword = scrambleWords(word.split(""));
        // console.log(check);
        msg.innerHTML = (`Guess the Word:- ${scramword}`)
    }
    else{
        let inputWords = guess.value;
        inputWords = inputWords.toLowerCase()
        if(word  === inputWords){
            // console.log("Correct..!!");
            msg.innerHTML = (`You Guess it Correct..!! <br> The Word was:- ${word}`);
            btn.innerHTML = `Click to Start..!!`;
            guess.style.display = "none";
            guess.value = "";
            play = false;
            attemp++;
            score++;
            UserScore.innerHTML = `Score:- ${score}`
            UserAttemp.innerHTML = `Total Attempts:- ${attemp}`;
            btn.innerHTML = `Go for Next Word..!!`
        }
        else{
            msg.innerHTML = `Woosh you guess it Wrong..!!<br>Try Again:- ${scramword}`;
            guess.value = ""
            attemp++;
            UserAttemp.innerHTML = `Total Attempts:- ${attemp}`
        }
    }
})

