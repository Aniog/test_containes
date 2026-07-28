import React from 'react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const posts = [
    {
      id: 1,
      title: 'How to Verify a Chinese Supplier: A Complete Checklist',
      excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order. From business license checks to factory audits, we cover everything you need to know.',
      date: '2026-07-15',
      readTime: '8 min read',
      category: 'Supplier Verification',
      imageId: 'blog-supplier-verification-8f2a9c',
    },
    {
      id: 2,
      title: 'Quality Inspection 101: What Every Buyer Should Know',
      excerpt: 'Understanding the different types of quality inspections and when to use them. A practical guide for importers sourcing from China.',
      date: '2026-07-08',
      readTime: '6 min read',
      category: 'Quality Control',
      imageId: 'blog-quality-inspection-8f2a9d',
    },
    {
      id: 3,
      title: 'Shipping from China: Incoterms Explained',
      excerpt: 'A clear explanation of common Incoterms used in China trade, helping you understand your responsibilities and costs.',
      date: '2026-06-28',
      readTime: '5 min read',
      category: 'Logistics',
      imageId: 'blog-shipping-incoterms-8f2a9e',
    },
    {
      id: 4,
      title: 'Common Mistakes When Sourcing from China and How to Avoid Them',
      excerpt: 'Learn from common pitfalls that cost buyers time and money. Practical advice for a smoother sourcing experience.',
      date: '2026-06-20',
      readTime: '7 min read',
      category: 'Sourcing Tips',
      imageId: 'blog-common-mistakes-8f2a9f',
    },
    {
      id: 5,
      title: 'How to Negotiate with Chinese Manufacturers',
      excerpt: 'Effective negotiation strategies that respect cultural differences while getting you the best deal.',
      date: '2026-06-12',
      readTime: '6 min read',
      category: 'Negotiation',
      imageId: 'blog-negotiation-8f2a9g',
    },
    {
      id: 6,
      title: 'Understanding MOQ: Minimum Order Quantities in China',
      excerpt: 'What MOQ means, why it exists, and strategies for negotiating lower minimums with suppliers.',
      date: '2026-06-05',
      readTime: '4 min read',
      category: 'Sourcing Tips',
      imageId: 'blog-moq-8f2a9h',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Blog & Resources
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Practical insights, guides, and tips for successful China sourcing. Stay informed with our latest articles.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="aspect-video bg-slate-100">
                  <img
                    data-strk-img-id={post.imageId}
                    data-strk-img={`[blog-post-${post.id}-title] [blog-post-${post.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-slate-500 mb-3">
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full mr-3">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 id={`blog-post-${post.id}-title`} className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={`blog-post-${post.id}-category`} className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Get the latest sourcing tips and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
