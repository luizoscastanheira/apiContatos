/**
 *  API Restfull - Lista de Contatos
 */

// 1 - Configurando o Express
import express from 'express';
const app = express();

// 2 - Configurando cors para acesso à  partir de outros domínios
import cors from 'cors';
app.use(cors());

// 3 - Importando as funcoes da camada de servico
import { listarTodosMedicos } from './servicos/servicos.js';

// 4 - Criando Endpoints
// 1 - Endpoint de acesso a toda a colećão de médicos
app.get('/medicos', async (req,res)=>{
    const medicos = await listarTodosMedicos();
    res.json(medicos);
});

// 4 - Criando uma porta de escuta
app.listen(8080, ()=>{
    let data = new Date();
    console.log(`O servidor entrou online em ${data}`);

});

