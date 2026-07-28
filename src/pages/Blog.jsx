import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import loadStrkImgConfig from '../strk-img-config.js'
import { Calendar, User, ArrowRight } from 'lucide-react'

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'A practical guide to factory verification including what documents to check, what to look for during an on-site visit, and red flags to watch out for.',
    date: 'July 15, 2026',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
  },
  {
    title: 'Understanding Quality Control Options for Importers',
    excerpt: 'An overview of different QC inspection types available to importers: pre-production, during production, pre-shipment, and container loading supervision.',
    date: 'July 8, 2026',
    author: 'SSourcing China Team',
    category: 'Quality Control',
  },
  {
    title: 'Shipping from China: A Complete Guide for First-Time Importers',
    excerpt: 'Everything you need to know about international shipping from China, including Incoterms, freight options, customs documentation, and estimated timelines.',
    date: 'June 28, 2026',
    author: 'SSourcing China Team',
    category: 'Logistics',
  },
  {
    title: 'Common Mistakes When Sourcing Products from China',
    excerpt: 'Learn about the most frequent mistakes importers make and how to avoid them, from insufficient supplier research to overlooking IP protection.',
    date: 'June 20, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
  },
  {
    title: 'The Role of a Sourcing Agent vs. Buying Direct from Factories',
    excerpt: 'A comparison of working with a sourcing agent versus contacting Chinese factories directly. Understand the costs, benefits, and risks of each approach.',
    date: 'June 12, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
  },
  {
    title: 'How to Negotiate with Chinese Suppliers: Practical Tips',
    excerpt: 'Effective negotiation strategies for working with Chinese manufacturers, including cultural considerations, pricing tactics, and building long-term relationships.',
    date: 'June 5, 2026',
    author: 'SSourcing China Team',
    category: 'Supplier Management',
  },
  {
    title: 'What to Look for During a Factory Audit in China',
    excerpt: 'A detailed checklist for conducting factory audits, covering production capacity, quality systems, worker conditions, and environmental compliance.',
    date: 'May 25, 2026',
    author: 'SSourcing China Team',
    category: 'Supplier Verification',
  },
  {
    title: 'Understanding MOQ: Minimum Order Quantities in China',
    excerpt: 'An explanation of how MOQs work in Chinese manufacturing and strategies for negotiating lower minimums as a new buyer.',
    date: 'May 18, 2026',
    author: 'SSourcing China Team',
    category: 'Sourcing Tips',
  },
  {
    title: 'Product Certification Requirements for Importing to EU and US Markets',
    excerpt: 'A guide to common certification requirements including CE, FCC, RoHS, and FDA, and how to ensure your Chinese factory complies.',
    date: 'May 10, 2026',
    author: 'SSourcing China Team',
    category: 'Compliance',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    loadStrkImgConfig().then((cfg) => {
      if (!cancelled && containerRef.current) {
        return ImageHelper.loadImages(cfg, containerRef.current)
      }
    })
    return () => { cancelled = true }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Blog</h1>
            <p className="mt-4 text-lg text-slate-600">
              Practical insights and guides for sourcing products from China
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article key={i} className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div
                  data-strk-bg-id={`blog-img-${i}`}
                  data-strk-bg={`[blog-title-${i}] [blog-header]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                  className="bg-slate-200 h-48 bg-cover bg-center"
                  
                />
                <div className="p-5">
                  <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-2.5 py-1 rounded mb-3">
                    {post.category}
                  </div>
                  <h2 id={`blog-title-${i}`} className="text-base font-bold text-slate-900 mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-brand-600 text-sm font-medium hover:text-brand-700">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}