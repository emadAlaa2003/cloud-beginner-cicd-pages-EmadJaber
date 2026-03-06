let myButton = document.getElementById("action-btn");
let myText = document.getElementById("status-text");

myButton.onclick = function() {
    myText.innerHTML = "Done! My site is working.";
    myText.style.color = "green";
    myText.style.fontWeight = "bold";
    myButton.innerHTML = "Deployed";
}