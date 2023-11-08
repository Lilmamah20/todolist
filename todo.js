 document.addEventListener("DOMContentLoaded", function(){
    var task = document.getElementById("task");
    var add = document.getElementById("add")
    var tasklist= document.getElementById("tasklist")

    add.addEventListener("click", function(){
     var taskval = task.value;
     
    //  console.log(taskval);
    if(task.val.trim() === ""){
        alert("cannot add an empty task!!!");
        return
    };

    var taskItem = document.createElement("li");
    // <li>....</li>

    taskItem.innerHTML = `
    <span>${taskval}</span>
    <button class="delete">delete</button> 
    `;

    tasklist.appendChild(taskItem);

    var deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", function(){
        tasklist.removeChild(taskItem);

    });


    })
 })



