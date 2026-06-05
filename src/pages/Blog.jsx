import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    category: 'Supplier Verification',
    date: 'May 2026',
    readTime: '8 min read',
    excerpt: 'Learn the essential steps to verify a Chinese supplier, from checking business licenses to conducting on-site factory visits. Protect your business from fraud and unreliable suppliers.',
    imgQuery: 'supplier verification factory audit inspection business document',
  },
  {
    title: 'Understanding Quality Inspection Standards: AQL Explained',
    category: 'Quality Control',
    date: 'April 2026',
    readTime: '6 min read',
    excerpt: 'AQL (Acceptable Quality Level) is the industry standard for product inspection sampling. This guide explains how AQL works and how to set the right inspection levels for your products.',
    imgQuery: 'quality inspection AQL standards product testing manufacturing',
  },
  {
    title: 'Sea Freight vs. Air Freight: Which Is Right for Your China Order?',
    category: 'Shipping & Logistics',
    date: 'March 2026',
    readTime: '7 min read',
    excerpt: 'Choosing between sea freight and air freight depends on your budget, timeline, and order size. This comparison helps you make the right decision for each shipment.',
    imgQuery: 'shipping container sea freight air cargo logistics comparison',
  },
  {
    title: 'Top 10 Mistakes When Sourcing from China (And How to Avoid Them)',
    category: 'Sourcing Tips',
    date: 'February 2026',
    readTime: '10 min read',
    excerpt: 'New to sourcing from China? These are the most common mistakes buyers make — from skipping factory visits to not understanding MOQs — and how to avoid them.',
    imgQuery: 'business mistakes sourcing China avoid common errors',
  },
  {
    title: 'How to Negotiate Pricing with Chinese Suppliers',
    category: 'Negotiation',
    date: 'January 2026',
    readTime: '7 min read',
    excerpt: 'Effective negotiation with Chinese suppliers requires understanding their pricing structure, cultural norms, and leverage points. Here are practical strategies that work.',
    imgQuery: 'business negotiation pricing discussion Chinese supplier meeting',
  },
  {
    title: 'Product Certification Guide: CE, FCC, FDA, and More',
    category: 'Compliance',
    date: 'December 2025',
    readTime: '9 min read',
    excerpt: 'Different products require different certifications depending on the target market. This guide covers the most common certifications and what they mean for your sourcing project.',
    imgQuery: 'product certification CE FCC FDA compliance testing lab',
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
      <section className="bg-brand-700 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-accent-400 uppercase tracking-wider">
            Sourcing Knowledge
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Blog
          </h1>
          <p className="mt-5 text-lg text-brand-200 max-w-2xl mx-auto">
            Practical guides, tips, and insights to help you source products from
            China more effectively. Written by our sourcing team based on real-world
            experience.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-xl border border-gray-200 hover:border-brand-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={`blog-${post.title.replace(/\s+/g, '-').toLowerCase().slice(0, 30)}-img-b8k2p`}
                    data-strk-img={`[blog-${post.title.replace(/\s+/g, '-').toLowerCase().slice(0, 30)}-desc]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div id={`blog-${post.title.replace(/\s+/g, '-').toLowerCase().slice(0, 30)}-desc`} className="hidden">{post.imgQuery}</div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 text-xs font-semibold text-brand-600 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-brand-500 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 group-hover:text-brand-600 transition-colors">
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Get Sourcing Tips Delivered
          </h2>
          <p className="text-gray-600 mb-6">
            Join our mailing list for practical sourcing advice, industry updates,
            and China manufacturing insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
            />
            <button className="px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm rounded-lg transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
