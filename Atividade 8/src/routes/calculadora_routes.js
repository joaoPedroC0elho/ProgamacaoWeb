const express = require('express');
const router = express.Router();
const calculadoraController = require('../controllers/calculadora_controller');

router.post('/calcular', (req, res) => {
    const { numero_a, numero_b, operacao } = req.body;
    const resultado = calculadoraController.calcular(numero_a, numero_b, operacao);
    res.render('resultado', { resultado: resultado });
});

module.exports = router;
