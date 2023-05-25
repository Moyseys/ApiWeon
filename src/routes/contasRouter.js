import { Router } from 'express';

import loginRequire from '../middlewares/loginRequire';
import contasController from '../controllers/contasController';

const routes = new Router();

routes.get('/', loginRequire, contasController.index);
routes.get('/:id', loginRequire, contasController.show);
routes.post('/', loginRequire, contasController.store);
routes.delete('/:id', loginRequire, contasController.delete);
routes.put('/:id', loginRequire, contasController.update);

export default routes;
