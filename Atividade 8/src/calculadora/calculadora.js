exports.calcular = (req, res) => {
    const { numero_a, numero_b, operacao } = req.body;
    let resultado;

    switch (operacao) {
        case '+':
            resultado = parseFloat(numero_a) + parseFloat(numero_b);
            break;
        case '-':
            resultado = parseFloat(numero_a) - parseFloat(numero_b);
            break;
        case '*':
            resultado = parseFloat(numero_a) * parseFloat(numero_b);
            break;
        case '/':
            resultado = parseFloat(numero_a) / parseFloat(numero_b);
            break;
        default:
            resultado = "Operação inválida";
    }

    res.render('resultado', { resultado: resultado });
};
