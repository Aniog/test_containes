import React from 'react'
import CTAButton from '../components/CTAButton'

const Blog = () => {
  const posts = [
    {
      title: 'How to Evaluate a Chinese Supplier: A Practical Checklist',
      excerpt: 'Key factors to assess when reviewing potential manufacturing partners, from documentation to production capabilities.',
      date: 'June 10, 2026',
      category: 'Supplier Management',
      readTime: '8 min',
    },
    {
      title: 'Understanding Quality Inspection Standards for Import Products',
      excerpt: 'An overview of common inspection criteria and how to establish quality benchmarks for your sourced products.',
      date: 'June 3, 2026',
      category: 'Quality Control',
      readTime: '6 min',
    },
    {
      title: 'Navigating Export Documentation Requirements from China',
      excerpt: 'Essential documents needed for smooth customs clearance and how to prepare them correctly.',
      date: 'May 28, 2026',
      category: 'Logistics',
      readTime: '7 min',
    },
    {
      title: 'The Role of Factory Audits in Risk Mitigation',
      excerpt: 'Why on-site verification matters and what a comprehensive factory audit should cover.',
      date: 'May 20, 2026',
      category: 'Supplier Management',
      readTime: '5 min',
    },
    {
      title: 'Managing Production Timelines Across Time Zones',
      excerpt: 'Practical strategies for maintaining communication and oversight when working with overseas manufacturers.',
      date: 'May 12, 2026',
      category: 'Production Management',
      readTime: '6 min',
    },
    {
      title: 'Common Quality Issues in Consumer Electronics Sourcing',
      excerpt: 'Frequent problems encountered during electronics manufacturing and how to prevent them.',
      date: 'May 5, 2026',
      category: 'Quality Control',
      readTime: '9 min',
    },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Sourcing Insights</h1>
          <p className="text-xl text-gray-300">Practical guidance for sourcing from China.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article key={idx} className="border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="text-sm text-[#1E40AF]">Read more →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Specific Guidance?</h2>
          <p className="text-gray-600 mb-8">Our team can provide tailored advice for your sourcing situation.</p>
          <CTAButton to="/contact">Contact Our Team</CTAButton>
        </div>
      </section>
    </div>
  )
}

export default Blog