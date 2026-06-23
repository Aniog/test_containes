import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import PageHero from '@/components/PageHero'
import InquiryForm from '@/components/InquiryForm'
import { CASE_STUDIES } from '@/components/home/HomeCaseStudies'
import { Quote } from 'lucide-react'

const EXTRA_CASES = [
  {
    id: 'ca-promo-tradeshow',
    industry: 'Promotional Gifts',
    region: 'Canadian agency',
    title: 'Trade-show giveaway production with a 6-week deadline',
    summary: 'A marketing agency in Toronto needed 8,000 branded items shipped before a trade show. We coordinated three Yiwu suppliers, ran a single QC visit, and shipped by air to meet the deadline.',
    metrics: [
      { value: '6 wks', label: 'End-to-end timeline' },
      { value: '8,000', label: 'Branded items' },
      { value: '0', label: 'Print defects after QC' },
    ],
    quote: 'Their QC catch saved us from a logo printing disaster two days before the show.',
    person: 'Account Director, Canadian marketing agency',
    imgId: 'case-promo-tradeshow-9a8b7c',
  },
  {
    id: 'uk-d2c-apparel',
    industry: 'Apparel',
    region: 'UK DTC brand',
    title: 'Switching to a more reliable garment factory mid-season',
    summary: 'A UK DTC apparel brand was losing money on returns due to size grading issues. We sourced two new factories, ran a side-by-side fit test and migrated production within one season.',
    metrics: [
      { value: '2', label: 'Factories tested' },
      { value: '−38%', label: 'Returns due to fit' },
      { value: '1', label: 'Season migration' },
    ],
    quote: 'They actually understood the difference between a fit issue and a fabric issue. That changed how our QC works.',
    person: 'Operations Manager, UK apparel brand',
    imgId: 'case-uk-apparel-8b7c6d',
  },
  {
    id: 'sg-industrial',
    industry: 'Industrial',
    region: 'Singapore distributor',
    title: 'Engineering-led sourcing for a hydraulic component distributor',
    summary: 'A Singapore B2B distributor needed an alternative source for hydraulic fittings. We benchmarked 6 suppliers, ran sample testing under load, and onboarded one factory as a long-term partner.',
    metrics: [
      { value: '6', label: 'Suppliers benchmarked' },
      { value: '−18%', label: 'Cost vs. previous' },
      { value: '24 mo', label: 'Partnership running' },
    ],
    quote: 'We treat them as our procurement office in China — not just a sourcing service.',
    person: 'Procurement Director, Singapore distributor',
    imgId: 'case-sg-industrial-7c6d5e',
  },
]

const ALL_CASES = [...CASE_STUDIES, ...EXTRA_CASES]

export default function CaseStudies() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected sourcing projects, anonymized where required by NDA"
        description="A practical view of how we work with overseas buyers across categories. Full client references available on request after a discovery call."
        breadcrumbs={[{ label: 'Case Studies' }]}
      />

      <section ref={containerRef} className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {ALL_CASES.map((c) => (
            <article key={c.id} className="bg-white rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-[16/9] bg-surface-2 overflow-hidden">
                <img
                  alt={c.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[caseall-${c.id}-title] [caseall-${c.id}-industry]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span id={`caseall-${c.id}-industry`} className="font-semibold text-brand bg-surface-2 px-2 py-0.5 rounded">
                    {c.industry}
                  </span>
                  <span className="text-ink-soft">·</span>
                  <span className="text-ink-soft">{c.region}</span>
                </div>
                <h2 id={`caseall-${c.id}-title`} className="mt-3 font-bold text-brand text-xl leading-snug">
                  {c.title}
                </h2>
                <p className="mt-3 text-ink-soft leading-relaxed text-[15px]">{c.summary}</p>

                <div className="grid grid-cols-3 gap-3 mt-5">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-surface rounded-lg p-3 text-center border border-line">
                      <div className="text-lg font-bold text-brand">{m.value}</div>
                      <div className="text-[11px] text-ink-soft mt-0.5 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-line">
                  <Quote className="w-4 h-4 text-accent" />
                  <p className="mt-2 text-ink italic leading-relaxed">"{c.quote}"</p>
                  <div className="mt-2 text-xs text-ink-soft">— {c.person}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <InquiryForm />
    </>
  )
}
