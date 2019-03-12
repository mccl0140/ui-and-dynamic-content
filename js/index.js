const userInput = document.getElementById("user-input");
const btn = document.getElementById("add-item");
const displayData = document.getElementById("display-items");
const err = document.querySelector(".error");

function addItem() {
    userInput.value = userInput.value.trim();
    if (userInput.value !== "") {
        let list = document.createElement("li");
        list.textContent = userInput.value;
        displayData.appendChild(list);
        err.textContent = "";
        userInput.value = "";
        userInput.focus();
        userInput.select();
        err.style.display = 'none';

    } else {
        err.textContent = "ERROR: Nothing has been entered.";
        err.style.display = 'block';
    }
}
btn.addEventListener("click", addItem);
