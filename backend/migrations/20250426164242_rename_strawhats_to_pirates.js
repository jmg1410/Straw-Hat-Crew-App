exports.up = function(knex) {
    return knex.schema.renameTable('straw_hats', 'pirates');
}

exports.down= function(knex) {
    return knex.schema.renameTable('straw_hats', 'pirates')
}
