var num1,num2;
var kq;
function get(){
    num1=parseFloat(document.getElementById("number1").value);
    num2=parseFloat(document.getElementById("number2").value);
}
function FuncAdd(){
    get();
    kq=num1+num2;
    document.getElementById("kq1").value= kq;
}
function FuncSub(){
    get();
    kq=num1-num2;
    document.getElementById("kq1").value= kq;
}
function FuncMulti(){
    get();
    kq=num1*num2;
    document.getElementById("kq1").value= kq;
}
function FuncDiv(){
    get();
    kq=num1/num2;
    document.getElementById("kq1").value= kq;
}