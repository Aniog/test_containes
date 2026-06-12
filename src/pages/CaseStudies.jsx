import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote, MapPin, TrendingUp, ShieldCheck, Truck } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'

const studies = [
  {
    id: 'study1',
    industry: 'Home & Kitchen',
    region: 'Europe (Germany)',
    title: 'Stainless cookware program for a national retailer',
    challenge:
      'The buyer relied on a single trader and faced inconsistent quality, growing prices, and delayed shipments. They needed a stable supply chain for a 12-SKU cookware line.',
    approach: [
      'Audited 7 factories in Yongkang and shortlisted 2 with relevant ISO and LFGB certifications.',
      'Negotiated a tiered pricing model based on annual volume.',
      'Implemented DUPRO and pre-shipment inspections at AQL 2.5.',
    ],
    results: [
      { icon: TrendingUp, value: '-18%', label: 'Lower landed cost vs. previous supplier' },
      { icon: ShieldCheck, value: '< 0.5%', label: 'Field defect rate after 12 months' },
      { icon: Truck, value: '100%', label: 'On-time shipments (last 8 orders)' },
    ],
    quote:
      'They became our team in China. Weekly reports gave us visibility we never had with our previous trader.',
    quoteAuthor: 'Procurement Lead, kitchen retailer (Germany)',
  },
  {
    id: 'study2',
    industry: 'Consumer Electronics',
    region: 'North America (USA)',
    title: 'Smart accessories ODM for a consumer brand',
    challenge:
      'A US brand was launching three new SKUs and needed an ODM factory that could co-design, certify (FCC, CE), and deliver to a tight launch deadline.',
    approach: [
      'Selected an ODM factory in Shenzhen with prior FCC experience.',
      'Coordinated tooling, EVT/DVT/PVT samples and lab testing in 9 weeks.',
      'Consolidated air shipments to meet retail set dates.',
    ],
    results: [
      { icon: TrendingUp, value: '71% → 96%', label: 'On-time delivery rate over 6 months' },
      { icon: ShieldCheck, value: '0', label: 'Major non-conformities at launch' },
      { icon: Truck, value: '3 SKUs', label: 'Launched on schedule' },
    ],
    quote:
      'The DUPRO catch on a flex cable issue saved us a recall. The team is detail-oriented and responsive across time zones.',
    quoteAuthor: 'Operations Manager, consumer electronics brand (USA)',
  },
  {
    id: 'study3',
    industry: 'Outdoor & Sports',
    region: 'Oceania (Australia)',
    title: 'Camping gear sourcing for a wholesaler',
    challenge:
      'A wholesaler needed to add a private-label camping range. They had previously been burnt by a factory that shipped substandard tents and refused replacements.',
    approach: [
      'Audited 5 factories in Ningbo and Tianjin.',
      'Required pre-production samples and material reports before deposit.',
      'Pre-shipment inspection on 2,000-unit order with full AQL 2.5 protocol.',
    ],
    results: [
      { icon: ShieldCheck, value: '1,400 units', label: 'Defective units caught before shipment' },
      { icon: TrendingUp, value: '0 USD', label: 'Cost to buyer (factory reworked at own cost)' },
      { icon: Truck, value: '+2 weeks', label: 'Delay accepted to fix quality, vs. losing the season' },
    ],
    quote:
      'They blocked the shipment when we would not have. That single decision protected our brand for the whole season.',
    quoteAuthor: 'Founder, outdoor wholesaler (Australia)',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)
  useEffect(() => {
    let cleanup
    ;(async () => {
      try {
        const sdk = await import('@strikingly/sdk')
        const cfg = await import('../strk-img-config.json')
        if (sdk?.ImageHelper?.loadImages && containerRef.current) {
          cleanup = sdk.ImageHelper.loadImages(cfg.default || cfg, containerRef.current)
        }
      } catch (e) { /* ignore */ }
    })()
    return () => { if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case Studies"
        title="Real outcomes from real B2B buyers"
        description="Anonymized projects showing how we approach common sourcing challenges. Names are kept confidential by request."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {studies.map((s) => (
            <article
              key={s.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <img
                    alt={s.title}
                    className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                    data-strk-img-id={`cs-${s.id}-img-7e`}
                    data-strk-img={`[cs-${s.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="lg:col-span-7 p-7 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                      {s.industry}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5" /> {s.region}
                    </span>
                  </div>
                  <h2 id={`cs-${s.id}-title`} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                    {s.title}
                  </h2>

                  <div className="mb-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Challenge
                    </div>
                    <p className="text-slate-600 leading-relaxed">{s.challenge}</p>
                  </div>

                  <div className="mb-5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Our approach
                    </div>
                    <ul className="space-y-1.5 text-slate-700">
                      {s.approach.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm md:text-base">
                          <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-brand-blue flex-shrink-0" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {s.results.map((r) => {
                      const Icon = r.icon
                      return (
                        <div
                          key={r.label}
                          className="bg-slate-50 border border-slate-200 rounded-lg p-3 md:p-4"
                        >
                          <Icon className="w-4 h-4 text-brand-blue mb-2" />
                          <div className="text-base md:text-xl font-bold text-slate-900 leading-tight">
                            {r.value}
                          </div>
                          <div className="text-[11px] md:text-xs text-slate-500 leading-snug mt-1">
                            {r.label}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <blockquote className="bg-brand-navy text-white rounded-lg p-5 relative">
                    <Quote className="w-5 h-5 text-brand-accent mb-2" />
                    <p className="text-sm md:text-base leading-relaxed italic">
                      &ldquo;{s.quote}&rdquo;
                    </p>
                    <div className="mt-3 text-xs text-slate-300">— {s.quoteAuthor}</div>
                  </blockquote>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Want a similar outcome for your project?
          </h2>
          <p className="mt-4 text-slate-600">
            Share your sourcing brief. We will tell you what is realistic, with
            no exaggerated promises.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accentDark text-white px-7 py-3 rounded-md font-semibold transition"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
