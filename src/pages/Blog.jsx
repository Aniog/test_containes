import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'How to Verify a Chinese Supplier: A Practical Checklist',
    excerpt: 'Learn the essential steps for verifying Chinese suppliers before placing an order, including license checks, factory audits, and red flags to watch for.',
    date: 'July 15, 2026',
    author: 'SSourcing Team',
    readTime: '8 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-supplier-s1t2u3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 2,
    title: 'Understanding AQL Quality Inspections: A Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Level) is the standard for product inspections in China. This guide explains how AQL sampling works and what defect levels mean for your products.',
    date: 'July 8, 2026',
    author: 'SSourcing Team',
    readTime: '6 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-guide-v4w5x6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 3,
    title: 'FOB vs. EXW vs. CIF: Shipping Terms Explained for China Imports',
    excerpt: 'Confused by Incoterms? We break down the most common shipping terms for importing from China—FOB, EXW, CIF, and DDP—and when to use each.',
    date: 'June 28, 2026',
    author: 'SSourcing Team',
    readTime: '5 min read',
    category: 'Shipping & Logistics',
    imgId: 'blog-incoterms-y7z8a9',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 4,
    title: 'The True Cost of Sourcing from China: Hidden Fees to Watch For',
    excerpt: 'Beyond the unit price, importing from China involves tooling costs, inspection fees, shipping, duties, and more. We reveal the complete cost breakdown.',
    date: 'June 20, 2026',
    author: 'SSourcing Team',
    readTime: '7 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-hidden-costs-b0c1d2',
    titleId: 'blog-costs-title',
    descId: 'blog-costs-desc',
  },
  {
    id: 5,
    title: 'How to Negotiate with Chinese Manufacturers: 10 Tips from Insiders',
    excerpt: 'Negotiating with Chinese factories is different from Western business culture. These 10 proven tips will help you secure better pricing and terms.',
    date: 'June 10, 2026',
    author: 'SSourcing Team',
    readTime: '9 min read',
    category: 'Sourcing Strategy',
    imgId: 'blog-negotiate-e3f4g5',
    titleId: 'blog-negotiate-title',
    descId: 'blog-negotiate-desc',
  },
  {
    id: 6,
    title: 'Canton Fair Guide: How to Make the Most of China\'s Largest Trade Show',
    excerpt: 'Planning to attend the Canton Fair? Our comprehensive guide covers preparation, what to look for at supplier booths, and how to follow up effectively.',
    date: 'May 25, 2026',
    author: 'SSourcing Team',
    readTime: '10 min read',
    category: 'Trade Shows',
    imgId: 'blog-canton-fair-h6i7j8',
    titleId: 'blog-canton-title',
    descId: 'blog-canton-desc',
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
      <section className="bg-gradient-to-br from-primary to-primary-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Blog</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Practical insights and guides on China sourcing, supplier verification,
            quality control, and logistics for international buyers.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                <div
                  className="aspect-[16/9] bg-slate-100"
                  data-strk-bg-id={post.imgId}
                  data-strk-bg={`[${post.descId}] [${post.titleId}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <span className="inline-block text-xs font-semibold text-accent bg-blue-50 px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h2 id={post.titleId} className="font-bold text-lg text-slate-900 mb-2 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-sm text-slate-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-slate-200 rounded-2xl p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Have a Sourcing Question?</h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">
              Our team is happy to answer your questions about sourcing from China. Get in touch for a free consultation.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-cta text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

