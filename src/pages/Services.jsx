import { Search, ShieldCheck, CheckCircle2, Truck, ClipboardList, Plane, Link } from "lucide-react"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      id: 'product-sourcing',
      name: 'Product Sourcing',
      description: 'Find reliable manufacturers capable of producing your exact specifications. We negotiate prices, MOQ, and terms to get you the best deal possible without compromising quality.',
      icon: Search,
      image: 'warehouse inventory product sourcing boxes',
      features: [
        'Supplier identification and shortlisting',
        'Sample collection and arrangement',
        'Price and MOQ negotiation',
        'Contract drafting with local legal standards'
      ]
    },
    {
      id: 'factory-audit',
      name: 'Factory Verification & Audits',
      description: 'Never fall victim to a scam. We physically visit factories to ensure they are real manufacturers, not just trading companies or scammers.',
      icon: ShieldCheck,
      image: 'factory inspection auditing manufacturing facility',
      features: [
        'Business license verification',
        'Physical facility inspection',
        'Production capacity assessment',
        'Social and environmental compliance checks'
      ]
    },
    {
      id: 'quality-control',
      name: 'Quality Control & Inspection',
      description: 'Your eyes in the factory. We perform rigorous checks during and after production so defect goods never leave China.',
      icon: CheckCircle2,
      image: 'quality control testing products inspector',
      features: [
        'Pre-Production Inspection (PPI)',
        'During Production Inspection (DUPRO)',
        'Pre-Shipment Inspection (PSI)',
        'Container Loading Check (CLC)'
      ]
    },
    {
      id: 'shipping-logistics',
      name: 'Shipping & Logistics',
      description: 'Seamless coordination from the factory floor to your warehouse. We handle customs clearance and find the most cost-effective freight options.',
      icon: Truck,
      image: 'cargo ship logistics shipping containers port',
      features: [
        'Sea freight (FCL & LCL) and Air freight',
        'Amazon FBA prep and shipping',
        'Customs clearance in China',
        'Warehouse consolidation'
      ]
    }
  ]

  return (
    <div className="bg-white" ref={containerRef}>
      {/* Header */}
      <div className="bg-blue-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Services</h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              End-to-end China sourcing solutions built for global brands, Amazon sellers, and e-commerce entrepreneurs. We handle the complexities so you don't have to.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.name} className="flex flex-col lg:flex-row gap-12 lg:items-center">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <img
                      data-strk-img-id={`services-detail-${service.id}`}
                      data-strk-img={service.image}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mb-6">
                    <service.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.name}</h3>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {service.description}
                  </p>
                  <ul role="list" className="mt-8 space-y-4 text-gray-600">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}