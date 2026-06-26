import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/shared/SectionHeader'
import CtaBanner from '@/components/shared/CtaBanner'

const cases = [
  {
    id: 'europe-retailer',
    titleId: 'cs-title-europe-retailer',
    descId: 'cs-desc-europe-retailer',
    challengeId: 'cs-challenge-europe-retailer',
    resultId: 'cs-result-europe-retailer',
    title: 'European retailer scales kitchenware line',
    industry: 'Home & Kitchen',
    location: 'Europe',
    challenge:
      'A mid-size kitchenware retailer was experiencing inconsistent quality and late deliveries from two direct suppliers in Guangdong. Defect rates were above 8%, and reorders were delayed.',
    solution:
      'We audited four potential factories, selected two for a trial, and set up inline and pre-shipment inspections. We also renegotiated payment terms and introduced weekly production reports.',
    result:
      'Defect rate dropped from 8% to under 1.5%. Average lead time improved by 12 days, and the retailer was able to expand the product line with confidence.',
    stat: '1.5% defect rate',
    imgId: 'cs-img-europe-retailer-7e1c',
  },
  {
    id: 'us-distributor',
    titleId: 'cs-title-us-distributor',
    descId: 'cs-desc-us-distributor',
    challengeId: 'cs-challenge-us-distributor',
    resultId: 'cs-result-us-distributor',
    title: 'US distributor launches private-label electronics',
    industry: 'Electronics',
    location: 'United States',
    challenge:
      'A distributor wanted to launch a private-label line of charging accessories but had no existing factory relationships in China and needed FCC-compliant components.',
    solution:
      'We sourced five qualified PCBA and assembly suppliers, verified their certifications, managed sample approvals, and coordinated the first production run.',
    result:
      'First 40-ft container shipped on schedule with full documentation. The product passed customs smoothly and launched on the distributor\'s online store.',
    stat: '40-ft container shipped',
    imgId: 'cs-img-us-distributor-2b5a',
  },
  {
    id: 'australia-brand',
    titleId: 'cs-title-australia-brand',
    descId: 'cs-desc-australia-brand',
    challengeId: 'cs-challenge-australia-brand',
    resultId: 'cs-result-australia-brand',
    title: 'Australian brand stabilizes apparel supply',
    industry: 'Apparel',
    location: 'Australia',
    challenge:
      'A growing apparel brand had trouble with size inconsistencies and missed delivery windows, damaging relationships with wholesale customers.',
    solution:
      'We conducted factory visits in Guangdong, introduced size-set approvals and inline inspections, and consolidated smaller orders to improve production scheduling.',
    result:
      'On-time delivery improved to 98% within two seasons, and size-related returns decreased significantly.',
    stat: '98% on-time delivery',
    imgId: 'cs-img-australia-brand-9d3f',
  },
]

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide uppercase text-brand-300 mb-3">
            Results
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Case studies
          </h1>
          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Real sourcing projects that show how we reduce risk, improve
            quality, and keep deliveries on schedule.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Buyer outcomes by industry"
            description="Each project is different, but these examples show the typical problems we solve and the results we deliver."
          />

          <div className="space-y-16">
            {cases.map((item, index) => (
              <article
                key={item.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-8 lg:gap-12 items-start`}
              >
                <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3]">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover"
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[${item.resultId}] [${item.challengeId}] [${item.descId}] [${item.titleId}] [page-cs-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                      {item.industry}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                      {item.location}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold">
                      {item.stat}
                    </span>
                  </div>
                  <h2
                    id={item.titleId}
                    className="text-2xl md:text-3xl font-bold text-slate-900"
                  >
                    {item.title}
                  </h2>
                  <p
                    id={item.descId}
                    className="mt-3 text-slate-600 leading-relaxed"
                  >
                    {item.challenge}
                  </p>
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                        What we did
                      </h3>
                      <p
                        id={item.challengeId}
                        className="mt-2 text-sm text-slate-600 leading-relaxed"
                      >
                        {item.solution}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                        Result
                      </h3>
                      <p
                        id={item.resultId}
                        className="mt-2 text-sm text-slate-600 leading-relaxed"
                      >
                        {item.result}
                      </p>
                    </div>
                  </div>
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
