import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import SectionHeading from "@/components/SectionHeading"
import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Boxes,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const SERVICES = [
  {
    id: "sourcing",
    icon: Search,
    title: "Supplier Sourcing",
    desc: "We identify factories that match your specs, target price, and certification needs. You receive a shortlist with comparable quotations and factory profiles, not a random list of trading companies.",
    bullets: [
      "Product brief and target costing",
      "Market research across industrial clusters",
      "Pre-screened supplier shortlist",
      "Side-by-side quotation comparison",
    ],
  },
  {
    id: "verification",
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "We visit the factory in person to verify business licenses, production capacity, equipment, certifications, and quality systems. You receive a written audit report.",
    bullets: [
      "Business license and scope check",
      "On-site capacity assessment",
      "Equipment and workforce review",
      "Quality system and documentation audit",
    ],
  },
  {
    id: "qc",
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Independent QC at every stage of production: pre-production samples, during-production inspection (DUPRO), and pre-shipment inspection (PSI). Reports include photos, measurements, and AQL findings.",
    bullets: [
      "Pre-production sample approval",
      "During-production inspections",
      "Pre-shipment inspection with AQL sampling",
      "Detailed photo and video reports",
    ],
  },
  {
    id: "production",
    icon: Factory,
    title: "Production Follow-up",
    desc: "We track production progress weekly, push lead times, and flag risks early. You stay informed without managing the factory yourself.",
    bullets: [
      "Weekly production updates",
      "Materials and component tracking",
      "Risk and delay escalation",
      "Direct liaison with factory PM",
    ],
  },
  {
    id: "shipping",
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "We coordinate sea, air, and rail freight with trusted forwarders, prepare export documentation, and offer door-to-door delivery options.",
    bullets: [
      "FCL, LCL, air, and rail bookings",
      "Customs paperwork and certificates",
      "Door-to-door and DDP options",
      "Insurance coordination",
    ],
  },
  {
    id: "consolidation",
    icon: Boxes,
    title: "Consolidation & Packaging",
    desc: "Multi-supplier consolidation in our partner warehouses, custom packaging, labeling, and Amazon FBA prep.",
    bullets: [
      "Warehouse consolidation",
      "Custom packaging and inserts",
      "Barcoding and FBA labeling",
      "Pallet and carton optimization",
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest font-semibold text-gold mb-3">Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Sourcing services built for serious B2B buyers
          </h1>
          <p className="mt-5 text-lg text-slate-200 max-w-3xl">
            Choose a single service or run the full sourcing process with us. Every
            service is delivered with written reports and clear deliverables.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {SERVICES.map((s, idx) => (
            <div
              key={s.id}
              className={`grid gap-10 lg:grid-cols-2 items-center ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="aspect-[3/2] bg-slate-100 rounded-xl overflow-hidden border border-border-soft">
                  <img
                    alt={s.title}
                    data-strk-img-id={`svc-${s.id}-img-2c1a`}
                    data-strk-img={`[svc-${s.id}-desc] [svc-${s.id}-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-bg-soft text-blue-action mb-4">
                  <s.icon className="w-6 h-6" />
                </div>
                <h2 id={`svc-${s.id}-title`} className="text-2xl md:text-3xl font-semibold text-navy">
                  {s.title}
                </h2>
                <p id={`svc-${s.id}-desc`} className="mt-3 text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-action mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Not sure which service you need?
          </h2>
          <p className="mt-4 text-slate-200">
            Tell us your project. We will recommend the right combination of services for your stage.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gold hover:bg-gold-deep text-navy px-7 py-3.5 rounded-md font-semibold"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
