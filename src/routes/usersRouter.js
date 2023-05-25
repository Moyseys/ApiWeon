import { Router } from 'express';

import userController from '../controllers/userController';
import permissionsController from '../controllers/permissionsController';
import loginRequire from '../middlewares/loginRequire';

const routes = new Router();

routes.get('/', userController.index);
routes.post('/', userController.store);
routes.put('/', loginRequire, userController.update);
routes.delete('/:id', userController.delete);

//rotas de permissões
routes.get('/permission', permissionsController.index);
routes.get('/:userId/permission', permissionsController.show);
routes.post('/:userId/permission', permissionsController.store);
routes.put('/:userId/permission', permissionsController.update);
//routes.delete('/:userId/permission', permissionsController.delete);

export default routes;
