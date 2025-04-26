exports.seed = function(knex) {
  return knex('straw_hats').del()
  .then(function () {
return knex('straw_hats').insert([
  {
    id: 1,
    name: 'Monkey D. Luffy',
    role: 'Captain',
    bounty: '3,000,000,000 Berries',
    img: '/luffy.avif',
    backstory: 'Luffy grew up in the Goa Kingdom. Inspired by Shanks, he set out to become King of the Pirates after eating the Gomu Gomu no Mi.'
  },
  {
    id: 2,
    name: 'Roronoa Zoro',
    role: 'Swordsman',
    bounty: '1,111,000,000 Berries',
    img: '/zoro.jpeg',
    backstory: 'Zoro trained as a swordsman since childhood, vowing to become the world\'s greatest swordsman to honor his fallen friend Kuina.'
  },
  {
    id: 3,
    name: 'Nami',
    role: 'Navigator',
    bounty: '366,000,000 Berries',
    img: '/nami.avif',
    backstory: 'Nami was an orphan raised in Cocoyasi Village. She joined the Straw Hats after freeing her home from Arlong\'s rule.'
  },
  {
    id: 4,
    name: 'Vinsmoke Sanji',
    role: "Crew's Chef",
    bounty: '1,032,000,000 Berries',
    img: '/sanji.avif',
    backstory: 'Sanji grew up abused by his royal family and escaped to the seas, learning cooking under Zeff at Baratie before joining the crew.'
  },
  {
    id: 5,
    name: 'Jinbe',
    role: 'Helmsman',
    bounty: '1,100,000,000 Berries',
    img: '/jinbe.webp',
    backstory: 'Jinbe is a fish-man and former Warlord who allied with Luffy during the war and officially joined the Straw Hats later.'
  },
  {
    id: 6,
    name: 'Nico Robin',
    role: 'Archaeologist',
    bounty: '930,000,000 Berries',
    img: '/robin.webp',
    backstory: 'Robin, a survivor of Ohara, spent years on the run before finding true friends in the Straw Hats, helping her pursue the true history.'
  },
  {
    id: 7,
    name: 'Usopp',
    role: 'Sniper',
    bounty: '500,000,000 Berries',
    img: '/godussop.avif',
    backstory: 'Usopp grew up in Syrup Village, dreaming of becoming a brave warrior of the sea, inspired by his pirate father Yasopp.'
  },
  {
    id: 8,
    name: 'Franky',
    role: 'Shipwright',
    bounty: '394,000,000 Berries',
    img: '/Franky.webp',
    backstory: 'Franky was abandoned as a child and raised by Tom the shipwright. He built the Straw Hats\' ship, the Thousand Sunny.'
  },
  {
    id: 9,
    name: 'Brook',
    role: 'Musician',
    bounty: '383,000,000 Berries',
    img: '/brook.webp',
    backstory: 'Brook was a musician and swordsman who died but returned thanks to the Revive-Revive Fruit, waiting years to reunite with Laboon.'
  },
  {
    id: 10,
    name: 'Tony Tony Chopper',
    role: 'Doctor',
    bounty: '1000 Berries',
    img: '/chopper.webp',
    backstory: 'Chopper, a blue-nosed reindeer, ate the Human-Human Fruit. Rejected by both humans and reindeer, he found belonging with the Straw Hats.'
  }
  
]);

  })
}