var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");


function calculateProfitLoss(initial, quantity, current) {
    if (initial > current) {
        //loss
        var loss = (initial - current) * quantity;
        var lossPercent = (loss / initial) * 100;
        outputBox.innerText = `Hey! The loss is ${loss} and loss percentage is ${lossPercent}😟`;
    }
    else if (current == initial) {
        outputBox.innerText = `No gain no pain!! It's a break-even point😐`;
    }
    else {
        //profit
        var profit = (current - initial) * quantity;
        var profitPercent = (profit / initial) * 100;
        outputBox.innerText = `Hey! The profit is ${profit} and profit percentage is ${profitPercent}🤑`;
    }
}

function submitHandler() {
    var initial = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);
    //console.log(initial, qty, curr);
    if (initial > 0 && qty > 0 && curr > 0) {
        calculateProfitLoss(initial, qty, curr);
    }
    else if (initial < 0 || qty < 0 || curr < 0) {
        outputBox.innerText = "Negative value are not allowed!🤨"
    }
    else {
        outputBox.innerText = "Please enter all the fields🤨"
    }
}

submitBtn.addEventListener("click", submitHandler);