import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Clock } from 'lucide-react'

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending payment to a Chinese factory, there are several verification steps every importer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    imgId: 'blog-verify-img-a1b2c3',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
    title: 'AQL Sampling Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the standard used by QC inspectors worldwide. Understanding how sampling works helps you set realistic quality expectations and make informed decisions about your shipments.',
    imgId: 'blog-aql-img-d4e5f6',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'sea-vs-air-freight',
    category: 'Shipping',
    date: 'June 28, 2026',
    readTime: '5 min read',
    title: 'Sea Freight vs Air Freight from China: A Practical Comparison',
    excerpt: 'Choosing between sea and air freight depends on your product, timeline, and budget. This article breaks down the cost, transit time, and suitability of each option for different types of shipments.',
    imgId: 'blog-freight-img-g7h8i9',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
  },
  {
    id: 'private-label-china',
    category: 'Private Label',
    date: 'June 18, 2026',
    readTime: '10 min read',
    title: 'Starting a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labeling with Chinese factories is one of the most cost-effective ways to build a product brand. This guide covers how to find OEM manufacturers, protect your brand, and manage the development process.',
    imgId: 'blog-privatelabel-img-j1k2l3',
    titleId: 'blog-privatelabel-title',
    descId: 'blog-privatelabel-desc',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping',
    date: 'June 5, 2026',
    readTime: '7 min read',
    title: 'Incoterms for China Imports: FOB, CIF, EXW Explained',
    excerpt: 'Incoterms define who is responsible for shipping costs, insurance, and risk at each stage of the supply chain. Understanding the difference between FOB, CIF, and EXW can save you money and avoid disputes.',
    imgId: 'blog-incoterms-img-m4n5o6',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'china-sourcing-mistakes',
    category: 'Sourcing Tips',
    date: 'May 22, 2026',
    readTime: '9 min read',
    title: '7 Common China Sourcing Mistakes and How to Avoid Them',
    excerpt: 'Many first-time importers make avoidable mistakes that cost time and money. From skipping factory audits to misunderstanding payment terms, this article covers the most common pitfalls and how to prevent them.',
    imgId: 'blog-mistakes-img-p7q8r9',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Private Label', 'Sourcing Tips']

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-400 mb-3 block">Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              China Sourcing Blog
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-brand-700 text-white'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:border-brand-300 hover:text-brand-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent-500 bg-amber-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-neutral-400">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 id={post.titleId} className="font-semibold text-brand-900 mb-2 text-base leading-snug">{post.title}</h2>
                  <p id={post.descId} className="text-neutral-600 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                    <span className="text-xs text-neutral-400">{post.date}</span>
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 text-sm font-medium"
                    >
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-700">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get Sourcing Tips in Your Inbox</h2>
          <p className="text-brand-200 mb-6">
            Practical guides and industry updates for global buyers sourcing from China.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-4 py-3 rounded-lg text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-accent-400"
            />
            <button className="bg-accent-500 hover:bg-accent-400 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
