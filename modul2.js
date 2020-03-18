function getFinalAmount(startAmount, additional, percent, month) {

    if (startAmount <= 0 || startAmountHTML == NaN ||
        additional < 0 || additional == 'NaN' ||
        percent <= 0 || percent > 100 || percent == NaN ||
        month < 0 || month == NaN ||
        (!(month % 2 == 0 || month % 2 == 1))) {
        errorHTML.className = "show-error";
        console.log('error');
        return NaN;
    }
    else {

        for (i = 0; i < month; i++) {
            startAmount = startAmount * percent / 100 + startAmount + additional;
        }
        return startAmount;
    }
}

function startOnButtonClick() {
    console.clear();
    let startAmount = +startAmountHTML.value;
    let additional = +additionalHTML.value;
    let percent = +percentHTML.value;
    let days = +daysHTML.value;
    let month = Math.floor(days / 30);

    let result = getFinalAmount(startAmount, additional, percent, month);
    if (!isNaN(result)) {
        alert(result);
    }
}

let startAmountHTML = document.getElementById("input-start-amount");

let additionalHTML = document.getElementById("input-additional");

let percentHTML = document.getElementById("input-percent");

let daysHTML = document.getElementById("input-days");

let errorHTML = document.getElementById("error-notification");

let buttonHTML = document.getElementById("start-calculate");

buttonHTML.addEventListener("click", startOnButtonClick);




