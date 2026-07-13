import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify potential suppliers in China and avoid costly mistakes. From business license checks to on-site factory audits.',
    author: 'SSourcing Team',
    date: 'June 28, 2026',
    category: 'Supplier Verification',
    slug: 'verify-chinese-supplier',
  },
  {
    title: 'A Complete Guide to Quality Inspection in China',
    excerpt: 'Understanding the different types of quality inspections available, when to use each one, and how to implement an effective QC program.',
    author: 'SSourcing Team',
    date: 'June 15, 2026',
    category: 'Quality Control',
    slug: 'quality-inspection-guide',
  },
  {
    title: 'Shipping from China: A Buyer\'s Guide to Logistics',
    excerpt: 'Everything you need to know about shipping goods from China, including freight options, customs clearance, documentation, and cost-saving tips.',
    author: 'SSourcing Team',
    date: 'June 1, 2026',
    category: 'Logistics',
    slug: 'shipping-from-china-guide',
  },
  {
    title: 'Understanding MOQ (Minimum Order Quantity) in China',
    excerpt: 'How MOQs work in Chinese manufacturing, why factories set them, and strategies to negotiate lower minimum order quantities.',
    author: 'SSourcing Team',
    date: 'May 18, 2026',
    category: 'Sourcing Tips',
    slug: 'understanding-moq-china',
  },
  {
    title: 'Top 10 Mistakes to Avoid When Sourcing from China',
    excerpt: 'Learn from common sourcing pitfalls that cost importers time and money. Practical advice for first-time and experienced buyers alike.',
    author: 'SSourcing Team',
    date: 'May 5, 2026',
    category: 'Sourcing Tips',
    slug: 'sourcing-mistakes-to-avoid',
  },
  {
    title: 'Factory Audits vs. Desktop Research: Why On-Site Matters',
    excerpt: 'Why online research is not enough when vetting Chinese suppliers. The critical differences between desktop checks and physical factory audits.',
    author: 'SSourcing Team',
    date: 'April 20, 2026',
    category: 'Supplier Verification',
    slug: 'factory-audits-vs-desktop-research',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers Effectively',
    excerpt: 'Cultural insights and practical strategies for successful negotiations with Chinese manufacturers. Build better relationships and get better terms.',
    author: 'SSourcing Team',
    date: 'April 8, 2026',
    category: 'Sourcing Tips',
    slug: 'negotiate-with-chinese-suppliers',
  },
  {
    title: 'AQL Inspection: What Importers Need to Know',
    excerpt: 'A comprehensive explanation of Acceptable Quality Limit (AQL) sampling standards and how to use them in your quality inspection process.',
    author: 'SSourcing Team',
    date: 'March 25, 2026',
    category: 'Quality Control',
    slug: 'aql-inspection-guide',
  },
  {
    title: 'The Complete Guide to China Trade Shows',
    excerpt: 'How to make the most of major trade shows like Canton Fair. Tips for preparation, supplier meetings, and following up effectively.',
    author: 'SSourcing Team',
    date: 'March 10, 2026',
    category: 'Sourcing Tips',
    slug: 'china-trade-show-guide',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-light pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sourcing Blog</h1>
            <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
              Practical insights, tips, and guides for importers and businesses sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card hover:shadow-md transition-shadow flex flex-col">
                <div className="rounded-lg bg-surface h-48 mb-4 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={`blog-img-${post.slug}`}
                    data-strk-img={`[blog-title-${post.slug}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                  <span id={`blog-title-${post.slug}`} className="hidden">{post.title}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-2 flex-1">{post.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-primary-light hover:text-primary transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}