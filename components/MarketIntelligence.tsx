
import React from 'react';

const BREED_PRICES = [
  { breed: 'Shih-Tzu', price: '₹15,000 - ₹25,000', trend: 'Stable' },
  { breed: 'Siberian Husky', price: '₹25,000 - ₹45,000', trend: 'Trending' },
  { breed: 'Golden Retriever', price: '₹20,000 - ₹35,000', trend: 'High Demand' },
  { breed: 'Labrador Retriever', price: '₹12,000 - ₹22,000', trend: 'Stable' },
  { breed: 'German Shepherd', price: '₹18,000 - ₹30,000', trend: 'Elite' },
  { breed: 'French Bulldog', price: '₹65,000 - ₹95,000', trend: 'Premium' },
];

const REGIONS = [
  {
    city: 'Bangalore & Karnataka',
    hubs: ['Indiranagar', 'Koramangala', 'Jayanagar', 'Whitefield', 'Malleshwaram', 'Sadashivanagar', 'HSR Layout']
  },
  {
    city: 'Hyderabad & Telangana',
    hubs: ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitech City', 'Kondapur', 'Madhapur', 'Manikonda']
  },
  {
    city: 'Delhi-NCR',
    hubs: ['Saket', 'Hauz Khas', 'Lajpat Nagar', 'Dwarka', 'Janakpuri', 'Rohini', 'Chanakyapuri']
  },
  {
    city: 'Mumbai & Maharashtra',
    hubs: ['Bandra', 'Dadar', 'Vile Parle', 'Goregaon', 'Thane', 'Vashi', 'Colaba']
  }
];

const MarketIntelligence: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Intro / Value Prop Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/20">
              India's Premier Pet Portal
            </div>
            <h2 className="text-4xl sm:text-6xl font-black mb-8 tracking-tight leading-tight">
              Premium Puppies <br />
              <span className="text-gold">Across India</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">
              At <span className="text-white font-bold">YahwehPuppyFarm.in</span>, we've redefined the journey of pet parenthood. 
              Our mission is to bridge the gap between ethical, high-standard breeding and your desire for a healthy, 
              divine companion. Whether you're a first-time owner or a seasoned dog lover, we ensure every pup 
              is a pillar of health and joy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                  <span className="text-gold font-bold">₹</span>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Flexible EMI</h4>
                  <p className="text-xs text-slate-500">Own your dream breed with easy monthly installments.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 6.255v4.945c0 6.632 4.192 12.27 10 14.12 5.808-1.85 10-7.488 10-14.12V6.255l-.382-.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">Vet Support</h4>
                  <p className="text-xs text-slate-500">3 months of complimentary vet & nutritionist assistance.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 border border-white/5 rounded-[3rem] p-8 sm:p-12 relative">
             <div className="absolute top-0 right-10 -translate-y-1/2 bg-gold px-4 py-2 rounded-xl text-slate-900 font-black text-[10px] uppercase tracking-widest shadow-xl">
               2026 Price Index
             </div>
             <h3 className="text-xl font-black mb-8 border-l-4 border-primary pl-4">Popular Breed Estimates</h3>
             <div className="space-y-4">
               {BREED_PRICES.map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                   <div>
                     <p className="text-sm font-bold text-white">{item.breed}</p>
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.trend}</p>
                   </div>
                   <p className="text-sm font-black text-gold">{item.price}</p>
                 </div>
               ))}
             </div>
             <p className="mt-6 text-[9px] text-slate-500 text-center font-bold uppercase tracking-widest">
               *Actual prices may vary by lineage and location.
             </p>
          </div>
        </div>

        {/* Regional Reach Section */}
        <div className="pt-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Our Divine Reach</h2>
            <p className="text-slate-500 font-medium">Serving the most prestigious neighborhoods in India's major metros.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {REGIONS.map((region, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-primary-light font-black text-sm uppercase tracking-[0.2em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  {region.city}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {region.hubs.map((hub, j) => (
                    <span key={j} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-bold text-slate-400 transition-colors cursor-default">
                      {hub}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Final Text */}
        <div className="mt-32 p-12 rounded-[3rem] bg-primary/10 border border-primary/20 text-center">
           <h3 className="text-lg font-black text-white mb-6 uppercase tracking-widest">Why Adopt from Yahweh?</h3>
           <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto font-medium">
             Searching for "dogs for sale near me" or "best puppies in Bangalore"? Yahweh Puppy Farm is your ultimate destination. 
             Unlike standard pet shops, we focus on <span className="text-white">Genetic Integrity</span>, 
             <span className="text-white">Social Conditioning</span>, and <span className="text-white">Lifelong Support</span>. 
             Every puppy leaving our farm is a certified companion, ready to bring divine joy to your family. 
             From Siberian Huskies in Delhi to Golden Retrievers in Hyderabad, our reach is nationwide, 
             our quality is unparalleled, and our hearts are always with the pups.
           </p>
        </div>
      </div>
    </section>
  );
};

export default MarketIntelligence;
