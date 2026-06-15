import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

const Blog = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-xl text-blue-100">
            Expert advice and insights on China sourcing
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'How to Verify Chinese Suppliers: A Complete Guide',
                excerpt: 'Learn the essential steps to verify supplier legitimacy, production capacity, and reliability before placing orders.',
                date: '2026-06-10',
                author: 'SSourcing Team',
                category: 'Supplier Verification',
                image: 'blog-verification',
              },
              {
                title: 'Quality Control in Chinese Manufacturing: Best Practices',
                excerpt: 'Discover the quality control processes and inspection methods that ensure your products meet specifications.',
                date: '2026-06-05',
                author: 'SSourcing Team',
                category: 'Quality Control',
                image: 'blog-quality',
              },
              {
                title: 'Understanding Incoterms: Shipping Terms Explained',
                excerpt: 'A comprehensive guide to Incoterms and how they affect your shipping costs and responsibilities.',
                date: '2026-05-28',
                author: 'SSourcing Team',
                category: 'Logistics',
                image: 'blog-shipping',
              },
              {
                title: 'Negotiating with Chinese Suppliers: Tips & Strategies',
                excerpt: 'Effective negotiation strategies to get the best prices and terms from Chinese suppliers.',
                date: '2026-05-20',
                author: 'SSourcing Team',
                category: 'Negotiation',
                image: 'blog-negotiation',
              },
              {
                title: 'Common Sourcing Mistakes and How to Avoid Them',
                excerpt: 'Learn from the mistakes of others and avoid costly errors in your China sourcing projects.',
                date: '2026-05-15',
                author: 'SSourcing Team',
                category: 'Best Practices',
                image: 'blog-mistakes',
              },
              {
                title: 'Factory Audits: What to Check and Why It Matters',
                excerpt: 'A detailed look at factory audits and why they are critical for supplier verification.',
                date: '2026-05-08',
                author: 'SSourcing Team',
                category: 'Factory Audit',
                image: 'blog-audit',
              },
            ].map((post, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-6xl text-blue-300">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="text-blue-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Sourcing Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest tips, guides, and industry updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
