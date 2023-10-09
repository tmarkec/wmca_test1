
//task1
function setDarkMode() {
    let body = document.getElementById("heading");
    body.style = "background-color: black; color: white;"
}

function setLightMode() {
    let body = document.getElementById("heading");
    body.style = "background-color: white; color: black;"
}

//task3
function showMore() {
    let post = document.getElementById("answer");
    post.innerHTML = `
        <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages</p>
        `
}

//task 5
const closeBtn = document.getElementById("juhu");
closeBtn.addEventListener("click", function () {
    document.body.innerHTML = "<h1>Thank you Marko</h1>";
});

// task 4
        const poundsAmountInput = document.getElementById("pounds-amount");
        const conversionForm = document.getElementById("conversion-form");
        const resultElement = document.getElementById("result");

       
        conversionForm.addEventListener("submit", function (e) {
            e.preventDefault(); 

            
            const poundsAmount = parseFloat(poundsAmountInput.value);
            const eurosAmount = poundsAmount * 1.15;
            resultElement.textContent = `${poundsAmount} pounds is equal to ${eurosAmount.toFixed(2)} euros.`;
           
        });
