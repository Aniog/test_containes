import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { TrendingUp, Clock, ShieldCheck, Package } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const caseStudies = [
  {
    id: 'cs-electronics-us',
    category: 'Electronics',
    flag: '🇺🇸',
    country: 'United States',
    title: 'US Retailer Reduces Defect Rate from 15% to Under 6%',
    titleId: 'cs1-title',
    descId: 'cs1-desc',
    imgId: 'cs1-img-c001',
    challenge: 'A US-based electronics importer was receiving shipments with a 15% defect rate on LED lighting products. Returns were damaging their Amazon seller rating and eating into margins.',
    solution: 'We implemented a pre-shipment inspection protocol at the factory, including function testing, carton drop tests, and packaging checks. We also renegotiated the supplier contract to include quality penalty clauses.',
    result: 'Defect rate dropped to under 6% within two shipments. The client\'s Amazon rating improved from 3.8 to 4.5 stars within 90 days.',
    metrics: [
      { label: 'Defect Rate', before: '15%', after: '< 6%' },
      { label: 'Amazon Rating', before: '3.8★', after: '4.5★' },
    ],
    desc: 'Pre-shipment inspection and supplier contract renegotiation for US electronics importer.',
  },
  {
    id: 'cs-furniture-au',
    category: 'Furniture',
    flag: '🇦🇺',
    country: 'Australia',
    title: 'Australian Brand Launches Private Label Furniture Line',
    titleId: 'cs2-title',
    descId: 'cs2-desc',
    imgId: 'cs2-img-c002',
    challenge: 'An Australian home goods brand wanted to launch a private label furniture line sourced from China but had no existing supplier relationships or knowledge of the Foshan furniture market.',
    solution: 'We identified and audited 4 furniture factories in Foshan, coordinated sample production for 12 SKUs, managed revisions, and oversaw the first production run of 500 units.',
    result: 'The brand launched on schedule with a full product line. First-run quality was approved without major revisions. The client has since placed 3 repeat orders.',
    metrics: [
      { label: 'SKUs Launched', before: '0', after: '12' },
      { label: 'Time to Market', before: 'Unknown', after: '14 weeks' },
    ],
    desc: 'Private label furniture sourcing and factory management for Australian home goods brand.',
  },
  {
    id: 'cs-clothing-eu',
    category: 'Clothing',
    flag: '🇩🇪',
    country: 'Germany',
    title: 'European Buyer Cuts Sourcing Cycle by 40%',
    titleId: 'cs3-title',
    descId: 'cs3-desc',
    imgId: 'cs3-img-c003',
    challenge: 'A German fashion brand was spending 12 weeks per sourcing cycle managing supplier research, sample requests, and factory communication in-house, with limited Chinese language capability.',
    solution: 'We took over the full sourcing process: supplier research, factory shortlisting, sample coordination, and production follow-up. All communication with factories was handled in Mandarin.',
    result: 'Sourcing cycle reduced from 12 weeks to 7 weeks. The client\'s internal team was freed to focus on design and sales.',
    metrics: [
      { label: 'Sourcing Cycle', before: '12 weeks', after: '7 weeks' },
      { label: 'Internal Hours Saved', before: '—', after: '~40 hrs/cycle' },
    ],
    desc: 'Full-cycle sourcing management for German fashion brand, reducing time-to-market.',
  },
  {
    id: 'cs-toys-uk',
    category: 'Toys',
    flag: '🇬🇧',
    country: 'United Kingdom',
    title: 'UK Toy Importer Achieves EN71 Compliance on First Run',
    titleId: 'cs4-title',
    descId: 'cs4-desc',
    imgId: 'cs4-img-c004',
    challenge: 'A UK toy importer needed to source educational toys that met EN71 safety standards. Previous suppliers had failed compliance testing, resulting in costly product recalls.',
    solution: 'We pre-screened factories for EN71 experience, reviewed their existing test reports, and arranged third-party lab testing before production. We also conducted in-line inspections during manufacturing.',
    result: 'First production run passed EN71 testing on the first attempt. No recalls or compliance issues since engagement.',
    metrics: [
      { label: 'Compliance Pass Rate', before: 'Failed', after: '1st attempt' },
      { label: 'Recalls Since', before: '2 recalls', after: '0 recalls' },
    ],
    desc: 'EN71 compliance sourcing for UK toy importer, eliminating product recalls.',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">Client Results</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Case Studies
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Real examples of how we've helped global buyers source successfully from China. Names and identifying details are anonymized at client request.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map(({ id, category, flag, country, title, titleId, descId, imgId, challenge, solution, result, metrics, desc }, idx) => (
              <div key={id} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className={`grid lg:grid-cols-2 ${idx % 2 === 1 ? '' : ''}`}>
                  <div className="relative h-64 lg:h-auto">
                    <img
                      data-strk-img-id={imgId}
                      data-strk-img={`[${descId}] [${titleId}] China sourcing success`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-china-red text-white text-xs font-semibold px-3 py-1 rounded-full">{category}</span>
                      <span className="bg-white text-navy text-xs font-semibold px-3 py-1 rounded-full">{flag} {country}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 id={titleId} className="text-xl md:text-2xl font-bold text-navy mb-6">{title}</h2>
                    <p id={descId} className="sr-only">{desc}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-china-red font-semibold text-sm uppercase tracking-wider mb-1">Challenge</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-navy font-semibold text-sm uppercase tracking-wider mb-1">Our Solution</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{solution}</p>
                      </div>
                      <div>
                        <h3 className="text-green-700 font-semibold text-sm uppercase tracking-wider mb-1">Result</h3>
                        <p className="text-text-muted text-sm leading-relaxed">{result}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {metrics.map(({ label, before, after }) => (
                        <div key={label} className="bg-light-blue rounded-lg p-3">
                          <div className="text-text-muted text-xs mb-1">{label}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-text-muted text-xs line-through">{before}</span>
                            <span className="text-navy font-bold text-sm">{after}</span>
                          </div>
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
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
          <p className="text-white/70 text-lg mb-8">
            Tell us about your sourcing challenge and we'll put together a plan.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
