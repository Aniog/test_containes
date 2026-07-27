import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import CTABanner from '@/components/shared/CTABanner'
import { Quote } from 'lucide-react'

const caseStudies = [
  {
    id: 'case-electronics',
    client: 'US Electronics Brand',
    industry: 'Consumer Electronics',
    challenge: 'Needed to find a reliable manufacturer for custom Bluetooth speakers with specific audio requirements and branded packaging.',
    solution: 'Sourced 5 potential factories, conducted audits, managed sample development through 3 iterations, and coordinated production of 10,000 units.',
    results: ['30% cost reduction vs. previous supplier', 'Zero defects in pre-shipment inspection', 'On-time delivery within 6 weeks', 'Ongoing partnership for quarterly reorders'],
    testimonial: 'SSourcing China found us a factory that delivers consistent quality at a price point we couldn\'t find on our own. They\'ve been managing our orders for 2 years now.',
    imgId: 'case-elec-img-4a5b6c',
    titleId: 'case-elec-title',
    descId: 'case-elec-desc',
  },
  {
    id: 'case-apparel',
    client: 'European Fashion Startup',
    industry: 'Textiles & Apparel',
    challenge: 'First-time importer needed help sourcing sustainable activewear with custom designs, specific fabric requirements, and small initial MOQ.',
    solution: 'Identified factories specializing in eco-friendly sportswear, negotiated reduced MOQ for first order, managed sampling and production quality.',
    results: ['Found factory accepting 300-unit MOQ', 'OEKO-TEX certified materials sourced', 'Full production in 4 weeks', 'Scaled to 5,000 units by third order'],
    testimonial: 'As a first-time importer, I was nervous about quality and communication. SSourcing China handled everything professionally and made the process stress-free.',
    imgId: 'case-apparel-img-7d8e9f',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
  {
    id: 'case-home',
    client: 'Australian Home Goods Retailer',
    industry: 'Home & Garden',
    challenge: 'Existing supplier had quality issues and missed deadlines. Needed to find a replacement factory for bamboo kitchenware line without disrupting supply.',
    solution: 'Fast-tracked supplier search, conducted parallel audits of 4 factories, managed smooth transition with overlap production to avoid stockouts.',
    results: ['New supplier identified in 10 days', 'Quality defect rate dropped from 8% to 0.5%', 'Seamless transition with no supply gaps', '15% cost improvement on same products'],
    testimonial: 'They replaced our problematic supplier in record time. The new factory is reliable, communicative, and delivers excellent quality consistently.',
    imgId: 'case-home-img-1g2h3i',
    titleId: 'case-home-title',
    descId: 'case-home-desc',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Case Studies</h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Real results from real sourcing projects. See how we've helped buyers like you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <article key={study.id} className="bg-surface rounded-2xl overflow-hidden border border-border">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto">
                    <img
                      alt={study.client}
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">{study.industry}</span>
                    </div>
                    <h2 id={study.titleId} className="text-xl md:text-2xl font-bold text-text-primary mb-2">{study.client}</h2>
                    <p id={study.descId} className="text-sm text-text-secondary mb-4">{study.challenge}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-text-primary mb-1">Our Solution:</h4>
                      <p className="text-sm text-text-secondary">{study.solution}</p>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-text-primary mb-2">Results:</h4>
                      <ul className="space-y-1.5">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <span className="text-success font-bold">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex gap-3">
                        <Quote className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-text-secondary italic leading-relaxed">{study.testimonial}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}

export default CaseStudies
