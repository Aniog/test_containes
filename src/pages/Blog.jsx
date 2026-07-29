import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'blog-1',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify a factory in China — from checking business licenses to conducting on-site audits.',
    category: 'Supplier Verification',
    date: '2026-07-15',
    readTime: '6 min read',
    imgId: 'blog-post-1-img-a1b2c3',
  },
  {
    id: 'blog-2',
    title: '5 Common Quality Issues When Sourcing from China (And How to Avoid Them)',
    excerpt: 'Quality problems are the #1 concern for overseas buyers. Here are the most common issues and practical prevention strategies.',
    category: 'Quality Control',
    date: '2026-07-08',
    readTime: '8 min read',
    imgId: 'blog-post-2-img-d4e5f6',
  },
  {
    id: 'blog-3',
    title: 'FOB vs. CIF: Which Shipping Term Should You Use?',
    excerpt: 'Understanding Incoterms is crucial for international trade. We break down FOB and CIF to help you choose the right option.',
    category: 'Shipping & Logistics',
    date: '2026-06-28',
    readTime: '5 min read',
    imgId: 'blog-post-3-img-g7h8i9',
  },
  {
    id: 'blog-4',
    title: 'The True Cost of Sourcing from China: Beyond Unit Price',
    excerpt: 'Unit price is just the beginning. Learn about hidden costs including shipping, duties, quality control, and how to budget accurately.',
    category: 'Pricing & Costs',
    date: '2026-06-20',
    readTime: '7 min read',
    imgId: 'blog-post-4-img-j0k1l2',
  },
  {
    id: 'blog-5',
    title: 'How to Write a Product Specification Sheet for Chinese Factories',
    excerpt: 'A clear spec sheet prevents misunderstandings and quality issues. Here\'s a template and guide for writing effective product specifications.',
    category: 'Best Practices',
    date: '2026-06-12',
    readTime: '6 min read',
    imgId: 'blog-post-5-img-m3n4o5',
  },
  {
    id: 'blog-6',
    title: 'Canton Fair 2026: What Buyers Need to Know',
    excerpt: 'Planning to attend the Canton Fair? Here\'s our guide on preparation, what to expect, and how to make the most of your visit.',
    category: 'Industry News',
    date: '2026-06-05',
    readTime: '5 min read',
    imgId: 'blog-post-6-img-p6q7r8',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="blog-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Sourcing Blog
          </h1>
          <p id="blog-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            Practical guides, industry insights, and tips for buying from China. Written by our sourcing team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition">
                <div className="h-48 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.id}-title] [blog-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand-blue bg-blue-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 id={`${post.id}-title`} className="text-lg font-semibold text-brand-navy mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Have a Sourcing Question?</h2>
          <p className="text-slate-600 mb-8">Our team is happy to answer your questions about sourcing from China. Reach out anytime.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Contact Our Team <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
