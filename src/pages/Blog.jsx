import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'factory-audit-guide',
    title: 'How to Conduct a Factory Audit in China: A Practical Guide',
    excerpt: 'Before placing a large order with a Chinese supplier, a factory audit can save you from costly mistakes. Here\'s what to check and how to interpret the results.',
    category: 'Factory Verification',
    date: 'May 28, 2026',
    readTime: '8 min read',
    imgId: 'blog-factory-audit-a1b2c3',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
  },
  {
    id: 'aql-inspection',
    title: 'Understanding AQL Sampling in Quality Inspections',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by QC inspectors worldwide. This guide explains how it works and what AQL level is right for your product.',
    category: 'Quality Control',
    date: 'May 14, 2026',
    readTime: '6 min read',
    imgId: 'blog-aql-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sea-vs-air',
    title: 'Sea Freight vs. Air Freight from China: Which Should You Choose?',
    excerpt: 'Cost, speed, and reliability all factor into your shipping decision. We break down the pros and cons of each option for different types of orders.',
    category: 'Shipping & Logistics',
    date: 'April 30, 2026',
    readTime: '5 min read',
    imgId: 'blog-shipping-g7h8i9',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'alibaba-risks',
    title: '5 Common Risks When Buying from Alibaba (and How to Avoid Them)',
    excerpt: 'Alibaba is a powerful sourcing tool, but it comes with real risks. Here are the most common pitfalls and how a sourcing agent can help you avoid them.',
    category: 'Sourcing Tips',
    date: 'April 15, 2026',
    readTime: '7 min read',
    imgId: 'blog-alibaba-j1k2l3',
    titleId: 'blog-alibaba-title',
    descId: 'blog-alibaba-desc',
  },
  {
    id: 'moq-negotiation',
    title: 'How to Negotiate MOQ with Chinese Suppliers',
    excerpt: 'Minimum order quantities can be a barrier for small buyers. Here are practical strategies to negotiate lower MOQs without damaging your supplier relationship.',
    category: 'Sourcing Tips',
    date: 'March 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-moq-m4n5o6',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'amazon-fba-china',
    title: 'Sourcing for Amazon FBA from China: What You Need to Know',
    excerpt: 'Amazon FBA has specific requirements for packaging, labeling, and product compliance. Here\'s how to ensure your China-sourced products meet Amazon\'s standards.',
    category: 'E-commerce',
    date: 'March 10, 2026',
    readTime: '9 min read',
    imgId: 'blog-amazon-p7q8r9',
    titleId: 'blog-amazon-title',
    descId: 'blog-amazon-desc',
  },
];

const categories = ['All', 'Sourcing Tips', 'Factory Verification', 'Quality Control', 'Shipping & Logistics', 'E-commerce'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-slate-400 text-lg">
              Practical guides, tips, and insights for global buyers sourcing from China.
            </p>
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div className="border-b border-slate-100 bg-white sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-blue-700 text-white'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video overflow-hidden bg-slate-100">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h2 id={post.titleId} className="font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                  {post.title}
                </h2>
                <p id={post.descId} className="text-slate-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <button className="text-blue-700 text-sm font-semibold hover:text-blue-800 flex items-center gap-1 transition-colors">
                    Read more <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-slate-50 border-t border-slate-100 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Get sourcing tips in your inbox</h2>
          <p className="text-slate-500 mb-6">Practical guides for global buyers — no spam, unsubscribe anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
