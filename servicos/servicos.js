// Arquivo com as funćões necessárias ao funcionamento da API

// 1 - Importando a conexão como banco
import pool from './conexao.js';

// 2 - Criando as funćões

// Funćão qhe vai listar todos os dados da tabela medicos do banco clinicaDB
async function listarTodosMedicos(){
    const conexao = await pool.getConnection(); // Abrindo a conexão
    const medicosTb = await conexao.query('SELECT * FROM medicos'); // Consultando o Banco com um comando SQL
    const medicos = medicosTb[0]; // Como o resultado da consulta acima é um array de duas posicões (0 = registros no bando, 1 = estrutura da tabela), atribuimos a posicao medicos[0] a uma variavel que receberá APENAS os registros
    conexao.release(); // Liberando a conexão

    return medicos; // Retorna o resultado completo da consulta
};

export {listarTodosMedicos};