import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, ClipboardList, Target, HardHat, PackageSearch, Plane } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full pb-20">
      <div className="bg-gray-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Sourcing Services</h1>
          <p id="page-desc" className="text-xl text-gray-600">
            Comprehensive supply chain management from finding the right manufacturer to delivering the goods to your warehouse.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {servicesData.map((service, index) => (
          <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-full lg:w-1/2">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={service.title}
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                data-strk-img-id={`service-detail-img-${index}`}
                data-strk-img={`[service-title-${index}] [page-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  {service.icon}
                </div>
                <h2 id={`service-title-${index}`} className="text-3xl font-bold text-gray-900">{service.title}</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-green-500 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 mt-24">
        <div className="bg-blue-600 rounded-2xl p-10 md:p-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. Tell us about your business goals, and we'll recommend the most cost-effective sourcing strategy.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md text-lg font-bold bg-white text-blue-600 hover:bg-gray-50 h-14 px-10 shadow-lg transition-all"
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </div>
  )
}

const servicesData = [
  {
    title: "Supplier Discovery & Sourcing",
    description: "We don't just search Alibaba. We leverage our domestic network in China to find direct manufacturers, cutting out trading company markups and finding suppliers capable of meeting your exact requirements.",
    icon: <Target className="w-8 h-8" />,
    features: [
      "Access to off-market factory networks",
      "Supplier shortlisting based on capability",
      "Initial price negotiation and RFQ",
      "Detailed supplier comparison reports"
    ]
  },
  {
    title: "Factory Audits & Verification",
    description: "Never send money blindly. We physically visit factories to verify their existence, assess their production capacity, check their certifications, and ensure they meet ethical labor standards.",
    icon: <ClipboardList className="w-8 h-8" />,
    features: [
      "Business license and ISO certification checks",
      "On-site facility and equipment evaluation",
      "Social compliance and ethical audits",
      "Quality Management System (QMS) review"
    ]
  },
  {
    title: "Product Development & Prototyping",
    description: "Turning an idea into a physical product requires clear communication. We work closely with engineers and mold makers to refine your prototype until it's ready for mass production.",
    icon: <HardHat className="w-8 h-8" />,
    features: [
      "OEM/ODM product development",
      "Mold creation and tooling management",
      "Sample consolidation and local testing",
      "Packaging design coordination"
    ]
  },
  {
    title: "Comprehensive Quality Control (QC)",
    description: "Quality fade is the biggest risk in China sourcing. Our inspectors follow strict AQL standards at every stage of production to ensure defect rates remain acceptable.",
    icon: <PackageSearch className="w-8 h-8" />,
    features: [
      "Pre-Production Inspection (PPI)",
      "During Production Inspection (DPI/DUPRO)",
      "Pre-Shipment Inspection (PSI)",
      "Container Loading Supervision (CLS)"
    ]
  },
  {
    title: "Logistics & Shipping Management",
    description: "We navigate the complexities of export customs, freight forwarding, and import duties to deliver your goods from the factory floor straight to your warehouse via Sea, Air, or Rail.",
    icon: <Plane className="w-8 h-8" />,
    features: [
      "FCL (Full Container) and LCL shipping",
      "Air freight and express courier services",
      "Customs clearance and documentation",
      "Amazon FBA prep and direct shipping"
    ]
  }
]

export default Services
