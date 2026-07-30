import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Star, TrendingDown, Clock, ShieldCheck, Package } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-retailer',
    title: 'Electronics Retailer Reduces Costs by 22%',
    client: 'Mid-size electronics retailer, United States',
    challenge: 'The client was paying premium prices through trading companies and experiencing inconsistent quality across their product range of LED lighting and smart home devices.',
    solution: 'We identified 3 direct manufacturers, conducted factory audits, negotiated pricing, and implemented a QC inspection program for every shipment.',
    results: ['22% reduction in unit cost', 'Quality defect rate dropped from 8% to under 1%', 'Lead time reduced by 2 weeks', 'Direct factory relationships established'],
    icon: TrendingDown,
    category: 'Electronics',
    imgId: 'case-electronics-img-a1b2c3',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'furniture-brand',
    title: 'Furniture Brand Launches New Line in 45 Days',
    client: 'Premium furniture brand, Germany',
    challenge: 'The client needed to find a certified manufacturer for a new outdoor furniture line with strict EU compliance requirements and a tight launch deadline.',
    solution: 'We sourced 5 potential suppliers, verified certifications, arranged samples within 10 days, and managed production with weekly on-site visits.',
    results: ['First container shipped in 45 days', 'All EU compliance requirements met', 'FSC-certified wood sourced', '15% below target budget'],
    icon: Clock,
    category: 'Home & Garden',
    imgId: 'case-furniture-img-b2c3d4',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'apparel-startup',
    title: 'Apparel Startup Achieves Zero-Defect Production',
    client: 'Sustainable fashion startup, Australia',
    challenge: 'A new brand needed to find suppliers offering organic and recycled fabrics, with small initial MOQs and the ability to scale as the brand grew.',
    solution: 'We identified fabric mills with GOTS certification, negotiated flexible MOQs, and implemented a 3-stage inspection process for the first production run of 10,000 units.',
    results: ['Zero defects in first shipment', 'GOTS-certified supply chain', 'MOQ negotiated from 5,000 to 2,000 units', 'Scalable supplier relationship'],
    icon: ShieldCheck,
    category: 'Textiles & Apparel',
    imgId: 'case-apparel-img-c3d4e5',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
  {
    id: 'packaging-company',
    title: 'Packaging Company Consolidates 4 Suppliers into 1',
    client: 'E-commerce packaging supplier, United Kingdom',
    challenge: 'The client was managing 4 different Chinese suppliers for various packaging products, leading to coordination headaches, inconsistent quality, and high shipping costs.',
    solution: 'We found a single large-scale manufacturer capable of producing all product lines, verified their capabilities, and managed the transition over 3 months.',
    results: ['Shipping costs reduced by 30%', 'Single point of contact', 'Consistent quality across all products', 'Simplified inventory management'],
    icon: Package,
    category: 'Packaging',
    imgId: 'case-packaging-img-d4e5f6',
    titleId: 'case-packaging-title',
    descId: 'case-packaging-desc',
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
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Case Studies
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Real sourcing projects, real results. See how we have helped businesses around the world source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="bg-brand-white rounded-xl border border-brand-border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-2">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-full"
                  />
                </div>
                <div className="lg:col-span-3 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1 rounded-full">
                      {cs.category}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-brand-dark mb-1">
                    {cs.title}
                  </h2>
                  <p className="text-sm text-brand-muted mb-4">{cs.client}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h3 className="text-sm font-semibold text-brand-dark">Challenge</h3>
                      <p id={cs.descId} className="text-sm text-brand-gray leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-brand-dark">Our Solution</h3>
                      <p className="text-sm text-brand-gray leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-brand-dark mb-2">Results</h3>
                    <ul className="space-y-1.5">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm text-brand-dark">
                          <span className="w-1.5 h-1.5 bg-brand-green rounded-full shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Want Similar Results for Your Business?
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Every project starts with a conversation. Tell us what you need and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
