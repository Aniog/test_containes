import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Settings, Ship, FileCheck, Camera, Globe, BarChart3, Handshake } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const detailServices = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Finding the right factory for your product',
    desc: 'We leverage our extensive network of pre-vetted manufacturers across China\'s industrial regions — Guangdong, Zhejiang, Jiangsu, Fujian, and more. We do not just search B2B platforms. We visit trade fairs, consult industry associations, and tap into our years of on-the-ground relationships.',
    list: ['Product specification analysis', 'Supplier shortlisting (5-8 candidates)', 'Initial capability assessment', 'Price comparison and negotiation', 'Sample collection and evaluation'],
    imgId: 'service-supplier-sourcing-bg-8a9b0c',
  },
  {
    id: 'factory-verification',
    icon: Building2,
    title: 'Factory Verification & Audit',
    subtitle: 'On-site due diligence before you commit',
    desc: 'Before you place an order, we physically visit the factory to verify everything: business licenses, production capacity, quality management systems, equipment condition, and workforce capability. We take real photos and provide an honest, detailed audit report.',
    list: ['Business license & export license verification', 'Production floor & equipment inspection', 'Quality management system review (ISO, etc.)', 'Worker conditions & shift capacity check', 'Previous client reference verification'],
    imgId: 'service-factory-verification-bg-1b2c3d',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Ensuring your products meet specifications',
    desc: 'Our quality control process follows international AQL (Acceptable Quality Limit) standards. We inspect at multiple stages to catch issues early — before they become expensive problems. Every inspection includes a detailed report with photos.',
    list: ['Pre-production inspection (materials & components)', 'During-production inspection (random sampling)', 'Pre-shipment final inspection (AQL-based)', 'Container loading supervision', 'Lab testing coordination (when required)'],
    imgId: 'service-quality-inspection-bg-4d5e6f',
  },
  {
    id: 'production-follow-up',
    icon: Settings,
    title: 'Production Follow-Up',
    subtitle: 'Keeping your production on track',
    desc: 'Production delays and deviations are common. Our team visits factories regularly during production to monitor progress, flag issues, and keep everything on schedule. You receive weekly updates with photos and a clear status report.',
    list: ['Weekly factory visits during production', 'Progress photos & status reports', 'Milestone tracking & delay alerts', 'On-site problem resolution', 'Order consolidation from multiple factories'],
    imgId: 'service-production-follow-up-bg-7g8h9i',
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'Getting your products to your destination',
    desc: 'We manage the entire logistics chain: freight forwarding, documentation, customs clearance, and final delivery. We work with trusted freight partners to handle FCL, LCL, air freight, and express shipments to any destination worldwide.',
    list: ['Freight forwarding (sea, air, rail, express)', 'Customs documentation preparation', 'Container loading supervision', 'Cargo insurance arrangement', 'Door-to-door delivery coordination'],
    imgId: 'service-shipping-coordination-bg-0j1k2l',
  },
]

const extraServices = [
  { icon: FileCheck, title: 'Contract Review', desc: 'We help review and negotiate supplier contracts to protect your interests.' },
  { icon: Camera, title: 'Product Photography', desc: 'Professional product photos and videos from the factory for your marketing needs.' },
  { icon: Globe, title: 'Trade Fair Representation', desc: 'We attend Canton Fair and other trade shows on your behalf to source new suppliers.' },
  { icon: BarChart3, title: 'Market Price Analysis', desc: 'Detailed analysis of raw material costs and competitive pricing for your product category.' },
  { icon: Handshake, title: 'Supplier Relationship Management', desc: 'Ongoing supplier management to maintain quality standards and competitive pricing.' },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Services</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Full-Service China Sourcing
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            From finding the right supplier to delivering finished products to your door.
            Every step managed by our on-the-ground team in China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {detailServices.map((service) => (
              <div key={service.id} id={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24">
                <div className={`${service.id === 'supplier-sourcing' || service.id === 'quality-inspection' || service.id === 'shipping-coordination' ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="w-12 h-12 bg-tint rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">{service.title}</h2>
                  <p className="text-accent font-medium text-sm mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={service.id === 'supplier-sourcing' || service.id === 'quality-inspection' || service.id === 'shipping-coordination' ? 'lg:order-2' : 'lg:order-1'}>
                  <div
                    data-strk-bg-id={service.imgId}
                    data-strk-bg={`[service-title-${service.id}] china professional factory service`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="rounded-2xl shadow-lg overflow-hidden"
                    style={{ paddingTop: '75%', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  <span className="hidden" id={`service-title-${service.id}`}>{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Additional Services</h2>
            <p className="text-gray-600">Supplementary services that complement our core sourcing offering.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraServices.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <svc.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-bold text-navy mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a custom sourcing solution?</h2>
          <p className="text-gray-300 mb-8">Every product and industry has unique requirements. Tell us what you need and we will design a sourcing plan tailored to your business.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
