/*function Calculadora(){
    //document referese a pagina; O que fica entre "" se chama parametro ou argumento; .value = está pegando o valor daquele elemento
n1 = document.getElementById("num1").value;
n2 = document.getElementById("num2").value;

    //querySelector = Guardar valores de radio box mas, seu parâmetro e diferente, seria assim: input[name='opt']:checked
operador = document.querySelector("input[name=opt]:checked").value;

    //parseInt = Converte os valores para int;
resultado = eval(parseInt(n1) + operador + parseInt(n2));

document.getElementById("mostrar-resultado").innerHTML = resultado;
}

function Areatriangulo(){
    x = document.getElementById("altura").value;
    y = document.getElementById("base").value;
    z = eval((x*y)/2);
    document.getElementById("mostrar-resultado").innerHTML = z;
}

function Calculadora(){
    n1 = document.getElementById("num1").value;
    operador = document.querySelector("input[name=opt]:checked").value;
    resultado_square = eval((operador+"("+n1+")"));
    document.getElementById("mostrar-resultado").innerHTML = resultado_square;
}
*/
function Bhaskara(){
    bhas1 = document.getElementById("A").value;
    bhas2 = document.getElementById("B").value;
    bhas3 = document.getElementById("C").value;
    if(bhas1==0){
        nan = ("Não é possível realizar a conta");
        document.getElementById("mostrar-resultado").innerHTML = nan;
    }
    else{
    Calc = eval(Math.pow(bhas2,2)-4*bhas1*bhas3);
    x = eval((-bhas2+Math.sqrt(Calc))/(2*bhas1));
    Calc = eval(Math.pow(bhas2,2)-4*bhas1*bhas3);
    y = eval((-bhas2-Math.sqrt(Calc))/(2*bhas1));
    z = ("{"+x+","+y+"}");
    document.getElementById("mostrar-resultado").innerHTML = z;
    }
}
function RaizQuadrada(){
    n1 = document.getElementById("num1").value;
    operador = document.querySelector("input[name=opt]:checked").value;
    resultado_square = eval((operador+"("+n1+")"));
    document.getElementById("mostrar-resultado").innerHTML = resultado_square;
}
