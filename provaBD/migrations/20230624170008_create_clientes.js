/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('cliente', function(table) {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('endereco').notNullable();
      table.string('numeroTel').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cliente")
};
