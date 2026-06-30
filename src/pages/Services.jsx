import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Search, Building2, ClipboardCheck, Package, BarChart3, Ship, Shield } from "lucide-react"
import Button from "@/components/ui/button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const servicesDetail = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify and qualify manufacturers that match your product specifications, quality requirements, and budget. Our team leverages a network of thousands of pre-vetted suppliers across China's major industrial regions including Guangdong, Zhejiang, Jiangsu, and Fujian.",
    points: [
      "Custom supplier search based on your product requirements",
      "Database of pre-vetted manufacturers across industries",
      "Capability assessment and production capacity evaluation",
      "Competitive pricing comparison from multiple suppliers",
      "Confidentiality agreements and IP protection support"
    ]
  },
  {
    icon: Building2,
    title: "Factory Verification & Audits",
    desc: "Before you commit to any supplier, we conduct thorough on-site audits to verify their capabilities, certifications, and working conditions. Our detailed audit reports give you complete visibility into potential partners.",
    points: [
      "Physical on-site inspection of facilities and equipment",
      "Business license and certification verification",
      "Production capacity and lead time assessment",
      "Quality management system evaluation (ISO, etc.)",
      "Social compliance and working conditions review",
      "Comprehensive audit report with photos and recommendations"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Our QC inspectors conduct inspections at every critical stage of production, using international AQL (Acceptable Quality Limit) standards. Detailed reports with photos ensure you know exactly what's being shipped.",
    points: [
      "Raw material inspection before production starts",
      "During-production (DUPRO) inspection",
      "Pre-shipment inspection (PSI) with AQL sampling",
      "Container loading supervision",
      "Detailed inspection reports with photographs",
      "Custom inspection checklists for your products"
    ]
  },
  {
    icon: Package,
    title: "Product Sampling & Development",
    desc: "We coordinate the entire sampling process, from prototype development to pre-production samples, ensuring your product meets specifications before mass production begins.",
    points: [
      "Prototype development and revisions coordination",
      "Pre-production sample management",
      "Sample testing and evaluation reports",
      "Packaging and labeling sample approval",
      "Production sample sealing for quality reference"
    ]
  },
  {
    icon: BarChart3,
    title: "Production Monitoring",
    desc: "Stay informed throughout the manufacturing process with regular progress updates, milestone verification, and real-time issue reporting from our on-the-ground team.",
    points: [
      "Regular production progress reporting",
      "Key milestone verification and sign-off",
      "Real-time issue identification and resolution",
      "Production timeline management",
      "Photo and video updates from factory floor"
    ]
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "We handle the entire logistics process from factory to your destination, including freight consolidation, documentation, customs clearance, and delivery tracking.",
    points: [
      "Freight forwarding (sea, air, rail, express)",
      "Order consolidation and LCL shipping",
      "Export documentation and customs clearance",
      "Import compliance guidance",
      "Cargo insurance arrangements",
      "End-to-end shipment tracking"
    ]
  }
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-4">Our Services</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Comprehensive China Sourcing Services
            </h1>
            <p className="text-lg text-surface-300 leading-relaxed">
              From finding the right supplier to delivering quality products at your doorstep, we provide end-to-end sourcing support tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-20">
            {servicesDetail.map((svc, i) => (
              <div key={svc.title} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-start`}>
                <div className="lg:w-1/2">
                  <div
                    data-strk-bg-id={`service-img-${i}`}
                    data-strk-bg={`[service-title-${i}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="700"
                    className="w-full h-64 md:h-80 rounded-xl bg-brand-200"
                  />
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <svc.icon className="w-8 h-8 text-brand-500" />
                    <h2 id={`service-title-${i}`} className="text-2xl md:text-3xl font-bold text-brand-900">{svc.title}</h2>
                  </div>
                  <p className="text-surface-600 mb-6 leading-relaxed">{svc.desc}</p>
                  <ul className="space-y-3">
                    {svc.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-surface-600">
                        <Shield className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-50 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Need a Specific Service?</h2>
          <p className="text-lg text-surface-600 mb-8">
            Every project is unique. Contact us to discuss your specific sourcing requirements.
          </p>
          <Link to="/contact">
            <Button variant="accent" size="lg">
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}