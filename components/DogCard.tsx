import React, { useState, useEffect } from 'react';
import { Dog } from '../types';

interface DogCardProps {
  dog: Dog;
  onSelect: (id: string) => void;
}

const DogCard: React.FC<DogCardProps> = ({ dog, onSelect }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % dog.images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [dog.images.length]);

  return (
    <div 
      onClick={() => onSelect(dog.id)}
      className="group cursor-pointer relative bg-surface rounded-br-[3rem] rounded-bl-[1.5rem] rounded-tr-[1.5rem] rounded-tl-[5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] hover:-translate-y-3 border border-main"
    >
      {/* Image Master Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-main rounded-br-[3rem] rounded-bl-[1.5rem] rounded-tr-[1.5rem] rounded-tl-[5rem]">
        {dog.images.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === currentImg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } group-hover:scale-110 transition-transform duration-[2s]`}
            alt={dog.name}
          />
        ))}
        
        {/* Top Overlay: Category & Premium Seal */}
        <div className="absolute top-6 left-8 right-6 flex justify-between items-start">
          <div className="bg-surface/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-white/20">
            <p className="text-[10px] font-black text-main uppercase tracking-[0.2em]">{dog.category}</p>
          </div>
          
          <div className="w-12 h-12 rounded-full bg-gold/90 backdrop-blur-md flex items-center justify-center text-white border-2 border-white/50 shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>

        {/* Bottom Glass Stat Bar */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-[2rem] border border-white/20 p-4 flex items-center justify-around translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             <div className="text-center">
                <p className="text-[8px] text-white/60 font-black uppercase tracking-widest mb-0.5">Age</p>
                <p className="text-[11px] text-white font-bold">{dog.age}</p>
             </div>
             <div className="w-px h-6 bg-white/20"></div>
             <div className="text-center">
                <p className="text-[8px] text-white/60 font-black uppercase tracking-widest mb-0.5">Gender</p>
                <p className="text-[11px] text-white font-bold">{dog.gender}</p>
             </div>
             <div className="w-px h-6 bg-white/20"></div>
             <div className="text-center">
                <p className="text-[8px] text-white/60 font-black uppercase tracking-widest mb-0.5">Vibe</p>
                <p className="text-[11px] text-white font-bold">Divine</p>
             </div>
          </div>
        </div>
      </div>
      
      {/* Information Area */}
      <div className="p-8 pb-10 flex flex-col items-center text-center">
        <h3 className="text-3xl font-black text-main tracking-tighter mb-1 transition-colors group-hover:text-primary">
          {dog.name}
        </h3>
        <p className="text-xs font-bold text-muted uppercase tracking-[0.3em] mb-6">
          {dog.breed}
        </p>

        {/* Decorative Divider */}
        <div className="w-12 h-1 bg-primary/20 rounded-full mb-8 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>

        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-main border border-main">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
            <span className="text-[9px] font-black text-muted uppercase tracking-widest">Certified Health</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-main border border-main">
            <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
            <span className="text-[9px] font-black text-muted uppercase tracking-widest">Elite Bloodline</span>
          </div>
        </div>
        
        {/* Revealable Action Label */}
        <div className="mt-8 overflow-hidden h-4">
          <div className="flex flex-col transition-transform duration-500 group-hover:-translate-y-4">
            <span className="text-[10px] font-black text-muted/50 uppercase tracking-[0.2em] h-4">Explore Heritage</span>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] h-4 flex items-center justify-center gap-2">
              View Collection 
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogCard;