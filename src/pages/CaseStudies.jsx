import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, TrendingDown, TrendingUp, ShieldCheck, Quote } from 'lucide-react'
import PageHero from '../components/site/PageHero'
import CTASection from '../components/site/CTASection'

const cases = [
  {
    id: 'kitchenware-uk',
    industry: 'Home & Kitchen',
    country: 'United Kingdom',
    title: 'Cookware brand cuts defect rate from 6% to 0.8%',
    challenge: 'A UK kitchenware brand was struggling with rising defect rates from a long-time Chinese trader. Returns were eating into margin and Amazon reviews were slipping.',
    solution: 'We re-sourced the SKU with three verified factories in Guangdong, ran sample comparisons, then locked in a manufacturer-direct contract with quarterly QC audits and AQL 2.5 pre-shipment inspection on every PO.',
    outcome: ['Defect rate down from 6.0% to 0.8%', 'Unit cost reduced by 9%', 'Lead time shortened by 11 days'],
    icon: TrendingDown,
    quote: '"We finally feel in control of our supply chain. The QC reports tell us what is actually leaving the factory."',
    quoteAuthor: 'Head of Operations, UK retailer',
  },
  {
    id: 'electronics-de',
    industry: 'Consumer Electronics',
    country: 'Germany',
    title: 'Audio startup launches OEM product in 14 weeks',
    challenge: 'A German audio startup needed a reliable Shenzhen-based OEM partner that could handle electronics design, certifications and packaging — without padding the price.',
    solution: 'We shortlisted four Shenzhen factories with proven Bluetooth audio capability, managed the tooling phase, coordinated CE/FCC certification and consolidated the first launch shipment via air freight to Hamburg.',
    outcome: ['Concept to launch in 14 weeks', 'CE / FCC / RoHS sign-off managed end-to-end', 'First production batch passed AQL 2.5'],
    icon: TrendingUp,
    quote: '"Their team felt like an extension of ours. We could focus on go-to-market while they ran the factory side."',
    quoteAuthor: 'Founder, audio startup',
  },
  {
    id: 'furniture-us',
    industry: 'Furniture',
    country: 'United States',
    title: 'Hospitality buyer consolidates 5 suppliers into one container',
    challenge: 'A US hospitality buyer was sourcing from five separate Chinese factories — each with its own MOQ, shipping cost and reliability profile. Lead times kept slipping.',
    solution: 'We took over project management, set weekly progress calls with each factory, ran joint inspections and consolidated the goods into a single FCL container ex-Yantian.',
    outcome: ['Landed cost per piece down 11%', '5 factories managed under one PM', 'Shipping consolidated to 1× FCL'],
    icon: ShieldCheck,
    quote: '"One single point of contact made a huge difference. We stopped firefighting and started planning."',
    quoteAuthor: 'Procurement Director, US hospitality group',
  },
  {
    id: 'apparel-au',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    title: 'Activewear label moves from trader to verified factory',
    challenge: 'An Australian activewear brand was sourcing through a Yiwu trader with weak quality control. Fabric weight and stitching consistency were a recurring issue.',
    solution: 'We verified two factories in Guangzhou with relevant export experience, managed the sample iterations and ran during-production fabric audits to lock in fabric weight and stitch density.',
    outcome: ['Fabric weight variance under 3%', 'Cost reduced by removing the trader margin', 'Replenishment cycle shortened by 2 weeks'],
    icon: TrendingDown,
    quote: '"Switching to a real factory changed our quality conversation completely. The samples now actually match production."',
    quoteAuthor: 'Founder, activewear label',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)
  useEffect(() => {
    let cancelled = false; let cleanup = null
    ;(async () => {
      try {
        const mod = await import('@strikingly/sdk')
        if (cancelled) return
        const cfg = (await import('../strk-img-config.json')).default || {}
        if (mod?.ImageHelper?.loadImages && containerRef.current) cleanup = mod.ImageHelper.loadImages(cfg, containerRef.current)
      } catch {}
    })()
    return () => { cancelled = true; if (typeof cleanup === 'function') cleanup() }
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case Studies"
        title="Real sourcing projects, real outcomes"
        description="A few recent examples of how we&rsquo;ve helped buyers fix supplier issues, launch new products and reduce landed cost. Names are anonymized to respect NDAs."
      >
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">
          Discuss your project <ArrowRight className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-10">
          {cases.map((c, idx) => {
            const Icon = c.icon
            const reverse = idx % 2 === 1
            return (
              <article key={c.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className={`grid gap-0 lg:grid-cols-12 ${reverse ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="lg:col-span-5 bg-slate-100 lg:[direction:ltr]">
                    <img
                      alt={c.title}
                      className="aspect-[4/3] lg:aspect-auto lg:h-full w-full object-cover"
                      data-strk-img-id={`case-page-${c.id}-img`}
                      data-strk-img={`[case-page-${c.id}-title] [case-page-${c.id}-summary] ${c.industry.toLowerCase()} china factory`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="lg:col-span-7 p-6 md:p-10 lg:[direction:ltr]">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      <span>{c.industry}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {c.country}</span>
                    </div>
                    <h2 id={`case-page-${c.id}-title`} className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                      {c.title}
                    </h2>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-red-600">Challenge</h3>
                        <p id={`case-page-${c.id}-summary`} className="mt-2 text-sm text-slate-600 leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-red-600">Our approach</h3>
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.solution}</p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        <Icon className="h-4 w-4 text-emerald-600" /> Outcome
                      </div>
                      <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
                        {c.outcome.map((o) => (
                          <li key={o} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-start gap-3 text-sm text-slate-700">
                      <Quote className="h-5 w-5 shrink-0 text-slate-400" />
                      <div>
                        <p className="italic">{c.quote}</p>
                        <p className="mt-1 text-xs text-slate-500">— {c.quoteAuthor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
