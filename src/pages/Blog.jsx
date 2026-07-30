import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'supplier-verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    category: 'Supplier Sourcing',
    date: 'July 15, 2026',
    readTime: '6 min read',
    excerpt: 'Placing an order with a new Chinese supplier carries real risk. This guide covers the key steps to verify a supplier\'s legitimacy, production capability, and quality systems before committing any funds.',
    imgId: 'blog-verify-img-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'aql-inspection',
    title: 'Understanding AQL Inspections: A Practical Guide for Importers',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '8 min read',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used for quality inspections. This article explains how AQL sampling works, what the numbers mean, and how to set the right inspection level for your products.',
    imgId: 'blog-aql-img-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'incoterms',
    title: 'Incoterms Explained: FOB, CIF, EXW — Which Should You Use?',
    category: 'Shipping',
    date: 'June 28, 2026',
    readTime: '7 min read',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. This guide breaks down the most common Incoterms used in China trade and explains when to use each one.',
    imgId: 'blog-incoterms-img-g7h8i9',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'sourcing-agent-vs-trading',
    title: 'Sourcing Agent vs. Trading Company: What\'s the Difference?',
    category: 'Sourcing Strategy',
    date: 'June 18, 2026',
    readTime: '5 min read',
    excerpt: 'Many buyers confuse sourcing agents with trading companies. Understanding the difference is important for managing costs, quality, and supplier relationships. Here\'s a clear comparison.',
    imgId: 'blog-agent-vs-trading-img-j1k2l3',
    titleId: 'blog-agent-vs-trading-title',
    descId: 'blog-agent-vs-trading-desc',
  },
  {
    id: 'product-certifications',
    title: 'CE, RoHS, FCC: Which Certifications Does Your Product Need?',
    category: 'Compliance',
    date: 'June 5, 2026',
    readTime: '9 min read',
    excerpt: 'Importing products without the right certifications can result in customs holds, fines, or product recalls. This guide covers the most common certifications required for products imported into the EU, US, and Australia.',
    imgId: 'blog-certs-img-m4n5o6',
    titleId: 'blog-certs-title',
    descId: 'blog-certs-desc',
  },
  {
    id: 'negotiating-with-factories',
    title: '7 Practical Tips for Negotiating with Chinese Factories',
    category: 'Supplier Sourcing',
    date: 'May 22, 2026',
    readTime: '6 min read',
    excerpt: 'Negotiating with Chinese manufacturers requires a different approach than Western business negotiations. These practical tips will help you get better prices, terms, and results without damaging the relationship.',
    imgId: 'blog-negotiate-img-p7q8r9',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
]

const categories = ['All', 'Supplier Sourcing', 'Quality Control', 'Shipping', 'Sourcing Strategy', 'Compliance']

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">Insights & Guides</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Practical guides and insights for importers sourcing from China. No fluff — just useful information.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-light text-brand-navy hover:bg-brand-blue hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="mb-10">
            <div className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
                  <img
                    alt={posts[0].title}
                    data-strk-img-id={posts[0].imgId}
                    data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-brand-light text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">{posts[0].category}</span>
                    <span className="bg-brand-accent/10 text-brand-accent text-xs font-semibold px-2.5 py-1 rounded-full">Featured</span>
                  </div>
                  <h2 id={posts[0].titleId} className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-4 leading-snug">
                    {posts[0].title}
                  </h2>
                  <p id={posts[0].descId} className="text-brand-muted leading-relaxed mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-brand-muted text-sm mb-6">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{posts[0].date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{posts[0].readTime}</span>
                  </div>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-sky transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="bg-brand-light text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                  <h3 id={post.titleId} className="font-display font-semibold text-brand-navy text-base mt-3 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-brand-muted text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-brand-muted text-xs">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    </div>
                    <Link to="/blog" className="text-brand-blue text-sm font-medium hover:text-brand-sky transition-colors flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-light border-t border-brand-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mb-3">
            Get Sourcing Insights by Email
          </h2>
          <p className="text-brand-muted mb-6">
            Practical guides for importers, delivered monthly. No spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-brand-border text-brand-navy placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
            />
            <button className="bg-brand-blue hover:bg-brand-sky text-white font-semibold px-5 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
