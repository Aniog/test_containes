import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const posts = [
    {
      date: 'July 15, 2026',
      title: 'How to Evaluate a Chinese Supplier Before Placing Your First Order',
      excerpt: 'A practical checklist for assessing manufacturer capabilities, legitimacy, and alignment with your quality requirements.',
      category: 'Supplier Verification'
    },
    {
      date: 'July 8, 2026',
      title: 'Understanding AQL Standards for Quality Inspections',
      excerpt: 'An overview of Acceptable Quality Limit methodology and how it applies to different product categories.',
      category: 'Quality Control'
    },
    {
      date: 'June 28, 2026',
      title: 'Common Documentation Required for China Exports',
      excerpt: 'A guide to commercial invoices, packing lists, certificates of origin, and other export paperwork.',
      category: 'Logistics'
    },
    {
      date: 'June 20, 2026',
      title: 'Why Sample Evaluation Matters More Than You Think',
      excerpt: 'How investing time in sample review prevents costly issues during bulk production and delivery.',
      category: 'Best Practices'
    },
    {
      date: 'June 12, 2026',
      title: 'Navigating MOQ Requirements in China Manufacturing',
      excerpt: 'Strategies for working with suppliers when your order volume falls below standard minimums.',
      category: 'Procurement'
    },
    {
      date: 'June 5, 2026',
      title: 'What to Expect During a Factory Audit',
      excerpt: 'A walkthrough of the typical audit process and what buyers should prepare before an on-site visit.',
      category: 'Supplier Verification'
    }
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-sm font-medium text-slate-400 tracking-wider mb-3">INSIGHTS</div>
          <h1 className="text-5xl font-semibold mb-6">Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Practical guidance on China sourcing, supplier management, and import operations.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group">
              <div className="text-sm text-slate-500 mb-3">{post.date} · {post.category}</div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-slate-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 text-sm font-medium text-slate-900">Read more →</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Have a question?</h2>
          <p className="text-lg text-slate-600 mb-8">Our team is available to discuss your specific sourcing situation.</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog