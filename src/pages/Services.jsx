import { useEffect, useRef } from "react"
import { Search, Building2, ClipboardCheck, LineChart, Ship, FileText, Wallet, Headphones } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import SectionHeader from "@/components/ui/SectionHeader"
import { Card } from "@/components/ui/Card"
import CTABanner from "@/components/CTABanner"
import strkImgConfig from "@/strk-img-config.json"

const services = [
  {
    icon: Search,
    title: "Supplier Discovery",
    description: "We identify manufacturers that match your technical specs, certifications, capacity, and target price. You receive a shortlist with factory profiles, MOQs, and sample lead times.",
    deliverables: ["3–5 qualified suppliers", "Factory profile report", "Initial quote comparison"],
  },
  {
    icon: Building2,
    title: "Factory Verification",
    description: "Our team visits or audits factories to confirm licenses, production lines, quality systems, and social compliance before you place an order.",
    deliverables: ["On-site audit report", "Photos and video", "Risk assessment"],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "We inspect goods at key stages — pre-production, during production, pre-shipment, and container loading — with detailed photo reports and pass/fail recommendations.",
    deliverables: ["AQL-based inspections", "Photo/video evidence", "Corrective action tracking"],
  },
  {
    icon: LineChart,
    title: "Production Monitoring",
    description: "Weekly reports, milestone tracking, and issue escalation keep your order on schedule. We flag delays, material changes, and capacity risks early.",
    deliverables: ["Weekly status reports", "Milestone tracking", "Problem escalation"],
  },
  {
    icon: Ship,
    title: "Shipping Coordination",
    description: "From booking freight to preparing export documents and customs paperwork, we coordinate the final leg so your cargo moves smoothly to destination.",
    deliverables: ["Freight booking support", "Export documentation", "Loading supervision"],
  },
]

const additional = [
  { icon: FileText, title: "Contract & PO Review", description: "We review terms, payment schedules, and penalties to protect your interests." },
  { icon: Wallet, title: "Payment Handling", description: "Secure payment routing to verified factory accounts with milestone-based releases." },
  { icon: Headphones, title: "Ongoing Support", description: "Bilingual support before, during, and after production for any questions or disputes." },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 md:py-24">
          <div className="container-site">
            <SectionHeader
              label="Our Services"
              title="Sourcing support at every stage"
              description="Choose the services you need, or let us manage the full process from supplier search to delivery."
            />
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="flex flex-col">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">{service.title}</h3>
                  <p className="mt-3 text-slate-600">{service.description}</p>
                  <div className="mt-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Typical deliverables</span>
                    <ul className="mt-2 space-y-1 text-slate-700">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <SectionHeader
                  label="Full-Service Sourcing"
                  title="Let us manage the entire supply chain"
                  description="For clients who want a single point of contact, our end-to-end package covers discovery, verification, production, QC, and shipping."
                  centered={false}
                  className="mb-8"
                />
                <img
                  data-strk-img-id="services-supply-chain"
                  data-strk-img="[section-title] [section-description]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="End-to-end supply chain management"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {additional.map((item) => (
                  <Card key={item.title} className="flex flex-col">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-blue-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTABanner
          title="Not sure which service you need?"
          description="Tell us about your product and we will recommend a sourcing plan that fits your goals."
        />
    </div>
  )
}
