const { Router } = require('express');
const productsRouter = require('./productsRoutes');
const normalizrRouter = require('./normalizRoute');

const routerMain = Router();
 routerMain.use('/products', productsRouter);
routerMain.use('/normalizr',normalizrRouter);

module.exports = routerMain;