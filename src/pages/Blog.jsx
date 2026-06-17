import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search, Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const posts = [
    {
      title: 'Top 5 Challenges when Sourcing from China in 2026',
      excerpt: 'The landscape of China manufacturing is changing rapidly. Here is what you need to know about automation, rising labor costs, and new regulatory requirements.',
      date: 'May 15, 2026',
      author: 'Chen Wei',
      imgId: 'blog-post-1'
    },
    {
      title: 'How to Identify a Real Factory vs. a Trading Company',
      excerpt: 'Many Alibaba suppliers claim to be manufacturers but are actually middlemen. We reveal the 3 key documents you must request to verify their true status.',
      date: 'April 28, 2026',
      author: 'Sarah Li',
      imgId: 'blog-post-2'
    },
    {
      title: 'A Comprehensive Guide to China Quality Inspections',
      excerpt: 'Dont wait until the goods arrive at your warehouse to find defects. Learn the different types of QC inspections and when to perform them.',
      date: 'April 10, 2026',
      author: 'John Zhang',
      imgId: 'blog-post-3'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-serif tracking-tight">Sourcing Insights</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert advice and news to help you navigate the China supply chain with confidence.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, index) => (
              <article key={index} className="flex flex-col group cursor-pointer">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${index}] China business`}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                  </div>
                  <h2 id={`blog-title-${index}`} className="text-2xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center gap-2 font-bold text-slate-900 pt-2 group-hover:gap-4 transition-all">
                    Read Full Article <ChevronRight className="w-4 h-4 text-yellow-500" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-20 flex justify-center">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors cursor-not-allowed">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold">1</button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">2</button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">3</button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Master Your China Supply Chain</h2>
          <p className="text-lg text-slate-400 mb-10">
            Subscribe to our bi-weekly newsletter for deep-dives into manufacturing, quality control, and logistics.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            />
            <button className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all whitespace-nowrap">
              Subscribe Free
            </button>
          </form>
          <p className="mt-6 text-xs text-slate-500">
            No spam. Ever. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;

