import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { format } from 'date-fns';
import BlogFeatured from '@/components/blog/BlogFeatured';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    titleId: 'blog-title-verify-supplier',
    descId: 'blog-desc-verify-supplier',
    imgId: 'blog-img-verify-supplier-a1b2c3',
    gridImgId: 'blog-grid-verify-supplier-a1b2c3',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and third-party verification services.',
    date: '2026-06-15',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 'aql-inspection-guide',
    titleId: 'blog-title-aql',
    descId: 'blog-desc-aql',
    imgId: 'blog-img-aql-d4e5f6',
    gridImgId: 'blog-grid-aql-d4e5f6',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections worldwide. Learn how it works, what sampling levels to use, and how to interpret inspection results.',
    date: '2026-05-28',
    readTime: '9 min read',
    featured: true,
  },
  {
    id: 'china-shipping-options',
    titleId: 'blog-title-shipping',
    descId: 'blog-desc-shipping',
    imgId: 'blog-img-shipping-g7h8i9',
    gridImgId: 'blog-grid-shipping-g7h8i9',
    category: 'Shipping & Logistics',
    title: 'Sea vs. Air Freight from China: How to Choose',
    excerpt: 'Choosing between sea and air freight depends on your timeline, budget, and product type. This article breaks down the cost, speed, and suitability of each option for different scenarios.',
    date: '2026-05-10',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 'oem-vs-odm-china',
    titleId: 'blog-title-oem-odm',
    descId: 'blog-desc-oem-odm',
    imgId: 'blog-img-oem-odm-j1k2l3',
    gridImgId: 'blog-grid-oem-odm-j1k2l3',
    category: 'Manufacturing',
    title: 'OEM vs. ODM Manufacturing in China: What\'s the Difference?',
    excerpt: 'OEM and ODM are two common manufacturing models in China. Understanding the difference helps you choose the right approach for your product development and sourcing strategy.',
    date: '2026-04-22',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 'china-sourcing-mistakes',
    titleId: 'blog-title-mistakes',
    descId: 'blog-desc-mistakes',
    imgId: 'blog-img-mistakes-m4n5o6',
    gridImgId: 'blog-grid-mistakes-m4n5o6',
    category: 'Sourcing Tips',
    title: '7 Common Mistakes When Sourcing from China (and How to Avoid Them)',
    excerpt: 'Many first-time importers make avoidable mistakes that cost time and money. From skipping factory audits to ignoring payment terms, here are the most common pitfalls and how to avoid them.',
    date: '2026-04-05',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'china-payment-terms',
    titleId: 'blog-title-payment',
    descId: 'blog-desc-payment',
    imgId: 'blog-img-payment-p7q8r9',
    gridImgId: 'blog-grid-payment-p7q8r9',
    category: 'Sourcing Tips',
    title: 'Payment Terms When Buying from China: T/T, L/C, and Trade Assurance',
    excerpt: 'Understanding payment terms is critical when importing from China. This guide explains T/T, Letter of Credit, and Alibaba Trade Assurance — and when to use each.',
    date: '2026-03-18',
    readTime: '7 min read',
    featured: false,
  },
];

const allCategories = ['All', ...new Set(posts.map((p) => p.category))];

export default function Blog() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">China Sourcing Blog</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Practical guides, tips, and insights for businesses importing from China.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === 'All' && <BlogFeatured />}

      {/* Filter + All Posts */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-1">
            <Tag className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <div key={post.id} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.gridImgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                  </div>
                  <h3 id={post.titleId} className="font-semibold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-slate-600 mb-6">Practical guides and updates for importers. No spam, unsubscribe anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
