import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '@/components/home/CTABanner';

const posts = [
  {
    id: 'factory-audit-guide',
    title: 'How to Conduct a Factory Audit in China: A Practical Guide for Importers',
    excerpt: 'Before placing a production order with a Chinese manufacturer, a factory audit is one of the most important steps you can take. This guide covers what to check, how to prepare, and what red flags to watch for.',
    category: 'Factory Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-factory-audit-1a2b3c',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
  },
  {
    id: 'aql-inspection',
    title: 'Understanding AQL Inspection Standards: What Every Importer Should Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide to determine whether a batch of goods passes or fails inspection. Here\'s how it works and how to set the right levels for your products.',
    category: 'Quality Inspection',
    date: '2026-07-01',
    readTime: '6 min read',
    imgId: 'blog-aql-2b3c4d',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sourcing-yiwu',
    title: 'Sourcing from Yiwu: What to Buy, What to Avoid, and How to Navigate the Market',
    excerpt: 'Yiwu is the world\'s largest small commodity market, but it\'s not the right place for every product. This guide helps you understand what Yiwu is good for and how to source effectively from this unique market.',
    category: 'Sourcing Tips',
    date: '2026-06-18',
    readTime: '7 min read',
    imgId: 'blog-yiwu-3c4d5e',
    titleId: 'blog-yiwu-title',
    descId: 'blog-yiwu-desc',
  },
  {
    id: 'shipping-incoterms',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use When Importing from China?',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. This article explains the most common Incoterms used in China trade and helps you decide which is right for your situation.',
    category: 'Shipping & Logistics',
    date: '2026-06-05',
    readTime: '9 min read',
    imgId: 'blog-incoterms-4d5e6f',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'supplier-negotiation',
    title: '7 Negotiation Tactics That Work When Dealing with Chinese Suppliers',
    excerpt: 'Negotiating with Chinese manufacturers requires a different approach than Western business negotiations. These practical tactics will help you get better pricing, terms, and service without damaging the relationship.',
    category: 'Sourcing Tips',
    date: '2026-05-22',
    readTime: '5 min read',
    imgId: 'blog-negotiation-5e6f7a',
    titleId: 'blog-negotiation-title',
    descId: 'blog-negotiation-desc',
  },
  {
    id: 'product-compliance',
    title: 'CE, FCC, RoHS: A Guide to Product Compliance for Goods Imported from China',
    excerpt: 'Selling products in the EU, US, or other regulated markets requires compliance with specific standards. This guide explains the most common certifications required for Chinese-made goods and how to obtain them.',
    category: 'Compliance',
    date: '2026-05-10',
    readTime: '10 min read',
    imgId: 'blog-compliance-6f7a8b',
    titleId: 'blog-compliance-title',
    descId: 'blog-compliance-desc',
  },
];

const categories = ['All', 'Sourcing Tips', 'Factory Verification', 'Quality Inspection', 'Shipping & Logistics', 'Compliance'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
            China Sourcing Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical guides, industry insights, and sourcing tips for global buyers importing from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-lightblue hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 bg-gray-100 overflow-hidden">
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
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-lightblue px-2.5 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h2 id={post.titleId} className="font-bold text-navy text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
