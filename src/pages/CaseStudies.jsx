import { useEffect, useRef } from 'react'
import PageHero from '../components/sections/PageHero'
import CtaBanner from '../components/sections/CtaBanner'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    id: 'kitchenware-uk',
    industry: 'Home & Kitchen',
    country: 'United Kingdom',
    title: 'Private-label kitchen accessories for a UK Amazon brand',
    challenge: 'The buyer was working with a trading company in Ningbo. Prices were drifting up year over year, defect rate exceeded 4%, and the trading company refused to disclose the actual factory.',
    work: 'We identified two qualified stainless steel factories in Guangdong, ran on-site audits, managed samples, and re-tooled three SKUs for better unit cost. We placed two trial orders before scaling.',
    result: 'Unit cost reduced by 18%. Defect rate stabilised below 0.8% over six months. Buyer now imports a 12-SKU range directly from a verified factory with us as agent.',
    metrics: [
      { label: 'Unit cost', value: '−18%' },
      { label: 'Defect rate', value: '< 0.8%' },
      { label: 'Time to first order', value: '11 weeks' },
    ],
    imgId: 'cs-detail-kitchen-3920af',
  },
  {
    id: 'apparel-us',
    industry: 'Apparel & Textiles',
    country: 'United States',
    title: 'Sportswear line for a US DTC brand',
    challenge: 'The brand needed a vertically integrated factory able to do knit-to-finish in one site. Previous suppliers caused lead-time slippage and inconsistent sizing across runs.',
    work: 'We reviewed 14 factories in Zhejiang and Fujian, shortlisted 3, ran fit samples, and locked down a tech pack. We did DUPRO and PSI inspections and coordinated air + sea shipping for launch.',
    result: 'Lead time reduced by 25%. On-time shipment 100% across three production runs. Returns due to sizing dropped sharply after standardised tech pack.',
    metrics: [
      { label: 'Suppliers reviewed', value: '14' },
      { label: 'Lead time', value: '−25%' },
      { label: 'On-time shipment', value: '100%' },
    ],
    imgId: 'cs-detail-apparel-7a14bc',
  },
  {
    id: 'electronics-de',
    industry: 'Consumer Electronics',
    country: 'Germany',
    title: 'IoT device manufacturing for a German startup',
    challenge: 'A hardware startup needed a Shenzhen EMS for an IoT product with tooling, PCBA, CE testing and small initial volume. They had no local presence and had been burned by a previous "factory" that turned out to be a trader.',
    work: 'We verified two Shenzhen EMS factories on-site, managed PCBA samples, tooling and CE testing through an accredited lab, and ran inline QC during three production runs.',
    result: 'Tooling delivered in 6 weeks. Pre-shipment inspection pass rate 99.3%. Customer launched on schedule with sea LCL shipping to Hamburg.',
    metrics: [
      { label: 'Tooling lead time', value: '6 weeks' },
      { label: 'PSI pass rate', value: '99.3%' },
      { label: 'Shipping mode', value: 'Sea LCL' },
    ],
    imgId: 'cs-detail-iot-441fed',
  },
  {
    id: 'furniture-au',
    industry: 'Furniture',
    country: 'Australia',
    title: 'Outdoor furniture range for an Australian retailer',
    challenge: 'The buyer needed weather-resistant outdoor furniture with strict AS standards and a tight 90-day window before the Australian summer season.',
    work: 'We sourced a qualified factory in Foshan, validated material certificates, ran a container-loading dry run, and coordinated three FCL shipments to Sydney and Melbourne.',
    result: 'All three containers shipped within the 90-day window. Zero customer claims on damage. Re-order signed for the next season.',
    metrics: [
      { label: 'Containers shipped', value: '3 × 40HQ' },
      { label: 'On-time', value: '100%' },
      { label: 'Damage claims', value: '0' },
    ],
    imgId: 'cs-detail-furniture-12ce3a',
  },
]

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Selected projects with real numbers"
        description="A few representative projects, anonymised where buyers prefer. The numbers shown are taken from our project records."
        bgQuery="China factory production case study"
        bgId="case-studies-bg-11ab2f"
      />

      <section ref={ref} className="bg-white">
        <div className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          {cases.map((cs, i) => (
            <article
              key={cs.id}
              className={`grid gap-8 lg:grid-cols-12 lg:items-center ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                  <div className="aspect-[4/3]">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[cs-${cs.id}-title] ${cs.industry} factory`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  <span>{cs.industry}</span>
                  <span aria-hidden>•</span>
                  <span>{cs.country}</span>
                </div>
                <h3
                  id={`cs-${cs.id}-title`}
                  className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl"
                >
                  {cs.title}
                </h3>

                <div className="mt-6 space-y-5">
                  <Block label="Challenge" text={cs.challenge} />
                  <Block label="What we did" text={cs.work} />
                  <Block label="Result" text={cs.result} />
                </div>

                <dl className="mt-6 grid grid-cols-3 gap-4 rounded-md border border-slate-200 bg-slate-50 p-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{m.label}</dt>
                      <dd className="mt-1 text-base font-semibold text-slate-900">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

function Block({ label, text }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-red-600">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-700 md:text-base">{text}</p>
    </div>
  )
}
