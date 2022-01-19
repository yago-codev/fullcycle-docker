const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Full Cycle!!');
});

app.listen(3000, () => {
    console.log('Servidor Node rodando na porta 3000')
});
