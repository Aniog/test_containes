import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  Search,
  ClipboardCheck,
  Eye,
  Boxes,
  Ship,
  Award,
  ArrowRight,
  CheckCircle2,
  FileText,
  MessageSquare,
  Wrench,
  PackageCheck,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero.jsx"
import CTASection from "@/components/sections/CTASection.jsx"
import InquiryForm from "@/components/sections/InquiryForm.jsx"

const SERVICES = [
  {
    id: "supplier-sourcing",
    icon: Search,
    title: "Supplier sourcing & shortlist",
    headline:
      "We map the right factories for your product, region and quantity, and pre-screen them on-site before you commit.",
    description:
      "Most marketplaces show you the same 10 factories for every product. We go further by combining market mapping, factory research, and on-the-ground verification to surface suppliers you would not find on your own.",
    deliverables: [
      "Industry-specific shortlist of 3-5 pre-screened factories",
      "License, export history, capacity and equipment review",
      "Side-by-side price, MOQ and lead-time comparison",
      "Sample coordination and price negotiation on your behalf",
    ],
    image: {
      id: "services-sourcing-3a7c9f",
      query: "[services-sourcing-title] China sourcing agent supplier shortlist factory floor",
      ratio: "4x3",
      width: 600,
    },
  },
  {
    id: "factory-audit",
    icon: ClipboardCheck,
    title: "Factory audit & verification",
    headline:
      "Independent on-site or remote audits against a clear checklist, with a written report and risk grade.",
    description:
      "Before you wire a 30% deposit, we visit the factory (or walk it on a live video call) and check the things that matter: business license, production capacity, workforce, equipment, and ESG basics.",
    deliverables: [
      "AQL-based on-site audit or live video walk-through",
      "License, equipment, workforce and ESG checks",
      "Written report with photos and a low / medium / high risk grade",
      "Clear go / no-go recommendation for your team",
    ],
    image: {
      id: "services-audit-5e2d1b",
      query: "[services-audit-title] China sourcing agent factory audit checklist inspector",
      ratio: "4x3",
      width: 600,
    },
  },
  {
    id: "quality-control",
    icon: Eye,
    title: "Quality control & inspections",
    headline:
      "Inline, pre-shipment and during-production inspections carried out by trained QC engineers.",
    description:
      "Our QC team is full-time, English-speaking, and trained to AQL standards. You get photo and video evidence within 24 hours of every inspection, plus concrete corrective actions.",
    deliverables: [
      "DPI, DUPRO and PSI inspections to AQL 1.5 / 2.5 / 4.0",
      "Lab testing coordination (CE, FDA, REACH, CPSR, etc.)",
      "24-hour inspection reports with corrective actions",
      "Defect trend tracking across orders",
    ],
    image: {
      id: "services-qc-8d4a6e",
      query: "[services-qc-title] China quality control inspector measuring product",
      ratio: "4x3",
      width: 600,
    },
  },
  {
    id: "production-follow-up",
    icon: Boxes,
    title: "Production follow-up",
    headline:
      "Weekly updates, milestone photos and escalation when timelines slip, so production stays on track.",
    description:
      "We treat your order like our own. You get a single point of contact who runs weekly production calls, walks the line on key milestones, and escalates with the factory when needed.",
    deliverables: [
      "Weekly production status reports with photos",
      "Milestone photos and short video clips",
      "Escalation and rework coordination",
      "Schedule risk alerts before things slip",
    ],
    image: {
      id: "services-production-2b9f1c",
      query: "[services-production-title] China sourcing agent production line follow up",
      ratio: "4x3",
      width: 600,
    },
  },
  {
    id: "shipping",
    icon: Ship,
    title: "Shipping & logistics coordination",
    headline:
      "We coordinate freight forwarders, customs paperwork and Incoterms so your goods arrive as expected.",
    description:
      "We work with vetted forwarders in Shenzhen, Ningbo, Shanghai and Qingdao. You get clear options for FOB, CIF or DDP, with realistic transit times and an itemized cost breakdown.",
    deliverables: [
      "Sea, air and rail freight options with cost comparison",
      "Customs documents, HS codes, certificates of origin",
      "Door-to-door, FOB, CIF or DDP supported",
      "Real-time shipment tracking and exception alerts",
    ],
    image: {
      id: "services-shipping-6f8b2d",
      query: "[services-shipping-title] China freight forwarder shipping container port",
      ratio: "4x3",
      width: 600,
    },
  },
  {
    id: "full-package",
    icon: Award,
    title: "Full-package sourcing",
    headline:
      "End-to-end project ownership: from the first sketch or spec, to sample approval, production, QC and shipping.",
    description:
      "Designed for new product launches, Amazon / Shopify brands, and buyers who do not have a China team. We become your operations partner on the ground.",
    deliverables: [
      "Dedicated project manager per order",
      "Single point of contact across all stages",
      "Material and packaging sourcing support",
      "Monthly performance reviews with your team",
    ],
    image: {
      id: "services-fullpackage-1c4e7a",
      query: "[services-full-title] China full package sourcing agent team meeting",
      ratio: "4x3",
      width: 600,
    },
  },
]

