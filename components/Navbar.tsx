
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ViewType } from '../App';

interface NavbarProps {
  currentView: ViewType;
}

const Navbar: React.FC<NavbarProps> = ({ currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', view: 'home' as ViewType, path: '/', icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
    { name: 'All Puppies', view: 'all-puppies' as ViewType, path: '/puppies', icon: <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /> },
    { name: 'Blog', view: 'blog' as ViewType, path: '/blog', icon: <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" /> },
    { name: 'About Us', view: 'about' as ViewType, path: '/about', icon: <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
  ];

  return (
    <>
      <nav className="sticky top-0 z-[100] bg-surface/80 backdrop-blur-md border-b border-main shadow-sm h-16 sm:h-20 flex items-center transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link 
              to="/" 
              className="flex items-center group shrink-0 outline-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-2xl flex items-center justify-center text-white mr-2.5 sm:mr-3 shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                {/* <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white"/>
                </svg> */}
                <img src="/images/logo.png" alt="Yahweh Puppy Farm" className="w-9 h-9 sm:w-10 sm:h-10" />

              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl font-black tracking-tight text-main leading-none">
                  Yahweh<span className="text-primary">Puppy</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-muted uppercase tracking-[0.2em] mt-1">Elite Farm</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.view}
                  to={item.path}
                  className={`text-xs font-black uppercase tracking-widest transition-all hover:text-primary outline-none py-2 border-b-2 ${
                    currentView === item.view || (item.view === 'blog' && currentView === 'blog-detail') 
                    ? 'text-primary border-primary' 
                    : 'text-muted border-transparent hover:border-main'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/puppies"
                className="bg-primary text-white px-7 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 active:scale-95 ml-4"
              >
                Find a Dog
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-surface rounded-xl text-main shadow-sm border border-main active:scale-90 transition-all"
              aria-label="Open Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-[2000] md:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        <div 
          className={`absolute top-0 right-0 h-full w-[280px] bg-surface shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-5 flex justify-between items-center border-b border-main">
            <div className="flex flex-col">
              <span className="text-lg font-black text-main tracking-tight leading-none">Menu</span>
              <span className="text-[9px] font-bold text-muted uppercase trackingwidest mt-1">Yahweh Puppy Farm</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 bg-main rounded-xl flex items-center justify-center text-muted border border-main active:scale-90 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
            {navItems.map((item) => (
              <Link
                key={item.view}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all duration-200 ${
                  currentView === item.view 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-muted hover:bg-main'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    currentView === item.view ? 'bg-white/20' : 'bg-main text-muted'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <span className="text-sm font-black tracking-tight">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="p-5 border-t border-main bg-surface">
            <Link 
              to="/puppies"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center bg-primary text-white py-3.5 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 active:scale-95 mb-4"
            >
              Browse Pups
            </Link>
            
            <div className="mb-6">
              <a 
                href="https://www.instagram.com/yahweh_puppy_farm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-xl text-white shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all active:scale-[0.98] group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-[11px] font-black uppercase tracking-[0.2em]">Instagram</span>
              </a>
            </div>

            <p className="text-[9px] font-black text-muted uppercase tracking-[0.15em] text-center">
              Divine Companions 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
