import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order. Protect your business from scams and unreliable partners.',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    image: 'Chinese supplier verification factory audit business meeting handshake',
    imgId: 'blog-post-1-img',
    titleId: 'blog-post-1-title',
    descId: 'blog-post-1-desc',
  },
  {
    title: 'Quality Control in China: Inspection Types Explained',
    excerpt: 'Understand the different types of quality inspections available in China and when to use each one for maximum protection.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
    image: 'quality control inspection products testing factory manufacturing',
    imgId: 'blog-post-2-img',
    titleId: 'blog-post-2-title',
    descId: 'blog-post-2-desc',
  },
  {
    title: 'Shipping from China: Sea vs Air vs Rail Freight',
    excerpt: 'Compare the pros, cons, costs, and timelines of different shipping methods from China to help you choose the right option.',
    category: 'Shipping & Logistics',
    date: 'June 30, 2026',
    readTime: '10 min read',
    image: 'shipping container port logistics international freight cargo vessel',
    imgId: 'blog-post-3-img',
    titleId: 'blog-post-3-title',
    descId: 'blog-post-3-desc',
  },
  {
    title: 'Understanding MOQ: Minimum Order Quantities in China',
    excerpt: 'Navigate minimum order quantities with confidence. Learn negotiation strategies and find suppliers who work with smaller orders.',
    category: 'Sourcing Tips',
    date: 'June 22, 2026',
    readTime: '5 min read',
    image: 'warehouse inventory products packaging boxes minimum order quantity',
    imgId: 'blog-post-4-img',
    titleId: 'blog-post-4-title',
    descId: 'blog-post-4-desc',
  },
  {
    title: 'Protecting Your Intellectual Property When Sourcing from China',
    excerpt: 'Essential strategies for protecting your designs, trademarks, and trade secrets when manufacturing products in China.',
    category: 'Legal & Compliance',
    date: 'June 15, 2026',
    readTime: '7 min read',
    image: 'intellectual property protection legal documents trademark registration',
    imgId: 'blog-post-5-img',
    titleId: 'blog-post-5-title',
    descId: 'blog-post-5-desc',
  },
  {
    title: 'Top 10 Mistakes to Avoid When Sourcing from China',
    excerpt: 'Avoid these common pitfalls that cost businesses time and money when sourcing products from Chinese manufacturers.',
    category: 'Sourcing Tips',
    date: 'June 8, 2026',
    readTime: '9 min read',
    image: 'business planning strategy mistakes avoidance sourcing guide',
    imgId: 'blog-post-6-img',
    titleId: 'blog-post-6-title',
    descId: 'blog-post-6-desc',
  },
]

const categories = [
  'All',
  'Supplier Verification',
  'Quality Control',
  'Shipping & Logistics',
  'Sourcing Tips',
  'Legal & Compliance',
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            Sourcing Knowledge & Insights
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Practical guides, tips, and insights to help you source products from China 
            more effectively and avoid common pitfalls.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 py-4 overflow-x-auto">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] sourcing China article guide`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 id={post.titleId} className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Get the latest sourcing tips, industry insights, and market updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
