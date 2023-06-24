
const Tarefa = require('./models/cliente')
const Projetos = require('./models/pedido')

let clienteExemplo = {
  nome: 'cliente1', endereco: 'ruaPitanga', numeroTel: '325678'
}
let pedidoExemplo = {
  pedido_id: 1, dataDopedido: '2000/05/03'
}

Cliente.criarCliente(clienteExemplo)
Pedido.criarPedido(pedidoExemplo)


Cliente.obterCliente(1)
Pedido.obterPedido(1)


let clienteAtualizado  = projetoExemplo
clienteAtualizado.descricao = "Atualizado"

Cliente.atualizarCliente(1, clienteAtualizado)

let pedidoAtualizado  = pedidoExemplo
pedidoAtualizado.descricao = "Atualizado"
Pedido.atualizarPedido(1, pedidoAtualizado)


pedido.excluirPedido(1)
Cliente.excluirCliente(1)