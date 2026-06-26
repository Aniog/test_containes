import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const blogPosts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to checking business licenses, factory capabilities, and quality systems before committing to a supplier in China.',
    author: 'SSourcing China Team',
    date: '2026-06-15',
    readTime: '8 min read',
  },
  {
    id: 'quality-control-checklist',
    category: 'Quality Control',
    title: 'Quality Control Checklist for Importing from China',
    excerpt: 'Essential quality control steps every buyer should follow when importing products from Chinese manufacturers.',
    author: 'SSourcing China Team',
    date: '2026-06-08',
    readTime: '6 min read',
  },
  {
    id: 'shipping-options-explained',
    category: 'Shipping & Logistics',
    title: 'Shipping Options from China: Sea Freight vs Air Freight',
    excerpt: 'Understanding the differences between sea freight and air freight, and how to choose the right option for your shipment.',
    author: 'SSourcing China Team',
    date: '2026-05-28',
    readTime: '7 min read',
  },
  {
    id: 'negotiating-with-chinese-factories',
    category: 'Sourcing Tips',
    title: 'Tips for Negotiating with Chinese Factories',
    excerpt: 'Practical negotiation strategies that work when dealing with Chinese manufacturers, based on our years of experience.',
    author: 'SSourcing China Team',
    date: '2026-05-20',
    readTime: '5 min read',
  },
  {
    id: 'understanding-moq',
    category: 'Sourcing Tips',
    title: 'Understanding MOQ: Minimum Order Quantities in China',
    excerpt: 'What MOQ means, why factories set them, and strategies for negotiating lower minimum order quantities.',
    author: 'SSourcing China Team',
    date: '2026-05-12',
    readTime: '6 min read',
  },
  {
    id: 'product-sampling-guide',
    category: 'Quality Control',
    title: 'A Complete Guide to Product Sampling from China',
    excerpt: 'Why sampling matters, what to check in samples, and how to use samples effectively in your sourcing process.',
    author: 'SSourcing China Team',
    date: '2026-05-05',
    readTime: '7 min read',
  },
  {
    id: 'customs-documentation',
    category: 'Shipping & Logistics',
    title: 'Customs Documentation You Need for Importing from China',
    excerpt: 'A clear overview of the documents required for customs clearance when importing goods from China.',
    author: 'SSourcing China Team',
    date: '2026-04-28',
    readTime: '5 min read',
  },
  {
    id: 'avoiding-sourcing-scams',
    category: 'Supplier Verification',
    title: 'How to Avoid Common Sourcing Scams in China',
    excerpt: 'Red flags to watch for and practical steps to protect yourself from fraudulent suppliers and trading companies.',
    author: 'SSourcing China Team',
    date: '2026-04-20',
    readTime: '8 min read',
  },
  {
    id: 'incoterms-explained',
    category: 'Shipping & Logistics',
    title: 'Incoterms Explained: FOB, EXW, CIF, and More',
    excerpt: 'A simple guide to understanding international trade terms and what they mean for your sourcing costs and responsibilities.',
    author: 'SSourcing China Team',
    date: '2026-04-12',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  const containerRef = useRef(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Practical guides, tips, and insights for buying from China. Written by our sourcing team based on real experience.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.map((post, i) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div
                    className="aspect-video bg-gray-100"
                    data-strk-bg-id={`blog-bg-${post.id}`}
                    data-strk-bg={`[blog-title-${i}] [blog-category-${i}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                  <h3 id={`blog-title-${i}`} className="sr-only">{post.title}</h3>
                  <p id={`blog-category-${i}`} className="sr-only">{post.category}</p>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-primary-900 mb-3 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4">Need Help with Your Sourcing?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is ready to help you find reliable suppliers and manage your orders from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
