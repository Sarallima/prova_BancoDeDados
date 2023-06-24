/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cliente').del()
  await knex('cliente').insert([
    {id: 1, nome: 'nome exemplo', endereco:'endereco exemplo',numeroTel:'num exemplo',},
    {id: 2, nome: 'nome exemplo', endereco:'endereco exemplo',numeroTel:'num exemplo',},
    {id: 3, nome: 'nome exemplo', endereco:'endereco exemplo',numeroTel:'num exemplo',}
  ]);
};
