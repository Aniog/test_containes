import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    date: 'June 12, 2025',
    readTime: '6 min read',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Placing an order with an unverified supplier is one of the most common mistakes importers make. Here\'s a practical checklist for verifying Chinese manufacturers before you commit.',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-guide',
    category: 'Quality Control',
    date: 'May 28, 2025',
    readTime: '8 min read',
    title: 'AQL Sampling Explained: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used in pre-shipment inspections. This guide explains how it works and how to choose the right AQL level for your products.',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'sea-vs-air-freight',
    category: 'Shipping',
    date: 'May 10, 2025',
    readTime: '5 min read',
    title: 'Sea Freight vs Air Freight from China: How to Choose',
    excerpt: 'The choice between sea and air freight affects your cost, lead time, and cash flow. Here\'s how to decide which option makes sense for your order.',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
    imgId: 'blog-freight-img-g7h8i9',
  },
  {
    id: 'sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    date: 'April 22, 2025',
    readTime: '7 min read',
    title: 'Sourcing Agent vs Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers confuse sourcing agents with trading companies. Understanding the difference can save you money and help you make better decisions when importing from China.',
    titleId: 'blog-agent-title',
    descId: 'blog-agent-desc',
    imgId: 'blog-agent-img-j1k2l3',
  },
  {
    id: 'factory-audit-checklist',
    category: 'Factory Audit',
    date: 'April 5, 2025',
    readTime: '9 min read',
    title: 'Factory Audit Checklist: What to Look for When Visiting a Chinese Factory',
    excerpt: 'A factory audit is one of the most effective ways to reduce sourcing risk. This checklist covers the key areas to assess during an on-site visit.',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
    imgId: 'blog-audit-img-m4n5o6',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping',
    date: 'March 18, 2025',
    readTime: '6 min read',
    title: 'Incoterms Explained: FOB, CIF, EXW and What They Mean for Importers',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of delivery. Here\'s what the most common terms mean in practice.',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
    imgId: 'blog-incoterms-img-p7q8r9',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Sourcing Strategy', 'Factory Audit'];

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
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-3">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Sourcing Insights & Guides</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Practical articles on China sourcing, supplier verification, quality control, and shipping — written for global buyers.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-text-dark hover:bg-navy-light hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-brand-red bg-red-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-base font-bold text-navy mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-brand-red transition-colors"
                    >
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-text-muted mb-6 text-sm">
            Practical guides on China sourcing, QC, and shipping — delivered monthly. No spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-navy/20 text-text-dark"
            />
            <button className="bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
