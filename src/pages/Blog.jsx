import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'How to Verify a Chinese Factory Before Placing Orders',
      excerpt: 'Learn the essential steps to verify factory existence, capabilities, and legitimacy before committing to large orders.',
      category: 'Factory Verification',
      date: 'June 10, 2026',
      author: 'James Chen',
      readTime: '8 min read'
    },
    {
      title: 'Understanding Quality Control Inspections: A Complete Guide',
      excerpt: 'Everything you need to know about pre-shipment inspections, AQL sampling, and ensuring product quality.',
      category: 'Quality Control',
      date: 'June 5, 2026',
      author: 'Sarah Liu',
      readTime: '10 min read'
    },
    {
      title: 'Navigating China Shipping: FOB, CIF, and DDP Explained',
      excerpt: 'A practical breakdown of shipping terms and how to choose the right Incoterms for your business.',
      category: 'Shipping & Logistics',
      date: 'May 28, 2026',
      author: 'Michael Zhang',
      readTime: '7 min read'
    },
    {
      title: 'Common Sourcing Mistakes and How to Avoid Them',
      excerpt: 'Learn from real examples of sourcing failures and discover strategies to prevent them in your supply chain.',
      category: 'Sourcing Tips',
      date: 'May 20, 2026',
      author: 'Emily Wang',
      readTime: '6 min read'
    },
    {
      title: 'The Role of a Sourcing Agent: When to Use One',
      excerpt: 'Discover when it makes sense to hire a sourcing agent and how they can add value to your China operations.',
      category: 'Sourcing Tips',
      date: 'May 12, 2026',
      author: 'James Chen',
      readTime: '5 min read'
    },
    {
      title: 'Understanding Chinese Manufacturing MOQs',
      excerpt: 'How to negotiate minimum order quantities and work with factories to get the best terms for your business.',
      category: 'Negotiation',
      date: 'May 5, 2026',
      author: 'Sarah Liu',
      readTime: '6 min read'
    },
    {
      title: 'Product Development in China: From Concept to Production',
      excerpt: 'A step-by-step guide to developing new products with Chinese manufacturers, including prototyping and tooling.',
      category: 'Product Development',
      date: 'April 28, 2026',
      author: 'David Lee',
      readTime: '9 min read'
    },
    {
      title: 'Managing Quality Issues with Chinese Suppliers',
      excerpt: 'Practical strategies for addressing quality problems, negotiating resolutions, and preventing future issues.',
      category: 'Quality Control',
      date: 'April 20, 2026',
      author: 'Michael Zhang',
      readTime: '7 min read'
    },
    {
      title: 'China Trade Shows: A Guide for Buyers',
      excerpt: 'How to make the most of Canton Fair and other major trade shows to find and evaluate suppliers.',
      category: 'Trade Shows',
      date: 'April 12, 2026',
      author: 'Emily Wang',
      readTime: '8 min read'
    }
  ];

  const categories = [
    'All Posts',
    'Factory Verification',
    'Quality Control',
    'Shipping & Logistics',
    'Sourcing Tips',
    'Negotiation',
    'Product Development',
    'Trade Shows'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Insights, guides, and best practices for successful China sourcing.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white/30 text-6xl font-bold">{index + 1}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated on China Sourcing
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, tips, and industry news.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
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