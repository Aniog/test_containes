import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers, including factory audits, license checks, and reference verification. Protect your business from unreliable suppliers.',
    category: 'Supplier Verification',
    author: 'David Wang',
    date: '2025-01-15',
    readTime: '8 min read',
    image: 'business verification factory audit document',
    imageId: 'blog-verify-d7e8f9',
  },
  {
    title: 'Quality Control in China: Pre-Shipment Inspection Checklist',
    excerpt: 'A comprehensive checklist for pre-shipment quality inspections. Learn what to check, AQL standards, and how to ensure your products meet specifications.',
    category: 'Quality Control',
    author: 'Sarah Chen',
    date: '2025-01-08',
    readTime: '10 min read',
    image: 'quality control inspection checklist products',
    imageId: 'blog-qc-g1h2i3',
  },
  {
    title: 'Shipping from China: Sea vs Air vs Rail Freight Comparison',
    excerpt: 'Compare shipping methods from China including cost, transit time, and best use cases. Make informed decisions for your logistics strategy.',
    category: 'Shipping & Logistics',
    author: 'Michael Li',
    date: '2024-12-20',
    readTime: '12 min read',
    image: 'shipping container logistics freight comparison',
    imageId: 'blog-shipping-j4k5l6',
  },
  {
    title: 'Understanding MOQs: How to Negotiate Minimum Order Quantities',
    excerpt: 'Tips and strategies for negotiating minimum order quantities with Chinese suppliers. Learn how to get favorable terms even for smaller orders.',
    category: 'Sourcing Tips',
    author: 'David Wang',
    date: '2024-12-12',
    readTime: '7 min read',
    image: 'business negotiation contract agreement',
    imageId: 'blog-moq-m7n8o9',
  },
  {
    title: 'Top 10 Product Categories to Source from China in 2025',
    excerpt: 'Discover the most profitable and reliable product categories for sourcing from China. Market trends, supplier landscape, and tips for each category.',
    category: 'Market Insights',
    author: 'Sarah Chen',
    date: '2024-12-05',
    readTime: '15 min read',
    image: 'market trends products analysis chart',
    imageId: 'blog-categories-p1q2r3',
  },
  {
    title: 'How to Protect Your Intellectual Property When Sourcing from China',
    excerpt: 'Essential IP protection strategies including NDA agreements, trademark registration, and supplier contracts. Safeguard your designs and brand.',
    category: 'Legal & Compliance',
    author: 'Michael Li',
    date: '2024-11-28',
    readTime: '9 min read',
    image: 'intellectual property legal protection documents',
    imageId: 'blog-ip-s4t5u6',
  },
]

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-950 section-padding text-center">
        <div className="container-max">
          <span className="inline-block px-4 py-1 bg-brand-700 text-brand-200 text-sm font-medium rounded-full mb-4">
            Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            Expert articles, guides, and insights to help you source products from China more effectively
            and avoid common pitfalls.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={post.imageId}
                    data-strk-img={`[blog-${post.title.toLowerCase().replace(/[^a-z]/g, '-')}] ${post.image}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    id={`blog-${post.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white text-brand-700 text-xs font-medium rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 text-brand-600 font-medium text-sm hover:text-brand-700 transition-colors"
                  >
                    Read Article
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-slate-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Get the latest sourcing tips, market insights, and industry updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
