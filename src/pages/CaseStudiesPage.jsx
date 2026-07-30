import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle, TrendingUp, Globe } from 'lucide-react'
import CTAButton from '../components/CTAButton.jsx'
import SectionHeader from '../components/SectionHeader.jsx'

const caseStudies = [
  {
    id: 'furniture-uk',
    titleId: 'cs-furniture-uk-title',
    descId: 'cs-furniture-uk-desc',
    imgId: 'cs-full-img-furniture-uk-a1b2c3',
    category: 'Furniture',
    country: 'United Kingdom',
    title: 'UK Home Goods Retailer Cuts Sourcing Costs by 22%',
    challenge: 'A UK-based home goods retailer was sourcing furniture through a trading company and experiencing inconsistent quality and high margins. They needed a direct factory relationship in Foshan.',
    solution: 'We audited 8 factories in Foshan, shortlisted 2 that met their quality and compliance requirements, and negotiated a direct supply agreement. We also set up a quarterly QC inspection schedule.',
    results: ['22% reduction in unit cost vs. previous trading company', 'Zero quality rejections across 3 production runs', 'Lead time reduced from 90 to 65 days', 'Direct factory relationship established'],
    services: ['Factory Verification', 'Supplier Negotiation', 'Quality Inspection', 'Production Follow-up'],
  },
  {
    id: 'electronics-us',
    titleId: 'cs-electronics-us-title',
    descId: 'cs-electronics-us-desc',
    imgId: 'cs-full-img-electronics-us-d4e5f6',
    category: 'Electronics',
    country: 'United States',
    title: 'US Brand Successfully Launches Private Label Electronics',
    challenge: 'An American startup wanted to launch a private label smart home product line but had no experience sourcing electronics from China. They needed a certified manufacturer and help navigating CE and FCC compliance.',
    solution: 'We identified 4 qualified electronics manufacturers in Shenzhen, conducted factory audits, coordinated sample rounds, and worked with the client\'s compliance consultant to ensure all certifications were in order before mass production.',
    results: ['Product launched on schedule', 'CE and FCC certifications obtained', 'First order of 2,000 units delivered without defects', 'Ongoing supply relationship established'],
    services: ['Supplier Sourcing', 'Factory Verification', 'Sample Procurement', 'Quality Inspection', 'Shipping Coordination'],
  },
  {
    id: 'textiles-au',
    titleId: 'cs-textiles-au-title',
    descId: 'cs-textiles-au-desc',
    imgId: 'cs-full-img-textiles-au-g7h8i9',
    category: 'Clothing & Textiles',
    country: 'Australia',
    title: 'Australian Fashion Brand Scales Apparel Production',
    challenge: 'A growing Australian fashion brand needed to scale from 500 to 5,000 units per style across 6 SKUs. Their existing supplier couldn\'t handle the volume and quality was inconsistent.',
    solution: 'We sourced a compliant apparel factory in Guangzhou with the capacity and quality systems to handle the increased volume. We managed QC across all 6 SKUs and coordinated consolidated shipping to Australia.',
    results: ['On-time delivery for all 6 SKUs', 'Consistent quality across all styles', 'Production capacity scaled to 10,000 units/month', '15% cost saving vs. previous supplier'],
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Shipping Coordination'],
  },
  {
    id: 'packaging-de',
    titleId: 'cs-packaging-de-title',
    descId: 'cs-packaging-de-desc',
    imgId: 'cs-full-img-packaging-de-j1k2l3',
    category: 'Packaging',
    country: 'Germany',
    title: 'German Brand Sources Custom Packaging at Scale',
    challenge: 'A German consumer goods brand needed custom printed packaging boxes for a product launch. They required FSC-certified materials and specific Pantone color matching.',
    solution: 'We sourced 3 FSC-certified packaging manufacturers in Guangdong, coordinated color matching samples, and managed a 50,000-unit production run with strict quality checks on print quality and structural integrity.',
    results: ['FSC certification confirmed', 'Pantone color match achieved within tolerance', '50,000 units delivered on time', 'Packaging cost 30% below European alternatives'],
    services: ['Supplier Sourcing', 'Sample Procurement', 'Quality Inspection', 'Shipping Coordination'],
  },
  {
    id: 'toys-ca',
    titleId: 'cs-toys-ca-title',
    descId: 'cs-toys-ca-desc',
    imgId: 'cs-full-img-toys-ca-m4n5o6',
    category: 'Toys',
    country: 'Canada',
    title: 'Canadian Toy Importer Passes Safety Certification',
    challenge: 'A Canadian toy importer needed to source educational toys that met ASTM F963 and Health Canada safety standards. Previous suppliers had failed certification tests.',
    solution: 'We identified manufacturers with existing ASTM certification experience, coordinated pre-production material testing, and managed the certification process alongside the client\'s testing lab.',
    results: ['All products passed ASTM F963 testing', 'Health Canada compliance achieved', 'Zero recalls or safety issues', 'Supplier relationship ongoing for 3 years'],
    services: ['Supplier Sourcing', 'Factory Verification', 'Quality Inspection', 'Production Follow-up'],
  },
  {
    id: 'auto-za',
    titleId: 'cs-auto-za-title',
    descId: 'cs-auto-za-desc',
    imgId: 'cs-full-img-auto-za-p7q8r9',
    category: 'Auto Parts',
    country: 'South Africa',
    title: 'South African Distributor Builds Reliable Auto Parts Supply Chain',
    challenge: 'A South African auto parts distributor was struggling with inconsistent quality and long lead times from multiple unverified suppliers. They needed a consolidated, reliable supply chain.',
    solution: 'We audited and consolidated their supplier base from 8 to 3 verified manufacturers, set up a regular inspection schedule, and coordinated consolidated monthly shipments to reduce freight costs.',
    results: ['Supplier base consolidated from 8 to 3', 'Defect rate reduced by 60%', 'Freight costs reduced by 18% through consolidation', 'Lead time predictability improved significantly'],
    services: ['Factory Verification', 'Quality Inspection', 'Production Follow-up', 'Shipping Coordination'],
  },
]

export default function CaseStudiesPage() {
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
      <section className="bg-brand-blue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real Projects, Real Results
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            See how we've helped buyers from around the world source successfully from China across a range of industries.
          </p>
          <CTAButton to="/contact" variant="primary">Start Your Project</CTAButton>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, i) => (
            <div key={cs.id} className="bg-brand-bg rounded-2xl overflow-hidden border border-gray-200">
              <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? '' : ''}`}>
                <div className={`aspect-[4/3] lg:aspect-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    data-strk-img-id={cs.imgId}
                    data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`p-8 lg:p-10 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-brand-blue text-xs font-semibold px-2 py-1 rounded">{cs.category}</span>
                    <span className="flex items-center gap-1 text-gray-500 text-xs"><Globe className="w-3 h-3" />{cs.country}</span>
                  </div>
                  <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-brand-dark mb-4">{cs.title}</h2>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-brand-dark text-sm uppercase tracking-wide mb-1">Challenge</h4>
                      <p id={cs.descId} className="text-gray-500 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark text-sm uppercase tracking-wide mb-1">Our Approach</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-dark text-sm uppercase tracking-wide mb-3">Results</h4>
                    <ul className="space-y-1.5">
                      {cs.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cs.services.map((s) => (
                      <span key={s} className="bg-white text-brand-blue text-xs px-2 py-1 rounded border border-blue-200">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-red-100 text-lg mb-8">Tell us about your sourcing project and we'll get back to you within 24 hours.</p>
          <CTAButton to="/contact" variant="white">Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
