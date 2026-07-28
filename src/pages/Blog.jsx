import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Checklist',
      excerpt: 'Learn the essential steps to verify Chinese suppliers, from business license checks to factory audits. Protect your business from unreliable partners.',
      category: 'Supplier Verification',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'factory-audit-checklist',
      featured: true,
    },
    {
      id: 2,
      title: 'Quality Control in China: What You Need to Know',
      excerpt: 'Understanding the different types of quality inspections and when to use them. A practical guide for importers.',
      category: 'Quality Control',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'quality-inspection-report',
      featured: true,
    },
    {
      id: 3,
      title: 'The True Cost of Sourcing from China: Hidden Fees to Watch For',
      excerpt: 'Beyond the unit price: understanding all the costs involved in importing from China, including shipping, duties, and hidden fees.',
      category: 'Cost Management',
      date: '2024-01-02',
      readTime: '7 min read',
      image: 'shipping-costs-container',
      featured: false,
    },
    {
      id: 4,
      title: 'Negotiating with Chinese Suppliers: Tips and Strategies',
      excerpt: 'Effective negotiation techniques that work in Chinese business culture. Build better relationships and get better prices.',
      category: 'Negotiation',
      date: '2023-12-20',
      readTime: '5 min read',
      image: 'business-negotiation-meeting',
      featured: false,
    },
    {
      id: 5,
      title: 'Understanding MOQ: Minimum Order Quantities in China',
      excerpt: 'What MOQ means, why suppliers set them, and strategies for negotiating lower minimums for your business.',
      category: 'Pricing',
      date: '2023-12-15',
      readTime: '4 min read',
      image: 'factory-production-line',
      featured: false,
    },
    {
      id: 6,
      title: 'Shipping from China: Air vs Sea Freight',
      excerpt: 'Comparing air and sea freight options for importing from China. When to choose each and how to optimize costs.',
      category: 'Logistics',
      date: '2023-12-10',
      readTime: '6 min read',
      image: 'cargo-ship-port',
      featured: false,
    },
    {
      id: 7,
      title: 'Common Quality Issues in Chinese Manufacturing',
      excerpt: 'The most frequent quality problems importers face and how to prevent them through proper inspection and communication.',
      category: 'Quality Control',
      date: '2023-12-05',
      readTime: '5 min read',
      image: 'quality-control-inspection',
      featured: false,
    },
    {
      id: 8,
      title: 'Building Long-term Relationships with Chinese Suppliers',
      excerpt: 'Why long-term supplier relationships matter and how to build trust and mutual success with your Chinese partners.',
      category: 'Supplier Management',
      date: '2023-11-28',
      readTime: '4 min read',
      image: 'business-partnership-handshake',
      featured: false,
    },
  ];

  const categories = [
    'All Posts',
    'Supplier Verification',
    'Quality Control',
    'Cost Management',
    'Negotiation',
    'Pricing',
    'Logistics',
    'Supplier Management',
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Expert insights, practical tips, and industry knowledge to help you succeed with China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-slate-200 relative">
                  <img
                    data-strk-img-id={`blog-featured-${post.id}-8f2a9c`}
                    data-strk-img={`[blog-title-${post.id}] [blog-category-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={`blog-title-${post.id}`} className="text-2xl font-bold text-slate-900 mb-3">
                    {post.title}
                  </h2>
                  <p id={`blog-category-${post.id}`} className="text-slate-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-slate-200 relative">
                  <img
                    data-strk-img-id={`blog-${post.id}-8f2a9c`}
                    data-strk-img={`[blog-title-${post.id}] [blog-category-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 id={`blog-title-${post.id}`} className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={`blog-category-${post.id}`} className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                      Read more →
                    </button>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Get the latest insights on China sourcing delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
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
