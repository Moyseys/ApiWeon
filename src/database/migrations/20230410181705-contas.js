/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //excluir a ultima migration
  //npx sequelize db:migrate:undo
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'contas',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        documento: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        fornecedor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_pagamento: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        data_vencimento: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        valor: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        banco: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        forma_pagamento: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        observacao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'users', key: 'id' },
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('contas');
  },
};
