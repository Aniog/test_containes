import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import {
  Search, Factory, ClipboardCheck, Zap, Truck, Package,
  CheckCircle, ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SectionHeader } from "@/components/ui/SectionHeader"

const services = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    subtitle: "Find the right factory for your product",
    desc: "We search our verified supplier network and identify factories that match your product specifications, quality requirements, MOQ, and target price. Every supplier we recommend has been pre-screened for legitimacy and capability.",
    features: [
      "Product specification analysis",
      "Supplier database search across 20+ industries",
      "Initial supplier screening and shortlisting",
      "Supplier profile reports with key metrics",
      "3–5 qualified suppliers delivered within 5 business days",
    ],
    imgId: "svc-sourcing-img-a1b2c3",
    titleId: "svc-sourcing-title",
    descId: "svc-sourcing-desc",
  },
  {
    id: "factory-verification",
    icon: Factory,
    title: "Factory Verification & Audit",
    subtitle: "Know exactly who you're buying from",
    desc: "Before you place an order, we visit the factory in person to verify their production capacity, quality management systems, certifications, and working conditions. Our audit reports give you the information you need to make a confident decision.",
    features: [
      "On-site factory visit by our local team",
      "Production capacity and equipment assessment",
      "Quality management system review",
      "Certification and compliance verification",
      "Detailed audit report with photos",
    ],
    imgId: "svc-audit-img-d4e5f6",
    titleId: "svc-audit-title",
    descId: "svc-audit-desc",
  },
  {
    id: "quality-inspection",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    subtitle: "Catch defects before they reach your warehouse",
    desc: "Our inspectors conduct thorough checks at key production milestones — during production, pre-shipment, and at container loading. We follow internationally recognized inspection standards and provide detailed reports with photos and measurements.",
    features: [
      "During-production inspection (DUPRO)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision (CLS)",
      "AQL sampling based on international standards",
      "Detailed inspection report within 24 hours",
    ],
    imgId: "svc-qc-img-g7h8i9",
    titleId: "svc-qc-title",
    descId: "svc-qc-desc",
  },
  {
    id: "production-followup",
    icon: Zap,
    title: "Production Follow-up",
    subtitle: "Stay informed throughout manufacturing",
    desc: "Once production begins, we act as your local representative. We visit the factory regularly, track progress against your timeline, and communicate any issues immediately so they can be resolved before they become costly problems.",
    features: [
      "Regular factory visits during production",
      "Weekly progress reports with photos",
      "Early issue identification and resolution",
      "Timeline monitoring and delay prevention",
      "Direct communication with factory management",
    ],
    imgId: "svc-followup-img-j1k2l3",
    titleId: "svc-followup-title",
    descId: "svc-followup-desc",
  },
  {
    id: "shipping",
    icon: Truck,
    title: "Shipping Coordination",
    subtitle: "From factory gate to your door",
    desc: "We work with trusted freight forwarders to arrange the most cost-effective and reliable shipping solution for your cargo. We handle all export documentation, customs coordination, and shipment tracking.",
    features: [
      "Sea freight (FCL and LCL), air freight, and express options",
      "Export documentation preparation",
      "Customs clearance coordination",
      "Shipment tracking and status updates",
      "Consolidation services for multiple suppliers",
    ],
    imgId: "svc-shipping-img-m4n5o6",
    titleId: "svc-shipping-title",
    descId: "svc-shipping-desc",
  },
  {
    id: "private-label",
    icon: Package,
    title: "Private Label & OEM",
    subtitle: "Build your own product line from China",
    desc: "We help brands develop and manufacture their own products under their label. From initial concept and design to factory selection, sample development, and branded packaging, we manage the entire OEM process.",
    features: [
      "Product concept and specification development",
      "OEM factory identification and vetting",
      "Sample development and revision management",
      "Branded packaging design and production",
      "Full production management and QC",
    ],
    imgId: "svc-oem-img-p7q8r9",
    titleId: "svc-oem-title",
    descId: "svc-oem-desc",
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
      {/* Page Header */}
      <section className="bg-[#1A1F2E] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Full-Service China Sourcing
            </h1>
            <p className="text-lg text-[#9AAABB] leading-relaxed">
              We offer a complete range of sourcing services designed to reduce risk, save time, and give you confidence at every stage of the supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 bg-[#EEF2F7] rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#1A4B8C]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1A4B8C] mb-2">{service.subtitle}</p>
                  <h2 id={service.titleId} className="text-3xl font-bold text-[#1A1F2E] mb-4">{service.title}</h2>
                  <p id={service.descId} className="text-[#3D4A5C] leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[#3D4A5C] text-sm">
                        <CheckCircle className="w-4 h-4 text-[#27AE60] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="primary" size="md">
                      Request This Service <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[${service.descId}] [${service.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A4B8C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-[#93C5FD] text-lg mb-8">
            Tell us about your project and we'll recommend the right combination of services for your situation.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg">Get a Free Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
