import React, { useRef, useEffect } from 'react';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const posts = [
    {
      id: 'how-to-verify-chinese-supplier',
      title: 'How to Verify a Chinese Supplier in 5 Steps',
      excerpt: 'Don\'t wire money until you read this. Learn how to distinguish a real manufacturer from a trading company or a scammer using public business licenses and virtual tools.',
      category: 'Sourcing Tips',
      date: 'June 18, 2026',
      readTime: '6 min read',
      author: 'David Chen',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'understanding-incoterms-2026',
      title: 'FOB vs. EXW vs. DDP: Choosing the Right Incoterm',
      excerpt: 'Shipping terms can be confusing. We break down the most common Incoterms used when importing from China so you know exactly what costs and risks you are assuming.',
      category: 'Logistics',
      date: 'May 24, 2026',
      readTime: '8 min read',
      author: 'Sarah Lin',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'quality-control-inspections',
      title: 'Why You Need Pre-Shipment Inspections',
      excerpt: 'Discover why relying on the factory\'s own QA team is a recipe for disaster. We explain how AQL (Acceptable Quality Limit) inspections work and what they cost.',
      category: 'Quality Control',
      date: 'April 12, 2026',
      readTime: '5 min read',
      author: 'Michael Zhang',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'canton-fair-guide',
      title: 'The Ultimate Guide to Attending the Canton Fair',
      excerpt: 'Planning a trip to Guangzhou? Here is how to prepare, what to wear, how to negotiate on the floor, and how to follow up with suppliers after the fair.',
      category: 'Guides',
      date: 'March 05, 2026',
      readTime: '10 min read',
      author: 'David Chen',
      image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'negotiating-moq',
      title: 'How to Negotiate Lower MOQs with Factories',
      excerpt: 'Most factories list an MOQ of 1,000 units, but it\'s rarely set in stone. Learn the exact email templates and strategies our agents use to get test orders of 200-300 units.',
      category: 'Sourcing Tips',
      date: 'February 19, 2026',
      readTime: '7 min read',
      author: 'Sarah Lin',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'shipping-rates-update',
      title: 'Global Freight Rates Update: Q3 2026',
      excerpt: 'Are ocean freight prices going up or down? We analyze the current market conditions and give you strategies to mitigate the impact of fluctuating logistics costs.',
      category: 'Logistics',
      date: 'January 30, 2026',
      readTime: '4 min read',
      author: 'Michael Zhang',
      image: 'https://images.unsplash.com/photo-1577704901416-24e073587b1c?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="flex flex-col flex-grow bg-slate-50" ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & Updates</h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Practical advice, industry news, and expert tips to help you navigate importing from China successfully.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                <Link to={`/blog`} className="block overflow-hidden h-56 relative group">
                   <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-title-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 z-20">
                     <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm shadow-sm rounded-full text-xs font-semibold text-blue-700 tracking-wide uppercase">
                        {post.category}
                     </span>
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 leading-snug hover:text-blue-600 transition-colors">
                    <Link to={`/blog`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-slate-100 mt-auto">
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                       <div className="flex items-center gap-2">
                           <User className="w-4 h-4" />
                           <span>{post.author}</span>
                       </div>
                       <div className="flex items-center gap-2">
                           <Clock className="w-4 h-4" />
                           <span>{post.readTime}</span>
                       </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                             <Calendar className="w-4 h-4" />
                             <span>{post.date}</span>
                        </div>
                        <Link to={`/blog`} className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group">
                            Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="inline-flex items-center justify-center rounded-md bg-white border border-slate-300 px-8 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 transition-colors">
                Load More Articles
             </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay updated on China sourcing</h2>
              <p className="text-blue-100 mb-8">Join 5,000+ importers receiving our monthly newsletter with the latest manufacturing trends and shipping rates.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                  <input type="email" placeholder="Enter your email" required className="flex-grow rounded-md border-0 px-4 py-3 text-slate-900 shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-white bg-white" />
                  <button type="submit" className="rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">
                      Subscribe
                  </button>
              </form>
          </div>
      </section>
    </div>
  );
};

export default Blog;