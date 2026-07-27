import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 'how-to-verify-chinese-suppliers',
    title: 'How to Verify Chinese Suppliers: A Complete Guide for 2024',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order. From business license checks to on-site factory audits, this guide covers everything you need to know.',
    category: 'Supplier Verification',
    readTime: '8 min read',
    date: 'June 15, 2024',
    imgId: 'blog-verify-suppliers-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'quality-control-china-sourcing',
    title: 'Quality Control in China Sourcing: Inspection Types Explained',
    excerpt: 'Understand the different types of quality inspections available when sourcing from China, including pre-production, in-line, and pre-shipment inspections, and when to use each one.',
    category: 'Quality Control',
    readTime: '6 min read',
    date: 'May 28, 2024',
    imgId: 'blog-qc-inspection-d4e5f6',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
  },
  {
    id: 'shipping-from-china-guide',
    title: 'Shipping from China: Sea, Air, and Rail Compared',
    excerpt: 'A detailed comparison of shipping methods from China including cost, transit time, and best use cases for sea freight, air freight, and China-Europe rail.',
    category: 'Logistics',
    readTime: '10 min read',
    date: 'May 12, 2024',
    imgId: 'blog-shipping-guide-g7h8i9',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
  },
  {
    id: 'common-sourcing-mistakes',
    title: '7 Common Mistakes When Sourcing from China (And How to Avoid Them)',
    excerpt: 'Avoid costly mistakes that many first-time and even experienced importers make when sourcing products from Chinese manufacturers.',
    category: 'Sourcing Tips',
    readTime: '7 min read',
    date: 'April 20, 2024',
    imgId: 'blog-common-mistakes-j1k2l3',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
  {
    id: 'customs-compliance-guide',
    title: 'Customs and Compliance: What Every Importer Needs to Know',
    excerpt: 'Navigate the complex world of customs regulations, import duties, and product compliance requirements for importing goods from China.',
    category: 'Compliance',
    readTime: '9 min read',
    date: 'April 5, 2024',
    imgId: 'blog-customs-compliance-m4n5o6',
    titleId: 'blog-customs-title',
    descId: 'blog-customs-desc',
  },
  {
    id: 'negotiating-with-chinese-suppliers',
    title: 'Effective Negotiation Strategies with Chinese Suppliers',
    excerpt: 'Learn cultural context and practical tactics for negotiating better prices, payment terms, and delivery schedules with Chinese manufacturers.',
    category: 'Sourcing Tips',
    readTime: '6 min read',
    date: 'March 18, 2024',
    imgId: 'blog-negotiation-p7q8r9',
    titleId: 'blog-negotiation-title',
    descId: 'blog-negotiation-desc',
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
      {/* Hero */}
      <section className="bg-primary-800 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            China Sourcing Blog
          </h1>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Practical guides, industry insights, and expert advice to help you source
            products from China more effectively.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  data-strk-img-id={blogPosts[0].imgId}
                  data-strk-img={`[${blogPosts[0].descId}] [${blogPosts[0].titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-gray-400 text-xs">Featured</span>
                </div>
                <h2 id={blogPosts[0].titleId} className="text-2xl lg:text-3xl font-bold text-primary-800 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p id={blogPosts[0].descId} className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {blogPosts[0].readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary-500 font-semibold cursor-pointer hover:text-primary-700">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-800 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary-50 text-primary-600 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-bold text-primary-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">
            Stay Updated on China Sourcing
          </h2>
          <p className="text-gray-600 mb-6">
            Get our latest sourcing guides, market updates, and industry insights delivered to your inbox.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors no-underline"
          >
            Subscribe to Updates <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
