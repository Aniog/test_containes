import React, { useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const blogPosts = [
  {
    id: 1,
    title: "How to Verify a Chinese Supplier in 2024: The Ultimate Checklist",
    excerpt: "Don't get scammed by 'gold' suppliers on marketplace sites. Here is how our on-ground team verifies the legitimacy of any factory...",
    author: "Li Wei",
    date: "July 15, 2026",
    category: "Verified Suppliers",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Understanding AQL Standards: Ensuring Quality in Mass Production",
    excerpt: "Acceptable Quality Level is the cornerstone of QC. Learn how to set the right thresholds for your product category...",
    author: "Emma Zhang",
    date: "July 02, 2026",
    category: "Quality Control",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Sea Freight vs Air Freight: Choosing the Best Option for Your Shipments",
    excerpt: "Post-pandemic shipping is complex. We break down the cost-benefit analysis for different product volumes and lead times...",
    author: "David Chen",
    date: "June 20, 2026",
    category: "Logistics",
    readTime: "10 min read"
  }
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen">
      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-secondary mb-6">China Sourcing Blog</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Expert insights, practical tips, and industry updates to help you navigate the complexities of sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group">
                <div className="h-56 relative overflow-hidden">
                   <img
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[blog-title-${post.id}] China sourcing factory business`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4">
                     <span className="bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                        {post.category}
                     </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                     <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                     <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                  </div>
                  <h3 id={`blog-title-${post.id}`} className="text-2xl font-extrabold text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-400">{post.readTime}</span>
                    <button className="text-primary font-black flex items-center gap-2 hover:gap-3 transition-all">
                      Read Article <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="bg-secondary rounded-3xl p-8 md:p-16 text-white relative flex flex-col items-center text-center">
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

               <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-8 relative z-10">
                  Must Read Insight
               </span>
               <h2 className="text-3xl md:text-5xl font-black mb-8 max-w-4xl relative z-10">
                  State of China Manufacturing 2026: Trends & Forecast for Global Buyers
               </h2>
               <p className="text-slate-400 text-lg mb-10 max-w-2xl relative z-10">
                  Get our exclusive 25-page report on current production costs, upcoming regulations, and geographic shifts in the Chinese supply chain.
               </p>
               <div className="relative z-10">
                  <Link to="/contact" className="bg-white text-secondary font-black py-4 px-12 rounded-xl hover:bg-slate-100 transition shadow-2xl inline-flex items-center gap-2">
                     Download the Report <Tag size={20} />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Blog;
