import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, TrendingUp, Clock, DollarSign, CheckCircle2 } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-usa',
    client: 'Electronics Retailer',
    location: 'United States',
    industry: 'Consumer Electronics',
    challenge: 'The client was sourcing Bluetooth speakers from a supplier found on Alibaba but experienced inconsistent quality, with a 15% defect rate on recent shipments. They needed a reliable alternative without disrupting their supply chain.',
    solution: 'We audited 8 factories in Guangdong, shortlisted 3 qualified manufacturers, conducted trial orders with quality inspections, and transitioned production to a verified supplier with ISO 9001 certification.',
    results: [
      { icon: TrendingUp, label: 'Defect rate reduced from 15% to 1.2%' },
      { icon: DollarSign, label: 'Unit cost reduced by 22%' },
      { icon: Clock, label: 'Lead time improved by 10 days' },
    ],
  },
  {
    id: 'furniture-germany',
    client: 'Furniture Brand',
    location: 'Germany',
    industry: 'Home Furniture',
    challenge: 'A German furniture company needed to establish a reliable supply chain for custom solid wood furniture. Previous attempts resulted in quality inconsistencies and missed delivery deadlines.',
    solution: 'We identified specialized furniture manufacturers in Foshan, conducted factory audits focusing on wood sourcing and finishing capabilities, and implemented a production monitoring system with weekly photo updates.',
    results: [
      { icon: CheckCircle2, label: '98% on-time delivery rate achieved' },
      { icon: TrendingUp, label: 'Quality consistency improved to 99.5%' },
      { icon: DollarSign, label: '18% cost savings vs. previous supplier' },
    ],
  },
  {
    id: 'apparel-australia',
    client: 'Apparel Company',
    location: 'Australia',
    industry: 'Sportswear & Activewear',
    challenge: 'An Australian activewear brand needed to diversify their fabric suppliers and reduce lead times. Their single-source dependency created risk and limited their ability to scale.',
    solution: 'We sourced 15 fabric mills across Zhejiang and Jiangsu, negotiated favorable terms for smaller MOQs, and established a dual-supplier strategy with quality benchmarking across all sources.',
    results: [
      { icon: Clock, label: 'Lead time reduced from 8 to 5 weeks' },
      { icon: TrendingUp, label: '15 new verified fabric suppliers' },
      { icon: DollarSign, label: '12% average cost reduction' },
    ],
  },
  {
    id: 'auto-parts-uk',
    client: 'Auto Parts Distributor',
    location: 'United Kingdom',
    industry: 'Automotive Aftermarket',
    challenge: 'A UK distributor needed to source brake pads and filters meeting ECE R90 certification standards. Previous suppliers failed compliance testing, resulting in rejected shipments.',
    solution: 'We identified manufacturers with existing ECE R90 certifications, verified their testing capabilities on-site, and implemented a pre-shipment testing protocol to ensure every batch met standards.',
    results: [
      { icon: CheckCircle2, label: '100% compliance rate on all shipments' },
      { icon: DollarSign, label: '25% cost savings vs. European suppliers' },
      { icon: Clock, label: 'Stable 6-week supply cycle established' },
    ],
  },
  {
    id: 'packaging-canada',
    client: 'Food Packaging Company',
    location: 'Canada',
    industry: 'Food & Beverage Packaging',
    challenge: 'A Canadian food company needed FDA-compliant custom packaging at scale. They required consistent print quality, food-safe materials, and reliable delivery schedules for seasonal demand spikes.',
    solution: 'We sourced packaging manufacturers with FDA and BRC certifications, coordinated material testing at accredited labs, and established a buffer stock system to handle seasonal volume increases.',
    results: [
      { icon: CheckCircle2, label: 'FDA compliance verified on all materials' },
      { icon: TrendingUp, label: '40% capacity increase for peak seasons' },
      { icon: DollarSign, label: '30% cost reduction vs. domestic suppliers' },
    ],
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#0f2a4a] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#e86a2e] font-semibold text-sm uppercase tracking-wider mb-3">Case Studies</p>
            <h1 id="cs-hero-title" className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Real Results from Real Projects
            </h1>
            <p id="cs-hero-subtitle" className="mt-5 text-lg text-neutral-200 leading-relaxed">
              See how we've helped businesses worldwide solve sourcing challenges, reduce costs, and build reliable supply chains from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs) => (
              <article key={cs.id} className="border border-neutral-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <img
                      data-strk-img-id={`cs-${cs.id}-img-3b7e`}
                      data-strk-img={`[cs-${cs.id}-title] [cs-hero-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.client}
                      className="w-full h-full min-h-[200px] object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-[#e86a2e]/10 text-[#e86a2e] font-medium px-2.5 py-1 rounded-full">{cs.industry}</span>
                      <span className="text-xs bg-neutral-100 text-neutral-700 font-medium px-2.5 py-1 rounded-full">{cs.location}</span>
                    </div>
                    <h2 id={`cs-${cs.id}-title`} className="text-xl font-bold text-[#0f2a4a] mb-3">{cs.client}, {cs.location}</h2>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-1">Challenge</h4>
                      <p className="text-sm text-neutral-700 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-1">Our Solution</h4>
                      <p className="text-sm text-neutral-700 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-2">Results</h4>
                      <ul className="space-y-1.5">
                        {cs.results.map((result) => (
                          <li key={result.label} className="flex items-center gap-2 text-sm text-neutral-700">
                            <result.icon className="w-4 h-4 text-[#e86a2e] shrink-0" />
                            {result.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2a4a] tracking-tight">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Tell us about your sourcing challenge and let's discuss how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-[#e86a2e] hover:bg-[#d05a20] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
