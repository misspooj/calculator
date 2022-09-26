let logo = document.querySelectorAll(".box2");
function dragover(event) {
    event.preventDefault();

}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    logo.forEach(e => {
        e.style.backgroundColor = "red";
    })
}


function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    let input = document.createElement("input");
    input.type = "file";
    event.target.appendChild(input);
    logo.forEach(e => {
        e.style.backgroundColor = "black";
    })

}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

s