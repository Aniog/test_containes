import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Globe, ArrowRight, TrendingDown, Clock, ShieldCheck } from 'lucide-react'

const cases = [
  {
    id: 'us-furniture',
    category: 'Furniture',
    country: 'United States',
    client: 'Mid-size US furniture retailer',
    challenge: 'The client was sourcing furniture from a single supplier with inconsistent quality and rising prices. They needed to diversify their supplier base and reduce costs.',
    solution: 'We identified 4 verified furniture factories in Foshan, conducted on-site audits, and negotiated pricing. We also implemented a pre-shipment inspection process.',
    result: '22% cost reduction, 3 new verified suppliers, zero quality rejections over 12 months.',
    metrics: [
      { icon: TrendingDown, label: 'Cost Reduction', value: '22%' },
      { icon: ShieldCheck, label: 'Quality Rejections', value: '0' },
      { icon: Globe, label: 'New Suppliers', value: '3' },
    ],
    titleId: 'cs-us-furniture-title',
    descId: 'cs-us-furniture-desc',
    imgId: 'cs-us-furniture-img-a1b2c3',
  },
  {
    id: 'au-electronics',
    category: 'Electronics',
    country: 'Australia',
    client: 'Australian consumer electronics brand',
    challenge: 'A startup brand wanted to launch a private label electronics product line but had no experience sourcing from China and no contacts in the industry.',
    solution: 'We managed the full sourcing process — from product specification to factory selection, sample approval, production monitoring, and final shipment.',
    result: 'Full product line launched in 90 days. 3 SKUs delivered on time and within budget.',
    metrics: [
      { icon: Clock, label: 'Time to Launch', value: '90 days' },
      { icon: ShieldCheck, label: 'SKUs Delivered', value: '3' },
      { icon: TrendingDown, label: 'Under Budget', value: '8%' },
    ],
    titleId: 'cs-au-electronics-title',
    descId: 'cs-au-electronics-desc',
    imgId: 'cs-au-electronics-img-d4e5f6',
  },
  {
    id: 'de-textiles',
    category: 'Textiles',
    country: 'Germany',
    client: 'European fashion brand',
    challenge: 'The brand needed BSCI-certified garment factories to meet their ethical sourcing requirements. Previous suppliers had failed audits.',
    solution: 'We sourced 2 BSCI-certified factories in Guangzhou, managed 5 production runs, and provided in-line quality inspections for each order.',
    result: 'All 5 production runs passed quality inspection. Brand achieved full BSCI compliance.',
    metrics: [
      { icon: ShieldCheck, label: 'Production Runs', value: '5/5 passed' },
      { icon: Globe, label: 'Certified Factories', value: '2' },
      { icon: Clock, label: 'Compliance', value: 'BSCI' },
    ],
    titleId: 'cs-de-textiles-title',
    descId: 'cs-de-textiles-desc',
    imgId: 'cs-de-textiles-img-g7h8i9',
  },
  {
    id: 'uk-toys',
    category: 'Toys',
    country: 'United Kingdom',
    client: 'UK toy distributor',
    challenge: 'The client needed EN71-certified toy suppliers and was struggling to find factories that could meet both quality and certification requirements.',
    solution: 'We identified 3 EN71-certified toy factories, arranged sample procurement, and managed production and pre-shipment inspection for the first order.',
    result: 'First order of 5,000 units delivered on time with full EN71 certification documentation.',
    metrics: [
      { icon: ShieldCheck, label: 'Units Delivered', value: '5,000' },
      { icon: Globe, label: 'Certification', value: 'EN71' },
      { icon: Clock, label: 'On-time Delivery', value: '100%' },
    ],
    titleId: 'cs-uk-toys-title',
    descId: 'cs-uk-toys-desc',
    imgId: 'cs-uk-toys-img-j1k2l3',
  },
  {
    id: 'ca-packaging',
    category: 'Packaging',
    country: 'Canada',
    client: 'Canadian e-commerce brand',
    challenge: 'The brand needed custom branded packaging at scale but was getting inconsistent quality and long lead times from their existing supplier.',
    solution: 'We sourced 2 packaging factories, ran a competitive sample process, and set up a quality control protocol for ongoing orders.',
    result: 'Lead times reduced by 30%. Consistent quality across 8 repeat orders.',
    metrics: [
      { icon: TrendingDown, label: 'Lead Time Reduction', value: '30%' },
      { icon: ShieldCheck, label: 'Repeat Orders', value: '8' },
      { icon: Globe, label: 'Defect Rate', value: '<0.5%' },
    ],
    titleId: 'cs-ca-packaging-title',
    descId: 'cs-ca-packaging-desc',
    imgId: 'cs-ca-packaging-img-m4n5o6',
  },
  {
    id: 'sg-health',
    category: 'Health & Beauty',
    country: 'Singapore',
    client: 'Singapore wellness brand',
    challenge: 'The brand wanted to launch a private label skincare line and needed OEM factories with GMP certification and experience in export markets.',
    solution: 'We identified 3 GMP-certified OEM factories, managed sample development, and coordinated the first production run with full QC.',
    result: 'Product line launched successfully. Factory relationship ongoing for 2+ years.',
    metrics: [
      { icon: ShieldCheck, label: 'Certification', value: 'GMP' },
      { icon: Globe, label: 'Factory Relationship', value: '2+ years' },
      { icon: Clock, label: 'Sample to Launch', value: '60 days' },
    ],
    titleId: 'cs-sg-health-title',
    descId: 'cs-sg-health-desc',
    imgId: 'cs-sg-health-img-p7q8r9',
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
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-gold uppercase tracking-widest mb-3">Client Results</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Case Studies
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Real results from global buyers who trusted SSourcing China with their sourcing projects.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-site-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {cases.map((cs) => (
            <div key={cs.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="aspect-video lg:aspect-auto overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.titleId}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-50 text-navy text-xs font-semibold px-3 py-1 rounded-full">{cs.category}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Globe className="w-3 h-3" /> {cs.country}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{cs.client}</p>
                  <h2 id={cs.titleId} className="text-xl font-bold text-navy mb-4">{cs.result}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {cs.metrics.map(({ icon: Icon, label, value }) => (
                      <div key={label} className="bg-site-bg rounded-lg p-3 text-center">
                        <Icon className="w-4 h-4 text-brand-red mx-auto mb-1" />
                        <div className="text-lg font-bold text-navy">{value}</div>
                        <div className="text-xs text-gray-500">{label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Challenge</span>
                      <p id={cs.descId} className="text-gray-600 text-sm mt-1">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Our Solution</span>
                      <p className="text-gray-600 text-sm mt-1">{cs.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Similar Results?</h2>
          <p className="text-blue-200 mb-8">
            Tell us about your sourcing project and we'll put together a plan tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
