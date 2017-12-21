
function onReady() {
  let id=0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
       id: id,
       title: newToDoText.value,
       complete: false
    });
    newToDoText.value = '';
    id+=1;
    renderTheUI();
  }
  function deleteToDo(id){
    toDos = toDos.filter(item => item.id !== id);
  }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";

       const title = document.createElement('span');
       title.textContent = toDo.title;

       toDoList.appendChild(newLi);
       newLi.appendChild(title);
       newLi.appendChild(checkbox);

       //add delete button
       const d = document.createElement('button');
       d.innerHTML="delete";

       d.addEventListener("click", function(){
         if(checkbox.checked){
           deleteToDo(toDo.id);
           renderTheUI();
         }else{
           alert("This to-do is not checked");
         }
       });
       newLi.appendChild(d);
    });
  }
  addToDoForm.addEventListener('submit', event => {
     event.preventDefault();
     createNewToDo();
     newToDoText.value = '';
   });
  renderTheUI();
}
window.onload = function() {
  onReady();
};
