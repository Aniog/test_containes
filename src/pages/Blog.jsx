import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before You Commit',
    excerpt: 'Working with an unverified supplier is one of the biggest risks in China sourcing. Here is a practical checklist for evaluating any supplier before placing an order.',
    date: '2026-07-15',
    author: 'SSourcing Team',
    category: 'Supplier Verification',
    imgId: 'blog-verify-supplier-y4z5a6',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
  },
  {
    id: 'quality-inspection-guide',
    title: 'A Practical Guide to Quality Inspections in China',
    excerpt: 'Understanding AQL standards, inspection types, and when to schedule them can save you from costly quality issues. Here is what every buyer should know.',
    date: '2026-07-01',
    author: 'SSourcing Team',
    category: 'Quality Control',
    imgId: 'blog-quality-inspection-b7c8d9',
    titleId: 'blog-quality-inspection-title',
    descId: 'blog-quality-inspection-desc',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Shipping from China in 2026: What Buyers Need to Know',
    excerpt: 'Freight rates, customs changes, and logistics options continue to evolve. Here is an updated overview of the current shipping landscape for China imports.',
    date: '2026-06-20',
    author: 'SSourcing Team',
    category: 'Shipping & Logistics',
    imgId: 'blog-shipping-2026-e1f2g3',
    titleId: 'blog-shipping-2026-title',
    descId: 'blog-shipping-2026-desc',
  },
  {
    id: 'negotiate-better-prices',
    title: '5 Strategies to Negotiate Better Prices with Chinese Suppliers',
    excerpt: 'Price negotiation is not just about asking for a discount. Understanding how Chinese factories price their products gives you leverage for better deals.',
    date: '2026-06-05',
    author: 'SSourcing Team',
    category: 'Sourcing Tips',
    imgId: 'blog-negotiate-prices-h4i5j6',
    titleId: 'blog-negotiate-prices-title',
    descId: 'blog-negotiate-prices-desc',
  },
  {
    id: 'avoid-common-sourcing-mistakes',
    title: '7 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory verification to ignoring cultural differences, these mistakes cost buyers time and money. Learn how to avoid the most common pitfalls.',
    date: '2026-05-18',
    author: 'SSourcing Team',
    category: 'Sourcing Tips',
    imgId: 'blog-common-mistakes-k7l8m9',
    titleId: 'blog-common-mistakes-title',
    descId: 'blog-common-mistakes-desc',
  },
  {
    id: 'production-follow-up-benefits',
    title: 'Why Production Follow-up Matters More Than You Think',
    excerpt: 'Many buyers assume that once an order is placed, the factory will deliver on time. Reality is different. Here is why regular production monitoring is essential.',
    date: '2026-05-02',
    author: 'SSourcing Team',
    category: 'Production Management',
    imgId: 'blog-production-followup-n1o2p3',
    titleId: 'blog-production-followup-title',
    descId: 'blog-production-followup-desc',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Banner */}
      <section className="bg-navy-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Sourcing Insights & Guides
          </h1>
          <p id="blog-page-subtitle" className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Practical articles on China sourcing, supplier verification, quality control, and logistics — written for global buyers.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-amber-500 bg-amber-50 px-2 py-1 rounded">{post.category}</span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-navy-700 transition-colors">{post.title}</h3>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Need Expert Sourcing Advice?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Our articles cover general guidance, but every sourcing situation is unique. Contact us for tailored advice on your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors mt-8"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
