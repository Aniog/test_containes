import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order, including license checks, factory visits, and reference verification.',
    category: 'Supplier Verification',
    date: 'June 15, 2026',
    readTime: '8 min read',
    featured: true,
  },
  {
    id: 'understanding-aql-quality-inspection',
    title: 'Understanding AQL: The Standard for Quality Inspection in China',
    excerpt: 'AQL (Acceptable Quality Level) is the industry standard for product inspection. Here is what you need to know about sampling plans, defect classification, and interpreting results.',
    category: 'Quality Control',
    date: 'June 8, 2026',
    readTime: '6 min read',
  },
  {
    id: 'shipping-from-china-complete-guide',
    title: 'Shipping from China: Sea, Air, and Rail Compared',
    excerpt: 'A practical comparison of the three main shipping methods from China, including costs, transit times, and when to use each option.',
    category: 'Shipping & Logistics',
    date: 'May 28, 2026',
    readTime: '7 min read',
  },
  {
    id: 'negotiate-prices-chinese-factories',
    title: 'How to Negotiate Prices with Chinese Factories',
    excerpt: 'Practical negotiation strategies that work with Chinese manufacturers, based on cultural understanding and business relationships rather than aggressive tactics.',
    category: 'Sourcing Tips',
    date: 'May 20, 2026',
    readTime: '5 min read',
  },
  {
    id: 'common-china-sourcing-mistakes',
    title: '7 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From skipping factory verification to ignoring cultural differences, here are the most common mistakes first-time China buyers make and how to avoid them.',
    category: 'Sourcing Tips',
    date: 'May 12, 2026',
    readTime: '9 min read',
  },
  {
    id: 'customs-import-regulations-guide',
    title: 'Customs and Import Regulations: What Every Buyer Should Know',
    excerpt: 'An overview of customs procedures, import duties, and compliance requirements when importing goods from China to major markets.',
    category: 'Shipping & Logistics',
    date: 'May 5, 2026',
    readTime: '6 min read',
  },
]

export default function Blog() {
  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">Blog</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">China Sourcing Insights</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Practical guides, tips, and insights to help you source products from China more effectively and with less risk.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-surface border border-border rounded-2xl overflow-hidden">
              <div className="h-64 lg:h-full min-h-[280px]">
                <img
                  data-strk-img-id={`blog-featured-${featured.id}`}
                  data-strk-img={`[${featured.id}-title] ${featured.category}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">Featured</span>
                <span className="inline-block bg-surface-alt text-text-muted text-xs font-medium px-3 py-1 rounded-full mb-4 ml-2">{featured.category}</span>
                <h2 id={`${featured.id}-title`} className="text-2xl font-bold text-text-primary mb-3">{featured.title}</h2>
                <p className="text-text-secondary leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-primary mb-8">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-surface border border-border rounded-xl overflow-hidden hover:shadow-md transition-all group">
                <div className="h-48">
                  <img
                    data-strk-img-id={`blog-${post.id}`}
                    data-strk-img={`[${post.id}-title] ${post.category}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">{post.category}</span>
                  </div>
                  <h3 id={`${post.id}-title`} className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-surface-alt py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-3">Stay Updated</h2>
          <p className="text-text-secondary mb-6">Get sourcing tips, market updates, and practical guides delivered to your inbox.</p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button type="submit" className="bg-primary hover:bg-primary-light text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
