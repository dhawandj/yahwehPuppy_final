
import { Dog, Testimonial, BlogPost } from './types';


export const DOGS: Dog[] = [
  {
    id: '4',
    name: 'Toy Poodle',
    breed: 'Toy Poodle',
    category: 'Premium',
    age: '8 weeks',
    gender: 'Male',
    price: 90000,
    images: ['/images/toy_poodle_1.jpeg', '/images/toy_poodle_2.jpeg', '/images/toy_poodle_3.jpeg'],
    description: 'Hypoallergenic and very intelligent small breed.',
    tags: ['Hypoallergenic'],
    personality: ['Alert', 'Smart'],
    weight: '3–4 kg',
    lifeSpan: '14–16 years',
    faqs: [
      {
        question: 'Is Toy Poodle hypoallergenic?',
        answer: 'Yes, they shed very less and are allergy-friendly.'
      },
      {
        question: 'What is Toy Poodle price?',
        answer: 'Price ranges between ₹70,000 to ₹1,20,000.'
      }
    ]
  },
  {
    id: '14',
    name: 'Maltipoo',
    breed: 'Maltipoo',
    category: 'Premium',
    age: '8 weeks',
    gender: 'Female',
    price: 95000,
    images: ['/images/maltipoo_1.jpeg', '/images/maltipoo_2.jpeg', '/images/maltipoo_3.jpeg'],
    description: 'Designer breed, small and friendly.',
    tags: ['Designer Breed'],
    personality: ['Friendly', 'Playful'],
    weight: '3–6 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Is Maltipoo hypoallergenic?',
        answer: 'Yes, they are low shedding.'
      },
      {
        question: 'Maltipoo price?',
        answer: '₹70,000 onwards.'
      }
    ]
  },
  {
    id: '7',
    name: 'Bichon Frise',
    breed: 'Bichon Frise',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Female',
    price: 95000,
    images: ['/images/bichon_frise_1.jpeg', '/images/bichon_frise_2.jpeg', '/images/bichon_frise_3.jpeg'],
    description: 'Friendly and fluffy companion dog.',
    tags: ['Fluffy'],
    personality: ['Friendly'],
    weight: '5–8 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Is Bichon Frise good for kids?',
        answer: 'Yes, they are playful and friendly.'
      },
      {
        question: 'Bichon Frise price?',
        answer: 'Price ranges from ₹80,000 onwards.'
      }
    ]
  },
  {
    id: '5',
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    category: 'New Arrival',
    age: '10 weeks',
    gender: 'Female',
    price: 45000,
    images: ['/images/shitzu_1.jpeg', '/images/shitzu_2.jpeg', '/images/shitzu_3.jpeg'],
    description: 'Cute and friendly apartment companion.',
    tags: ['Apartment Dog'],
    personality: ['Friendly', 'Playful'],
    weight: '4–7 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Is Shih Tzu good for flats?',
        answer: 'Yes, they are perfect for apartment living.'
      },
      {
        question: 'What is Shih Tzu price?',
        answer: 'Price ranges between ₹30,000 to ₹60,000.'
      }
    ]
  },
  {
    id: '1',
    name: 'Golden Retriever',
    breed: 'Golden Retriever',
    category: 'New Arrival',
    age: '12 weeks',
    gender: 'Male',
    price: 45000,
    images: [
      '/images/golden_retriever_1.jpeg',
      '/images/golden_retriever_2.jpeg',
      '/images/golden_retriever_3.jpeg'
    ],
    description: 'Friendly and loyal family dog, excellent with kids.',
    tags: ['Family Dog'],
    personality: ['Gentle', 'Intelligent', 'Loyal'],
    weight: '25–30 kg',
    lifeSpan: '10–12 years',
    faqs: [
      {
        question: 'What is Golden Retriever price in India?',
        answer: 'Golden Retriever price ranges from ₹30,000 to ₹55,000 depending on bloodline and quality.'
      },
      {
        question: 'Is Golden Retriever good for families?',
        answer: 'Yes, they are one of the best family-friendly breeds.'
      }
    ]
  },
  {
    id: '6',
    name: 'Maltese',
    breed: 'Maltese',
    category: 'Premium',
    age: '9 weeks',
    gender: 'Female',
    price: 85000,
    images: ['/images/maltese_1.jpeg', '/images/maltese_2.jpeg', '/images/maltese_3.jpeg'],
    description: 'Small fluffy companion dog.',
    tags: ['Fluffy'],
    personality: ['Gentle', 'Loving'],
    weight: '3–4 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Is Maltese hypoallergenic?',
        answer: 'Yes, Maltese dogs are low shedding.'
      },
      {
        question: 'Maltese price in India?',
        answer: 'Starts from ₹60,000 onwards.'
      }
    ]
  },
  {
    id: '3',
    name: 'Siberian Husky',
    breed: 'Siberian Husky',
    category: 'Premium',
    age: '12 weeks',
    gender: 'Female',
    price: 50000,
    images: ['/images/siberian_husky_1.jpeg', '/images/siberian_husky_2.jpeg', '/images/siberian_husky_3.jpeg'],
    description: 'Energetic breed with stunning appearance.',
    tags: ['Cold Climate'],
    personality: ['Energetic', 'Independent'],
    weight: '20–27 kg',
    lifeSpan: '12–14 years',
    faqs: [
      {
        question: 'Can Husky survive in India?',
        answer: 'They require air-conditioned environment in hot regions.'
      },
      {
        question: 'What is Husky price in India?',
        answer: 'Price starts from ₹40,000 onwards.'
      }
    ]
  },
  {
    id: '10',
    name: 'Beagle',
    breed: 'Beagle',
    category: 'New Arrival',
    age: '12 weeks',
    gender: 'Male',
    price: 35000,
    images: ['/images/beagle_1.jpeg', '/images/beagle_2.jpeg', '/images/beagle_3.jpeg'],
    description: 'Energetic and friendly scent hound.',
    tags: ['Active'],
    personality: ['Curious', 'Cheerful'],
    weight: '9–11 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Does Beagle require daily exercise?',
        answer: 'Yes, Beagles are active and need regular activity.'
      },
      {
        question: 'Beagle price?',
        answer: '₹25,000 to ₹45,000.'
      }
    ]
  },
  {
    id: '2',
    name: 'German Shepherd',
    breed: 'German Shepherd',
    category: 'New Arrival',
    age: '14 weeks',
    gender: 'Male',
    price: 35000,
    images: ['/images/german_shepherd_1.jpeg', '/images/german_shepherd_2.jpeg', '/images/german_shepherd_3.jpeg'],
    description: 'Highly intelligent working and guard dog.',
    tags: ['Guard Dog'],
    personality: ['Protective', 'Smart'],
    weight: '30–40 kg',
    lifeSpan: '9–13 years',
    faqs: [
      {
        question: 'Is German Shepherd good for security?',
        answer: 'Yes, they are excellent guard and police dogs.'
      },
      {
        question: 'What is German Shepherd price?',
        answer: 'Price ranges between ₹25,000 to ₹45,000.'
      }
    ]
  },
  {
    id: '8',
    name: 'Indian Spitz',
    breed: 'Indian Spitz',
    category: 'New Arrival',
    age: '10 weeks',
    gender: 'Female',
    price: 20000,
    images: ['/images/indian_spitz_1.jpeg', '/images/indian_spitz_2.jpeg', '/images/indian_spitz_3.jpeg'],
    description: 'Popular Indian breed, alert and adaptable to Indian climate.',
    tags: ['Indian Breed'],
    personality: ['Alert', 'Playful'],
    weight: '6–10 kg',
    lifeSpan: '10–14 years',
    faqs: [
      {
        question: 'Is Indian Spitz suitable for Indian homes?',
        answer: 'Yes, they adapt very well to Indian climate and apartments.'
      },
      {
        question: 'Indian Spitz price?',
        answer: 'Price ranges between ₹8,000 to ₹20,000.'
      }
    ]
  },
  {
    id: '9',
    name: 'Chow Chow',
    breed: 'Chow Chow',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Male',
    price: 80000,
    images: ['/images/chow_chow_1.jpeg', '/images/chow_chow_2.jpeg', '/images/chow_chow_3.jpeg'],
    description: 'Lion-like fluffy breed with calm temperament.',
    tags: ['Fluffy'],
    personality: ['Independent', 'Calm'],
    weight: '20–32 kg',
    lifeSpan: '8–12 years',
    faqs: [
      {
        question: 'Is Chow Chow aggressive?',
        answer: 'They are reserved but loyal to their family.'
      },
      {
        question: 'Chow Chow price in India?',
        answer: 'Starts from ₹60,000 onwards.'
      }
    ]
  },
  {
    id: '11',
    name: 'Great Dane',
    breed: 'Great Dane',
    category: 'New Arrival',
    age: '14 weeks',
    gender: 'Male',
    price: 60000,
    images: ['/images/great_dane_1.jpeg', '/images/great_dane_2.jpeg', '/images/great_dane_3.jpeg'],
    description: 'Gentle giant with calm behavior.',
    tags: ['Large Breed'],
    personality: ['Calm', 'Friendly'],
    weight: '45–90 kg',
    lifeSpan: '7–10 years',
    faqs: [
      {
        question: 'Is Great Dane suitable for small homes?',
        answer: 'They need space due to their large size.'
      },
      {
        question: 'Great Dane price?',
        answer: 'Starts from ₹50,000 onwards.'
      }
    ]
  },
  {
    id: '12',
    name: 'Rottweiler',
    breed: 'Rottweiler',
    category: 'New Arrival',
    age: '14 weeks',
    gender: 'Male',
    price: 40000,
    images: ['/images/rottweiler_1.jpeg', '/images/rottweiler_4.jpeg', '/images/rottweiler_3.jpeg'],
    description: 'Strong and confident guard dog.',
    tags: ['Guard Dog'],
    personality: ['Protective', 'Confident'],
    weight: '35–60 kg',
    lifeSpan: '8–10 years',
    faqs: [
      {
        question: 'Is Rottweiler good for security?',
        answer: 'Yes, they are powerful and loyal guard dogs.'
      },
      {
        question: 'Rottweiler price?',
        answer: '₹30,000 to ₹60,000.'
      }
    ]
  },
  {
    id: '13',
    name: 'Boxer',
    breed: 'Boxer',
    category: 'New Arrival',
    age: '12 weeks',
    gender: 'Male',
    price: 30000,
    images: ['/images/boxer_1.jpeg', '/images/boxer_2.jpeg', '/images/boxer_3.jpeg'],
    description: 'Energetic and loyal breed.',
    tags: ['Family Dog'],
    personality: ['Energetic', 'Loyal'],
    weight: '25–32 kg',
    lifeSpan: '10–12 years',
    faqs: [
      {
        question: 'Is Boxer good for families?',
        answer: 'Yes, they are playful and protective.'
      },
      {
        question: 'Boxer price?',
        answer: '₹25,000 to ₹40,000.'
      }
    ]
  },
  {
    id: '15',
    name: 'Doberman',
    breed: 'Doberman',
    category: 'New Arrival',
    age: '14 weeks',
    gender: 'Female',
    price: 35000,
    images: ['/images/doberman_1.jpeg', '/images/doberman_2.jpeg', '/images/doberman_3.jpeg'],
    description: 'Elegant and powerful guard dog.',
    tags: ['Guard Dog'],
    personality: ['Alert', 'Fearless'],
    weight: '30–45 kg',
    lifeSpan: '10–13 years',
    faqs: [
      {
        question: 'Is Doberman aggressive?',
        answer: 'Properly trained Dobermans are loyal and protective.'
      },
      {
        question: 'Doberman price?',
        answer: '₹25,000 to ₹50,000.'
      }
    ]
  },
  {
    id: '16',
    name: 'Yorkshire Terrier',
    breed: 'Yorkshire Terrier',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Female',
    price: 95000,
    images: ['/images/yorkshire_terrier_1.jpeg', '/images/yorkshire_terrier_2.jpeg'],
    description: 'Small and stylish companion dog.',
    tags: ['Small Breed'],
    personality: ['Bold', 'Affectionate'],
    weight: '2–3 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Is Yorkshire Terrier good for flats?',
        answer: 'Yes, perfect for apartments.'
      },
      {
        question: 'Yorkshire Terrier price?',
        answer: '₹70,000 onwards.'
      }
    ]
  },
  {
    id: '17',
    name: 'Akita',
    breed: 'Akita',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Female',
    price: 90000,
    images: ['/images/akita_1.jpeg', '/images/akita_2.jpeg'],
    description: 'Strong and dignified breed.',
    tags: ['Large Breed'],
    personality: ['Loyal', 'Independent'],
    weight: '32–50 kg',
    lifeSpan: '10–13 years',
    faqs: [
      {
        question: 'Is Akita good for first-time owners?',
        answer: 'They require experienced handling.'
      },
      {
        question: 'Akita price?',
        answer: '₹80,000 onwards.'
      }
    ]
  },
  {
    id: '18',
    name: 'Saint Bernard',
    breed: 'Saint Bernard',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Female',
    price: 95000,
    images: ['/images/saint_bernard_1.jpeg', '/images/saint_bernard_2.jpeg', '/images/saint_bernard_3.jpeg'],
    description: 'Massive and gentle mountain breed.',
    tags: ['Large Breed'],
    personality: ['Gentle', 'Friendly'],
    weight: '50–90 kg',
    lifeSpan: '8–10 years',
    faqs: [
      {
        question: 'Can Saint Bernard live in hot areas?',
        answer: 'They need cool environments.'
      },
      {
        question: 'Saint Bernard price?',
        answer: '₹80,000 onwards.'
      }
    ]
  },
  {
    id: '19',
    name: 'Cocker Spaniel',
    breed: 'Cocker Spaniel',
    category: 'New Arrival',
    age: '10 weeks',
    gender: 'Female',
    price: 40000,
    images: ['/images/cocker_spaniel_1.jpeg', '/images/cocker_spaniel_2.jpeg', '/images/cocker_spaniel_3.jpeg'],
    description: 'Sweet and affectionate family dog.',
    tags: ['Family Dog'],
    personality: ['Gentle', 'Happy'],
    weight: '12–15 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Is Cocker Spaniel good for kids?',
        answer: 'Yes, they are affectionate and friendly.'
      },
      {
        question: 'Cocker Spaniel price?',
        answer: '₹30,000 to ₹50,000.'
      }
    ]
  },
  {
    id: '20',
    name: 'Miniature Pinscher',
    breed: 'Miniature Pinscher',
    category: 'New Arrival',
    age: '10 weeks',
    gender: 'Female',
    price: 35000,
    images: ['/images/min_pin_1.jpeg', '/images/min_pin_2.jpeg', '/images/min_pin_3.jpeg'],
    description: 'Small but energetic guard dog.',
    tags: ['Small Breed'],
    personality: ['Alert', 'Energetic'],
    weight: '3–5 kg',
    lifeSpan: '12–14 years',
    faqs: [
      {
        question: 'Is Miniature Pinscher aggressive?',
        answer: 'They are alert but manageable with training.'
      },
      {
        question: 'Miniature Pinscher price?',
        answer: '₹25,000 onwards.'
      }
    ]
  },
  {
    id: '21',
    name: 'Cockapoo',
    breed: 'Cockapoo',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Female',
    price: 75000,
    images: ['/images/cockapoo_1.jpeg', '/images/cockapoo_2.jpeg', '/images/cockapoo_3.jpeg'],
    description: 'Friendly designer breed known for intelligence and low shedding coat.',
    tags: ['Designer Breed'],
    personality: ['Affectionate', 'Smart'],
    weight: '5–10 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Is Cockapoo hypoallergenic?',
        answer: 'Yes, they shed less and are suitable for allergy-sensitive families.'
      },
      {
        question: 'Cockapoo price in India?',
        answer: 'Starts from ₹60,000 onwards depending on lineage.'
      }
    ]
  },
  {
    id: '22',
    name: 'Jack Russell Terrier',
    breed: 'Jack Russell Terrier',
    category: 'New Arrival',
    age: '10 weeks',
    gender: 'Female',
    price: 40000,
    images: ['/images/jack_russell_terrier_1.jpeg', '/images/jack_russell_terrier_2.jpeg', '/images/jack_russell_terrier_3.jpeg'],
    description: 'Highly energetic small breed, perfect for active families.',
    tags: ['Active'],
    personality: ['Energetic', 'Fearless'],
    weight: '6–8 kg',
    lifeSpan: '13–16 years',
    faqs: [
      {
        question: 'Does Jack Russell need daily exercise?',
        answer: 'Yes, they are very active and require daily play and walks.'
      },
      {
        question: 'Jack Russell price?',
        answer: '₹30,000 to ₹50,000.'
      }
    ]
  },
  {
    id: '23',
    name: 'Pitbull',
    breed: 'Pitbull',
    category: 'New Arrival',
    age: '10 weeks',
    gender: 'Female',
    price: 35000,
    images: ['/images/pitbull_1.jpeg', '/images/pitbull_2.jpeg', '/images/pitbull_3.jpeg'],
    description: 'Strong and muscular breed known for loyalty and courage.',
    tags: ['Guard Dog'],
    personality: ['Loyal', 'Protective'],
    weight: '16–30 kg',
    lifeSpan: '10–14 years',
    faqs: [
      {
        question: 'Is Pitbull aggressive?',
        answer: 'With proper training and socialization, they are loving and loyal.'
      },
      {
        question: 'Pitbull price in India?',
        answer: '₹25,000 to ₹45,000.'
      }
    ]
  },
  {
    id: '24',
    name: 'American Bully',
    breed: 'American Bully',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Female',
    price: 95000,
    images: ['/images/american_bully_1.jpeg', '/images/american_bully_2.jpeg', '/images/american_bully_3.jpeg'],
    description: 'Muscular companion breed with calm and friendly nature.',
    tags: ['Premium Breed'],
    personality: ['Calm', 'Loyal'],
    weight: '20–40 kg',
    lifeSpan: '10–13 years',
    faqs: [
      {
        question: 'Is American Bully good for families?',
        answer: 'Yes, they are affectionate and protective towards family.'
      },
      {
        question: 'American Bully price?',
        answer: '₹80,000 onwards depending on size and bloodline.'
      }
    ]
  },
  {
    id: '25',
    name: 'Cavapoo',
    breed: 'Cavapoo',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Female',
    price: 90000,
    images: ['/images/cavapoo_1.jpeg', '/images/cavapoo_2.jpeg', '/images/cavapoo_3.jpeg'],
    description: 'Small designer breed, affectionate and ideal for apartments.',
    tags: ['Designer Breed'],
    personality: ['Friendly', 'Playful'],
    weight: '5–8 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Is Cavapoo good for first-time owners?',
        answer: 'Yes, they are easy to train and friendly.'
      },
      {
        question: 'Cavapoo price?',
        answer: '₹75,000 onwards.'
      }
    ]
  },
  {
    id: '26',
    name: 'Cane Corso',
    breed: 'Cane Corso',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Female',
    price: 95000,
    images: ['/images/cane_corso_1.jpeg', '/images/cane_corso_2.jpeg', '/images/cane_corso_3.jpeg'],
    description: 'Large Italian mastiff breed known for protection and loyalty.',
    tags: ['Guard Dog'],
    personality: ['Protective', 'Confident'],
    weight: '40–50 kg',
    lifeSpan: '9–12 years',
    faqs: [
      {
        question: 'Is Cane Corso suitable for beginners?',
        answer: 'They require experienced handling and proper training.'
      },
      {
        question: 'Cane Corso price in India?',
        answer: '₹80,000 onwards depending on bloodline.'
      }
    ]
  },
  {
    id: '27',
    name: 'French Bulldog',
    breed: 'French Bulldog',
    category: 'Premium',
    age: '10 weeks',
    gender: 'Female',
    price: 90000,
    images: ['/images/french_bulldog_1.jpeg', '/images/french_bulldog_2.jpeg', '/images/french_bulldog_3.jpeg'],
    description: 'Compact, affectionate companion dog with a playful personality.',
    tags: ['Small Breed', 'Apartment Dog'],
    personality: ['Affectionate', 'Playful'],
    weight: '8–14 kg',
    lifeSpan: '10–12 years',
    faqs: [
      {
        question: 'Is French Bulldog good for apartments?',
        answer: 'Yes, they are excellent apartment dogs due to their small size and low exercise needs.'
      },
      {
        question: 'French Bulldog price in India?',
        answer: 'Price ranges between ₹80,000 to ₹1,20,000 depending on bloodline and quality.'
      }
    ]
  },
  {
    id: '28',
    name: 'Pug',
    breed: 'Pug',
    category: 'New Arrival',
    age: '8 weeks',
    gender: 'Female',
    price: 45000,
    images: ['/images/pug_1.jpeg', '/images/pug_2.jpeg', '/images/pug_3.jpeg'],
    description: 'Small, charming, and affectionate companion breed.',
    tags: ['Apartment Dog', 'Family Dog'],
    personality: ['Friendly', 'Playful'],
    weight: '6–8 kg',
    lifeSpan: '12–15 years',
    faqs: [
      {
        question: 'Is Pug good for families?',
        answer: 'Yes, Pugs are affectionate and great with children and elderly people.'
      },
      {
        question: 'Pug price in India?',
        answer: 'Price ranges between ₹25,000 to ₹50,000 depending on quality and breeder.'
      }
    ]
  },

  {
    id: '29',
    name: 'Labrador Retriever',
    breed: 'Labrador Retriever',
    category: 'New Arrival',
    age: '12 weeks',
    gender: 'Male',
    price: 40000,
    images: [
      '/images/labradors_1.jpeg',
      '/images/labradors_2.jpeg',
      '/images/labradors_3.jpeg'
    ],
    description: 'Friendly, intelligent, and one of the most popular family dogs.',
    tags: ['Family Dog'],
    personality: ['Friendly', 'Loyal', 'Active'],
    weight: '25–36 kg',
    lifeSpan: '10–12 years',
    faqs: [
      {
        question: 'Is Labrador good for families?',
        answer: 'Yes, Labradors are extremely friendly and great with children.'
      },
      {
        question: 'Labrador price in India?',
        answer: 'Price ranges between ₹30,000 to ₹50,000 depending on lineage.'
      }
    ]
  }
];
export const CATEGORIES = [
  { name: 'Toy Poodle', image: '/images/toy_poodle_1.jpeg' },
  { name: 'Maltipoo', image: '/images/maltipoo_1.jpeg' },
  { name: 'Bichon Frise', image: '/images/bichon_frise_1.jpeg' },
  { name: 'Shih Tzu', image: '/images/shitzu_2.jpeg' },
  { name: 'Golden Retriever', image: '/images/golden_retriever_2.jpeg' },
  { name: 'Maltese', image: '/images/maltese_1.jpeg' },
  { name: 'Siberian Husky', image: '/images/siberian_husky_2.jpeg' },
  { name: 'Beagle', image: '/images/beagle_1.jpeg' },
  { name: 'German Shepherd', image: '/images/german_shepherd_1.jpeg' },
  { name: 'Indian Spitz', image: '/images/indian_spitz_1.jpeg' },
  { name: 'Chow Chow', image: '/images/chow_chow_1.jpeg' },
  { name: 'Great Dane', image: '/images/great_dane_1.jpeg' },
  { name: 'Rottweiler', image: '/images/rottweiler_1.jpeg' },
  { name: 'Boxer', image: '/images/boxer_1.jpeg' },
  { name: 'French Bulldog', image: '/images/french_bulldog_1.jpeg' },
  { name: 'Pug', image: '/images/pug_1.jpeg' },
  { name: 'Doberman', image: '/images/doberman_1.jpeg' },
  { name: 'Yorkshire Terrier', image: '/images/yorkshire_terrier_1.jpeg' },
  { name: 'Akita', image: '/images/akita_1.jpeg' },
  { name: 'Saint Bernard', image: '/images/saint_bernard_1.jpeg' },
  { name: 'Cocker Spaniel', image: '/images/cocker_spaniel_1.jpeg' },
  { name: 'Miniature Pinscher', image: '/images/min_pin_1.jpeg' },
  { name: 'Cockapoo', image: '/images/cockapoo_1.jpeg' },
  { name: 'Jack Russell Terrier', image: '/images/jack_russell_terrier_1.jpeg' },
  { name: 'Pitbull', image: '/images/pitbull_1.jpeg' },
  { name: 'American Bully', image: '/images/american_bully_1.jpeg' },
  { name: 'Cavapoo', image: '/images/cavapoo_1.jpeg' },
  { name: 'Cane Corso', image: '/images/cane_corso_1.jpeg' },
  { name: 'Labrador Retriever', image: '/images/labradors_1.jpeg' },
];



