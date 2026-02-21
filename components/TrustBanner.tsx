
import React from 'react';

const TrustBanner: React.FC = () => {
  return (
    <section className="w-full bg-surface border-y border-main py-10 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4">
          
          {/* 10k+ Happy Customers */}
          <div className="flex items-center gap-4 group">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-surface overflow-hidden bg-main shadow-sm transition-transform group-hover:translate-y-[-2px]">
                  <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary flex items-center justify-center text-[10px] font-black text-white shadow-sm">
                10k+
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-main leading-none">10k+ Happy Owners</span>
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">Divine Community</span>
            </div>
          </div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block w-px h-10 bg-main"></div>

          {/* Google Rating */}
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-card rounded-2xl shadow-sm border border-main">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black text-main">4.8+</span>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">Google Reviews</span>
            </div>
          </div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block w-px h-10 bg-main"></div>

          {/* KCI & UKC Certified */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
               <div className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-[9px] font-black tracking-tighter uppercase shadow-lg">KCI</div>
               <div className="px-3 py-1.5 bg-primary text-white rounded-lg text-[9px] font-black tracking-tighter uppercase shadow-lg shadow-primary/20">UKC</div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-main leading-none tracking-tight">Fully Certified</span>
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1">Heritage Registration</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
