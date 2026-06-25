import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to conducting due diligence on Chinese suppliers — from checking business licenses to on-site factory visits.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    readTime: '8 min read',
    imgId: 'blog-verify-img-h1i2j3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'quality-inspection-guide',
    title: 'The Complete Guide to Quality Inspections in China',
    excerpt: 'Learn about the different types of QC inspections (PPI, DPI, PSI) and when to use each one to protect your order quality.',
    category: 'Quality Control',
    date: '2026-06-08',
    readTime: '10 min read',
    imgId: 'blog-qc-img-k4l5m6',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
  },
  {
    id: 'shipping-from-china-2026',
    title: 'Shipping from China in 2026: Costs, Routes & Tips',
    excerpt: 'An updated overview of shipping options, current freight rates, transit times, and practical tips for importing goods from China.',
    category: 'Logistics',
    date: '2026-05-28',
    readTime: '7 min read',
    imgId: 'blog-shipping-img-n7o8p9',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'avoid-sourcing-scams',
    title: '5 Common China Sourcing Scams and How to Avoid Them',
    excerpt: 'Protect your business from common fraud tactics used by dishonest suppliers — and learn the red flags to watch for.',
    category: 'Risk Management',
    date: '2026-05-20',
    readTime: '6 min read',
    imgId: 'blog-scams-img-q1r2s3',
    titleId: 'blog-scams-title',
    descId: 'blog-scams-desc',
  },
  {
    id: 'negotiate-with-chinese-suppliers',
    title: 'How to Negotiate Effectively with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies that help you get better prices, terms, and service without damaging the supplier relationship.',
    category: 'Negotiation',
    date: '2026-05-12',
    readTime: '9 min read',
    imgId: 'blog-negotiate-img-t4u5v6',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 'private-label-china',
    title: 'Starting a Private Label Brand with Chinese Manufacturers',
    excerpt: 'A step-by-step guide to developing your own branded products with Chinese OEM/ODM manufacturers.',
    category: 'Product Development',
    date: '2026-05-05',
    readTime: '11 min read',
    imgId: 'blog-private-img-w7x8y9',
    titleId: 'blog-private-title',
    descId: 'blog-private-desc',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Blog & Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              China Sourcing Insights
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical guides, industry updates, and expert tips to help you source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-50 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">{post.category}</span>
                  <h2 id={post.titleId} className="text-lg font-bold text-slate-900 mt-3 mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
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

      {/* CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Have a Sourcing Question?</h2>
          <p className="text-slate-600 text-lg mb-8">Our team is happy to answer your questions about sourcing from China. Reach out anytime.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
