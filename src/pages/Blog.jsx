import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import Button from '@/components/ui/button'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to verifying supplier legitimacy, including license checks, factory visits, and trade reference verification.',
    date: 'June 8, 2026',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    slug: 'verify-chinese-supplier',
  },
  {
    title: 'Understanding AQL Inspection Standards for Your China Orders',
    excerpt: 'Learn how Acceptable Quality Limit (AQL) sampling works and how to set the right quality thresholds for your products.',
    date: 'May 25, 2026',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    slug: 'aql-inspection-standards',
  },
  {
    title: 'The Complete Guide to Shipping from China: Sea, Air & Express',
    excerpt: 'Compare shipping methods, understand Incoterms, and learn how to choose the right logistics for your import business.',
    date: 'May 10, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
    slug: 'shipping-from-china-guide',
  },
  {
    title: 'Top 10 Mistakes Buyers Make When Sourcing from China',
    excerpt: 'Avoid common pitfalls that cost buyers time and money, from poor specifications to inadequate quality checks.',
    date: 'April 22, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
    slug: 'sourcing-mistakes-to-avoid',
  },
  {
    title: 'Factory Audit Checklist: What to Look for During a Visit',
    excerpt: 'Our comprehensive factory audit checklist covering production capacity, quality systems, working conditions, and compliance.',
    date: 'April 5, 2026',
    author: 'SSourcing China Team',
    category: 'Factory Audits',
    slug: 'factory-audit-checklist',
  },
  {
    title: 'How to Negotiate Better Pricing with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies that build long-term supplier relationships while securing competitive pricing.',
    date: 'March 18, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
    slug: 'negotiate-pricing-chinese-suppliers',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-900 to-brand-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">Sourcing Insights & Guides</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Practical advice, industry insights, and step-by-step guides to help you source smarter from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-neutral-100 flex items-center justify-center">
                  <div className="text-center">
                    <Tag className="w-8 h-8 text-neutral-300 mx-auto mb-2" />
                    <span className="text-xs text-neutral-400">Article illustration</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-semibold text-neutral-900 mb-2 line-clamp-2 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-brand-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-100 pt-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-500 text-sm">More articles coming soon. Subscribe to our newsletter for updates.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Stay Updated</h2>
          <p className="text-neutral-600 mb-6">
            Get the latest sourcing guides and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              required
            />
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}