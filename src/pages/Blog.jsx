import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Verify a Chinese Factory in 5 Steps',
    excerpt: 'Before you send a deposit, confirm legitimacy, capacity, and quality systems with this practical audit checklist.',
    category: 'Factory Verification',
    date: 'July 15, 2026',
    imgId: 'blog-factory-verify-a1b2c3',
    descId: 'blog-factory-verify-desc',
  },
  {
    title: 'Understanding AQL Levels for Pre-Shipment Inspections',
    excerpt: 'A clear guide to Acceptable Quality Limit standards and how to set the right inspection criteria for your product.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    imgId: 'blog-aql-levels-d4e5f6',
    descId: 'blog-aql-levels-desc',
  },
  {
    title: 'Incoterms 2025: What Buyers Need to Know',
    excerpt: 'How the latest shipping terms affect cost allocation, risk, and insurance when importing from China.',
    category: 'Shipping & Logistics',
    date: 'June 28, 2026',
    imgId: 'blog-incoterms-g7h8i9',
    descId: 'blog-incoterms-desc',
  },
  {
    title: 'Red Flags When Sourcing Suppliers on Alibaba',
    excerpt: 'Spot warning signs early — from suspicious pricing to incomplete profiles — and protect your business.',
    category: 'Supplier Sourcing',
    date: 'June 20, 2026',
    imgId: 'blog-alibaba-redflags-j0k1l2',
    descId: 'blog-alibaba-redflags-desc',
  },
  {
    title: 'MOQ Negotiation Strategies That Actually Work',
    excerpt: 'Practical tactics to lower minimum order quantities without burning bridges with manufacturers.',
    category: 'Negotiation',
    date: 'June 12, 2026',
    imgId: 'blog-moq-negotiation-m3n4o5',
    descId: 'blog-moq-negotiation-desc',
  },
  {
    title: 'The Real Cost of Sourcing from China',
    excerpt: 'Beyond unit price — factor in inspection, shipping, duties, and hidden costs to calculate true landed cost.',
    category: 'Cost Management',
    date: 'June 5, 2026',
    imgId: 'blog-real-cost-p6q7r8',
    descId: 'blog-real-cost-desc',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="blog-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Sourcing Insights
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Practical guides, industry updates, and lessons learned from over a decade of sourcing in China.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [blog-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-brand bg-blue-50 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h2 id={`${post.descId}-title`} className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                  <p id={post.descId} className="text-sm text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-brand group-hover:text-brand-light transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Need Personalized Sourcing Advice?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Our team is happy to discuss your specific product and challenges in a free consultation.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
