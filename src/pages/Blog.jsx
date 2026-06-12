import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'

const posts = [
  {
    id: 'post-supplier-verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, visiting factories, and evaluating production capacity before committing to a supplier.',
    category: 'Supplier Verification',
    date: 'June 5, 2026',
    readTime: '8 min read',
    imgId: 'blog-verify-img-p1q2r3',
  },
  {
    id: 'post-quality-inspection',
    title: '5 Common Quality Issues When Sourcing from China (And How to Prevent Them)',
    excerpt: 'Learn about the most frequent quality problems buyers face and the inspection strategies that prevent costly mistakes.',
    category: 'Quality Control',
    date: 'May 28, 2026',
    readTime: '6 min read',
    imgId: 'blog-quality-img-q2r3s4',
  },
  {
    id: 'post-shipping-guide',
    title: 'Complete Guide to Shipping from China: Sea, Air, and Rail',
    excerpt: 'Compare shipping methods, understand Incoterms, and learn how to choose the right freight option for your order size and timeline.',
    category: 'Shipping & Logistics',
    date: 'May 15, 2026',
    readTime: '10 min read',
    imgId: 'blog-shipping-img-r3s4t5',
  },
  {
    id: 'post-moq-negotiation',
    title: 'How to Negotiate MOQ with Chinese Factories',
    excerpt: 'Practical strategies for getting lower minimum order quantities, especially for new products and small businesses.',
    category: 'Negotiation',
    date: 'May 3, 2026',
    readTime: '5 min read',
    imgId: 'blog-moq-img-s4t5u6',
  },
  {
    id: 'post-sourcing-costs',
    title: 'True Cost of Sourcing from China: Beyond Unit Price',
    excerpt: 'Understanding all the costs involved in importing from China — from tooling and samples to shipping, duties, and agent fees.',
    category: 'Cost Analysis',
    date: 'April 20, 2026',
    readTime: '7 min read',
    imgId: 'blog-costs-img-t5u6v7',
  },
  {
    id: 'post-trade-shows',
    title: 'Canton Fair 2026: What Buyers Need to Know',
    excerpt: 'Tips for attending China's largest trade fair, including preparation, supplier evaluation, and follow-up strategies.',
    category: 'Industry Events',
    date: 'April 10, 2026',
    readTime: '6 min read',
    imgId: 'blog-fair-img-u6v7w8',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Practical knowledge to help you source smarter from China. Tips on suppliers, quality, shipping, and more.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.id}-title] [${post.id}-excerpt]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-accent-500 bg-accent-500/10 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 id={`${post.id}-title`} className="text-lg font-semibold text-navy-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={`${post.id}-excerpt`} className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <span className="text-sm font-medium text-accent-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Need Help With Your Sourcing Project?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our team is ready to help you find the right suppliers and manage your orders from China.
          </p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
