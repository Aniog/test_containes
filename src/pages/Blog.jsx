import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Calendar, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    title: 'How to Find Reliable Suppliers in China: A Complete Guide',
    excerpt: 'Learn the essential steps for identifying, verifying, and selecting trustworthy suppliers in China. This guide covers online platforms, trade shows, sourcing agents, and factory audits.',
    category: 'Supplier Sourcing',
    date: 'July 15, 2026',
    readTime: '8 min read',
    imgId: 'blog-find-suppliers',
    titleId: 'blog-find-suppliers-title',
    descId: 'blog-find-suppliers-desc',
  },
  {
    title: 'Quality Control in China: Pre-Shipment Inspection Checklist',
    excerpt: 'A comprehensive pre-shipment inspection checklist to help you avoid receiving defective products. Covers AQL sampling, common defects, and documentation requirements.',
    category: 'Quality Control',
    date: 'July 8, 2026',
    readTime: '6 min read',
    imgId: 'blog-qc-checklist',
    titleId: 'blog-qc-checklist-title',
    descId: 'blog-qc-checklist-desc',
  },
  {
    title: 'Understanding Incoterms: A Guide for Importers from China',
    excerpt: 'Navigate the complex world of international shipping terms. Learn the difference between FOB, CIF, EXW, DDP, and other Incoterms used in China sourcing.',
    category: 'Shipping & Logistics',
    date: 'June 28, 2026',
    readTime: '7 min read',
    imgId: 'blog-incoterms',
    titleId: 'blog-incoterms-title',
    descId: 'blog-incoterms-desc',
  },
  {
    title: 'Factory Audits in China: What to Look For',
    excerpt: 'A practical guide to conducting factory audits in China. Learn what to inspect, which certifications matter, and how to spot red flags before placing an order.',
    category: 'Factory Verification',
    date: 'June 20, 2026',
    readTime: '9 min read',
    imgId: 'blog-factory-audit',
    titleId: 'blog-factory-audit-title',
    descId: 'blog-factory-audit-desc',
  },
  {
    title: 'MOQ Negotiation Tips: How to Get Lower Minimum Orders',
    excerpt: 'Practical strategies for negotiating lower MOQs with Chinese suppliers. Learn when and how to push for smaller initial orders without damaging supplier relationships.',
    category: 'Negotiation',
    date: 'June 12, 2026',
    readTime: '5 min read',
    imgId: 'blog-moq-negotiation',
    titleId: 'blog-moq-negotiation-title',
    descId: 'blog-moq-negotiation-desc',
  },
  {
    title: 'China Import Regulations: Compliance Guide by Country',
    excerpt: 'Navigate import regulations for products sourced from China. Covers CE marking, FDA requirements, FCC compliance, and country-specific standards for major markets.',
    category: 'Compliance',
    date: 'June 5, 2026',
    readTime: '10 min read',
    imgId: 'blog-compliance',
    titleId: 'blog-compliance-title',
    descId: 'blog-compliance-desc',
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
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Insights & Guides</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">Sourcing Knowledge Hub</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Expert insights, practical guides, and industry updates to help you source products from China more effectively.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group rounded-xl overflow-hidden border border-gray-100 hover:border-brand-orange/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] China sourcing guide`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-orange bg-orange-50 px-2.5 py-1 rounded-full">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="text-lg font-semibold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p id={post.descId} className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-brand-orange group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
