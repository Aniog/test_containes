import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, User, ArrowRight, Search, Tag, Clock, Share2,
  Facebook, Twitter, Linkedin, Mail
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  React.useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'sourcing', name: 'Sourcing Guide' },
    { id: 'quality', name: 'Quality Control' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'industry', name: 'Industry Insights' },
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'sourcing',
      title: 'How to Find Reliable Suppliers in China: A Complete Guide',
      excerpt: 'Finding trustworthy suppliers is the foundation of successful China sourcing. Learn the proven methods our team uses to verify manufacturers.',
      author: 'Michael Zhang',
      date: 'June 15, 2024',
      readTime: '8 min read',
      image: 'supplier-guide',
      featured: true,
    },
    {
      id: 2,
      category: 'quality',
      title: 'Understanding AQL: The Key to Quality Inspections',
      excerpt: 'Acceptable Quality Level (AQL) is crucial for balancing quality requirements with production realities. Here is how to use it effectively.',
      author: 'Lisa Chen',
      date: 'June 8, 2024',
      readTime: '6 min read',
      image: 'quality-inspection',
      featured: true,
    },
    {
      id: 3,
      category: 'logistics',
      title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
      excerpt: 'Your shipping choice affects both cost and delivery time. Learn when to choose each option and how to optimize your logistics strategy.',
      author: 'David Wang',
      date: 'May 28, 2024',
      readTime: '5 min read',
      image: 'shipping',
      featured: false,
    },
    {
      id: 4,
      category: 'sourcing',
      title: 'Negotiating with Chinese Suppliers: Tips from the Trenches',
      excerpt: 'Successful negotiation requires understanding cultural differences and business practices. Our team shares practical negotiation strategies.',
      author: 'Sarah Liu',
      date: 'May 20, 2024',
      readTime: '7 min read',
      image: 'negotiation',
      featured: false,
    },
    {
      id: 5,
      category: 'quality',
      title: 'Factory Audit Checklist: What to Verify Before Placing Orders',
      excerpt: 'A thorough factory audit can save you from costly mistakes. Use this comprehensive checklist to evaluate potential suppliers.',
      author: 'Michael Zhang',
      date: 'May 12, 2024',
      readTime: '10 min read',
      image: 'factory-audit',
      featured: false,
    },
    {
      id: 6,
      category: 'industry',
      title: 'The Future of Manufacturing in China: Trends to Watch',
      excerpt: 'China manufacturing is evolving rapidly. Stay ahead of the curve by understanding emerging trends and their implications.',
      author: 'James Lee',
      date: 'May 5, 2024',
      readTime: '6 min read',
      image: 'manufacturing',
      featured: false,
    },
    {
      id: 7,
      category: 'logistics',
      title: 'Understanding Chinese Customs: Documentation Requirements',
      excerpt: 'Proper documentation is essential for smooth customs clearance. Learn what paperwork you need and how to prepare it correctly.',
      author: 'David Wang',
      date: 'April 25, 2024',
      readTime: '8 min read',
      image: 'customs',
      featured: false,
    },
    {
      id: 8,
      category: 'sourcing',
      title: 'Sample Ordering: Getting What You Need Before Bulk Production',
      excerpt: 'Samples are your best insurance against quality issues. Follow our guide to ordering and evaluating samples effectively.',
      author: 'Lisa Chen',
      date: 'April 18, 2024',
      readTime: '5 min read',
      image: 'samples',
      featured: false,
    },
    {
      id: 9,
      category: 'industry',
      title: 'How to Protect Your Intellectual Property in China',
      excerpt: 'IP protection is a top concern for foreign businesses. Learn practical steps to safeguard your designs and trademarks.',
      author: 'Sarah Liu',
      date: 'April 10, 2024',
      readTime: '7 min read',
      image: 'ip-protection',
      featured: false,
    },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts.filter(post => !post.featured) 
    : blogPosts.filter(post => post.category === activeCategory && !post.featured);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights</h1>
            <p className="text-xl text-blue-100">
              Expert guidance on China sourcing, quality control, and international logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-6xl font-bold text-blue-300">{post.title[0]}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full capitalize">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {post.author}
                      <span>•</span>
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <button className="text-blue-600 font-medium text-sm hover:text-blue-700 flex items-center gap-1">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter & All Posts */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Posts Grid */}
            <div className="flex-grow">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-300">{post.title[0]}</span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded capitalize">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{post.author}</span>
                        <span className="text-gray-400">{post.date}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-blue-100 text-lg mb-8">
              Subscribe to our newsletter for the latest China sourcing insights and industry updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
