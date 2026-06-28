import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'A step-by-step guide to conducting due diligence on Chinese suppliers, including business license checks, factory audits, and reference verification. Learn what red flags to watch for and what questions to ask.',
    category: 'Supplier Verification',
    date: 'June 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-supplier-1a2b',
    query: 'supplier verification factory audit',
  },
  {
    title: 'Understanding Quality Control Standards for China Manufacturing',
    excerpt: 'An overview of the most common quality control standards and inspection methods used in China, including AQL sampling, ISO certifications, and industry-specific compliance requirements for different product categories.',
    category: 'Quality Control',
    date: 'June 1, 2026',
    readTime: '10 min read',
    imgId: 'blog-qc-standards-3c4d',
    query: 'quality control standards inspection manufacturing',
  },
  {
    title: 'Sea Freight vs Air Freight: Choosing the Right Shipping Method from China',
    excerpt: 'A practical comparison of sea and air freight for China imports, covering cost, transit time, documentation requirements, and when each option makes the most sense for your business.',
    category: 'Shipping & Logistics',
    date: 'May 18, 2026',
    readTime: '7 min read',
    imgId: 'blog-shipping-5e6f',
    query: 'sea freight air freight shipping logistics',
  },
  {
    title: 'Negotiating Prices with Chinese Suppliers: Practical Tips That Work',
    excerpt: 'Effective negotiation strategies for working with Chinese suppliers, from understanding the cultural context to structuring offers that build long-term relationships while securing competitive pricing.',
    category: 'Sourcing Tips',
    date: 'May 5, 2026',
    readTime: '9 min read',
    imgId: 'blog-negotiation-7g8h',
    query: 'business negotiation supplier meeting',
  },
  {
    title: 'Import Duties and Tariffs: What Every Buyer Needs to Know in 2026',
    excerpt: 'An updated overview of import duties, tariffs, and trade regulations affecting China imports into major markets including the US, EU, and Australia. Includes practical guidance on HS codes and duty calculations.',
    category: 'Trade Compliance',
    date: 'April 22, 2026',
    readTime: '11 min read',
    imgId: 'blog-tariffs-9i0j',
    query: 'trade compliance import duties tariffs',
  },
  {
    title: 'Private Label Manufacturing in China: A Complete Guide',
    excerpt: 'Everything you need to know about launching private label products manufactured in China, from finding the right factory to managing packaging design, quality control, and trademark registration.',
    category: 'Product Development',
    date: 'April 8, 2026',
    readTime: '12 min read',
    imgId: 'blog-private-label-k1l2',
    query: 'private label manufacturing product packaging',
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
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Sourcing Insights
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Blog & Resources
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Practical guides and expert insights to help you source products from China
              more effectively, avoid common pitfalls, and make informed procurement decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-bg-light rounded-lg border border-border overflow-hidden">
            <div className="aspect-[16/10] overflow-hidden bg-bg-card">
              <img
                data-strk-img-id={blogPosts[0].imgId}
                data-strk-img={`[blog-featured] ${blogPosts[0].query}`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                  Featured
                </span>
                <span className="bg-primary/5 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                {blogPosts[0].title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-5">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center gap-1.5 text-text-muted text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1.5 text-text-muted text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-hover transition-colors cursor-pointer">
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-primary mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <article key={post.title} className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[16/10] overflow-hidden bg-bg-card">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.title.replace(/\s+/g, '-').toLowerCase().slice(0, 40)}] ${post.query}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-text-muted text-xs">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-text-muted text-xs">
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

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-bg-light">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Stay Updated on China Sourcing
          </h2>
          <p className="text-text-secondary mb-6">
            Get practical sourcing tips, market updates, and expert insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-border text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
            <button className="bg-accent text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-accent-hover transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
