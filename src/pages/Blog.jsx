import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/layout/SEO'
import { ArrowRight, Calendar } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    excerpt: 'A practical checklist for checking licenses, production capacity, and quality systems before you commit.',
    date: '2026-07-15',
    category: 'Factory Verification',
    slug: 'verify-chinese-factory',
    imgId: 'blog-verify-factory-ssourcing-1a2b',
  },
  {
    title: 'Pre-Shipment Inspection: What to Check and Why It Matters',
    excerpt: 'Learn the key checkpoints in a pre-shipment inspection and how it protects your order.',
    date: '2026-07-08',
    category: 'Quality Control',
    slug: 'pre-shipment-inspection',
    imgId: 'blog-preshipment-ssourcing-3c4d',
  },
  {
    title: 'Understanding Incoterms When Shipping from China',
    excerpt: 'FOB, CIF, DDP — what do they mean for cost, risk, and control of your shipment?',
    date: '2026-06-28',
    category: 'Shipping',
    slug: 'incoterms-shipping-china',
    imgId: 'blog-incoterms-ssourcing-5e6f',
  },
  {
    title: 'How to Negotiate Payment Terms with Chinese Suppliers',
    excerpt: 'Reduce risk with balanced payment terms that protect both you and your supplier.',
    date: '2026-06-20',
    category: 'Sourcing Tips',
    slug: 'payment-terms-china-suppliers',
    imgId: 'blog-payment-ssourcing-7g8h',
  },
  {
    title: '5 Signs a Supplier Quote Is Too Good to Be True',
    excerpt: 'Spot red flags in quotations before they turn into expensive production problems.',
    date: '2026-06-12',
    category: 'Supplier Sourcing',
    slug: 'supplier-quote-red-flags',
    imgId: 'blog-quoteflags-ssourcing-9i0j',
  },
  {
    title: 'Customs Documents You Need When Importing from China',
    excerpt: 'A straightforward guide to commercial invoices, packing lists, bills of lading, and certificates.',
    date: '2026-06-05',
    category: 'Shipping',
    slug: 'customs-documents-importing',
    imgId: 'blog-customs-ssourcing-1k2l',
  },
]

export default function BlogPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <SEO
        title="Blog | China Sourcing Tips & Insights | SSourcing China"
        description="Practical articles on supplier verification, quality control, shipping, and sourcing from China."
      />
      <div ref={containerRef}>
        <section className="bg-slate-900 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label text-brand-400">Blog</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Sourcing insights from the ground
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Practical guides and tips to help you source smarter from China.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-page">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.slug} className="card overflow-hidden group flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-strk-img-id={post.imgId}
                      data-strk-img={`[blog-title-${post.slug}] [blog-category-${post.slug}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3 text-sm text-slate-500">
                      <span className="text-brand-700 font-medium" id={`blog-category-${post.slug}`}>{post.category}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <h2 id={`blog-title-${post.slug}`} className="text-xl font-bold mb-3">{post.title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-brand-700 font-medium hover:text-brand-800"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
