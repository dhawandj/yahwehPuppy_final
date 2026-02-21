
import React from 'react';
import { Link } from 'react-router-dom';
import { ViewType } from '../App';

interface ServiceFeaturesProps {
  onNavigate: (view: ViewType) => void;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ onNavigate }) => {
  const moreFeatures = [
    {
      title: "Health First",
      description: "Every pup undergoes a 15-point clinical screening by our elite veterinary panel.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 6.255v4.945c0 6.632 4.192 12.27 10 14.12 5.808-1.85 10-7.488 10-14.12V6.255l-.382-.016z" />
        </svg>
      ),
      accent: "from-emerald-400 to-cyan-500",
      glow: "bg-emerald-500/10"
    },
    {
      title: "KCI Lineage",
      description: "Authentic registration papers and heritage tracking for every certified breed.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      accent: "from-indigo-400 to-purple-500",
      glow: "bg-indigo-500/10"
    },
    {
      title: "Secure Transit",
      description: "White-glove, climate-controlled delivery service to your doorstep.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      accent: "from-blue-400 to-sky-500",
      glow: "bg-blue-500/10"
    },
    {
      title: "Ethical Source",
      description: "Rigorous audits ensure every partner breeder exceeds international welfare codes.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-1.07 0-1.935-.87-1.935-1.935V10.5c0-1.07.87-1.935 1.935-1.935h2.152a2 2 0 001.789-1.106l.5-1A2 2 0 0115.483 5H18.5" />
        </svg>
      ),
      accent: "from-amber-400 to-orange-500",
      glow: "bg-amber-500/10"
    }
  ];

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NEW MODERN MISSION BLOCK */}
        <div className="relative mb-32">
          <div className="bg-[#0f172a] rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-20 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
            {/* Watermark Text */}
            <div className="absolute -top-10 -right-20 text-[12rem] sm:text-[20rem] font-black text-white/[0.03] select-none pointer-events-none tracking-tighter italic">
              DIVINE
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-gold"></div>
                  <span className="text-[11px] font-black text-gold uppercase tracking-[0.5em]">The Yahweh Standard</span>
                </div>
                
                <h2 className="text-4xl sm:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.95]">
                  Divine Care For <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold">Companions</span>
                </h2>
                
                <p className="text-slate-400 text-lg sm:text-xl font-medium leading-relaxed mb-12 max-w-xl">
                  We aren't just breeders; we are the guardians of a sacred bond. Every puppy is a legacy to be cherished and placed in a sanctuary where they can flourish.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link 
                    to="/about"
                    className="relative px-12 py-5 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold hover:translate-y-[-4px] active:scale-95 shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] flex items-center justify-center"
                  >
                    Our Mission
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-5 relative group hidden lg:block">
                <div className="relative z-10">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-gold/30 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="relative rounded-[4rem] overflow-hidden border-[12px] border-white/5 bg-slate-800">
                    <img 
                      src="/images/review_8.jpeg" 
                      alt="Premium Legacy" 
                      className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  {/* Floating Stat Badge */}
                  <div className="absolute -bottom-10 -right-6 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-50 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Global Standard</p>
                    <p className="text-3xl font-black text-slate-900 leading-none">3,000+</p>
                    <p className="text-xs font-bold text-primary mt-1 italic">Families Joined</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW UNIQUE FEATURE CARDS DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {moreFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col"
            >
              {/* Background Glow Aura */}
              <div className={`absolute -top-10 -left-10 w-32 h-32 ${feature.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Vertical Accent Strip */}
              <div className={`absolute left-0 top-0 w-[2px] h-0 bg-gradient-to-b ${feature.accent} group-hover:h-full transition-all duration-700 ease-out`}></div>
              
              <div className="pl-8">
                {/* Icon Container with Organic Blob */}
                <div className="relative w-16 h-16 mb-8">
                   <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500`}></div>
                   <div className="relative w-full h-full flex items-center justify-center text-slate-900 group-hover:text-primary transition-colors">
                     {feature.icon}
                   </div>
                </div>

                <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tighter group-hover:translate-x-1 transition-transform">
                  {feature.title}
                </h4>
                
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
                
                {/* Visual Connector */}
                <div className="mt-6 w-0 h-[1px] bg-slate-100 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceFeatures;
