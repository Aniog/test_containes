import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ShieldCheck, CheckCircle2, Truck, FileText, BarChart3, Users, Factory, Clock } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const services = [
    {
      title: "Product Sourcing",
      icon: Search,
      desc: "Our sourcing experts find the right factories matching your specifications, quality requirements, and target price. We provide you with a comprehensive report including top recommendations.",
      items: ["Supplier Identification", "Price Negotiation", "Sample Coordination", "Prototype Development"],
      imgId: "service-sourcing"
    },
    {
      title: "Factory Audits",
      icon: ShieldCheck,
      desc: "Verify who you are doing business with. We conduct on-site factory audits to check manufacturing capabilities, quality systems, social compliance, and legal status.",
      items: ["Manufacturing Capacity", "Quality Control Process", "Certifications Check", "Social Compliance"],
      imgId: "service-audit"
    },
    {
      title: "Quality Control",
      icon: CheckCircle2,
      desc: "Ensure your products are made correctly before they leave China. We provide detailed inspection reports within 24 hours of the on-site visit.",
      items: ["Pre-Production Inspection", "During Production Inspection", "Final Pre-shipment Inspection", "Container Loading Check"],
      imgId: "service-qc"
    },
    {
      title: "Order Tracking",
      icon: Clock,
      desc: "Stay updated on your production status. We follow up with the factory regularly to ensure deadlines are met and any issues are addressed immediately.",
      items: ["Production Timeline Progress", "Delays Risk Management", "Communication Bridge", "Milestone Reporting"],
      imgId: "service-tracking"
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Sourcing Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Providing comprehensive supply chain solutions to manage your production in China with ease.</p>
        </div>
      </section>

      {/* Services List */}
      <div className="py-24 space-y-24">
        {services.map((service, idx) => (
          <section key={idx} className="container mx-auto px-4">
            <div className={cn(
              "flex flex-col lg:items-center gap-16",
              idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            )}>
              <div className="flex-1 space-y-6">
                <div className="bg-blue-600 text-white w-14 h-14 rounded-xl flex items-center justify-center">
                  <service.icon size={28} />
                </div>
                <h2 id={`service-title-${idx}`} className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{service.desc}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 size={18} className="text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6">
                  <Link to="/contact" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2">
                    Inquire about this service <br className="md:hidden" />
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
              
              <div className="flex-1">
                <img 
                  data-strk-img-id={service.imgId}
                  data-strk-img={`[service-title-${idx}] china factory services`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  className="rounded-2xl shadow-xl border border-slate-100"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  alt={service.title}
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Shipping Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                data-strk-img-id="shipping-visual"
                data-strk-img="global shipping logistics container ship"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="rounded-2xl shadow-xl"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Shipping Logistics"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Shipping & Consolidation</h2>
              <p className="text-lg text-slate-600">We don't just find the products; we make sure they reach your warehouse efficiently and cost-effectively.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <Truck className="text-blue-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Ocean & Air Freight</h4>
                  <p className="text-sm text-slate-500">Managing both LCL and FCL shipments via reliable carriers.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <FileText className="text-blue-600 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Customs Paperwork</h4>
                  <p className="text-sm text-slate-500">Handling export licenses and necessary documentation.</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
                  Get a Shipping Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
