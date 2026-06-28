import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the key steps to verify a supplier\'s legitimacy, including business license checks, factory audits, and reference verification.',
    category: 'Supplier Verification',
    date: '2026-06-15',
    readTime: '6 min read',
    imgId: 'blog1-img-o1p2q3',
    imgQuery: '[blog1-title]',
  },
  {
    title: 'Understanding MOQ: What It Means for Your Sourcing Strategy',
    excerpt: 'Minimum Order Quantity (MOQ) can make or break your sourcing plan. Here is how to negotiate MOQs and find flexible suppliers.',
    category: 'Sourcing Tips',
    date: '2026-06-08',
    readTime: '5 min read',
    imgId: 'blog2-img-r4s5t6',
    imgQuery: '[blog2-title]',
  },
  {
    title: 'Quality Inspection Checklist for Manufacturing in China',
    excerpt: 'A practical checklist for conducting quality inspections at Chinese factories, covering pre-production, during-production, and pre-shipment stages.',
    category: 'Quality Control',
    date: '2026-05-28',
    readTime: '8 min read',
    imgId: 'blog3-img-u7v8w9',
    imgQuery: '[blog3-title]',
  },
  {
    title: 'Shipping from China: A Beginner\'s Guide to Freight Options',
    excerpt: 'Compare air freight, sea freight, and express shipping options. Learn which method is best for your product type, budget, and timeline.',
    category: 'Shipping',
    date: '2026-05-15',
    readTime: '7 min read',
    imgId: 'blog4-img-x1y2z3',
    imgQuery: '[blog4-title]',
  },
  {
    title: 'Common Mistakes When Sourcing Products from China',
    excerpt: 'Avoid these common pitfalls that can lead to quality issues, delays, and unexpected costs when sourcing from Chinese manufacturers.',
    category: 'Sourcing Tips',
    date: '2026-05-02',
    readTime: '6 min read',
    imgId: 'blog5-img-a4b5c6',
    imgQuery: '[blog5-title]',
  },
  {
    title: 'How to Negotiate Prices with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies for getting the best price from Chinese manufacturers without compromising on quality.',
    category: 'Negotiation',
    date: '2026-04-20',
    readTime: '5 min read',
    imgId: 'blog6-img-d7e8f9',
    imgQuery: '[blog6-title]',
  },
]

function BlogCard({ post }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow">
      <div
        className="w-full h-48 bg-slate-100"
        data-strk-bg-id={post.imgId}
        data-strk-bg={post.imgQuery}
        data-strk-bg-ratio="4x3"
        data-strk-bg-width="600"
      />
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="inline-flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>
        <h3 id={post.imgQuery.replace('[', '').replace(']', '')} className="text-lg font-semibold text-slate-900">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
        <div className="mt-4">
          <span className="inline-flex items-center text-sm text-blue-700 font-medium hover:text-blue-800">
            Read more <ArrowRight className="ml-1 w-4 h-4" />
          </span>
        </div>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">Blog & Resources</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl">
            Practical guides, tips, and insights for sourcing products from China.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Stay Updated</h2>
          <p className="mt-4 text-slate-600">
            Get the latest sourcing tips and industry insights delivered to your inbox.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-2.5 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
