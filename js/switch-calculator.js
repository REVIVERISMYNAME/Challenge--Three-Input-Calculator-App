function calc()
{
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);


    var oper = document.getElementById('operators').value;
    switch (oper){
        case "+":
            document.getElementById('result').value = n1+n2;
            break;
        case "-":
            document.getElementById('result').value = n1-n2;
            break;
        case "*":
            document.getElementById('result').value = n1*n2;
            break;
        case "/":
            document.getElementById('result').value = n1/n2;
            break;
        default:
            document.getElementById('result').value = ("       Invalid Operator Input");   
            break;

    }
}

