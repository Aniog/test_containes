import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-07-15',
    readTime: '8 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-guide',
    category: 'Quality Control',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by QC inspectors worldwide. Learn how it works, what sampling levels to use, and how to set the right acceptance criteria for your products.',
    date: '2026-07-08',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'sea-freight-vs-air-freight',
    category: 'Shipping',
    title: 'Sea Freight vs Air Freight from China: How to Choose',
    excerpt: 'Choosing the right shipping method affects your cost, lead time, and cash flow. This article breaks down the key differences and helps you decide which option suits your business.',
    date: '2026-06-28',
    readTime: '5 min read',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
    imgId: 'blog-freight-img-g7h8i9',
  },
  {
    id: 'private-label-china',
    category: 'Sourcing Strategy',
    title: 'Private Label Products from China: A Step-by-Step Guide',
    excerpt: 'Private labeling is one of the most popular ways to build a brand using Chinese manufacturing. This guide walks you through the process from product selection to final delivery.',
    date: '2026-06-18',
    readTime: '10 min read',
    titleId: 'blog-private-label-title',
    descId: 'blog-private-label-desc',
    imgId: 'blog-private-label-img-j1k2l3',
  },
  {
    id: 'canton-fair-guide',
    category: 'Trade Shows',
    title: 'Canton Fair 2026: A Practical Guide for First-Time Buyers',
    excerpt: 'The Canton Fair is the world\'s largest trade fair and a key sourcing event for global buyers. Here\'s how to prepare, what to expect, and how to make the most of your visit.',
    date: '2026-06-05',
    readTime: '7 min read',
    titleId: 'blog-canton-title',
    descId: 'blog-canton-desc',
    imgId: 'blog-canton-img-m4n5o6',
  },
  {
    id: 'moq-negotiation',
    category: 'Negotiation',
    title: 'How to Negotiate MOQ with Chinese Factories',
    excerpt: 'Minimum order quantities can be a barrier for small businesses. This article shares practical strategies for negotiating lower MOQs without damaging your supplier relationship.',
    date: '2026-05-22',
    readTime: '6 min read',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
    imgId: 'blog-moq-img-p7q8r9',
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Sourcing Strategy', 'Trade Shows', 'Negotiation']

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-3">Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Practical guides, tips, and insights for global buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-site-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
                <img
                  data-strk-img-id={posts[0].imgId}
                  data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-blue-50 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  {posts[0].category}
                </span>
                <h2 id={posts[0].titleId} className="text-2xl font-bold text-navy mb-3">{posts[0].title}</h2>
                <p id={posts[0].descId} className="text-gray-600 leading-relaxed mb-4">{posts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{posts[0].date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{posts[0].readTime}</span>
                </div>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:text-brand-red transition-colors"
                >
                  Read Article <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="bg-site-bg pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-50 text-navy text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 id={post.titleId} className="text-base font-bold text-navy mb-2 leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-200 mb-8">
            Get a free sourcing consultation from our team. No commitment required.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
