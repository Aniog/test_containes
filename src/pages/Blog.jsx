import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      date: 'July 15, 2026',
      excerpt: 'Key factors to assess when reviewing potential manufacturers, from production capability to financial stability.',
      category: 'Supplier Evaluation',
    },
    {
      title: 'Understanding AQL: Quality Inspection Standards Explained',
      date: 'July 8, 2026',
      excerpt: 'A clear explanation of Acceptable Quality Limit sampling and how inspection levels affect your sourcing decisions.',
      category: 'Quality Control',
    },
    {
      title: 'Common Documentation Required for China Exports',
      date: 'June 28, 2026',
      excerpt: 'Overview of commercial invoices, packing lists, certificates of origin, and other export documents.',
      category: 'Logistics',
    },
    {
      title: 'Factory Audit vs. Inspection: When to Use Each',
      date: 'June 20, 2026',
      excerpt: 'Understanding the difference between comprehensive audits and product inspections, and when each is appropriate.',
      category: 'Quality Control',
    },
    {
      title: 'Navigating MOQ Requirements in China Sourcing',
      date: 'June 12, 2026',
      excerpt: 'Strategies for working with minimum order quantities and finding suppliers flexible to smaller initial orders.',
      category: 'Supplier Relations',
    },
    {
      title: 'Payment Terms: Balancing Risk and Supplier Relations',
      date: 'June 5, 2026',
      excerpt: 'Common payment structures used in China sourcing and how to structure terms that protect both parties.',
      category: 'Business Practices',
    },
  ]

  return (
    <div>
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-[#475569]">
            Practical insights on China sourcing, supplier management, and quality assurance.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <span className="text-sm text-[#1E40AF] font-medium">{post.category}</span>
                  <span className="text-sm text-[#64748B]">{post.date}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                <p className="text-[#475569] mb-4">{post.excerpt}</p>
                <span className="text-sm text-[#1E40AF]">Read more →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC] text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4">Have a Question?</h2>
          <p className="text-lg text-[#475569] mb-8 max-w-xl mx-auto">
            Contact us directly. We're happy to share our experience on specific sourcing topics.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  )
}

export default Blog