const loggerMiddleware = (req, res, next) => {
    const horaAtual =new Date().toLocaleTimeString();
    console.log(`[${horaAtual}] Requisição recebida: ${req.method} ${res.url}`);
    next();
};

module.exports = loggerMiddleware;