import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package, CheckCircle } from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import SectionHeader from '@/components/SectionHeader'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    imgId: 'svc-img-1-c4d8e2',
    titleId: 'svc-1-title',
    descId: 'svc-1-desc',
    tagline: 'Find the right factory, not just any factory.',
    desc: 'We research and shortlist verified Chinese manufacturers that match your product specifications, quality standards, and budget. Our sourcing process draws on an established network of factories across Guangdong, Zhejiang, Jiangsu, and other key manufacturing regions.',
    includes: [
      'Product specification analysis',
      'Supplier database research',
      'Initial supplier screening',
      'Shortlist of 3–5 qualified suppliers',
      'Supplier profile reports',
    ],
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification',
    imgId: 'svc-img-2-a1b5f3',
    titleId: 'svc-2-title',
    descId: 'svc-2-desc',
    tagline: 'Know who you\'re buying from before you pay.',
    desc: 'We conduct on-site factory audits to verify production capacity, equipment, certifications, management systems, and working conditions. Our audit reports give you the information you need to make a confident decision.',
    includes: [
      'On-site factory visit',
      'Production capacity assessment',
      'Certification verification (ISO, CE, etc.)',
      'Worker conditions review',
      'Detailed audit report with photos',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    imgId: 'svc-img-3-f7e2a9',
    titleId: 'svc-3-title',
    descId: 'svc-3-desc',
    tagline: 'Catch defects before they leave China.',
    desc: 'Our quality inspectors check your goods against your specifications at key production stages. We offer pre-shipment inspections, during-production checks, and container loading supervision to ensure what you ordered is what gets shipped.',
    includes: [
      'Pre-shipment inspection (PSI)',
      'During-production inspection (DUPRO)',
      'Container loading supervision (CLS)',
      'AQL sampling standards',
      'Detailed inspection report with photos',
    ],
  },
  {
    id: 'production-followup',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    imgId: 'svc-img-4-b3c6d0',
    titleId: 'svc-4-title',
    descId: 'svc-4-desc',
    tagline: 'Stay informed at every production milestone.',
    desc: 'We act as your on-the-ground representative during production. We communicate with the factory, track progress against your delivery schedule, and flag any issues early — before they become costly delays.',
    includes: [
      'Regular factory communication',
      'Production milestone tracking',
      'Early issue identification',
      'Weekly progress updates',
      'Escalation management',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping Coordination',
    imgId: 'svc-img-5-e9f1b4',
    titleId: 'svc-5-title',
    descId: 'svc-5-desc',
    tagline: 'From factory gate to your warehouse.',
    desc: 'We coordinate with licensed freight forwarders for sea and air freight, handle export documentation, and track your shipment from China to your destination port or warehouse. We simplify a complex process.',
    includes: [
      'Freight forwarder coordination',
      'Sea freight and air freight options',
      'Export documentation handling',
      'Customs clearance support',
      'Shipment tracking and updates',
    ],
  },
  {
    id: 'private-label',
    icon: Package,
    title: 'Private Label / OEM',
    imgId: 'svc-img-6-d2a7c5',
    titleId: 'svc-6-title',
    descId: 'svc-6-desc',
    tagline: 'Your brand, manufactured in China.',
    desc: 'We manage the full OEM and private label process — from product design and factory selection to branded packaging and production oversight. Ideal for brands looking to launch or expand their product range.',
    includes: [
      'Product design and specification',
      'OEM factory selection',
      'Sample development and review',
      'Branded packaging coordination',
      'Full production management',
    ],
  },
]

export default function Services() {
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
      <section className="bg-brand-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-400 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Full-Service China Sourcing
            </h1>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-2xl">
              From finding the right supplier to delivering goods to your door, we provide end-to-end sourcing services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((svc, i) => {
              const Icon = svc.icon
              const isEven = i % 2 === 1
              return (
                <div key={svc.id} id={svc.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-brand-700" />
                    </div>
                    <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800 mb-2">{svc.title}</h2>
                    <p className="text-accent-500 font-medium mb-4">{svc.tagline}</p>
                    <p id={svc.descId} className="text-neutral-600 leading-relaxed mb-6">{svc.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {svc.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckCircle className="w-4 h-4 text-brand-700 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <CTAButton to="/contact" variant="primary" showArrow>
                      Inquire About This Service
                    </CTAButton>
                  </div>
                  <div className={`rounded-2xl overflow-hidden bg-neutral-100 aspect-video ${isEven ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={svc.imgId}
                      data-strk-img={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-neutral-200 text-lg mb-8">
            Tell us about your product and sourcing goals. We'll recommend the right combination of services for your situation.
          </p>
          <CTAButton to="/contact" size="lg" showArrow>
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
