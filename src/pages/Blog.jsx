import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'

const posts = [
  {
    id: 'blog-supplier-verification',
    title: 'How to Verify a Chinese Supplier: The Complete Checklist',
    date: 'Jul 15, 2026',
    author: 'David Chen',
    category: 'Supplier Verification',
    excerpt: 'A step-by-step guide to verifying Chinese manufacturers before placing your first order. Learn what documents to check, what to look for during a factory visit, and the red flags that should make you walk away.',
    imgId: 'blog-verify-bg-a1b2c3',
  },
  {
    id: 'blog-aql-inspection',
    title: 'AQL Inspection Standards Explained for Importers',
    date: 'Jun 28, 2026',
    author: 'Lisa Wang',
    category: 'Quality Control',
    excerpt: 'Understanding AQL (Acceptable Quality Level) is essential for any importer. This guide explains AQL tables, sampling plans, defect classifications, and how to set the right inspection levels for your product category.',
    imgId: 'blog-aql-bg-d4e5f6',
  },
  {
    id: 'blog-shipping-costs',
    title: 'China Shipping Costs in 2026: What Importers Need to Know',
    date: 'Jun 10, 2026',
    author: 'Michael Zhang',
    category: 'Logistics',
    excerpt: 'An up-to-date overview of sea freight, air freight, and express shipping rates from China to major global ports. Includes tips on how to reduce your shipping costs and avoid common documentation pitfalls.',
    imgId: 'blog-shipping-bg-g7h8i9',
  },
  {
    id: 'blog-yiwu-market',
    title: 'Sourcing from Yiwu Market: A Buyer\'s Practical Guide',
    date: 'May 22, 2026',
    author: 'David Chen',
    category: 'Sourcing Tips',
    excerpt: 'Yiwu is the world\'s largest wholesale market for small commodities. Learn how to navigate its 75,000+ booths, identify reliable suppliers, negotiate effectively, and arrange logistics from this unique trading hub.',
    imgId: 'blog-yiwu-bg-j0k1l2',
  },
  {
    id: 'blog-incoterms',
    title: 'Incoterms for China Sourcing: FOB vs. CIF vs. EXW',
    date: 'May 5, 2026',
    author: 'Lisa Wang',
    category: 'Logistics',
    excerpt: 'Choosing the right Incoterm can save you thousands on each shipment. We break down the most common terms used in China trade and help you decide which one is right for your business model.',
    imgId: 'blog-incoterms-bg-m3n4o5',
  },
  {
    id: 'blog-moq-negotiation',
    title: 'How to Negotiate MOQ with Chinese Factories',
    date: 'Apr 18, 2026',
    author: 'Michael Zhang',
    category: 'Sourcing Tips',
    excerpt: 'Minimum Order Quantities can be a barrier for small and medium importers. Learn proven strategies to negotiate lower MOQs without damaging your relationship with the supplier.',
    imgId: 'blog-moq-bg-6p7q8r',
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
      <section className="bg-brand-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Blog & Insights
          </h1>
          <p className="text-lg text-brand-gray-400 max-w-2xl mx-auto">
            Practical guides, market insights, and sourcing tips from our team in China.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-brand-gray-200 rounded-xl overflow-hidden hover:border-brand-blue hover:shadow-lg transition-all duration-300"
              >
                <div
                  data-strk-bg-id={post.imgId}
                  data-strk-bg={`[${post.id}-title] sourcing china`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                >
                  <div className="h-48 bg-brand-gray-100" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-brand-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Tag className="w-3 h-3 text-brand-blue" />
                    <span className="text-xs font-medium text-brand-blue">{post.category}</span>
                  </div>
                  <h2 id={`${post.id}-title`} className="text-base font-semibold text-brand-navy mb-2 leading-snug group-hover:text-brand-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-brand-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:text-brand-lightblue transition-colors">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="flex items-center justify-center gap-3 mt-16">
            <span className="px-4 py-2 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-400 cursor-not-allowed">
              Previous
            </span>
            <span className="px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-semibold">1</span>
            <span className="px-4 py-2 border border-brand-gray-200 rounded-lg text-sm text-brand-gray-400 cursor-not-allowed">
              Next
            </span>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-brand-gray-600 mb-6">
            Subscribe to our newsletter for the latest guides and market insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-brand-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-lightblue transition-colors text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
