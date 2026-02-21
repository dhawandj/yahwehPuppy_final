
export interface Dog {
  id: string;
  name: string;
  breed: string;
  category: 'Puppy' | 'Adult' | 'Premium' | 'New Arrival';
  age: string;
  gender: 'Male' | 'Female';
  price: number;
  images: string[];
  description: string;
  tags: string[];
  personality: string[];
  weight: string;
  lifeSpan: string;
  faqs?: { question: string; answer: string; }[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
  storyImage: string; // Added for production-grade visual social proof
}

export interface RecommendedBreed {
  breed: string;
  reason: string;
  suitabilityScore: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}
