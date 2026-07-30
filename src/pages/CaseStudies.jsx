import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react'

const cases = [
  {
    id: 'furniture-uk',
    title: 'UK Furniture Retailer Reduces Defect Rate by 60%',
    category: 'Quality Control',
    industry: 'Furniture',
    country: 'United Kingdom',
    result: '60% fewer defects',
    icon: Shield,
    challenge: 'A UK-based furniture retailer was receiving approximately 15% defective goods per shipment. Defects included incorrect dimensions, surface damage, and missing hardware. The client had no quality inspection process in place and relied entirely on the factory\'s self-reporting.',
    solution: 'We implemented a two-stage inspection process: an in-line inspection at 50% production completion and a pre-shipment inspection following AQL Level II standards. We also worked with the factory to update their internal QC checklist.',
    outcome: 'Within two production runs, the defect rate dropped from 15% to under 6%. The client avoided a costly product recall and improved their customer satisfaction scores.',
    metrics: [
      { label: 'Defect Rate Before', value: '15%' },
      { label: 'Defect Rate After', value: '<6%' },
      { label: 'Inspections Conducted', value: '4' },
    ],
    imgId: 'cs-furniture-uk-img-a1b2c3',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
  },
  {
    id: 'electronics-us',
    title: 'US Electronics Brand Cuts Sourcing Time by 40%',
    category: 'Supplier Sourcing',
    industry: 'Consumer Electronics',
    country: 'United States',
    result: '40% faster sourcing',
    icon: Clock,
    challenge: 'A US consumer electronics brand needed to qualify three new suppliers for a product line expansion within 30 days. Their internal team had no China presence and previous attempts to source independently had resulted in unqualified suppliers and wasted sample costs.',
    solution: 'We activated our electronics supplier network, pre-screened 12 candidates, and conducted on-site audits at the top 5 within 10 days. We presented a shortlist of 5 audited suppliers with full audit reports, pricing, and sample lead times.',
    outcome: 'The client received 5 audited supplier options in 18 days — 12 days ahead of their deadline. They selected two suppliers and placed initial orders within 6 weeks of engaging us.',
    metrics: [
      { label: 'Suppliers Audited', value: '5' },
      { label: 'Days to Shortlist', value: '18' },
      { label: 'Time Saved', value: '40%' },
    ],
    imgId: 'cs-electronics-us-img-d4e5f6',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
  },
  {
    id: 'apparel-au',
    title: 'Australian Apparel Brand Saves 18% on Unit Costs',
    category: 'Supplier Negotiation',
    industry: 'Apparel & Textiles',
    country: 'Australia',
    result: '18% cost reduction',
    icon: TrendingUp,
    challenge: 'An Australian apparel brand had been working with the same two Chinese suppliers for three years without renegotiating pricing. Rising costs were squeezing margins, but the client lacked the local knowledge and language skills to negotiate effectively.',
    solution: 'We conducted a market analysis to benchmark current pricing, identified two competitive alternative suppliers, and negotiated directly with all four factories in Mandarin. We presented the client with a comparison of all options.',
    outcome: 'By introducing competitive alternatives and renegotiating with existing suppliers, we helped the client reduce average unit costs by 18% while maintaining the same quality standards.',
    metrics: [
      { label: 'Cost Reduction', value: '18%' },
      { label: 'Suppliers Evaluated', value: '4' },
      { label: 'Quality Maintained', value: '100%' },
    ],
    imgId: 'cs-apparel-au-img-g7h8i9',
    titleId: 'cs-apparel-au-title',
    descId: 'cs-apparel-au-desc',
  },
  {
    id: 'hardware-de',
    title: 'German Hardware Importer Avoids Fraudulent Supplier',
    category: 'Factory Verification',
    industry: 'Hardware & Tools',
    country: 'Germany',
    result: 'Fraud prevented',
    icon: Shield,
    challenge: 'A German hardware importer had found a supplier online offering unusually low prices for industrial tools. Before paying a $40,000 deposit, they asked us to verify the factory.',
    solution: 'We conducted an on-site factory audit and found that the "factory" was a trading company with no production capability. The business registration did not match the address provided, and the company had no export history.',
    outcome: 'The client avoided a $40,000 loss. We subsequently identified three legitimate manufacturers for the same product range, all of which passed our audit process.',
    metrics: [
      { label: 'Deposit Protected', value: '$40K' },
      { label: 'Verified Alternatives', value: '3' },
      { label: 'Audit Turnaround', value: '3 days' },
    ],
    imgId: 'cs-hardware-de-img-j1k2l3',
    titleId: 'cs-hardware-de-title',
    descId: 'cs-hardware-de-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-semibold text-sm uppercase tracking-wider">Client Results</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Case Studies
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Real outcomes from buyers who partnered with SSourcing China. Names and identifying details are anonymized at client request.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((cs, i) => (
              <div key={cs.id} className="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}>
                  <div className="aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-brand-light text-brand-blue text-xs font-semibold px-2.5 py-1 rounded-full">{cs.category}</span>
                      <span className="bg-gray-100 text-brand-muted text-xs font-semibold px-2.5 py-1 rounded-full">{cs.industry}</span>
                      <span className="bg-gray-100 text-brand-muted text-xs font-semibold px-2.5 py-1 rounded-full">{cs.country}</span>
                    </div>
                    <h2 id={cs.titleId} className="font-display text-xl md:text-2xl font-bold text-brand-navy mb-6 leading-snug">
                      {cs.title}
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wide mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-gray-700 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wide mb-1">Our Approach</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-navy text-sm uppercase tracking-wide mb-1">Outcome</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{cs.outcome}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-brand-border">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="font-display font-bold text-brand-accent text-xl">{m.value}</div>
                          <div className="text-brand-muted text-xs mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Want Results Like These?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your sourcing challenge and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-amber-500 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
