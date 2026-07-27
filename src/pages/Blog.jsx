import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 'how-to-verify-chinese-suppliers',
    imgId: 'blog-verify-suppliers-a1b2c3',
    titleId: 'blog-verify-suppliers-title',
    descId: 'blog-verify-suppliers-desc',
    query: '[blog-verify-suppliers-desc] [blog-verify-suppliers-title]',
    category: 'Supplier Verification',
    title: 'How to Verify Chinese Suppliers: A Complete Guide',
    excerpt: 'Learn the essential steps to verify Chinese suppliers before placing your first order, including business license checks, factory audits, and reference verification.',
    date: 'July 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 'china-quality-control-checklist',
    imgId: 'blog-qc-checklist-d4e5f6',
    titleId: 'blog-qc-title',
    descId: 'blog-qc-desc',
    query: '[blog-qc-desc] [blog-qc-title]',
    category: 'Quality Control',
    title: 'The Ultimate China Quality Control Checklist',
    excerpt: 'A practical QC checklist covering pre-production, in-line, and pre-shipment inspections. Use this to ensure consistent product quality from your Chinese suppliers.',
    date: 'July 8, 2026',
    readTime: '10 min read',
  },
  {
    id: 'shipping-from-china-guide',
    imgId: 'blog-shipping-guide-g7h8i9',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
    query: '[blog-shipping-desc] [blog-shipping-title]',
    category: 'Shipping & Logistics',
    title: 'Shipping from China: Ocean vs Air Freight Compared',
    excerpt: 'A detailed comparison of ocean freight, air freight, and rail freight for importing goods from China, including cost breakdowns, transit times, and when to use each method.',
    date: 'June 30, 2026',
    readTime: '7 min read',
  },
  {
    id: 'avoid-common-sourcing-mistakes',
    imgId: 'blog-sourcing-mistakes-j1k2l3',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
    query: '[blog-mistakes-desc] [blog-mistakes-title]',
    category: 'Sourcing Tips',
    title: '10 Common China Sourcing Mistakes (And How to Avoid Them)',
    excerpt: 'From skipping factory visits to ignoring IP protection, here are the most common mistakes first-time importers make when sourcing from China — and practical advice on how to avoid each one.',
    date: 'June 22, 2026',
    readTime: '12 min read',
  },
  {
    id: 'customs-clearance-guide',
    imgId: 'blog-customs-clearance-m4n5o6',
    titleId: 'blog-customs-title',
    descId: 'blog-customs-desc',
    query: '[blog-customs-desc] [blog-customs-title]',
    category: 'Customs & Compliance',
    title: 'Customs Clearance Guide for China Imports',
    excerpt: 'Navigate the customs process with confidence. This guide covers documentation requirements, tariff classification, duty calculations, and common clearance delays.',
    date: 'June 14, 2026',
    readTime: '9 min read',
  },
  {
    id: 'private-label-manufacturing',
    imgId: 'blog-private-label-p7q8r9',
    titleId: 'blog-private-label-title',
    descId: 'blog-private-label-desc',
    query: '[blog-private-label-desc] [blog-private-label-title]',
    category: 'OEM & Private Label',
    title: 'How to Start Private Label Manufacturing in China',
    excerpt: 'A step-by-step guide to launching your own brand with Chinese manufacturers, covering MOQ negotiation, mold development, packaging design, and IP protection strategies.',
    date: 'June 5, 2026',
    readTime: '11 min read',
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
      <section className="bg-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent-500/30">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              China Sourcing
              <br />
              <span className="text-accent-400">Insights & Guides</span>
            </h1>
            <p className="text-lg text-steel-200 leading-relaxed max-w-xl">
              Practical guides, industry insights, and expert advice for buyers
              sourcing products from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="card-base card-hover overflow-hidden p-0 mb-12">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  alt={blogPosts[0].title}
                  data-strk-img-id={blogPosts[0].imgId}
                  data-strk-img={blogPosts[0].query}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="label-tag">{blogPosts[0].category}</span>
                  <span className="text-xs text-steel-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {blogPosts[0].date}
                  </span>
                </div>
                <h2 id={blogPosts[0].titleId} className="text-2xl md:text-3xl font-bold text-brand-800 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p id={blogPosts[0].descId} className="text-body mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-steel-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group card-base card-hover overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={post.query}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-800/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-steel-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="heading-card text-lg mb-3">{post.title}</h3>
                  <p id={post.descId} className="text-body text-sm mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-brand-500 font-semibold text-sm cursor-pointer hover:gap-2.5 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-steel-50">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-section mb-4">Stay Updated</h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Get practical sourcing tips and industry insights delivered to your inbox.
            No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-steel-300 text-steel-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white"
            />
            <button className="btn-accent px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
