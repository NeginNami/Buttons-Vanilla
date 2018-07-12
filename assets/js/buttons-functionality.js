
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

        for(i=0;i<5;i++){
            var btn= document.createElement('button');
            btn.setAttribute("id","Button "+(i+1));
            btn.setAttribute("class","added-button");
            //Adding event listener to the dynamically made buttons
            btn.setAttribute("onclick","showAlert(this.id)");
            btn.innerText="Button "+(i+1);
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

            //Defining three functions and using time out to remove the buttons efficently and prevent memory leak
            var remove3 = function (isEmpty) {
                timeoutId= setTimeout(function() {
                    var select=document.getElementById("button-section");
                    console.log("Button section is empty? "+isEmpty);
                    select.removeChild(select.lastChild);
                    isEmpty = document.getElementById('button-section').innerHTML === "";
                    console.log("Deleting..");
                  if (!isEmpty) {
                    remove3(isEmpty);
                  }
                }, 1000);
              };
              
              var remove1 = function() {
                remove3(isEmpty);
              };
              
              remove1();
             

    } 
}
//Alert function, triggers when any dynamically added button is clicked
function showAlert(ID) {   
    alert(ID+" was clicked!");   
}