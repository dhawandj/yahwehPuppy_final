
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../mockData';

interface BlogProps {
  onSelectBlog: (id: string) => void;
}

const Blog: React.FC<BlogProps> = ({ onSelectBlog }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 animate-in fade-in duration-700">
      <header className="max-w-4xl mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
          Professional Breeding Insights
        </div>
        
        <h1 className="text-4xl sm:text-7xl font-black text-main mb-6 tracking-tight leading-none">
          Yahweh <span className="text-primary">Blog</span>
        </h1>

        <h2 className="text-xl sm:text-3xl font-extrabold text-main mb-6 leading-tight">
          🐶 Find the Best Dogs for Sale Near You at YahwehPuppyFarm.in
        </h2>

        <p className="text-muted text-lg sm:text-xl font-medium leading-relaxed">
          Are you searching for dogs for sale or typing "dogs for sale near me" into Google? Look no further! 
          At <span className="text-primary font-bold">YahwehPuppyFarm.in</span>, we make it easy to find your perfect 
          furry friend right in your city. Our blog provides the definitive guide to raising, nourishing, 
          and loving your certified companion.
        </p>
      </header>

      {/* Grid Layout changed to 3 cards per row as requested */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOG_POSTS.map((post) => (
          <Link 
            key={post.id}
            to={`/blog/${post.id}`}
            className="group cursor-pointer flex flex-col bg-card rounded-[2.5rem] overflow-hidden border border-main hover:shadow-premium transition-all duration-500 hover:-translate-y-1 ring-1 ring-main/5 block"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={post.image} 
                alt={`${post.title} - Dogs for sale near me`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-surface/95 backdrop-blur-md rounded-xl text-[9px] font-black text-primary uppercase tracking-widest shadow-sm">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content Wrapper */}
            <div className="p-8 sm:p-10 flex flex-col flex-grow">
              <div className="flex items-center gap-3 text-[10px] font-bold text-muted uppercase tracking-widest mb-4">
                <time dateTime={post.date}>{post.date}</time>
                <span className="w-1 h-1 bg-main rounded-full"></span>
                <span>{post.readTime} Read</span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-black text-main group-hover:text-primary transition-colors mb-4 tracking-tight leading-tight line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-muted text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-auto pt-6 border-t border-main flex items-center justify-between">
                <span className="text-[10px] font-black text-main uppercase tracking-widest">
                  By {post.author}
                </span>
                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* SEO Footer for Blog Page */}
      <div className="mt-32 pt-16 border-t border-main text-center">
        <h3 className="text-[10px] font-black text-muted uppercase tracking-[0.3em] mb-4">Yahweh Certified Knowledge Base</h3>
        <p className="text-xs text-muted mb-8 max-w-2xl mx-auto">
          Searching for the best dogs for sale? Yahweh Puppy Farm is your premier destination for health-certified, purebred-lineage puppies.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-12">
          {['Dogs for sale near me', 'Best dogs for sale', 'Puppy Nutrition', 'Ethical Breeding', 'Indian Pet Care'].map((topic) => (
            <span key={topic} className="text-xs font-bold text-muted">{topic}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
