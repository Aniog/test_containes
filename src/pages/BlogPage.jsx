import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 'how-to-verify-china-supplier',
    title: 'How to Verify a China Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese manufacturers before placing orders, including business license checks, factory audits, and reference verification.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    readTime: '8 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 'quality-control-checklist',
    title: 'Quality Control Checklist for China Manufacturing',
    excerpt: 'A comprehensive quality control checklist to use when sourcing products from China, covering pre-production, during-production, and pre-shipment inspections.',
    category: 'Quality Control',
    date: '2026-06-10',
    readTime: '10 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Shipping from China: FOB, CIF, EXW Explained',
    excerpt: 'Understanding international shipping terms is crucial for China sourcing. This guide explains FOB, CIF, EXW, and other common Incoterms.',
    category: 'Shipping',
    date: '2026-06-05',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: 'Tips for Negotiating with Chinese Suppliers',
    excerpt: 'Cultural insights and practical strategies for negotiating better prices, payment terms, and production schedules with Chinese manufacturers.',
    category: 'Negotiation',
    date: '2026-05-28',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 'avoiding-scams-china-sourcing',
    title: 'How to Avoid Scams When Sourcing from China',
    excerpt: 'Common scams in China sourcing and how to protect your business. Learn the red flags and verification steps to ensure you are working with legitimate suppliers.',
    category: 'Risk Management',
    date: '2026-05-20',
    readTime: '9 min read',
    author: 'SSourcing China Team',
  },
  {
    id: 'china-sourcing-2026-trends',
    title: 'China Sourcing Trends in 2026: What Buyers Need to Know',
    excerpt: 'Key trends shaping China sourcing in 2026, including supply chain shifts, quality improvements, and new opportunities for international buyers.',
    category: 'Industry Insights',
    date: '2026-05-15',
    readTime: '8 min read',
    author: 'SSourcing China Team',
  },
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sourcing Insights & Guides
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert advice, practical guides, and industry insights to help you source confidently from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <div className="h-48 bg-gray-100 relative">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`blog-${post.id}-img`}
                    data-strk-img={`[${post.id}-title] [${post.id}-excerpt]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-700 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <button className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
                      Read more
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated on China Sourcing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest sourcing tips, industry insights, and guides delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is ready to help you find reliable suppliers and ensure quality production.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
