import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 'supplier-verification-guide',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    excerpt: 'A practical guide to checking business licenses, factory audits, certifications, and red flags when evaluating Chinese manufacturers.',
    category: 'Supplier Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
    imgId: 'blog-verify-img-a1b2c3',
  },
  {
    id: 'aql-inspection-explained',
    title: 'AQL Inspection Explained: What Every Importer Needs to Know',
    excerpt: 'Understanding Acceptable Quality Levels (AQL) and how pre-shipment inspections protect your business from costly quality failures.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
    imgId: 'blog-aql-img-d4e5f6',
  },
  {
    id: 'sea-vs-air-freight',
    title: 'Sea Freight vs Air Freight from China: How to Choose',
    excerpt: 'A cost and timeline comparison of sea and air freight options, with guidance on when to use each for your China imports.',
    category: 'Shipping',
    date: 'June 28, 2026',
    readTime: '5 min read',
    titleId: 'blog-freight-title',
    descId: 'blog-freight-desc',
    imgId: 'blog-freight-img-g7h8i9',
  },
  {
    id: 'oem-vs-odm',
    title: 'OEM vs ODM: Which Manufacturing Model Is Right for Your Business?',
    excerpt: 'The key differences between OEM and ODM manufacturing in China, and how to decide which approach fits your product and budget.',
    category: 'Manufacturing',
    date: 'June 18, 2026',
    readTime: '7 min read',
    titleId: 'blog-oem-title',
    descId: 'blog-oem-desc',
    imgId: 'blog-oem-img-j1k2l3',
  },
  {
    id: 'canton-fair-guide',
    title: 'Canton Fair 2026: A Buyer\'s Guide to Sourcing at China\'s Largest Trade Show',
    excerpt: 'How to prepare for the Canton Fair, find reliable suppliers, and make the most of your visit to Guangzhou\'s premier sourcing event.',
    category: 'Trade Shows',
    date: 'June 5, 2026',
    readTime: '9 min read',
    titleId: 'blog-canton-title',
    descId: 'blog-canton-desc',
    imgId: 'blog-canton-img-m4n5o6',
  },
  {
    id: 'product-certification-china',
    title: 'CE, FCC, and RoHS: A Guide to Product Certifications for China Imports',
    excerpt: 'Which certifications your products need for the US, EU, and other markets, and how to ensure your Chinese supplier can meet them.',
    category: 'Compliance',
    date: 'May 22, 2026',
    readTime: '10 min read',
    titleId: 'blog-cert-title',
    descId: 'blog-cert-desc',
    imgId: 'blog-cert-img-p7q8r9',
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Manufacturing', 'Trade Shows', 'Compliance']

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
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-china text-sm font-semibold uppercase tracking-wider">Sourcing Insights</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Practical guides, industry insights, and expert advice for global buyers sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-default ${
                  cat === 'All'
                    ? 'bg-navy text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured Post */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="rounded-xl overflow-hidden bg-slate-100 aspect-video">
              <img
                alt={posts[0].title}
                data-strk-img-id={posts[0].imgId}
                data-strk-img={`[${posts[0].descId}] [${posts[0].titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs font-medium bg-red-china/10 text-red-china px-3 py-1 rounded-full w-fit mb-3">{posts[0].category}</span>
              <h2 id={posts[0].titleId} className="text-2xl md:text-3xl font-bold text-navy mb-3">{posts[0].title}</h2>
              <p id={posts[0].descId} className="text-slate-600 leading-relaxed mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-5">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{posts[0].date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{posts[0].readTime}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-red-china font-semibold text-sm hover:underline">
                Read Article <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-full">{post.category}</span>
                  <h3 id={post.titleId} className="text-navy font-semibold text-base mt-3 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">Get Sourcing Insights in Your Inbox</h2>
          <p className="text-slate-600 mb-8">
            Practical guides and industry updates for global buyers sourcing from China. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 border border-slate-300 rounded-md px-4 py-2.5 text-sm text-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-china/30 focus:border-red-china"
            />
            <button className="bg-red-china text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-red-china-600 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
