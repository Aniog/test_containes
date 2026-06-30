import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 'china-sourcing-guide-2026',
    title: 'The Complete Guide to Sourcing from China in 2026',
    excerpt: 'Everything you need to know about finding reliable suppliers, managing quality control, and navigating the changing landscape of China sourcing.',
    category: 'Sourcing Guide',
    author: 'SSourcing China Team',
    date: 'June 15, 2026',
    readTime: '12 min read',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look for in a Supplier Visit',
    excerpt: 'A practical checklist for conducting effective factory audits in China, covering documentation, production lines, quality systems, and working conditions.',
    category: 'Quality Control',
    author: 'Li Wei',
    date: 'June 8, 2026',
    readTime: '8 min read',
  },
  {
    id: 'quality-inspection-aql',
    title: 'Understanding AQL in Product Quality Inspections',
    excerpt: 'A clear explanation of Acceptable Quality Limit (AQL) standards and how they are applied during pre-shipment inspections in China.',
    category: 'Quality Control',
    author: 'Sarah Chen',
    date: 'June 1, 2026',
    readTime: '6 min read',
  },
  {
    id: 'shipping-china-guide',
    title: 'Shipping from China: Air Freight vs Sea Freight',
    excerpt: 'Compare costs, transit times, and considerations for air freight and sea freight when importing goods from China.',
    category: 'Logistics',
    author: 'James Liu',
    date: 'May 25, 2026',
    readTime: '10 min read',
  },
  {
    id: 'supplier-negotiation-tips',
    title: 'How to Negotiate with Chinese Suppliers: Practical Tips',
    excerpt: 'Effective negotiation strategies for working with Chinese manufacturers, from pricing and payment terms to quality agreements.',
    category: 'Sourcing Tips',
    author: 'SSourcing China Team',
    date: 'May 18, 2026',
    readTime: '7 min read',
  },
  {
    id: 'ip-protection-china',
    title: 'Intellectual Property Protection When Manufacturing in China',
    excerpt: 'Key strategies for protecting your product designs and IP when working with Chinese manufacturers, including NDAs and patent registration.',
    category: 'Legal',
    author: 'Michael Zhang',
    date: 'May 10, 2026',
    readTime: '9 min read',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Sourcing Insights
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              Practical guides, tips, and insights about sourcing from China. 
              Written by our experienced team based in Guangzhou.
            </p>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all group flex flex-col"
              >
                <div className="h-48 bg-navy-100 flex items-center justify-center">
                  <div className="w-12 h-12 bg-navy-200 rounded-full flex items-center justify-center">
                    <span className="text-navy-500 font-bold text-lg">{post.category.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="bg-navy-50 text-navy-600 font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-navy-900 mb-3 group-hover:text-navy-700 transition-colors leading-snug">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
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
                      to={`/blog/${post.id}`}
                      className="text-navy-700 font-semibold hover:text-navy-900 transition-colors inline-flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-600 mb-8">
            Get the latest sourcing tips and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
            />
            <button
              type="submit"
              className="bg-navy-900 hover:bg-navy-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}