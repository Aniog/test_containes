import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import CTASection from '@/components/shared/CTASection'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, visiting factories, and confirming production capabilities before committing to a purchase order.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    readTime: '8 min read',
  },
  {
    id: 'aql-inspection-guide',
    title: 'Understanding AQL Inspection Standards for Import Quality Control',
    excerpt: 'Learn how Acceptable Quality Level (AQL) sampling works, how to set inspection levels, and what pass/fail criteria mean for your shipments.',
    category: 'Quality Control',
    date: '2026-06-08',
    readTime: '6 min read',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Complete Guide to Shipping from China in 2026: Costs, Times & Options',
    excerpt: 'Compare sea freight, air freight, and rail options. Understand Incoterms, customs duties, and how to choose the best shipping method for your products.',
    category: 'Logistics',
    date: '2026-05-28',
    readTime: '10 min read',
  },
  {
    id: 'avoid-sourcing-scams',
    title: '7 Red Flags When Sourcing from China (And How to Avoid Scams)',
    excerpt: 'Common warning signs that a supplier may not be legitimate, and practical steps to protect your business from fraud and quality issues.',
    category: 'Risk Management',
    date: '2026-05-20',
    readTime: '7 min read',
  },
  {
    id: 'negotiate-with-chinese-factories',
    title: 'How to Negotiate Effectively with Chinese Factories',
    excerpt: 'Practical negotiation strategies that work in the Chinese business context — from pricing discussions to payment terms and relationship building.',
    category: 'Negotiation',
    date: '2026-05-12',
    readTime: '9 min read',
  },
  {
    id: 'product-certification-guide',
    title: 'Product Certification Guide: CE, FCC, FDA & More for China Imports',
    excerpt: 'Which certifications does your product need? A practical overview of major market requirements and how to ensure your Chinese supplier can meet them.',
    category: 'Compliance',
    date: '2026-05-05',
    readTime: '11 min read',
  },
]

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Sourcing Insights & Guides
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Practical knowledge to help you source from China more effectively. Written by our sourcing team based on real project experience.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={`blog-${post.id}-m7n8o9`}
                  data-strk-img={`[blog-title-${post.id}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full"
                />
                <div className="p-6">
                  <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-1 rounded">{post.category}</span>
                  <h2 id={`blog-title-${post.id}`} className="text-lg font-semibold text-slate-900 mt-3 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Help Sourcing?" subtitle="Our team is ready to assist with your next China sourcing project." />
    </div>
  )
}

export default Blog
