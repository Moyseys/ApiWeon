import { Sequelize } from 'sequelize';
import Contas from '../models/ContaModel';
import User from '../models/UserModels';
import Permission from '../models/PermissionsModel';

import dbConfig from '../config/dbConfig';

const conect = new Sequelize(dbConfig);

async function virifyConect(sequelize) {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

virifyConect(conect);

Contas.init(conect);
User.init(conect);
Permission.init(conect);

Permission.associate(conect.models);
User.associate(conect.models);
Contas.associate(conect.models);

// Permission.create({
//   adm: true,
//   insert: false,
//   edit: false,
//   delet: false,
//   user_id: 1,
// });

export default conect;
