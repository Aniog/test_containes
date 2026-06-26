import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Verifying your supplier is the most important step in sourcing from China. Here is a practical checklist covering business licenses, factory visits, certifications, and red flags to watch for.',
    date: '2026-06-15',
    category: 'Supplier Verification',
    readTime: '8 min read',
  },
  {
    id: 'quality-inspection-guide',
    title: 'The Complete Guide to Quality Inspections When Sourcing from China',
    excerpt: 'Understanding the different types of quality inspections — PPI, DPI, and PSI — and when to use each one. Learn how AQL sampling works and what a good inspection report should include.',
    date: '2026-06-01',
    category: 'Quality Control',
    readTime: '10 min read',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Shipping from China in 2026: Costs, Routes, and Tips',
    excerpt: 'An overview of current shipping costs, popular routes, and practical tips for reducing freight expenses when importing from China. Covers sea freight, air freight, and rail options.',
    date: '2026-05-20',
    category: 'Shipping & Logistics',
    readTime: '7 min read',
  },
  {
    id: 'common-sourcing-mistakes',
    title: '7 Common Mistakes First-Time Buyers Make When Sourcing from China',
    excerpt: 'From skipping factory visits to ignoring cultural differences, these mistakes cost first-time buyers time and money. Learn how to avoid them and source smarter from the start.',
    date: '2026-05-10',
    category: 'Sourcing Tips',
    readTime: '6 min read',
  },
  {
    id: 'negotiating-with-chinese-factories',
    title: 'How to Negotiate Effectively with Chinese Factories',
    excerpt: 'Practical negotiation strategies that respect Chinese business culture while getting you better terms. Understand the role of relationships, face, and long-term partnerships.',
    date: '2026-04-28',
    category: 'Sourcing Tips',
    readTime: '9 min read',
  },
  {
    id: 'product-certification-guide',
    title: 'Product Certifications You Need When Importing from China',
    excerpt: 'A guide to essential product certifications for different markets — CE, FCC, FDA, UL, and more. Know which certifications your products need before you ship.',
    date: '2026-04-15',
    category: 'Compliance',
    readTime: '8 min read',
  },
]

export default function Blog() {
  return (
    <div>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Practical insights on sourcing from China — supplier verification, quality control, shipping, and more.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="text-slate-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-primary-light transition-colors cursor-pointer">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Need Expert Sourcing Help?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Our blog covers the basics, but nothing beats personalized support. Get in touch for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
