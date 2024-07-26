const inputBox =document.getElementById("input-box"); // we are getting rference form html elements
const listContainer=document.getElementById("list-container");// same as above
const countValue=document.getElementById(".count-value");// same as above

function addTask() { // here I have created a function name add Task 
    if(inputBox.value === ''){ //I have written that if the input box is empty there will be an alert.
        alert("You must write something!"); // alert message 
    }
    else{ 
        let li = document.createElement("li"); // 
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);


function updateTime(){
    const now = new Date();

    const options ={
        timeZone:'Asia/Kolkata',
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        hour12:false
    };
    const formattedTime = now.toLocaleDateString('en-us',options);
    document.getElementById('time').textContent= formattedTime;
}
updateTime();

setInterval(updateTime, 1000);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
