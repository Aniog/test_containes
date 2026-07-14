import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Star, MapPin, Package } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-usa',
    category: 'Electronics',
    client: 'Consumer Electronics Retailer',
    location: 'United States',
    challenge: 'Needed to find a reliable manufacturer for custom Bluetooth speakers with specific audio quality requirements and UL certification.',
    solution: 'Identified 5 potential suppliers, conducted factory audits, arranged samples from top 3, and negotiated a 22% cost reduction compared to their previous supplier.',
    results: ['22% cost reduction', 'UL certified on first attempt', '3% defect rate (down from 12%)', 'On-time delivery for 8 consecutive orders'],
    imgId: 'case-electronics-img-q8r9s0',
  },
  {
    id: 'furniture-germany',
    category: 'Furniture',
    client: 'Contract Furniture Brand',
    location: 'Germany',
    challenge: 'Scaling from 1 container per month to 10 containers while maintaining consistent quality across multiple product lines.',
    solution: 'Established relationships with 3 complementary factories, implemented production scheduling system, and deployed dedicated QC inspectors.',
    results: ['Scaled to 10 containers/month', '6-month ramp-up period', 'Consistent quality across factories', 'Zero shipment rejections'],
    imgId: 'case-furniture-img-t1u2v3',
  },
  {
    id: 'beauty-australia',
    category: 'Health & Beauty',
    client: 'Natural Skincare Brand',
    location: 'Australia',
    challenge: 'Required OEM cosmetics manufacturer with GMP certification and ability to pass Australian TGA regulations on first submission.',
    solution: 'Sourced GMP-certified manufacturer with export experience to Australia, coordinated formulation development, and managed regulatory documentation.',
    results: ['TGA approved first submission', 'GMP certified facility', '40% lower production cost', 'Ongoing monthly orders'],
    imgId: 'case-beauty-img-w4x5y6',
  },
  {
    id: 'industrial-uk',
    category: 'Industrial',
    client: 'Hydraulic Components Distributor',
    location: 'United Kingdom',
    challenge: 'Previous Chinese supplier had inconsistent quality and frequent delivery delays, causing stock-outs and customer complaints.',
    solution: 'Conducted comprehensive supplier replacement project, including technical audits, sample testing, and 3-month trial production monitoring.',
    results: ['99.2% quality pass rate', 'Lead time reduced by 3 weeks', 'Zero stock-outs in 12 months', 'Annual savings of £45,000'],
    imgId: 'case-industrial-img-z7a8b9',
  },
  {
    id: 'packaging-canada',
    category: 'Packaging',
    client: 'Food Packaging Company',
    location: 'Canada',
    challenge: 'Needed FDA-compliant food-grade packaging at competitive prices with consistent print quality across large volume orders.',
    solution: 'Identified specialized food packaging manufacturers, verified FDA compliance documentation, and established color management protocols.',
    results: ['FDA compliant packaging', '35% cost savings', 'Consistent color matching', '500,000+ units/month capacity'],
    imgId: 'case-packaging-img-c0d1e2',
  },
  {
    id: 'sports-france',
    category: 'Sports & Outdoors',
    client: 'Outdoor Equipment Brand',
    location: 'France',
    challenge: 'Launching a new line of camping equipment with strict European safety standards (EN) and tight timeline for seasonal launch.',
    solution: 'Fast-tracked supplier identification, managed parallel sample development with 2 factories, and coordinated EN testing with accredited labs.',
    results: ['EN certified all products', 'Launched on schedule', '18% under budget', 'Repeat orders within 3 months'],
    imgId: 'case-sports-img-f3g4h5',
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
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Case Studies</h1>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl">
            Real sourcing projects, real results. See how we have helped businesses worldwide source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[case-${cs.id}-challenge] [case-${cs.id}-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.client}
                      className="w-full h-48 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">{cs.category}</span>
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <MapPin className="w-3 h-3" /> {cs.location}
                      </span>
                    </div>
                    <h2 id={`case-${cs.id}-title`} className="text-xl font-semibold text-primary">{cs.client}</h2>
                    <div className="mt-4 space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary">Challenge</h3>
                        <p id={`case-${cs.id}-challenge`} className="text-sm text-text-secondary mt-1">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary">Our Solution</h3>
                        <p className="text-sm text-text-secondary mt-1">{cs.solution}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-text-primary">Results</h3>
                        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {cs.results.map((r) => (
                            <li key={r} className="flex items-center gap-2 text-sm text-text-secondary">
                              <Star className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
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
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Want Similar Results?</h2>
          <p className="mt-4 text-gray-200 text-lg">Let us help you find the right suppliers and manage your sourcing project.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent text-white font-semibold px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
