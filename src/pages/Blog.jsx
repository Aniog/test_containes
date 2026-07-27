import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 'blog-1',
    imgId: 'blog-supplier-a1b2c3',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, visiting factories, and confirming production capabilities before committing to a new supplier.',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 'blog-2',
    imgId: 'blog-qc-d4e5f6',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
    title: 'Understanding AQL Inspection Standards for Importers',
    excerpt: 'What AQL levels mean, how sampling works, and how to set the right inspection criteria for your products when importing from China.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
  },
  {
    id: 'blog-3',
    imgId: 'blog-shipping-g7h8i9',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
    title: '2026 Guide to Shipping from China: Sea, Air, and Rail',
    excerpt: 'Compare shipping methods, transit times, costs, and documentation requirements for importing goods from China to your country.',
    category: 'Logistics',
    date: 'June 28, 2026',
    readTime: '10 min read',
  },
  {
    id: 'blog-4',
    imgId: 'blog-negotiate-j1k2l3',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
    title: '5 Negotiation Tactics That Work with Chinese Suppliers',
    excerpt: 'Practical tips for negotiating better prices, payment terms, and MOQs with Chinese manufacturers — based on real experience.',
    category: 'Negotiation',
    date: 'June 20, 2026',
    readTime: '7 min read',
  },
  {
    id: 'blog-5',
    imgId: 'blog-mistakes-m4n5o6',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
    title: 'Top 10 Mistakes First-Time China Importers Make',
    excerpt: 'Common pitfalls that cost new importers time and money — and how to avoid them with proper planning and due diligence.',
    category: 'Importing Tips',
    date: 'June 12, 2026',
    readTime: '9 min read',
  },
  {
    id: 'blog-6',
    imgId: 'blog-canton-p7q8r9',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
    title: 'Canton Fair 2026: What Buyers Need to Know',
    excerpt: 'Planning to attend the Canton Fair? Here\'s what to expect, how to prepare, and how to make the most of your visit.',
    category: 'Trade Shows',
    date: 'June 5, 2026',
    readTime: '6 min read',
  },
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
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="blog-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Sourcing Blog
          </h1>
          <p id="blog-page-subtitle" className="mt-4 text-gray-300 text-lg max-w-2xl">
            Practical guides, tips, and insights for businesses sourcing products from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}] [blog-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wide">{post.category}</span>
                  <h2 id={post.titleId} className="text-lg font-semibold text-brand-dark mt-2 mb-2 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-brand-gray text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-brand-gray">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="mt-4 text-brand-gray text-lg">
            Subscribe to our newsletter for practical China sourcing advice, market updates, and supplier insights.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
            <button className="bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-xs text-brand-gray">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
