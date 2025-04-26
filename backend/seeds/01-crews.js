exports.seed = function(knex) {
  return knex('crews').del()
   .then(function() {
    return knex('crews').insert([
      {id:1, name:'Straw Hat Pirates'},
      {id:2, name: 'Heart Pirates'},
      {id:3, name: 'Red-Haired Pirates'},
      {id:4, name: 'Blackbeard Pirates'},
      {id:5, name: 'Big Mom Pirates'},
      {id:6, name: 'Whitebeard Pirates'},
      {id:7, name: 'Roger Pirates'}
    ])
   })
}
