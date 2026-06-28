import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { useState, useEffect } from 'react'

const posts = {
  'china-sourcing-guide-2026': {
    title: 'The Complete Guide to Sourcing from China in 2026',
    content: `
      Sourcing from China remains one of the most effective ways to bring products to market at competitive prices. However, the landscape has evolved significantly. Here's what you need to know in 2026.

      ## Finding Reliable Suppliers

      The first step in any successful sourcing project is finding a trustworthy supplier. While platforms like Alibaba and Made-in-China offer access to thousands of suppliers, not all are created equal. Always verify suppliers through:
      
      - Business license verification
      - Factory site visits or third-party audits
      - Trade reference checks
      - Sample quality assessment
      
      ## Quality Control

      Never skip quality control. Implement a three-stage inspection process:
      1. Raw materials inspection before production
      2. During-production inspection (DPI) at 20-30% completion
      3. Pre-shipment inspection (PSI) at 80-100% completion
      
      ## Shipping and Logistics

      Plan your shipping strategy early. Consider factors like:
      - Product value and urgency (air vs. sea)
      - Volume and weight (FCL vs. LCL)
      - Customs requirements in your country
      - Incoterms and risk allocation
      
      Working with an experienced China sourcing agent can help you navigate these complexities while reducing risk and saving time.
    `,
    date: 'June 15, 2026',
    readTime: '8 min read',
    category: 'Sourcing Guide',
  },
  'factory-audit-checklist': {
    title: 'Factory Audit Checklist: What to Look for in a Chinese Supplier',
    content: `
      A thorough factory audit is essential before committing to a supplier. Here's our comprehensive checklist.

      ## Documentation Review
      - Business license and tax registration
      - Export license (if required)
      - Quality management certifications (ISO 9001, etc.)
      - Product safety certifications (CE, FCC, UL, etc.)
      
      ## Production Capability
      - Production line capacity and utilization
      - Equipment age and maintenance records
      - Skilled labor availability
      - Quality control personnel and processes
      
      ## Social Compliance
      - Worker wages and working hours
      - Health and safety conditions
      - Dormitory and cafeteria facilities
      - Child labor and forced labor policies
      
      ## Quality Systems
      - Incoming material inspection procedures
      - In-process quality checks
      - Final inspection and testing
      - Non-conformance handling
      
      A professional audit report should include photos, measurements, and clear pass/fail assessments for each criterion.
    `,
    date: 'May 28, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
  },
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) {
    return (
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-text-primary mb-4">Post Not Found</h1>
          <p className="text-secondary-text mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-primary-light font-semibold hover:text-primary">
            ← Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 text-sm text-secondary-text hover:text-primary-light mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-primary-light uppercase tracking-wider bg-primary-light/5 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-secondary-text mb-10">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <div className="prose prose-slate max-w-none">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-bold text-text-primary mt-8 mb-4">{line.replace('## ', '')}</h2>
            }
            if (line.startsWith('- ')) {
              return <li key={i} className="text-secondary-text ml-4 mb-1">{line.replace('- ', '')}</li>
            }
            if (line.trim() === '') return null
            return <p key={i} className="text-secondary-text leading-relaxed mb-4">{line}</p>
          })}
        </div>
      </div>
    </section>
  )
}