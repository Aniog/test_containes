import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const STEPS = [
  {
    step: "01",
    title: "Send your requirements",
    desc: "Share product specs, target unit price, target quantity, certifications, packaging needs, and timeline. A senior specialist reviews your inquiry and replies within one business day.",
    deliverables: ["Acknowledgement within 24h", "Initial scope and questions", "Service recommendation"],
  },
  {
    step: "02",
    title: "Supplier shortlist & quotation",
    desc: "We screen our verified network and the broader market. You receive a shortlist with comparable factory profiles and quotations, so you can compare on price, MOQ, lead time, and certifications.",
    deliverables: ["3–5 shortlisted factories", "Comparable quotations", "Factory profile summaries"],
  },
  {
    step: "03",
    title: "Sample & factory verification",
    desc: "We arrange samples for evaluation and conduct an on-site audit of the chosen factory: production capacity, equipment, quality systems, and certifications. You see the factory before money moves.",
    deliverables: ["Physical samples", "Factory audit report", "Risk assessment"],
  },
  {
    step: "04",
    title: "Order placement & contract",
    desc: "We negotiate final terms, draft a clear contract or PI, and place the order on your behalf or in your name. Payment terms are agreed upfront so there are no surprises.",
    deliverables: ["Negotiated PI / contract", "Clear payment terms", "Production timeline"],
  },
  {
    step: "05",
    title: "Production follow-up",
    desc: "We track production progress weekly, monitor materials and key milestones, and resolve issues directly with the factory. You receive regular updates without managing the factory yourself.",
    deliverables: ["Weekly progress reports", "Issue logs", "Schedule adherence"],
  },
  {
    step: "06",
    title: "Quality inspection",
    desc: "An independent inspector visits the factory before shipment. We verify quantity, workmanship, function, packaging, and labeling using AQL sampling, and share a written report with photos.",
    deliverables: ["Pre-shipment QC report", "Defect classification", "Go / hold / reject decision"],
  },
  {
    step: "07",
    title: "Shipping & customs",
    desc: "We book the freight, coordinate with the forwarder, prepare export documents, and arrange consolidation if needed. You can choose FOB, CIF, or door-to-door / DDP.",
    deliverables: ["Freight booking", "Customs documents", "BL, CO, packing list"],
  },
  {
    step: "08",
    title: "Delivery & after-sales",
    desc: "We track the shipment until it arrives. If quality issues appear after delivery, we follow up directly with the factory until claims are resolved.",
    deliverables: ["Tracking updates", "Delivery confirmation", "After-sales support"],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest font-semibold text-gold mb-3">How It Works</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            From first inquiry to delivered cargo
          </h1>
          <p className="mt-5 text-lg text-slate-200 max-w-3xl">
            A clear, repeatable process. You always know what is happening, who
            is doing it, and what comes next.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ol className="relative border-l border-border-soft pl-8 space-y-10">
            {STEPS.map((s) => (
              <li key={s.step} className="relative">
                <span className="absolute -left-12 flex items-center justify-center w-9 h-9 rounded-md bg-navy text-white text-sm font-semibold">
                  {s.step}
                </span>
                <h2 className="text-xl md:text-2xl font-semibold text-navy">{s.title}</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.desc}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-action mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-bg-soft border-t border-border-soft">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy">
            Ready to start a sourcing project?
          </h2>
          <p className="mt-4 text-slate-600">
            Send your product requirements. We respond within one business day.
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
