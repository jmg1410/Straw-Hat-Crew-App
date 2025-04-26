export const getStrawHatCrew = async () => {
    try {
     const response = await fetch('http://localhost:8080/strawhats');
     console.log('response -->', response)
     const data = await response.json();
     return data
    } catch (err) {
     console.log('Error fetching pirates', err);
    }
}


/* export const getStrawHatCrew = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name:'Monkey D. Luffy',
                    role:'Captain',
                    bounty:'3,000,000,000 Berries',
                    img: '/luffy.avif'
                },
                {
                    id: 2,
                    name:'Roronoa Zoro',
                    role:'Swordsman',
                    bounty:'1,111,000,000 Berries',
                    img: '/zoro.jpeg'
                },
                {
                    id: 3,
                    name:'Nami',
                    role: 'Navigator',
                    bounty: '366,000,000 Berries',
                    img: '/nami.avif'
                },
                {
                    id: 4,
                    name: 'Vinsmoke Sanji',
                    role:"Crew's Chef",
                    bounty: '1,032,000,000 Berries',
                    img: '/sanji.avif'
                },
                {
                    id: 5,
                    name: 'Jinbe',
                    role:"helmsman",
                    bounty: '1,100,000,000 Berries',
                    img: '/jinbe.webp'
                },
                {
                    id: 6,
                    name: 'Nico Robin',
                    role:"Archaeologist",
                    bounty: '930,000,000 Berries',
                    img: '/robin.webp' 
                },
                {
                    id: 7,
                    name: 'Ussop',
                    role:"Sniper",
                    bounty: '500,000,000 Berries',
                    img: '/godussop.avif' 
                },
                {
                    id: 8,
                    name: 'Franky',
                    role:"shipwright ",
                    bounty: '394,000,000 Berries',
                    img: '/Franky.webp' 
                },
                {
                    id: 9,
                    name: 'Brook',
                    role:"Musician",
                    bounty: '383,000,000 Berries',
                    img: '/brook.webp' 
                },
                {
                    id: 10,
                    name: 'Tony Tony Chopper',
                    role:"Doctor",
                    bounty: '1000 Berries',
                    img: '/chopper.webp' 
                },
            ]);
        }, 1000)
    })
}
*/