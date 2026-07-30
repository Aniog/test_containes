import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const blogPosts = [
  {
    id: 'verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a Chinese supplier, from checking business licenses to conducting factory audits. Avoid scams and protect your investment.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
  },
  {
    id: 'alibaba-sourcing-mistakes',
    title: '7 Common Mistakes When Sourcing on Alibaba (And How to Avoid Them)',
    excerpt: 'Alibaba can be a great tool, but many buyers make costly mistakes. Here are the top 7 pitfalls and practical tips to source safely and effectively.',
    category: 'Sourcing Tips',
    date: '2026-07-08',
    readTime: '6 min read',
  },
  {
    id: 'quality-inspection-guide',
    title: 'The Complete Guide to Pre-Shipment Inspection in China',
    excerpt: 'Everything you need to know about pre-shipment inspections: when to do them, what to check, AQL standards, and how to read inspection reports.',
    category: 'Quality Control',
    date: '2026-06-28',
    readTime: '10 min read',
  },
  {
    id: 'shipping-from-china',
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method from China',
    excerpt: 'Compare costs, transit times, and best use cases for sea freight and air freight when importing from China. Includes a cost calculator framework.',
    category: 'Logistics',
    date: '2026-06-20',
    readTime: '7 min read',
  },
  {
    id: 'negotiate-chinese-suppliers',
    title: 'How to Negotiate with Chinese Suppliers: A Practical Guide',
    excerpt: 'Effective negotiation strategies that work with Chinese manufacturers. Learn about pricing structures, payment terms, and building long-term relationships.',
    category: 'Negotiation',
    date: '2026-06-12',
    readTime: '9 min read',
  },
  {
    id: 'product-certifications',
    title: 'Product Certifications for Importing from China: CE, FCC, FDA Explained',
    excerpt: 'Understand which certifications your products need for different markets. A practical overview of CE, FCC, FDA, and other common requirements.',
    category: 'Compliance',
    date: '2026-06-05',
    readTime: '8 min read',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange text-sm font-semibold uppercase tracking-wide">Blog</span>
            <h1 id="blog-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-2 mb-4">
              China Sourcing Insights
            </h1>
            <p id="blog-page-subtitle" className="text-slate-300 text-lg leading-relaxed">
              Practical guides, tips, and industry insights to help you source from China more effectively and avoid common pitfalls.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition flex flex-col">
                <div className="p-4">
                  <img
                    data-strk-img-id={`blog-${post.id}-thumb-7c2e`}
                    data-strk-img={`[blog-${post.id}-excerpt] [blog-${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="rounded-lg w-full h-44 object-cover"
                  />
                </div>
                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-navy/10 text-navy font-medium px-2.5 py-0.5 rounded-full">{post.category}</span>
                  </div>
                  <h2 id={`blog-${post.id}-title`} className="text-base font-bold text-slate-900 mb-2 leading-snug">{post.title}</h2>
                  <p id={`blog-${post.id}-excerpt`} className="text-sm text-slate-600 mb-4 flex-1">{post.excerpt}</p>
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

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Get Sourcing Tips in Your Inbox
          </h2>
          <p className="text-slate-600 mb-6">
            Join 2,000+ importers who receive our weekly China sourcing newsletter with practical tips and market updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange/50 focus:border-orange"
            />
            <button className="bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-dark transition text-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer your questions about sourcing from China. No obligation."
      />
    </div>
  )
}
