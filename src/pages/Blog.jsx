import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, visiting factories, and confirming production capabilities before committing to a new supplier.',
    category: 'Supplier Verification',
    date: '2024-11-15',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-4a2c9f',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'quality-inspection-guide',
    title: 'The Complete Guide to Quality Inspection in China',
    excerpt: 'Learn about pre-production, during-production, and pre-shipment inspections — when to use each type and what to look for in QC reports.',
    category: 'Quality Control',
    date: '2024-10-28',
    readTime: '10 min read',
    imgId: 'blog-qc-guide-7b3e1d',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
  },
  {
    id: 'shipping-from-china-explained',
    title: 'Shipping from China: FOB, CIF, and Incoterms Explained',
    excerpt: 'Understanding shipping terms is critical for managing costs and risk. This guide breaks down the most common Incoterms used in China trade.',
    category: 'Logistics',
    date: '2024-10-10',
    readTime: '7 min read',
    imgId: 'blog-shipping-5c8a2e',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'avoid-sourcing-scams',
    title: '5 Red Flags When Sourcing from China (And How to Avoid Scams)',
    excerpt: 'Not every supplier on Alibaba is legitimate. Learn the warning signs of fraudulent suppliers and how to protect your business.',
    category: 'Risk Management',
    date: '2024-09-22',
    readTime: '6 min read',
    imgId: 'blog-scams-9d4f1b',
    titleId: 'blog-scams-title',
    descId: 'blog-scams-desc',
  },
  {
    id: 'negotiate-with-chinese-factories',
    title: 'How to Negotiate Effectively with Chinese Factories',
    excerpt: 'Practical negotiation strategies that work in Chinese business culture — from initial pricing discussions to long-term partnership building.',
    category: 'Negotiation',
    date: '2024-09-05',
    readTime: '9 min read',
    imgId: 'blog-negotiate-2a7c5e',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 'private-label-china',
    title: 'Starting a Private Label Brand with Chinese Manufacturing',
    excerpt: 'From product design to packaging and compliance — everything you need to know about launching a private label product sourced from China.',
    category: 'Private Label',
    date: '2024-08-18',
    readTime: '12 min read',
    imgId: 'blog-private-label-6e3b8a',
    titleId: 'blog-private-title',
    descId: 'blog-private-desc',
  },
]

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Sourcing Insights & Guides
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              Practical knowledge to help you source smarter from China. Guides, tips, and industry insights from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <h2 id={post.titleId} className="mt-3 text-lg font-semibold text-slate-800 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join 2,000+ importers who receive our weekly China sourcing insights.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
            />
            <button className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors border-none">
              Subscribe
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-400">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
