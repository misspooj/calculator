let logo = document.querySelectorAll(".right-top-logo");
function dragover(event){
    event.preventDefault();
       
}  

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    logo.forEach(e=>{
        e.style.backgroundColor ="red";
    })
}
function drop(event) {
    event.preventDefault();
    var data =event.dataTransfer.getData("text");
    let input=document.createElement("input");
    input.type="file";
    event.target.appendChild(input);
    logo.forEach(e=>{
        e.style.backgroundColor ="black";
    })
    
  }
