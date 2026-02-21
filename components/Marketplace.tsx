
import React, { useState, useMemo } from 'react';
import DogCard from './DogCard';
import { DOGS } from '../mockData';

interface MarketplaceProps {
  onSelectDog: (id: string) => void;
}

const CATEGORY_DATA = [
  { name: 'All', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=250' },
  { name: 'Golden Retriever', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=250' },
  { name: 'French Bulldog', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=250' },
  { name: 'Beagle', image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=250' },
  { name: 'Poodle', image: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&q=80&w=250' },
  { name: 'German Shepherd', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80&w=250' },
  { name: 'Labrador', image: 'https://images.unsplash.com/photo-1591768793355-74d7c836038c?auto=format&fit=crop&q=80&w=250' },
];

const Marketplace: React.FC<MarketplaceProps> = ({ onSelectDog }) => {
  const [selectedBreed, setSelectedBreed] = useState('All');
  
  const filteredDogs = useMemo(() => {
    return DOGS.filter(dog => {
      const matchesBreed = selectedBreed === 'All' || dog.breed === selectedBreed;
      return matchesBreed;
    });
  }, [selectedBreed]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Section */}
      <div className="mb-10 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
              Explore Our Farm
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-none">
              The Elite <span className="text-primary">Collection</span>
            </h1>
            <p className="text-slate-500 text-sm sm:text-lg font-medium leading-relaxed">
              Every puppy is a life to be cherished. Find the divine companion that fits your heart and home.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Breed Categories - Refined for Marketplace */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6 px-1">
          <h3 className="text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Filter Certified Lineage</h3>
          {selectedBreed !== 'All' && (
            <button 
              onClick={() => setSelectedBreed('All')}
              className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline"
            >
              Clear Filter
            </button>
          )}
        </div>
        
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORY_DATA.map((cat, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedBreed(cat.name)} 
              className={`group flex flex-col items-center shrink-0 w-24 sm:w-32 outline-none transition-all ${
                selectedBreed === cat.name ? 'scale-105' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <div className={`relative w-full aspect-square mb-3 rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden ring-offset-2 transition-all duration-300 ${
                selectedBreed === cat.name 
                ? 'ring-4 ring-primary shadow-lg' 
                : 'ring-1 ring-slate-100 shadow-sm group-hover:ring-primary/40'
              }`}>
                <img 
                  src={cat.image} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={cat.name} 
                />
                <div className={`absolute inset-0 bg-primary/10 transition-opacity ${
                  selectedBreed === cat.name ? 'opacity-20' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
              </div>
              <span className={`text-[9px] sm:text-[10px] font-black text-center uppercase tracking-wider transition-colors line-clamp-1 ${
                selectedBreed === cat.name ? 'text-primary' : 'text-slate-500'
              }`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid Results */}
      <div className="relative">
        {filteredDogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredDogs.map(dog => (
              <DogCard key={dog.id} dog={dog} onSelect={onSelectDog} />
            ))}
          </div>
        ) : (
          <div className="py-24 sm:py-32 text-center bg-white rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-premium">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">No matching pups found</h3>
            <p className="text-slate-500 text-sm sm:text-base font-medium mb-8">Try adjusting your filters to explore more of our farm.</p>
            <button 
              onClick={() => { setSelectedBreed('All'); }}
              className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-hover shadow-premium transition-all active:scale-95"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Search Result Count */}
      <div className="mt-10 pt-6 border-t border-slate-50 text-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          Showing {filteredDogs.length} {filteredDogs.length === 1 ? 'Pup' : 'Pups'} from the Yahweh Elite Lineage
        </p>
      </div>
    </div>
  );
};

export default Marketplace;
