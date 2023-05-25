import Conta from '../models/ContaModel';
import Permission from '../models/PermissionsModel';

class ContasController {
  async index(req, res) {
    try {
      const contas = await Conta.findAll();
      return res.status(200).json(contas);
    } catch (e) {
      return res.status(400).json({
        errors: e,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: 'Id inválido',
        });
      }
      const conta = await Conta.findOne({ where: { id } });

      return res.status(200).json(conta);
    } catch (e) {
      return res.status(400).json({
        errors: e,
      });
    }
  }

  async store(req, res) {
    try {
      const existPermission = await Permission.checksPermission(req.userId, 'insert');

      if (!existPermission) {
        return res.status(400).json({
          errors: 'Este usuario não possui a permissao necessaria',
        });
      }

      const {
        documento, fornecedor, dataPagamento, dataVencimento,
        valor, numCheque, banco, formaPagamento, observacao,
      } = req.body;

      if (!documento || !fornecedor || !dataPagamento || !dataVencimento
        || !valor || !banco || !formaPagamento || !observacao) {
        return res.status(400).json({
          errors: 'Valores invalidas',
        });
      }

      const newConta = await Conta.create({
        documento,
        fornecedor,
        data_pagamento: dataPagamento,
        data_vencimento: dataVencimento,
        valor,
        numCheque,
        banco,
        forma_pagamento: formaPagamento,
        user_id: req.userId,
        observacao,

      });

      return res.status(200).json({ newConta });
    } catch (e) {
      return res.status(400).json({
        errors: e,
      });
    }
  }

  async delete(req, res) {
    try {
      const existPermission = await Permission.checksPermission(req.userId, 'delet');

      if (!existPermission) {
        return res.status(400).json({
          errors: 'Este usuario não possui a permissao necessaria',
        });
      }

      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: 'Id inválido',
        });
      }

      const conta = await Conta.findByPk(id);

      if (!conta) {
        return res.status(400).json({
          errors: 'Esta conta não existe ou já foi excluido',
        });
      }

      await Conta.destroy({ where: { id } });

      return res.status(200).json(true);
    } catch (e) {
      return res.status(401).json({
        errors: e,
      });
    }
  }

  async update(req, res) {
    try {
      const existPermission = await Permission.checksPermission(req.userId, 'edit');

      if (!existPermission) {
        return res.status(400).json({
          errors: 'Este usuario não possui a permissao necessaria',
        });
      }

      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: 'Id inválido',
        });
      }

      const conta = await Conta.findByPk(id);

      if (!conta) {
        return res.status(400).json({
          errors: 'Esta conta não existe',
        });
      }

      const {
        documento, fornecedor, dataPagamento, dataVencimento,
        valor, numCheque, banco, formaPagamento, observacao,
      } = req.body;

      if (!documento && !fornecedor && !dataPagamento && !dataVencimento
        && !valor && !banco && !formaPagamento && !observacao) {
        return res.status(400).json({
          errors: 'Valores invalidas',
        });
      }

      const updatedConta = await conta.update({
        documento,
        fornecedor,
        data_pagamento: dataPagamento,
        data_vencimento: dataVencimento,
        valor,
        numCheque,
        banco,
        forma_pagamento: formaPagamento,
        observacao,
      });

      return res.status(200).json(updatedConta);
    } catch (e) {
      return res.status(401).json({
        errors: e,
      });
    }
  }
}

export default new ContasController();
