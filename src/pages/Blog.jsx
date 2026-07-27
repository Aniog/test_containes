import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);
  const blogPosts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Checklist',
      excerpt: 'Learn the essential steps to verify Chinese suppliers and avoid common pitfalls when sourcing from China.',
      author: 'David Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Supplier Verification',
      image: 'supplier verification',
    },
    {
      id: 2,
      title: 'Understanding MOQ: Minimum Order Quantities in China',
      excerpt: 'Everything you need to know about MOQs, how to negotiate them, and strategies for small businesses.',
      author: 'Sarah Wang',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Sourcing Tips',
      image: 'business negotiation',
    },
    {
      id: 3,
      title: 'Quality Control in China: What You Need to Know',
      excerpt: 'A comprehensive guide to quality control processes, inspection types, and how to ensure product quality.',
      author: 'Michael Liu',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Quality Control',
      image: 'quality inspection',
    },
    {
      id: 4,
      title: 'Shipping from China: Incoterms Explained',
      excerpt: 'Understanding FOB, CIF, EXW, and other Incoterms to make informed shipping decisions.',
      author: 'Emily Zhang',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Logistics',
      image: 'shipping logistics',
    },
    {
      id: 5,
      title: 'The True Cost of Sourcing from China',
      excerpt: 'Beyond the unit price: understanding all costs involved in importing from China.',
      author: 'David Chen',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Sourcing Tips',
      image: 'cost analysis',
    },
    {
      id: 6,
      title: 'Factory Audits: What to Look For',
      excerpt: 'Key indicators of a reliable factory and red flags to watch out for during audits.',
      author: 'Sarah Wang',
      date: '2023-12-15',
      readTime: '8 min read',
      category: 'Factory Verification',
      image: 'factory audit',
    },
  ];

  const categories = [
    'All Posts',
    'Supplier Verification',
    'Sourcing Tips',
    'Quality Control',
    'Logistics',
    'Factory Verification',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Expert insights, tips, and guides on sourcing from China. Stay informed with the latest industry knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={containerRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-200 relative">
                  <img
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[blog-${post.id}-title] [blog-${post.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={`blog-${post.id}-title`} className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={`blog-${post.id}-category`} className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Subscribe to our newsletter for the latest insights on China sourcing, supplier verification, and industry trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
