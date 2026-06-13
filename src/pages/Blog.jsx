import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to verifying the legitimacy and capability of potential suppliers in China, including business license checks, factory audits, and reference verification.',
    date: '2026-05-15',
    category: 'Supplier Verification',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'Understanding Quality Inspection Standards in China Manufacturing',
    excerpt: 'Learn about AQL sampling, inspection levels, and how to set quality standards that protect your products and your brand reputation.',
    date: '2026-04-28',
    category: 'Quality Control',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'The Complete Guide to Shipping from China: Sea, Air, and Express',
    excerpt: 'Compare shipping methods, understand costs and timelines, and learn how to choose the right freight option for your products.',
    date: '2026-04-10',
    category: 'Shipping & Logistics',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'From inadequate supplier vetting to poor communication, learn the most common pitfalls and how experienced sourcing agents help you avoid them.',
    date: '2026-03-22',
    category: 'Sourcing Tips',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Manufacturers: A Practical Guide',
    excerpt: 'Effective negotiation strategies for working with Chinese suppliers, including cultural considerations, pricing tactics, and building long-term relationships.',
    date: '2026-03-05',
    category: 'Negotiation',
    readTime: '9 min read',
  },
  {
    id: 6,
    title: 'Understanding MOQs: Minimum Order Quantities in China',
    excerpt: 'What MOQs are, why they matter, and strategies for negotiating lower minimums when you are starting out or testing new products.',
    date: '2026-02-18',
    category: 'Sourcing Tips',
    readTime: '5 min read',
  },
  {
    id: 7,
    title: 'Factory Audit Checklist: What to Look For During a Site Visit',
    excerpt: 'A comprehensive checklist for evaluating factories during on-site audits, covering production capacity, quality systems, and compliance.',
    date: '2026-02-01',
    category: 'Factory Verification',
    readTime: '12 min read',
  },
  {
    id: 8,
    title: 'Import Regulations and Customs: What Every Buyer Should Know',
    excerpt: 'Navigate import regulations, customs documentation, and compliance requirements when bringing products from China to your market.',
    date: '2026-01-15',
    category: 'Shipping & Logistics',
    readTime: '8 min read',
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
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sourcing Insights & Guides</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Practical advice and expert insights to help you source confidently from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  Read more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom text-center">
          <h2 className="section-title">Stay Updated on China Sourcing</h2>
          <p className="section-subtitle">
            Get practical sourcing tips, industry insights, and updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your Sourcing?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you find reliable suppliers and ensure quality production.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
