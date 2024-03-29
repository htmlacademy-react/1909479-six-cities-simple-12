import { Offers } from '../types/offers';

export const offers: Offers = [
  {
    id: '1',
    previewImage: 'img/room.jpg',
    photos: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
    ],
    isPremium: true,
    title: 'Wood and stone place',
    rating: 3.5,
    type: 'Private room',
    bedrooms: 2,
    maxAdults: 8,
    price: 180,
    conveniences: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    hostName: 'Bob',
    avatar: 'img/avatar-max.jpg',
    isPro: false,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    city: {
      location: {
        lat: 52.4009553943508,
        lng: 4.90309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    }
  },
  {
    id: '2',
    previewImage: 'img/apartment-03.jpg',
    photos: [
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
    ],
    isPremium: false,
    title: 'Nice, cozy, warm big bed apartment ',
    rating: 4.3,
    type: 'Apartment',
    bedrooms: 2,
    maxAdults: 8,
    price: 180,
    conveniences: [
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    hostName: 'Olga',
    avatar: 'img/avatar-angelina.jpg',
    isPro: true,
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      location: {
        lat: 52.3009553943508,
        lng: 4.73309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    }
  },
  {
    id: '3',
    previewImage: 'img/apartment-02.jpg',
    photos: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
    ],
    isPremium: false,
    title: 'Beautiful & luxurious studio at great location',
    rating: 4.5,
    type: 'Private room',
    bedrooms: 3,
    maxAdults: 6,
    price: 150,
    conveniences: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge'
    ],
    hostName: 'Anna',
    avatar: 'img/avatar-angelina.jpg',
    isPro: false,
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      location: {
        lat: 52.2609553943508,
        lng: 4.80309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    }
  },
  {
    id: '4',
    previewImage: 'img/apartment-01.jpg',
    photos: [
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
    ],
    isPremium: true,
    title: 'Canal View Prinsengracht',
    rating: 3.4,
    type: 'Apartment',
    bedrooms: 1,
    maxAdults: 3,
    price: 110,
    conveniences: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
    ],
    hostName: 'Max',
    avatar: 'img/avatar-max.jpg',
    isPro: true,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    city: {
      location: {
        lat: 52.3909553943508,
        lng: 4.85309666406198,
        zoom: 10
      },
      name: 'Amsterdam'
    }
  },

];
