const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));

    ul.appendChild(li);
    input.value = "";

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);

    dBtn.addEventListener("click", function() {
        deleteListItem(li);
    });

    // Add click event listener to toggle the "done" class
    li.addEventListener("click", function() {
        toggleDone(li);
    });
}

function deleteListItem(li) {
    li.classList.add("delete");
}

function toggleDone(li) {
    li.classList.toggle("done");
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
