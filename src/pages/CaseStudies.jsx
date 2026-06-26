import { useEffect, useRef } from 'react'
import PageHeader from '@/components/shared/PageHeader'
import CTASection from '@/components/shared/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    id: 'eu-cookware',
    industry: 'Home & Kitchen',
    country: 'Germany',
    title: 'Cookware brand cut sourcing costs by 18% after factory switch',
    challenge:
      'A European cookware brand was unhappy with rising unit costs and inconsistent quality from their existing factory in Zhejiang. They wanted alternatives without losing 6 months on supplier transition.',
    solution:
      'We audited three new suppliers in Guangdong, ran a pre-production sample round, and inspected production at DUPRO and pre-shipment. We also consolidated two SKUs into one container.',
    outcome: [
      '18% lower unit cost on the main SKU',
      'Defect rate dropped from 6.2% to 1.4%',
      'Two SKUs consolidated into one 40HQ container',
      'Transition completed in 11 weeks',
    ],
  },
  {
    id: 'us-apparel',
    industry: 'Apparel & Textiles',
    country: 'United States',
    title: 'Private label apparel start-up shipped first 5,000-pc order in 9 weeks',
    challenge:
      'A first-time importer in the US needed a small private label apparel order (5,000 units, 4 styles) with custom labels, hangtags and polybag printing — but had no factory contacts in China.',
    solution:
      'We sourced two specialized knitwear factories, organized fabric and trim samples, coordinated branding files, ran a fabric inspection and a full AQL pre-shipment inspection before balance payment.',
    outcome: [
      'Brief to delivered goods in 9 weeks',
      'On-site fabric and accessories check',
      'Pre-shipment AQL inspection with photo report',
      'Door-to-door delivery to Los Angeles 3PL',
    ],
  },
  {
    id: 'au-furniture',
    industry: 'Furniture',
    country: 'Australia',
    title: 'Outdoor furniture importer recovered from defective batch with no downtime',
    challenge:
      'An Australian importer received an early signal during DUPRO that the powder-coating on a batch of outdoor chairs was below spec. The shipment was 3 weeks from departure.',
    solution:
      'Our team escalated to the factory owner, agreed a re-coat plan with new QC checkpoints and re-inspected the batch. We adjusted the freight booking to keep the original ETA window.',
    outcome: [
      'Defective batch fully re-coated by factory',
      'Original ETA window preserved',
      'No retail stockout for the importer',
      'New QC checkpoints added for future orders',
    ],
  },
  {
    id: 'uk-electronics',
    industry: 'Electronics & Accessories',
    country: 'United Kingdom',
    title: 'Bluetooth audio brand verified factory before scaling up by 4x',
    challenge:
      'A UK consumer electronics brand was planning to 4x their order with a Shenzhen supplier they had only worked with online. They needed assurance the factory could actually scale.',
    solution:
      'On-site audit of the factory’s SMT lines, assembly area and QC lab. We documented real capacity, certifications and risk areas, and proposed a staged ramp-up with QC at each stage.',
    outcome: [
      'Verified real production capacity',
      'Identified one QC gap, closed before scale-up',
      'Staged ramp-up plan agreed with factory',
      'Ongoing DUPRO + PSI on every batch',
    ],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Case studies"
        title="Real sourcing projects, real outcomes"
        description="A selection of recent projects, with the challenge, what we did, and the measurable result. Company names have been anonymized at the request of our clients."
      />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
          {cases.map((c, idx) => {
            const reverse = idx % 2 === 1
            return (
              <article key={c.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                <div className={`${reverse ? 'lg:order-2' : ''} rounded-2xl overflow-hidden border border-slate-200 shadow-sm`}>
                  <img
                    alt={c.title}
                    data-strk-img-id={`case-${c.id}-img`}
                    data-strk-img={`[case-${c.id}-title] [case-${c.id}-industry]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="block w-full h-full object-cover"
                  />
                </div>
                <div className={reverse ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
                    <span id={`case-${c.id}-industry`}>{c.industry}</span>
                    <span className="text-slate-300">·</span>
                    <span>{c.country}</span>
                  </div>
                  <h2 id={`case-${c.id}-title`} className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                    {c.title}
                  </h2>

                  <div className="mt-6 space-y-5">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Challenge</h3>
                      <p className="mt-2 text-base text-slate-700 leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">What we did</h3>
                      <p className="mt-2 text-base text-slate-700 leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Outcome</h3>
                      <ul className="mt-2 grid sm:grid-cols-2 gap-2">
                        {c.outcome.map((o) => (
                          <li
                            key={o}
                            className="text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-3 py-2"
                          >
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CTASection
        title="Your project could be next"
        description="Tell us what you want to source. We will reply within 1 business day with a clear plan and a realistic quote."
      />
    </div>
  )
}
