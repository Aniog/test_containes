import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/shared/CtaBanner'

const posts = [
  {
    id: 'factory-audit-checklist',
    titleId: 'blog-title-factory-audit-checklist',
    descId: 'blog-desc-factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Verify Before You Order',
    excerpt:
      'A practical checklist for evaluating Chinese manufacturers, from business licenses and production lines to quality systems and export experience.',
    date: 'June 10, 2026',
    category: 'Factory Verification',
    imgId: 'blog-img-factory-audit-1a2b',
  },
  {
    id: 'incoterms-explained',
    titleId: 'blog-title-incoterms-explained',
    descId: 'blog-desc-incoterms-explained',
    title: 'Incoterms Explained for First-Time China Buyers',
    excerpt:
      'FOB, CIF, EXW, DDP — what they mean, who pays for what, and which term is best for different sourcing situations.',
    date: 'May 28, 2026',
    category: 'Shipping',
    imgId: 'blog-img-incoterms-2b3c',
  },
  {
    id: 'avoid-quality-problems',
    titleId: 'blog-title-avoid-quality-problems',
    descId: 'blog-desc-avoid-quality-problems',
    title: 'How to Avoid Quality Problems When Sourcing from China',
    excerpt:
      'Why most quality issues start with unclear specifications, and how to build inspections into your process from day one.',
    date: 'May 12, 2026',
    category: 'Quality Control',
    imgId: 'blog-img-quality-problems-3c4d',
  },
  {
    id: 'canton-fair-guide',
    titleId: 'blog-title-canton-fair-guide',
    descId: 'blog-desc-canton-fair-guide',
    title: 'Canton Fair Guide for Overseas Buyers',
    excerpt:
      'How to prepare, what to bring, which halls to prioritize, and how to follow up after the fair.',
    date: 'April 22, 2026',
    category: 'Sourcing Strategy',
    imgId: 'blog-img-canton-fair-4d5e',
  },
  {
    id: 'payment-terms',
    titleId: 'blog-title-payment-terms',
    descId: 'blog-desc-payment-terms',
    title: 'Safe Payment Terms for China Suppliers',
    excerpt:
      'T/T, L/C, Alibaba Trade Assurance, and escrow — a straightforward guide to protecting your deposit and final payment.',
    date: 'April 05, 2026',
    category: 'Payments',
    imgId: 'blog-img-payment-terms-5e6f',
  },
  {
    id: 'product-samples',
    titleId: 'blog-title-product-samples',
    descId: 'blog-desc-product-samples',
    title: 'How to Order and Evaluate Product Samples',
    excerpt:
      'Sample fees, shipping methods, and what to check when a sample arrives so you can approve production with confidence.',
    date: 'March 18, 2026',
    category: 'Quality Control',
    imgId: 'blog-img-product-samples-6f7g',
  },
]

export default function Blog() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-300 mb-3">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Blog</h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Practical guides and tips for buying from China, managing suppliers,
            and protecting your orders.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Latest articles"
            description="Clear, no-fluff advice from our sourcing team in Shenzhen."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={post.imgId}
                    data-strk-img={`[${post.descId}] [${post.titleId}] [page-blog-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                  <h2
                    id={post.titleId}
                    className="mt-3 text-lg font-semibold text-slate-900"
                  >
                    {post.title}
                  </h2>
                  <p
                    id={post.descId}
                    className="mt-2 text-sm text-slate-600 leading-relaxed flex-1"
                  >
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-800 hover:underline"
                  >
                    Read article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
