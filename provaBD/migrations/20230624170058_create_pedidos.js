/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('pedido', function(table) {
      table.increments('id');
      table.integer('pedido_id').notNullable();
      table.date('dataDopedido').notNullable();
      table.foreign('pedido_id').references('id').inTable('clientes')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pedido')
};
