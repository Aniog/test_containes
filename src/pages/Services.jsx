import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  Search,
  Factory,
  ClipboardCheck,
  Ship,
  Truck,
  Package,
  Shield,
  FileCheck,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const serviceDetails = [
  {
    icon: Search,
    title: "Supplier Sourcing & Identification",
    description:
      "We research and identify qualified suppliers that match your product specifications, budget, and quality requirements. Our network spans thousands of verified factories across China's major manufacturing hubs.",
    features: [
      "Custom supplier shortlist based on your criteria",
      "Capability assessment and background checks",
      "Price benchmarking and negotiation support",
      "Multi-supplier comparison reports",
    ],
  },
  {
    icon: Factory,
    title: "Factory Verification & Audits",
    description:
      "Our experienced auditors conduct on-site factory visits to verify legitimacy, production capacity, quality management systems, and working conditions before you commit to an order.",
    features: [
      "Business license and certification verification",
      "Production capacity assessment",
      "Equipment and facility inspection",
      "Social compliance audit",
      "Detailed report with photos and video",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control & Inspection",
    description:
      "Independent quality inspections at every critical stage of production. We catch issues early so you receive products that meet your specifications.",
    features: [
      "Pre-production inspection (raw materials check)",
      "During-production inspection (DUPRO)",
      "Pre-shipment inspection (PSI)",
      "Container loading supervision",
      "Detailed inspection reports with photos",
    ],
  },
  {
    icon: Ship,
    title: "Production Monitoring",
    description:
      "Regular updates on production progress, potential delays, and quality issues. We keep your orders on track and communicate proactively.",
    features: [
      "Weekly production progress reports",
      "Real-time issue identification and resolution",
      "Photo and video documentation",
      "Timeline management and contingency planning",
    ],
  },
  {
    icon: Package,
    title: "Product Sampling & Development",
    description:
      "Coordinate samples between you and suppliers, manage feedback loops, and ensure samples meet your requirements before mass production.",
    features: [
      "Sample request coordination",
      "Feedback relay and revision management",
      "Sample evaluation reports",
      "Pre-production sample approval",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Shipping Coordination",
    description:
      "End-to-end shipping management including freight booking, consolidation, customs clearance documentation, and door-to-door delivery.",
    features: [
      "Sea, air, and express freight options",
      "Cargo consolidation and LCL management",
      "Customs documentation and clearance",
      "Warehousing and inventory management",
      "Door-to-door delivery coordination",
    ],
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      {/* Page Header */}
      <section className="bg-primary text-white py-20 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Comprehensive sourcing support covering every stage of the supply chain.
              We tailor our services to your specific product and market requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-bg">
        <div className="section-container">
          <div className="space-y-16">
            {serviceDetails.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-start`}
              >
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
                  <p className="text-txt-secondary mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-txt-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 rounded-lg overflow-hidden bg-gray-200 h-64 lg:h-auto min-h-[250px]">
                  <div
                    className="w-full h-full bg-primary-dark/10"
                    data-strk-img-id={`service-img-${i}-a1b2c3`}
                    data-strk-img={`[service-img-title-${i}]`}
                    data-strk-img-ratio={i % 2 === 0 ? "4x3" : "16x9"}
                    data-strk-img-width="600"
                  />
                  <span id={`service-img-title-${i}`} className="hidden">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Service Package?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Every sourcing project is different. Tell us what you need and we'll create
            a service package tailored to your specific requirements.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}