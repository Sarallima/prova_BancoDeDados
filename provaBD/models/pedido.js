const knexfile = require('../knexfile')
const database = require('knex')(knexfile)

class Pedido {
  static async criarTarefa(pedido) {
    try {
      const [id] = await database('pedido').insert(pedido);
      console.log('Pedido criado com ID:', id);
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarPedido(id, pedido) {
    try {
      const result = await database('pedido').where({ id }).update(pedido);
      console.log('Tarefa atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterPedido(id) {
    try {
      const pedido = await database('pedido').where({ id }).first();
      
      if (!pedido){
        console.error('Pedido não encontrado')
      }else{
        console.log('Pedido encontrado:', tarefa);
      }
    } catch (error) {
      console.error('Erro ao obter pedido:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirPedido(id) {
    try {
      const result = await database('Pedido').where({ id }).del();
      console.log('Pedido excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir pedido:', error);
    } finally {
      database.destroy();
    }
  }
}
module.exports = Pedido;