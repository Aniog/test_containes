import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier: A Complete Guide',
    excerpt: 'Learn the essential steps to verify potential suppliers in China. From business license checks to on-site factory audits, we cover everything you need to know.',
    category: 'Sourcing Tips',
    date: 'July 15, 2026',
    readTime: '8 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'The Complete Guide to Product Quality Inspection in China',
    excerpt: 'Understanding quality control processes is crucial for successful sourcing. This guide explains AQL standards, inspection stages, and how to ensure product quality.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '10 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Understanding Incoterms: What Every Importer Should Know',
    excerpt: 'Incoterms define the responsibilities of buyers and sellers in international trade. A clear explanation of the most common terms used in China sourcing.',
    category: 'Shipping & Logistics',
    date: 'June 28, 2026',
    readTime: '6 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Top 10 Mistakes to Avoid When Sourcing from China',
    excerpt: 'Avoid costly mistakes when sourcing from China. Learn from common pitfalls that importers face and how to navigate the Chinese market successfully.',
    category: 'Sourcing Tips',
    date: 'June 20, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'Factory Audits: What to Look for During an On-Site Visit',
    excerpt: 'A comprehensive checklist for conducting factory audits in China. Learn what to inspect, what questions to ask, and how to evaluate supplier capabilities.',
    category: 'Supplier Management',
    date: 'June 12, 2026',
    readTime: '9 min read',
    author: 'SSourcing China Team',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers: Best Practices',
    excerpt: 'Effective negotiation strategies for working with Chinese manufacturers. Understand cultural nuances, pricing structures, and how to build long-term partnerships.',
    category: 'Sourcing Tips',
    date: 'June 5, 2026',
    readTime: '7 min read',
    author: 'SSourcing China Team',
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
      <section className="bg-primary-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
              Practical insights, guides, and tips for sourcing products from China. Written by experienced sourcing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article key={i} className="card flex flex-col">
                <div className="w-full h-48 bg-primary-100 rounded-lg mb-4 overflow-hidden">
                  <div
                    className="w-full h-full"
                    data-strk-bg-id={`blog-img-${i}`}
                    data-strk-bg={`[blog-title-${i}] [blog-cat-${i}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                </div>
                <div className="hidden">
                  <span id={`blog-title-${i}`}>{post.title}</span>
                  <span id={`blog-cat-${i}`}>{post.category}</span>
                </div>
                <div className="mb-3">
                  <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2 leading-snug">{post.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed flex-1 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  to="#"
                  className="inline-flex items-center gap-1 text-accent-600 font-medium text-sm hover:text-accent-700 transition-colors mt-auto"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="section-padding bg-primary-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-neutral-600 mb-8">
              Subscribe to our newsletter for the latest sourcing tips, industry insights, and company updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}