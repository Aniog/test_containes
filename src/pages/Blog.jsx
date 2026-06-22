import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Clock, Tag } from 'lucide-react';

const posts = [
  {
    id: 'post-1',
    title: 'How to Identify Fake Factories on Alibaba',
    excerpt: 'Trading companies often pose as manufacturers to increase margins. Here are 5 signs to look for when verifying a supplier online before you place an order.',
    category: 'Supplier Verification',
    date: 'Jun 15, 2026',
    author: 'David Chen',
    imgQuery: 'businessman looking at laptop screen inspecting supplier',
    imgId: 'blog-img-fake-01'
  },
  {
    id: 'post-2',
    title: 'Understanding Delivery Terms: FOB vs. EXW vs. DDP',
    excerpt: 'Shipping Incoterms determine who is responsible for costs and risks at each step of the journey. Make sure you choose the right one for your sourcing strategy.',
    category: 'Logistics',
    date: 'Jun 02, 2026',
    author: 'Sarah Wang',
    imgQuery: 'shipping container ship ocean freight export',
    imgId: 'blog-img-incoterms-02'
  },
  {
    id: 'post-3',
    title: 'Why AQL Inspections are Non-Negotiable',
    excerpt: 'Acceptable Quality Limit (AQL) is the standard method for pre-shipment inspections. Learn how it works and why skipping it can cost you your business.',
    category: 'Quality Control',
    date: 'May 20, 2026',
    author: 'Michael Liu',
    imgQuery: 'quality inspector checking apparel garments factory',
    imgId: 'blog-img-aql-03'
  },
  {
    id: 'post-4',
    title: 'Navigating the Chinese New Year Shutdown',
    excerpt: 'Every year, production in China halts for weeks. If you don\'t plan your inventory months in advance, you risk severe stockouts. Here\'s your planning guide.',
    category: 'Supply Chain Strategy',
    date: 'May 05, 2026',
    author: 'David Chen',
    imgQuery: 'chinese red lanterns festival celebration factory closed',
    imgId: 'blog-img-cny-04'
  },
  {
    id: 'post-5',
    title: 'The Hidden Costs of Sourcing from China',
    excerpt: 'The quote on Alibaba is rarely your final landed cost. We break down the hidden fees, from sample costs to customs duties and compliance testing.',
    category: 'Cost Optimization',
    date: 'Apr 18, 2026',
    author: 'Sarah Wang',
    imgQuery: 'calculator spreadsheet cost calculation business desk',
    imgId: 'blog-img-costs-05'
  },
  {
    id: 'post-6',
    title: 'Hardware Prototyping: Steps to Success',
    excerpt: 'Moving from a CAD file to a physical, mass-manufacturable product requires navigating tooling, materials, and NNN agreements. Here\'s where to start.',
    category: 'Product Development',
    date: 'Apr 02, 2026',
    author: 'Michael Liu',
    imgQuery: 'engineer examining 3d printed prototype part',
    imgId: 'blog-img-proto-06'
  }
];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
        if(containerRef.current) {
            ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">Sourcing Insights</h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Market updates, supply chain strategies, and practical tips from our experts on the ground in China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col">
                {/* Image */}
                <div className="h-56 relative bg-slate-200 block">
                  <img
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.id}] ${post.imgQuery}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-slate-900 flex items-center gap-1 shadow-sm">
                    <Tag className="h-3 w-3" /> {post.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 id={`blog-title-${post.id}`} className="text-xl font-bold text-slate-900 mb-3 leading-tight hover:text-orange-500 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                    <span className="font-medium text-slate-700">{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50 font-medium py-2.5 px-8 rounded-md transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay updated with the Chinese market</h2>
          <p className="text-orange-100 mb-8 max-w-2xl mx-auto">Get sourcing tips and supply chain news delivered to your inbox once a month. No spam, ever.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
            <button type="submit" className="bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}