import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Factory in 5 Steps',
    excerpt:
      'Before placing an order, you need to know if the factory is real, capable, and reliable. Here is a practical checklist based on hundreds of audits we have conducted.',
    category: 'Factory Verification',
    date: 'June 15, 2026',
    readTime: '6 min read',
    imgId: 'blog-factory-verify-1a2b3c',
  },
  {
    title: 'Understanding AQL Standards for Quality Inspection',
    excerpt:
      'AQL (Acceptable Quality Level) is the industry standard for product inspection. Learn how to set the right AQL level for your product category and risk tolerance.',
    category: 'Quality Control',
    date: 'June 8, 2026',
    readTime: '8 min read',
    imgId: 'blog-aql-standards-2b3c4d',
  },
  {
    title: 'Incoterms Explained for China Buyers',
    excerpt:
      'FOB, CIF, DDP — which shipping term should you choose when importing from China? We break down the costs, risks, and responsibilities for each term.',
    category: 'Shipping & Logistics',
    date: 'May 28, 2026',
    readTime: '7 min read',
    imgId: 'blog-incoterms-3c4d5e',
  },
  {
    title: 'Red Flags When Sourcing on Alibaba',
    excerpt:
      'Alibaba is a powerful tool, but not every supplier listing is trustworthy. Here are warning signs we look for when evaluating potential manufacturers.',
    category: 'Supplier Sourcing',
    date: 'May 20, 2026',
    readTime: '5 min read',
    imgId: 'blog-alibaba-4d5e6f',
  },
  {
    title: 'How to Write a Product Spec Sheet That Chinese Factories Understand',
    excerpt:
      'Clear specifications reduce miscommunication, samples, and costly revisions. Here is our template and best practices for spec sheets that factories can execute.',
    category: 'Product Development',
    date: 'May 12, 2026',
    readTime: '6 min read',
    imgId: 'blog-spec-sheet-5e6f7g',
  },
  {
    title: 'Navigating Chinese New Year Production Shutdowns',
    excerpt:
      'Factory closures during CNY can disrupt your supply chain for 4–6 weeks. Here is how to plan ahead and avoid stockouts during Q1.',
    category: 'Operations',
    date: 'April 30, 2026',
    readTime: '4 min read',
    imgId: 'blog-cny-6f7g8h',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
            Insights
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Blog & Resources
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            Practical guides, industry insights, and lessons learned from managing sourcing projects in China.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col bg-surface rounded-lg border border-border-light overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title] [blog-${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                  <h3
                    id={`blog-${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`}
                    className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors"
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 pt-3 border-t border-slate-200">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
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
    </div>
  )
}
