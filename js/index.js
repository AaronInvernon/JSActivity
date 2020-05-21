
  let btns = document.getElementsByClassName("btn");
  let screen = document.getElementById("screen");

  function insert(num){
    screen.value = screen.value+num
}
 

function c(){
    screen.value='';
}

function equal(){
    let operation = screen.value
    if(operation){
        screen.value = eval(operation);
    }
}