import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTAButton from '@/components/CTAButton'

const posts = [
  {
    id: 'factory-audit-guide',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
    imgId: 'blog-img-factory-audit-a1b2c3',
    title: 'How to Conduct a Factory Audit in China: A Practical Guide for Importers',
    excerpt: 'Before placing a large order with a Chinese manufacturer, a factory audit can save you from costly mistakes. Here is what to check and how to interpret the results.',
    category: 'Factory Verification',
    date: 'July 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 'pre-shipment-inspection',
    titleId: 'blog-psi-title',
    descId: 'blog-psi-desc',
    imgId: 'blog-img-psi-d4e5f6',
    title: 'Pre-Shipment Inspection: What It Covers and Why It Matters',
    excerpt: 'A pre-shipment inspection is one of the most cost-effective ways to protect your import order. We explain what inspectors check and how to read an inspection report.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
  },
  {
    id: 'china-sourcing-mistakes',
    titleId: 'blog-mistakes-title',
    descId: 'blog-mistakes-desc',
    imgId: 'blog-img-mistakes-g7h8i9',
    title: '7 Common Mistakes When Sourcing from China (and How to Avoid Them)',
    excerpt: 'Many first-time importers make avoidable mistakes that cost time and money. From skipping supplier verification to ignoring incoterms, here are the pitfalls to watch out for.',
    category: 'Sourcing Tips',
    date: 'June 28, 2026',
    readTime: '10 min read',
  },
  {
    id: 'oem-vs-odm',
    titleId: 'blog-oem-title',
    descId: 'blog-oem-desc',
    imgId: 'blog-img-oem-j1k2l3',
    title: 'OEM vs ODM Manufacturing in China: Which Is Right for Your Business?',
    excerpt: 'Understanding the difference between OEM and ODM production is essential for any buyer considering private label or custom products from China.',
    category: 'Manufacturing',
    date: 'June 18, 2026',
    readTime: '7 min read',
  },
  {
    id: 'shipping-from-china',
    titleId: 'blog-shipping-title',
    descId: 'blog-shipping-desc',
    imgId: 'blog-img-shipping-m4n5o6',
    title: 'Sea Freight vs Air Freight from China: Cost, Speed, and When to Use Each',
    excerpt: 'Choosing the right shipping method affects your cost, lead time, and cash flow. We break down the key differences and help you decide which option fits your order.',
    category: 'Shipping & Logistics',
    date: 'June 5, 2026',
    readTime: '6 min read',
  },
  {
    id: 'supplier-negotiation',
    titleId: 'blog-negotiation-title',
    descId: 'blog-negotiation-desc',
    imgId: 'blog-img-negotiation-p7q8r9',
    title: 'How to Negotiate Price and Terms with Chinese Suppliers',
    excerpt: 'Effective negotiation with Chinese manufacturers requires understanding their business culture, pricing structure, and what levers you can pull to get better terms.',
    category: 'Sourcing Tips',
    date: 'May 22, 2026',
    readTime: '9 min read',
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
      <section className="bg-blue-950 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider mb-3">Insights & Guides</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">China Sourcing Blog</h1>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Practical guides, industry insights, and sourcing tips for global buyers importing from China.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <img
              alt={featured.title}
              data-strk-img-id={featured.imgId}
              data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full rounded-2xl shadow-md object-cover aspect-video"
            />
            <div>
              <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">{featured.category}</span>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mt-4 mb-3">{featured.title}</h2>
              <p id={featured.descId} className="text-neutral-600 leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-neutral-500 mb-6">
                <Calendar className="w-4 h-4" />
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <Link to="/blog" className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm hover:text-blue-800">
                Read Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <span className="text-xs font-medium text-blue-800 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">{post.category}</span>
                  <h3 id={post.titleId} className="text-neutral-800 font-semibold text-base mt-3 mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Put our expertise to work for your business. Get a free sourcing consultation today.
          </p>
          <CTAButton size="lg" showArrow>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
