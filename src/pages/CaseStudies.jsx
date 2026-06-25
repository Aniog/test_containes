import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Star, TrendingDown, Clock, CheckCircle, Globe } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-electronics-usa',
    client: 'Electronics Retailer',
    location: 'United States',
    industry: 'Consumer Electronics',
    challenge: 'Needed to find a reliable manufacturer for a custom Bluetooth speaker line with specific acoustic requirements and FCC certification.',
    solution: 'We identified 5 potential factories, conducted on-site audits of the top 3, negotiated pricing 22% below initial quotes, and managed QC through 3 production runs.',
    results: ['22% cost reduction vs. initial quotes', 'Zero defects across 10,000 units', 'FCC certification obtained in 3 weeks', 'Ongoing partnership for 2+ years'],
    metric: '22%',
    metricLabel: 'Cost Reduction',
    imgId: 'case-elec-img-1a2b3c',
    titleId: 'case-electronics-usa-title',
    descId: 'case-electronics-usa-desc',
  },
  {
    id: 'case-furniture-germany',
    client: 'Furniture Brand',
    location: 'Germany',
    industry: 'Home Furniture',
    challenge: 'Required FSC-certified wood furniture manufacturer capable of meeting strict EU quality standards and tight delivery deadlines.',
    solution: 'Found 2 FSC-certified factories in Guangdong, managed sample development, conducted 3 quality inspections, and coordinated sea freight to Hamburg.',
    results: ['First container delivered in 45 days', 'FSC & EU compliance verified', 'Consistent quality across 500+ pieces', 'Repeat orders every quarter'],
    metric: '45',
    metricLabel: 'Days to First Delivery',
    imgId: 'case-furn-img-2b3c4d',
    titleId: 'case-furniture-germany-title',
    descId: 'case-furniture-germany-desc',
  },
  {
    id: 'case-apparel-australia',
    client: 'Fashion Label',
    location: 'Australia',
    industry: 'Apparel & Textiles',
    challenge: 'Launching a new activewear line with custom fabrics, needed a factory capable of small initial runs with potential to scale.',
    solution: 'Sourced 4 factories specializing in activewear, negotiated reduced MOQs for the first order, managed fabric development and production QC.',
    results: ['15,000 units with zero defects', 'MOQ reduced from 3,000 to 500 per style', 'Custom fabric developed in 2 weeks', 'Scaled to 50,000 units in year 2'],
    metric: '0',
    metricLabel: 'Defects Reported',
    imgId: 'case-aprl-img-3c4d5e',
    titleId: 'case-apparel-australia-title',
    descId: 'case-apparel-australia-desc',
  },
  {
    id: 'case-medical-uk',
    client: 'Medical Supplies Company',
    location: 'United Kingdom',
    industry: 'Medical Devices',
    challenge: 'Needed ISO 13485 certified manufacturer for disposable medical devices with strict regulatory documentation requirements.',
    solution: 'Identified 3 ISO-certified factories, conducted comprehensive audits, managed regulatory documentation, and supervised production of initial 100,000 units.',
    results: ['ISO 13485 compliance confirmed', '100,000 units delivered on time', 'Full regulatory documentation package', 'CE marking support provided'],
    metric: '100K',
    metricLabel: 'Units Delivered',
    imgId: 'case-med-img-4d5e6f',
    titleId: 'case-medical-uk-title',
    descId: 'case-medical-uk-desc',
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
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-3">Success Stories</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Real results from real clients. See how we've helped businesses across industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, index) => (
              <div key={cs.id} className="border border-border rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${cs.client} case study`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">{cs.industry}</span>
                      <span className="flex items-center gap-1 text-text-muted text-xs">
                        <Globe className="w-3 h-3" /> {cs.location}
                      </span>
                    </div>
                    <h2 id={cs.titleId} className="text-2xl font-bold text-text-primary mb-2">{cs.client}</h2>
                    <p id={cs.descId} className="text-text-secondary text-sm leading-relaxed mb-4">{cs.challenge}</p>

                    <div className="bg-bg-alt rounded-lg p-4 mb-4">
                      <p className="text-text-primary font-medium text-sm mb-1">Our Solution:</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{cs.solution}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-text-primary font-medium text-sm mb-2">Results:</p>
                      <ul className="space-y-2">
                        {cs.results.map((result) => (
                          <li key={result} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                            <span className="text-text-secondary text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 pt-4 border-t border-border">
                      <span className="text-3xl font-bold text-accent">{cs.metric}</span>
                      <span className="text-text-secondary text-sm">{cs.metricLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-alt py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">Want Similar Results?</h2>
          <p className="text-text-secondary text-lg mb-8">Every project starts with a conversation. Tell us what you need and we'll show you how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
