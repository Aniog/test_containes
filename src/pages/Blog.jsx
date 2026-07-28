import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const Blog = () => {
  const posts = [
    {
      title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
      excerpt: 'A practical checklist for assessing supplier legitimacy, production capabilities, and financial stability.',
      date: 'July 15, 2026',
      category: 'Supplier Verification'
    },
    {
      title: 'Understanding MOQ: What It Means and How to Negotiate Lower Quantities',
      excerpt: 'Learn why manufacturers set minimum order quantities and strategies for working within or around these constraints.',
      date: 'July 8, 2026',
      category: 'Sourcing Basics'
    },
    {
      title: 'Quality Control Checkpoints Every Importer Should Know',
      excerpt: 'Key inspection stages during production that help catch issues before they become expensive problems.',
      date: 'June 28, 2026',
      category: 'Quality Control'
    },
    {
      title: 'Navigating Shipping from China: Freight Options Explained',
      excerpt: 'A comparison of sea freight, air freight, and express shipping for different order sizes and timelines.',
      date: 'June 20, 2026',
      category: 'Logistics'
    },
    {
      title: 'Common Documentation Required for Importing from China',
      excerpt: 'Essential paperwork including commercial invoices, packing lists, certificates of origin, and compliance documents.',
      date: 'June 12, 2026',
      category: 'Import Compliance'
    },
    {
      title: 'Building Long-Term Supplier Relationships That Benefit Both Parties',
      excerpt: 'Practical approaches to developing reliable supplier partnerships that improve over time.',
      date: 'June 5, 2026',
      category: 'Supplier Relations'
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Sourcing Insights</h1>
        <p className="text-[#475569] max-w-2xl mx-auto">Practical guidance for importing from China</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
            <span className="text-xs text-[#0D9488] font-medium">{post.category}</span>
            <h3 className="font-semibold text-[#0F2942] mt-2 mb-3 text-lg">{post.title}</h3>
            <p className="text-[#475569] text-sm mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#94A3B8]">{post.date}</span>
              <span className="text-[#0D9488] cursor-pointer hover:underline">Read more →</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/contact"><Button variant="outline">Subscribe to Updates</Button></Link>
      </div>
    </div>
  )
}

export default Blog