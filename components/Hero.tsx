
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ViewType } from '../App';

interface HeroProps {
  onNavigate: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1-second delay for a smoother reveal
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-4 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3.5rem] bg-slate-900 aspect-[4/6] sm:aspect-[21/9] lg:aspect-[24/10] shadow-2xl">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 sm:opacity-70 transition-transform duration-[10s] hover:scale-105"
            alt="Divine Puppy Companion"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
          
          {/* Content Wrapper */}
          <div 
            className={`relative h-full flex flex-col items-center justify-center px-6 py-12 sm:px-16 lg:px-24 transition-all duration-[1200ms] ease-out text-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Collection Label */}
            <div className="flex items-center gap-2 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-white/90 mb-6 sm:mb-10">
              <span className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
              2026 Collection Live
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.15] mb-8 sm:mb-12 tracking-tight max-w-2xl sm:max-w-4xl">
              Find Your <span className="text-gold">Divine</span> Certified <br className="hidden sm:block" /> 
              Companion
            </h1>
            
            {/* Action Buttons */}
            <div className="flex flex-col items-stretch w-full max-w-[320px] sm:max-w-none sm:flex-row sm:justify-center gap-4">
              <Link 
                to="/puppies"
                className="group px-8 py-4 sm:px-12 sm:py-5 bg-gold text-slate-900 rounded-2xl font-black text-sm sm:text-base hover:bg-white transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-2 outline-none"
              >
                Shop Breeds
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {/* AI Matchmaker hidden as per user request */}
              {/* <button className="hidden sm:flex ...">AI Matchmaker</button> */}
            </div>
            
            {/* Stats Badges - Anchored at the bottom like the screenshot */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 right-6 sm:left-auto sm:right-auto flex items-center justify-center gap-3 sm:gap-6 w-[calc(100%-3rem)] sm:w-auto">
              <div className="flex-1 sm:min-w-[140px] bg-white/10 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-2xl border border-white/10 text-center shadow-lg">
                 <p className="text-lg sm:text-2xl font-black text-white leading-none mb-1">100%</p>
                 <p className="text-[8px] sm:text-[10px] font-bold uppercase text-gold tracking-widest">Certified</p>
              </div>
              <div className="flex-1 sm:min-w-[140px] bg-white/10 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-4 rounded-2xl border border-white/10 text-center shadow-lg">
                 <p className="text-lg sm:text-2xl font-black text-white leading-none mb-1">2k+</p>
                 <p className="text-[8px] sm:text-[10px] font-bold uppercase text-gold tracking-widest">Happy Pets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
