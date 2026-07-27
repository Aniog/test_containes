import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const studies = [
  {
    title: 'Consumer Electronics for EU Distributor',
    client: 'German electronics distributor',
    challenge: 'The client needed to source a line of Bluetooth speakers and accessories that met strict EU compliance standards (CE, RoHS). They had been burned by unreliable suppliers in the past.',
    solution: 'We identified 8 potential suppliers, shortlisted 4 after document review, conducted on-site audits at 3 factories, and negotiated pricing and payment terms. We managed the CE certification process and conducted pre-shipment inspections.',
    results: ['22% cost reduction vs previous supplier', 'All products CE and RoHS certified', '4-week lead time from order to delivery', 'Ongoing quality monitoring program'],
    imgId: 'cs-electronics-full-7f1e2a',
  },
  {
    title: 'Custom Packaging for US Cosmetics Brand',
    client: 'US-based natural cosmetics company',
    challenge: 'The client needed custom-designed packaging with unique mold shapes, eco-friendly materials, and consistent color matching across production runs.',
    solution: 'We sourced 5 packaging manufacturers, selected one with ISO 9001 certification and proven cosmetics packaging experience. We managed the mold creation, color matching, and full production cycle.',
    results: ['15,000 units delivered on schedule', '30% savings compared to US manufacturing', 'ISO 9001 certified factory', 'Zero defects across all units'],
    imgId: 'cs-packaging-full-8b3c4d',
  },
  {
    title: 'Industrial Parts for Australian Manufacturer',
    client: 'Australian industrial equipment manufacturer',
    challenge: 'The client was dependent on a single supplier for precision-machined components and wanted to diversify risk while reducing costs.',
    solution: 'We identified and qualified three alternative suppliers, conducted capability assessments, and managed sample production and testing. We negotiated volume pricing and delivery terms.',
    results: ['3 qualified backup suppliers', '18% cost savings on parts', '6-month renewable contract', 'Improved supply chain resilience'],
    imgId: 'cs-industrial-full-9d5e6f',
  },
  {
    title: 'Home Appliances for UK Retail Chain',
    client: 'UK home goods retailer',
    challenge: 'The retailer needed to source a new line of kitchen appliances with specific UK plug requirements and safety certifications within a tight 10-week timeline.',
    solution: 'We sourced 6 suppliers, selected 2 for trial production, managed the UKCA certification process, and coordinated air and sea freight to meet the launch deadline.',
    results: ['10-week timeline met', '35% margin improvement', '2 qualified suppliers secured', 'Full UKCA certification achieved'],
    imgId: 'cs-appliances-full-0a1b2c',
  },
  {
    title: 'Fashion Apparel for Canadian Brand',
    client: 'Canadian fashion startup',
    challenge: 'The startup needed small batch production (500-1000 units per SKU) with flexible design changes and competitive pricing.',
    solution: 'We found small-to-medium factories willing to work with lower MOQs, negotiated fabric sourcing, managed sample iterations, and set up quality checks for each batch.',
    results: ['4 SKUs launched successfully', 'MOQ as low as 500 units', '45% cost savings vs local production', 'Ongoing monthly production runs'],
    imgId: 'cs-fashion-full-1c2d3e',
  },
  {
    title: 'Medical Device Components for Singapore Firm',
    client: 'Singapore medical technology company',
    challenge: 'The client needed precision components with strict tolerances, medical-grade materials, and ISO 13485 certification compliance.',
    solution: 'We audited 4 ISO 13485 certified factories, verified their quality management systems, managed material certification, and conducted rigorous in-process inspections.',
    results: ['Tolerances within 0.01mm', 'ISO 13485 compliant supply chain', '12-month supply agreement', 'Zero quality incidents in first year'],
    imgId: 'cs-medical-full-2d3e4f',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-500 py-16 md:py-24" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-brand-100 text-lg max-w-2xl mx-auto">
            Real results from real partnerships across industries and markets.
          </p>
        </div>
      </section>

      {/* Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {studies.map((study, index) => (
              <div key={study.title} className="bg-white rounded-xl border border-surface-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:flex">
                  <div className="md:w-5/12 bg-surface-100">
                    <img
                      alt={study.title}
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[cs-title-${study.imgId}] [cs-challenge-${study.imgId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover min-h-[240px]"
                    />
                  </div>
                  <div className="md:w-7/12 p-6 md:p-8">
                    <h2 id={`cs-title-${study.imgId}`} className="text-xl font-bold text-surface-800 mb-1">{study.title}</h2>
                    <p className="text-brand-500 text-sm font-medium mb-4">{study.client}</p>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-surface-700 mb-1">Challenge</h3>
                      <p id={`cs-challenge-${study.imgId}`} className="text-surface-500 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-surface-700 mb-1">Solution</h3>
                      <p className="text-surface-500 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-surface-700 mb-2">Results</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.results.map((r) => (
                          <span key={r} className="inline-flex items-center px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                            {r}
                          </span>
                        ))}
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
      <section className="bg-surface-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-surface-800 mb-4">Start Your Success Story</h2>
          <p className="text-surface-500 mb-8">
            Let us help you source from China with the same dedication and results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}