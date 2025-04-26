exports.up = function(knex) {
    return knex.schema.table('straw_hats', function(table) {
        table.text('backstory')
    })
}

exports.down = function(knex) {
    return knex.schema.table('straw_hats', function(table) {
        table.dropColumn('backstory')
    })
}
