import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Blog = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const blogPosts = [
    {
      title: 'How to Verify Chinese Suppliers: A Complete Guide',
      excerpt: 'Learn the essential steps to verify factory legitimacy, check business licenses, and assess production capabilities before placing orders.',
      category: 'Supplier Verification',
      date: 'June 10, 2026',
      readTime: '8 min read',
      author: 'SSourcing Team'
    },
    {
      title: 'Understanding Quality Control Standards for Importers',
      excerpt: 'A practical overview of AQL sampling, inspection stages, and quality standards that every importer should know.',
      category: 'Quality Control',
      date: 'May 28, 2026',
      readTime: '6 min read',
      author: 'SSourcing Team'
    },
    {
      title: 'Shipping from China: FOB, CIF, and Other Terms Explained',
      excerpt: 'Navigate international shipping terms confidently. We explain common incoterms and help you choose the right option for your business.',
      category: 'Shipping & Logistics',
      date: 'May 15, 2026',
      readTime: '7 min read',
      author: 'SSourcing Team'
    },
    {
      title: 'Managing Communication with Chinese Suppliers',
      excerpt: 'Effective communication is key to successful sourcing. Learn strategies for clear communication and building strong supplier relationships.',
      category: 'Best Practices',
      date: 'May 2, 2026',
      readTime: '5 min read',
      author: 'SSourcing Team'
    },
    {
      title: 'Sample Management: Getting What You Need Before Production',
      excerpt: 'Everything you need to know about requesting, evaluating, and approving samples to ensure your final product meets expectations.',
      category: 'Sourcing Process',
      date: 'April 18, 2026',
      readTime: '6 min read',
      author: 'SSourcing Team'
    },
    {
      title: 'Common Sourcing Mistakes and How to Avoid Them',
      excerpt: 'Learn from the experiences of other importers. We share common pitfalls and practical tips to help you source more effectively.',
      category: 'Best Practices',
      date: 'April 5, 2026',
      readTime: '7 min read',
      author: 'SSourcing Team'
    }
  ];

  const categories = [
    'All Categories',
    'Supplier Verification',
    'Quality Control',
    'Shipping & Logistics',
    'Best Practices',
    'Sourcing Process'
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Sourcing Insights & Resources
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300">
              Practical guides, industry insights, and best practices to help you navigate China sourcing with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video bg-neutral-100">
                  <div 
                    className="w-full h-full"
                    data-strk-bg-id={`blog-post-${index}-img`}
                    data-strk-bg={`[${post.title}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500">{post.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Stay Updated</h2>
            <p className="text-lg text-neutral-600 mb-8">
              Subscribe to our newsletter for the latest sourcing insights, industry news, and practical tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-3 font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Put our expertise to work for your business. Get a free consultation and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
