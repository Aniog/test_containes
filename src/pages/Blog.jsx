import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHeader from '../components/PageHeader'
import InquirySection from '../components/home/InquirySection'
import { Calendar, Clock } from 'lucide-react'

const POSTS = [
  {
    id: 'verify-china-supplier',
    title: 'How to verify a Chinese supplier before placing your first order',
    excerpt:
      'A practical checklist for new buyers — business license checks, on-site visits, sample testing, and the documents that actually matter.',
    date: 'May 28, 2026',
    read: '7 min read',
    category: 'Supplier Verification',
    imgId: 'blog-verify-supplier-3a8f17',
  },
  {
    id: 'aql-inspections-guide',
    title: 'AQL 2.5 explained: how pre-shipment inspections protect your order',
    excerpt:
      'Understanding sampling sizes, defect classification, and how to read a QC report so you can make a clear ship / hold decision.',
    date: 'May 14, 2026',
    read: '6 min read',
    category: 'Quality Inspection',
    imgId: 'blog-aql-inspection-7d12a4',
  },
  {
    id: 'mold-tooling-china',
    title: 'Mold and tooling in China: ownership, cost, and risk management',
    excerpt:
      'Who owns the mold, how to negotiate amortization, and how to protect your design when working with a new factory.',
    date: 'April 30, 2026',
    read: '8 min read',
    category: 'Production',
    imgId: 'blog-mold-tooling-12cb8e',
  },
  {
    id: 'shipping-incoterms',
    title: 'Incoterms for China imports: FOB vs EXW vs DDP for first-time buyers',
    excerpt:
      'A simple comparison of the most-used Incoterms — and which one usually makes sense depending on your volume and experience.',
    date: 'April 18, 2026',
    read: '5 min read',
    category: 'Shipping',
    imgId: 'blog-incoterms-9f11ee',
  },
  {
    id: 'yiwu-sourcing-guide',
    title: 'Sourcing from Yiwu: what it is good for, and what it is not',
    excerpt:
      'Yiwu is unbeatable for general merchandise and gifts — but it is not the right cluster for everything. A practical guide.',
    date: 'April 04, 2026',
    read: '6 min read',
    category: 'Sourcing',
    imgId: 'blog-yiwu-guide-c7ab33',
  },
  {
    id: 'lead-time-realistic',
    title: 'How to set realistic lead times for China production',
    excerpt:
      'Why factory lead times slip, what to add as buffer, and how to plan around Chinese New Year and the Golden Week holidays.',
    date: 'March 21, 2026',
    read: '5 min read',
    category: 'Production',
    imgId: 'blog-lead-time-44dd02',
  },
]

export default function Blog() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical sourcing notes for B2B buyers"
        subtitle="Field-tested guides on supplier verification, quality control, production, and shipping from China."
      />

      <section className="py-16 md:py-24 bg-white" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <article key={p.id} className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm hover:shadow-md transition flex flex-col">
                <div className="aspect-[16/10] overflow-hidden bg-surface-muted">
                  <img
                    alt={p.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[blog-${p.id}-excerpt] [blog-${p.id}-title] ${p.category.toLowerCase()} china sourcing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="inline-flex w-fit items-center rounded-full bg-brand-sky px-2.5 py-1 text-xs font-medium text-brand-navy">
                    {p.category}
                  </span>
                  <h3 id={`blog-${p.id}-title`} className="mt-3 text-lg font-semibold text-brand-navy leading-snug">
                    {p.title}
                  </h3>
                  <p id={`blog-${p.id}-excerpt`} className="mt-2 text-sm text-ink-700 leading-relaxed flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-ink-500">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {p.read}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InquirySection sourcePage="blog" />
    </>
  )
}
