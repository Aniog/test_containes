import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

const posts = [
  {
    slug: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Supplier verification is the most critical step in China sourcing. Learn the key checks you should perform before committing to any supplier, from business license verification to on-site factory audits.',
    category: 'Sourcing Tips',
    date: '2026-06-10',
    readTime: '6 min read',
    imgId: 'blog-verify-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    slug: 'aql-inspection-guide',
    title: 'AQL Inspection Guide: What Importers Need to Know',
    excerpt: 'Understanding AQL (Acceptable Quality Level) is essential for managing product quality from Chinese suppliers. This guide explains AQL standards, sampling methods, and how to set inspection criteria.',
    category: 'Quality Control',
    date: '2026-05-28',
    readTime: '8 min read',
    imgId: 'blog-aql-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    slug: 'shipping-from-china-2026',
    title: 'Shipping from China in 2026: Sea, Air, and Rail Options Compared',
    excerpt: 'Choosing the right shipping method affects your cost, speed, and reliability. We compare sea freight, air freight, and China-Europe rail for different order sizes and urgency levels.',
    category: 'Logistics',
    date: '2026-05-15',
    readTime: '7 min read',
    imgId: 'blog-ship-g7h8i9',
    titleId: 'blog-ship-title',
    descId: 'blog-ship-desc',
  },
  {
    slug: 'common-sourcing-mistakes',
    title: '7 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to neglecting quality inspections, these common mistakes can cost you time and money. Learn what to watch out for and how to protect your business.',
    category: 'Sourcing Tips',
    date: '2026-05-02',
    readTime: '5 min read',
    imgId: 'blog-mistakes-j1k2l3',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    slug: 'negotiate-with-chinese-suppliers',
    title: 'How to Negotiate Effectively with Chinese Suppliers',
    excerpt: 'Negotiation with Chinese suppliers requires understanding of local business culture, pricing structures, and relationship dynamics. Here are practical strategies for getting better deals.',
    category: 'Sourcing Tips',
    date: '2026-04-18',
    readTime: '6 min read',
    imgId: 'blog-nego-m4n5o6',
    titleId: 'blog-nego-title',
    descId: 'blog-nego-desc',
  },
  {
    slug: 'product-certification-guide',
    title: 'Product Certification Guide: CE, FDA, RoHS, and More',
    excerpt: 'Different markets require different product certifications. This guide covers the most common certifications needed for importing from China to the EU, US, and other major markets.',
    category: 'Compliance',
    date: '2026-04-05',
    readTime: '9 min read',
    imgId: 'blog-cert-p7q8r9',
    titleId: 'blog-cert-title',
    descId: 'blog-cert-desc',
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
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              China Sourcing Insights
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Practical guides, industry insights, and expert advice on sourcing from China.
              Written for importers, procurement managers, and business owners.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-[16/9] bg-neutral-100 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary-50 text-primary-500 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-400">{post.readTime}</span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <span className="text-primary-500 font-medium group-hover:underline">
                      Read more
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            We're happy to help. Reach out and our sourcing team will get back to you within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
