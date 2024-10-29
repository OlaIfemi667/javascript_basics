const uList = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function addInput()
{
    inputValue = input.value
    input.value = '';
    const listElement = document.createElement("li");
    const spanElement = document.createElement("span");
    const buttonElement = document.createElement("button");
    listElement.textContent = inputValue;
    buttonElement.textContent = "Delete";
    listElement.appendChild(spanElement);
    listElement.appendChild(buttonElement);
    uList.appendChild(listElement);

    buttonElement.onclick = () => uList.removeChild(listElement);
    input.focus();
}


btn.onclick = addInput;
