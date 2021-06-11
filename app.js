var inp_num;
var result = document.getElementById("display");

function set(inp_num){
    result.value += inp_num;
}
function clearResult(){
    result.value = "";
}

function getResult(){
    result.value = eval(result.value);
}