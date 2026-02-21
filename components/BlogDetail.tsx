
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../mockData';

interface BlogDetailProps {
  blogId: string;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogId, onBack }) => {
  const post = BLOG_POSTS.find(p => p.id === blogId);

  if (!post) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-2xl font-bold">Blog post not found.</h2>
        <Link to="/blog" className="mt-4 text-primary font-bold hover:underline inline-block">Return to Blog</Link>
      </div>
    );
  }

  return (
    <article className="animate-in fade-in duration-700 pb-24">
      {/* Article Header */}
      <header className="relative h-[50vh] sm:h-[70vh] w-full overflow-hidden bg-slate-900">
        <img 
          src={post.image} 
          alt={`${post.title} - Find the best dogs for sale at YahwehPuppyFarm.in`} 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-5xl mx-auto px-6 pb-12 sm:pb-24 w-full">
            <Link 
              to="/blog"
              className="mb-8 flex items-center gap-2 text-white/80 hover:text-white font-bold text-sm outline-none transition-colors"
            >
              ← Back to Blog
            </Link>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest mb-6 shadow-xl">
              {post.category}
            </div>
            <h1 className="text-4xl sm:text-7xl font-black text-white leading-tight tracking-tight mb-4">
              {post.title}
            </h1>
            <h2 className="text-white/80 text-lg sm:text-xl font-bold mb-8">
              YahwehPuppyFarm.in - Best Dogs for Sale Near You
            </h2>
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-xs sm:text-sm font-bold">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-[10px]">{post.author.charAt(0)}</span>
                </div>
                <span>By {post.author}</span>
              </div>
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
              <time dateTime={post.date}>{post.date}</time>
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
              <span>{post.readTime} reading time</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-6 pt-16 sm:pt-24">
        {/* SEO Injection */}
        <div className="mb-12 p-8 bg-card rounded-[2rem] border border-main">
          <h2 className="text-lg sm:text-2xl font-black text-main mb-4">
            Looking for dogs for sale near me?
          </h2>
          <p className="text-muted font-medium">
            🐶 Find the Best Dogs for Sale Near You at YahwehPuppyFarm.in. Are you searching for dogs for sale or 
            typing "dogs for sale near me" into Google? Look no further! At YahwehPuppyFarm.in, we make it easy to 
            find your perfect furry friend right in your city.
          </p>
        </div>

        <div className="prose prose-slate prose-lg lg:prose-xl max-w-none">
          <p className="text-2xl sm:text-3xl font-bold text-main leading-tight mb-12 border-l-4 border-primary pl-6">
            {post.excerpt}
          </p>
          
          <div className="text-main/80 leading-relaxed space-y-8 font-medium whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        {/* Tags Section */}
        <div className="mt-16 pt-12 border-t border-main">
          <h4 className="text-xs font-black text-muted uppercase tracking-widest mb-6">Tagged in</h4>
          <div className="flex flex-wrap gap-3">
            {post.tags.map(tag => (
              <span key={tag} className="px-5 py-2.5 bg-card text-muted rounded-xl text-xs font-bold border border-main hover:border-primary/20 transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-20 p-10 bg-slate-900 rounded-[2.5rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-4">Help spread the divine companion standards</h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">Share this article with fellow pet lovers searching for the best dogs for sale.</p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                Share on WhatsApp
              </button>
              <Link to="/blog" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center">
                More Articles
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetail;
