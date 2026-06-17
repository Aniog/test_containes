import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Verify a Chinese Factory: A 10-Point Checklist',
    excerpt: 'Before placing your first order, use this practical checklist to assess factory legitimacy, capacity, and reliability. Includes red flags to watch for.',
    date: 'June 10, 2026',
    readTime: '8 min read',
    category: 'Factory Verification',
    query: 'factory audit inspection checklist china manufacturing',
  },
  {
    title: 'Understanding AQL Sampling for Quality Inspections',
    excerpt: 'AQL (Acceptable Quality Limit) is the global standard for product inspections. Learn how to set the right AQL level for your product category.',
    date: 'May 28, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
    query: 'quality control inspection aql sampling manufacturing',
  },
  {
    title: 'Top 5 Mistakes First-Time Buyers Make in China',
    excerpt: 'From skipping factory audits to paying 100% upfront, these common mistakes can cost you thousands. Here is how to avoid them.',
    date: 'May 15, 2026',
    readTime: '7 min read',
    category: 'Sourcing Tips',
    query: 'china sourcing mistakes buyers guide',
  },
  {
    title: 'FOB vs. EXW vs. DDP: Which Shipping Term Is Right for You?',
    excerpt: 'Incoterms define who pays for what in international shipping. We break down the most common terms and when to use each one.',
    date: 'April 30, 2026',
    readTime: '5 min read',
    category: 'Logistics',
    query: 'shipping logistics container freight international trade',
  },
  {
    title: 'How to Negotiate MOQs with Chinese Suppliers',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. Learn proven strategies to negotiate lower MOQs without sacrificing price.',
    date: 'April 12, 2026',
    readTime: '6 min read',
    category: 'Negotiation',
    query: 'business negotiation manufacturing supplier',
  },
  {
    title: 'The Rise of Eco-Friendly Manufacturing in China',
    excerpt: 'Sustainability is becoming a competitive advantage. We explore the factories leading the green manufacturing movement and what to look for.',
    date: 'March 25, 2026',
    readTime: '7 min read',
    category: 'Industry Trends',
    query: 'eco friendly sustainable manufacturing factory green',
  },
]

const categories = [
  'All',
  'Factory Verification',
  'Quality Control',
  'Sourcing Tips',
  'Logistics',
  'Negotiation',
  'Industry Trends',
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              Sourcing Insights & Guides
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Practical articles, checklists, and industry insights to help you source smarter from China. Written by our team of sourcing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article
                key={post.title}
                className="group bg-white rounded-lg border border-slate-100 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={`blog-img-${idx}-ssourcing`}
                    data-strk-img={`[blog-title-${idx}] [blog-category-${idx}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span id={`blog-title-${idx}`} className="sr-only">{post.query}</span>
                  <span id={`blog-category-${idx}`} className="sr-only">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-slate-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-primary text-sm font-semibold group-hover:underline">
                      Read
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-3">
            Get Sourcing Tips Delivered to Your Inbox
          </h2>
          <p className="text-slate-500 mb-8">
            Join 3,200+ buyers who receive our monthly sourcing newsletter with actionable advice and market updates.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}