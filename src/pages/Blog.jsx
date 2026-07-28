import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const blogPosts = [
  {
    id: 'verify-supplier',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to checking business licenses, factory credentials, and production capacity before committing to a supplier in China.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-verify-a1b2c3',
  },
  {
    id: 'quality-control',
    title: 'Quality Control in China: What Every Buyer Should Know',
    excerpt: 'Understanding the different types of quality inspections, when to use them, and how to interpret inspection reports from your sourcing agent.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '6 min read',
    imgId: 'blog-qc-d4e5f6',
  },
  {
    id: 'shipping-guide',
    title: 'Shipping from China: A Beginner Guide to Freight and Customs',
    excerpt: 'Everything you need to know about FOB, CIF, EXW incoterms, freight forwarding, and customs clearance when importing from China.',
    category: 'Shipping',
    date: '2026-06-28',
    readTime: '10 min read',
    imgId: 'blog-shipping-g7h8i9',
  },
  {
    id: 'avoid-scams',
    title: 'Common Sourcing Scams in China and How to Avoid Them',
    excerpt: 'Learn about the most common fraud tactics used by unreliable suppliers and how proper verification can protect your business.',
    category: 'Risk Management',
    date: '2026-06-20',
    readTime: '7 min read',
    imgId: 'blog-scams-j1k2l3',
  },
  {
    id: 'negotiation',
    title: 'Negotiating with Chinese Suppliers: Tips from Our Sourcing Team',
    excerpt: 'Practical negotiation strategies that work with Chinese manufacturers, based on years of experience managing buyer-supplier relationships.',
    category: 'Negotiation',
    date: '2026-06-12',
    readTime: '5 min read',
    imgId: 'blog-negotiate-m4n5o6',
  },
  {
    id: 'moq',
    title: 'Understanding MOQ: How to Work with Minimum Order Quantities',
    excerpt: 'What MOQ means, why Chinese factories set them, and strategies for negotiating lower minimums when you are starting out.',
    category: 'Sourcing Tips',
    date: '2026-06-05',
    readTime: '6 min read',
    imgId: 'blog-moq-p7q8r9',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Blog</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 mb-4">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Practical advice, industry insights, and step-by-step guides to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card group overflow-hidden">
                <div
                  className="aspect-video rounded-t-lg -mx-6 -mt-6 mb-4 bg-slate-100"
                  data-strk-bg-id={post.imgId}
                  data-strk-bg={`[${post.id}-title] [${post.category}-category]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h3 id={`${post.id}-title`} className="heading-3 mb-2 group-hover:text-blue-800 transition-colors">
                  {post.title}
                </h3>
                <p className="body-text text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <button className="inline-flex items-center text-blue-800 font-medium text-sm hover:text-blue-700">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="heading-2 mb-4">Stay Updated on China Sourcing</h2>
          <p className="body-text mb-6">
            Get practical sourcing tips, industry updates, and guides delivered to your inbox. No spam, just useful information.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
