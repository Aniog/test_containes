import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    imgContext: 'business supplier verification document review office',
    date: 'June 12, 2025',
    readTime: '7 min read',
    title: 'How to Verify a Supplier Before Placing Your First Order',
    excerpt: 'Placing an order with an unverified supplier is one of the most common and costly mistakes importers make. Here is a practical checklist to verify any supplier before committing.',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
    ctxId: 'blog-verify-supplier-ctx',
    catId: 'blog-verify-supplier-cat',
    imgId: 'blog-verify-supplier-img-r2s3t4',
  },
  {
    id: 'aql-inspection-guide',
    category: 'Quality Control',
    imgContext: 'quality inspector checking products factory inspection',
    date: 'May 28, 2025',
    readTime: '9 min read',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used for pre-shipment inspections. This guide explains how it works and how to choose the right sampling level for your products.',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    ctxId: 'blog-aql-ctx',
    catId: 'blog-aql-cat',
    imgId: 'blog-aql-img-u5v6w7',
  },
  {
    id: 'fob-vs-cif-explained',
    category: 'Shipping & Logistics',
    imgContext: 'cargo ship container port freight shipping logistics',
    date: 'May 10, 2025',
    readTime: '5 min read',
    title: 'FOB vs CIF: Which Incoterm Should You Use When Importing?',
    excerpt: 'FOB and CIF are the two most common shipping terms used in international trade. Understanding the difference can save you money and prevent disputes with your supplier.',
    titleId: 'blog-fob-cif-title',
    descId: 'blog-fob-cif-desc',
    ctxId: 'blog-fob-cif-ctx',
    catId: 'blog-fob-cif-cat',
    imgId: 'blog-fob-cif-img-x8y9z0',
  },
  {
    id: 'china-sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    imgContext: 'business meeting strategy planning import export trade',
    date: 'April 22, 2025',
    readTime: '6 min read',
    title: 'Sourcing Agent vs Trading Company: Which Is Right for Your Business?',
    excerpt: 'Many importers are unsure whether to work with a sourcing agent or a trading company. Both have advantages and drawbacks depending on your product, volume, and experience level.',
    titleId: 'blog-agent-vs-trading-title',
    descId: 'blog-agent-vs-trading-desc',
    ctxId: 'blog-agent-vs-trading-ctx',
    catId: 'blog-agent-vs-trading-cat',
    imgId: 'blog-agent-vs-trading-img-a2b3c4',
  },
  {
    id: 'private-label-china-guide',
    category: 'Private Label',
    imgContext: 'branded product packaging private label design retail',
    date: 'April 5, 2025',
    readTime: '10 min read',
    title: 'A Practical Guide to Launching a Private Label Product',
    excerpt: 'Private labeling can be highly profitable, but the process involves more steps than standard importing. This guide walks you through product selection, factory sourcing, and brand development.',
    titleId: 'blog-private-label-title',
    descId: 'blog-private-label-desc',
    ctxId: 'blog-private-label-ctx',
    catId: 'blog-private-label-cat',
    imgId: 'blog-private-label-img-d5e6f7',
  },
  {
    id: 'china-trade-show-guide',
    category: 'Sourcing Strategy',
    imgContext: 'trade show exhibition hall business fair international',
    date: 'March 18, 2025',
    readTime: '8 min read',
    title: 'Canton Fair and Beyond: How to Use Trade Shows for Sourcing',
    excerpt: "Trade shows — including the Canton Fair, Yiwu Fair, and industry-specific expos — are valuable sourcing tools. Here is how to prepare and get the most out of your visit.",
    titleId: 'blog-trade-show-title',
    descId: 'blog-trade-show-desc',
    ctxId: 'blog-trade-show-ctx',
    catId: 'blog-trade-show-cat',
    imgId: 'blog-trade-show-img-g8h9i0',
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Sourcing Strategy', 'Private Label']

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-navy-900 py-20">
        <div className="container-xl text-center">
          <span className="inline-block bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
            Sourcing Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            China Sourcing Blog
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and sourcing tips for global buyers importing from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container-xl">
          {/* Category filter (visual only) */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? 'bg-navy-800 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="card overflow-hidden p-0 group flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.ctxId}] [${post.catId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQI12NgAAIABQAABjE+ibYAAAAASUVORK5CYII="
                  />
                  <span id={post.ctxId} className="sr-only">{post.imgContext}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span id={post.catId} className="text-xs font-semibold text-brand-red bg-brand-red/10 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="font-semibold text-gray-900 mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-navy-800 text-sm font-semibold hover:text-navy-600 flex items-center gap-1"
                    >
                      Read More <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container-xl max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-gray-500 mb-6">
            Practical guides and industry updates for importers. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-800 text-gray-900"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
