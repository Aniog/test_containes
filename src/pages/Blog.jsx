import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Factory: A Practical Checklist',
      date: '2026-06-12',
      category: 'Supplier Verification',
      excerpt: 'Key questions to ask and documents to request when assessing potential manufacturing partners. Includes red flags to watch for during initial contact and site visits.',
      readTime: '12 min',
    },
    {
      title: 'Understanding AQL Inspection Standards for Import Quality Control',
      date: '2026-05-28',
      category: 'Quality Control',
      excerpt: 'A practical guide to Acceptable Quality Limit (AQL) sampling for importers. Explains how to set inspection levels, interpret reports, and decide when to accept or reject shipments.',
      readTime: '9 min',
    },
    {
      title: 'Common Documentation Required for China Exports',
      date: '2026-05-15',
      category: 'Logistics',
      excerpt: 'Overview of commercial invoices, packing lists, certificates of origin, and other documents typically required for international shipments from China. Includes tips for avoiding customs delays.',
      readTime: '8 min',
    },
    {
      title: 'Negotiating Payment Terms with Chinese Suppliers',
      date: '2026-04-30',
      category: 'Commercial',
      excerpt: 'Practical guidance on payment structures that balance risk for both buyer and supplier. Covers letter of credit, escrow, and milestone-based payment approaches.',
      readTime: '10 min',
    },
    {
      title: 'Why Sample Approval Matters Before Mass Production',
      date: '2026-04-18',
      category: 'Quality Control',
      excerpt: 'The importance of formal sample sign-off before production begins. Covers golden sample procedures, specification documentation, and how to handle sample revisions.',
      readTime: '7 min',
    },
    {
      title: 'Consolidating Shipments: When It Makes Sense',
      date: '2026-04-03',
      category: 'Logistics',
      excerpt: 'Analysis of cost and timeline trade-offs when combining orders from multiple suppliers. Includes guidance on consolidation points, container loading, and documentation requirements.',
      readTime: '11 min',
    },
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-6">Industry Insights</h1>
          <p className="text-xl text-slate-300">Practical guidance on sourcing from China. Written for procurement professionals and business owners managing import supply chains.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {post.date}
                </span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="text-teal-600 text-sm font-medium mb-2">{post.category}</div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4 leading-tight">{post.title}</h2>
              <p className="text-slate-600 mb-6">{post.excerpt}</p>
              <span className="inline-flex items-center text-teal-600 font-medium text-sm">
                Read article <ArrowRight className="ml-1.5" size={16} />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">Need sourcing guidance?</h3>
          <p className="text-slate-600 mb-8">Our team provides practical advice tailored to your specific sourcing situation. Contact us to discuss your requirements.</p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Get in Touch <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog