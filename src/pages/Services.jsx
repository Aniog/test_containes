import React, { useEffect, useRef } from 'react'
import { Search, Shield, CheckCircle, Truck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const mainServices = [
    {
      title: "Product Sourcing & Procurement",
      desc: "We find the most reliable and cost-effective suppliers for your specific product requirements.",
      features: ["Supplier identification", "Price negotiation", "Sample consolidation", "Market research"],
      icon: <Search className="w-10 h-10 text-secondary" />,
      img: "China wholesale market sourcing products"
    },
    {
      title: "Supplier Verification & Audits",
      desc: "Don't get scammed. We perform thorough background checks and on-site factory audits.",
      features: ["Business license check", "Factory tour & video", "Production capacity audit", "Quality system evaluation"],
      icon: <Shield className="w-10 h-10 text-secondary" />,
      img: "Factory audit background check China"
    },
    {
      title: "Quality Control Inspections",
      desc: "Ensure your products meet your quality standards before they leave China.",
      features: ["Initial Production Check", "During Production Inspection", "Pre-Shipment Inspection", "Container Loading Supervision"],
      icon: <CheckCircle className="w-10 h-10 text-secondary" />,
      img: "Quality control inspection report China"
    },
    {
      title: "Customs & Logistics Management",
      desc: "We coordinate the entire shipping process from the factory to your warehouse.",
      features: ["Freight forwarding quotes", "Customs documentation", "Shipping coordination", "Delivery tracking"],
      icon: <Truck className="w-10 h-10 text-secondary" />,
      img: "Shipping container port logistics China"
    }
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Comprehensive end-to-end sourcing solutions designed to reduce your costs and eliminate risks when buying from China.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {mainServices.map((service, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-block p-4 bg-slate-50 rounded-2xl shadow-sm border border-slate-100">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-md font-bold transition-all">
                  Inquire about this service
                </Link>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                  <img 
                    alt={service.title} 
                    data-strk-img-id={`service-img-${index}`}
                    data-strk-img={service.img}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-primary">Transparent Service Fees</h2>
          <p className="text-lg text-slate-600">
            We believe in honest and transparent pricing. No hidden commissions or kickbacks from suppliers.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12 font-inter">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-xl text-primary">Commission Based</h3>
              <p className="text-2xl font-black text-secondary">3% - 7%</p>
              <p className="text-sm text-slate-500">Based on the total order value. Best for ongoing production management.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-xl text-primary">Project Based</h3>
              <p className="text-sm text-slate-500">Starting from</p>
              <p className="text-2xl font-black text-secondary">$299</p>
              <p className="text-sm text-slate-500">Fixed fee for one-off tasks like factory audits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
