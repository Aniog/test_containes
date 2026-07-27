import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      title: 'Top 5 Industrial Hubs in China You Should Know',
      excerpt: 'From Shenzhen for electronics to Ningbo for hardware, discover where your products are actually made.',
      author: 'David Chen',
      date: 'July 15, 2026',
      readTime: '6 min read',
      imgId: 'blog-post-img-1'
    },
    {
      title: 'How to Avoid Common Scams When Sourcing from Alibaba',
      excerpt: 'Protect your business with these essential verification steps and warning signs to watch out for.',
      author: 'Sarah Johnson',
      date: 'July 10, 2026',
      readTime: '8 min read',
      imgId: 'blog-post-img-2'
    },
    {
      title: 'Understanding Incoterms: FOB vs EXW vs DDP',
      excerpt: 'A clear guide to shipping terms and how they affect your total landed cost when buying from China.',
      author: 'Wei Zhang',
      date: 'July 5, 2026',
      readTime: '10 min read',
      imgId: 'blog-post-img-3'
    },
    {
      title: 'Why Quality Control is Non-Negotiable in China Sourcing',
      excerpt: 'Real-world examples of how local inspections save thousands of dollars and protect brand reputation.',
      author: 'David Chen',
      date: 'June 28, 2026',
      readTime: '5 min read',
      imgId: 'blog-post-img-4'
    }
  ];

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="blog-header-title" className="text-4xl md:text-5xl font-bold">China Sourcing Insights</h1>
          <p id="blog-header-subtitle" className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Expert advice, local market updates, and practical tips for successful manufacturing and importing from China.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center bg-slate-50 rounded-3xl overflow-hidden border border-slate-200">
            <div className="h-full">
              <img
                data-strk-img-id="blog-featured-img"
                data-strk-img="China sourcing agent factory office blog featured"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                alt="Featured Post"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block">Featured Article</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">Mastering the Art of Factory Negotiation in China</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Negotiating with Chinese manufacturers requires more than just focusing on price. Learn the cultural nuances and strategic approaches that build long-term value.
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
                <div className="flex items-center gap-2"><User className="h-4 w-4" /> David Chen</div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> July 20, 2026</div>
              </div>
              <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                Read Full Article <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, index) => (
              <article key={index} className="flex flex-col group">
                <div className="relative overflow-hidden rounded-2xl shadow-sm mb-6 aspect-video">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-desc-${index}] [blog-title-${index}] China sourcing blog`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={post.title}
                  />
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                </div>
                <h3 id={`blog-title-${index}`} className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p id={`blog-desc-${index}`} className="text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <button className="text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:border-blue-600 hover:text-blue-600 transition-all">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Monthly Sourcing Insights</h2>
          <p className="text-slate-600 mb-8">
            Stay updated with the latest trends in China manufacturing and supply chain logistics.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-4 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
