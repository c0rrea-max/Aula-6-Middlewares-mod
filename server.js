const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.json({ mensagem: '🍖 Bem-vindo à API do Língua de Fogo! ' });
});

const rotasCategorias = require('./routes/categorias');
const rotasProdutos = require('./routes/produtos');

app.use('/api/categorias', rotasCategorias);
app.use('/api/produtos', rotasProdutos);

app.use((req, res, next) => {
    res.status(404).json({
        sucesso: false,
        mensagem: `Rota '${req.url}' não encontrada na API do Haruy Sushi.`
    });
});

app.use(errorHandler);
const PORTA = 3000;

app.listen(PORTA, () => {
    console.log('');
    console.log(' ================================');
    console.log(' Servidor rodando!');
    console.log(`🚀 Acesse: http://localhost:${PORTA}`);
    console.log('🍖 ================================');
    console.log('');
    console.log('📋 Rotas disponíveis:');
    console.log(`   GET    http://localhost:${PORTA}/api/categorias`);
    console.log(`   POST   http://localhost:${PORTA}/api/categorias`);
    console.log(`   GET    http://localhost:${PORTA}/api/produtos`);
    console.log(`   GET    http://localhost:${PORTA}/api/produtos/:id`);
    console.log(`   POST   http://localhost:${PORTA}/api/produtos`);
    console.log(`   PUT    http://localhost:${PORTA}/api/produtos/:id`);
    console.log(`   DELETE http://localhost:${PORTA}/api/produtos/:id`);
    console.log('');
    console.log('💣 Rota de teste de erro:');
    console.log(`   GET    http://localhost:${PORTA}/api/produtos/erro-teste`);
    console.log('');
});