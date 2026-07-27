import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Calendar, Clock, User, Tag, Search,
  TrendingUp, Globe, Package, Shield, FileText
} from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'How to Verify Chinese Suppliers: A Complete Guide',
      excerpt: 'Learn the essential steps to verify Chinese suppliers and avoid common pitfalls when sourcing from China. Our comprehensive guide covers everything from business license verification to on-site factory audits.',
      category: 'Supplier Verification',
      author: 'SSourcing Team',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true,
      tags: ['Supplier Verification', 'Due Diligence', 'Risk Management']
    },
    {
      title: 'Quality Control Best Practices for Importers',
      excerpt: 'Discover the quality control strategies used by successful importers to ensure consistent product quality. From pre-production samples to final inspections, learn how to protect your investment.',
      category: 'Quality Control',
      author: 'SSourcing Team',
      date: '2024-01-10',
      readTime: '6 min read',
      featured: false,
      tags: ['Quality Control', 'Inspection', 'Standards']
    },
    {
      title: 'Understanding Chinese Manufacturing: What Buyers Need to Know',
      excerpt: 'Navigate the Chinese manufacturing landscape with confidence. This guide covers factory types, production capabilities, minimum order quantities, and how to communicate effectively with Chinese manufacturers.',
      category: 'Manufacturing',
      author: 'SSourcing Team',
      date: '2024-01-05',
      readTime: '10 min read',
      featured: false,
      tags: ['Manufacturing', 'China', 'Production']
    },
    {
      title: 'Shipping from China: Sea, Air, and Rail Compared',
      excerpt: 'Compare the pros and cons of different shipping methods from China. Learn about costs, transit times, and which option is best for your specific product and business needs.',
      category: 'Logistics',
      author: 'SSourcing Team',
      date: '2023-12-28',
      readTime: '7 min read',
      featured: false,
      tags: ['Shipping', 'Logistics', 'Cost Optimization']
    },
    {
      title: 'Negotiating with Chinese Suppliers: Tips and Strategies',
      excerpt: 'Master the art of negotiation with Chinese suppliers. Learn cultural nuances, effective communication strategies, and proven tactics to get the best prices without compromising quality.',
      category: 'Negotiation',
      author: 'SSourcing Team',
      date: '2023-12-20',
      readTime: '9 min read',
      featured: false,
      tags: ['Negotiation', 'Pricing', 'Communication']
    },
    {
      title: 'Common Sourcing Mistakes and How to Avoid Them',
      excerpt: 'Learn from the most common mistakes made by businesses when sourcing from China. Avoid costly errors and set your sourcing project up for success with these practical tips.',
      category: 'Best Practices',
      author: 'SSourcing Team',
      date: '2023-12-15',
      readTime: '6 min read',
      featured: false,
      tags: ['Best Practices', 'Risk Management', 'Tips']
    }
  ];

  const categories = [
    'All',
    'Supplier Verification',
    'Quality Control',
    'Manufacturing',
    'Logistics',
    'Negotiation',
    'Best Practices'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-brand-200 font-semibold text-sm uppercase tracking-wider">Blog & Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Sourcing Insights & Guides
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Expert insights, practical guides, and industry knowledge to help you succeed 
              when sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                  <FileText className="w-24 h-24 text-brand-500" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="inline-flex items-center text-brand-500 font-semibold hover:text-brand-600 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-brand-500 text-white' 
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-slate-400 group-hover:text-brand-500 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <Link
                      to="#"
                      className="text-brand-500 font-medium hover:text-brand-600 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Stay Updated with Sourcing Insights
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest sourcing tips, industry news, and exclusive guides 
              to help you succeed in importing from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
              />
              <button className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Sourcing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help. Contact us for personalized advice and guidance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg"
          >
            Contact Our Experts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
