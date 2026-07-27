import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'A practical guide to factory verification — what to check, what questions to ask, and how to distinguish real manufacturers from trading companies.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min',
    imgId: 'blog-verify-a1b2c3',
    titleId: 'blog-verify-title',
    excerptId: 'blog-verify-excerpt',
  },
  {
    title: 'Understanding AQL Standards for Quality Inspection',
    excerpt: 'What AQL levels mean, how to choose the right inspection level for your product, and what to expect in a pre-shipment inspection report.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min',
    imgId: 'blog-aql-d4e5f6',
    titleId: 'blog-aql-title',
    excerptId: 'blog-aql-excerpt',
  },
  {
    title: '5 Common Mistakes When Sourcing from China for the First Time',
    excerpt: 'New buyers often make these mistakes — from skipping factory visits to underestimating shipping costs. Here\'s how to avoid them.',
    category: 'Sourcing Tips',
    date: '2026-06-28',
    readTime: '7 min',
    imgId: 'blog-mistakes-g7h8i9',
    titleId: 'blog-mistakes-title',
    excerptId: 'blog-mistakes-excerpt',
  },
  {
    title: 'Shipping Options from China: Sea, Air, and Rail Compared',
    excerpt: 'A comparison of shipping methods from China — costs, transit times, and when each option makes sense for your order size and urgency.',
    category: 'Shipping & Logistics',
    date: '2026-06-20',
    readTime: '9 min',
    imgId: 'blog-ship-j1k2l3',
    titleId: 'blog-ship-title',
    excerptId: 'blog-ship-excerpt',
  },
  {
    title: 'Product Certification Guide: CE, FCC, RoHS, and More',
    excerpt: 'Which certifications your product needs for different markets, how to obtain them from Chinese factories, and what to watch for in certification documents.',
    category: 'Compliance',
    date: '2026-06-12',
    readTime: '10 min',
    imgId: 'blog-cert-m4n5o6',
    titleId: 'blog-cert-title',
    excerptId: 'blog-cert-excerpt',
  },
  {
    title: 'How to Negotiate Better Terms with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies for pricing, payment terms, MOQ, and delivery schedules — based on real experience working with hundreds of factories.',
    category: 'Sourcing Tips',
    date: '2026-06-05',
    readTime: '7 min',
    imgId: 'blog-negotiate-p7q8r9',
    titleId: 'blog-negotiate-title',
    excerptId: 'blog-negotiate-excerpt',
  },
];

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Sourcing Tips', 'Shipping & Logistics', 'Compliance'];

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p id="blog-page-subtitle" className="text-lg text-navy-200 max-w-2xl">
            Practical insights on China sourcing, supplier verification, quality control, shipping, and compliance — written for international buyers.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-6 border-b border-navy-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-primary-500 text-white'
                    : 'bg-navy-50 text-navy-600 hover:bg-navy-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="bg-white rounded-xl border border-navy-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.excerptId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary-50 text-primary-500 px-2.5 py-1 rounded text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-navy-400">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-navy-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-navy-900 mb-2">{post.title}</h3>
                  <p id={post.excerptId} className="text-sm text-navy-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-primary-500 text-sm font-semibold hover:text-primary-600 transition-colors cursor-pointer">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-primary-500 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated on China Sourcing</h2>
          <p className="text-lg text-primary-100 mb-8">
            Get practical sourcing tips and industry updates delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-primary-300 text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
