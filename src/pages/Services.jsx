import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      id: "supplier-verification",
      title: "Supplier Verification & Factory Audit",
      desc: "Don't risk your money on unverified suppliers. We visit factories in person to ensure they are legitimate manufacturers, not trading companies or scammers.",
      features: ["Business License Check", "Production Capacity Assessment", "Quality System Evaluation", "Social Compliance Audit"],
      imgId: "srv-page-verify-91a"
    },
    {
      id: "quality-control",
      title: "Quality Control & Inspection",
      desc: "Stop defective products before they are shipped. Our inspectors travel to the factory to perform rigorous checks according to your specifications and international standards.",
      features: ["Pre-Production Inspection (PPI)", "During Production Inspection (DPI)", "Pre-Shipment Inspection (PSI)", "Container Loading Check (CLC)"],
      imgId: "srv-page-qc-82b"
    },
    {
      id: "production-tracking",
      title: "Production Follow-up",
      desc: "Keep your orders on schedule. We maintain constant communication with the factory, monitor production milestones, and provide you with regular status updates and photos.",
      features: ["Weekly Progress Reports", "Material Readiness Check", "Schedule Management", "Delay Mitigation"],
      imgId: "srv-page-track-73c"
    },
    {
      id: "shipping-logistics",
      title: "Shipping & Logistics",
      desc: "Seamless delivery from the factory to your warehouse. We coordinate with freight forwarders, handle customs documentation, and ensure you get the best shipping rates.",
      features: ["Freight Forwarding (Ocean/Air)", "Customs Clearance", "Consolidation Services", "Amazon FBA Prep & Ship"],
      imgId: "srv-page-ship-64d"
    }
  ]

  return (
    <div ref={containerRef} className="py-12 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 id="page-title" className="text-4xl font-extrabold text-slate-900 mb-4">Our Sourcing Services</h1>
          <p id="page-subtitle" className="text-xl text-slate-600">
            Comprehensive solutions to streamline your Chinese supply chain, from finding the right supplier to final delivery.
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {services.map((srv, index) => (
            <div key={srv.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200">
                <img
                  data-strk-img-id={srv.imgId}
                  data-strk-img={`[desc-${srv.id}] [title-${srv.id}] [page-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={srv.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h2 id={`title-${srv.id}`} className="text-3xl font-bold text-slate-900 mb-4">{srv.title}</h2>
                <p id={`desc-${srv.id}`} className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {srv.desc}
                </p>
                <ul className="space-y-3">
                  {srv.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
