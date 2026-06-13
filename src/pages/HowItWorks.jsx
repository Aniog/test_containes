import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  FileText,
  Search,
  Building2,
  ClipboardCheck,
  Ship,
  ArrowRight,
  ChevronRight,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Submit Your Requirements",
    description:
      "Start by filling out our sourcing brief. Tell us about your product, target price range, required quantities, quality standards, certifications needed, and any other specifications that matter to you.",
    details: [
      "Online form or email submission",
      "Phone or video call to clarify requirements",
      "Non-disclosure agreement (NDA) if needed",
      "We respond within 24 hours",
    ],
  },
  {
    step: "02",
    icon: Search,
    title: "Supplier Research & Shortlisting",
    description:
      "Our team researches our database and network to identify suppliers that match your criteria. We verify their credentials and prepare a shortlist of qualified candidates.",
    details: [
      "Database search across manufacturing categories",
      "Initial screening and background check",
      "Capability and capacity assessment",
      "3-5 qualified suppliers shortlisted",
    ],
  },
  {
    step: "03",
    icon: Building2,
    title: "Factory Verification & Sampling",
    description:
      "We conduct on-site factory audits for shortlisted suppliers, verify their facilities and certifications, then coordinate samples for your evaluation and approval.",
    details: [
      "On-site factory audit with detailed report",
      "Business license and certification verification",
      "Sample request and coordination",
      "Sample evaluation and feedback loop",
    ],
  },
  {
    step: "04",
    icon: ClipboardCheck,
    title: "Negotiation & Order Placement",
    description:
      "We help negotiate pricing, payment terms, and delivery schedules. Once both parties agree, we assist with contract review and order placement.",
    details: [
      "Price negotiation and benchmarking",
      "Payment terms discussion",
      "Contract review and finalization",
      "Order placement assistance",
    ],
  },
  {
    step: "05",
    icon: Ship,
    title: "Production Monitoring & QC",
    description:
      "Throughout production, we conduct regular inspections, monitor progress, and provide you with updates. We catch and resolve issues before they affect your shipment.",
    details: [
      "Raw material inspection",
      "During-production quality checks",
      "Pre-shipment inspection",
      "Weekly progress reports with photos",
    ],
  },
  {
    step: "06",
    icon: Ship,
    title: "Shipping & Delivery",
    description:
      "We coordinate logistics, handle export documentation, and ensure your products are shipped safely and on time to their destination.",
    details: [
      "Freight booking (sea, air, or express)",
      "Export customs clearance",
      "Cargo tracking and updates",
      "Door-to-door delivery option",
    ],
  },
]

export default function HowItWorks() {
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
              How It Works
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              A transparent, step-by-step sourcing process designed to minimize risk
              and deliver results. From initial briefing to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-bg">
        <div className="section-container max-w-4xl">
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="card-hover">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center sm:hidden">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="hidden sm:flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-2xl font-semibold text-primary">{step.title}</h2>
                    </div>
                    <h2 className="text-2xl font-semibold text-primary sm:hidden mb-2">{step.title}</h2>
                    <p className="text-txt-secondary mb-5">{step.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-txt-muted">
                          <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="bg-white py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Typical Timeline</h2>
            <p className="section-subtitle mx-auto mb-10">
              Every project is different, but here's a general timeline you can expect.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="card">
                <div className="text-3xl font-bold text-accent mb-1">1-2</div>
                <div className="text-sm text-txt-secondary">Weeks<br />Supplier Research</div>
              </div>
              <div className="card">
                <div className="text-3xl font-bold text-accent mb-1">2-4</div>
                <div className="text-sm text-txt-secondary">Weeks<br />Sampling Phase</div>
              </div>
              <div className="card">
                <div className="text-3xl font-bold text-accent mb-1">4-12</div>
                <div className="text-sm text-txt-secondary">Weeks<br />Production</div>
              </div>
              <div className="card">
                <div className="text-3xl font-bold text-accent mb-1">2-6</div>
                <div className="text-sm text-txt-secondary">Weeks<br />Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark text-white py-16">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Fill out a quick sourcing brief and we'll get back to you within 24 hours.
          </p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 inline-flex items-center gap-2">
            Start Your Sourcing Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}