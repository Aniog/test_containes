import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to conducting due diligence on potential Chinese manufacturers, including what documents to request and red flags to watch for.',
    category: 'Supplier Verification',
    date: '2026-06-28',
    readTime: '8 min read',
  },
  {
    id: 'quality-inspection-guide',
    title: 'Pre-Shipment Inspection: What to Check and How',
    excerpt: 'Learn about AQL sampling standards, common defect types, and how to structure an effective pre-shipment inspection for your China orders.',
    category: 'Quality Control',
    date: '2026-06-15',
    readTime: '10 min read',
  },
  {
    id: 'shipping-from-china',
    title: 'Complete Guide to Shipping from China: FOB, CIF, and Incoterms Explained',
    excerpt: 'Understanding shipping terms, freight options, and documentation requirements when importing goods from Chinese suppliers.',
    category: 'Logistics',
    date: '2026-05-30',
    readTime: '12 min read',
  },
  {
    id: 'negotiate-chinese-suppliers',
    title: '7 Proven Strategies for Negotiating with Chinese Suppliers',
    excerpt: 'Practical negotiation tactics that work in the Chinese business context, from building relationships to leveraging volume commitments.',
    category: 'Negotiation',
    date: '2026-05-18',
    readTime: '7 min read',
  },
  {
    id: 'avoid-sourcing-scams',
    title: 'How to Avoid Common China Sourcing Scams',
    excerpt: 'Identify and protect yourself from trading company fraud, bait-and-switch tactics, and other common pitfalls when sourcing from China.',
    category: 'Risk Management',
    date: '2026-05-05',
    readTime: '9 min read',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: 25 Things to Verify On-Site',
    excerpt: 'A comprehensive checklist for evaluating Chinese factories, covering production capacity, quality systems, certifications, and working conditions.',
    category: 'Factory Audit',
    date: '2026-04-22',
    readTime: '11 min read',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Sourcing Blog</h1>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl">
            Practical guides, tips, and insights to help you source from China more effectively and avoid common pitfalls.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video">
                  <img
                    data-strk-img-id={`blog-${post.id}-img-${post.id.slice(0, 6)}`}
                    data-strk-img={`[blog-${post.id}-excerpt] [blog-${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                  <h2 id={`blog-${post.id}-title`} className="text-base font-semibold text-primary mt-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={`blog-${post.id}-excerpt`} className="text-sm text-text-secondary mt-2 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-text-muted">
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
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Have a Sourcing Question?</h2>
          <p className="mt-4 text-gray-200 text-lg">Our team is ready to help you navigate China sourcing challenges.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors no-underline"
          >
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
