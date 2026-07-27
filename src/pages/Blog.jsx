import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before You Order',
    excerpt: 'A practical checklist for checking supplier legitimacy, factory capacity, and business credentials.',
    date: '2026-07-15',
    readTime: '6 min read',
    category: 'Sourcing Tips',
  },
  {
    title: 'Pre-Shipment Inspection: What Buyers Should Know',
    excerpt: 'Why pre-shipment inspections matter and what inspectors actually check before your goods leave the factory.',
    date: '2026-07-02',
    readTime: '5 min read',
    category: 'Quality Control',
  },
  {
    title: 'Shipping from China: Sea vs Air vs Rail',
    excerpt: 'A comparison of common shipping methods, costs, and transit times for overseas buyers.',
    date: '2026-06-20',
    readTime: '7 min read',
    category: 'Logistics',
  },
  {
    title: 'Common Quality Issues in Consumer Electronics and How to Avoid Them',
    excerpt: 'Practical advice for buyers sourcing electronics, from sample approval to final inspection.',
    date: '2026-06-08',
    readTime: '6 min read',
    category: 'Quality Control',
  },
  {
    title: 'Negotiating with Chinese Manufacturers: A Practical Guide',
    excerpt: 'Tips for pricing negotiation, payment terms, and building long-term supplier relationships.',
    date: '2026-05-25',
    readTime: '8 min read',
    category: 'Sourcing Tips',
  },
  {
    title: 'What Is a Factory Audit and Why Do You Need One?',
    excerpt: 'An overview of factory audits, what they cover, and how they reduce sourcing risk.',
    date: '2026-05-10',
    readTime: '5 min read',
    category: 'Supplier Verification',
  },
]

const Blog = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Blog</h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Practical insights on sourcing, quality control, and shipping from China.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-medium text-slate-700">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-slate-900 leading-snug">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-600 flex-1">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                  <Button variant="ghost" size="sm" className="px-0">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
