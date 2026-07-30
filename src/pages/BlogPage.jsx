import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Clock, ArrowRight } from 'lucide-react'
import CTASection from '@/components/CTASection'

const posts = [
  {
    id: 'blog-supplier-verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to checking business licenses, visiting factories, and validating production capabilities before committing to a new supplier.',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'blog-quality-inspection',
    title: '5 Common Quality Issues When Sourcing from China (And How to Prevent Them)',
    excerpt: 'Learn about the most frequent quality problems buyers face and the inspection strategies that prevent costly mistakes.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
    imgId: 'blog-quality-img-d4e5f6',
  },
  {
    id: 'blog-shipping-guide',
    title: 'Complete Guide to Shipping from China: Sea, Air, and Rail Compared',
    excerpt: 'Compare transit times, costs, and best use cases for each shipping method when importing goods from China.',
    category: 'Logistics',
    date: 'June 28, 2026',
    readTime: '10 min read',
    imgId: 'blog-shipping-img-g7h8i9',
  },
  {
    id: 'blog-negotiation',
    title: 'Negotiating with Chinese Suppliers: Dos and Don\'ts',
    excerpt: 'Cultural insights and practical tactics for getting better prices and terms without damaging supplier relationships.',
    category: 'Negotiation',
    date: 'June 20, 2026',
    readTime: '7 min read',
    imgId: 'blog-negotiation-img-j1k2l3',
  },
  {
    id: 'blog-moq',
    title: 'How to Get Lower MOQs from Chinese Manufacturers',
    excerpt: 'Strategies for startups and small businesses to negotiate minimum order quantities that fit their budget and storage capacity.',
    category: 'Sourcing Tips',
    date: 'June 12, 2026',
    readTime: '5 min read',
    imgId: 'blog-moq-img-m4n5o6',
  },
  {
    id: 'blog-trade-shows',
    title: 'Top China Trade Shows for Product Sourcing in 2026',
    excerpt: 'A curated list of the most valuable trade fairs for international buyers, including Canton Fair, Global Sources, and industry-specific events.',
    category: 'Industry News',
    date: 'June 5, 2026',
    readTime: '6 min read',
    imgId: 'blog-trade-img-p7q8r9',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Blog & Resources
            </span>
            <h1 id="blog-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              China Sourcing Insights
            </h1>
            <p id="blog-page-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
              Practical guides, industry updates, and expert tips to help you source from China more effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group">
                <img
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.id}-excerpt] [${post.id}-title] [blog-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-navy bg-navy/10 px-2 py-1 rounded-full">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={`${post.id}-title`} className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-navy transition-colors">
                    {post.title}
                  </h2>
                  <p id={`${post.id}-excerpt`} className="text-slate-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-navy-light transition-colors">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
