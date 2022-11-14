function calculadora(){
    num1= document.getElementById("num1").value;
    num2= document.getElementById("num2").value;
    num3= document.getElementById("num3").value;

    op= document.querySelector("input[name=opt]:checked").value;

    if( op= document.querySelector("input[name=opt]:checked").value=="Math.pow"){
        d = document.querySelector("input[name=opt]:checked").value
        rstd= eval (d+"("+parseInt(num1)+","+parseInt(num2)+")");
        document.getElementById("mostrar-resultado").innerHTML= rstd;
    }
    else if(op = document.querySelector("input[name=opt]:checked").value=="+"){
        d = document.querySelector("input[name=opt]:checked").value
        rstd= eval(parseInt(num1) + d + parseInt(num2));
        document.getElementById("mostrar-resultado").innerHTML= rstd;
    }
    else if(op = document.querySelector("input[name=opt]:checked").value=="-"){
        d = document.querySelector("input[name=opt]:checked").value
        rstd= eval(parseInt(num1) + d + parseInt(num2));
        document.getElementById("mostrar-resultado").innerHTML= rstd;
    }
    else if(op = document.querySelector("input[name=opt]:checked").value=="*"){
        d = document.querySelector("input[name=opt]:checked").value
        rstd= eval(parseInt(num1) + d + parseInt(num2));
        document.getElementById("mostrar-resultado").innerHTML= rstd;
    }
    else if(op = document.querySelector("input[name=opt]:checked").value=="/"){
        d = document.querySelector("input[name=opt]:checked").value
        rstd= eval(parseInt(num1) + d + parseInt(num2));
        document.getElementById("mostrar-resultado").innerHTML= rstd;
    }
    else if( op= document.querySelector("input[name=opt]:checked").value=="Math.sqrt"){
        d = document.querySelector("input[name=opt]:checked").value
        rstd= eval (d+"("+parseInt(num1)+","+parseInt(num2)+")");
        document.getElementById("mostrar-resultado").innerHTML= rstd;
    }
    else if(op= document.querySelector("input[name=opt]:checked").value=="▲"){
        z = eval((num1*num2)/2);
        document.getElementById("mostrar-resultado").innerHTML = z;
    }
    else if(op= document.querySelector("input[name=opt]:checked").value=="a"){
        Calc = eval(Math.pow(num2,2)-4*num1*num3);
        x = eval((-num2+Math.sqrt(Calc))/(2*num1));
        Calc = eval(Math.pow(num2,2)-4*num1*num3);
        y = eval((-num2-Math.sqrt(Calc))/(2*num1));
        z = ("{"+x+","+y+"}");
        document.getElementById("mostrar-resultado").innerHTML = z;
    }
    else
    {
        a = ("Ocorreu um erro, recarregue a página :)");
        document.getElementById("mostrar-resultado").innerHTML= a;
    }
}
function s1(){
    input = document.querySelector("#num3");
    input.disabled = true;
}
function s2(){
    input = document.querySelector("#num3");
    input.disabled = false;
}