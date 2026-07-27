import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'How to Find Reliable Suppliers in China: A Step-by-Step Guide',
    excerpt: 'Learn the proven process for identifying and vetting trustworthy Chinese suppliers for your business, from initial research to factory audits.',
    date: 'July 15, 2026',
    category: 'Sourcing Tips',
    imgId: 'blog-supplier-guide-a1b2c3',
  },
  {
    title: 'The Complete Guide to Quality Inspection in China',
    excerpt: 'Understand the different types of quality inspections, AQL standards, and how to ensure your products meet specifications before shipping.',
    date: 'July 8, 2026',
    category: 'Quality Control',
    imgId: 'blog-quality-inspection-b2c3d4',
  },
  {
    title: 'China Factory Verification: What to Look For During an Audit',
    excerpt: 'A comprehensive checklist for conducting factory audits in China, including legal verification, production capacity, and social compliance.',
    date: 'June 28, 2026',
    category: 'Factory Audit',
    imgId: 'blog-factory-audit-c3d4e5',
  },
  {
    title: 'Shipping from China: Sea Freight vs Air Freight vs Express',
    excerpt: 'Compare the costs, transit times, and best use cases for each shipping method when importing goods from China.',
    date: 'June 20, 2026',
    category: 'Logistics',
    imgId: 'blog-shipping-compare-d4e5f6',
  },
  {
    title: 'Understanding MOQs: How to Negotiate Minimum Order Quantities',
    excerpt: 'Tips and strategies for negotiating lower minimum order quantities with Chinese suppliers, especially for small and medium businesses.',
    date: 'June 10, 2026',
    category: 'Negotiation',
    imgId: 'blog-moq-guide-e5f6a7',
  },
  {
    title: 'Common Mistakes When Sourcing from China and How to Avoid Them',
    excerpt: 'Learn from the most common pitfalls importers face when sourcing from China and how to protect your business.',
    date: 'May 28, 2026',
    category: 'Sourcing Tips',
    imgId: 'blog-mistakes-guide-f6a7b8',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-500 py-16 md:py-24" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Practical insights and guides for sourcing products from China.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-white rounded-xl border border-surface-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-44 bg-surface-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.imgId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-surface-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 id={`blog-title-${post.imgId}`} className="text-base font-semibold text-surface-800 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-surface-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-1 text-brand-500 text-sm font-medium hover:text-brand-600 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}