
exports.up = function(knex) {
  return knex.schema.table('pirates', table => {
    table.integer('crew_id')
    .unsigned()
    .references('id')
    .inTable('crews')
    .onDelete('CASCADE')
    .onUpdate('CASCADE');
    table.integer('ship_id')
    .unsigned()
    .references('id')
    .inTable('crews')
    .onDelete('SET NULL')
    .onUpdate('CASCADE')
  })
};


exports.down = function(knex) {
  return knex.schema.table('pirates', table => {
    table.dropColumn('crew_id');
    table.dropColumn('ship_id')
  })
  
};
