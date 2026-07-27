import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-07-15',
    readTime: '8 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'quality-inspection-aql',
    category: 'Quality Control',
    title: 'Understanding AQL Sampling: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. Learn how it works, what AQL levels mean, and how to choose the right inspection standard for your products.',
    date: '2026-07-08',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'china-shipping-guide',
    category: 'Shipping & Logistics',
    title: 'Sea Freight vs. Air Freight from China: Which Should You Choose?',
    excerpt: 'Choosing the right shipping method affects your cost, lead time, and cash flow. We break down the pros and cons of sea freight, air freight, and express courier for different order types.',
    date: '2026-06-28',
    readTime: '7 min read',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
    imgId: 'blog-shipping-img-g7h8i9',
  },
  {
    id: 'oem-private-label',
    category: 'OEM & Private Label',
    title: 'How to Start a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labeling is one of the most effective ways to build a brand using Chinese manufacturing. This guide walks you through the process from product selection to first shipment.',
    date: '2026-06-18',
    readTime: '10 min read',
    titleId: 'blog-oem-title',
    descId: 'blog-oem-desc',
    imgId: 'blog-oem-img-j1k2l3',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers confuse sourcing agents with trading companies. Understanding the difference can save you money and give you more control over your supply chain.',
    date: '2026-06-05',
    readTime: '5 min read',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
    imgId: 'blog-agent-img-m4n5o6',
  },
  {
    id: 'china-trade-fairs',
    category: 'Sourcing Strategy',
    title: 'Top China Trade Fairs for Product Sourcing in 2026',
    excerpt: 'Trade fairs remain one of the best ways to meet verified suppliers face-to-face. Here are the most important trade fairs in China for importers and buyers in 2026.',
    date: '2026-05-22',
    readTime: '6 min read',
    titleId: 'blog-fairs-title',
    descId: 'blog-fairs-desc',
    imgId: 'blog-fairs-img-p7q8r9',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'OEM & Private Label', 'Sourcing Strategy'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">Insights & Guides</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sourcing from China: Blog & Resources</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and tips for global buyers sourcing from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-blue text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden bg-slate-200">
                  <img
                    alt={posts[0].title}
                    data-strk-img-id={posts[0].imgId}
                    data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-red text-white text-xs font-semibold px-2.5 py-1 rounded-full">Featured</span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">{posts[0].category}</span>
                  </div>
                  <h2 id={posts[0].titleId} className="text-2xl font-bold text-slate-900 mb-3">{posts[0].title}</h2>
                  <p id={posts[0].descId} className="text-slate-600 leading-relaxed mb-5">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {posts[0].date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {posts[0].readTime}</span>
                  </div>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-48 overflow-hidden bg-slate-200">
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
                    <span className="bg-blue-100 text-brand-blue text-xs font-semibold px-2 py-0.5 rounded-full">{post.category}</span>
                  </div>
                  <h3 id={post.titleId} className="font-semibold text-slate-900 mb-2 text-sm leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <Link to="/blog" className="text-brand-blue text-xs font-semibold hover:underline">Read →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-slate-600 mb-6">Practical guides and industry updates for global buyers. No spam.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-slate-900"
            />
            <button className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
