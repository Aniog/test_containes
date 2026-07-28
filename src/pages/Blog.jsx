import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Checklist',
      excerpt: 'Learn the essential steps to verify Chinese suppliers, from business license checks to factory visits and reference verification.',
      date: '2026-07-15',
      readTime: '8 min read',
      category: 'Supplier Verification',
      featured: true,
    },
    {
      id: 2,
      title: 'The Ultimate Guide to China Quality Inspection',
      excerpt: 'Understand the different types of quality inspections and when to use them to ensure your products meet specifications.',
      date: '2026-07-08',
      readTime: '12 min read',
      category: 'Quality Control',
      featured: true,
    },
    {
      id: 3,
      title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities',
      excerpt: 'Practical strategies for negotiating MOQs with Chinese suppliers, especially for small businesses and new product launches.',
      date: '2026-06-28',
      readTime: '6 min read',
      category: 'Negotiation',
      featured: false,
    },
    {
      id: 4,
      title: 'Shipping from China: Incoterms Explained',
      excerpt: 'A clear explanation of common Incoterms used in China trade and which ones work best for different situations.',
      date: '2026-06-20',
      readTime: '10 min read',
      category: 'Logistics',
      featured: false,
    },
    {
      id: 5,
      title: 'Common Quality Issues in Electronics Manufacturing',
      excerpt: 'The most frequent quality problems in electronics manufacturing and how to prevent them through proper inspection.',
      date: '2026-06-12',
      readTime: '7 min read',
      category: 'Quality Control',
      featured: false,
    },
    {
      id: 6,
      title: 'Building Long-Term Relationships with Chinese Suppliers',
      excerpt: 'Why relationship building matters in Chinese business culture and how to develop lasting partnerships with your suppliers.',
      date: '2026-06-05',
      readTime: '9 min read',
      category: 'Supplier Management',
      featured: false,
    },
  ];

  const categories = [
    'Supplier Verification',
    'Quality Control',
    'Logistics',
    'Negotiation',
    'Supplier Management',
    'Industry Insights',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Blog & Insights</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Practical advice, industry insights, and expert guidance on sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {posts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-slate-400 font-medium">Featured Article</span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <span className="text-slate-900 font-medium inline-flex items-center group-hover:underline">
                      Read more
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* All Posts */}
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-slate-400 text-sm">Article Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-slate-600 mb-8">
            Subscribe to our newsletter for the latest insights on China sourcing, quality control, and industry trends.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
