import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar } from 'lucide-react'

const posts = [
  {
    id: 'how-to-find-suppliers',
    title: 'How to Find Reliable Suppliers in China: A Step-by-Step Guide',
    excerpt: 'Finding the right supplier is the foundation of successful China sourcing. Learn our proven process for identifying, vetting, and selecting manufacturers.',
    date: '2026-07-15',
    category: 'Sourcing Tips',
    imgId: 'blog-suppliers-img-a1b2c3',
    titleId: 'blog-suppliers-title',
    descId: 'blog-suppliers-desc',
  },
  {
    id: 'factory-audit-checklist',
    title: '10-Point Factory Audit Checklist for China Sourcing',
    excerpt: 'Before placing an order, a factory audit can save you from costly mistakes. Here is our 10-point checklist used by professional sourcing agents.',
    date: '2026-07-08',
    category: 'Quality Control',
    imgId: 'blog-audit-img-b2c3d4',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'shipping-from-china',
    title: 'Complete Guide to Shipping from China: Sea, Air, and Rail',
    excerpt: 'Understanding your shipping options is critical for cost control and delivery planning. We compare sea freight, air freight, and rail for different scenarios.',
    date: '2026-06-28',
    category: 'Logistics',
    imgId: 'blog-shipping-img-c3d4e5',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'avoid-scams',
    title: '7 Red Flags When Dealing with Chinese Suppliers',
    excerpt: 'Not every supplier is legitimate. Learn the warning signs that indicate a potential scam or unreliable manufacturer, and how to protect yourself.',
    date: '2026-06-20',
    category: 'Risk Management',
    imgId: 'blog-scams-img-d4e5f6',
    titleId: 'blog-scams-title',
    descId: 'blog-scams-desc',
  },
  {
    id: 'negotiate-prices',
    title: 'How to Negotiate Better Prices with Chinese Manufacturers',
    excerpt: 'Price negotiation in China requires understanding local business culture. Here are practical strategies that work without damaging supplier relationships.',
    date: '2026-06-12',
    category: 'Negotiation',
    imgId: 'blog-negotiate-img-e5f6g7',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 'quality-inspection-types',
    title: 'Understanding Quality Inspections: DPI, PSI, and CLS Explained',
    excerpt: 'Different inspection types serve different purposes. Learn when to use During Production, Pre-Shipment, and Container Loading inspections.',
    date: '2026-06-05',
    category: 'Quality Control',
    imgId: 'blog-inspection-img-f6g7h8',
    titleId: 'blog-inspection-title',
    descId: 'blog-inspection-desc',
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
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Sourcing Blog
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Practical guides, tips, and insights to help you source from China more effectively and avoid common pitfalls.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-brand-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-50 text-brand-blue text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-muted">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-bold text-brand-dark mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-brand-gray text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center mt-4 text-brand-blue text-sm font-semibold">
                    Read More <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-white border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">
            Have a Sourcing Question?
          </h2>
          <p className="mt-4 text-brand-gray text-lg">
            Our team is happy to answer your questions about sourcing from China. Reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
