import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'Learn the essential steps to verify Chinese suppliers, from business license checks to factory audits, before committing to a purchase order.',
    author: 'SSourcing Team',
    date: 'July 15, 2026',
    category: 'Supplier Verification',
    imgId: 'blog-verify-supplier-1a2b3c',
    imgQuery: '[blog-post-1-title] [blog-heading]',
    titleId: 'blog-post-1-title',
    slug: 'how-to-verify-chinese-supplier',
  },
  {
    title: 'A Guide to Quality Inspection Standards for China Sourcing',
    excerpt: 'Understand AQL sampling, inspection types, and how to set up effective quality control protocols when manufacturing products in China.',
    author: 'SSourcing Team',
    date: 'July 8, 2026',
    category: 'Quality Control',
    imgId: 'blog-qc-standards-2b3c4d',
    imgQuery: '[blog-post-2-title] [blog-heading]',
    titleId: 'blog-post-2-title',
    slug: 'guide-to-quality-inspection-standards',
  },
  {
    title: 'Top 10 Mistakes Buyers Make When Sourcing from China',
    excerpt: 'Avoid these common pitfalls that cost international buyers time, money, and quality when sourcing products from Chinese manufacturers.',
    author: 'SSourcing Team',
    date: 'June 28, 2026',
    category: 'Sourcing Tips',
    imgId: 'blog-mistakes-3c4d5e',
    imgQuery: '[blog-post-3-title] [blog-heading]',
    titleId: 'blog-post-3-title',
    slug: 'top-10-mistakes-sourcing-from-china',
  },
  {
    title: 'Understanding Incoterms for China Imports',
    excerpt: 'A practical breakdown of Incoterms 2024 and how they affect your shipping costs, responsibilities, and risk when importing from China.',
    author: 'SSourcing Team',
    date: 'June 20, 2026',
    category: 'Logistics',
    imgId: 'blog-incoterms-4d5e6f',
    imgQuery: '[blog-post-4-title] [blog-heading]',
    titleId: 'blog-post-4-title',
    slug: 'understanding-incoterms-china-imports',
  },
  {
    title: 'Factory Audit Checklist: What to Look For',
    excerpt: 'A comprehensive checklist for evaluating Chinese factories, covering production capacity, quality systems, certifications, and working conditions.',
    author: 'SSourcing Team',
    date: 'June 12, 2026',
    category: 'Factory Audits',
    imgId: 'blog-audit-checklist-5e6f7a',
    imgQuery: '[blog-post-5-title] [blog-heading]',
    titleId: 'blog-post-5-title',
    slug: 'factory-audit-checklist',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers',
    excerpt: 'Practical negotiation strategies for international buyers, including pricing, payment terms, MOQ, and building long-term supplier relationships.',
    author: 'SSourcing Team',
    date: 'June 5, 2026',
    category: 'Sourcing Tips',
    imgId: 'blog-negotiate-6f7a8b',
    imgQuery: '[blog-post-6-title] [blog-heading]',
    titleId: 'blog-post-6-title',
    slug: 'how-to-negotiate-with-chinese-suppliers',
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
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
        <div className="section-container text-center">
          <h1 id="blog-heading" className="text-4xl md:text-5xl font-bold mb-6">Sourcing Insights & Guides</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Practical advice, guides, and best practices for sourcing products from China. 
            Written by our team of experienced sourcing professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="card flex flex-col">
                <div className="aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={post.imgQuery}
                    data-strk-img-ratio="16x10"
                    data-strk-img-width="600"
                    alt={post.title}
                    className="w-full h-full object-cover"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
                <h2 id={post.titleId} className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm font-medium text-primary hover:text-primary-light inline-flex items-center gap-1"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest sourcing tips, guides, and industry insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1"
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