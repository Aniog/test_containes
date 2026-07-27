import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight, Calendar, User, Tag, Clock, Search
} from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-verify-chinese-suppliers',
    titleId: 'blog-verify-suppliers-title',
    descId: 'blog-verify-suppliers-desc',
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers, including license checks, factory audits, and reference verification. Protect your business from unreliable suppliers.',
    category: 'Supplier Verification',
    author: 'SSourcing China Team',
    date: 'July 15, 2026',
    readTime: '8 min read',
    imageQuery: 'supplier verification factory audit business China',
  },
  {
    id: 'quality-control-china-importing',
    titleId: 'blog-qc-importing-title',
    descId: 'blog-qc-importing-desc',
    title: 'Quality Control When Importing from China: What You Need to Know',
    excerpt: 'A comprehensive overview of quality control practices for importing from China, including AQL standards, inspection types, and common defects to watch for.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'July 8, 2026',
    readTime: '10 min read',
    imageQuery: 'quality control inspection products factory',
  },
  {
    id: 'china-shipping-methods-comparison',
    titleId: 'blog-shipping-methods-title',
    descId: 'blog-shipping-methods-desc',
    title: 'Sea vs Air vs Rail: Choosing the Right Shipping Method from China',
    excerpt: 'Compare shipping methods from China including cost, transit time, and best use cases for sea freight, air freight, and rail transport to make informed logistics decisions.',
    category: 'Shipping & Logistics',
    author: 'SSourcing China Team',
    date: 'June 28, 2026',
    readTime: '7 min read',
    imageQuery: 'shipping container cargo freight logistics',
  },
  {
    id: 'negotiating-with-chinese-factories',
    titleId: 'blog-negotiating-title',
    descId: 'blog-negotiating-desc',
    title: 'Negotiation Tips for Working with Chinese Factories',
    excerpt: 'Practical negotiation strategies for international buyers working with Chinese manufacturers. Learn cultural nuances and effective approaches to get better pricing and terms.',
    category: 'Business Tips',
    author: 'SSourcing China Team',
    date: 'June 15, 2026',
    readTime: '6 min read',
    imageQuery: 'business negotiation meeting factory China',
  },
  {
    id: 'customs-clearance-guide',
    titleId: 'blog-customs-title',
    descId: 'blog-customs-desc',
    title: 'Customs Clearance Guide: Importing Goods from China',
    excerpt: 'Navigate customs clearance when importing from China. Understand documentation requirements, duties, taxes, and how to avoid common clearance delays.',
    category: 'Shipping & Logistics',
    author: 'SSourcing China Team',
    date: 'June 1, 2026',
    readTime: '9 min read',
    imageQuery: 'customs clearance documentation shipping port',
  },
  {
    id: 'choosing-sourcing-agent-china',
    titleId: 'blog-choosing-agent-title',
    descId: 'blog-choosing-agent-desc',
    title: 'How to Choose the Right Sourcing Agent in China',
    excerpt: 'Key factors to consider when selecting a China sourcing agent, including industry experience, service scope, communication quality, and fee structures.',
    category: 'Sourcing Tips',
    author: 'SSourcing China Team',
    date: 'May 20, 2026',
    readTime: '7 min read',
    imageQuery: 'sourcing agent business meeting professional',
  },
];

const categories = [
  'All Posts',
  'Supplier Verification',
  'Quality Control',
  'Shipping & Logistics',
  'Business Tips',
  'Sourcing Tips',
];

const Blog = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = React.useState('All Posts');

  const filteredPosts = activeCategory === 'All Posts'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-navy text-white py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-4">Blog & Resources</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Sourcing Knowledge Hub
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Practical guides, tips, and insights to help you source products from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-slate-200 sticky top-16 lg:top-20 z-40">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card group overflow-hidden p-0">
                <div className="relative overflow-hidden">
                  <img
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span id={post.titleId} className="hidden">{post.title}</span>
                  <span id={post.descId} className="hidden">{post.excerpt}</span>
                  <div className="absolute top-4 left-4">
                    <span className="badge bg-white text-primary-700 text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-navy mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-primary-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Stay Updated on China Sourcing
            </h2>
            <p className="text-slate-600 mb-6">
              Get practical sourcing tips and industry insights delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Sourcing Questions?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized sourcing advice.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
            Contact Our Team
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
