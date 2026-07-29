import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, ShieldCheck, ClipboardCheck, Factory, Ship, HeadphonesIcon, CheckCircle } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionCTA from '@/components/shared/SectionCTA'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We leverage our network and on-the-ground presence to find manufacturers that match your exact requirements.',
    features: [
      'Product-specific supplier research',
      'Multiple supplier comparison with quotes',
      'Background checks and trade history review',
      'Sample coordination and evaluation',
    ],
    imgId: 'svc-page-sourcing-1a2b3c',
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
  },
  {
    id: 'factory-verification',
    icon: ShieldCheck,
    title: 'Factory Verification & Audit',
    description: 'Our team visits factories in person to verify their legitimacy, capacity, and quality management systems.',
    features: [
      'On-site factory audit with photo report',
      'Business license and export license verification',
      'Production capacity assessment',
      'Quality management system review',
    ],
    imgId: 'svc-page-verify-4d5e6f',
    titleId: 'svc-page-verify-title',
    descId: 'svc-page-verify-desc',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Professional inspections at every stage of production to ensure your goods meet specifications.',
    features: [
      'Pre-production inspection (PPI)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
    ],
    imgId: 'svc-page-qc-7g8h9i',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
  },
  {
    id: 'production-followup',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'Regular factory visits and progress reports keep your order on track and within specifications.',
    features: [
      'Weekly production progress reports',
      'Photo and video documentation',
      'Timeline tracking and delay alerts',
      'Issue resolution and rework management',
    ],
    imgId: 'svc-page-prod-0j1k2l',
    titleId: 'svc-page-prod-title',
    descId: 'svc-page-prod-desc',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    description: 'End-to-end freight coordination from factory to your warehouse, including all documentation.',
    features: [
      'Sea, air, and rail freight options',
      'Export documentation and customs',
      'Container loading supervision',
      'Door-to-door delivery tracking',
    ],
    imgId: 'svc-page-ship-3m4n5o',
    titleId: 'svc-page-ship-title',
    descId: 'svc-page-ship-desc',
  },
  {
    id: 'ongoing-support',
    icon: HeadphonesIcon,
    title: 'Ongoing Account Support',
    description: 'A dedicated account manager handles all communication, negotiation, and issue resolution.',
    features: [
      'Dedicated bilingual account manager',
      'Price negotiation and contract review',
      'Supplier relationship management',
      'Responsive cross-timezone communication',
    ],
    imgId: 'svc-page-support-6p7q8r',
    titleId: 'svc-page-support-title',
    descId: 'svc-page-support-desc',
  },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHero
        title="Our Sourcing Services"
        subtitle="Comprehensive support at every stage of your China sourcing journey — from finding suppliers to delivering goods at your door."
      />

      <section ref={containerRef} className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isReversed = idx % 2 === 1
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        data-strk-img-id={service.imgId}
                        data-strk-img={`[${service.descId}] [${service.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 id={service.titleId} className="text-2xl md:text-3xl font-bold text-neutral-800">{service.title}</h2>
                    </div>
                    <p id={service.descId} className="text-neutral-600 text-lg mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <SectionCTA
        title="Need Help Sourcing from China?"
        subtitle="Tell us about your project and get a free, no-obligation quote within 24 hours."
      />
    </>
  )
}

export default Services
