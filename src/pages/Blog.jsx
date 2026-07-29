import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const posts = [
  {
    id: 'post-1',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A step-by-step guide to checking business licenses, visiting factories, and evaluating supplier reliability before committing to a purchase order.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    imgId: 'blog-post1-a1b2c3',
    titleId: 'blog-post1-title',
    descId: 'blog-post1-desc',
  },
  {
    id: 'post-2',
    title: '5 Common Quality Issues When Importing from China (And How to Prevent Them)',
    excerpt: 'Learn about the most frequent quality problems buyers face and the inspection protocols that prevent them from reaching your warehouse.',
    category: 'Quality Control',
    date: '2026-07-08',
    imgId: 'blog-post2-d4e5f6',
    titleId: 'blog-post2-title',
    descId: 'blog-post2-desc',
  },
  {
    id: 'post-3',
    title: 'Understanding Incoterms: FOB vs CIF vs DDP for China Imports',
    excerpt: 'A practical breakdown of shipping terms, who pays what, and which Incoterm makes sense for your specific situation.',
    category: 'Shipping',
    date: '2026-06-28',
    imgId: 'blog-post3-g7h8i9',
    titleId: 'blog-post3-title',
    descId: 'blog-post3-desc',
  },
  {
    id: 'post-4',
    title: 'How to Negotiate with Chinese Suppliers: Practical Tips',
    excerpt: 'Effective negotiation strategies that go beyond just asking for a lower price. Build better supplier relationships and get better deals.',
    category: 'Negotiation',
    date: '2026-06-20',
    imgId: 'blog-post4-j0k1l2',
    titleId: 'blog-post4-title',
    descId: 'blog-post4-desc',
  },
  {
    id: 'post-5',
    title: 'Canton Fair vs. Online Sourcing: Which Approach Works Better?',
    excerpt: 'Comparing trade show sourcing with online platforms like Alibaba. When to use each approach and how to combine them effectively.',
    category: 'Sourcing Strategy',
    date: '2026-06-12',
    imgId: 'blog-post5-m3n4o5',
    titleId: 'blog-post5-title',
    descId: 'blog-post5-desc',
  },
  {
    id: 'post-6',
    title: 'What Does a Pre-Shipment Inspection Include?',
    excerpt: 'A detailed look at what QC inspectors check, how AQL sampling works, and what to do if your inspection fails.',
    category: 'Quality Control',
    date: '2026-06-05',
    imgId: 'blog-post6-p6q7r8',
    titleId: 'blog-post6-title',
    descId: 'blog-post6-desc',
  },
]

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        title="Sourcing Insights & Guides"
        subtitle="Practical advice for international buyers sourcing products from China. Learn from our experience."
      />

      <section ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-neutral-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-neutral-800 mb-2 line-clamp-2">{post.title}</h3>
                  <p id={post.descId} className="text-sm text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Have a Sourcing Question?"
        subtitle="Our team is happy to answer your questions about buying from China."
        buttonText="Contact Us"
      />
    </>
  )
}

export default Blog
