import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const posts = [
  {
    id: 'supplier-verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt:
      'Placing an order with an unverified supplier is one of the most common mistakes importers make. Here\'s a practical checklist for verifying Chinese manufacturers before you commit.',
    category: 'Supplier Sourcing',
    readTime: '6 min read',
    date: 'July 15, 2026',
    imgId: 'blog-verify-4a2b8c',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'aql-inspection',
    title: 'Understanding AQL Inspection Standards for China Imports',
    excerpt:
      'AQL (Acceptable Quality Limit) is the international standard used for product sampling inspections. This guide explains how it works and how to apply it to your China orders.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'July 8, 2026',
    imgId: 'blog-aql-7d3e1f',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'incoterms',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use?',
    excerpt:
      'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. We break down the most common shipping terms used in China trade and when to use each one.',
    category: 'Shipping',
    readTime: '7 min read',
    date: 'June 28, 2026',
    imgId: 'blog-incoterms-2c9f4a',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'factory-audit',
    title: 'What to Expect from a China Factory Audit',
    excerpt:
      'A factory audit is one of the most effective ways to reduce sourcing risk. Here\'s what our auditors check during a standard factory visit and what the report covers.',
    category: 'Factory Verification',
    readTime: '5 min read',
    date: 'June 18, 2026',
    imgId: 'blog-audit-8b5d2e',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'moi-negotiation',
    title: 'How to Negotiate MOQ and Pricing with Chinese Suppliers',
    excerpt:
      'Minimum order quantities and pricing are often negotiable — if you know how to approach the conversation. Practical tips for getting better terms from Chinese manufacturers.',
    category: 'Supplier Sourcing',
    readTime: '6 min read',
    date: 'June 5, 2026',
    imgId: 'blog-moq-3f7a1c',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'sea-vs-air',
    title: 'Sea Freight vs. Air Freight from China: A Practical Comparison',
    excerpt:
      'Choosing between sea and air freight depends on your timeline, budget, and product type. This guide helps you make the right call for your China shipments.',
    category: 'Shipping',
    readTime: '5 min read',
    date: 'May 22, 2026',
    imgId: 'blog-freight-5e8b3c',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
];

const categories = ['All', 'Supplier Sourcing', 'Quality Control', 'Factory Verification', 'Shipping'];

export default function Blog() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides and insights for importers sourcing from China.
              Written by our team based on real project experience.
            </p>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-light text-brand-mid hover:bg-blue-50 hover:text-brand-blue border border-brand-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="card group flex flex-col">
                <div className="h-44 rounded-lg overflow-hidden bg-gray-100 mb-4 -mx-2 -mt-2">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-50 text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 id={post.titleId} className="font-semibold text-brand-dark mb-2 leading-snug flex-1">
                  {post.title}
                </h2>
                <p id={post.descId} className="text-brand-mid text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-brand-border">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-brand-blue text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-brand-light py-16">
        <div className="container-xl">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-dark mb-3">
              Get Sourcing Insights by Email
            </h2>
            <p className="text-brand-mid mb-6">
              Practical guides and updates from our team, delivered monthly. No spam.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <button className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
