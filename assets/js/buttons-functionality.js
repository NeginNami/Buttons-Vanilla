
window.onload=function(){

    var intervalId;
    document.getElementById("add-button").addEventListener("click", addButtons);
    document.getElementById("clear-button").addEventListener("click", clear);
    document.getElementById("remove-button").addEventListener("click", removeSlowly);
    

    function addButtons(){
        window.clearInterval(intervalId);
        for(i=0;i<40;i++){
            var btn= document.createElement('button');
            btn.setAttribute("id","Button "+(i+1));
            btn.setAttribute("class","added-button");
            btn.setAttribute("onclick","showAlert(this.id)");
            btn.innerText="Button "+(i+1);
            document.getElementById("button-section").appendChild(btn);

        }
    }
    function clear(){
        window.clearInterval(intervalId);
        document.getElementById("button-section").innerHTML="";
    }
    function removeSlowly(){
        intervalId= window.setInterval(
            function () {
                //finds the last button
                var select=document.getElementById("button-section");
                select.removeChild(select.lastChild);
                //document.getElementById("button-section").removeChild();
            }, 1000);
    }
 

 
}
function showAlert(ID) {   
    alert(ID+" was clicked!");   
}

