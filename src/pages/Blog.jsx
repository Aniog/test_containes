import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, User } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a supplier\'s legitimacy, from business license checks to on-site factory audits. Avoid common scams and find reliable partners.',
    category: 'Sourcing Tips',
    date: '2026-06-15',
    author: 'SSourcing Team',
    imgId: 'blog-verify-j4k5l6',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'quality-control-checklist',
    title: 'Quality Control Checklist for Importing from China',
    excerpt: 'A practical QC checklist covering pre-production, during-production, and pre-shipment inspections. Ensure your products meet specifications before they ship.',
    category: 'Quality Control',
    date: '2026-06-01',
    author: 'SSourcing Team',
    imgId: 'blog-qc-m7n8o9',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Shipping from China: Sea vs Air vs Rail Freight Compared',
    excerpt: 'Compare shipping options from China — costs, transit times, and when to use each method. Make informed logistics decisions for your imports.',
    category: 'Shipping',
    date: '2026-05-20',
    author: 'SSourcing Team',
    imgId: 'blog-shipping-p1q2r3',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'negotiate-better-prices',
    title: '7 Strategies to Negotiate Better Prices with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies that go beyond price haggling. Learn how to build relationships and create win-win outcomes with your Chinese suppliers.',
    category: 'Sourcing Tips',
    date: '2026-05-10',
    author: 'SSourcing Team',
    imgId: 'blog-negotiate-s4t5u6',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 'common-sourcing-mistakes',
    title: '5 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory audits to ignoring cultural differences, these common mistakes can cost you time and money. Here\'s how to avoid each one.',
    category: 'Sourcing Tips',
    date: '2026-04-28',
    author: 'SSourcing Team',
    imgId: 'blog-mistakes-v7w8x9',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    id: 'understanding-moq',
    title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities',
    excerpt: 'What MOQ means, why factories set them, and practical strategies to negotiate lower minimums — especially useful for startups and new product launches.',
    category: 'Sourcing Tips',
    date: '2026-04-15',
    author: 'SSourcing Team',
    imgId: 'blog-moq-y1z2a3',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Blog</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              China Sourcing Insights
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Practical guides, tips, and industry knowledge to help you source better from China.
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
                key={post.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
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
                    <span className="bg-navy/5 text-navy text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-bold text-slate-900 mb-2 group-hover:text-navy transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-slate-400 text-xs">
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

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Expert Sourcing Help?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Our team is ready to help you find the right suppliers and manage your China sourcing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
