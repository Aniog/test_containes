import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier: A Step-by-Step Guide',
    excerpt: 'Learn the essential steps to verify potential suppliers in China, from document checks to on-site factory audits.',
    author: 'SSourcing Team',
    date: 'June 15, 2026',
    readTime: '8 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-1a2b3c',
  },
  {
    title: '10 Common Mistakes When Sourcing Products from China',
    excerpt: 'Avoid these frequent sourcing pitfalls that cost buyers time, money, and quality. Practical advice from years of experience.',
    author: 'SSourcing Team',
    date: 'May 28, 2026',
    readTime: '10 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-mistakes-2b3c4d',
  },
  {
    title: 'Quality Inspection Guide: What to Check Before Shipment',
    excerpt: 'A comprehensive overview of what a pre-shipment inspection covers and how it protects your product quality.',
    author: 'SSourcing Team',
    date: 'May 10, 2026',
    readTime: '6 min read',
    category: 'Quality Control',
    imgId: 'blog-qc-3c4d5e',
  },
  {
    title: 'Understanding Incoterms for China Imports',
    excerpt: 'A clear explanation of Incoterms and how they affect your shipping costs, responsibilities, and risk when importing from China.',
    author: 'SSourcing Team',
    date: 'April 22, 2026',
    readTime: '7 min read',
    category: 'Logistics',
    imgId: 'blog-incoterms-4d5e6f',
  },
  {
    title: 'Factory Audit Checklist: What We Look For',
    excerpt: 'Our detailed factory audit checklist covering production capacity, quality systems, working conditions, and more.',
    author: 'SSourcing Team',
    date: 'April 5, 2026',
    readTime: '9 min read',
    category: 'Supplier Verification',
    imgId: 'blog-audit-5e6f7g',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers Effectively',
    excerpt: 'Practical negotiation strategies that build long-term supplier relationships while securing competitive pricing.',
    author: 'SSourcing Team',
    date: 'March 18, 2026',
    readTime: '7 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-negotiate-6f7g8h',
  },
  {
    title: 'The Benefits of Using a China Sourcing Agent vs. Going Direct',
    excerpt: 'An honest comparison of the costs, risks, and benefits of working with a sourcing agent versus managing suppliers directly.',
    author: 'SSourcing Team',
    date: 'March 1, 2026',
    readTime: '8 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-agent-7g8h9i',
  },
  {
    title: 'Product Compliance: What You Need to Know for EU and US Markets',
    excerpt: 'Essential compliance requirements for importing products into the EU and US markets, including CE, FCC, and FDA regulations.',
    author: 'SSourcing Team',
    date: 'February 14, 2026',
    readTime: '10 min read',
    category: 'Compliance',
    imgId: 'blog-compliance-8h9i0j',
  },
  {
    title: 'Shipping from China: Sea vs. Air vs. Express Freight',
    excerpt: 'Compare shipping methods, costs, and transit times to choose the best option for your imports from China.',
    author: 'SSourcing Team',
    date: 'January 30, 2026',
    readTime: '6 min read',
    category: 'Logistics',
    imgId: 'blog-shipping-9i0j1k',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy-800 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Practical insights and guides on sourcing from China, supplier verification, quality control, and logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post, i) => (
              <article key={i} className="flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[blog-title-${i}] [blog-excerpt-${i}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-navy-600 bg-navy-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 id={`blog-title-${i}`} className="text-lg font-semibold text-navy-700 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p id={`blog-excerpt-${i}`} className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-700 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Get the latest sourcing insights and guides delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}