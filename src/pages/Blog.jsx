import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to conducting due diligence on Chinese manufacturers — from business license checks to on-site factory audits.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    readTime: '8 min read',
  },
  {
    id: 'common-quality-issues',
    title: '7 Common Quality Issues When Sourcing from China (And How to Prevent Them)',
    excerpt: 'Learn about the most frequent quality problems buyers face and the inspection protocols that catch them before shipment.',
    category: 'Quality Control',
    date: '2026-06-08',
    readTime: '6 min read',
  },
  {
    id: 'shipping-guide-2026',
    title: 'Complete Guide to Shipping from China in 2026',
    excerpt: 'Everything you need to know about ocean freight, air cargo, Incoterms, customs documentation, and choosing the right logistics partner.',
    category: 'Logistics',
    date: '2026-05-28',
    readTime: '10 min read',
  },
  {
    id: 'moq-negotiation',
    title: 'How to Negotiate MOQ with Chinese Factories',
    excerpt: 'Strategies for getting lower minimum order quantities without sacrificing quality or supplier relationships.',
    category: 'Negotiation',
    date: '2026-05-20',
    readTime: '5 min read',
  },
  {
    id: 'alibaba-vs-sourcing-agent',
    title: 'Alibaba vs. Sourcing Agent: Which Is Right for Your Business?',
    excerpt: 'An honest comparison of self-sourcing through online platforms versus working with a professional sourcing agent in China.',
    category: 'Sourcing Strategy',
    date: '2026-05-12',
    readTime: '7 min read',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look for During a Supplier Visit',
    excerpt: 'The essential checklist our team uses when conducting on-site factory audits — production capacity, quality systems, and red flags.',
    category: 'Supplier Verification',
    date: '2026-05-05',
    readTime: '9 min read',
  },
]

const Blog = () => {
  return (
    <div>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Insights & Guides</p>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-white/70 text-lg">
              Practical guides, industry insights, and sourcing tips to help you buy smarter from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-medium rounded-full mb-4">{post.category}</span>
                  <h2 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{post.title}</h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
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

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Have a Sourcing Question?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Our team is happy to answer your questions about sourcing from China. Reach out anytime.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors no-underline"
          >
            Contact Us <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Blog
