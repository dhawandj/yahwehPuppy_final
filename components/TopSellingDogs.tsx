
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DOGS } from '../mockData';
import { Dog } from '../types';

interface TopSellingDogsProps {
  onSelectDog: (id: string) => void;
  onNavigate: (view: 'all-puppies') => void;
}

const TopSellingDogs: React.FC<TopSellingDogsProps> = ({ onSelectDog, onNavigate }) => {
  const navigate = useNavigate();
  // Using the same mock data but styled differently for "Top Selling"
  const topSellers = DOGS.slice(0, 4); 

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-[2px] w-8 bg-gold"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Most Requested</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-main tracking-tight">Top Selling <span className="text-primary">Dogs</span></h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-10 scrollbar-hide -mx-4 px-6 sm:mx-0 sm:px-0 snap-x snap-mandatory">
          {/* Leading spacer for mobile padding at start of scroll */}
          <div className="shrink-0 w-1 sm:hidden"></div>

          {topSellers.map((dog) => (
            <div 
              key={dog.id}
              onClick={() => navigate(`/dog/${dog.id}`)}
              className="shrink-0 w-[280px] sm:w-[380px] group cursor-pointer snap-start"
            >
              <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-main shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
                {/* Background Image */}
                <img 
                  src={dog.images[0]} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
                  alt={dog.name}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent"></div>
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Best Seller Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2 bg-surface px-4 py-2 rounded-full shadow-lg">
                    <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-[9px] font-black text-main uppercase tracking-widest">Best Seller</span>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-3xl font-black text-white tracking-tighter mb-1 group-hover:text-gold transition-colors">{dog.name}</h3>
                      <p className="text-xs font-bold text-white/70 uppercase tracking-widest mb-4">{dog.breed}</p>
                      
                      <div className="flex gap-4">
                        <div className="flex flex-col">
                          <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em]">Gender</span>
                          <span className="text-[11px] font-bold text-white">{dog.gender}</span>
                        </div>
                        <div className="w-px h-6 bg-white/10"></div>
                        <div className="flex flex-col">
                          <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.2em]">Certified</span>
                          <span className="text-[11px] font-bold text-white">100% Verified</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-12 h-12 bg-surface rounded-2xl flex items-center justify-center text-main shadow-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-gold hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* All Puppies Card at end of scroll */}
          <div 
            onClick={() => navigate('/puppies')}
            className="shrink-0 w-[200px] h-[400px] flex flex-col items-center justify-center group cursor-pointer bg-card rounded-[2.5rem] border-2 border-dashed border-main hover:bg-surface hover:border-primary/20 transition-all snap-start"
          >
             <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
             </div>
             <span className="text-xs font-black text-muted uppercase tracking-widest group-hover:text-primary transition-colors">All Puppies</span>
          </div>
          
          {/* Trailing spacer for mobile padding at end of scroll */}
          <div className="shrink-0 w-2 sm:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingDogs;
