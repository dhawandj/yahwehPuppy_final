
import React from 'react';
import { Link } from 'react-router-dom';
import { ViewType } from '../App';
import { CATEGORIES } from '../mockData';

// const CATEGORIES = [
//   { name: 'Golden Retriever', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=250' },
//   { name: 'French Bulldog', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=250' },
//   { name: 'Beagle', image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=250' },
//   { name: 'Poodle', image: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=250' },
//   { name: 'German Shepherd', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=250' },
//   { name: 'Labrador', image: 'https://images.unsplash.com/photo-1591768793355-74d7c836038c?auto=format&fit=crop&q=80&w=250' },
// ];



interface BreedCategoriesProps {
  onNavigate: (view: ViewType) => void;
}

const BreedCategories: React.FC<BreedCategoriesProps> = ({ onNavigate }) => {
  return (
    <div className="py-6 sm:py-10 overflow-hidden">
      <div className="flex items-center justify-between mb-8 px-4 sm:px-0">
        <h3 className="text-[10px] sm:text-xs font-black text-muted uppercase tracking-[0.25em]">Browse By Heritage</h3>
        <Link 
          to="/puppies"
          className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-widest hover:opacity-80 transition-opacity outline-none"
        >
          See All
        </Link>
      </div>
      
      <div className="flex gap-6 sm:gap-10 overflow-x-auto pb-4 scrollbar-hide px-4 sm:px-0">
        {CATEGORIES.map((cat, i) => (
          <Link 
            key={i} 
            to="/puppies" 
            className="group flex flex-col items-center shrink-0 w-24 sm:w-32 outline-none"
          >
            <div className="relative w-full aspect-square mb-4 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border-2 border-main shadow-sm group-hover:border-primary/40 transition-all duration-300 ring-4 ring-transparent group-hover:ring-primary/10">
              <img 
                src={cat.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115" 
                alt={cat.name} 
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-[9px] sm:text-[10px] font-black text-main text-center group-hover:text-primary transition-colors line-clamp-2 uppercase tracking-tight max-w-[90px] leading-tight">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BreedCategories;
