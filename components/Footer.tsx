
import React from 'react';
import { Link } from 'react-router-dom';
import { ViewType } from '../App';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface text-main pt-24 pb-12 border-t border-main transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-8">
              <Link to="/" className="flex items-center outline-none">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <span className="text-2xl font-black tracking-tight text-main">Yahweh<span className="text-primary">Farm</span></span>
              </Link>
            </div>
            <p className="text-muted text-base leading-relaxed font-medium">
              A premium-driven puppy farm dedicated to ethical breeding, skeletal health, and divine temperament since 2012.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-main">Farm Collection</h4>
            <ul className="space-y-4 text-muted text-sm font-bold">
              <li><Link to="/puppies" className="hover:text-primary transition-colors outline-none">All Puppies</Link></li>
              <li><Link to="/puppies" className="hover:text-primary transition-colors outline-none">Purebred Premium</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors outline-none">Certified Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-main">Quick Portal</h4>
            <ul className="space-y-4 text-muted text-sm font-bold">
              <li><Link to="/" className="hover:text-primary transition-colors outline-none">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors outline-none">Our Story</Link></li>
              <li><Link to="/matchmaker" className="hover:text-primary transition-colors outline-none">Breed Matchmaker</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors outline-none">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-main">Contact</h4>
            <div className="space-y-4 text-muted text-sm font-bold">
              <a href="https://maps.app.goo.gl/EfFwodufBd7m7rVh6" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">📍 Regional Hub: Bangalore / Hyderabad</a>
              <p>📞 Phone: +91 83105 58173</p>
              <a href="mailto:Yahwehpuppyfarminbangalore@gmail.com" className="block hover:text-primary transition-colors lowercase">✉️ Yahwehpuppyfarminbangalore@gmail.com</a>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 bg-main rounded-xl flex items-center justify-center border border-main hover:bg-primary hover:text-white transition-all group" title="Facebook">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/yahweh_puppy_farm/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-main rounded-xl flex items-center justify-center border border-main hover:bg-[#E1306C] hover:text-white transition-all group" title="Instagram">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-main rounded-xl flex items-center justify-center border border-main hover:bg-[#FF0000] hover:text-white transition-all group" title="YouTube">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-main pt-12 flex flex-col md:flex-row justify-between items-center text-muted text-xs font-black uppercase tracking-widest gap-6">
          <p>© 2026 Yahweh Puppy Farm. Managed with Integrity.</p>
          <div className="flex space-x-12">
            <Link to="/privacy" className="hover:text-primary transition-colors outline-none">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors outline-none">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
