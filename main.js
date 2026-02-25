//Projeto Calculadora (JavaScript)
//Arquivo: main.js
//Objetivo: praticar funções e execução com Node.js (Sem loops complexos)


    function somar (a, b) {
        return a + b;
    }

    function subtrair (a, b) {
        return a - b;
    }

    function multiplicar (a, b) {
        return a * b;
    }
    
    function dividir (a, b) {
        \\observação: evite b = 0 para nao dividir por zero.
        return a / b;
    }

    \\2) Defina dois valores para testar:
    let x = 10;
    let y = 2;

    \\3) Mostre os resuktados no console:
    console.log("Soma:", somar(x, y));
    console.log("Subtração:", subtrair(x, y));
    console.log("Multiplicação:", multiplicar(x, y));
    console.logs