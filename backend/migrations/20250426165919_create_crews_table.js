exports.up = function(knex) {
    return knex.schema.createTable('crews', table => {
     table.increments('id');
     table.string('name').notNullable().unique
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('crews')
}