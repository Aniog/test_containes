import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

const articles = [
  {
    title: 'How to verify a Chinese supplier before placing a large order',
    excerpt: 'A practical checklist for checking business registration, factory capacity, and quality systems to reduce sourcing risk.',
    date: '2026-06-15',
    readTime: '6 min read',
    category: 'Supplier Verification',
  },
  {
    title: 'Pre-shipment inspection: what buyers need to know',
    excerpt: 'Why pre-shipment inspections matter, what they cover, and how to interpret inspection reports.',
    date: '2026-05-28',
    readTime: '5 min read',
    category: 'Quality Control',
  },
  {
    title: 'Shipping from China: Incoterms explained for small buyers',
    excerpt: 'A plain-language guide to EXW, FOB, CIF, and DDP, and which term makes sense for your order size.',
    date: '2026-05-10',
    readTime: '7 min read',
    category: 'Logistics',
  },
  {
    title: 'How to write a sourcing brief that gets better quotes',
    excerpt: 'Tips for communicating product specs, target price, and quality expectations to get accurate quotations faster.',
    date: '2026-04-22',
    readTime: '4 min read',
    category: 'Sourcing Tips',
  },
  {
    title: 'Common quality issues in home goods and how to prevent them',
    excerpt: 'Real examples of defects in kitchenware, furniture, and decor, with prevention strategies.',
    date: '2026-04-05',
    readTime: '6 min read',
    category: 'Quality Control',
  },
  {
    title: 'When to use a sourcing agent vs. buying directly',
    excerpt: 'A balanced look at the trade-offs between working with an agent and contacting factories directly.',
    date: '2026-03-18',
    readTime: '5 min read',
    category: 'Sourcing Tips',
  },
]

export default function Blog() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">Practical insights on sourcing, quality control, and shipping from China.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 font-medium text-slate-700">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">
                  <Link to="#" className="hover:text-slate-700">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{article.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                  <Link to="#" className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-700">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
