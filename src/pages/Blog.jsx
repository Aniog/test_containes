import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing an order. From business license checks to factory audits, we cover everything you need to know.',
    category: 'Supplier Verification',
    author: 'SSourcing China Team',
    date: 'July 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-supplier-verify-1a2b3c',
  },
  {
    title: 'Understanding Quality Control Standards for China Manufacturing',
    excerpt: 'A comprehensive overview of QC standards including AQL, ISO 9001, and industry-specific requirements. Know what to expect and how to ensure product quality.',
    category: 'Quality Control',
    author: 'SSourcing China Team',
    date: 'July 8, 2026',
    readTime: '6 min read',
    imgId: 'blog-qc-standards-2b3c4d',
  },
  {
    title: 'Top 10 Mistakes Buyers Make When Sourcing from China',
    excerpt: 'Avoid these common pitfalls that cost overseas buyers time and money. Practical advice from experienced sourcing professionals who work in China daily.',
    category: 'Sourcing Tips',
    author: 'SSourcing China Team',
    date: 'June 28, 2026',
    readTime: '10 min read',
    imgId: 'blog-mistakes-3c4d5e',
  },
  {
    title: 'The Complete Guide to Factory Audits in China',
    excerpt: 'What to look for during a factory audit, how to prepare, and what questions to ask. Includes a downloadable audit checklist for your reference.',
    category: 'Factory Audits',
    author: 'SSourcing China Team',
    date: 'June 20, 2026',
    readTime: '7 min read',
    imgId: 'blog-factory-audit-4d5e6f',
  },
  {
    title: 'Shipping from China: Sea, Air, Rail, or Express?',
    excerpt: 'Compare the pros and cons of different shipping methods from China. Cost, speed, and reliability considerations for different types of cargo.',
    category: 'Logistics',
    author: 'SSourcing China Team',
    date: 'June 12, 2026',
    readTime: '5 min read',
    imgId: 'blog-shipping-5e6f7g',
  },
  {
    title: 'How to Protect Your Intellectual Property When Manufacturing in China',
    excerpt: 'Practical strategies for protecting your designs, patents, and trademarks when working with Chinese manufacturers. Includes NDA templates and registration tips.',
    category: 'IP Protection',
    author: 'SSourcing China Team',
    date: 'June 5, 2026',
    readTime: '9 min read',
    imgId: 'blog-ip-6f7g8h',
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
      <section className="bg-brand-600 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Insights, guides, and practical advice on sourcing from China. 
              Stay informed with the latest best practices and industry knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.title} className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${post.imgId}] [blog-category-${post.imgId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <span id={`blog-title-${post.imgId}`} className="hidden">{post.title}</span>
                  <span id={`blog-category-${post.imgId}`} className="hidden">{post.category}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-50 text-brand-600 rounded-full font-medium">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <a href="#" className="text-brand-500 hover:text-accent-500 font-medium inline-flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-500 mb-8">
            Subscribe to our newsletter for the latest sourcing insights, tips, and industry updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-11 px-4 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              required
            />
            <Button variant="accent" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}