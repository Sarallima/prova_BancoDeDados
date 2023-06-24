/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pedido').del()
  await knex('pedido').insert([
    
      {pedido_id: 13, dataDopedido: '2000/05/03'},
      {pedido_id: 13, dataDopedido: '2000/05/03'},
      {pedido_id: 12, dataDopedido: '2000/05/03'}
    ]);
 
};
