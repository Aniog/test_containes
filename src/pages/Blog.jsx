import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Calendar, User, Tag, Clock, Search
} from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify Chinese Suppliers: A Complete Guide',
      excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order. From business license checks to on-site factory audits, this guide covers everything you need to know.',
      category: 'Supplier Verification',
      author: 'SSourcing Team',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Quality Control Checklist for Importing from China',
      excerpt: 'A comprehensive quality control checklist to help you ensure product quality when importing from China. Covers pre-production, during production, and pre-shipment inspections.',
      category: 'Quality Control',
      author: 'SSourcing Team',
      date: '2024-01-10',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Understanding China Shipping Options: Sea, Air, and Rail',
      excerpt: 'Compare the pros and cons of different shipping methods when importing from China. Learn about costs, transit times, and which option is best for your products.',
      category: 'Shipping & Logistics',
      author: 'SSourcing Team',
      date: '2024-01-05',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Top 10 Mistakes to Avoid When Sourcing from China',
      excerpt: 'Avoid these common pitfalls when sourcing products from China. Learn from others\' mistakes to save time, money, and headaches in your sourcing journey.',
      category: 'Sourcing Tips',
      author: 'SSourcing Team',
      date: '2023-12-28',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 5,
      title: 'How to Negotiate with Chinese Suppliers Effectively',
      excerpt: 'Master the art of negotiation with Chinese suppliers. Understand cultural nuances, pricing strategies, and effective communication techniques.',
      category: 'Business Tips',
      author: 'SSourcing Team',
      date: '2023-12-20',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Import Regulations and Certifications You Need to Know',
      excerpt: 'Navigate the complex world of import regulations. Learn about required certifications, customs procedures, and compliance requirements for different markets.',
      category: 'Compliance',
      author: 'SSourcing Team',
      date: '2023-12-15',
      readTime: '11 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Sourcing Tips', 'Business Tips', 'Compliance'];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-brand-300 font-semibold text-sm uppercase tracking-wide">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-brand-200 leading-relaxed">
              Expert advice, tips, and guides to help you source products from China more effectively and avoid common pitfalls.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts.filter(post => post.featured).map(post => (
            <div key={post.id} className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="bg-brand-100 text-brand-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-brand-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-900 transition-colors inline-flex items-center">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                <div className="bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl h-64 flex items-center justify-center">
                  <Search className="w-16 h-16 text-brand-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-brand-800 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map(post => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-brand-300" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-2 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest sourcing tips, industry insights, and guides delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <button className="bg-brand-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-900 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-brand-200 mb-8">
            Apply what you've learned. Contact us to start your sourcing project with expert guidance.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-brand-50 transition-colors inline-flex items-center"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;