export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ramesh Kumar',
    location: 'Bangalore',
    comment:
      'Very professional and genuine experience. The puppy was healthy and active. Proper vaccination record was provided. Highly satisfied.',
    rating: 5,
    image: '/images/review_1.jpeg',
    storyImage: '/images/review_1.jpeg'
  },
  {
    id: '2',
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    comment:
      'Transparent pricing and good guidance. They answered all my doubts patiently. Our French Bulldog is doing great.',
    rating: 5,
    image: '/images/review_2.jpeg',
    storyImage: '/images/review_2.jpeg'
  },
  {
    id: '3',
    name: 'Arjun Nair',
    location: 'Chennai',
    comment:
      'Smooth process from booking to delivery. Puppy arrived healthy and energetic. Will definitely recommend.',
    rating: 5,
    image: '/images/review_3.jpeg',
    storyImage: '/images/review_3.jpeg'
  },
  {
    id: '4',
    name: 'Priya Sharma',
    location: 'Delhi',
    comment:
      'Got a Toy Poodle from them. The quality is top-notch and the puppy is very playful. Dealing was very transparent and honest.',
    rating: 5,
    image: '/images/review_4.jpeg',
    storyImage: '/images/review_4.jpeg'
  },
  {
    id: '5',
    name: 'Aniket Deshmukh',
    location: 'Pune',
    comment:
      'Very happy with the service. They guided me about the diet and vaccination schedule properly. Best place for pet lovers in India.',
    rating: 5,
    image: '/images/review_5.jpeg',
    storyImage: '/images/review_5.jpeg'
  },
  {
    id: '6',
    name: 'Megha Iyer',
    location: 'Kochi',
    comment:
      'The home delivery was very safe. Puppy was not stressed at all. Genuine breed and healthy condition. Five stars for sure!',
    rating: 5,
    image: '/images/review_6.jpeg',
    storyImage: '/images/review_6.jpeg'
  },
  {
    id: '7',
    name: 'Vikram Singh',
    location: 'Chandigarh',
    comment:
      'I was worried about the bloodline, but they provided all the papers. My Golden Retriever is now 6 months old and very healthy.',
    rating: 5,
    image: '/images/review_7.jpeg',
    storyImage: '/images/review_7.jpeg'
  },
  {
    id: '8',
    name: 'Sunita Banerjee',
    location: 'Kolkata',
    comment:
      'Everything was tension-free. From selection to home arrival, they kept me updated with videos and photos. Highly recommended.',
    rating: 5,
    image: '/images/review_8.jpeg',
    storyImage: '/images/review_8.jpeg'
  },
  {
    id: '9',
    name: 'Rahul Verma',
    location: 'Lucknow',
    comment:
      'Excellent experience. The staff is very polite and they don’t just sell—they actually care about the puppy’s future home.',
    rating: 5,
    image: '/images/review_9.jpeg',
    storyImage: '/images/review_9.jpeg'
  },
  {
    id: '10',
    name: 'Deepika ',
    location: 'Mumbai',
    comment:
      'The breed quality is 100% original. My Shih Tzu is the star of the building! Thank you for the smooth process.',
    rating: 5,
    image: '/images/review_10.jpeg',
    storyImage: '/images/review_10.jpeg'
  }
];


