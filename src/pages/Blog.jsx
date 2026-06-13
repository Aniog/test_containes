import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'avoid-sourcing-pitfalls',
    title: '5 Common China Sourcing Pitfalls and How to Avoid Them',
    excerpt: 'From quality issues to hidden costs — learn the most frequent mistakes buyers make when sourcing from China and proven strategies to prevent them.',
    date: 'June 5, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Guide',
    imgId: 'blog-pitfalls-a1b2c3',
  },
  {
    id: 'factory-audit-checklist',
    title: 'The Ultimate Factory Audit Checklist: What to Check Before You Commit',
    excerpt: 'A comprehensive guide to conducting effective factory audits in China. Learn the 6 critical areas to evaluate and the red flags that should make you walk away.',
    date: 'May 22, 2026',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    imgId: 'blog-audit-d4e5f6',
  },
  {
    id: 'incoterms-explained',
    title: 'Incoterms Explained: FOB vs. EXW vs. CIF for China Imports',
    excerpt: 'Understanding shipping terms is essential for accurate cost calculation. We break down the most common Incoterms and which one makes sense for your situation.',
    date: 'May 10, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
    imgId: 'blog-incoterms-g7h8i9',
  },
  {
    id: 'verify-chinese-supplier',
    title: 'How to Verify a Chinese Supplier Without Visiting the Factory',
    excerpt: 'Can\'t travel to China? Here are 7 practical methods to verify a supplier remotely — from license checks to video audits and third-party inspection services.',
    date: 'April 28, 2026',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
    imgId: 'blog-verify-j0k1l2',
  },
  {
    id: 'quality-control-aql',
    title: 'Understanding AQL Sampling for Quality Control Inspections',
    excerpt: 'What AQL levels mean, how to choose the right sampling plan for your product, and why it\'s the international standard for QC inspections in China.',
    date: 'April 15, 2026',
    author: 'SSourcing China Team',
    category: 'Quality Control',
    imgId: 'blog-aql-m3n4o5',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: Air Freight vs. Sea Freight vs. Express',
    excerpt: 'A practical comparison of shipping methods for China imports. Cost, speed, and volume trade-offs — and how to choose the best option for your order.',
    date: 'March 30, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
    imgId: 'blog-shipping-p6q7r8',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h1 id="blog-heading" className="text-4xl sm:text-5xl font-bold text-brand-navy tracking-tight">
              Blog
            </h1>
            <p id="blog-subtitle" className="mt-4 text-lg text-gray-600">
              Practical insights on China sourcing, quality control, logistics, and supplier management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                <div
                  className="aspect-[16/9]"
                  data-strk-bg-id={post.imgId}
                  data-strk-bg={`[blog-post-${post.id}-excerpt] [blog-post-${post.id}-title] [blog-subtitle] [blog-heading]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <div className="p-5">
                  <span className="text-xs font-medium text-brand-orange bg-orange-50 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <h2 id={`blog-post-${post.id}-title`} className="mt-3 text-lg font-semibold text-brand-navy leading-snug group-hover:text-brand-orange transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p id={`blog-post-${post.id}-excerpt`} className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-medium rounded-lg transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}