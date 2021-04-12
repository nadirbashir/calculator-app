var inp_num;

function set(inp_num){
    var result = document.getElementById("display");
    result.value += inp_num;
}


function clearResult(){
    var result = document.getElementById("display");
    result.value = "";
}


function getResult(){
    var result = document.getElementById("display");
    result.value = eval(result.value);
}