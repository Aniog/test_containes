import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Placing an order with an unverified Chinese supplier is one of the most common and costly mistakes importers make. Here\'s a practical checklist to protect yourself.',
    date: '2026-07-15',
    readTime: '6 min read',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
    imgId: 'blog-verify-supplier-img-a1b2c3',
  },
  {
    id: 'pre-shipment-inspection-guide',
    category: 'Quality Control',
    title: 'Pre-Shipment Inspection: What It Is and Why You Need It',
    excerpt: 'A pre-shipment inspection (PSI) is your last line of defense before goods leave China. This guide explains what\'s checked, how it works, and when to use it.',
    date: '2026-07-08',
    readTime: '5 min read',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
    imgId: 'blog-psi-img-d4e5f6',
  },
  {
    id: 'sea-freight-vs-air-freight',
    category: 'Shipping',
    title: 'Sea Freight vs. Air Freight from China: How to Choose',
    excerpt: 'Cost, speed, and cargo type all factor into the decision. We break down the key differences and help you decide which shipping method is right for your order.',
    date: '2026-06-28',
    readTime: '7 min read',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
    imgId: 'blog-freight-img-g7h8i9',
  },
  {
    id: 'china-sourcing-agent-vs-trading-company',
    category: 'Sourcing Strategy',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    excerpt: 'Many buyers confuse sourcing agents with trading companies. Understanding the difference can save you money and give you more control over your supply chain.',
    date: '2026-06-18',
    readTime: '5 min read',
    titleId: 'blog-agent-vs-trading-title',
    descId: 'blog-agent-vs-trading-desc',
    imgId: 'blog-agent-vs-trading-img-j1k2l3',
  },
  {
    id: 'moq-negotiation-tips',
    category: 'Negotiation',
    title: '5 Practical Tips for Negotiating MOQ with Chinese Factories',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. Here are five strategies that actually work when negotiating MOQ with Chinese manufacturers.',
    date: '2026-06-05',
    readTime: '4 min read',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
    imgId: 'blog-moq-img-m4n5o6',
  },
  {
    id: 'product-certifications-china',
    category: 'Compliance',
    title: 'CE, RoHS, FDA: Which Certifications Do You Need for Your Product?',
    excerpt: 'Importing products without the right certifications can result in customs holds, fines, or product recalls. Here\'s a practical guide to the most common requirements.',
    date: '2026-05-22',
    readTime: '8 min read',
    titleId: 'blog-certs-title',
    descId: 'blog-certs-desc',
    imgId: 'blog-certs-img-p7q8r9',
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Sourcing Strategy', 'Negotiation', 'Compliance']

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
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">Insights & Guides</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-border py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-lightblue text-textdark hover:bg-blue-100'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-lightblue rounded-2xl overflow-hidden">
            <div className="aspect-video lg:aspect-auto lg:h-full bg-lightblue overflow-hidden">
              <img
                data-strk-img-id={posts[0].imgId}
                data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                <span className="bg-white text-primary text-xs font-semibold px-3 py-1 rounded-full">{posts[0].category}</span>
              </div>
              <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-textdark mb-3">
                {posts[0].title}
              </h2>
              <p id={posts[0].descId} className="text-muted text-base leading-relaxed mb-5">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-muted text-sm mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(posts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {posts[0].readTime}
                </span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map(({ id, category, title, excerpt, date, readTime, titleId, descId, imgId }) => (
              <article key={id} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-video bg-lightblue overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3.5 h-3.5 text-accent" />
                    <span className="text-accent text-xs font-semibold">{category}</span>
                  </div>
                  <h3 id={titleId} className="font-bold text-textdark text-lg mb-2 leading-snug group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p id={descId} className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                    {excerpt}
                  </p>
                  <div className="flex items-center justify-between text-muted text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-lightblue">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-textdark mb-3">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-muted text-lg mb-8">
            Practical guides and industry updates for global buyers. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg border border-border text-textdark text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-900 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
