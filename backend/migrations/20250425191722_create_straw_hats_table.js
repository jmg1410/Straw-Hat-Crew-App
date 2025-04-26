/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('straw_hats', function(table){
        table.increments('id');
        table.string('name').notNullable();
        table.string('role').notNullable();
        table.string('bounty');
        table.string('img');
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('straw_hats')
};
