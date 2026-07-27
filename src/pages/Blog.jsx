import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTABanner from '@/components/shared/CTABanner'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const posts = [
  {
    id: 'how-to-find-suppliers',
    title: 'How to Find Reliable Suppliers in China: A Complete Guide',
    excerpt: 'Finding trustworthy manufacturers in China requires more than a quick Alibaba search. Learn the proven methods professional sourcing agents use to identify and vet suppliers.',
    category: 'Sourcing Tips',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-suppliers-2a3b4c',
    titleId: 'blog-suppliers-title',
    descId: 'blog-suppliers-desc',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Look for When Visiting Chinese Factories',
    excerpt: 'A comprehensive checklist covering the key areas to evaluate during a factory audit — from production capacity to quality systems and compliance.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
    imgId: 'blog-audit-5d6e7f',
    titleId: 'blog-audit-title',
    descId: 'blog-audit-desc',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: Sea Freight vs Air Freight — Which to Choose?',
    excerpt: 'Understanding the trade-offs between sea and air freight helps you make better logistics decisions. We break down costs, timelines, and when to use each option.',
    category: 'Logistics',
    date: '2026-06-28',
    readTime: '5 min read',
    imgId: 'blog-shipping-8g9h0i',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'avoid-sourcing-scams',
    title: '7 Common China Sourcing Scams and How to Avoid Them',
    excerpt: 'From fake factories to bait-and-switch tactics, learn how to spot red flags and protect your business when sourcing products from China.',
    category: 'Risk Management',
    date: '2026-06-20',
    readTime: '7 min read',
    imgId: 'blog-scams-1j2k3l',
    titleId: 'blog-scams-title',
    descId: 'blog-scams-desc',
  },
  {
    id: 'negotiate-with-chinese-suppliers',
    title: 'How to Negotiate with Chinese Suppliers: Strategies That Work',
    excerpt: 'Effective negotiation with Chinese manufacturers goes beyond price. Learn cultural nuances and practical tactics to get better terms and build lasting relationships.',
    category: 'Sourcing Tips',
    date: '2026-06-12',
    readTime: '6 min read',
    imgId: 'blog-negotiate-4m5n6o',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 'quality-inspection-guide',
    title: 'Pre-Shipment Inspection: Why It Matters and What to Expect',
    excerpt: 'A pre-shipment inspection is your last line of defense against quality issues. Learn what inspectors check, how AQL sampling works, and when to reject a shipment.',
    category: 'Quality Control',
    date: '2026-06-05',
    readTime: '5 min read',
    imgId: 'blog-inspection-7p8q9r',
    titleId: 'blog-inspection-title',
    descId: 'blog-inspection-desc',
  },
]

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Sourcing Blog</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Practical guides, tips, and insights to help you source smarter from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden bg-surface">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-base font-semibold text-text-primary mb-2 leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-sm text-text-secondary leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-navy group-hover:text-accent transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}

export default Blog
