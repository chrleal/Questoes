const fibonacci = function(number) {
    parseInt(number);
    let a, b, temp;
    const fibo = [];
    a = 0;
    b = 1;
    if (number < 0) {
        return ("Selecione um numero maior que 0");
    } else {
        for (i = 1; i <= 100; i++){
            temp = b; // 1, 1, 2, 3
            b = a + b;
            a = temp;
            fibo.push(temp)
        }
    }
    found = fibo.find((index) => index == number);

    if (found == number) {
        return ("O número pertence a sequência")
    } else {
        return ("O número não pertence a sequência")
    }
};

fibonacci(610);
