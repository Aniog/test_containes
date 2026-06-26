import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const Blog = () => {
  const posts = [
    {
      title: 'Understanding Factory Audit Reports: What to Look For',
      excerpt: 'A practical guide to interpreting factory audit findings and identifying red flags in supplier evaluations.',
      date: 'June 15, 2026',
      category: 'Supplier Verification',
      readTime: '8 min'
    },
    {
      title: 'Quality Inspection Standards: AQL Explained',
      excerpt: 'How Acceptable Quality Limit (AQL) sampling works and how to set appropriate inspection criteria for your products.',
      date: 'June 8, 2026',
      category: 'Quality Control',
      readTime: '6 min'
    },
    {
      title: 'Navigating Shipping Documentation for China Exports',
      excerpt: 'Essential documents required for international shipments from China and common documentation errors to avoid.',
      date: 'May 28, 2026',
      category: 'Logistics',
      readTime: '10 min'
    },
    {
      title: 'Building Long-Term Supplier Relationships',
      excerpt: 'Strategies for developing reliable supplier partnerships that support consistent quality and competitive pricing.',
      date: 'May 20, 2026',
      category: 'Supplier Management',
      readTime: '7 min'
    },
    {
      title: 'Common Quality Issues in Consumer Electronics Manufacturing',
      excerpt: 'Frequently encountered quality problems in electronics production and how systematic inspection can identify them early.',
      date: 'May 12, 2026',
      category: 'Quality Control',
      readTime: '9 min'
    },
    {
      title: 'MOQ Negotiation: Finding the Right Balance',
      excerpt: 'How to approach minimum order quantity discussions with suppliers while protecting your business interests.',
      date: 'May 5, 2026',
      category: 'Procurement',
      readTime: '5 min'
    }
  ]

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-16">
        <div className="container">
          <h1 className="text-5xl mb-4 text-white">Blog</h1>
          <p className="text-xl text-[#94A3B8] max-w-2xl">
            Practical insights on China sourcing, supplier management, and quality assurance.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="card">
                <div className="flex items-center gap-3 text-sm text-[#64748B] mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-[#F8FAFC] text-[#1E40AF] text-xs rounded mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl mb-3">{post.title}</h3>
                <p className="text-[#64748B]">{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-[#E2E8F0]">
        <div className="container text-center">
          <h2 className="text-3xl mb-4">Have a Question?</h2>
          <p className="text-[#64748B] mb-6 max-w-xl mx-auto">
            Contact us directly or explore our services to learn more about our approach.
          </p>
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog