const knexfile = require('../knexfile')
const database = require('knex')(knexfile)

class Cliente {
  static async criarCliente(cliente) {
    try {
      const [id] = await database('cliente').insert(cliente);
      console.log('Projeto criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarCliente(id, cliente) {
    try {
      const result = await database('cliente').where({ id }).update(cliente);
      console.log('cliente atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterCliente(id) {
    try {
      const cliente = await database('cliente').where({ id }).first();
      
      if (!cliente){
        console.error('Cliente não encontrado')
      }else{
        console.log('Cliente encontrado:', cliente);
      }
    } catch (error) {
      console.error('Erro ao obter cliente:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirCliente(id) {
    try {
      const result = await database('projeto').where({ id }).del();
      console.log('Cliente excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
    } finally {
      database.destroy();
    }
  }
}
module.exports = Cliente;