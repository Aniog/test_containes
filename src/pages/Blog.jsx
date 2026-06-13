import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { CTASection, SectionHeader } from '../components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Before committing to a supplier, it is essential to verify their legitimacy and capabilities. Here is a practical checklist for evaluating Chinese factories.',
    category: 'Sourcing Tips',
    date: '2026-05-28',
    author: 'SSourcing Team',
    imgId: 'blog-verify-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    title: 'Understanding AQL Standards for Quality Inspection',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used for quality inspections worldwide. Learn how AQL levels work and what they mean for your orders.',
    category: 'Quality Control',
    date: '2026-05-15',
    author: 'SSourcing Team',
    imgId: 'blog-aql-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    title: '5 Common Mistakes When Sourcing from China',
    excerpt: 'From skipping factory audits to neglecting pre-shipment inspections, these common mistakes can cost you time and money. Here is how to avoid them.',
    category: 'Sourcing Tips',
    date: '2026-04-30',
    author: 'SSourcing Team',
    imgId: 'blog-mistakes-g7h8i9',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    title: 'Sea Freight vs. Air Freight: Choosing the Right Shipping Method',
    excerpt: 'The choice between sea and air freight affects your cost, speed, and carbon footprint. Here is a practical comparison to help you decide.',
    category: 'Shipping',
    date: '2026-04-18',
    author: 'SSourcing Team',
    imgId: 'blog-shipping-j1k2l3',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    title: 'What to Include in a Product Specification Sheet',
    excerpt: 'A clear specification sheet is the foundation of a successful sourcing project. Learn what details to include to get accurate quotes and avoid misunderstandings.',
    category: 'Sourcing Tips',
    date: '2026-04-05',
    author: 'SSourcing Team',
    imgId: 'blog-specs-m4n5o6',
    titleId: 'blog-specs-title',
    descId: 'blog-specs-desc',
  },
  {
    title: 'Factory Audit Checklist: What We Look For',
    excerpt: 'Our factory audit process covers more than just a walk-through. Here is what our team evaluates during an on-site factory verification visit.',
    category: 'Quality Control',
    date: '2026-03-22',
    author: 'SSourcing Team',
    imgId: 'blog-audit-p7q8r9',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Practical insights on sourcing from China — supplier verification, quality control, shipping, and more.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article key={i} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-gray-100"
                />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block bg-blue-50 text-sky-brand text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p id={post.descId} className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
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

      <CTASection
        title="Need Help Sourcing from China?"
        subtitle="Our team is ready to help you find reliable suppliers and manage your orders."
      />
    </div>
  )
}
