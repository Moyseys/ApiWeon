import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import configCors from './middlewares/configCors';

import contasRoutes from './routes/contasRouter';
import usersRoutes from './routes/usersRouter';
import tokenRoutes from './routes/tokenRouter';
import templateRouter from './routes/templateRouter';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(helmet());
    this.app.use(configCors);
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/template', templateRouter);
    this.app.use('/contas', contasRoutes);
    this.app.use('/users', usersRoutes);
    this.app.use('/token', tokenRoutes);
  }
}

export default new App().app;
