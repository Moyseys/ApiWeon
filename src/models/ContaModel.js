import { Model, DataTypes } from 'sequelize';

class Conta extends Model {
  static init(sequelize) {
    super.init(
      {
        documento: {
          type: DataTypes.STRING,
          defaultValue: '',
          allowNull: false,
          validate: {
            notEmpty: {
              msg: 'este campo não pode ser vazio',
            },
          },
        },
        fornecedor: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'este campo não pode ser vazio',
            },
          },
        },
        data_pagamento: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'este campo não pode ser vazio',
            },
          },
        },
        data_vencimento: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'este campo não pode ser vazio',
            },
          },
        },
        valor: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'este campo não pode ser vazio',
            },
          },
        },
        banco: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'este campo não pode ser vazio',
            },
          },
        },
        forma_pagamento: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'este campo não pode ser vazio',
            },
          },
        },
        observacao: {
          type: DataTypes.STRING,
          allowNull: true,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'este campo não pode ser vazio',
            },
          },
        },
      },

      {
        sequelize,
        modelName: 'conta',
        tableName: 'contas',
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User);
  }
}
export default Conta;
