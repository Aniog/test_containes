import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  Building2,
  ClipboardCheck,
  Truck,
  FileText,
  TrendingUp,
} from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts', icon: null },
    { id: 'sourcing', label: 'Sourcing', icon: Search },
    { id: 'quality', label: 'Quality Control', icon: ClipboardCheck },
    { id: 'logistics', label: 'Logistics', icon: Truck },
    { id: 'business', label: 'Business Tips', icon: TrendingUp },
  ];

  const posts = [
    {
      id: 1,
      title: '10 Questions to Ask Before Selecting a China Supplier',
      excerpt: 'Due diligence is essential when sourcing from China. Here are the key questions that will help you identify reliable suppliers and avoid common pitfalls.',
      category: 'sourcing',
      author: 'SSourcing Team',
      date: 'June 15, 2026',
      readTime: '8 min read',
      featured: true,
      image: 'supplier verification checklist',
    },
    {
      id: 2,
      title: 'Understanding AQL: The Key to Effective Quality Inspection',
      excerpt: 'Acceptable Quality Limit (AQL) is crucial for balancing quality requirements with production realities. Learn how to set the right AQL levels for your products.',
      category: 'quality',
      author: 'SSourcing Team',
      date: 'June 8, 2026',
      readTime: '6 min read',
      featured: false,
      image: 'quality inspection checklist',
    },
    {
      id: 3,
      title: 'Sea Freight vs. Air Freight: Making the Right Choice',
      excerpt: 'Shipping method selection significantly impacts cost and delivery time. We break down the pros and cons of each option to help you make informed decisions.',
      category: 'logistics',
      author: 'SSourcing Team',
      date: 'May 28, 2026',
      readTime: '5 min read',
      featured: false,
      image: 'shipping containers cargo',
    },
    {
      id: 4,
      title: 'Factory Audit Checklist: What to Verify On-Site',
      excerpt: 'A thorough factory audit can save you from costly mistakes. This comprehensive checklist covers everything you need to verify during a factory visit.',
      category: 'sourcing',
      author: 'SSourcing Team',
      date: 'May 20, 2026',
      readTime: '10 min read',
      featured: false,
      image: 'factory inspection audit',
    },
    {
      id: 5,
      title: 'How to Protect Your Intellectual Property When Sourcing in China',
      excerpt: 'IP protection is a major concern for international buyers. Learn practical strategies to safeguard your designs, trademarks, and trade secrets.',
      category: 'business',
      author: 'SSourcing Team',
      date: 'May 12, 2026',
      readTime: '7 min read',
      featured: false,
      image: 'document security protection',
    },
    {
      id: 6,
      title: 'Pre-Shipment Inspection: Your Last Line of Defense',
      excerpt: 'Pre-shipment inspection is your opportunity to catch quality issues before products reach your customers. Here\'s what to include in your inspection checklist.',
      category: 'quality',
      author: 'SSourcing Team',
      date: 'May 5, 2026',
      readTime: '6 min read',
      featured: false,
      image: 'quality control inspection',
    },
    {
      id: 7,
      title: 'Navigating Chinese Customs: A Complete Guide to Export Documentation',
      excerpt: 'Proper documentation is essential for smooth customs clearance. Learn about the required certificates, forms, and best practices for exporting from China.',
      category: 'logistics',
      author: 'SSourcing Team',
      date: 'April 28, 2026',
      readTime: '8 min read',
      featured: false,
      image: 'customs documentation paperwork',
    },
    {
      id: 8,
      title: 'Building Long-Term Supplier Relationships in China',
      excerpt: 'Strong supplier relationships lead to better pricing, priority production, and higher quality. Here\'s how to cultivate partnerships that benefit both parties.',
      category: 'business',
      author: 'SSourcing Team',
      date: 'April 20, 2026',
      readTime: '5 min read',
      featured: false,
      image: 'business handshake partnership',
    },
  ];

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || activeCategory !== 'all');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8e] to-[#1e3a5f] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
              China Sourcing Insights & Resources
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Expert guidance, practical tips, and industry insights to help you succeed in China sourcing. Stay informed with our regularly updated resources.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-[#1e3a5f] text-white'
                    : 'bg-[#f7fafc] text-[#4a5568] hover:bg-[#edf2f7]'
                }`}
              >
                {category.icon && <category.icon size={16} />}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'all' && featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to={`/blog/${featuredPost.id}`}
              className="group grid lg:grid-cols-2 gap-8 bg-[#f7fafc] rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] h-64 lg:h-auto flex items-center justify-center">
                <FileText size={64} className="text-white/30" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#e67e22] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="bg-[#fef7f0] text-[#e67e22] text-xs font-semibold px-3 py-1 rounded-full capitalize">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1e3a5f] mb-4 group-hover:text-[#e67e22] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-[#4a5568] mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#718096]">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] h-40 flex items-center justify-center">
                  <FileText size={48} className="text-white/30" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#fef7f0] text-[#e67e22] text-xs font-semibold px-3 py-1 rounded-full capitalize">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#4a5568] text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#e2e8f0]">
                    <div className="flex items-center gap-3 text-xs text-[#718096]">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#e67e22] hover:text-[#d35400] text-sm font-semibold flex items-center gap-1 transition-colors"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-3xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated on China Sourcing
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest sourcing tips, industry insights, and best practices delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-[#1e3a5f] focus:ring-2 focus:ring-[#e67e22] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#e67e22] hover:bg-[#d35400] px-8 py-4 rounded-xl font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Put our expertise to work for you. Get a free, no-obligation quote for your China sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;