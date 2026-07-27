import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate Chinese Suppliers: A Practical Checklist',
      excerpt: 'Key factors to assess when reviewing potential manufacturers, from documentation to production capabilities.',
      date: 'July 15, 2026',
      category: 'Supplier Evaluation',
      readTime: '8 min'
    },
    {
      title: 'Understanding Quality Inspection Standards for Import Products',
      excerpt: 'An overview of common inspection criteria and how to establish acceptable quality limits for your products.',
      date: 'July 8, 2026',
      category: 'Quality Control',
      readTime: '6 min'
    },
    {
      title: 'Navigating Export Documentation Requirements from China',
      excerpt: 'Essential documents needed for international shipments and how to ensure compliance with destination country regulations.',
      date: 'June 28, 2026',
      category: 'Logistics',
      readTime: '7 min'
    },
    {
      title: 'Building Long-term Supplier Relationships in China',
      excerpt: 'Strategies for developing reliable supplier partnerships that support consistent quality and competitive pricing.',
      date: 'June 20, 2026',
      category: 'Supplier Management',
      readTime: '5 min'
    },
    {
      title: 'Common Sourcing Mistakes and How to Avoid Them',
      excerpt: 'Frequent pitfalls in China sourcing and practical approaches to prevent costly errors.',
      date: 'June 12, 2026',
      category: 'Best Practices',
      readTime: '9 min'
    },
    {
      title: 'The Role of Third-Party Audits in Supplier Verification',
      excerpt: 'How independent factory audits provide objective assessment of supplier capabilities and compliance.',
      date: 'June 5, 2026',
      category: 'Verification',
      readTime: '6 min'
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Blog</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Insights and practical guidance on China sourcing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <article key={i} className="border border-slate-200 rounded-lg p-8 hover:border-slate-300 transition-colors">
            <div className="flex gap-3 mb-4">
              <span className="text-xs px-3 py-1 bg-slate-100 text-slate-600 rounded">{post.category}</span>
              <span className="text-xs px-3 py-1 text-slate-500">{post.readTime}</span>
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">{post.title}</h2>
            <p className="text-slate-600 mb-4">{post.excerpt}</p>
            <div className="text-sm text-slate-500">{post.date}</div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-600 mb-6">Have a question about sourcing? Contact us for expert guidance.</p>
        <Link to="/contact"><Button>Ask a Question</Button></Link>
      </div>
    </div>
  )
}

export default Blog