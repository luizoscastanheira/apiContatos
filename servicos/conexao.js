// Arquivo responsável pela conexao com o Banco de Dados.

// 1 - Importe a bilbioteca mysql2
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host        :'localhost',
    user        :'usuarioClinica',
    password    :'senha123456',
    database    :'clinicaDB'
});

export default pool;