import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle2, Search, Building2, ClipboardCheck, Truck } from 'lucide-react'

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      id: 'sourcing',
      title: 'Product Sourcing',
      icon: Search,
      description: 'Finding the right manufacturer is the most critical step. We don\'t just look on Alibaba; we leverage our local network to find direct factories that often don\'t advertise in English.',
      features: ['Manufacturer identification', 'Price negotiation', 'Sample arrangement', 'Background checks']
    },
    {
      id: 'audits',
      title: 'Factory Audits',
      icon: Building2,
      description: 'Before you place a large order, we physically visit the factory to ensure they are a legitimate manufacturer, not a trading company, and assess their capability to handle your order.',
      features: ['On-site verification', 'Production capacity assessment', 'Quality system checks', 'Social compliance']
    },
    {
      id: 'qc',
      title: 'Quality Control',
      icon: ClipboardCheck,
      description: 'We act as your eyes in the factory during production and before shipping. Identifying defects before goods leave China saves significant time and money.',
      features: ['Pre-Shipment Inspection (PSI)', 'During Production Check (DUPRO)', 'First Article Inspection', 'Container Loading Check']
    },
    {
      id: 'logistics',
      title: 'Logistics Coordination',
      icon: Truck,
      description: 'Getting your goods from the factory floor to your warehouse seamlessly. We manage the paperwork, consolidate shipments if needed, and secure competitive freight rates.',
      features: ['Freight forwarding', 'Customs documentation', 'Shipment consolidation', 'Door-to-door delivery']
    }
  ]

  return (
    <div ref={containerRef} className="bg-white">
      {/* Page Header */}
      <div className="bg-stone-100 py-16 lg:py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="page-title" className="text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Our Sourcing Services
          </h1>
          <p id="page-subtitle" className="text-xl text-stone-600 max-w-3xl mx-auto">
            Comprehensive end-to-end sourcing solutions designed to protect your investment and ensure quality when importing from China.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg bg-stone-100 relative min-h-[300px]">
                    <img
                      alt={service.title}
                      className="object-cover w-full h-full absolute inset-0"
                      data-strk-img-id={`service-img-${service.id}`}
                      data-strk-img={`[service-title-${service.id}] [service-desc-${service.id}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-50 bg-opacity-50 rounded-xl mb-6 text-blue-700">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h2 id={`service-title-${service.id}`} className="text-3xl font-bold text-stone-900 mb-6">{service.title}</h2>
                  <p id={`service-desc-${service.id}`} className="text-lg text-stone-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-stone-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need a custom service package?</h2>
          <p className="text-lg text-stone-300 mb-8">Whether you need just a pre-shipment inspection or full A-to-Z sourcing management, we can tailor our services to your needs.</p>
          <a href="/contact" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </div>
  )
}