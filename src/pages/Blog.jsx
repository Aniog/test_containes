import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to checking business licenses, visiting factories, and confirming production capabilities before committing to a new supplier.',
    category: 'Supplier Verification',
    date: '2026-06-10',
    readTime: '7 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-v5e9',
  },
  {
    id: 'quality-inspection-guide',
    title: 'Pre-Shipment Inspection: What to Check and Why It Matters',
    excerpt: 'Learn what a professional QC inspector looks for during a pre-shipment inspection and how it protects your order from costly defects.',
    category: 'Quality Control',
    date: '2026-05-28',
    readTime: '5 min read',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
    imgId: 'blog-qc-img-w6f0',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Shipping from China: FOB vs CIF and What Buyers Should Know',
    excerpt: 'Understanding Incoterms, freight options, and documentation requirements when importing goods from Chinese factories.',
    category: 'Logistics',
    date: '2026-05-15',
    readTime: '6 min read',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
    imgId: 'blog-shipping-img-x7g1',
  },
  {
    id: 'avoid-sourcing-scams',
    title: '5 Red Flags When Sourcing from China (And How to Avoid Scams)',
    excerpt: 'Common warning signs that a supplier may not be legitimate, and practical steps to protect your investment.',
    category: 'Risk Management',
    date: '2026-04-30',
    readTime: '4 min read',
    titleId: 'blog-scams-title',
    descId: 'blog-scams-desc',
    imgId: 'blog-scams-img-y8h2',
  },
  {
    id: 'negotiate-with-chinese-suppliers',
    title: 'How to Negotiate Effectively with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies that respect cultural norms while helping you secure better pricing and terms.',
    category: 'Negotiation',
    date: '2026-04-18',
    readTime: '6 min read',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
    imgId: 'blog-negotiate-img-z9i3',
  },
  {
    id: 'moq-strategies',
    title: 'Managing MOQ: Strategies for Small and Medium Buyers',
    excerpt: 'How to work with minimum order quantities when you are not ordering full containers — consolidation, negotiation, and alternative approaches.',
    category: 'Buying Strategy',
    date: '2026-04-05',
    readTime: '5 min read',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
    imgId: 'blog-moq-img-a0j4',
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
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Sourcing Blog
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Practical guides and insights to help you source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  className="w-full aspect-video object-cover bg-slate-100"
                />
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">{post.category}</span>
                  <h2 id={post.titleId} className="text-lg font-semibold text-slate-900 mt-2 mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
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
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Have a Sourcing Question?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Our team is happy to answer your questions about sourcing from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg text-base no-underline transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
