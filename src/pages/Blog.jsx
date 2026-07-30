import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import SectionHeader from '@/components/SectionHeader'

const posts = [
  {
    id: 'post-1',
    titleId: 'blog-1-title',
    descId: 'blog-1-desc',
    imgId: 'blog-img-1-a1b2c3',
    category: 'Supplier Sourcing',
    title: 'How to Evaluate a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before committing to a Chinese manufacturer, there are several key checks every buyer should perform. This guide covers the essential steps to verify a supplier\'s legitimacy, capacity, and reliability.',
    date: '2026-07-15',
    readTime: '7 min read',
  },
  {
    id: 'post-2',
    titleId: 'blog-2-title',
    descId: 'blog-2-desc',
    imgId: 'blog-img-2-d4e5f6',
    category: 'Quality Control',
    title: 'Understanding AQL Sampling: A Practical Guide for Importers',
    excerpt: 'AQL (Acceptable Quality Limit) sampling is the industry standard for quality inspections. Learn how it works, what the numbers mean, and how to set the right inspection level for your products.',
    date: '2026-07-08',
    readTime: '9 min read',
  },
  {
    id: 'post-3',
    titleId: 'blog-3-title',
    descId: 'blog-3-desc',
    imgId: 'blog-img-3-g7h8i9',
    category: 'Shipping',
    title: 'Sea Freight vs. Air Freight from China: When to Use Each',
    excerpt: 'Choosing between sea and air freight affects your cost, lead time, and cash flow. This article breaks down the key factors to consider when deciding how to ship your goods from China.',
    date: '2026-06-28',
    readTime: '6 min read',
  },
  {
    id: 'post-4',
    titleId: 'blog-4-title',
    descId: 'blog-4-desc',
    imgId: 'blog-img-4-j0k1l2',
    category: 'Factory Verification',
    title: 'What a Factory Audit Actually Covers (And What It Doesn\'t)',
    excerpt: 'A factory audit is one of the most effective tools for reducing sourcing risk. But not all audits are equal. Here\'s what a thorough factory audit should cover and what questions to ask.',
    date: '2026-06-18',
    readTime: '8 min read',
  },
  {
    id: 'post-5',
    titleId: 'blog-5-title',
    descId: 'blog-5-desc',
    imgId: 'blog-img-5-m3n4o5',
    category: 'OEM & Private Label',
    title: 'Starting a Private Label Product in China: A Step-by-Step Overview',
    excerpt: 'Private labeling in China can be a cost-effective way to build a product brand. This guide walks through the key stages from product concept to branded goods on your shelf.',
    date: '2026-06-05',
    readTime: '10 min read',
  },
  {
    id: 'post-6',
    titleId: 'blog-6-title',
    descId: 'blog-6-desc',
    imgId: 'blog-img-6-p6q7r8',
    category: 'Sourcing Strategy',
    title: 'Common Mistakes First-Time China Importers Make (And How to Avoid Them)',
    excerpt: 'First-time importers often make the same avoidable mistakes. From skipping factory verification to misunderstanding Incoterms, this article covers the most common pitfalls and how to sidestep them.',
    date: '2026-05-22',
    readTime: '8 min read',
  },
]

const categoryColors = {
  'Supplier Sourcing': 'bg-blue-50 text-blue-700',
  'Quality Control': 'bg-green-50 text-green-700',
  'Shipping': 'bg-orange-50 text-orange-700',
  'Factory Verification': 'bg-purple-50 text-purple-700',
  'OEM & Private Label': 'bg-pink-50 text-pink-700',
  'Sourcing Strategy': 'bg-teal-50 text-teal-700',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const [featured, ...rest] = posts

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              China Sourcing Insights
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden bg-neutral-100 aspect-video">
              <img
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-2 py-1 rounded ${categoryColors[featured.category] || 'bg-neutral-100 text-neutral-600'}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-neutral-400 font-medium">Featured</span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4 leading-snug">{featured.title}</h2>
              <p id={featured.descId} className="text-neutral-600 leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-neutral-400 mb-6">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formatDate(featured.date)}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime}</span>
              </div>
              <Link to="/blog" className="inline-flex items-center gap-2 text-brand-700 font-semibold hover:text-brand-600 transition-colors">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="All Articles"
            title="More Sourcing Guides"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-neutral-100">
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
                  <span className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-3 ${categoryColors[post.category] || 'bg-neutral-100 text-neutral-600'}`}>
                    {post.category}
                  </span>
                  <h3 id={post.titleId} className="text-neutral-800 font-semibold mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Put This Into Practice?</h2>
          <p className="text-neutral-200 text-lg mb-8">
            Contact us to discuss your sourcing project and get a free, no-obligation quote.
          </p>
          <CTAButton to="/contact" size="lg" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
