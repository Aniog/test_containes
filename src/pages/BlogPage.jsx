import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to verifying suppliers in China, including what documents to check, what to look for during factory visits, and red flags to watch out for.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    author: 'SSourcing China Team',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Understanding Quality Inspection Types: When to Use Each One',
    excerpt: 'Pre-production, during-production, and pre-shipment inspections serve different purposes. Learn which inspection type is right for your order and when to schedule them.',
    category: 'Quality Control',
    date: '2026-07-08',
    author: 'SSourcing China Team',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'FOB vs CIF vs DDP: Choosing the Right Shipping Terms',
    excerpt: 'Shipping terms determine who is responsible for costs and risks at each stage of delivery. We explain the differences and help you choose the right option for your situation.',
    category: 'Shipping',
    date: '2026-06-28',
    author: 'SSourcing China Team',
    readTime: '7 min read',
  },
  {
    id: 4,
    title: 'Common Mistakes First-Time Buyers Make When Sourcing from China',
    excerpt: 'From skipping sample evaluation to choosing suppliers based on price alone, we share the most common mistakes we see and how to avoid them.',
    category: 'Sourcing Tips',
    date: '2026-06-20',
    author: 'SSourcing China Team',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'How to Write a Clear Product Specification for Chinese Manufacturers',
    excerpt: 'Clear specifications reduce misunderstandings and quality issues. Learn what to include in your product requirements to get accurate quotations and consistent quality.',
    category: 'Sourcing Tips',
    date: '2026-06-12',
    author: 'SSourcing China Team',
    readTime: '6 min read',
  },
  {
    id: 6,
    title: 'What to Expect During a Factory Audit in China',
    excerpt: 'We walk you through what happens during a typical factory audit, what we check, and what the audit report includes so you know exactly what you are getting.',
    category: 'Factory Audit',
    date: '2026-06-05',
    author: 'SSourcing China Team',
    readTime: '7 min read',
  },
]

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sourcing Insights</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical guides and insights to help you source from China more effectively. No fluff, just actionable information.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <button className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Have a Sourcing Question?</h2>
            <p className="text-lg text-slate-600 mb-8">
              If you cannot find the answer in our articles, contact us directly. We are happy to help.
            </p>
            <Link to="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
