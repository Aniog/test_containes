import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const posts = [
  {
    id: 'post-1',
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify a Chinese supplier before placing your first order — from business license checks to on-site factory audits.',
    date: '2026-07-15',
    author: 'David Chen',
    category: 'Supplier Verification',
    imgId: 'blog-post-1-verify-a1b2c3',
    titleId: 'blog-1-title',
    descId: 'blog-1-excerpt',
  },
  {
    id: 'post-2',
    title: 'Understanding Incoterms: FOB vs CIF vs EXW for China Imports',
    excerpt: 'A practical guide to choosing the right Incoterm for your China sourcing deals. We break down the pros, cons, and hidden costs of each option.',
    date: '2026-07-08',
    author: 'Lisa Wang',
    category: 'Shipping & Logistics',
    imgId: 'blog-post-2-incoterms-d4e5f6',
    titleId: 'blog-2-title',
    descId: 'blog-2-excerpt',
  },
  {
    id: 'post-3',
    title: 'The True Cost of Sourcing from China in 2026',
    excerpt: 'Beyond the unit price: a detailed breakdown of all costs involved in sourcing from China, including tooling, shipping, duties, and quality control.',
    date: '2026-06-28',
    author: 'David Chen',
    category: 'Sourcing Strategy',
    imgId: 'blog-post-3-costs-g7h8i9',
    titleId: 'blog-3-title',
    descId: 'blog-3-excerpt',
  },
  {
    id: 'post-4',
    title: 'AQL Quality Inspections: What Every Buyer Must Know',
    excerpt: 'How Acceptable Quality Level (AQL) sampling works, what inspection levels to choose, and how to set defect tolerances for your products.',
    date: '2026-06-20',
    author: 'Michael Zhang',
    category: 'Quality Control',
    imgId: 'blog-post-4-aql-j0k1l2',
    titleId: 'blog-4-title',
    descId: 'blog-4-excerpt',
  },
  {
    id: 'post-5',
    title: 'Top 10 Manufacturing Hubs in China and What They Produce',
    excerpt: 'A region-by-region guide to China\'s major manufacturing clusters — from Shenzhen electronics to Yiwu consumer goods to Qingdao textiles.',
    date: '2026-06-12',
    author: 'Lisa Wang',
    category: 'Industry Insights',
    imgId: 'blog-post-5-hubs-m3n4o5',
    titleId: 'blog-5-title',
    descId: 'blog-5-excerpt',
  },
  {
    id: 'post-6',
    title: 'How to Avoid the 5 Most Common China Sourcing Mistakes',
    excerpt: 'From skipping factory audits to poor contract terms — the most frequent mistakes importers make and how to protect yourself from costly errors.',
    date: '2026-06-05',
    author: 'David Chen',
    category: 'Sourcing Strategy',
    imgId: 'blog-post-6-mistakes-p6q7r8',
    titleId: 'blog-6-title',
    descId: 'blog-6-excerpt',
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
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm tracking-wide uppercase mb-3">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Insights on China Sourcing & Supply Chain
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert guides, practical tips, and industry insights to help you source smarter
            and build a reliable supply chain in China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] China sourcing blog`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-50 text-brand-700 rounded-full font-medium">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-bold text-navy-950 mb-2 line-clamp-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-brand-600 text-sm font-medium hover:text-brand-700 transition-colors"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want Expert Sourcing Advice?"
        subtitle="Subscribe to our newsletter for the latest insights on sourcing, quality control, and supply chain management."
        buttonText="Subscribe to Newsletter"
      />
    </div>
  )
}
