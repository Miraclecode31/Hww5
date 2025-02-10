const button= document.getElementById('click-btn');
const messageParagraph = document.getElementById('message');

function changeMessage(){
    messageParagraph.textContent="If you clicked the button you should see this message";


}

button.addEventListener('click', changeMessage);
