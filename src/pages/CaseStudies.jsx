import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, Clock, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    client: 'European Retail Chain',
    industry: 'Home & Garden',
    location: 'Netherlands',
    challenge: 'The client was sourcing garden furniture from three different intermediaries, leading to inconsistent quality, inflated pricing, and fragmented communication.',
    solution: 'We consolidated their supplier base by vetting two direct manufacturers in Zhejiang. Implemented a unified QC protocol and coordinated consolidated shipping.',
    results: [
      { icon: TrendingDown, label: 'Cost Reduction', value: '22%' },
      { icon: Clock, label: 'Lead Time', value: '65 days' },
      { icon: Shield, label: 'Defect Rate', value: '<1.5%' },
    ],
    imgId: 'cs-detail-retail-a1b2c3',
    descId: 'cs-detail-retail-desc',
  },
  {
    client: 'US Electronics Startup',
    industry: 'Consumer Electronics',
    location: 'California, USA',
    challenge: 'A hardware startup needed custom Bluetooth earbuds with ANC, but lacked the supplier network and QA expertise to manage a Chinese factory directly.',
    solution: 'We sourced three component suppliers, managed the assembly partner selection, supervised tooling development, and conducted pre-shipment inspections.',
    results: [
      { icon: Shield, label: 'First-Pass Yield', value: '97%' },
      { icon: Clock, label: 'Time to Market', value: '4 months' },
      { icon: TrendingDown, label: 'Unit Cost', value: '-18%' },
    ],
    imgId: 'cs-detail-electronics-d4e5f6',
    descId: 'cs-detail-electronics-desc',
  },
  {
    client: 'Australian Apparel Brand',
    industry: 'Textiles & Fashion',
    location: 'Sydney, Australia',
    challenge: 'A growing fashion brand faced repeated quality issues with activewear — inconsistent sizing, color fading, and stitching defects on repeat orders.',
    solution: 'We relocated production to a GRS-certified factory with stronger in-house QC. Introduced inline inspections at cutting, sewing, and finishing stages.',
    results: [
      { icon: Shield, label: 'First-Pass Rate', value: '98.5%' },
      { icon: TrendingDown, label: 'Return Rate', value: '<0.8%' },
      { icon: Clock, label: 'Repeat Order Cycle', value: '3 weeks' },
    ],
    imgId: 'cs-detail-textiles-g7h8i9',
    descId: 'cs-detail-textiles-desc',
  },
  {
    client: 'UK Packaging Distributor',
    industry: 'Packaging',
    location: 'Manchester, UK',
    challenge: 'A distributor needed food-grade packaging with custom printing, but their previous supplier failed compliance testing for EU migration limits.',
    solution: 'We identified a BRC-certified packaging factory, managed lab testing for EU compliance, and supervised print registration and batch consistency.',
    results: [
      { icon: Shield, label: 'Compliance Pass', value: '100%' },
      { icon: TrendingDown, label: 'Waste Reduction', value: '12%' },
      { icon: Clock, label: 'Order Turnaround', value: '5 weeks' },
    ],
    imgId: 'cs-detail-packaging-j0k1l2',
    descId: 'cs-detail-packaging-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="cs-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Case Studies
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Real projects, real results. See how we have helped businesses across industries source from China with less risk and better outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
          {cases.map((cs, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={cs.client}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-slate-100 overflow-hidden">
                      <img
                        data-strk-img-id={cs.imgId}
                        data-strk-img={`[${cs.descId}] [cs-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={cs.client}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={`p-8 md:p-10 lg:p-12 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand bg-blue-50 px-3 py-1 rounded-full">
                        {cs.industry}
                      </span>
                      <span className="text-xs text-slate-500">{cs.location}</span>
                    </div>
                    <h2 id={`${cs.descId}-title`} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-6">
                      {cs.client}
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
                          Challenge
                        </h4>
                        <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
                          Solution
                        </h4>
                        <p id={cs.descId} className="text-slate-600 leading-relaxed">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {cs.results.map((r) => (
                        <div key={r.label} className="bg-slate-50 rounded-lg p-4 text-center">
                          <r.icon className="w-5 h-5 text-brand mx-auto mb-2" />
                          <div className="text-xl font-bold text-slate-900">{r.value}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Want Results Like These?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Tell us about your product and we will build a sourcing plan tailored to your goals.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