export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Divine Guide to Puppy Nutrition',
    excerpt: 'Discover the certified standards for feeding your new companion. We dive into skeletal health and optimal growth diets.',
    content: `Nutrient density is the cornerstone of premium puppy raising. At Yahweh Farm, we believe that a puppy's first year dictates their entire life's health trajectory.\n\n### Why Raw-Infused Diets Matter\nMany commercial kibbles lack the bioavailable proteins necessary for elite skeletal development. We recommend a balanced blend of high-quality protein, essential fatty acids, and calcium-to-phosphorus ratios that support steady, not rapid, growth.\n\n### The Role of Hydration\nFresh, filtered water is often overlooked. Puppies require significantly more hydration relative to their body mass than adults. Ensure constant access to clean water to prevent kidney stress during rapid growth phases.`,
    author: 'Dr. Aris V.',
    date: 'Oct 12, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=250',
    category: 'Nutrition',
    tags: ['Health', 'Puppy Care', 'Diet']
  },
  {
    id: 'blog-2',
    title: 'Socializing Your Golden Retriever',
    excerpt: 'How to build trust and gentle temperament in the most popular breed. Tips from our behavioral experts.',
    content: `Golden Retrievers are born with a heart of gold, but temperament is a cultivated asset. Socialization isn't just about meeting other dogs; it's about sensory confidence.\n\n### The Critical Window\nThe first 16 weeks are vital. Expose your pup to 100 new sounds, surfaces, and people. This builds the "divine temperament" we strive for at Yahweh Farm.\n\n### Positive Reinforcement\nNever use fear. Goldens respond best to praise and play. A confident Golden is a safe Golden.`,
    author: 'Mark Sterling',
    date: 'Oct 05, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1000',
    category: 'Training',
    tags: ['Behavior', 'Golden Retriever']
  },
  {
    id: 'blog-3',
    title: 'Ethical Breeding: Beyond the Certificate',
    excerpt: 'What really goes into a "Premium Farm" standard? Understanding skeletal health and genetic screening.',
    content: `Ethical breeding is a commitment to the future. At Yahweh, we go beyond simple pedigree papers.\n\n### Genetic Screening\nEvery sire and dam is tested for over 200 genetic markers to eliminate hereditary diseases like hip dysplasia and heart conditions.\n\n### Quality of Life\nOur dogs are not machines. They live in climate-controlled environments with plenty of space to run and socialize.`,
    author: 'Owner, Yahweh Farm',
    date: 'Sep 28, 2026',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000',
    category: 'Ethical Farming',
    tags: ['Legacy', 'Breeding']
  },
  {
    id: 'blog-4',
    title: 'Preparing Your Home for a New Arrival',
    excerpt: 'A checklist for puppy-proofing your living space and ensuring a stress-free transition.',
    content: `Bringing home a Yahweh puppy is an event. Preparation ensures it's a happy one.\n\n### Puppy Proofing\nGet down on their level. Check for loose wires, toxic plants, and small objects. Puppies explore with their mouths.\n\n### The Safe Zone\nDesignate a "crate" or a small area as their sanctuary. This helps with house training and gives them a place to rest when overwhelmed.`,
    author: 'Sarah Johnson',
    date: 'Sep 20, 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=250',
    category: 'Lifestyle',
    tags: ['Home', 'Arrival']
  },
  {
    id: 'blog-5',
    title: 'The Vaccination Schedule 101',
    excerpt: 'Keeping your certified companion safe from preventable diseases in the Indian climate.',
    content: `In India, the threat of Parvovirus and Distemper is real. Timing is everything.\n\n### The Core Vaccines\n6 weeks, 9 weeks, and 12 weeks. Do not skip these. They are the shield for your puppy's immune system.\n\n### Rabies and Beyond\nRabies is mandatory, but talk to your vet about Kennel Cough and Leptospirosis based on your location.`,
    author: 'Dr. Aris V.',
    date: 'Sep 12, 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=1000',
    category: 'Medical',
    tags: ['Health', 'Vaccines']
  },
  {
    id: 'blog-6',
    title: 'Grooming Secrets for Premium Coats',
    excerpt: 'From Poodles to Shepherds: how to maintain a show-quality coat at home.',
    content: `A healthy coat reflects a healthy body. Grooming is also a bonding exercise.\n\n### Brushing Routine\nLong-haired breeds need daily attention to prevent matting. Short-haired breeds benefit from weekly brushing to distribute natural oils.\n\n### Nail Care\nStart early. Puppies should get used to their paws being handled. Monthly trimming prevents skeletal issues caused by long nails.`,
    author: 'Elena Rossi',
    date: 'Sep 05, 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1000',
    category: 'Grooming',
    tags: ['Coat Care', 'Style']
  },
  {
    id: 'blog-7',
    title: 'Potty Training: The Divine Method',
    excerpt: 'Consistency and patience are the keys to a clean home and a happy pup.',
    content: `Potty training is the first real communication between you and your pup.\n\n### The 15-Minute Rule\nTake them out 15 minutes after eating, drinking, or waking up. Success should be met with immediate, high-value rewards.\n\n### Consistency is Key\nUse the same command word and take them to the same spot. This builds a strong mental association.`,
    author: 'Mark Sterling',
    date: 'Aug 28, 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1591768793355-74d7c836038c?auto=format&fit=crop&q=80&w=250',
    category: 'Training',
    tags: ['Home Care', 'Training']
  },
  {
    id: 'blog-8',
    title: 'A Decade of Yahweh: Our Journey',
    excerpt: 'Celebrating 14 years of connecting families with their purebred companions.',
    content: `What started in a small room with one Golden Retriever has grown into India's premier certified farm.\n\n### Our Growth\nWe have placed over 3,000 puppies in loving homes across 22 states. Our commitment to ethics remains unchanged.\n\n### The Future\nWe are investing in new AI technologies to better match families with breeds, ensuring every match is a divine one.`,
    author: 'Owner, Yahweh Farm',
    date: 'Aug 20, 2026',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=250',
    category: 'Legacy',
    tags: ['History', 'Anniversary']
  }
];
