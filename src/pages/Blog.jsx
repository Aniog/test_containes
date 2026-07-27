import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'factory-audit-guide',
    category: 'Factory Verification',
    title: 'How to Audit a Chinese Factory: A Practical Guide for Importers',
    excerpt:
      'Before placing a large order with a Chinese supplier, a factory audit can save you from costly mistakes. Here\'s what to check and how to interpret the results.',
    readTime: '8 min read',
    date: 'July 15, 2026',
    imgId: 'blog-audit-img-a1b2c3',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'aql-inspection',
    category: 'Quality Control',
    title: 'Understanding AQL Inspection Standards for China Imports',
    excerpt:
      'AQL (Acceptable Quality Limit) is the standard used by most QC inspectors worldwide. This guide explains how it works and how to choose the right AQL level for your product.',
    readTime: '6 min read',
    date: 'July 8, 2026',
    imgId: 'blog-aql-img-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sea-vs-air',
    category: 'Shipping & Logistics',
    title: 'Sea Freight vs. Air Freight from China: How to Choose',
    excerpt:
      'Choosing between sea and air freight depends on your timeline, budget, and product type. This article breaks down the key factors to help you make the right decision.',
    readTime: '5 min read',
    date: 'June 28, 2026',
    imgId: 'blog-shipping-img-g7h8i9',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'moq-negotiation',
    category: 'Supplier Sourcing',
    title: '5 Strategies to Negotiate Lower MOQs with Chinese Suppliers',
    excerpt:
      'Minimum order quantities can be a barrier for small businesses. Here are five practical strategies that have worked for our clients when negotiating MOQs with Chinese factories.',
    readTime: '7 min read',
    date: 'June 18, 2026',
    imgId: 'blog-moq-img-j0k1l2',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'private-label-china',
    category: 'Private Label & OEM',
    title: 'How to Start a Private Label Business with Chinese Manufacturers',
    excerpt:
      'Private labeling from China is one of the most effective ways to build a product brand. This guide covers the key steps from product selection to first shipment.',
    readTime: '10 min read',
    date: 'June 5, 2026',
    imgId: 'blog-privatelabel-img-m3n4o5',
    titleId: 'blog-privatelabel-title',
    descId: 'blog-privatelabel-desc',
  },
  {
    id: 'supplier-red-flags',
    category: 'Supplier Sourcing',
    title: '7 Red Flags When Evaluating Chinese Suppliers Online',
    excerpt:
      'Not every supplier on Alibaba or Made-in-China is what they appear to be. Here are seven warning signs that should prompt you to dig deeper before placing an order.',
    readTime: '6 min read',
    date: 'May 22, 2026',
    imgId: 'blog-redflags-img-p6q7r8',
    titleId: 'blog-redflags-title',
    descId: 'blog-redflags-desc',
  },
];

const categoryColors = {
  'Factory Verification': 'bg-violet-100 text-violet-700',
  'Quality Control': 'bg-green-100 text-green-700',
  'Shipping & Logistics': 'bg-blue-100 text-blue-700',
  'Supplier Sourcing': 'bg-amber-100 text-amber-700',
  'Private Label & OEM': 'bg-pink-100 text-pink-700',
};

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const [featured, ...rest] = posts;

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-800 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            China Sourcing Insights
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Practical guides, industry tips, and sourcing advice for global buyers importing from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-12 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category] || 'bg-blue-100 text-blue-700'}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                </span>
              </div>
              <h2 id={featured.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-slate-600 text-sm leading-relaxed mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">{featured.date}</span>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div
                key={post.id}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] || 'bg-blue-100 text-blue-700'}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-semibold text-slate-900 mb-2 text-sm leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-xs text-slate-600 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1 text-brand-blue text-xs font-medium hover:gap-1.5 transition-all"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-slate-600 mb-6">
            Subscribe to our newsletter for practical China sourcing guides, supplier tips, and
            industry updates — no spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            <button className="bg-brand-blue hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
