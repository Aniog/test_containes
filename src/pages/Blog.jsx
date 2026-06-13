import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const Blog = () => {
  const posts = [
    {
      title: 'Understanding Factory Audit Reports: What Buyers Should Look For',
      excerpt: 'A practical guide to interpreting factory audit findings and identifying potential risks in supplier evaluations.',
      date: 'June 10, 2026',
      category: 'Supplier Verification',
      readTime: '8 min'
    },
    {
      title: 'Quality Inspection Checklists for Consumer Electronics',
      excerpt: 'Key inspection points and common defects to watch for when sourcing electronic products from China.',
      date: 'June 5, 2026',
      category: 'Quality Control',
      readTime: '12 min'
    },
    {
      title: 'Navigating Export Documentation Requirements',
      excerpt: 'An overview of essential shipping documents and compliance requirements for international trade from China.',
      date: 'May 28, 2026',
      category: 'Logistics',
      readTime: '6 min'
    },
    {
      title: 'How to Evaluate Supplier Pricing: Beyond the Unit Cost',
      excerpt: 'Factors to consider when comparing supplier quotes and understanding total landed costs.',
      date: 'May 20, 2026',
      category: 'Procurement',
      readTime: '10 min'
    },
    {
      title: 'Building Long-Term Supplier Relationships',
      excerpt: 'Strategies for developing productive ongoing partnerships with Chinese manufacturers.',
      date: 'May 12, 2026',
      category: 'Supplier Management',
      readTime: '7 min'
    },
    {
      title: 'Common Challenges in Cross-Border Communication',
      excerpt: 'Practical approaches to overcoming language and cultural barriers when working with Chinese suppliers.',
      date: 'May 3, 2026',
      category: 'Communication',
      readTime: '9 min'
    },
  ]

  return (
    <div>
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Blog</h1>
          <p className="text-xl text-[#94A3B8]">Insights and practical guidance on China sourcing.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="border border-[#E2E8F0] rounded-lg p-6">
                <div className="flex items-center gap-3 text-sm text-[#64748B] mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="inline-block text-xs px-3 py-1 bg-[#F8FAFC] text-[#0D9488] rounded mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-[#64748B] mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 h-auto">Read more →</Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Have Questions About Sourcing?</h2>
          <p className="text-[#64748B] mb-6">Our team is available to discuss your specific requirements.</p>
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Blog