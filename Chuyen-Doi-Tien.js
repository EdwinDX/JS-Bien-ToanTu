
function chuyendoitien(){
    let input=document.getElementById('input').value;
    let typeIn=document.getElementById('in').value;
    let typeOut=document.getElementById('out').value;
    let output
    if (typeIn=="USD" && typeOut=="VND")
        output=input*23000 + " Đ";
    else if (typeIn=="VND" && typeOut=="USD")
        output=input/23000 + " $";
    else if (typeIn=="USD" && typeOut=="USD")
        output=input + " $";
    else
        output=input + " Đ";
    document.getElementById("output").innerHTML=output;
}

