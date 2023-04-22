const db = require('./connection');
const { getLatLong } = require('./utils/mapbox');
const { User, Location, Lodging, Attraction, Eatery } = require('../models');
const mapbox = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mapbox({ accessToken: process.env.MAPBOX_ACCESS_TOKEN });

db.once('open', async () => {
  // delete existing data
  await Location.deleteMany();
  await Lodging.deleteMany();
  await Attraction.deleteMany();
  await Eatery.deleteMany();

  // Seed Locations
  const locationNames = await Location.insertMany([
    { name: 'Paris' },
    { name: 'London' },
    { name: 'Florence' },
    { name: 'Rome' },
    { name: 'Athens' }
  ]);

  const locationResponses = await Promise.all(
    locationNames.map(async (name) => {
      const response = await geocodingClient.forwardGeocode({
        query: name,
        limit: 1
      }).send();

      return response.body.features[0];
    })
  );

  const locations = await Location.insertMany(
    locationResponses.map((response) => {
      return {
        name: response.place_name,
        coordinates: response.center
      };
    })
  );

  console.log('locations seeded');

  
 // Seed Lodgings
 const lodgings = await Lodging.insertMany([
  {
    name: 'Hôtel Ritz Paris',
    description: '5-star luxury hotel located in the heart of Paris.',
    image: 'ritz-paris.jpg',
    rating: 4.8,
    location: locations[0]._id // Use the first location ID
  },
  {
    name: 'Hôtel Costes',
    description: 'Luxury hotel located in the 1st arrondissement of Paris.',
    image: 'hotel-costes.jpg',
    rating: 4.6,
    location: locations[0]._id
  },
    {
      name: 'The Ritz London',
      description: '5-star hotel located in Piccadilly, London.',
      image: 'ritz-london.jpg',
      rating: 4.5,
      location: locations[1]._id // Use the second location ID
    },
    {
      name: 'The Savoy',
      description: 'Luxury hotel located on the Strand in the City of Westminster, London.',
      image: 'savoy.jpg',
      rating: 4.7,
      location: locations[1]._id
    },
]);


// Seed Attractions
const attractions = await Attraction.insertMany([
  {
    name: 'Eiffel Tower',
    description: 'Iconic tower in Paris, France.',
    image: 'eiffel-tower.jpg',
    price: 25,
    location: locations[0]._id // Use the first location ID
  },
  {
    name: 'Louvre Museum',
    description: 'The world\'s largest art museum and a historic monument in Paris, France.',
    image: 'louvre-museum.jpg',
    price: 17,
    location: locations[0]._id
  },
  {
    name: 'Big Ben',
    description: 'The nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London.',
    image: 'big-ben.jpg',
    price: 10,
    location: locations[1]._id // Use the second location ID
  },
  {
    name: 'Tower Bridge',
    description: 'A combined bascule and suspension bridge in London built between 1886 and 1894.',
    image: 'tower-bridge.jpg',
    price: 15,
    location: locations[1]._id
  },
]);

// Seed Eateries
const eateries = await Eatery.insertMany([
  {
    name: 'Le Comptoir du Relais',
    description: 'Restaurant located in the Saint-Germain-des-Prés area of Paris.',
    image: 'le-comptoir-du-relais.jpg',
    rating: 4.7,
    price: 50,
    location: locations[0]._id
  },
  {
    name: 'L\'As du Fallafel',
    description: 'Falafel restaurant located in the Marais district of Paris.',
    image: 'l-as-du-fallafel.jpg',
    rating: 4.5,
    price: 15,
    location: locations[0]._id
  },
]);


  await User.deleteMany();

  await User.create({
    firstName: 'Nick',
    lastName: 'Tozzi',
    email: 'ntozzi@testmail.com',
    password: 'password12345',
    // orders: [
    //   {
    //     venues: [venues[0]._id, venues[0]._id, venues[1]._id]
    //   }
    // ]
  });

  await User.create({
    firstName: 'Jose',
    lastName: 'Del Valle',
    email: 'jdelvalle88@live.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Paul',
    lastName: 'Dangelo',
    email: 'pdangelo@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'Kelley',
    lastName: 'Flinn',
    email: 'kflinn@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
