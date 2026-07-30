import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeader from '@/components/shared/SectionHeader'

const posts = [
  {
    id: 'supplier-verification-guide',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing Your First Order',
    excerpt: 'Before sending money to a factory in China, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: '2026-07-15',
    readTime: '8 min read',
    imgId: 'blog-verify-a1b2',
    titleId: 'blog-verify-title',
    descId: 'blog-verify-desc',
  },
  {
    id: 'aql-inspection-explained',
    category: 'Quality Control',
    title: 'AQL Sampling Explained: What Every Importer Needs to Know',
    excerpt: 'AQL (Acceptable Quality Limit) is the international standard used for pre-shipment inspections. Learn how it works, what the numbers mean, and how to choose the right AQL level for your product.',
    date: '2026-07-08',
    readTime: '6 min read',
    imgId: 'blog-aql-c3d4',
    titleId: 'blog-aql-title',
    descId: 'blog-aql-desc',
  },
  {
    id: 'incoterms-guide',
    category: 'Shipping & Logistics',
    title: 'Incoterms for Importers: FOB, CIF, EXW — Which Should You Use?',
    excerpt: 'Choosing the wrong Incoterm can leave you exposed to unexpected costs and risks. This practical guide explains the most common Incoterms used in China trade and when to use each one.',
    date: '2026-06-28',
    readTime: '7 min read',
    imgId: 'blog-incoterms-e5f6',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    id: 'moq-negotiation',
    category: 'Sourcing Strategy',
    title: '5 Strategies to Negotiate Lower MOQs with Chinese Factories',
    excerpt: 'High minimum order quantities are one of the biggest barriers for small and medium buyers. Here are five practical strategies that have helped our clients reduce MOQs without sacrificing supplier relationships.',
    date: '2026-06-18',
    readTime: '5 min read',
    imgId: 'blog-moq-g7h8',
    titleId: 'blog-moq-title',
    descId: 'blog-moq-desc',
  },
  {
    id: 'private-label-china',
    category: 'Private Label',
    title: 'Starting a Private Label Business with Chinese Manufacturers',
    excerpt: 'Private labeling from China is one of the most effective ways to build a product brand. This guide walks through the process from product selection to branded packaging and first shipment.',
    date: '2026-06-05',
    readTime: '10 min read',
    imgId: 'blog-privlabel-i9j0',
    titleId: 'blog-privlabel-title',
    descId: 'blog-privlabel-desc',
  },
  {
    id: 'payment-terms-china',
    category: 'Payments & Risk',
    title: 'Safe Payment Methods When Buying from China',
    excerpt: 'Payment risk is a real concern when sourcing from China. This article covers the most common payment methods — T/T, L/C, PayPal, and escrow — and explains when each is appropriate.',
    date: '2026-05-22',
    readTime: '6 min read',
    imgId: 'blog-payment-k1l2',
    titleId: 'blog-payment-title',
    descId: 'blog-payment-desc',
  },
]

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
      <section className="bg-brand-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent-500 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              China Sourcing Insights
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Practical guides and industry knowledge for importers and brands sourcing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200">
            <div className="h-72 lg:h-full bg-neutral-100">
              <img
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 bg-brand-50 px-2 py-1 rounded">{featured.category}</span>
                <span className="text-xs text-neutral-400 flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">{featured.title}</h2>
              <p id={featured.descId} className="text-neutral-600 leading-relaxed mb-5">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <Link to={`/blog/${featured.id}`} className="text-sm font-semibold text-brand-700 hover:text-brand-900 flex items-center gap-1 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ id, category, title, excerpt, date, readTime, imgId, titleId, descId }) => (
              <article key={id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-44 overflow-hidden bg-neutral-100">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-600 bg-brand-50 px-2 py-1 rounded">{category}</span>
                    <span className="text-xs text-neutral-400 flex items-center gap-1"><Clock className="w-3 h-3" />{readTime}</span>
                  </div>
                  <h3 id={titleId} className="font-semibold text-neutral-900 mb-2 leading-snug">{title}</h3>
                  <p id={descId} className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">
                      {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <Link to={`/blog/${id}`} className="text-xs font-semibold text-brand-700 hover:text-brand-900 flex items-center gap-1 transition-colors">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">Ready to Start Sourcing?</h2>
          <p className="text-neutral-600 mb-6">Put our knowledge to work for your business. Get a free sourcing consultation today.</p>
          <CTAButton to="/contact" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
