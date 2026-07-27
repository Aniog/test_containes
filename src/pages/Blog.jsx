import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      excerpt: 'Key factors to assess when reviewing potential suppliers, from production capacity to quality systems and financial stability.',
      date: 'July 15, 2026',
      category: 'Supplier Verification',
      readTime: '8 min'
    },
    {
      title: 'Understanding MOQ: What It Means for Your Sourcing Strategy',
      excerpt: 'Minimum order quantities affect pricing, inventory planning, and supplier selection. Learn how to negotiate and work within MOQ constraints.',
      date: 'July 8, 2026',
      category: 'Sourcing Strategy',
      readTime: '6 min'
    },
    {
      title: 'Quality Inspection Types: When to Use Each Method',
      excerpt: 'Pre-production, in-process, and pre-shipment inspections each serve different purposes. Understand when and how to apply each type.',
      date: 'June 28, 2026',
      category: 'Quality Control',
      readTime: '10 min'
    },
    {
      title: 'Navigating Shipping from China: Freight Options Explained',
      excerpt: 'Compare sea freight, air freight, and express shipping for different order sizes, timelines, and product types.',
      date: 'June 20, 2026',
      category: 'Logistics',
      readTime: '7 min'
    },
    {
      title: 'Common Quality Issues in Manufacturing and How to Prevent Them',
      excerpt: 'Learn about frequent quality problems we encounter and the inspection points that help catch issues before shipment.',
      date: 'June 12, 2026',
      category: 'Quality Control',
      readTime: '9 min'
    },
    {
      title: 'Building Long-Term Supplier Relationships That Work',
      excerpt: 'Tips for maintaining productive supplier partnerships beyond the first order, including communication and performance management.',
      date: 'June 5, 2026',
      category: 'Supplier Management',
      readTime: '7 min'
    }
  ]

  return (
    <div>
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-semibold mb-6">Sourcing Insights</h1>
          <p className="text-xl text-slate-300">Practical guidance on China sourcing, supplier management, and quality control.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="border border-gray-200 rounded-2xl p-8 hover:border-slate-300 transition-colors group">
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="px-3 py-1 bg-slate-100 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {post.date}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-slate-600 transition-colors">{post.title}</h2>
              <p className="text-slate-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{post.readTime} read</span>
                <span className="text-slate-900 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Have a Question?</h2>
          <p className="text-lg text-slate-600 mb-8">Our team is available to discuss your specific sourcing requirements.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog