import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, Clock, Shield } from 'lucide-react'

const caseStudies = [
  {
    id: 'led-lighting',
    title: 'LED Lighting for European Retailer',
    category: 'Electronics',
    client: 'German home goods retailer',
    challenge: 'Client needed a reliable LED panel light supplier after their previous factory delivered inconsistent color temperatures and failed CE certification.',
    solution: 'We audited 8 factories in Shenzhen, shortlisted 3, and arranged samples. The selected factory passed our quality audit with 95% score and held valid CE/RoHS certifications.',
    result: '40% cost reduction compared to previous supplier. 12 successful shipments over 18 months with zero quality claims.',
    metrics: [
      { label: 'Cost Savings', value: '40%' },
      { label: 'Shipments', value: '12' },
      { label: 'Defect Rate', value: '0.2%' },
    ],
    imgId: 'case-led-a1b2c3',
    titleId: 'case-led-title',
    descId: 'case-led-desc',
  },
  {
    id: 'furniture',
    title: 'Custom Furniture for US Brand',
    category: 'Furniture',
    client: 'US direct-to-consumer furniture brand',
    challenge: 'Startup brand needed to find manufacturers capable of producing custom-designed solid wood furniture at competitive prices with consistent quality.',
    solution: 'We visited furniture clusters in Foshan and Dongguan, identified factories with CNC capabilities and FSC-certified wood supply. Managed 3 rounds of prototyping.',
    result: 'Found 3 qualified factories in 2 weeks. First production order of 500 units delivered on time with 99.4% pass rate.',
    metrics: [
      { label: 'Time to Supplier', value: '2 weeks' },
      { label: 'First Order', value: '500 units' },
      { label: 'Pass Rate', value: '99.4%' },
    ],
    imgId: 'case-furniture-d4e5f6',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'textiles',
    title: 'Textile Sourcing for Australian Importer',
    category: 'Textiles',
    client: 'Australian workwear distributor',
    challenge: 'Client was receiving inconsistent fabric weights and color variations from their existing supplier, causing returns and customer complaints.',
    solution: 'We conducted a root cause analysis at the existing factory, then sourced 2 alternative suppliers with better QC systems. Implemented incoming material inspection protocol.',
    result: 'Zero quality complaints in 6 months. Fabric consistency improved from 85% to 99% compliance with specs.',
    metrics: [
      { label: 'Quality Claims', value: '0' },
      { label: 'Compliance', value: '99%' },
      { label: 'Lead Time', value: '-5 days' },
    ],
    imgId: 'case-textiles-g7h8i9',
    titleId: 'case-textiles-title',
    descId: 'case-textiles-desc',
  },
  {
    id: 'packaging',
    title: 'Eco Packaging for UK E-commerce Brand',
    category: 'Packaging',
    client: 'UK sustainable e-commerce company',
    challenge: 'Brand needed fully recyclable, custom-printed packaging at scale while maintaining their sustainability commitments and keeping costs viable.',
    solution: 'We sourced FSC-certified paper mills and printing factories in Dongguan specializing in eco-friendly inks. Managed material testing and print color matching.',
    result: 'Achieved 100% recyclable packaging at 25% lower cost than UK suppliers. Consistent print quality across 50,000+ units per month.',
    metrics: [
      { label: 'Cost Savings', value: '25%' },
      { label: 'Monthly Volume', value: '50K+' },
      { label: 'Recyclable', value: '100%' },
    ],
    imgId: 'case-packaging-j0k1l2',
    titleId: 'case-packaging-title',
    descId: 'case-packaging-desc',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Success Stories</p>
            <h1 id="cases-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Case Studies
            </h1>
            <p id="cases-page-subtitle" className="text-white/70 text-lg">
              Real sourcing projects, real results. See how we've helped buyers around the world source successfully from China.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="bg-surface rounded-xl border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover min-h-64"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-medium rounded-full mb-3">{cs.category}</span>
                    <h2 id={cs.titleId} className="text-2xl font-bold text-slate-900 mb-2">{cs.title}</h2>
                    <p id={cs.descId} className="text-slate-500 text-sm mb-5">{cs.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h4>
                        <p className="text-slate-600 text-sm leading-relaxed m-0">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Our Solution</h4>
                        <p className="text-slate-600 text-sm leading-relaxed m-0">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Result</h4>
                        <p className="text-slate-600 text-sm leading-relaxed m-0">{cs.result}</p>
                      </div>
                    </div>

                    <div className="flex gap-6 pt-4 border-t border-slate-200">
                      {cs.metrics.map((metric, idx) => (
                        <div key={idx}>
                          <div className="text-xl font-bold text-navy">{metric.value}</div>
                          <div className="text-xs text-slate-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want Similar Results?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Every project starts with a conversation. Tell us what you need and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
