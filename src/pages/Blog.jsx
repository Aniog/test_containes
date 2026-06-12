import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const blogPosts = [
  {
    id: 'blog-verify-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to conducting due diligence on Chinese manufacturers — from checking business licenses to on-site factory audits.',
    category: 'Supplier Verification',
    date: '2026-05-28',
    readTime: '8 min read',
  },
  {
    id: 'blog-qc-inspection',
    title: '5 Quality Inspection Mistakes That Cost Importers Thousands',
    excerpt: 'Common QC errors that lead to defective shipments and how to avoid them with proper inspection protocols.',
    category: 'Quality Control',
    date: '2026-05-15',
    readTime: '6 min read',
  },
  {
    id: 'blog-shipping-guide',
    title: 'Complete Guide to Shipping from China: Sea, Air, and Rail',
    excerpt: 'Compare shipping methods, costs, transit times, and learn when to use each option for your imports from China.',
    category: 'Logistics',
    date: '2026-05-02',
    readTime: '10 min read',
  },
  {
    id: 'blog-negotiate-price',
    title: 'How to Negotiate Prices with Chinese Suppliers Effectively',
    excerpt: 'Proven negotiation strategies that help you get better pricing without damaging supplier relationships.',
    category: 'Negotiation',
    date: '2026-04-20',
    readTime: '7 min read',
  },
  {
    id: 'blog-moq-strategies',
    title: 'MOQ Strategies: How to Order Small Quantities from China',
    excerpt: 'Practical approaches to working with Chinese factories when your order quantities are below their standard MOQ.',
    category: 'Sourcing Tips',
    date: '2026-04-08',
    readTime: '5 min read',
  },
  {
    id: 'blog-avoid-scams',
    title: 'Red Flags: How to Spot Fraudulent Suppliers on Alibaba',
    excerpt: 'Warning signs that indicate a supplier may not be legitimate, and steps to protect yourself from sourcing scams.',
    category: 'Risk Management',
    date: '2026-03-25',
    readTime: '9 min read',
  },
]

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="blog-title" className="text-4xl md:text-5xl font-bold text-slate-800">
              China Sourcing Blog
            </h1>
            <p id="blog-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed">
              Practical guides, tips, and insights to help you source from China more effectively and avoid common pitfalls.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video">
                  <img
                    data-strk-img-id={`blog-img-${post.id}`}
                    data-strk-img={`[${post.id}-title] [blog-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-sky bg-blue-50 px-2.5 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h2 id={`${post.id}-title`} className="text-lg font-semibold text-slate-800 mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
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

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Have a Sourcing Question?</h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Our team is happy to answer your questions about sourcing from China. Get in touch for personalized advice.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-sky text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky-light transition-colors"
            >
              Contact Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
