exports.seed = function(knex) {
  return knex('ships').del()
   .then(function () {
    return knex('ships').insert([
      { id:1, name:'Thousand Sunny' },
      {id:3, name: 'Red Force'},
      {id:7, name: 'Oro Jackson'},
      {id:2, name: 'Polar Tang'},
      {id:5, name: 'Queen Mama Chanter'},
      {id:6, name: 'Moby Dick'},
      {id:4, name: 'Saber of Xebec'}
    ])
   })
}
