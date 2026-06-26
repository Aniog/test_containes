import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing Your First Order',
    excerpt: 'A practical guide to verifying supplier credentials, conducting factory audits, and avoiding common pitfalls when sourcing from China.',
    author: 'SSourcing Team',
    date: 'June 15, 2026',
    readTime: '8 min read',
    category: 'Factory Verification',
    slug: 'how-to-verify-chinese-factory',
  },
  {
    title: 'A Complete Guide to Quality Inspection Standards in China',
    excerpt: 'Understand AQL sampling, pre-shipment inspections, during-production checks, and how to set up an effective quality control process.',
    author: 'SSourcing Team',
    date: 'May 28, 2026',
    readTime: '10 min read',
    category: 'Quality Control',
    slug: 'quality-inspection-standards-china',
  },
  {
    title: 'Top 10 Manufacturing Hubs in China You Should Know',
    excerpt: 'An overview of the key manufacturing regions in China and what products each hub specializes in for international buyers.',
    author: 'SSourcing Team',
    date: 'May 10, 2026',
    readTime: '7 min read',
    category: 'Sourcing Guide',
    slug: 'top-manufacturing-hubs-china',
  },
  {
    title: 'Shipping from China: Sea vs. Air vs. Rail Freight Comparison',
    excerpt: 'Compare costs, transit times, and best-use scenarios for each shipping method when importing goods from China.',
    author: 'SSourcing Team',
    date: 'April 22, 2026',
    readTime: '6 min read',
    category: 'Logistics',
    slug: 'shipping-china-sea-air-rail',
  },
  {
    title: 'Understanding MOQ: How to Negotiate Minimum Order Quantities',
    excerpt: 'Practical strategies for negotiating lower MOQs with Chinese suppliers, especially for startups and small businesses.',
    author: 'SSourcing Team',
    date: 'April 5, 2026',
    readTime: '5 min read',
    category: 'Negotiation',
    slug: 'negotiate-minimum-order-quantities',
  },
  {
    title: 'Common Product Compliance Requirements for Importing from China',
    excerpt: 'A breakdown of CE, FDA, RoHS, REACH, and other certification requirements for products manufactured in China.',
    author: 'SSourcing Team',
    date: 'March 18, 2026',
    readTime: '9 min read',
    category: 'Compliance',
    slug: 'product-compliance-requirements-china',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden">
        <div
          data-strk-bg-id="blog-bg-2b3c4d"
          data-strk-bg="[blog-title] [blog-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-slate-900"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="blog-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p id="blog-subtitle" className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Insights, guides, and practical advice for sourcing products from China.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div
                  data-strk-bg-id={`blog-img-${post.slug}`}
                  data-strk-bg={`[blog-title-${post.slug}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                  className="w-full aspect-[16/9] bg-slate-100"
                />
                <span id={`blog-title-${post.slug}`} className="sr-only">{post.title}</span>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    to="#"
                    className="text-sm font-medium text-brand-700 hover:text-brand-800 inline-flex items-center gap-1 transition-colors"
                  >
                    Read more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-slate-600 mb-8">
            Get the latest sourcing tips, industry insights, and company updates delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              required
            />
            <button
              type="submit"
              className="bg-brand-700 hover:bg-brand-800 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}