import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Clock } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify that a Chinese manufacturer is legitimate, has the capacity to produce your product, and meets quality standards.',
    date: '2026-05-15',
    readTime: '8 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-a1b2c3',
  },
  {
    title: 'Understanding AQL Sampling for Quality Inspections',
    excerpt: 'AQL (Acceptable Quality Level) is the industry standard for product inspections. Here is what you need to know about AQL sampling and how it protects your orders.',
    date: '2026-04-28',
    readTime: '6 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-d4e5f6',
  },
  {
    title: 'China Shipping Guide: FOB vs CIF vs EXW Explained',
    excerpt: 'Understanding Incoterms is critical for managing costs and risk. We break down the most common shipping terms used in China trade.',
    date: '2026-04-10',
    readTime: '7 min read',
    category: 'Shipping',
    imgId: 'blog-shipping-g7h8i9',
  },
  {
    title: '5 Red Flags When Sourcing from China',
    excerpt: 'From trading companies posing as factories to unrealistic pricing, here are the warning signs every buyer should watch for when sourcing from China.',
    date: '2026-03-22',
    readTime: '5 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-redflags-j1k2l3',
  },
  {
    title: 'How to Write a Clear Product Specification for Chinese Manufacturers',
    excerpt: 'Clear specifications prevent misunderstandings and quality issues. Learn how to create detailed product specs that Chinese factories can follow accurately.',
    date: '2026-03-05',
    readTime: '6 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-specs-m4n5o6',
  },
  {
    title: 'Amazon FBA Prep: What You Need to Know Before Shipping from China',
    excerpt: 'Shipping directly to Amazon FBA from China requires specific labeling, packaging, and documentation. Here is your complete checklist.',
    date: '2026-02-18',
    readTime: '9 min read',
    category: 'E-commerce',
    imgId: 'blog-fba-p7q8r9',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2744] py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 id="blog-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sourcing Insights & Guides
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Practical advice and industry knowledge to help you source from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card group flex flex-col">
                <div
                  className="w-full aspect-video rounded-md mb-5 bg-[#f5f7fa] overflow-hidden"
                  data-strk-bg-id={post.imgId}
                  data-strk-bg={`[blog-post-title-${index}] [blog-page-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <span className="inline-block text-xs font-semibold text-[#d4a843] uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h2 id={`blog-post-title-${index}`} className="text-lg font-semibold text-[#1a2744] mb-3 group-hover:text-[#2d4a7a] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#4a5568] text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-[#718096] mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
                <button className="text-[#d4a843] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
              Stay Updated on China Sourcing
            </h2>
            <p className="text-[#4a5568] mb-8">
              Get practical sourcing tips, industry updates, and guides delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
                aria-label="Email address"
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
