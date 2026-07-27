import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: "Supplier verification is the most important step in China sourcing. Here's what to check, what to ask, and what red flags to watch for.",
    date: '2026-07-15',
    author: 'SSourcing Team',
    category: 'Supplier Verification',
  },
  {
    id: 'aql-inspection-guide',
    title: 'AQL Inspection Guide: What Buyers Need to Know',
    excerpt: 'Understanding AQL sampling helps you set realistic quality expectations and interpret inspection results correctly.',
    date: '2026-07-01',
    author: 'SSourcing Team',
    category: 'Quality Control',
  },
  {
    id: 'shipping-from-china-options',
    title: 'Shipping from China: Air, Sea, or Rail — Which Is Right for You?',
    excerpt: 'A practical comparison of shipping options from China, including cost, speed, and suitability for different product types.',
    date: '2026-06-20',
    author: 'SSourcing Team',
    category: 'Shipping',
  },
  {
    id: 'avoid-common-sourcing-mistakes',
    title: '5 Common Sourcing Mistakes and How to Avoid Them',
    excerpt: 'From skipping factory verification to ignoring pre-shipment inspections — these mistakes cost buyers time and money.',
    date: '2026-06-10',
    author: 'SSourcing Team',
    category: 'Sourcing Tips',
  },
  {
    id: 'negotiate-prices-chinese-suppliers',
    title: 'How to Negotiate Prices with Chinese Suppliers',
    excerpt: 'Effective price negotiation requires understanding Chinese business culture, cost structures, and the right timing.',
    date: '2026-05-28',
    author: 'SSourcing Team',
    category: 'Negotiation',
  },
  {
    id: 'production-follow-up-best-practices',
    title: 'Production Follow-up Best Practices for China Orders',
    excerpt: "Regular follow-up prevents delays and quality issues. Here's how to stay on top of your production without micromanaging.",
    date: '2026-05-15',
    author: 'SSourcing Team',
    category: 'Production',
  },
]

export default function Blog() {
  return (
    <div>
      <section className="bg-navy-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Blog</h1>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical insights on China sourcing, supplier verification, quality control, and shipping — written for global buyers.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-accent-50 text-accent-400 text-xs font-semibold px-2 py-1 rounded">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-navy-600 mb-2 leading-snug">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Have a Sourcing Question?</h2>
          <p className="text-navy-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            We're happy to answer your questions about sourcing from China. Reach out for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent-400 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-500 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
