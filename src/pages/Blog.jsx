import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing Your First Order',
    excerpt:
      'Factory verification is one of the most important steps in sourcing from China. Learn the key checks every buyer should perform before committing to a new supplier.',
    category: 'Factory Verification',
    date: 'July 15, 2026',
    readTime: '6 min read',
    slug: 'verify-chinese-factory',
  },
  {
    title: 'Understanding AQL Sampling for Product Inspections',
    excerpt:
      'AQL (Acceptable Quality Level) is the standard used worldwide for product quality inspections. This guide explains how it works and what buyers need to know.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '5 min read',
    slug: 'aql-sampling-guide',
  },
  {
    title: '5 Red Flags to Watch for When Sourcing from China',
    excerpt:
      'Experienced buyers know the warning signs of unreliable suppliers. Here are five red flags that should make you pause before placing an order.',
    category: 'Sourcing Tips',
    date: 'June 28, 2026',
    readTime: '4 min read',
    slug: 'red-flags-sourcing-china',
  },
  {
    title: 'Sea Freight vs Air Freight: Which Is Right for Your Shipment?',
    excerpt:
      'Choosing the right shipping method can significantly impact your landed cost and delivery timeline. We break down the factors to consider.',
    category: 'Logistics',
    date: 'June 20, 2026',
    readTime: '5 min read',
    slug: 'sea-vs-air-freight',
  },
  {
    title: 'How to Negotiate Better Payment Terms with Chinese Suppliers',
    excerpt:
      'Payment terms can make or break your cash flow. Learn practical strategies for negotiating fair and secure payment arrangements with Chinese manufacturers.',
    category: 'Negotiation',
    date: 'June 12, 2026',
    readTime: '7 min read',
    slug: 'payment-terms-negotiation',
  },
  {
    title: 'The True Cost of Sourcing: Hidden Fees Buyers Often Miss',
    excerpt:
      'Beyond the unit price, there are many costs that affect your total landed cost. This article covers the fees most buyers overlook when importing from China.',
    category: 'Sourcing Tips',
    date: 'June 5, 2026',
    readTime: '6 min read',
    slug: 'hidden-costs-sourcing',
  },
];

const categories = [
  'All',
  'Factory Verification',
  'Quality Control',
  'Sourcing Tips',
  'Logistics',
  'Negotiation',
];

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical tips, industry insights, and actionable advice for buyers
            sourcing from China.
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
                    ? 'bg-brand text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="h-48 bg-slate-100 flex items-center justify-center">
                  <Tag className="w-10 h-10 text-slate-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-light-blue text-brand text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-navy mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
