import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTAButton from '@/components/CTAButton'

const posts = [
  {
    id: 'how-to-verify-chinese-supplier',
    category: 'Supplier Verification',
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    titleId: 'blog1-title',
    descId: 'blog1-desc',
    imgId: 'blog1-img-b001',
    excerpt: 'Before sending money to a Chinese factory, there are several verification steps every buyer should take. This guide covers business license checks, factory audits, and red flags to watch for.',
    date: 'July 15, 2026',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 'pre-shipment-inspection-guide',
    category: 'Quality Control',
    title: 'Pre-Shipment Inspection: What It Is and Why You Need It',
    titleId: 'blog2-title',
    descId: 'blog2-desc',
    imgId: 'blog2-img-b002',
    excerpt: 'A pre-shipment inspection (PSI) is one of the most cost-effective ways to protect your order. Learn what inspectors check, how to prepare your specifications, and when to use a third-party inspector.',
    date: 'July 8, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 'fob-vs-cif-shipping-terms',
    category: 'Shipping',
    title: 'FOB vs CIF: Which Shipping Term Is Right for Your Import?',
    titleId: 'blog3-title',
    descId: 'blog3-desc',
    imgId: 'blog3-img-b003',
    excerpt: 'Understanding Incoterms is essential for any importer. This article explains the difference between FOB and CIF, and helps you decide which term gives you more control and better pricing.',
    date: 'June 28, 2026',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 'china-sourcing-mistakes',
    category: 'Sourcing Tips',
    title: '7 Common Mistakes Buyers Make When Sourcing from China',
    titleId: 'blog4-title',
    descId: 'blog4-desc',
    imgId: 'blog4-img-b004',
    excerpt: 'From skipping factory audits to ignoring payment terms, these are the most common and costly mistakes overseas buyers make when sourcing from Chinese manufacturers.',
    date: 'June 18, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 'oem-vs-odm-china',
    category: 'Manufacturing',
    title: 'OEM vs ODM: Understanding the Difference for China Sourcing',
    titleId: 'blog5-title',
    descId: 'blog5-desc',
    imgId: 'blog5-img-b005',
    excerpt: 'OEM and ODM are two different manufacturing models with different implications for cost, IP, and customization. This guide explains both and helps you choose the right approach.',
    date: 'June 5, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 'canton-fair-guide',
    category: 'Trade Shows',
    title: 'Canton Fair 2026: A Practical Guide for First-Time Buyers',
    titleId: 'blog6-title',
    descId: 'blog6-desc',
    imgId: 'blog6-img-b006',
    excerpt: 'The Canton Fair is the world\'s largest trade fair and a key sourcing event for importers. This guide covers registration, what to bring, how to evaluate suppliers on the floor, and follow-up best practices.',
    date: 'May 22, 2026',
    readTime: '8 min read',
    featured: false,
  },
]

const categories = ['All', 'Supplier Verification', 'Quality Control', 'Shipping', 'Sourcing Tips', 'Manufacturing', 'Trade Shows']

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Insights & Guides</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Blog
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-16">
              <div className="bg-light-blue rounded-2xl overflow-hidden shadow-sm border border-border">
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      data-strk-img-id={featured.imgId}
                      data-strk-img={`[${featured.descId}] [${featured.titleId}] China sourcing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={featured.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <span className="text-china-red text-xs font-semibold uppercase tracking-wider mb-2">{featured.category}</span>
                    <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-4">{featured.title}</h2>
                    <p id={featured.descId} className="text-text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-text-muted text-sm mb-6">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featured.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${featured.id}`}
                      className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-china-red transition-colors"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ id, category, title, titleId, descId, imgId, excerpt, date, readTime }) => (
              <article key={id} className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}] China sourcing`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-china-red text-white text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 id={titleId} className="text-navy font-bold text-base mb-2 leading-snug">{title}</h3>
                  <p id={descId} className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-text-muted text-xs">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{readTime}</span>
                    </div>
                    <Link
                      to={`/blog/${id}`}
                      className="text-navy text-xs font-semibold hover:text-china-red transition-colors flex items-center gap-1"
                    >
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Sourcing?</h2>
          <p className="text-white/70 text-lg mb-8">
            Put our expertise to work for your business. Get a free sourcing consultation today.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
