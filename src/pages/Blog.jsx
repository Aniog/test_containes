import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import SectionTitle from '../components/shared/SectionTitle'

const posts = [
  {
    title: 'How to Verify a Chinese Factory: A Complete Checklist',
    excerpt: 'Factory verification is one of the most critical steps in China sourcing. This comprehensive checklist covers everything from business licenses to production capacity assessments.',
    category: 'Factory Audits',
    date: 'July 15, 2026',
    readTime: '8 min read',
    slug: 'how-to-verify-chinese-factory',
  },
  {
    title: 'Understanding AQL Sampling for Quality Control',
    excerpt: 'Acceptable Quality Level (AQL) is the international standard for product inspections. Learn how AQL tables work and what sampling levels you should request for your products.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
    slug: 'understanding-aql-sampling',
  },
  {
    title: 'FOB vs. CIF vs. DDP: Choosing the Right Incoterm',
    excerpt: 'Incoterms define who pays for what in international shipping. This guide breaks down the most common terms and helps you choose the right one for your China imports.',
    category: 'Shipping',
    date: 'June 28, 2026',
    readTime: '7 min read',
    slug: 'choosing-right-incoterm',
  },
  {
    title: 'Red Flags When Dealing with Alibaba Suppliers',
    excerpt: 'Alibaba is a great starting point, but not every supplier is trustworthy. Here are the warning signs to watch for and how to protect yourself from scams and low-quality suppliers.',
    category: 'Supplier Sourcing',
    date: 'June 20, 2026',
    readTime: '5 min read',
    slug: 'alibaba-supplier-red-flags',
  },
  {
    title: 'How to Reduce Your China Sourcing Costs by 20%',
    excerpt: 'Small changes in your sourcing strategy can lead to significant savings. We share proven tactics for negotiating better prices, optimizing MOQs, and reducing logistics costs.',
    category: 'Cost Optimization',
    date: 'June 12, 2026',
    readTime: '6 min read',
    slug: 'reduce-china-sourcing-costs',
  },
  {
    title: 'The Real Cost of Not Doing Pre-Shipment Inspections',
    excerpt: 'Skipping QC inspections might save a few hundred dollars upfront, but the hidden costs of defective products can be devastating. Here is the math that proves inspections pay for themselves.',
    category: 'Quality Control',
    date: 'June 5, 2026',
    readTime: '5 min read',
    slug: 'cost-of-skipping-inspections',
  },
  {
    title: 'Navigating Chinese New Year Production Shutdowns',
    excerpt: 'Chinese New Year causes the longest factory shutdown of the year. Learn how to plan your orders around CNY to avoid delays and stockouts.',
    category: 'Supply Chain',
    date: 'May 28, 2026',
    readTime: '4 min read',
    slug: 'chinese-new-year-shutdowns',
  },
  {
    title: 'Customs Documentation: What You Need for China Imports',
    excerpt: 'Proper documentation is essential for smooth customs clearance. This guide covers commercial invoices, packing lists, certificates of origin, and other required paperwork.',
    category: 'Shipping',
    date: 'May 20, 2026',
    readTime: '7 min read',
    slug: 'china-import-documentation',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-surface py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Practical advice, industry knowledge, and actionable tips for anyone sourcing products from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group bg-surface rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all flex flex-col">
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-text-muted">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Personalized Sourcing Advice?
          </h2>
          <p className="text-white/80 mb-8">
            Every business has unique sourcing needs. Book a free consultation and get tailored recommendations for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-accent-hover transition-colors shadow-lg"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
