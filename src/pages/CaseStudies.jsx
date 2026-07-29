import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-headphones',
    title: 'Custom Bluetooth Headphones for US E-commerce Brand',
    category: 'Consumer Electronics',
    client: 'US-based Amazon seller',
    challenge: 'Client needed a reliable OEM factory for custom-branded Bluetooth headphones with specific audio specs and packaging requirements. Previous supplier had quality issues.',
    solution: 'We audited 5 factories in Shenzhen, selected a certified manufacturer, managed 3 rounds of sample revisions, and conducted pre-shipment inspection on 5,000 units.',
    results: ['22% cost reduction vs. previous supplier', 'AQL 2.5 passed on first inspection', 'Delivered 2 weeks ahead of schedule', 'Ongoing partnership for 4 product lines'],
    imgId: 'cs-headphones-img-a1b2c3',
    titleId: 'cs-headphones-title',
    descId: 'cs-headphones-desc',
  },
  {
    id: 'case-furniture',
    title: 'Office Furniture Line for European Distributor',
    category: 'Furniture',
    client: 'EU furniture distributor (Germany)',
    challenge: 'Client needed to source a complete office furniture line (desks, chairs, storage) meeting EU safety standards, with consistent quality across 3 container loads.',
    solution: 'We identified manufacturers in Foshan, coordinated material testing for EU compliance, managed production across 2 factories, and supervised container loading.',
    results: ['Zero defects across 3 shipments', 'All items passed EU EN standards', 'Saved 18% compared to local EU suppliers', 'Repeat orders every quarter'],
    imgId: 'cs-furniture-img-d4e5f6',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
  },
  {
    id: 'case-packaging',
    title: 'Eco-Friendly Packaging for Australian Retailer',
    category: 'Packaging',
    client: 'Australian retail chain',
    challenge: 'Client required FSC-certified, biodegradable packaging for their product line. Needed a supplier who could meet strict sustainability certifications.',
    solution: 'We sourced from 3 certified packaging factories in Dongguan, verified FSC chain-of-custody documentation, and managed a trial order of 50,000 units.',
    results: ['Found FSC-certified supplier within 2 weeks', 'Met all Australian packaging regulations', '30% cost savings vs. local alternatives', 'Scaled to 200,000 units/month'],
    imgId: 'cs-packaging-img-g7h8i9',
    titleId: 'cs-packaging-title',
    descId: 'cs-packaging-desc',
  },
  {
    id: 'case-beauty',
    title: 'Private Label Skincare for UK Brand',
    category: 'Beauty & Personal Care',
    client: 'UK skincare startup',
    challenge: 'New brand needed a GMP-certified cosmetics manufacturer for a 5-SKU skincare line with custom formulations and premium packaging.',
    solution: 'We identified GMP-certified labs in Guangzhou, coordinated formulation development, managed stability testing, and sourced custom glass packaging separately.',
    results: ['Full product line developed in 8 weeks', 'Passed UK cosmetics safety assessment', 'Unit cost 40% below UK contract manufacturers', 'Successfully launched on time'],
    imgId: 'cs-beauty-img-j1k2l3',
    titleId: 'cs-beauty-title',
    descId: 'cs-beauty-desc',
  },
]

const CaseStudies = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="cs-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Case Studies
          </h1>
          <p id="cs-page-subtitle" className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Real sourcing projects we've managed for clients across different industries and regions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-16">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-white rounded-xl border border-border overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}] [cs-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full min-h-[240px] object-cover"
                  />
                  <div className="p-6 md:p-8">
                    <span className="text-xs font-medium text-primary bg-surface px-2 py-1 rounded">{cs.category}</span>
                    <h2 id={cs.titleId} className="mt-3 text-xl md:text-2xl font-bold text-text-primary">{cs.title}</h2>
                    <p className="mt-1 text-text-muted text-sm">Client: {cs.client}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-text-primary">Challenge</h4>
                      <p id={cs.descId} className="mt-1 text-text-body text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mt-3">
                      <h4 className="text-sm font-semibold text-text-primary">Our Solution</h4>
                      <p className="mt-1 text-text-body text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-text-primary mb-2">Results</h4>
                      <ul className="space-y-1">
                        {cs.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-text-body text-sm">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">Have a Similar Project?</h2>
          <p className="mt-4 text-text-body">
            Let us know what you're sourcing and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
