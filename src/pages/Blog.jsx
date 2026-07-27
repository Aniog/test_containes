import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const posts = [
  {
    id: '1',
    title: 'How to Vet a Chinese Supplier: A 10-Point Checklist',
    excerpt: 'Learn the essential steps to verify a Chinese factory before placing your first order. From license verification to factory visits, this guide covers everything.',
    date: 'July 15, 2026',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    bgImgId: 'blog-supplier-vet-bg-a1b2',
    titleId: 'blog-post-1-title',
    descId: 'blog-post-1-desc',
  },
  {
    id: '2',
    title: 'Understanding AQL: Quality Inspection Standards Explained',
    excerpt: 'AQL (Acceptable Quality Level) is the international standard for product inspection. Learn how AQL sampling works and what levels to use for your products.',
    date: 'July 8, 2026',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    bgImgId: 'blog-aql-bg-c3d4',
    titleId: 'blog-post-2-title',
    descId: 'blog-post-2-desc',
  },
  {
    id: '3',
    title: 'FCL vs LCL Shipping: Which Is Right for Your Business?',
    excerpt: 'A practical comparison of Full Container Load and Less than Container Load shipping options for importers, including cost analysis and decision factors.',
    date: 'June 28, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
    bgImgId: 'blog-shipping-bg-e5f6',
    titleId: 'blog-post-3-title',
    descId: 'blog-post-3-desc',
  },
  {
    id: '4',
    title: 'Top Manufacturing Regions in China: Where to Source What',
    excerpt: "A comprehensive guide to China's industrial clusters. From Shenzhen electronics to Foshan furniture — know which region specializes in your product category.",
    date: 'June 20, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Guide',
    bgImgId: 'blog-regions-bg-g7h8',
    titleId: 'blog-post-4-title',
    descId: 'blog-post-4-desc',
  },
  {
    id: '5',
    title: 'How to Negotiate with Chinese Suppliers: 7 Tips That Work',
    excerpt: 'Practical negotiation strategies for dealing with Chinese manufacturers. Learn about guanxi, pricing tactics, and how to build lasting supplier relationships.',
    date: 'June 12, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Guide',
    bgImgId: 'blog-negotiate-bg-i9j0',
    titleId: 'blog-post-5-title',
    descId: 'blog-post-5-desc',
  },
  {
    id: '6',
    title: 'Incoterms for China Imports: FOB, CIF, EXW Explained',
    excerpt: 'Understanding shipping terms is crucial for importers. This guide explains the most common Incoterms used in China trade and what they mean for your costs and risks.',
    date: 'June 5, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
    bgImgId: 'blog-incoterms-bg-k1l2',
    titleId: 'blog-post-6-title',
    descId: 'blog-post-6-desc',
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
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Blog</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">China Sourcing Insights & Guides</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Practical advice, industry insights, and how-to guides to help you source smarter from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <div
                    data-strk-bg-id={post.bgImgId}
                    data-strk-bg={`[${post.descId}] [${post.titleId}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5" /> {post.category}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="text-lg font-bold text-navy leading-snug group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <User className="w-3.5 h-3.5" /> {post.author}
                    </span>
                    <span className="text-accent-blue text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-16 bg-navy rounded-2xl p-10 md:p-14 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold">Get Sourcing Insights in Your Inbox</h2>
            <p className="mt-3 text-slate-300 max-w-md mx-auto">
              Practical tips and guides for importing from China. No spam, just useful content.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
