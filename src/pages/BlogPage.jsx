import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify potential Chinese suppliers before placing an order, including license checks, factory audits, and reference verification.',
    author: 'SSourcing China Team',
    date: 'May 28, 2026',
    readTime: '8 min read',
    category: 'Supplier Verification',
    image: null,
  },
  {
    id: 2,
    title: 'Understanding AQL Standards for Quality Inspection in China',
    excerpt: 'A comprehensive guide to Acceptable Quality Limit (AQL) standards and how they are applied during pre-shipment inspections of Chinese manufactured goods.',
    author: 'SSourcing China Team',
    date: 'May 15, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
    image: null,
  },
  {
    id: 3,
    title: 'China Sourcing vs Local Manufacturing: A Cost-Benefit Analysis',
    excerpt: 'An objective comparison of sourcing from China versus manufacturing locally, covering costs, quality, lead times, and risk factors for different product types.',
    author: 'SSourcing China Team',
    date: 'April 30, 2026',
    readTime: '10 min read',
    category: 'Sourcing Strategy',
    image: null,
  },
  {
    id: 4,
    title: 'Top 10 Mistakes When Sourcing Products from China',
    excerpt: 'Avoid these common pitfalls that cost importers time and money, from incomplete specifications to neglecting quality control and IP protection.',
    author: 'SSourcing China Team',
    date: 'April 12, 2026',
    readTime: '7 min read',
    category: 'Best Practices',
    image: null,
  },
  {
    id: 5,
    title: 'The Complete Guide to Factory Audits in China',
    excerpt: 'What to expect during a factory audit, how to prepare, and how to evaluate audit reports to make informed supplier decisions.',
    author: 'SSourcing China Team',
    date: 'March 25, 2026',
    readTime: '9 min read',
    category: 'Supplier Verification',
    image: null,
  },
  {
    id: 6,
    title: 'Shipping from China: Sea Freight vs Air Freight',
    excerpt: 'Compare the costs, transit times, and suitability of sea freight and air freight for your China imports. Includes tips for choosing the right Incoterms.',
    author: 'SSourcing China Team',
    date: 'March 10, 2026',
    readTime: '7 min read',
    category: 'Logistics',
    image: null,
  },
]

const categories = [...new Set(posts.map((p) => p.category))]

export default function BlogPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Practical insights, guides, and tips for sourcing products from China. Written by our team of experienced sourcing professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-brand-navy/5 to-brand-navy/20 flex items-center justify-center">
                  <div className="text-brand-navy/30 text-sm font-medium px-4 text-center">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-brand-red bg-red-50 px-2 py-1 rounded">{post.category}</span>
                  </div>
                  <h2 className="text-lg font-bold text-brand-navy mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 text-brand-navy font-medium text-sm hover:text-brand-navy-light transition-colors"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Stay Informed</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest China sourcing guides, industry insights, and best practices delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy text-sm"
              required
            />
            <button
              type="submit"
              className="bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Have Specific Sourcing Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Our team is ready to help with your unique requirements. Get in touch for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Contact Our Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}