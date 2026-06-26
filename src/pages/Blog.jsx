import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Tag } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Learn the essential steps to verify Chinese suppliers, including business license checks, factory audits, and reference verification. Protect your investment before committing.',
    category: 'Supplier Verification',
    readTime: '8 min read',
    date: 'June 2026',
    titleId: 'blog-verify-supplier-title',
    descId: 'blog-verify-supplier-desc',
    imgId: 'blog-verify-supplier-img',
  },
  {
    title: 'Pre-Shipment Inspection Checklist: What Every Importer Should Know',
    excerpt: 'A comprehensive guide to pre-shipment inspections, including what to check, common defects, and how to set acceptance quality levels (AQL) for your products.',
    category: 'Quality Control',
    readTime: '10 min read',
    date: 'May 2026',
    titleId: 'blog-qc-checklist-title',
    descId: 'blog-qc-checklist-desc',
    imgId: 'blog-qc-checklist-img',
  },
  {
    title: 'Sea Freight vs Air Freight: A Cost and Timeline Comparison for Importers',
    excerpt: 'Compare sea freight and air freight costs, transit times, and use cases. Learn when each option makes sense and how to optimize your shipping strategy.',
    category: 'Shipping & Logistics',
    readTime: '7 min read',
    date: 'May 2026',
    titleId: 'blog-freight-compare-title',
    descId: 'blog-freight-compare-desc',
    imgId: 'blog-freight-compare-img',
  },
  {
    title: 'Negotiating with Chinese Suppliers: Practical Tips That Actually Work',
    excerpt: 'Real-world negotiation strategies for dealing with Chinese manufacturers. Cultural insights, pricing tactics, and relationship-building approaches that lead to better deals.',
    category: 'Sourcing Tips',
    readTime: '9 min read',
    date: 'April 2026',
    titleId: 'blog-negotiation-title',
    descId: 'blog-negotiation-desc',
    imgId: 'blog-negotiation-img',
  },
  {
    title: 'Understanding Chinese Manufacturing Certifications: CE, FCC, RoHS, and More',
    excerpt: 'A plain-language guide to the certifications your products may need for different markets. Learn what each certification means and how to ensure compliance.',
    category: 'Compliance',
    readTime: '11 min read',
    date: 'April 2026',
    titleId: 'blog-certifications-title',
    descId: 'blog-certifications-desc',
    imgId: 'blog-certifications-img',
  },
  {
    title: 'How to Manage Quality When Sourcing from Multiple Chinese Factories',
    excerpt: 'Strategies for maintaining consistent quality across multiple suppliers, including standardized specifications, unified inspection protocols, and centralized quality tracking.',
    category: 'Quality Control',
    readTime: '8 min read',
    date: 'March 2026',
    titleId: 'blog-multi-factory-title',
    descId: 'blog-multi-factory-desc',
    imgId: 'blog-multi-factory-img',
  },
]

export default function Blog() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Insights & Guides</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-extrabold text-white">
            Sourcing Knowledge Hub
          </h1>
          <p className="mt-5 text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Practical guides, industry insights, and expert advice to help you source smarter from China.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post) => (
              <article key={post.title} className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                <div
                  className="aspect-[16/10] bg-surface-alt relative overflow-hidden"
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/5 rounded-full px-2.5 py-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-light">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="font-heading font-bold text-base text-text mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-text-muted text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-text-light">{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-surface-alt">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-extrabold text-text mb-3">
            Stay Updated
          </h2>
          <p className="text-text-muted text-sm mb-6">
            Get practical sourcing tips and market insights delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-white text-text text-sm placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button className="bg-accent hover:bg-accent-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
