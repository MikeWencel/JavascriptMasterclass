// start game function

document.querySelector("button").addEventListener("click", startGame)

function startGame(){
    
    console.log("gamestart")
    document.getElementById("begin-quest").innerHTML="What's your name?"
    addElement();
    
}


function addElement()
{
  // tworzy nowy element div 
  // i daje jego zawartość 
  newDiv = document.createElement("div");
  newDiv.innerHTML = "<input></input>";

  // add the newly created element and it's content into the DOM
  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
}