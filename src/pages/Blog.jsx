import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'

const posts = [
  {
    id: '1',
    title: '5 Red Flags When Evaluating a Chinese Supplier',
    excerpt: 'Not every supplier listing is what it claims to be. Learn the most common warning signs that indicate a factory may not be a reliable partner.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    author: 'SSourcing Team',
  },
  {
    id: '2',
    title: 'How to Reduce Defect Rates with Pre-Shipment Inspections',
    excerpt: 'Pre-shipment inspections are your last line of defense against quality issues. Here is how to set up an effective inspection program.',
    category: 'Quality Control',
    date: '2026-07-01',
    author: 'SSourcing Team',
  },
  {
    id: '3',
    title: 'Understanding AQL Standards for Product Inspections',
    excerpt: 'AQL (Acceptable Quality Level) is the international standard for quality sampling. This guide explains how it works and why it matters for your sourcing.',
    category: 'Quality Control',
    date: '2026-06-20',
    author: 'SSourcing Team',
  },
  {
    id: '4',
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    excerpt: 'Shipping costs and timelines vary significantly between sea and air freight. Learn when each option makes sense for your sourcing needs.',
    category: 'Shipping',
    date: '2026-06-10',
    author: 'SSourcing Team',
  },
  {
    id: '5',
    title: 'Factory Direct vs. Trading Company: What Buyers Need to Know',
    excerpt: 'Many online supplier listings are trading companies, not factories. Understanding the difference helps you negotiate better prices and avoid middleman markups.',
    category: 'Supplier Verification',
    date: '2026-05-28',
    author: 'SSourcing Team',
  },
  {
    id: '6',
    title: 'How to Negotiate MOQs with Chinese Suppliers',
    excerpt: 'Minimum order quantities can be a barrier for new buyers. These negotiation strategies can help you secure lower MOQs for initial orders.',
    category: 'Sourcing Tips',
    date: '2026-05-15',
    author: 'SSourcing Team',
  },
]

const BlogPage = () => {
  return (
    <div>
      <section className="bg-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-primary-100 max-w-2xl text-lg">
            Practical insights on sourcing from China — supplier verification, quality control, shipping, and negotiation tips from our team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.id} className="rounded-lg border border-neutral-200 bg-white hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary-500 bg-primary-50 px-2 py-1 rounded">{post.category}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-800 mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a Sourcing Question?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Our team is ready to help. Get in touch for a free consultation on your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg no-underline transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
