import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Learn the essential steps to verify a supplier\'s legitimacy, from checking business licenses to conducting on-site factory audits. A practical guide for first-time importers.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-verify-s7t8u9',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    title: 'Understanding AQL: What Pre-Shipment Inspection Standards Mean for Your Business',
    excerpt: 'AQL (Acceptable Quality Level) is the industry standard for quality inspection. This article explains how AQL works, what different levels mean, and how to set the right standard for your products.',
    category: 'Quality Control',
    date: '2026-07-01',
    readTime: '6 min read',
    imgId: 'blog-aql-v0w1x2',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method from China',
    excerpt: 'A practical comparison of sea freight and air freight for importing from China, including cost analysis, transit times, and when each option makes the most sense for your business.',
    category: 'Shipping & Logistics',
    date: '2026-06-20',
    readTime: '7 min read',
    imgId: 'blog-shipping-y3z4a5',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    title: '5 Common Mistakes First-Time Importers Make (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to underestimating shipping costs, these common mistakes can cost you time and money. Learn how experienced importers avoid these pitfalls.',
    category: 'Importing Tips',
    date: '2026-06-10',
    readTime: '5 min read',
    imgId: 'blog-mistakes-b6c7d8',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    title: 'China Sourcing in 2026: Trends and What Buyers Need to Know',
    excerpt: 'From supply chain diversification to rising labor costs, understand the key trends shaping China sourcing in 2026 and how to adapt your strategy accordingly.',
    category: 'Industry Trends',
    date: '2026-05-28',
    readTime: '9 min read',
    imgId: 'blog-trends-e9f0g1',
    titleId: 'blog-trends-title',
    descId: 'blog-trends-desc',
  },
  {
    title: 'How to Negotiate Better Prices with Chinese Suppliers',
    excerpt: 'Effective price negotiation with Chinese suppliers requires understanding their cost structure, building relationships, and knowing when to push and when to compromise. Here is a practical framework.',
    category: 'Negotiation',
    date: '2026-05-15',
    readTime: '7 min read',
    imgId: 'blog-negotiate-h2i3j4',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Blog</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sourcing Insights & Guides</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Practical advice, industry updates, and how-to guides for importing from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
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
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">{post.category}</span>
                  <h3 id={post.titleId} className="text-lg font-bold text-gray-900 mt-2 mb-3 line-clamp-2">{post.title}</h3>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Have a Sourcing Question?</h2>
          <p className="text-gray-600 text-lg mb-8">
            We are happy to help. Reach out and our team will get back to you within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors no-underline"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
