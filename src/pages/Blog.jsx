import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Factory in 2025',
    excerpt:
      'A practical checklist for overseas buyers who want to confirm a supplier is real, capable, and financially stable before placing an order.',
    date: 'June 18, 2026',
    readTime: '8 min read',
    category: 'Factory Verification',
  },
  {
    title: 'AQL Sampling Explained for First-Time Importers',
    excerpt:
      'What is AQL, why does it matter, and how to read an inspection report. A beginner-friendly guide to quality control terminology.',
    date: 'June 10, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
  },
  {
    title: 'Incoterms 2025: What Buyers Still Get Wrong',
    excerpt:
      'FOB, CIF, DDP, EXW. We break down the most common incoterms used in China exports and explain which one is right for your situation.',
    date: 'May 28, 2026',
    readTime: '7 min read',
    category: 'Shipping',
  },
  {
    title: 'Why Your Chinese Supplier Keeps Delaying Delivery',
    excerpt:
      'The real reasons behind production delays in China, and how a local project manager can prevent them before they impact your business.',
    date: 'May 15, 2026',
    readTime: '5 min read',
    category: 'Production Management',
  },
  {
    title: 'MOQ Negotiation Strategies That Actually Work',
    excerpt:
      'How to approach minimum order quantity discussions with Chinese factories without damaging the relationship or sacrificing quality.',
    date: 'April 30, 2026',
    readTime: '6 min read',
    category: 'Negotiation',
  },
  {
    title: 'Customs Documentation for China Imports: A Checklist',
    excerpt:
      'The essential paperwork you need for smooth customs clearance when importing from China, including common mistakes to avoid.',
    date: 'April 12, 2026',
    readTime: '9 min read',
    category: 'Compliance',
  },
  {
    title: 'Switching Suppliers: When and How to Do It Safely',
    excerpt:
      'Signs that it is time to change factories, and a step-by-step plan to transition production without disrupting your supply chain.',
    date: 'March 25, 2026',
    readTime: '7 min read',
    category: 'Supplier Management',
  },
  {
    title: 'The True Cost of Sourcing from China',
    excerpt:
      'Beyond unit price: shipping, duties, inspection, defects, and opportunity cost. How to calculate your real landed cost per unit.',
    date: 'March 10, 2026',
    readTime: '8 min read',
    category: 'Cost Analysis',
  },
  {
    title: 'Protecting Your IP When Manufacturing in China',
    excerpt:
      'NDAs, design patents, mold ownership agreements, and factory selection criteria that reduce the risk of copying and counterfeiting.',
    date: 'February 20, 2026',
    readTime: '6 min read',
    category: 'Legal',
  },
]

export default function Blog() {
  return (
    <div>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Blog</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Practical guides, checklists, and insights for businesses sourcing from China. No fluff, just actionable advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-teal/10 text-teal-dark">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-navy mb-2 leading-snug">{post.title}</h2>
                  <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-text-muted pt-4 border-t border-border">
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

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Get Sourcing Tips in Your Inbox</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-6">
              Join our newsletter for monthly updates on factory trends, quality control tips, and China trade news.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-md px-4 py-3 text-sm text-navy bg-white border-0 focus:ring-2 focus:ring-teal outline-none"
              />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-teal px-6 py-3 text-sm font-semibold text-white hover:bg-teal-dark transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
