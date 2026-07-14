import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-06-18',
    readTime: '8 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-guide',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by quality inspectors worldwide. This article explains how AQL sampling works, what inspection levels to use, and how to read an inspection report.',
    date: '2026-05-30',
    readTime: '10 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'fob-vs-cif-vs-ddp',
    category: 'Shipping',
    title: 'FOB vs CIF vs DDP: Which Incoterm Should You Use?',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. This guide breaks down the most common shipping terms used in China trade and when to use each one.',
    date: '2026-05-12',
    readTime: '7 min read',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-g7h8i9',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers confuse sourcing agents with trading companies. Understanding the difference is important — it affects pricing, transparency, and who is actually responsible for your order.',
    date: '2026-04-25',
    readTime: '6 min read',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
    imgId: 'blog-agent-img-j1k2l3',
  },
  {
    id: 'china-manufacturing-hubs',
    category: 'China Manufacturing',
    title: 'China\'s Major Manufacturing Hubs: Where to Source Different Products',
    excerpt: 'Different regions of China specialize in different product categories. Knowing where to look — Shenzhen for electronics, Foshan for furniture, Yiwu for small goods — can save you time and money.',
    date: '2026-04-08',
    readTime: '9 min read',
    titleId: 'blog-hubs-title',
    descId: 'blog-hubs-desc',
    imgId: 'blog-hubs-img-m4n5o6',
  },
  {
    id: 'production-delays-china',
    category: 'Production Management',
    title: '5 Common Causes of Production Delays in China (and How to Prevent Them)',
    excerpt: 'Late shipments are one of the most common complaints from importers. This article identifies the five most frequent causes of production delays and practical steps to prevent them.',
    date: '2026-03-20',
    readTime: '7 min read',
    titleId: 'blog-delays-title',
    descId: 'blog-delays-desc',
    imgId: 'blog-delays-img-p7q8r9',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Sourcing Strategy', 'China Manufacturing', 'Production Management'];

const Blog = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const featured = posts[0];

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
              China Sourcing Insights
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Practical guides and industry knowledge for importers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden h-64 bg-slate-bg">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-china text-white text-xs font-semibold px-2.5 py-1 rounded-full">Featured</span>
                <span className="bg-slate-bg text-navy text-xs font-medium px-2.5 py-1 rounded-full">{featured.category}</span>
              </div>
              <h2 id={featured.titleId} className="text-2xl font-bold text-navy mb-3 leading-snug">{featured.title}</h2>
              <p id={featured.descId} className="text-text-muted leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-text-muted text-sm mb-5">
                <span>{formatDate(featured.date)}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
              </div>
              <Link
                to={`/blog/${featured.id}`}
                className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-navy-dark transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-slate-bg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat ? 'bg-navy text-white' : 'bg-white border border-gray-200 text-text-main hover:bg-navy hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-44 bg-slate-bg overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="bg-slate-bg text-navy text-xs font-medium px-2.5 py-1 rounded-full">{post.category}</span>
                  <h3 id={post.titleId} className="font-bold text-navy mt-3 mb-2 leading-snug text-base">{post.title}</h3>
                  <p id={post.descId} className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-text-muted text-xs">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-navy text-sm font-semibold hover:text-red-china transition-colors flex items-center gap-1"
                    >
                      Read <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-bg">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">Get Sourcing Insights by Email</h2>
          <p className="text-text-muted mb-6 text-sm leading-relaxed">
            Practical guides on China sourcing, quality control, and import logistics — delivered monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy"
            />
            <button className="bg-navy text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-dark transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
