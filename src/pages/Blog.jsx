import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Factory Without Visiting China',
    excerpt: 'Practical steps to validate a supplier\'s credentials, production capability, and quality standards remotely — plus when you absolutely need someone on the ground.',
    date: 'June 15, 2026',
    readTime: '8 min read',
    category: 'Supplier Verification',
    slug: 'verify-chinese-factory-remotely',
  },
  {
    id: 2,
    title: 'The True Cost of Sourcing from China: A Complete Breakdown',
    excerpt: 'Beyond the unit price — understand tooling costs, shipping, duties, inspection, and hidden fees that affect your landed cost. A practical guide for accurate budgeting.',
    date: 'May 28, 2026',
    readTime: '10 min read',
    category: 'Sourcing Strategy',
    slug: 'true-cost-sourcing-from-china',
  },
  {
    id: 3,
    title: 'AQL Inspection Standards Explained for Importers',
    excerpt: 'What Acceptable Quality Level (AQL) means, how to choose the right inspection level, and when to use normal vs. tightened inspection for your product category.',
    date: 'May 12, 2026',
    readTime: '7 min read',
    category: 'Quality Control',
    slug: 'aql-inspection-standards-explained',
  },
  {
    id: 4,
    title: 'Incoterms 2020 for China Sourcing: FOB, EXW, CIF Explained',
    excerpt: 'A clear guide to choosing the right Incoterms for your China shipments. Understand risk transfer, cost allocation, and which terms give you the most control.',
    date: 'April 20, 2026',
    readTime: '9 min read',
    category: 'Logistics',
    slug: 'incoterms-2020-china-sourcing',
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Suppliers: 10 Practical Tips',
    excerpt: 'Effective negotiation strategies that go beyond price — payment terms, MOQ flexibility, quality guarantees, and building mutually beneficial relationships.',
    date: 'April 5, 2026',
    readTime: '8 min read',
    category: 'Sourcing Strategy',
    slug: 'negotiate-with-chinese-suppliers',
  },
  {
    id: 6,
    title: 'Common Quality Issues in China Manufacturing and How to Prevent Them',
    excerpt: 'The most frequent quality defects we see across product categories, their root causes, and the QC protocols that prevent them from reaching your customers.',
    date: 'March 18, 2026',
    readTime: '11 min read',
    category: 'Quality Control',
    slug: 'common-quality-issues-china-manufacturing',
  },
  {
    id: 7,
    title: 'OEM vs. ODM Manufacturing in China: Which Is Right for You?',
    excerpt: 'Understand the key differences between OEM and ODM manufacturing models, including IP protection considerations, MOQ expectations, and development timelines.',
    date: 'March 2, 2026',
    readTime: '7 min read',
    category: 'Product Development',
    slug: 'oem-vs-odm-manufacturing-china',
  },
  {
    id: 8,
    title: 'Shipping from China: Sea Freight vs. Air Freight vs. Rail Freight',
    excerpt: 'Compare transit times, costs, and ideal use cases for each shipping mode. Plus tips on consolidation, LCL vs. FCL, and working with freight forwarders.',
    date: 'February 14, 2026',
    readTime: '8 min read',
    category: 'Logistics',
    slug: 'shipping-from-china-comparison',
  },
  {
    id: 9,
    title: 'Building Long-Term Supplier Relationships in China',
    excerpt: 'Why transactional sourcing fails and how to build partnerships that deliver consistent quality, priority production slots, and better pricing over time.',
    date: 'January 28, 2026',
    readTime: '6 min read',
    category: 'Sourcing Strategy',
    slug: 'long-term-supplier-relationships-china',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Blog</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Insights on China Sourcing
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Expert advice, practical guides, and industry insights to help you 
              source from China more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-primary/5 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-text-light">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
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
      <section className="py-20 bg-surface-alt">
        <div className="section-container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-text-muted mb-8">
            Get the latest insights on China sourcing, quality control, and supply chain management delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-border rounded-lg text-sm focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}