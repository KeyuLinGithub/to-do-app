var event = new Event('ddd');
function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', () => {
     event.preventDefault();

     // get the text
     let title = newToDoText.value;

     // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    //add addEventListener to newLi checkbox
    checkbox.addEventListener('ddd',function(){
      if(this.checked){
        toDoList.removeChild(this.parentNode);
      }
    });
    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
  /*const deleteCell = document.getElementById('deleteCell');
  deleteCell.addEventListener('delete', () => {
    event.preventDefault();

    //iterate the ul to check
    var list=document.querySelectorAll('#toDoList li');
    for (var index = list.length; index > 0; index--) {
      if (list[index].checked) {

        }
      console.log("wtf");
    }

  });
  */
 }
window.onload = function() {
  onReady();
};

document.getElementById("deleteCellButton").addEventListener("click", function(){
    this.trigger(event);
    //const toDoList = document.getElementById('toDoList');
    //var temp;
    //for (var i = 0; i < toDoList.childNodes.length; i++) {
    //  console.log(toDoList.childNodes[i].childNodes[1].is(":checked"));
    //console.log(toDoList.childNodes[i].childNodes[1].);
      //temp=toDoList.childNodes[i].childNodes[1];

    //}
    //var n = $( "input:checked" ).length;
  //$( "div" ).text( n + (n === 1 ? " is" : " are") + " checked!" );
});
