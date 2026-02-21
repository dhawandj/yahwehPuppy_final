
import React from 'react';
import { TESTIMONIALS } from '../mockData';

const UserReviewsScroller: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Verified Client Gallery</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Community <span className="text-primary italic">Portraits</span></h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
            <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Global Authentication Active</span>
          </div>
        </div>

        {/* Horizontal Scroller with Large Portrait Cards */}
        <div className="flex gap-6 overflow-x-auto pb-12 scrollbar-hide -mx-6 px-6 snap-x snap-mandatory">
          {TESTIMONIALS.map((review) => (
            <div 
              key={review.id}
              className="shrink-0 w-[300px] sm:w-[400px] snap-start group"
            >
              <div className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-700">
                {/* Main Portrait Image (Using storyImage for high-res impact) */}
                <img 
                  src={review.storyImage} 
                  alt={review.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent"></div>

                {/* Rating Badge */}
                <div className="absolute top-8 left-8">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                    <svg className="w-3 h-3 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-[10px] font-black text-white">5.0</span>
                  </div>
                </div>

                {/* Glassmorphic Information Tray */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    
                    {/* Testimonial Snippet */}
                    <div className="relative mb-6">
                       <div className="absolute -top-4 -left-2 text-4xl text-white/20 font-serif italic">“</div>
                       <p className="relative z-10 text-white text-sm sm:text-base font-bold italic leading-relaxed line-clamp-2 pl-3">
                         {review.comment}
                       </p>
                    </div>

                    {/* Meta Section */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <div>
                        <h4 className="text-lg font-black text-white tracking-tighter uppercase italic leading-none mb-1">
                          {review.name}
                        </h4>
                        <p className="text-[9px] font-black text-white/50 uppercase tracking-[0.2em]">
                          {review.location}
                        </p>
                      </div>
                      
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary border border-primary/30">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.25.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* View All Stories Card */}
          <div className="shrink-0 w-[200px] sm:w-[240px] flex items-center justify-center snap-start">
             <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center border-2 border-dashed border-slate-200 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 mb-6">
                   <svg className="w-8 h-8 text-slate-300 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                   </svg>
                </div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">See All Stories</h4>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">10,000+ Adoptions</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReviewsScroller;
