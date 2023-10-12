const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
  res.render('index');
});


app.post('/dados', (req, res) => {
  const { nome, cpf, telefone, dataAgendamento,MedicamentosAlergicos,InformaçõesAdicionais } = req.body;
  res.render('dados', { nome, cpf, telefone, dataAgendamento, MedicamentosAlergicos, InformaçõesAdicionais });
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

