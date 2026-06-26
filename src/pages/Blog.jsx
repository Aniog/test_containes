import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 1,
    category: 'Sourcing Tips',
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'Learn the key steps to independently verify a supplier\'s capabilities, including document checks, on-site visits, and third-party audits.',
    date: 'June 15, 2026',
    author: 'SSourcing Team',
    readTime: '6 min read',
  },
  {
    id: 2,
    category: 'Quality Control',
    title: 'A Guide to Pre-Shipment Inspections for Importers',
    excerpt: 'Understand the AQL standards, what inspectors check, and how pre-shipment inspections protect your business from defective goods.',
    date: 'June 8, 2026',
    author: 'SSourcing Team',
    readTime: '8 min read',
  },
  {
    id: 3,
    category: 'Logistics',
    title: 'Sea Freight vs Air Freight from China: Which Is Right for You?',
    excerpt: 'A practical comparison of shipping methods including cost, transit time, and when each option makes sense for your business.',
    date: 'May 28, 2026',
    author: 'SSourcing Team',
    readTime: '5 min read',
  },
  {
    id: 4,
    category: 'Supplier Management',
    title: '5 Red Flags to Watch for When Dealing with Chinese Suppliers',
    excerpt: 'Warning signs that indicate a supplier may not be reliable, from unrealistic pricing to reluctance about factory visits.',
    date: 'May 20, 2026',
    author: 'SSourcing Team',
    readTime: '7 min read',
  },
  {
    id: 5,
    category: 'Sourcing Tips',
    title: 'MOQ Explained: How to Negotiate Minimum Order Quantities in China',
    excerpt: 'Strategies for negotiating lower MOQs with Chinese manufacturers, especially for small businesses testing new products.',
    date: 'May 12, 2026',
    author: 'SSourcing Team',
    readTime: '6 min read',
  },
  {
    id: 6,
    category: 'Industry Insights',
    title: 'The State of Manufacturing in China: 2026 Update',
    excerpt: 'An overview of current trends in Chinese manufacturing including shifts in production hubs, labor costs, and quality standards.',
    date: 'May 5, 2026',
    author: 'SSourcing Team',
    readTime: '10 min read',
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
      <section className="bg-gradient-to-br from-[#0F2B44] to-[#1B4A7A] text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Practical advice, industry insights, and tips for sourcing products from China successfully.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={post.id} className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-50 overflow-hidden">
                  <img
                    data-strk-img-id={`blog-post-${post.id}-${i}`}
                    data-strk-img={`[blog-excerpt-${post.id}] [blog-title-${post.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary-blue uppercase tracking-wider">{post.category}</span>
                  <h2 id={`blog-title-${post.id}`} className="text-lg font-semibold text-dark-text mt-1 mb-2 line-clamp-2">{post.title}</h2>
                  <p id={`blog-excerpt-${post.id}`} className="text-sm text-medium-text mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-light-text">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark-text mb-4">Stay Updated</h2>
          <p className="text-lg text-medium-text mb-8">
            Get the latest sourcing tips and industry insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-blue"
              required
            />
            <button
              type="submit"
              className="bg-primary-blue text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-primary-blue-hover transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-blue text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Need Help Sourcing from China?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Get expert support for your next sourcing project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-red text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-accent-red-hover transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}