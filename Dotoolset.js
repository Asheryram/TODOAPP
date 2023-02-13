const addTodo = document.getElementById('addtodo');
const todoContainer = document.getElementById('todocont');
const inputField = document.getElementById('inputfield');

addTodo.addEventListener('click',action);
inputField.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        addTodo.click();
    }
});


function action(){
    //creating elements
let newElement = document.createElement('div');
let newParagraph = document.createElement('p');
let delbtn = document.createElement('button');
delbtn.innerHTML='X';

//taking input in its raw form
if(inputField.value === ''){
    alert('Please enter a task!');
}else{
    newParagraph.innerText = inputField.value;

//pushing elements
newElement.appendChild(newParagraph);
newElement.appendChild(delbtn);
todoContainer.appendChild(newElement);

//adding classes to style
todoContainer.classList =" containerdec ";
newElement.classList =" spacebtwn";
delbtn.classList = 'del';

// function for deleting
delbtn.addEventListener('click',function(){
newElement.innerHTML='';
newElement.classList='';
})

//clearing the input field
inputField.value = '';
}
}
