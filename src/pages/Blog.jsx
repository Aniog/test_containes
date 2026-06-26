import { useEffect, useRef } from 'react'
import { format } from 'date-fns'
import PageHeader from '@/components/shared/PageHeader'
import CTASection from '@/components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Clock } from 'lucide-react'

const posts = [
  {
    id: 'verify-factory',
    title: 'How to verify a Chinese factory before placing your first order',
    excerpt:
      'A practical checklist for buyers: business license checks, on-site audit steps, what photos and documents to ask for, and the red flags to watch.',
    category: 'Supplier verification',
    readMin: 8,
    date: '2026-05-18',
  },
  {
    id: 'aql-inspections',
    title: 'AQL inspections explained: how to actually use them',
    excerpt:
      'AQL is widely used but often misunderstood. Here is how to set inspection levels, sample sizes and acceptance limits that match your real risk.',
    category: 'Quality control',
    readMin: 7,
    date: '2026-04-22',
  },
  {
    id: 'sea-vs-air',
    title: 'Sea vs air vs rail: which freight mode fits your order?',
    excerpt:
      'A decision framework for picking the right freight mode based on margin, lead time, volume and seasonality — with examples from real orders.',
    category: 'Shipping & logistics',
    readMin: 6,
    date: '2026-04-05',
  },
  {
    id: 'oem-mistakes',
    title: 'Five expensive mistakes buyers make with OEM in China',
    excerpt:
      'From unclear specifications to weak IP clauses, here are the common OEM mistakes we see — and the simple steps you can take to avoid them.',
    category: 'OEM & private label',
    readMin: 9,
    date: '2026-03-12',
  },
  {
    id: 'price-negotiation',
    title: 'Price negotiation with Chinese suppliers: what actually works',
    excerpt:
      'Anchoring, breakdown analysis, MOQ flexibility and lead-time levers — what works, what doesn’t, and how to keep a long-term relationship.',
    category: 'Sourcing strategy',
    readMin: 7,
    date: '2026-02-20',
  },
  {
    id: 'trading-vs-factory',
    title: 'Trading company vs factory: how to tell — and when each is fine',
    excerpt:
      'Trading companies are not always bad. Here is how to identify one, and when it actually makes sense to buy through a trader instead of a factory.',
    category: 'Supplier verification',
    readMin: 5,
    date: '2026-01-31',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Blog"
        title="Practical guides on sourcing from China"
        description="Notes from our team — focused on what actually helps buyers reduce risk, save money and ship on time."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article
                key={p.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={p.title}
                    data-strk-img-id={`blog-${p.id}-img`}
                    data-strk-img={`[blog-${p.id}-title] [blog-${p.id}-category]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs">
                    <span id={`blog-${p.id}-category`} className="font-semibold uppercase tracking-wider text-blue-700">
                      {p.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5" /> {p.readMin} min read
                    </span>
                  </div>
                  <h2 id={`blog-${p.id}-title`} className="mt-3 text-lg font-semibold text-slate-900 leading-snug">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{format(new Date(p.date), 'PP')}</span>
                    <span className="inline-flex items-center gap-1 text-blue-700 font-semibold text-sm">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a sourcing question we should write about?"
        description="Send us your question. If it's useful for other buyers, we'll cover it on the blog — and we'll reply to you directly either way."
      />
    </div>
  )
}
