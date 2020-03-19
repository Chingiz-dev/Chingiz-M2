function getFinalAmount(startAmount, additional, percent, month, days) {

    if (startAmount <= 0 || startAmountHTML == NaN) {
        errorStart.className = "show-error";
        console.error('start amount is incorrect');
        return NaN;
    }
    else if (additional < 0 || additional == 'NaN') {
        errorAdditional.className = "show-error";
        console.error('additional amount is incorrect');
        return NaN;
    }
    else if (percent <= 0 || percent > 100 || percent == NaN) {
        errorPercent.className = "show-error";
        console.error('percent is incorrect');
        return NaN;
    }
    else if (days <= 0 || days == NaN || (!(days % 2 == 0 || days % 2 == 1))) {
        errorDays.className = "show-error";
        console.error('days is incorrect');
        return NaN;
    } else {
        for (i = 0; i < month; i++) {
            startAmount = startAmount * percent / 100 + startAmount + additional;
        }
        return startAmount;
    }
}

function startOnButtonClick() {
    errorStart.className = "dont-show-error";
    errorAdditional.className = "dont-show-error";
    errorPercent.className = "dont-show-error";
    errorDays.className = "dont-show-error";
    console.clear();

    let startAmount = +startAmountHTML.value;
    let additional = +additionalHTML.value;
    let percent = +percentHTML.value;
    let days = +daysHTML.value;
    let month = Math.floor(days / 30);

    let result = getFinalAmount(startAmount, additional, percent, month, days);
    if (!isNaN(result)) {
        alert(result);
    }
}

let startAmountHTML = document.getElementById("input-start-amount");
let additionalHTML = document.getElementById("input-additional");
let percentHTML = document.getElementById("input-percent");
let daysHTML = document.getElementById("input-days");

let errorStart = document.getElementById("error-notification-start");
let errorAdditional = document.getElementById("error-notification-additional");
let errorPercent = document.getElementById("error-notification-percent");
let errorDays = document.getElementById("error-notification-days");

let buttonHTML = document.getElementById("start-calculate");
buttonHTML.addEventListener("click", startOnButtonClick);