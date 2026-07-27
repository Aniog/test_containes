import { Link } from "react-router-dom"
import {
  Search,
  ShieldCheck,
  FlaskConical,
  Handshake,
  ClipboardCheck,
  Factory,
  Ship,
  Tag,
  ArrowRight,
} from "lucide-react"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

const services = [
  {
    icon: Search,
    title: "Supplier Sourcing",
    desc: "A shortlist of 3-5 vetted Chinese factories, matched to your product, MOQ, and target price.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Verification",
    desc: "On-site audits to confirm the factory is real, capable, and compliant with your market's requirements.",
  },
  {
    icon: FlaskConical,
    title: "Sample Coordination",
    desc: "We brief the factory, track sample production, and consolidate international sample shipping.",
  },
  {
    icon: Handshake,
    title: "Price Negotiation",
    desc: "Local price benchmarking and direct Mandarin negotiation for fair, defensible pricing.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    desc: "Pre-shipment inspections against your AQL, with photo and video evidence in your inbox within 24 hours.",
  },
  {
    icon: Factory,
    title: "Production Follow-Up",
    desc: "Weekly photo and status updates from the factory floor, with early escalation when timelines slip.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    desc: "Sea, air, rail, and express — booked, documented, and tracked from the factory to your door.",
  },
  {
    icon: Tag,
    title: "OEM / Private Label",
    desc: "Custom packaging, branding, and product modifications handled end-to-end with the factory.",
  },
]

export default function ServicesOverview() {
  return (
    <Section background="white" id="services">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
          Services
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-600 tracking-tight">
          One partner for the full China sourcing chain
        </h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Whether you need help finding the right factory or managing the
          entire journey from brief to delivered goods, our services are
          designed to slot into your workflow.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.title}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-card hover:shadow-cardHover hover:border-navy-200 transition-all"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-navy-50 text-navy-600 group-hover:bg-navy-600 group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy-600">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <Button to="/services" variant="navy" size="md">
          See all services
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Link
          to="/contact"
          className="text-sm font-medium text-slate-600 hover:text-navy-600"
        >
          Or request a tailored scope →
        </Link>
      </div>
    </Section>
  )
}
