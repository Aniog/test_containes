import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    slug: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Supplier verification is the most critical step in sourcing from China. Learn the key checks you should perform before committing to any supplier, from business license verification to on-site factory audits.',
    category: 'Supplier Verification',
    date: '2026-06-10',
    readTime: '8 min read',
    author: 'SSourcing Team',
  },
  {
    slug: 'aql-inspection-guide',
    title: 'AQL Quality Inspection: A Practical Guide for Importers',
    excerpt: 'Understanding AQL (Acceptable Quality Level) sampling is essential for effective quality control. This guide explains how AQL works and how to set inspection levels for your products.',
    category: 'Quality Control',
    date: '2026-05-28',
    readTime: '10 min read',
    author: 'SSourcing Team',
  },
  {
    slug: 'shipping-from-china-options',
    title: 'Sea vs Air vs Rail: Choosing the Right Shipping Method from China',
    excerpt: 'Each shipping method has different cost, speed, and reliability trade-offs. We break down when to use sea freight, air freight, or rail for your China imports.',
    category: 'Shipping & Logistics',
    date: '2026-05-15',
    readTime: '7 min read',
    author: 'SSourcing Team',
  },
  {
    slug: 'common-sourcing-mistakes',
    title: '7 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to neglecting quality inspections, these common mistakes can cost you time and money. Learn how experienced buyers avoid these pitfalls.',
    category: 'Sourcing Tips',
    date: '2026-05-02',
    readTime: '6 min read',
    author: 'SSourcing Team',
  },
  {
    slug: 'negotiating-with-chinese-factories',
    title: 'Effective Price Negotiation Strategies with Chinese Factories',
    excerpt: 'Negotiation is more than just asking for a lower price. Learn how to approach pricing discussions, understand cost breakdowns, and build long-term supplier relationships.',
    category: 'Sourcing Tips',
    date: '2026-04-18',
    readTime: '9 min read',
    author: 'SSourcing Team',
  },
  {
    slug: 'product-certification-china',
    title: 'Understanding Product Certifications for China Imports',
    excerpt: 'CE, FCC, RoHS, REACH — navigating product certifications can be confusing. This article explains which certifications matter for your market and how to ensure compliance.',
    category: 'Compliance',
    date: '2026-04-05',
    readTime: '8 min read',
    author: 'SSourcing Team',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical insights on sourcing from China — supplier verification, quality control, shipping, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-block bg-navy-50 text-ocean text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-semibold text-navy mb-3 leading-snug">{post.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Need Expert Sourcing Help?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our blog covers the basics, but nothing beats personalized guidance. Get in touch for tailored sourcing support.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-ocean text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
