import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a supplier\'s legitimacy, from business license checks to on-site factory audits, before committing your money.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '6 min read',
    imgId: 'blog-verify-m1n2o3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    title: 'A Complete Guide to Pre-Shipment Inspection (PSI)',
    excerpt: 'Understanding what pre-shipment inspection covers, how AQL standards work, and why PSI is your last line of defense against quality issues.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '8 min read',
    imgId: 'blog-psi-p4q5r6',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
  },
  {
    title: 'Sea Freight vs Air Freight: Which Is Right for Your Shipment?',
    excerpt: 'A practical comparison of sea and air freight options from China, including cost, transit time, and when each option makes the most sense.',
    category: 'Shipping',
    date: '2026-06-28',
    readTime: '5 min read',
    imgId: 'blog-freight-s7t8u9',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    title: '5 Common Mistakes First-Time Importers Make (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to underestimating lead times, these are the most common pitfalls we see from new importers and practical advice to avoid each one.',
    category: 'Importing Tips',
    date: '2026-06-20',
    readTime: '7 min read',
    imgId: 'blog-mistakes-v1w2x3',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities',
    excerpt: 'What MOQ means, why factories set them, and practical strategies for negotiating lower minimums without sacrificing quality or price.',
    category: 'Negotiation',
    date: '2026-06-10',
    readTime: '6 min read',
    imgId: 'blog-moq-y4z5a6',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    title: 'China Sourcing in 2026: Trends and What Buyers Need to Know',
    excerpt: 'Key trends shaping China sourcing in 2026, from supply chain shifts and rising labor costs to new compliance requirements and digital sourcing tools.',
    category: 'Industry Trends',
    date: '2026-05-30',
    readTime: '9 min read',
    imgId: 'blog-trends-b7c8d9',
    titleId: 'blog-trends-title',
    descId: 'blog-trends-desc',
  },
]

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Blog</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Practical advice, how-to guides, and industry insights to help you source smarter from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.imgId} className="bg-white rounded-lg overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-50 text-accent-blue text-xs font-medium px-2.5 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h3 id={post.titleId} className="font-semibold text-navy mb-2 line-clamp-2">{post.title}</h3>
                  <p id={post.descId} className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Have a Sourcing Question?
          </h2>
          <p className="text-slate-500 mb-8">
            We're happy to share our expertise. Reach out with your sourcing questions or requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy transition-colors"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Blog
