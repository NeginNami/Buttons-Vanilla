
window.onload=function(){

    var intervalId;
    //Adding event listener to our main buttons
    document.getElementById("add-button").addEventListener("click", addButtons);
    document.getElementById("clear-button").addEventListener("click", clear);
    document.getElementById("remove-button").addEventListener("click", removeSlowly);
    
    //Defining a function that adds buttons dynamically
    function addButtons(){
        window.clearInterval(intervalId);
        for(i=0;i<40;i++){
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
        window.clearInterval(intervalId);
        document.getElementById("button-section").innerHTML="";
    }
    //Defining a function that removes the added buttons one by one
    function removeSlowly(){
        intervalId= window.setInterval(
            function () {
                //finds the last button
                var select=document.getElementById("button-section");
                select.removeChild(select.lastChild);
            }, 1000);      
    } 
}
//Alert function, triggers when any dynamically added button is clicked
function showAlert(ID) {   
    alert(ID+" was clicked!");   
}