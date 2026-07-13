import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Tag, ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-4a2f1c',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
  },
  {
    id: 'aql-inspection-guide',
    title: 'AQL Inspection Standards Explained for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. Learn what AQL 2.5 means, how sampling works, and how to use it to protect your orders.',
    category: 'Quality Control',
    date: '2026-05-28',
    readTime: '6 min read',
    imgId: 'blog-aql-inspection-7b3e5d',
    titleId: 'blog-aql-inspection-title',
    descId: 'blog-aql-inspection-desc',
  },
  {
    id: 'incoterms-china-shipping',
    title: 'Incoterms for China Shipping: FOB, CIF, EXW Explained',
    excerpt: 'Choosing the wrong Incoterm can cost you money and create unexpected liability. This article explains the most common shipping terms used in China trade and which one is right for your situation.',
    category: 'Shipping',
    date: '2026-05-10',
    readTime: '7 min read',
    imgId: 'blog-incoterms-2c8a4f',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers confuse sourcing agents with trading companies. Understanding the difference can save you money and give you more control over your supply chain.',
    category: 'Sourcing Tips',
    date: '2026-04-22',
    readTime: '5 min read',
    imgId: 'blog-agent-vs-trading-9e1b6c',
    titleId: 'blog-agent-vs-trading-title',
    descId: 'blog-agent-vs-trading-desc',
  },
  {
    id: 'china-factory-audit-checklist',
    title: 'China Factory Audit Checklist: What to Look For',
    excerpt: 'A factory audit is one of the most important steps in qualifying a new Chinese supplier. Here\'s a practical checklist of what to assess during an on-site visit.',
    category: 'Factory Audit',
    date: '2026-04-05',
    readTime: '9 min read',
    imgId: 'blog-factory-audit-5f4d2a',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
  },
  {
    id: 'minimum-order-quantity-china',
    title: 'Negotiating MOQ with Chinese Factories: A Practical Guide',
    excerpt: 'Minimum order quantities can be a barrier for small and medium importers. This guide explains how MOQs work in China and practical strategies for negotiating them down.',
    category: 'Sourcing Tips',
    date: '2026-03-18',
    readTime: '6 min read',
    imgId: 'blog-moq-negotiate-3b7e8d',
    titleId: 'blog-moq-negotiate-title',
    descId: 'blog-moq-negotiate-desc',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Sourcing Tips', 'Factory Audit'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-dark py-20">
        <div className="section-container text-center">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            China Sourcing Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides, tips, and insights for importers buying from China.
            Written by our sourcing team based in Shenzhen.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-navy text-white'
                    : 'bg-brand-light-blue text-brand-body hover:bg-brand-navy/10 hover:text-brand-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 rounded-2xl overflow-hidden border border-brand-border">
            <div className="h-64 lg:h-auto min-h-64">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-brand-orange text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="bg-brand-light-blue text-brand-navy text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {featured.category}
                </span>
              </div>
              <h2 id={featured.titleId} className="text-xl md:text-2xl font-bold text-brand-dark mb-3">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-brand-body text-sm leading-relaxed mb-4">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-brand-muted text-xs mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
              </div>
              <Link to="/blog" className="btn-primary inline-flex items-center gap-2 text-sm self-start">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                to="/blog"
                className="group rounded-xl overflow-hidden border border-brand-border hover:shadow-md transition-shadow bg-white"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-light-blue text-brand-navy text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-base font-semibold text-brand-dark mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-brand-body text-sm leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-brand-muted text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-brand-light-blue py-16">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">Get Sourcing Tips by Email</h2>
            <p className="text-brand-body mb-6">
              Practical guides for importers, delivered monthly. No spam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-navy/30"
              />
              <button className="btn-primary text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
