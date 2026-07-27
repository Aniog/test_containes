import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/home/SectionHeader'

const posts = [
  {
    id: 'post-1',
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps for verifying Chinese manufacturers before placing an order, from business license checks to on-site factory audits.',
    date: 'July 15, 2026',
    readTime: '8 min read',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    imgId: 'blog-verify-supplier-1',
  },
  {
    id: 'post-2',
    title: 'Understanding China Quality Control: AQL Standards Explained',
    excerpt: 'A practical guide to AQL (Acceptable Quality Level) sampling standards used in China quality inspections, and how to choose the right level for your products.',
    date: 'July 8, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    imgId: 'blog-aql-standards-2',
  },
  {
    id: 'post-3',
    title: 'FOB vs CIF vs EXW: Shipping Terms Every Importer Should Know',
    excerpt: 'Clear explanations of common international shipping terms (Incoterms), their pros and cons, and how to choose the best option for your imports from China.',
    date: 'June 28, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
    category: 'Shipping & Logistics',
    imgId: 'blog-shipping-terms-3',
  },
  {
    id: 'post-4',
    title: 'Top 10 Product Categories to Source from China in 2026',
    excerpt: 'Our analysis of the most competitive product categories for sourcing from China this year, based on supplier capability, pricing trends, and global demand.',
    date: 'June 20, 2026',
    readTime: '5 min read',
    author: 'SSourcing China Team',
    category: 'Sourcing Strategy',
    imgId: 'blog-top-categories-4',
  },
  {
    id: 'post-5',
    title: 'The True Cost of a Cheap Supplier: A Cautionary Tale',
    excerpt: 'Why the lowest price often costs more in the long run. Real examples of quality failures, hidden costs, and how to evaluate total cost of ownership.',
    date: 'June 12, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
    category: 'Sourcing Strategy',
    imgId: 'blog-cheap-supplier-5',
  },
  {
    id: 'post-6',
    title: 'China Factory Audit Checklist: What to Look For On-Site',
    excerpt: 'A comprehensive checklist for conducting factory audits in China, covering production capability, quality systems, social compliance, and facility conditions.',
    date: 'June 5, 2026',
    readTime: '10 min read',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    imgId: 'blog-factory-audit-6',
  },
  {
    id: 'post-7',
    title: 'Managing Chinese New Year Production Shutdowns: A Buyer\'s Guide',
    excerpt: 'How to plan ahead for the annual Chinese New Year production shutdown, avoid delays, and keep your supply chain running smoothly during the holiday period.',
    date: 'May 28, 2026',
    readTime: '5 min read',
    author: 'SSourcing China Team',
    category: 'Production Management',
    imgId: 'blog-cny-shutdown-7',
  },
  {
    id: 'post-8',
    title: 'Product Packaging Requirements for International Shipping from China',
    excerpt: 'Essential packaging standards, labeling requirements, and best practices to ensure your products arrive safely and comply with import regulations.',
    date: 'May 20, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
    category: 'Shipping & Logistics',
    imgId: 'blog-packaging-8',
  },
  {
    id: 'post-9',
    title: 'How to Negotiate with Chinese Suppliers: 10 Practical Tips',
    excerpt: 'Proven negotiation strategies for working with Chinese manufacturers, including cultural considerations, pricing tactics, and relationship building.',
    date: 'May 12, 2026',
    readTime: '8 min read',
    author: 'SSourcing China Team',
    category: 'Sourcing Strategy',
    imgId: 'blog-negotiate-9',
  },
]

const categories = [
  'All Posts',
  'Sourcing Strategy',
  'Supplier Verification',
  'Quality Control',
  'Shipping & Logistics',
  'Production Management',
]

export default function Blog() {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent-400 font-medium text-sm mb-3">BLOG</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Sourcing Insights & Guides</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Practical advice, industry insights, and expert guides to help you source smarter from China.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-50 text-slate-600 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
                <div className="aspect-[16/9] bg-slate-200 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block bg-brand-50 text-brand-600 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 id={`blog-${post.id}-title`} className="text-lg font-semibold text-brand-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <User className="w-3.5 h-3.5" /> {post.author}
                    </span>
                    <span className="text-brand-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-3">Get Sourcing Insights in Your Inbox</h2>
          <p className="text-slate-500 mb-6">Practical tips and guides for sourcing from China. No spam, unsubscribe anytime.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 h-11 rounded-lg border border-slate-200 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <Button variant="accent" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a specific sourcing question?</h2>
          <p className="text-slate-200 mb-8">Our team is happy to help. Contact us for a free consultation.</p>
          <Button variant="accent" size="xl" onClick={() => navigate('/contact')}>
            Talk to Our Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}