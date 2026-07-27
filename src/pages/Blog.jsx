import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import Button from '@/components/ui/Button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Find Reliable Suppliers in China: A Step-by-Step Guide',
    excerpt: 'Learn the proven process for identifying and vetting Chinese manufacturers. From online research to factory audits, this guide covers everything you need to know.',
    category: 'Supplier Sourcing',
    author: 'James Chen',
    date: 'July 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-supplier-guide-1a2b3c',
  },
  {
    title: 'Quality Control in China: What Every Importer Should Know',
    excerpt: 'Understanding the different stages of quality inspection and how to implement an effective QC program when manufacturing in China.',
    category: 'Quality Control',
    author: 'Lisa Wang',
    date: 'July 8, 2026',
    readTime: '6 min read',
    imgId: 'blog-quality-control-2b3c4d',
  },
  {
    title: 'Factory Audits: What to Look for When Visiting Chinese Manufacturers',
    excerpt: 'A comprehensive checklist for conducting factory audits in China, including what to observe, what questions to ask, and how to evaluate audit results.',
    category: 'Factory Audits',
    author: 'James Chen',
    date: 'June 25, 2026',
    readTime: '10 min read',
    imgId: 'blog-factory-audits-3c4d5e',
  },
  {
    title: 'Understanding Shipping Costs from China: A Complete Breakdown',
    excerpt: 'Break down the components of shipping costs from China, including freight rates, insurance, customs duties, and hidden fees you should be aware of.',
    category: 'Logistics',
    author: 'Michael Zhang',
    date: 'June 12, 2026',
    readTime: '7 min read',
    imgId: 'blog-shipping-costs-4d5e6f',
  },
  {
    title: 'Common Mistakes When Sourcing from China and How to Avoid Them',
    excerpt: 'Learn from the most common pitfalls importers face when sourcing from Chinese manufacturers, from IP issues to communication breakdowns.',
    category: 'Best Practices',
    author: 'Lisa Wang',
    date: 'May 30, 2026',
    readTime: '9 min read',
    imgId: 'blog-mistakes-5e6f7a',
  },
  {
    title: 'The Role of a Sourcing Agent: When and Why You Need One',
    excerpt: 'Understand the value a professional sourcing agent brings to your supply chain and how to choose the right partner for your business.',
    category: 'Sourcing Strategy',
    author: 'James Chen',
    date: 'May 18, 2026',
    readTime: '7 min read',
    imgId: 'blog-sourcing-agent-6f7a8b',
  },
  {
    title: 'Top Manufacturing Hubs in China: Where to Source Your Products',
    excerpt: 'An overview of China\'s key manufacturing regions and what products each area specializes in, from Shenzhen\'s electronics to Yiwu\'s consumer goods.',
    category: 'Market Insights',
    author: 'Michael Zhang',
    date: 'May 5, 2026',
    readTime: '8 min read',
    imgId: 'blog-manufacturing-hubs-7a8b9c',
  },
  {
    title: 'Product Certification Requirements for Importing from China',
    excerpt: 'Navigate the complex landscape of product certifications including CE, FDA, RoHS, and others. What you need to know before placing your order.',
    category: 'Compliance',
    author: 'Lisa Wang',
    date: 'April 22, 2026',
    readTime: '6 min read',
    imgId: 'blog-certifications-8b9c1d',
  },
  {
    title: 'Negotiating with Chinese Suppliers: Tips for Better Terms',
    excerpt: 'Practical negotiation strategies for working with Chinese manufacturers, including pricing, payment terms, MOQs, and long-term partnership building.',
    category: 'Negotiation',
    author: 'James Chen',
    date: 'April 10, 2026',
    readTime: '9 min read',
    imgId: 'blog-negotiation-9c1d2e',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="container-page text-center">
          <span className="text-brand-300 text-sm font-medium tracking-wider uppercase">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Sourcing Insights</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Practical advice, market insights, and best practices for sourcing from China
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.title} className="flex flex-col rounded-xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-neutral-100 relative overflow-hidden">
                  <div
                    className="absolute inset-0"
                    data-strk-bg-id={post.imgId}
                    data-strk-bg={`[${post.imgId}-title]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                  />
                  <div className="sr-only">
                    <h3 id={`${post.imgId}-title`}>{post.title}</h3>
                  </div>
                </div>
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-brand-500 bg-brand-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-500 leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-neutral-100">
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-neutral-50">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Stay Updated</h2>
            <p className="text-neutral-500 mb-8">
              Get the latest sourcing insights and market updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                required
              />
              <Button type="submit" variant="accent">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}