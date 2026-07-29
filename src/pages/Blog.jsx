import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Clock, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to checking business licenses, visiting factories, and assessing production capabilities before committing to a new supplier.',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-r2s3t4',
  },
  {
    id: 'quality-inspection-checklist',
    title: 'Pre-Shipment Inspection Checklist: What to Check Before Shipping',
    excerpt: 'The essential quality checkpoints every buyer should verify before approving a shipment from China, including AQL sampling and defect classification.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
    imgId: 'blog-qc-img-u5v6w7',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Complete Guide to Shipping from China: FOB, CIF, and DDP Explained',
    excerpt: 'Understanding Incoterms, freight options, and customs procedures when importing goods from China to your country.',
    category: 'Logistics',
    date: 'June 28, 2026',
    readTime: '10 min read',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
    imgId: 'blog-shipping-img-x8y9z1',
  },
  {
    id: 'negotiating-with-chinese-factories',
    title: '7 Tips for Negotiating with Chinese Factories',
    excerpt: 'Practical negotiation strategies that help you secure better pricing, payment terms, and production timelines without damaging supplier relationships.',
    category: 'Negotiation',
    date: 'June 20, 2026',
    readTime: '7 min read',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
    imgId: 'blog-negotiate-img-a2b3c4',
  },
  {
    id: 'avoiding-sourcing-scams',
    title: 'How to Avoid Sourcing Scams: Red Flags Every Buyer Should Know',
    excerpt: 'Common scam patterns in China sourcing and the warning signs that indicate a supplier may not be legitimate or reliable.',
    category: 'Risk Management',
    date: 'June 12, 2026',
    readTime: '9 min read',
    titleId: 'blog-scams-title',
    descId: 'blog-scams-desc',
    imgId: 'blog-scams-img-d5e6f7',
  },
  {
    id: 'product-development-china',
    title: 'Product Development in China: From Concept to Mass Production',
    excerpt: 'How to manage the product development process with Chinese manufacturers, including prototyping, tooling, and design iteration.',
    category: 'Product Development',
    date: 'June 5, 2026',
    readTime: '11 min read',
    titleId: 'blog-dev-title',
    descId: 'blog-dev-desc',
    imgId: 'blog-dev-img-g8h9i1',
  },
]

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Sourcing Blog</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Practical guides, tips, and insights for buying from China — written by our sourcing team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-video bg-neutral-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-neutral-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-sm text-neutral-500 leading-relaxed mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">{post.date}</span>
                    <span className="text-sm font-medium text-primary flex items-center gap-1">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
