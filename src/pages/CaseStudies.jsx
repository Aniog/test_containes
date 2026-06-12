import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Star, TrendingUp, Clock, ShieldCheck } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeading from '@/components/shared/SectionHeading'

const caseStudies = [
  {
    id: 'cs-led',
    title: 'LED Lighting for European Retailer',
    category: 'Electronics',
    client: 'German home improvement chain',
    challenge: 'Needed a reliable LED panel supplier with CE certification, competitive pricing, and capacity for 50,000 units/month.',
    solution: 'Identified 8 potential suppliers, audited 4 factories, and selected a Shenzhen manufacturer with full CE/RoHS compliance.',
    results: ['40% cost reduction vs. previous supplier', 'Zero defects in first 3 shipments', 'On-time delivery for all orders', 'Long-term partnership established'],
    metric: '40%',
    metricLabel: 'Cost Savings',
  },
  {
    id: 'cs-furniture',
    title: 'Custom Furniture for US Brand',
    category: 'Home & Garden',
    client: 'US direct-to-consumer furniture brand',
    challenge: 'Required custom solid wood furniture with specific finishes, strict quality standards, and reliable container-load shipping.',
    solution: 'Found a Foshan factory specializing in export-grade furniture, managed sample iterations, and supervised production of 3 containers.',
    results: ['Zero defects across 3 container shipments', 'Custom packaging reduced damage by 95%', 'Production completed 5 days ahead of schedule', 'Repeat orders placed quarterly'],
    metric: '0',
    metricLabel: 'Defects',
  },
  {
    id: 'cs-textile',
    title: 'Textile Sourcing for Fashion Startup',
    category: 'Apparel',
    client: 'UK sustainable fashion brand',
    challenge: 'Needed organic cotton suppliers with GOTS certification, small MOQ (500 pcs), and willingness to work with a startup.',
    solution: 'Sourced from Guangzhou garment district, negotiated low MOQ terms, and managed the entire production cycle from fabric to finished goods.',
    results: ['From concept to delivery in 45 days', 'GOTS-certified organic cotton verified', 'MOQ negotiated down from 2,000 to 500 pcs', 'Full production transparency maintained'],
    metric: '45',
    metricLabel: 'Days to Delivery',
  },
  {
    id: 'cs-auto',
    title: 'Auto Parts for Australian Distributor',
    category: 'Auto Parts',
    client: 'Australian aftermarket parts distributor',
    challenge: 'Needed consistent quality brake pads and filters at scale, with proper TS16949 certification and competitive FOB pricing.',
    solution: 'Audited 6 factories in Zhejiang, selected 2 certified manufacturers, and set up ongoing QC protocols for monthly shipments.',
    results: ['25% cost improvement over previous source', 'TS16949 certification verified on-site', 'Monthly shipments running for 18 months', 'Rejection rate below 0.3%'],
    metric: '0.3%',
    metricLabel: 'Rejection Rate',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-accent-500/20 text-accent-400 mb-4">
              Case Studies
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Real Results from Real Projects
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              See how we've helped businesses around the world source successfully from China — with verified suppliers, quality assurance, and on-time delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-slate-100">
                    <img
                      data-strk-img-id={`${cs.id}-img-8d2f`}
                      data-strk-img={`[${cs.id}-title] [${cs.id}-category] manufacturing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <span id={`${cs.id}-category`} className="text-xs font-medium text-accent-500 uppercase tracking-wide">{cs.category}</span>
                    <h2 id={`${cs.id}-title`} className="text-2xl font-bold text-slate-900 mt-2 mb-2">{cs.title}</h2>
                    <p className="text-sm text-slate-500 mb-4">Client: {cs.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h4>
                        <p className="text-sm text-slate-600">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Our Solution</h4>
                        <p className="text-sm text-slate-600">{cs.solution}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Results</h4>
                      <ul className="space-y-1.5">
                        {cs.results.map((result) => (
                          <li key={result} className="flex items-center gap-2 text-sm text-slate-700">
                            <Star className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center gap-2">
                      <div className="bg-accent-500/10 rounded-lg px-4 py-2 text-center">
                        <div className="text-xl font-bold text-accent-500">{cs.metric}</div>
                        <div className="text-xs text-slate-600">{cs.metricLabel}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us about your sourcing needs and let us show you what's possible.
          </p>
          <div className="mt-8">
            <CTAButton>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
