import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import { CalendarDays, Clock, ArrowRight } from 'lucide-react'

const POSTS = [
  {
    id: 'verify-china-supplier',
    title: 'How to verify a Chinese supplier before placing your first order',
    excerpt: 'Five practical checks that go beyond a business license — from real workshop visits to export-history cross-checks.',
    category: 'Supplier Verification',
    readTime: '8 min read',
    date: '2026-05-12',
    imgId: 'blog-verify-aa11',
  },
  {
    id: 'aql-inspection-explained',
    title: 'AQL 2.5 vs 4.0: which inspection level should you choose?',
    excerpt: 'A clear, practical guide to AQL sampling, with example defect tables and when to escalate inspection rigor.',
    category: 'Quality Control',
    readTime: '6 min read',
    date: '2026-04-20',
    imgId: 'blog-aql-bb22',
  },
  {
    id: 'mov-mqo-negotiation',
    title: 'Negotiating MOQ, packaging and tooling without losing the supplier',
    excerpt: 'How to push for better terms while keeping the relationship intact, especially with smaller factories.',
    category: 'Negotiation',
    readTime: '7 min read',
    date: '2026-04-02',
    imgId: 'blog-negotiation-cc33',
  },
  {
    id: 'fob-cif-ddp',
    title: 'FOB vs CIF vs DDP: which incoterm makes sense for your business',
    excerpt: 'A no-nonsense comparison of the three most-used incoterms when shipping from China, with real cost examples.',
    category: 'Logistics',
    readTime: '9 min read',
    date: '2026-03-15',
    imgId: 'blog-incoterms-dd44',
  },
  {
    id: 'chinese-new-year-planning',
    title: 'Planning around Chinese New Year: what your sourcing schedule must avoid',
    excerpt: 'CNY can stretch lead times by 4–6 weeks. Here is a practical timeline that protects your launches and re-stocks.',
    category: 'Production',
    readTime: '5 min read',
    date: '2026-02-08',
    imgId: 'blog-cny-ee55',
  },
  {
    id: 'private-label-checklist',
    title: 'Private label launch checklist for first-time importers',
    excerpt: 'Packaging, barcodes, compliance labeling, tooling ownership and IP — a step-by-step list before pressing go.',
    category: 'Private Label',
    readTime: '10 min read',
    date: '2026-01-22',
    imgId: 'blog-privatelabel-ff66',
  },
]

export default function Blog() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical guides for buyers importing from China"
        description="Field notes from supplier visits, audits and inspections. No fluff and no recycled marketing — just what helps you make better sourcing decisions."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section ref={containerRef} className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((p) => (
              <article key={p.id} className="bg-white rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-md transition flex flex-col">
                <div className="aspect-[16/9] bg-surface-2 overflow-hidden">
                  <img
                    alt={p.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[blog-${p.id}-title] [blog-${p.id}-cat] sourcing china`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-ink-soft">
                    <span id={`blog-${p.id}-cat`} className="font-semibold text-brand bg-surface-2 px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                    <span className="inline-flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> {new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {p.readTime}</span>
                  </div>
                  <h2 id={`blog-${p.id}-title`} className="mt-3 font-semibold text-brand text-lg leading-snug">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed flex-1">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-accent font-semibold text-sm">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 bg-white border border-line rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-brand">Get sourcing field notes monthly</h3>
            <p className="mt-2 text-ink-soft">One short email per month with practical lessons from real sourcing projects. No spam.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="you@company.com" className="flex-1 bg-white border border-line rounded-lg px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent" />
              <Link to="/contact" className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-lg font-semibold">Subscribe</Link>
            </div>
            <p className="mt-3 text-xs text-ink-soft">By subscribing you agree to be contacted by SSourcing China. Unsubscribe any time.</p>
          </div>
        </div>
      </section>
    </>
  )
}
