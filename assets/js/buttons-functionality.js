
window.onload=function(){
    var timeoutId;
    //Adding event listener to our main buttons
    document.getElementById("add-button").addEventListener("click", addButtons);
    document.getElementById("clear-button").addEventListener("click", clear);
    document.getElementById("remove-button").addEventListener("click", removeSlowly);
    
    //Defining a function that adds buttons dynamically
    function addButtons(){
        //Destroying the time out id inorder to prevent overlapping the functionalities
        clearTimeout(timeoutId);

        for(i=0;i<40;i++){
            j++;
            var btn= document.createElement('button');
            btn.setAttribute("id","Button "+(j));
            btn.setAttribute("class","added-button");
            //Adding event listener to the dynamically made buttons
            btn.setAttribute("onclick","showAlert(this.id)");
            btn.innerText="Button "+(j);
            document.getElementById("button-section").appendChild(btn);

        }
    }
    //Defining a function that clear all the buttons at once
    function clear(){
        //Destroying the time out id inorder to prevent overlapping the functionalities
        clearTimeout(timeoutId);
        document.getElementById("button-section").innerHTML="";
    }
    //Defining a function that removes the added buttons one by one
    function removeSlowly(){
            //Checks if we have any button to be removed
            var isEmpty = document.getElementById('button-section').innerHTML === "";
            //Clearing the timeout id in case the remove slowly button is being pressed repeatedly
            clearTimeout(timeoutId);
            //Defining a function expression which calls itself recursively
            var remove = function (isEmpty) {

                timeoutId= setTimeout(function() {
                    var select=document.getElementById("button-section");
                    console.log("Button section is empty? "+isEmpty);
                    select.removeChild(select.lastChild);
                    isEmpty = document.getElementById('button-section').innerHTML === "";
                    console.log("Deleting..");
                  if (!isEmpty) {
                    remove(isEmpty);
                  }
                }, 1000);
              };
    
              remove(isEmpty);
          
    } 
}
//Alert function, triggers when any dynamically added button is clicked
function showAlert(ID) {   
    alert(ID+" was clicked!");   
}
//Variable for saving the numbers of generated buttons
var j=0;