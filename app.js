
function onReady() {
  let id=0;
  let toDos = [];
  if(localStorage.getItem("arr")){
    var toDos_str=localStorage.getItem("arr");
    toDos=JSON.parse(toDos_str);
    id=toDos.length;
  }
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
    localStorage.setItem('arr', JSON.stringify(toDos));
    renderTheUI();
  }
  function deleteToDo(id){
    toDos = toDos.filter(item => item.id !== id);
    localStorage.setItem('arr', JSON.stringify(toDos));
  }
  function checkboxchanged() {
    alert("changed");
  }
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');

       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";
       //add checked if checked
       checkbox.checked=toDo.complete;
       //checkbox.onclick="checkboxchanged()";
       checkbox.addEventListener("click", function(){

         var flag=0;
         if(checkbox.checked){
           flag=1;
         }
         for(var i=0;i<toDos.length;i++){
           if(toDos[i].title==checkbox.parentNode.firstChild.textContent){
             if(flag==1){
               toDos[i].complete=true;
             }else{
               toDos[i].complete=false;
             }
             break;
           }
         }

          //test
          //alert(checkbox.parentNode.firstChild.textContent+JSON.stringify(toDos));
         //save
         localStorage.setItem('arr', JSON.stringify(toDos));
       });
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
