
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DogCard from './components/DogCard';
import Testimonials from './components/Testimonials';
import TrustBanner from './components/TrustBanner';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ThemeToggle from './components/ThemeToggle';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ServiceFeatures from './components/ServiceFeatures';
import BreedRecommender from './components/BreedRecommender';
import DogDetails from './components/DogDetails';
import AllPuppies from './components/AllPuppies';
import About from './components/About';
import BreedCategories from './components/BreedCategories';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import HomeBlogSection from './components/HomeBlogSection';
import FAQ from './components/FAQ';
import MarketIntelligence from './components/MarketIntelligence';
import TopSellingDogs from './components/TopSellingDogs';
import UserReviewsScroller from './components/UserReviewsScroller';
import { DOGS } from './mockData';

export type ViewType = 'home' | 'all-puppies' | 'about' | 'matchmaker' | 'details' | 'privacy' | 'terms' | 'blog' | 'blog-detail';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (view: ViewType) => {
    switch (view) {
      case 'home': navigate('/'); break;
      case 'all-puppies': navigate('/puppies'); break;
      case 'about': navigate('/about'); break;
      case 'matchmaker': navigate('/matchmaker'); break;
      case 'blog': navigate('/blog'); break;
      case 'privacy': navigate('/privacy'); break;
      case 'terms': navigate('/terms'); break;
    }
  };

  const handleSelectDog = (id: string) => navigate(`/dog/${id}`);
  const handleSelectBlog = (id: string) => navigate(`/blog/${id}`);

  return (
    <div className="space-y-2 sm:space-y-6 pb-12 sm:pb-20">
      <Hero onNavigate={handleNavigate} />
      
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        <BreedCategories onNavigate={handleNavigate} />
      </div>

      <TopSellingDogs onSelectDog={handleSelectDog} onNavigate={handleNavigate} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-3">
              Handpicked Selection
            </div>
            <h2 className="text-2xl sm:text-5xl font-black text-main tracking-tight">Featured Pups</h2>
            <p className="text-muted text-sm sm:text-base mt-1 font-medium">Exclusively raised with elite standards.</p>
          </div>
          <button 
            onClick={() => navigate('/puppies')}
            className="hidden sm:flex group items-center gap-3 text-sm font-bold text-primary bg-card px-6 py-4 rounded-[1.5rem] border border-main hover:border-primary/20 transition-all shadow-sm"
          >
            View All
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {DOGS.slice(0, 3).map(dog => (
            <DogCard key={dog.id} dog={dog} onSelect={handleSelectDog} />
          ))}
        </div>
        
        <div className="sm:hidden mt-8 text-center">
          <button 
            onClick={() => navigate('/puppies')}
            className="inline-flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest bg-card px-8 py-4 rounded-2xl border border-main shadow-sm"
          >
            View All Collection →
          </button>
        </div>
      </div>

      <ServiceFeatures onNavigate={handleNavigate} />
      <TrustBanner />
      <Testimonials />
      <UserReviewsScroller />
      <HomeBlogSection onNavigate={handleNavigate} onSelectBlog={handleSelectBlog} />
      <FAQ />
      <MarketIntelligence />
    </div>
  );
};

const DogDetailsWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  if (!id) return null;
  return <DogDetails dogId={id} onSelectDog={(newId) => navigate(`/dog/${newId}`)} onBack={() => navigate('/puppies')} />;
};

const BlogDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  if (!id) return null;
  return <BlogDetail blogId={id} onBack={() => navigate('/blog')} />;
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigate = (view: ViewType) => {
    switch (view) {
      case 'home': navigate('/'); break;
      case 'all-puppies': navigate('/puppies'); break;
      case 'about': navigate('/about'); break;
      case 'matchmaker': navigate('/matchmaker'); break;
      case 'blog': navigate('/blog'); break;
      case 'privacy': navigate('/privacy'); break;
      case 'terms': navigate('/terms'); break;
    }
  };

  // Determine currentView for Navbar highlighting
  const getCurrentView = (): ViewType => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/puppies') return 'all-puppies';
    if (path === '/about') return 'about';
    if (path === '/matchmaker') return 'matchmaker';
    if (path === '/blog') return 'blog';
    if (path.startsWith('/blog/')) return 'blog-detail';
    if (path.startsWith('/dog/')) return 'details';
    if (path === '/privacy') return 'privacy';
    if (path === '/terms') return 'terms';
    return 'home';
  };

  return (
    <div className="bg-main min-h-screen flex flex-col selection:bg-primary/10 selection:text-primary text-main transition-colors duration-300">
      <Navbar onNavigate={handleNavigate} currentView={getCurrentView()} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/puppies" element={<AllPuppies onSelectDog={(id) => navigate(`/dog/${id}`)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/matchmaker" element={<BreedRecommender />} />
          <Route path="/blog" element={<Blog onSelectBlog={(id) => navigate(`/blog/${id}`)} />} />
          <Route path="/blog/:id" element={<BlogDetailWrapper />} />
          <Route path="/dog/:id" element={<DogDetailsWrapper />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingActions />
      <ThemeToggle />
    </div>
  );
};

export default App;
