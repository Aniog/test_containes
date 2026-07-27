import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

const blogPosts = [
  {
    title: '5 Red Flags When Evaluating a Chinese Supplier',
    excerpt: 'Not all suppliers are what they claim online. Learn the warning signs that indicate a factory may not be reliable — from vague responses to missing certifications.',
    date: '2026-07-15',
    category: 'Supplier Verification',
    slug: '#',
  },
  {
    title: 'AQL Inspection Levels Explained: Which One Should You Use?',
    excerpt: 'Understanding AQL levels is key to setting the right quality expectations. This guide explains Level I, II, and III inspections and when to use each.',
    date: '2026-07-01',
    category: 'Quality Control',
    slug: '#',
  },
  {
    title: 'How to Calculate True Sourcing Costs from China',
    excerpt: 'Product price is only part of the cost. This article breaks down shipping, customs, inspection, and other costs that affect your total landed cost.',
    date: '2026-06-20',
    category: 'Cost Management',
    slug: '#',
  },
  {
    title: 'Sea Freight vs. Air Freight: When to Choose Each',
    excerpt: 'Choosing between sea and air freight affects your cost and timeline. We compare both options with real examples to help you decide.',
    date: '2026-06-10',
    category: 'Shipping',
    slug: '#',
  },
  {
    title: 'What to Include in a Product Specification Sheet',
    excerpt: 'A clear spec sheet reduces misunderstandings with suppliers. Here is a practical template and checklist for creating effective product specifications.',
    date: '2026-05-28',
    category: 'Best Practices',
    slug: '#',
  },
  {
    title: 'Common Production Delays in China and How to Prevent Them',
    excerpt: 'Production delays happen for many reasons — material shortages, holiday closures, overbooking. Learn how to anticipate and mitigate these risks.',
    date: '2026-05-15',
    category: 'Production',
    slug: '#',
  },
]

export default function Blog() {
  return (
    <div>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Practical insights on China sourcing, supplier verification, quality control, and shipping. Written for international buyers.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.title} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden group hover:border-primary-200 hover:shadow-md transition-all">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={post.slug}
                    className="inline-flex items-center gap-1 text-primary-500 text-sm font-medium hover:text-primary-600 no-underline transition-colors"
                  >
                    Read more
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Have a Sourcing Question?
          </h2>
          <p className="text-slate-600 mb-6">
            Our team is happy to answer your questions about sourcing from China. Reach out for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors no-underline"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