const ADD_ONS = [
  {
    icon: Wrench,
    title: "Custom tooling & sampling",
    detail:
      "3D design review, mold sourcing, and engineering support for products that need custom tooling.",
  },
  {
    icon: PackageCheck,
    title: "Packaging & private label",
    detail:
      "Retail-ready packaging, barcodes, and private label setup for Amazon FBA, Shopify and retail channels.",
  },
  {
    icon: FileText,
    title: "Compliance documentation",
    detail:
      "CE, FCC, FDA, CPSR, REACH, RoHS and other certifications coordinated with accredited labs.",
  },
  {
    icon: MessageSquare,
    title: "Bilingual account support",
    detail:
      "Native English, Mandarin and Spanish support so nothing gets lost in translation with the factory.",
  },
]

export default function Services() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])
  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Our services"
        title="Sourcing, audits, QC, production and shipping — under one roof"
        subtitle="Each service is delivered by a dedicated manager in Shenzhen, with English reports, transparent pricing and a clear go / no-go at every step. Pick what you need, or hand us the whole project."
        bullets={["Fixed-scope pricing", "AQL-standard inspections", "Reports within 24h"]}
      />

      <section className="section bg-white">
        <div className="container-wide space-y-20">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="eyebrow">Service</span>
                <h2 className="h2 mt-3">
                  <span id={`services-${s.id}-title`} className="sr-only">
                    {s.title}
                  </span>
                  {s.title}
                </h2>
                <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
                  {s.headline}
                </p>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                  {s.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary mt-6">
                  Get a quote for {s.title.toLowerCase()}{" "}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <img
                  alt={s.title}
                  data-strk-img-id={s.image.id}
                  data-strk-img={`[services-${s.id}-title] [services-${s.id}-title] China sourcing agent`}
                  data-strk-img-ratio={s.image.ratio}
                  data-strk-img-width={s.image.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Add-on services</p>
            <h2 className="h2 mt-3">A few more things we are good at</h2>
            <p className="lead mt-4">
              Most of our clients start with sourcing and QC, and grow into a wider
              program. These add-ons are designed to plug into the same process.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADD_ONS.map((a) => (
              <div key={a.title} className="card flex flex-col">
                <span className="icon-bubble-accent">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Pricing</p>
              <h2 className="h2 mt-3">Simple, fixed-scope fees</h2>
              <p className="lead mt-4">
                We charge a small service fee for each step. Factory payments go directly
                from you to the factory, so we never hold your money and you always own
                the relationship.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-base font-semibold text-slate-900">
                  Indicative service fees
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {[
                    ["Supplier sourcing & shortlist", "From USD 300 per project"],
                    ["On-site factory audit", "From USD 350 per factory"],
                    ["Pre-shipment inspection (PSI)", "From USD 220 per man-day"],
                    ["Production follow-up", "From USD 250 per week"],
                    ["Full-package project management", "From 3% of order value"],
                  ].map(([label, price]) => (
                    <li
                      key={label}
                      className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-slate-700">{label}</span>
                      <span className="font-semibold text-slate-900">{price}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  Exact fees depend on product complexity, factory location, and order
                  size. You will receive a written quote before we start.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <InquiryForm sourcePage="services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
