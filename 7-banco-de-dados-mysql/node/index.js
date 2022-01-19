const express = require('express');
const mysql = require('mysql'); 

const app = express();

const config = {
    host: 'db',
    user: 'root',
    password: 'raiz',
    database: 'nodedb',
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Yago')`;

connection.query(sql);
connection.end();

app.get('', (req, res) => {
    res.send('<h1>Full Cycle!</h1>');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 🚀');
});
