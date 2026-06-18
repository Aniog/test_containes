import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'post-supplier-verification',
    titleId: 'post-supplier-verification-title',
    descId: 'post-supplier-verification-desc',
    imgId: 'post-supplier-verification-img-a1b2c3',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory you\'ve never visited, there are several verification steps every importer should take. We walk through the process our team uses on every new supplier.',
    category: 'Supplier Verification',
    date: '2026-05-20',
    readTime: '7 min read',
    featured: true,
  },
  {
    id: 'post-aql-inspection',
    titleId: 'post-aql-inspection-title',
    descId: 'post-aql-inspection-desc',
    imgId: 'post-aql-inspection-img-d4e5f6',
    title: 'AQL Sampling Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard for quality inspection sampling. Here\'s how it works and how to choose the right AQL level for your product.',
    category: 'Quality Control',
    date: '2026-05-08',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 'post-sea-vs-air',
    titleId: 'post-sea-vs-air-title',
    descId: 'post-sea-vs-air-desc',
    imgId: 'post-sea-vs-air-img-g7h8i9',
    title: 'Sea Freight vs Air Freight: Which Is Right for Your China Shipment?',
    excerpt: 'Choosing between sea and air freight depends on your timeline, budget, and product type. We break down the key factors to help you make the right decision.',
    category: 'Shipping & Logistics',
    date: '2026-04-22',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 'post-moq-negotiation',
    titleId: 'post-moq-negotiation-title',
    descId: 'post-moq-negotiation-desc',
    imgId: 'post-moq-negotiation-img-j1k2l3',
    title: 'How to Negotiate MOQ with Chinese Manufacturers',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. Here are practical strategies for negotiating lower MOQs without damaging your supplier relationship.',
    category: 'Sourcing Tips',
    date: '2026-04-10',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 'post-ce-certification',
    titleId: 'post-ce-certification-title',
    descId: 'post-ce-certification-desc',
    imgId: 'post-ce-certification-img-m4n5o6',
    title: 'CE Certification for Products Imported from China: A Practical Guide',
    excerpt: 'If you\'re importing products into the EU, CE marking is mandatory for many categories. We explain what it means, who is responsible, and how to get it done.',
    category: 'Trade Compliance',
    date: '2026-03-28',
    readTime: '9 min read',
    featured: false,
  },
  {
    id: 'post-sourcing-agent-vs-trading',
    titleId: 'post-sourcing-agent-vs-trading-title',
    descId: 'post-sourcing-agent-vs-trading-desc',
    imgId: 'post-sourcing-agent-vs-trading-img-p7q8r9',
    title: 'Sourcing Agent vs Trading Company: Which Should You Use?',
    excerpt: 'Both sourcing agents and trading companies can help you buy from China, but they work very differently. Understanding the difference can save you money and reduce risk.',
    category: 'Sourcing Tips',
    date: '2026-03-15',
    readTime: '6 min read',
    featured: false,
  },
]

const categories = ['All', 'Sourcing Tips', 'Quality Control', 'Supplier Verification', 'Shipping & Logistics', 'Trade Compliance']

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Resources</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-16 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <div className="grid lg:grid-cols-2">
                <img
                  alt={featured.title}
                  className="w-full h-64 lg:h-full object-cover"
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
                      {featured.category}
                    </span>
                  </div>
                  <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {featured.title}
                  </h2>
                  <p id={featured.descId} className="text-slate-600 leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featured.readTime}
                    </span>
                  </div>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-800 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <img
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-5">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="text-base font-semibold text-slate-900 mt-3 mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-slate-400 text-xs">
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

      {/* Newsletter */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-slate-600 mb-6">
            Practical guides and industry updates for importers. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
