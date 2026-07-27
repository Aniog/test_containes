import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import SectionHeading from '@/components/SectionHeading'

const blogPosts = [
  {
    slug: 'china-sourcing-2026-trends',
    title: 'China Sourcing Trends to Watch in 2026',
    excerpt: 'Key shifts in manufacturing, supply chain strategies, and buyer expectations that are reshaping how companies source from China.',
    date: 'July 15, 2026',
    category: 'Industry Insights',
    readTime: '8 min'
  },
  {
    slug: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Verify Before You Order',
    excerpt: 'A practical guide to the essential checks every buyer should perform when evaluating a new Chinese supplier.',
    date: 'July 8, 2026',
    category: 'Supplier Management',
    readTime: '6 min'
  },
  {
    slug: 'quality-inspection-standards',
    title: 'Understanding Quality Inspection Standards for Importers',
    excerpt: 'How AQL sampling works, what inspection levels mean, and how to set appropriate quality criteria for your products.',
    date: 'June 28, 2026',
    category: 'Quality Control',
    readTime: '7 min'
  },
  {
    slug: 'reducing-lead-times-china',
    title: 'How to Reduce Lead Times When Sourcing from China',
    excerpt: 'Practical strategies for shortening production cycles without compromising quality or increasing costs.',
    date: 'June 20, 2026',
    category: 'Operations',
    readTime: '5 min'
  },
  {
    slug: 'payment-terms-suppliers',
    title: 'Payment Terms That Protect Buyers and Suppliers',
    excerpt: 'How to structure payments to balance cash flow, risk, and supplier relationships in international sourcing.',
    date: 'June 12, 2026',
    category: 'Finance & Contracts',
    readTime: '6 min'
  },
  {
    slug: 'sourcing-small-quantities',
    title: 'Sourcing from China with Small Order Quantities',
    excerpt: 'Options and considerations for buyers who need lower volumes or are testing new products.',
    date: 'June 5, 2026',
    category: 'Buyer Guides',
    readTime: '5 min'
  }
]

const Blog = () => {
  return (
    <div>
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] uppercase text-slate-400 mb-3">RESOURCES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Sourcing Insights</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Practical guidance for buyers sourcing from China. Written by our team based on real project experience.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Link key={index} to={`/blog/${post.slug}`}>
              <Card className="h-full border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="text-xs text-slate-500">{post.date}</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Need sourcing guidance?</h2>
          <p className="text-slate-600 mb-6">Our team can provide personalized advice for your specific situation.</p>
          <Link to="/contact" className="inline-block">
            <button className="px-6 py-3 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800">Contact Us</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
