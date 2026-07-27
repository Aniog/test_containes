import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'post-1',
    title: '10 Red Flags When Choosing a China Supplier',
    excerpt: 'Learn the warning signs that indicate an unreliable supplier — and how to avoid costly mistakes before placing your first order.',
    category: 'Supplier Selection',
    date: '2026-07-15',
    readTime: '6 min read',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
    imgId: 'blog-1-img-a1b2c3',
  },
  {
    id: 'post-2',
    title: 'Understanding AQL: A Buyer\'s Guide to Quality Inspection',
    excerpt: 'What is AQL, how does it work, and what inspection level should you choose? A practical guide for importers.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '8 min read',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
    imgId: 'blog-2-img-d4e5f6',
  },
  {
    id: 'post-3',
    title: 'FOB vs CIF: Which Shipping Term Should You Use?',
    excerpt: 'A clear comparison of Incoterms for China imports — when to use FOB, CIF, or other terms based on your situation.',
    category: 'Shipping',
    date: '2026-06-28',
    readTime: '5 min read',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
    imgId: 'blog-3-img-g7h8i9',
  },
  {
    id: 'post-4',
    title: 'How to Negotiate with Chinese Suppliers: 7 Proven Tactics',
    excerpt: 'Practical negotiation strategies that work in the Chinese business context — from pricing to payment terms.',
    category: 'Negotiation',
    date: '2026-06-20',
    readTime: '7 min read',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
    imgId: 'blog-4-img-j1k2l3',
  },
  {
    id: 'post-5',
    title: 'Factory Audit Checklist: What to Look For',
    excerpt: 'The essential checklist our team uses when auditing Chinese factories — covering capacity, quality systems, and compliance.',
    category: 'Factory Audit',
    date: '2026-06-12',
    readTime: '9 min read',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
    imgId: 'blog-5-img-m4n5o6',
  },
  {
    id: 'post-6',
    title: 'Protecting Your IP When Sourcing from China',
    excerpt: 'Steps you can take to protect your designs, trademarks, and trade secrets when working with Chinese manufacturers.',
    category: 'IP Protection',
    date: '2026-06-05',
    readTime: '6 min read',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
    imgId: 'blog-6-img-p7q8r9',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Sourcing Insights & Guides
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Practical knowledge to help you source smarter from China — supplier selection, quality control, shipping, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-lg transition-shadow group">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2 py-0.5 rounded">{post.category}</span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-semibold text-brand-navy mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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

      <section className="py-16 md:py-20 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
            Have a Sourcing Question?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our team is happy to answer your questions about sourcing from China — no obligation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
