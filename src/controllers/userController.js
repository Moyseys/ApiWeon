import User from '../models/UserModels';

class UserController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          errors: ['Valores inválidos'],
        });
      }
      const novoUser = await User.create(req.body);
      const { id } = novoUser;
      return res.json({ id, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: ['Erro'],
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const { id, email } = user;
      return res.json({ id, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const { email, password } = req.body;

      const novosDados = await user.update({ email, password });
      const { newId, newEmail } = novosDados;
      return res.json({ newId, newEmail });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Valores inválidos'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
