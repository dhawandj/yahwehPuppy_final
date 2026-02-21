
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <img 
          src="/images/review_8.jpeg" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Premium Puppies"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl sm:text-8xl font-black text-white mb-6 tracking-tighter">
            Our <span className="text-primary">Standard</span>
          </h1>
          <p className="text-2xl text-slate-300 font-bold tracking-tight">
            Divine standards. Pure lineage. Eternal companions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Yahweh Puppy Farm</h2>
            <h3 className="text-5xl font-extrabold text-main mb-10 tracking-tight">The Legacy of Yahweh</h3>
            <div className="space-y-8 text-muted text-xl font-medium leading-relaxed">
              <p>
                Yahweh Puppy Farm began in 2012 with a single vision: to elevate the standards of puppy adoption through ethical breeding and uncompromising health protocols.
              </p>
              <p>
                We don't just "sell" dogs. We are the stewards of a purebred lineage. Every pup born at Yahweh undergoes intensive veterinary surveillance from day one, ensuring that when they reach your doorstep, they are pillars of health and joy.
              </p>
              <p>
                Our philosophy is simple: <span className="text-primary font-bold italic">"Divine Care for Divine Companions."</span> We treat every animal as a precious life, providing the best nutrition, climate-controlled environments, and early-stage socialization.
              </p>
            </div>
          </div>
          <div className="relative">
             <img 
              src="/images/review_4.jpeg" 
              className="rounded-[4rem] w-full aspect-[4/5] object-cover shadow-premium transform -rotate-3 border border-main"
              alt="Puppies"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
