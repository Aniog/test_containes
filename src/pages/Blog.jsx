import React, { useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight, Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      title: "5 Critical Checklist Items for Your Next China Factory Audit",
      excerpt: "Don't just look at the machines. Here are the 5 things most buyers miss when verifying a manufacturer on-site.",
      date: "June 15, 2026",
      author: "Li Wei",
      category: "Sourcing Tips",
      img: "factory audit checklist inspector professional"
    },
    {
      title: "Understanding AQL: How to Set Quality Standards for QC",
      excerpt: "AQL 2.5 or 4.0? Learn how to choose the right Acceptable Quality Limit for your product category and budget.",
      date: "May 28, 2026",
      author: "Zhang Min",
      category: "Quality Control",
      img: "quality control standards technical drawing"
    },
    {
      title: "Shipping from China in 2026: Trends and Cost Optimization",
      excerpt: "From new ocean freight routes to air cargo regulations, here is what you need to know about logistics this year.",
      date: "May 10, 2026",
      author: "Chen Bo",
      category: "Logistics",
      img: "logistics ports containers shipping trend"
    },
    {
      title: "How to Draft a China-Centric NDNN Agreement",
      excerpt: "Why a standard US NDA won't protect you in China, and what you need in a Non-Disclosure, Non-Use, Non-Circumvention agreement.",
      date: "April 22, 2026",
      author: "Legal Team",
      category: "Legal & IP",
      img: "legal contract signing pen paper"
    },
    {
      title: "Top 10 Industrial Clusters in China for Consumer Electronics",
      excerpt: "A deep dive into Shenzhen, Dongguan, and Huizhou. Where should you source your next tech product?",
      date: "April 05, 2026",
      author: "Sourcing Dept",
      category: "Industry News",
      img: "shenzhen skyline tech hub electronics"
    },
    {
      title: "Consolidating Shipments: Save 30% on Your Landing Costs",
      excerpt: "Everything you need to know about LCL consolidation and how to manage multiple suppliers effectively.",
      date: "March 20, 2026",
      author: "Logistics Team",
      category: "Logistics",
      img: "warehouse package consolidation logistics"
    }
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      {/* Blog Hero */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">China Sourcing Insights</h1>
                <p className="text-xl text-slate-600">
                    Educational resources and industry news to help you navigate the complexities of manufacturing in China.
                </p>
                <div className="mt-10 relative max-w-xl mx-auto">
                    <input 
                        type="text" 
                        placeholder="Search for topics (QC, Shipping, Suppliers...)"
                        className="w-full py-4 px-6 pr-14 rounded-full border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-blue-900 text-white p-2 px-4 rounded-full">
                        <SearchIcon size={20} />
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Featured Post Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                    <article key={idx} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                        <div className="relative h-56 overflow-hidden">
                            <img 
                                data-strk-img-id={`blog-img-${idx}`}
                                data-strk-img={`[blog-title-${idx}] ${post.img}`}
                                data-strk-img-ratio="16x9"
                                data-strk-img-width="600"
                                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {post.category}
                                </span>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                            </div>
                            <h2 id={`blog-title-${idx}`} className="text-xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                                {post.title}
                            </h2>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                                {post.excerpt}
                            </p>
                            <Link to="/blog" className="text-blue-900 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                                Read More <ArrowRight size={16} />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-20 flex justify-center gap-2">
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-900 text-white font-bold">1</button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">2</button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">3</button>
                <span className="flex items-center px-2 text-slate-400">...</span>
                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
      </section>

      {/* Blog Newsletter */}
      <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
                        <p className="text-slate-400">Monthly sourcing tips, market updates, and manufacturing trends from our team in China.</p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <form className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Email address"
                                className="flex-grow p-4 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-amber-500 transition-all text-white"
                            />
                            <button className="bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-lg font-bold transition-all whitespace-nowrap">
                                Join Now
                            </button>
                        </form>
                    </div>
                </div>
          </div>
      </section>
    </div>
  );
};

export default Blog;
