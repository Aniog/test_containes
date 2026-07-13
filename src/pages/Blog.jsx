import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier Before Placing Your First Order',
      excerpt: 'A practical checklist for verifying supplier legitimacy, production capability, and quality systems before committing to production.',
      date: 'June 12, 2026',
      category: 'Supplier Verification',
    },
    {
      title: 'Understanding AQL Standards for Quality Inspections',
      excerpt: 'An overview of Acceptable Quality Limit (AQL) sampling and how it applies to pre-shipment inspections in China.',
      date: 'May 28, 2026',
      category: 'Quality Control',
    },
    {
      title: 'Common Documentation Required for China Exports',
      excerpt: 'A guide to commercial invoices, packing lists, certificates of origin, and other documents needed for international shipments.',
      date: 'May 10, 2026',
      category: 'Logistics',
    },
    {
      title: 'Managing Production Delays: Communication Strategies That Work',
      excerpt: 'Practical approaches for staying informed about production status and addressing delays before they impact your timeline.',
      date: 'April 22, 2026',
      category: 'Production Management',
    },
    {
      title: 'What to Include in a Product Specification Sheet',
      excerpt: 'Key elements of an effective product specification that helps suppliers understand requirements and reduces miscommunication.',
      date: 'April 5, 2026',
      category: 'Sourcing Best Practices',
    },
    {
      title: 'Navigating Customs Clearance: Tips for First-Time Importers',
      excerpt: 'Essential considerations for preparing documentation and working with customs brokers when importing from China.',
      date: 'March 18, 2026',
      category: 'Logistics',
    },
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Sourcing Insights</h1>
          <p className="text-lg text-slate-300">Practical guidance on China sourcing, supplier management, and import operations.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="border border-slate-200 rounded-lg p-8 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>
              <h3 className="font-semibold text-lg mb-3 leading-snug">{post.title}</h3>
              <p className="text-sm text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-3">Looking for sourcing advice?</h3>
          <p className="text-slate-600 mb-6">Contact us to discuss your specific sourcing challenges.</p>
          <Button asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Blog