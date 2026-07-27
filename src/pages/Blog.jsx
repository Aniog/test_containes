import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, User } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-factory',
    title: 'How to Verify a Factory in China: A Practical Guide',
    excerpt: 'Factory verification is one of the most important steps in sourcing from China. Here is what to check, what to ask, and what red flags to watch for.',
    date: '2026-07-15',
    author: 'SSourcing Team',
    category: 'Sourcing Tips',
    titleId: 'blog-verify-title',
    excerptId: 'blog-verify-excerpt',
    imgId: 'blog-verify-img-k1l2',
  },
  {
    id: 'quality-inspection-checklist',
    title: 'Quality Inspection Checklist: What to Check Before Shipment',
    excerpt: 'A comprehensive checklist for pre-shipment inspections — from visual checks to functional testing, packaging, and labeling verification.',
    date: '2026-07-01',
    author: 'SSourcing Team',
    category: 'Quality Control',
    titleId: 'blog-qc-title',
    excerptId: 'blog-qc-excerpt',
    imgId: 'blog-qc-img-m3n4',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: Sea vs Air vs Rail — Which Option?',
    excerpt: 'Comparing sea freight, air freight, and rail shipping from China — costs, transit times, and when each option makes sense for your order.',
    date: '2026-06-20',
    author: 'SSourcing Team',
    category: 'Logistics',
    titleId: 'blog-shipping-title',
    excerptId: 'blog-shipping-excerpt',
    imgId: 'blog-shipping-img-o5p6',
  },
  {
    id: 'avoid-trading-companies',
    title: 'How to Avoid Trading Companies and Find Real Factories',
    excerpt: 'Trading companies often pose as manufacturers. Learn how to distinguish real factories from trading companies and why it matters for your sourcing.',
    date: '2026-06-10',
    author: 'SSourcing Team',
    category: 'Sourcing Tips',
    titleId: 'blog-trading-title',
    excerptId: 'blog-trading-excerpt',
    imgId: 'blog-trading-img-q7r8',
  },
  {
    id: 'negotiate-with-chinese-factories',
    title: '5 Practical Tips for Negotiating with Chinese Factories',
    excerpt: 'Effective negotiation with Chinese suppliers requires understanding cultural norms, pricing structures, and relationship-building approaches.',
    date: '2026-05-28',
    author: 'SSourcing Team',
    category: 'Negotiation',
    titleId: 'blog-negotiate-title',
    excerptId: 'blog-negotiate-excerpt',
    imgId: 'blog-negotiate-img-s9t0',
  },
  {
    id: 'production-delays',
    title: 'Why Production Delays Happen and How to Prevent Them',
    excerpt: 'Common causes of production delays in China and practical strategies to keep your orders on schedule.',
    date: '2026-05-15',
    author: 'SSourcing Team',
    category: 'Production',
    titleId: 'blog-delays-title',
    excerptId: 'blog-delays-excerpt',
    imgId: 'blog-delays-img-u1v2',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="blog-page-title" className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Blog
          </h1>
          <p id="blog-page-subtitle" className="text-white/80 max-w-2xl mx-auto">
            Practical insights on China sourcing, quality control, supplier verification, and international logistics.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-neutral-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.excerptId}] [${post.titleId}] [blog-page-subtitle] [blog-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-neutral-light"
                />
                <div className="p-6">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="text-lg font-semibold text-primary mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.excerptId} className="text-neutral-mid text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-neutral-mid">
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

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-white/80 mb-8">
            We are happy to share our experience. Contact us for practical advice on your China sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-semibold no-underline hover:bg-accent-light transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
