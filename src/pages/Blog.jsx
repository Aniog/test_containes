import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order. From business license checks to on-site factory audits, this guide covers everything you need to know.',
    category: 'Supplier Verification',
    date: 'May 15, 2026',
    readTime: '8 min read',
    slug: 'how-to-verify-chinese-supplier',
  },
  {
    id: 2,
    title: 'AQL Inspection Standards Explained for Importers',
    excerpt: 'Understanding Acceptable Quality Level (AQL) inspection standards is essential for any importer. Learn how AQL works, what sample sizes to use, and how to set quality expectations with your suppliers.',
    category: 'Quality Control',
    date: 'May 2, 2026',
    readTime: '6 min read',
    slug: 'aql-inspection-standards-explained',
  },
  {
    id: 3,
    title: 'Ocean Freight vs Air Freight: Which Is Right for Your Shipment?',
    excerpt: 'Choosing between ocean and air freight depends on your budget, timeline, and product type. This comparison breaks down costs, transit times, and best use cases for each shipping method.',
    category: 'Shipping & Logistics',
    date: 'Apr 18, 2026',
    readTime: '7 min read',
    slug: 'ocean-freight-vs-air-freight',
  },
  {
    id: 4,
    title: '10 Common Mistakes When Importing from China (And How to Avoid Them)',
    excerpt: 'New to importing from China? These common mistakes have cost importers thousands of dollars. Learn from others\' experiences and protect your business from the start.',
    category: 'Importing Tips',
    date: 'Apr 5, 2026',
    readTime: '10 min read',
    slug: 'common-mistakes-importing-from-china',
  },
  {
    id: 5,
    title: 'China Manufacturing Hubs: A Regional Guide for Buyers',
    excerpt: 'China has specialized manufacturing regions for different product categories. Knowing which city to source from can save you time and money. Here is your complete regional guide.',
    category: 'Market Intelligence',
    date: 'Mar 22, 2026',
    readTime: '12 min read',
    slug: 'china-manufacturing-hubs-regional-guide',
  },
  {
    id: 6,
    title: 'How to Negotiate Prices with Chinese Suppliers',
    excerpt: 'Effective price negotiation with Chinese suppliers requires understanding the local business culture and market dynamics. These strategies will help you secure better pricing without sacrificing quality.',
    category: 'Sourcing Strategy',
    date: 'Mar 10, 2026',
    readTime: '7 min read',
    slug: 'negotiate-prices-chinese-suppliers',
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping & Logistics', 'Importing Tips', 'Market Intelligence', 'Sourcing Strategy']

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary-light text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-5">
              Sourcing Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              SSourcing China Blog
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Practical guides, industry insights, and expert advice to help you source smarter from China.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-primary text-sm font-medium group-hover:underline flex items-center gap-1">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-neutral-500 mb-6">
            Join 2,000+ importers who receive our weekly newsletter with sourcing tips, market updates, and supplier insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-neutral-400 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  )
}
