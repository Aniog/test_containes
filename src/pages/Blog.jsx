import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '@/components/shared/CtaBanner';

const posts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common mistakes overseas buyers make. This guide covers the key steps to verify a supplier\'s legitimacy, production capability, and quality standards.',
    category: 'Supplier Verification',
    date: 'May 28, 2024',
    readTime: '8 min read',
    imgId: 'blog-verify-img-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'aql-inspection-explained',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. Understanding how it works helps you set the right inspection criteria and make informed decisions about your shipments.',
    category: 'Quality Control',
    date: 'May 14, 2024',
    readTime: '6 min read',
    imgId: 'blog-aql-img-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sea-vs-air-freight',
    title: 'Sea Freight vs Air Freight from China: A Practical Comparison',
    excerpt: 'Choosing the right shipping method affects your cost, lead time, and cash flow. This article breaks down the key differences between sea and air freight to help you make the right decision for your business.',
    category: 'Shipping',
    date: 'April 30, 2024',
    readTime: '5 min read',
    imgId: 'blog-freight-img-g7h8i9',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: 10 Things to Check Before Approving a Supplier',
    excerpt: 'A factory audit is your best protection against unreliable suppliers. This checklist covers the 10 most important areas to evaluate during an on-site factory visit in China.',
    category: 'Factory Audit',
    date: 'April 15, 2024',
    readTime: '7 min read',
    imgId: 'blog-audit-img-j1k2l3',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'china-sourcing-mistakes',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Many first-time importers make the same costly mistakes when sourcing from China. From skipping factory audits to ignoring compliance requirements, this article covers the most common pitfalls and how to avoid them.',
    category: 'Sourcing Tips',
    date: 'March 28, 2024',
    readTime: '9 min read',
    imgId: 'blog-mistakes-img-m4n5o6',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    id: 'product-compliance-guide',
    title: 'Product Compliance for China Imports: CE, FCC, and RoHS Explained',
    excerpt: 'Importing products that don\'t meet your market\'s regulatory requirements can result in customs rejection, fines, and product recalls. This guide explains the most common compliance standards for products imported from China.',
    category: 'Compliance',
    date: 'March 12, 2024',
    readTime: '10 min read',
    imgId: 'blog-compliance-img-p7q8r9',
    titleId: 'blog-compliance-title',
    descId: 'blog-compliance-desc',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Factory Audit', 'Sourcing Tips', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = React.useState('All');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              China Sourcing Blog
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers working with Chinese manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-gray-100 py-4 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 ${
                  activeCategory === cat
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-body-text hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] China sourcing business`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 bg-light-blue text-navy text-xs font-semibold px-2.5 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-bold text-dark-text mb-3 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-body-text text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-xs text-muted-text">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <button className="text-navy text-sm font-semibold hover:text-navy-light flex items-center gap-1 transition-colors">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-light-blue">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-dark-text mb-2">Stay Updated</h2>
          <p className="text-body-text mb-6">Get practical China sourcing tips delivered to your inbox. No spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30"
            />
            <button className="bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
