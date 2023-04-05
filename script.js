let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let peopleLog = document.getElementById("people-log")

function increment() {
    count += 1;
    countEl.textContent = count;
}

function decrement() {
    count -= 1;
    countEl.textContent = count;
}

function save() {
    countEl.textContent = 0
    peopleLog.textContent += count + " - "
    count = 0
}

function reset() {

    if (confirm("Weet u zeker dat u het log boek wilt legen?") == true) {
        peopleLog.textContent = "";
    } else {
        peopleLog.textContent
    }
}



