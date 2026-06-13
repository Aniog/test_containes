import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Clock, User } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify Chinese suppliers, including license checks, factory visits, and trade record verification.',
    date: 'June 10, 2026',
    readTime: '8 min read',
    author: 'SSourcing Team',
    tags: ['Supplier Verification', 'Due Diligence'],
  },
  {
    title: 'Complete Guide to Quality Inspection in China',
    excerpt: 'Understanding AQL standards, types of inspections, and how to set up an effective quality control process for your China imports.',
    date: 'June 3, 2026',
    readTime: '12 min read',
    author: 'SSourcing Team',
    tags: ['Quality Control', 'Inspection'],
  },
  {
    title: 'China Sourcing Trends 2026: What Importers Need to Know',
    excerpt: 'An overview of the key trends shaping China sourcing in 2026, from manufacturing shifts to logistics developments.',
    date: 'May 25, 2026',
    readTime: '10 min read',
    author: 'SSourcing Team',
    tags: ['Industry Trends', 'Market Insights'],
  },
  {
    title: 'The True Cost of Sourcing from China: A Breakdown',
    excerpt: 'Beyond the unit price: understand all the costs involved in importing from China including logistics, duties, and hidden fees.',
    date: 'May 18, 2026',
    readTime: '9 min read',
    author: 'SSourcing Team',
    tags: ['Cost Analysis', 'Importing'],
  },
  {
    title: 'Factory Audit Checklist: What to Look for in a Chinese Factory',
    excerpt: 'A comprehensive checklist for evaluating Chinese factories including production capacity, quality systems, and social compliance.',
    date: 'May 10, 2026',
    readTime: '11 min read',
    author: 'SSourcing Team',
    tags: ['Factory Audit', 'Checklist'],
  },
  {
    title: 'How to Avoid Common China Sourcing Scams',
    excerpt: 'Real stories and practical advice on identifying and avoiding fraudulent suppliers and sourcing scams.',
    date: 'April 28, 2026',
    readTime: '7 min read',
    author: 'SSourcing Team',
    tags: ['Risk Management', 'Scams'],
  },
  {
    title: 'Ocean Freight vs Air Freight from China: Which Is Right for You?',
    excerpt: 'A detailed comparison of shipping methods from China including cost, transit time, and suitability for different products.',
    date: 'April 20, 2026',
    readTime: '8 min read',
    author: 'SSourcing Team',
    tags: ['Shipping', 'Logistics'],
  },
  {
    title: 'OEM vs ODM Manufacturing in China: Key Differences',
    excerpt: 'Understand the differences between OEM and ODM manufacturing and which approach suits your product development needs.',
    date: 'April 12, 2026',
    readTime: '6 min read',
    author: 'SSourcing Team',
    tags: ['Manufacturing', 'OEM/ODM'],
  },
  {
    title: 'Negotiating with Chinese Suppliers: A Practical Guide',
    excerpt: 'Effective negotiation strategies for working with Chinese manufacturers including cultural considerations and best practices.',
    date: 'April 5, 2026',
    readTime: '10 min read',
    author: 'SSourcing Team',
    tags: ['Negotiation', 'Supplier Management'],
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-brand-400 font-semibold text-sm mb-4 uppercase tracking-wide">Blog</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Practical advice, guides, and industry insights for importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs font-medium text-brand-600 bg-brand-50 px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-gray-100">
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}