import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Find Reliable Suppliers in China: A Step-by-Step Guide',
    category: 'Supplier Sourcing',
    excerpt: 'Finding trustworthy suppliers in China requires more than just searching on Alibaba. Learn the systematic approach we use to identify and verify quality manufacturers.',
    author: 'SSourcing Team',
    date: 'June 15, 2026',
    readTime: '8 min read',
    slug: 'find-reliable-suppliers-china',
  },
  {
    title: 'The Complete Guide to Factory Audits in China',
    category: 'Factory Verification',
    excerpt: 'What to look for when auditing a Chinese factory. A comprehensive overview of our audit checklist covering quality, compliance, and production capacity.',
    author: 'SSourcing Team',
    date: 'June 8, 2026',
    readTime: '10 min read',
    slug: 'complete-guide-factory-audits',
  },
  {
    title: 'Quality Control in China: AQL Standards Explained',
    category: 'Quality Control',
    excerpt: 'Understanding Acceptable Quality Limit (AQL) standards and how they apply to your product inspections. Make informed decisions about quality thresholds.',
    author: 'SSourcing Team',
    date: 'June 1, 2026',
    readTime: '6 min read',
    slug: 'quality-control-aql-standards',
  },
  {
    title: 'Shipping from China: What Every Buyer Should Know',
    category: 'Logistics',
    excerpt: 'From Incoterms to customs clearance, learn the essentials of international shipping from China and how to avoid common pitfalls.',
    author: 'SSourcing Team',
    date: 'May 25, 2026',
    readTime: '7 min read',
    slug: 'shipping-from-china-guide',
  },
  {
    title: 'Top 10 Mistakes When Sourcing Products from China',
    category: 'Best Practices',
    excerpt: 'Avoid costly mistakes that new importers often make. Learn from real experiences and save time, money, and frustration.',
    author: 'SSourcing Team',
    date: 'May 18, 2026',
    readTime: '9 min read',
    slug: 'top-mistakes-sourcing-china',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers',
    category: 'Negotiation',
    excerpt: 'Effective negotiation strategies that build lasting supplier relationships while securing competitive pricing and favorable terms.',
    author: 'SSourcing Team',
    date: 'May 10, 2026',
    readTime: '7 min read',
    slug: 'negotiate-chinese-suppliers',
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
      <section className="bg-gradient-to-br from-slate-900 via-brand-blue to-slate-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Blog</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Practical insights, guides, and best practices for sourcing products from China. 
              Written by our team of experienced sourcing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-blue-50 text-brand-blue text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-brand-blue transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have Specific Sourcing Questions?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Get personalized answers from our sourcing experts. Contact us for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}