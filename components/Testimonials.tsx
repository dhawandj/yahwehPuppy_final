
import React from 'react';
import { TESTIMONIALS } from '../mockData';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-40 relative bg-main overflow-hidden transition-colors duration-300">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <div className="absolute top-1/4 -left-20 text-[20rem] font-black tracking-tighter transform -rotate-90 text-main">LEGACY</div>
        <div className="absolute bottom-1/4 -right-20 text-[20rem] font-black tracking-tighter transform rotate-90 text-main">DIVINE</div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold"></div>
            <span className="text-[11px] font-black text-gold uppercase tracking-[0.5em]">The Testimonial Archive</span>
            <div className="h-px w-10 bg-gold"></div>
          </div>
          <h2 className="text-5xl sm:text-8xl font-black text-main tracking-tighter leading-none">
            Divine <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-primary">Chapters</span>
          </h2>
        </div>

        <div className="space-y-48 sm:space-y-64">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={testimonial.id} 
              className={`relative flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-0`}
            >
              {/* ASYMMETRICAL ARCHWAY IMAGE */}
              <div className="relative w-full lg:w-[60%] group">
                <div className={`absolute -inset-10 bg-primary/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ${idx % 2 === 0 ? 'right-0' : 'left-0'}`}></div>
                
                <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[1.2/1] overflow-hidden rounded-t-[15rem] sm:rounded-t-[25rem] rounded-b-3xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-2xl transition-all duration-700 border border-main">
                  <img 
                    src={testimonial.storyImage} 
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                    alt={testimonial.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/20"></div>
                </div>

                {/* DIGITAL TRUST SEAL */}
                <div className={`absolute bottom-10 ${idx % 2 === 0 ? '-right-10' : '-left-10'} z-30 hidden sm:block`}>
                  <div className="w-32 h-32 bg-surface rounded-full shadow-2xl flex items-center justify-center p-2 border border-main animate-spin-slow">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-main">
                      <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                      <text className="text-[11px] font-black uppercase tracking-[0.2em]">
                        <textPath xlinkHref="#curve">Yahweh Certified • Divine Companion • Legacy •</textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                       </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING GLASS PORTAL */}
              <div className={`w-full lg:w-[50%] relative z-20 mt-[-100px] lg:mt-0 ${idx % 2 === 0 ? 'lg:-ml-32' : 'lg:-mr-32'}`}>
                <div className="bg-surface/80 backdrop-blur-3xl border border-main p-10 sm:p-16 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 hover:translate-y-[-10px]">
                  
                  <div className="flex items-center gap-2 mb-10">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-2xl sm:text-4xl font-bold text-main leading-[1.15] tracking-tight mb-10">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-end justify-between pt-10 border-t border-main">
                    <div>
                      <h4 className="text-2xl font-black text-main tracking-tighter italic mb-1 uppercase">
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] font-black text-muted uppercase tracking-[0.3em]">
                        {testimonial.location}
                      </p>
                    </div>
                    
                    <div className="hidden sm:flex flex-col items-end">
                      <div className="text-[9px] font-black text-primary uppercase tracking-widest mb-1 px-3 py-1 bg-primary/5 rounded-full">Certified Bond</div>
                      <span className="text-[10px] font-bold text-muted/50">Verified Client #0{testimonial.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* REIMAGINED CTA SECTION */}
        <div className="mt-64 relative">
          <div className="absolute inset-0 bg-slate-950 rounded-[4rem] transform -rotate-1"></div>
          <div className="relative bg-slate-900 rounded-[4rem] p-12 sm:p-24 overflow-hidden border border-white/5">
             {/* Decorative Background Glow */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h3 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tighter leading-none">
                     Ready to <br />
                     <span className="text-gold">Start Your Chapter?</span>
                   </h3>
                   <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 max-w-md">
                     Join thousands of elite families who have found their divine companion with Yahweh Puppy Farm.
                   </p>
                   <div className="flex flex-wrap gap-6">
                     <button className="px-12 py-5 bg-gold text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-white hover:translate-y-[-4px] shadow-2xl">
                       Adopt a Puppy
                     </button>
                     <button className="px-12 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-white/10">
                       Our Standards
                     </button>
                   </div>
                </div>
                
                <div className="hidden lg:grid grid-cols-2 gap-4">
                   <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
                      <p className="text-3xl font-black text-white mb-1">10k+</p>
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Happy Pets</p>
                   </div>
                   <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md translate-y-8">
                      <p className="text-3xl font-black text-gold mb-1">100%</p>
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Certified Health</p>
                   </div>
                   <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
                      <p className="text-3xl font-black text-white mb-1">22+</p>
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">States Reached</p>
                   </div>
                   <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md translate-y-8">
                      <p className="text-3xl font-black text-white mb-1">14yr</p>
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Legacy</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
