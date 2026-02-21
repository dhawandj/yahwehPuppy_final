
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../mockData';
import { ViewType } from '../App';

interface HomeBlogSectionProps {
  onNavigate: (view: ViewType) => void;
  onSelectBlog: (id: string) => void;
}

const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({ onNavigate, onSelectBlog }) => {
  // Take top 6 blogs for a richer horizontal scroll experience
  const recentBlogs = BLOG_POSTS.slice(0, 6);

  return (
    <section className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4">
              Puppy Care Insights
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Dogs for Sale <span className="text-primary">& Expert Guides</span>
            </h2>
            <h3 className="text-lg font-bold text-slate-600 leading-snug">
              🐶 Find the Best Dogs for Sale Near You at YahwehPuppyFarm.in
            </h3>
          </div>
          <Link 
            to="/blog"
            className="group flex items-center gap-3 text-xs font-black text-primary uppercase tracking-widest bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm hover:border-primary/20 transition-all"
          >
            Visit Our Blog
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide -mx-6 px-6 lg:-mx-8 lg:px-8 snap-x snap-mandatory">
          {recentBlogs.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="shrink-0 w-[320px] sm:w-[480px] group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-premium transition-all duration-500 flex flex-col ring-1 ring-slate-100 hover:ring-primary/10 snap-start block"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={`${post.title} - Best dogs for sale near me`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-xl text-[9px] font-black text-primary uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                  <span>{post.readTime} Read</span>
                </div>
                
                <h4 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors mb-3 tracking-tight leading-tight line-clamp-1">
                  {post.title}
                </h4>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-[8px] font-black text-slate-400">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">
                      {post.author}
                    </span>
                  </div>
                  <div className="text-primary font-black text-[9px] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Full Guide 
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          
          {/* View All Card for Scroll Ending */}
          <Link 
            to="/blog"
            className="shrink-0 w-[200px] flex flex-col items-center justify-center group cursor-pointer bg-primary/5 rounded-[2.5rem] border border-dashed border-primary/20 hover:bg-primary/10 transition-all snap-start block"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <span className="text-xs font-black text-primary uppercase tracking-widest text-center">View All Articles</span>
          </Link>
        </div>

        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-slate-400 text-sm font-medium leading-relaxed">
            Are you searching for dogs for sale or typing "dogs for sale near me" into Google? Look no further! 
            At <span className="text-primary font-bold">YahwehPuppyFarm.in</span>, we make it easy to find your perfect 
            furry friend right in your city. Our blog is regularly updated with vet-approved health and training tips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
