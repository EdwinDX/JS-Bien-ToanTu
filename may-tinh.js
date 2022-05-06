function FuncAdd(){
    let num1=parseFloat(document.getElementById("number1").value);
    let num2=parseFloat(document.getElementById("number2").value);
    let kq=num1+num2;
    document.getElementById("kq").innerHTML=kq;
}
function FuncSub(){
    let num1=parseFloat(document.getElementById("number1").value);
    let num2=parseFloat(document.getElementById("number2").value);
    let kq=num1-num2;
    document.getElementById("kq").innerHTML=kq;
}
function FuncMulti(){
    let num1=parseFloat(document.getElementById("number1").value);
    let num2=parseFloat(document.getElementById("number2").value);
    let kq=num1*num2;
    document.getElementById("kq").innerHTML=kq;
}
function FuncDiv(){
    let num1=parseFloat(document.getElementById("number1").value);
    let num2=parseFloat(document.getElementById("number2").value);
    let kq=num1/num2;
    document.getElementById("kq").innerHTML=kq;
}