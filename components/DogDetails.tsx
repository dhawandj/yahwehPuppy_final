import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageCircle, 
  Phone, 
  Heart, 
  Share2, 
  ChevronRight, 
  ChevronLeft,
  Calendar,
  User,
  Weight,
  Activity,
  CheckCircle2,
  Info,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { DOGS } from '../mockData';
import { Dog } from '../types';
import TrustBanner from './TrustBanner';
import UserReviewsScroller from './UserReviewsScroller';

interface DogDetailsProps {
  dogId: string;
  onBack: () => void;
  onSelectDog: (id: string) => void;
}

const DogDetails: React.FC<DogDetailsProps> = ({ dogId, onBack, onSelectDog }) => {
  const [dog, setDog] = useState<Dog | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "918310558173";

  // Auto-scroll logic
  useEffect(() => {
    if (!dog) return;
    
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % dog.images.length);
    }, 3500); // Change image every 3.5 seconds

    return () => clearInterval(interval);
  }, [dog]);

  // Sync scroll position when activeImage changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollWidth = container.offsetWidth;
      container.scrollTo({
        left: scrollWidth * activeImage,
        behavior: 'smooth',
      });
    }
  }, [activeImage]);

  useEffect(() => {
    const found = DOGS.find(d => d.id === dogId);
    if (found) {
      setDog(found);
      setActiveImage(0);
      setActiveFaq(null);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [dogId]);

  if (!dog) return <div className="h-screen flex items-center justify-center font-bold text-slate-400">Puppy not found.</div>;

  const otherBreeds = DOGS.filter(d => d.id !== dogId);

  return (
    <div className="bg-main min-h-screen transition-colors duration-300">
      {/* --- MOBILE DESIGN (Immersive) --- */}
      <div className="lg:hidden pb-32">
        {/* 1. IMMERSIVE MOBILE HEADER */}
        <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-main">
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 pt-6">
            <button 
              onClick={onBack}
              className="w-10 h-10 flex items-center justify-center bg-surface/20 backdrop-blur-xl rounded-full border border-white/30 text-white active:scale-90 transition-transform"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={`w-10 h-10 flex items-center justify-center bg-surface/20 backdrop-blur-xl rounded-full border border-white/30 transition-all ${isLiked ? 'text-red-500' : 'text-white'}`}
              >
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-surface/20 backdrop-blur-xl rounded-full border border-white/30 text-white">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          {/* Horizontal Swipable Gallery with Ref */}
          <div 
            ref={scrollContainerRef}
            className="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {dog.images.map((img, idx) => (
              <div key={idx} className="min-w-full h-full snap-center">
                <img src={img} alt={dog.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {dog.images.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${activeImage === idx ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} 
              />
            ))}
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-main to-transparent z-10" />
        </div>

        {/* 2. CONTENT CARD */}
        <div className="relative z-20 -mt-8 px-5">
          <div className="bg-card rounded-[2.5rem] p-6 shadow-premium border border-main">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[8px] font-black uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">{dog.category}</span>
                <h1 className="text-4xl font-black text-main mt-2 tracking-tight">{dog.name}</h1>
                <p className="text-lg font-bold text-muted">{dog.breed}</p>
              </div>
              <div className="bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-2xl text-center border border-emerald-500/20">
                <p className="text-[10px] font-black uppercase tracking-tighter leading-none opacity-60">Status</p>
                <p className="text-xs font-black">Available</p>
              </div>
            </div>

            {/* Quick Stats Grid with Lucide Icons */}
            <div className="grid grid-cols-2 gap-3 py-6 border-y border-main my-6">
              {[
                { label: 'Age', val: dog.age, icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                { label: 'Gender', val: dog.gender, icon: User, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                { label: 'Weight', val: dog.weight, icon: Weight, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                { label: 'Life Span', val: dog.lifeSpan, icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
              ].map((stat, i) => (
                <div key={i} className="bg-main/50 p-4 rounded-3xl border border-main flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] text-muted font-black uppercase tracking-widest mb-0.5">{stat.label}</p>
                    <p className="text-sm font-bold text-main">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-main">
                  <Info size={18} className="text-primary" />
                  <h3 className="text-lg font-black tracking-tight">Divine Personality</h3>
                </div>
                <p className="text-main/80 leading-relaxed text-base font-medium">
                  {dog.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {dog.personality.map((trait, i) => (
                    <span key={i} className="px-2.5 py-1 bg-surface border border-main rounded-lg text-[9px] font-bold text-muted uppercase tracking-wider shadow-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Redesigned Actions - Modern & Unique */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/${phoneNumber}?text=Inquiring about ${dog.name} from Yahweh Farm.`}
                    target="_blank" rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-card border border-main text-white rounded-2xl p-px transition-all hover:border-primary/30 hover:bg-main active:scale-[0.98]"
                  >
                    <div className="relative bg-slate-900 rounded-[calc(1rem-1px)] px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <MessageCircle size={20} className="text-white" />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 leading-none mb-1">Instant Access</p>
                          <p className="text-sm font-bold leading-none">WhatsApp Now</p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>

                  <a 
                    href={`tel:+${phoneNumber}`}
                    className="group relative overflow-hidden bg-card border border-main text-main rounded-2xl p-px transition-all hover:border-primary/30 hover:bg-main active:scale-[0.98]"
                  >
                    <div className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <Phone size={20} />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary leading-none mb-1">Direct Line</p>
                          <p className="text-sm font-bold leading-none">Direct Callback</p>
                        </div>
                      </div>
                      <ChevronRight size={18} className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </a>
                </div>
                
                <div className="flex items-center justify-center gap-6 py-3 px-6 bg-main rounded-2xl border border-main">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Health Certified</span>
                  </div>
                  <div className="w-px h-3 bg-main"></div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest">KCI Registered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BREED FAQ SECTION (Mobile) */}
          {dog.faqs && (
            <div className="mt-10 space-y-4">
              <h3 className="text-xl font-black px-2 uppercase tracking-tight text-main">Breed Guide</h3>
              {dog.faqs.map((faq, idx) => (
                <div key={idx} className="bg-card rounded-3xl overflow-hidden border border-main">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left outline-none group"
                  >
                    <span className={`font-bold transition-colors ${activeFaq === idx ? 'text-primary' : 'text-main'}`}>{faq.question}</span>
                    <div className={`shrink-0 w-8 h-8 rounded-full bg-surface shadow-sm flex items-center justify-center transition-all duration-300 ${activeFaq === idx ? 'rotate-180 bg-primary text-white' : 'text-muted group-hover:bg-main'}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-sm text-main/70"
                      >
                        <div className="pt-4 border-t border-main">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {/* HORIZONTAL RECS (Mobile) */}
          <div className="mt-12 overflow-hidden -mx-5">
            <h3 className="text-xl font-black px-7 mb-6 italic text-main">Similar Buddies</h3>
            <div className="flex gap-4 overflow-x-auto px-5 pb-8 scrollbar-hide snap-x">
              {otherBreeds.map(other => (
                <Link key={other.id} to={`/dog/${other.id}`} className="min-w-[200px] snap-start active:scale-95 transition-transform block">
                  <div className="aspect-square rounded-[2.2rem] overflow-hidden mb-3 shadow-sm border border-main">
                    <img src={other.images[0]} className="w-full h-full object-cover" alt={other.name} />
                  </div>
                  <p className="font-black text-main px-2">{other.name}</p>
                  <p className="text-xs text-muted px-2 uppercase font-bold tracking-wider">{other.breed}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- DESKTOP DESIGN (Split Layout) --- */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8 py-12">
        {/* Desktop Header / Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-muted hover:text-primary transition-all font-bold mb-8 group"
        >
          <div className="w-8 h-8 rounded-full border border-main flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
            <ArrowLeft size={16} />
          </div>
          <span className="text-sm tracking-tight">Back to Collection</span>
        </button>

        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left Column: Gallery */}
          <div className="col-span-7 space-y-6">
            <div className="relative aspect-[4/5] bg-main rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-primary/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={dog.images[activeImage]}
                  alt={dog.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => setActiveImage((prev) => (prev - 1 + dog.images.length) % dog.images.length)}
                  className="w-12 h-12 rounded-full bg-surface/90 backdrop-blur shadow-xl flex items-center justify-center text-main hover:bg-primary hover:text-white transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => setActiveImage((prev) => (prev + 1) % dog.images.length)}
                  className="w-12 h-12 rounded-full bg-surface/90 backdrop-blur shadow-xl flex items-center justify-center text-main hover:bg-primary hover:text-white transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Badge */}
              <div className="absolute top-8 left-8">
                <div className="bg-surface/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-white/20">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{dog.category}</span>
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {dog.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative shrink-0 w-24 h-24 rounded-2xl overflow-hidden transition-all duration-300 ${
                    activeImage === idx 
                      ? 'ring-2 ring-primary ring-offset-4 scale-95' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Info (Sticky) */}
          <div className="col-span-5 sticky top-12 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-surface bg-main overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-widest">12 People inquiring today</p>
                </div>
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-10 h-10 rounded-full border border-main flex items-center justify-center transition-all ${isLiked ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-surface text-muted hover:text-red-500'}`}
                >
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                </button>
              </div>

              <div>
                <h1 className="text-6xl font-black text-main tracking-tight mb-2">{dog.name}</h1>
                <div className="flex items-center gap-3">
                  <p className="text-2xl text-primary font-bold tracking-tight">{dog.breed}</p>
                  <div className="w-1.5 h-1.5 rounded-full bg-main"></div>
                  <div className="flex items-center gap-1.5 text-emerald-500">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-black uppercase tracking-widest">Certified Health</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Age', val: dog.age, icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                { label: 'Gender', val: dog.gender, icon: User, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                { label: 'Weight', val: dog.weight, icon: Weight, color: 'text-orange-500', bg: 'bg-orange-500/10' },
                { label: 'Life Span', val: dog.lifeSpan, icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
              ].map((stat, i) => (
                <div key={i} className="bg-card p-5 rounded-[2rem] border border-main flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted font-black uppercase tracking-widest mb-0.5">{stat.label}</p>
                    <p className="text-lg font-bold text-main">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-main">
                <Info size={20} className="text-primary" />
                <h3 className="text-xl font-black tracking-tight">Divine Personality</h3>
              </div>
              <p className="text-main/80 leading-relaxed text-lg font-medium">
                {dog.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {dog.personality.map((trait, i) => (
                  <span key={i} className="px-3 py-1.5 bg-surface border border-main rounded-xl text-[10px] font-bold text-muted uppercase tracking-wider shadow-sm">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <a 
                  href={`https://wa.me/${phoneNumber}?text=Inquiring about ${dog.name} from Yahweh Farm.`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 group relative overflow-hidden bg-slate-900 text-white rounded-2xl p-px transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="relative bg-slate-900 rounded-[calc(1rem-1px)] px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <MessageCircle size={24} className="text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 leading-none mb-1.5">Instant Access</p>
                        <p className="text-base font-bold leading-none">WhatsApp Now</p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </a>

                <a 
                  href={`tel:+${phoneNumber}`}
                  className="flex-1 group relative overflow-hidden bg-card border border-main text-main rounded-2xl p-px transition-all hover:border-primary/30 hover:bg-main active:scale-[0.98]"
                >
                  <div className="px-6 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Phone size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary leading-none mb-1.5">Direct Line</p>
                        <p className="text-base font-bold leading-none">Priority Callback</p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section (Desktop) */}
        {dog.faqs && (
          <div className="mt-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-[10px] font-black uppercase tracking-widest mb-4">
                Breed Intelligence
              </div>
              <h2 className="text-4xl font-black text-main mb-8 tracking-tight">
                Everything about <span className="text-primary">{dog.breed}s</span>
              </h2>
              
              <div className="space-y-4">
                {dog.faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`group border rounded-[2rem] transition-all duration-500 overflow-hidden ${
                      activeFaq === idx ? 'border-primary bg-primary/[0.02] shadow-sm' : 'border-main bg-card hover:border-primary/30'
                    }`}
                  >
                    <button 
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full text-left p-8 flex justify-between items-center outline-none group"
                    >
                      <span className={`text-xl font-bold tracking-tight ${activeFaq === idx ? 'text-primary' : 'text-main'}`}>{faq.question}</span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${activeFaq === idx ? 'bg-primary text-white rotate-180' : 'bg-surface text-muted group-hover:bg-main'}`}>
                        <ChevronDown size={20} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeFaq === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-8 pb-8 text-lg text-main/70 font-medium leading-relaxed"
                        >
                          <div className="pt-6 border-t border-main">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recommendations (Desktop) */}
        <div className="mt-24 py-24 bg-surface -mx-8 px-8 border-y border-main">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h3 className="text-4xl font-black text-main tracking-tight">Similar Buddies</h3>
              <p className="text-muted font-bold uppercase tracking-widest text-xs mt-2">Curated for your preference</p>
            </div>
            <button 
              onClick={onBack}
              className="group flex items-center gap-3 text-sm font-bold text-primary bg-card px-8 py-4 rounded-2xl border border-main hover:border-primary/20 transition-all shadow-sm"
            >
              Explore All Collection
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-8">
            {otherBreeds.slice(0, 4).map(other => (
              <Link 
                key={other.id} 
                to={`/dog/${other.id}`}
                className="group cursor-pointer bg-card rounded-[2.5rem] overflow-hidden border border-main hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 block"
              >
                <motion.div 
                  whileHover={{ y: -10 }}
                >
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img src={other.images[0]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={other.name} />
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1.5 bg-surface/95 backdrop-blur-md rounded-xl text-[9px] font-black text-primary uppercase tracking-widest shadow-sm">
                        {other.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="font-black text-2xl text-main group-hover:text-primary transition-colors mb-1">{other.name}</h4>
                    <p className="text-sm text-muted uppercase font-bold tracking-wider">{other.breed}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <TrustBanner />
      <UserReviewsScroller />

    </div>
  );
};

export default DogDetails;