import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

const blogPosts = [
  {
    id: 'blog-supplier-verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to the key checks you should perform before committing to a new supplier in China, including business license verification, factory visits, and reference checks.',
    category: 'Supplier Management',
    date: 'June 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-img-1a2b3c',
  },
  {
    id: 'blog-quality-inspection',
    title: '5 Common Quality Issues When Importing from China (And How to Prevent Them)',
    excerpt: 'Learn about the most frequent quality problems buyers face and the inspection strategies that can catch defects before goods leave the factory.',
    category: 'Quality Control',
    date: 'June 8, 2026',
    readTime: '6 min read',
    imgId: 'blog-quality-img-2b3c4d',
  },
  {
    id: 'blog-shipping-guide',
    title: 'Complete Guide to Shipping from China: Sea vs Air vs Express',
    excerpt: 'Compare shipping methods, costs, transit times, and documentation requirements to choose the best option for your next import shipment.',
    category: 'Logistics',
    date: 'May 28, 2026',
    readTime: '10 min read',
    imgId: 'blog-ship-img-3c4d5e',
  },
  {
    id: 'blog-negotiation-tips',
    title: 'Negotiation Tips: How to Get Better Prices from Chinese Factories',
    excerpt: 'Practical negotiation strategies that work in the Chinese business context, from understanding cost structures to building long-term relationships.',
    category: 'Negotiation',
    date: 'May 20, 2026',
    readTime: '7 min read',
    imgId: 'blog-negotiate-img-4d5e6f',
  },
  {
    id: 'blog-moq-strategies',
    title: 'How to Handle MOQ Requirements When Starting Small',
    excerpt: 'Strategies for working with Chinese manufacturers when your order quantities are below their standard minimums, without sacrificing quality.',
    category: 'Sourcing Strategy',
    date: 'May 12, 2026',
    readTime: '5 min read',
    imgId: 'blog-moq-img-5e6f7g',
  },
  {
    id: 'blog-factory-audit',
    title: 'What to Look for During a Factory Audit in China',
    excerpt: 'A detailed checklist of what our auditors evaluate during on-site factory visits, from production capacity to worker safety and environmental compliance.',
    category: 'Factory Audit',
    date: 'May 5, 2026',
    readTime: '9 min read',
    imgId: 'blog-audit-img-6f7g8h',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Resources</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Blog & Guides
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Practical insights, guides, and tips for sourcing products from China — written by our experienced sourcing team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.id}-excerpt] [${post.id}-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">{post.category}</span>
                  <h2 id={`${post.id}-title`} className="text-lg font-semibold text-text-primary mb-2 leading-snug">{post.title}</h2>
                  <p id={`${post.id}-excerpt`} className="text-text-secondary text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-text-muted text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Stay Updated</h2>
          <p className="text-text-secondary text-lg mb-8">Get sourcing tips, market updates, and industry insights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
            <button className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-lg text-sm border-none cursor-pointer transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
