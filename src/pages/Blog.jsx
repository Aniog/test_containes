import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      title: '5 Crucial Steps to Verify a China Supplier',
      excerpt: 'Learn why business license checks aren’t enough and how to perform real factory audits.',
      date: 'May 15, 2026',
      author: 'David Zhang',
      img: 'business person auditing china factory'
    },
    {
      title: 'Guide to Incoterms 2026 for Sourcing',
      excerpt: 'FOB, CIF, or DDP? Understand which shipping terms offer the best protection for your business.',
      date: 'June 2, 2026',
      author: 'Sarah Lin',
      img: 'cargo ship container port china'
    },
    {
      title: 'Quality Control Standards for Consumer Goods',
      excerpt: 'A deep dive into AQL inspection tables and how to set up your quality checklist.',
      date: 'June 20, 2026',
      author: 'Mike Wong',
      img: 'technical drawing quality control tools'
    }
  ];

  return (
    <div ref={containerRef}>
      <header className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">China Sourcing Blog</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Inside tips, market trends, and expert advice to master your China manufacturing and supply chain.
          </p>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <article key={idx} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img 
                    data-strk-img-id={`blog-img-${idx}`}
                    data-strk-img={`${post.img}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Sourcing Guide
                  </div>
                </div>
                <div className="flex items-center gap-6 text-slate-400 text-xs mb-4 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                <Link to="#" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                  Read Full Article <ArrowRight className="w-5 h-5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl bg-white p-12 lg:p-20 rounded-[3rem] shadow-xl border border-slate-100 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Stay Ahead of Market Trends</h2>
          <p className="text-slate-600 mb-10 text-lg">Subscribe to our monthly newsletter for factory price updates and China trade insights.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="flex-grow px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
