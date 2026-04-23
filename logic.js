let btn = document.querySelectorAll(".startbtn");
let current_player = true;// the one who is playing currently 
let next_player = false;// the one who will play next
let reset_btn = document.querySelector(".reset");


btn.forEach((startbtn) => {
    startbtn.addEventListener("click", () => {
        // it will keep toggling between the current player and the next player 
        if(startbtn.innerText === "") {
            if(current_player) {
            startbtn.innerText = "X";
            startbtn.style.color = "#378ADD";
            current_player = false;
            next_player = true;
        }

        else {
            startbtn.innerText = "O";
            startbtn.style.color = "#0F6E56";
            current_player = true;
            next_player = false;
        }
        }

        check_win();

        check_tie();

    })
})

// creating 2-D aaray for storing winning patterns 
let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const check_win =  () => {
    for(let i = 0; i<win.length; i++) {
        if(btn[win[i][0]].innerText !== "" && btn[win[i][0]].innerText === btn[win[i][1]].innerText &&
        btn[win[i][1]].innerText === btn[win[i][2]].innerText) {
            let winner = current_player ? "O" : "X";
            document.querySelector(".result").innerText = `Player ${winner} Wins!`;
            btn.forEach((startbtn) => startbtn.disabled = true);
        }
    }
}

// checking the condition for tie
const check_tie = () => {
    let allbtnfilled = true;

    btn.forEach((startbtn) => {
        if(startbtn.innerText === "") {
            allbtnfilled = false;
        }
    })

    if(allbtnfilled) {
        document.querySelector(".result").innerText = "It's a tie"
    }
}

// reseting all the buttons again
reset_btn.addEventListener("click", () => {
    btn.forEach((startbtn) => {
        startbtn.innerText = "";
        startbtn.disabled = false;
    })

    document.querySelector(".result").innerText = "";
})