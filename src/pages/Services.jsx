import {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Package,
  CheckCircle2,
} from "lucide-react"
import PageHero from "@/components/sections/PageHero"
import { Card } from "@/components/ui/Card"
import CtaBand from "@/components/sections/CtaBand"
import { SERVICES } from "@/lib/content"

const ICONS = {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Package,
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Sourcing services for every stage of your order"
        description="Whether you need a single factory verified or full end-to-end management, our services are modular and transparent. Use what you need."
        ctaLabel="Get a Free Sourcing Quote"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-8 px-4 md:px-6 lg:px-8">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.icon] || Search
            const reversed = idx % 2 === 1
            return (
              <Card key={service.id} className="overflow-hidden">
                <div
                  className={`grid gap-8 p-6 md:p-10 lg:grid-cols-2 lg:items-center ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h2 className="mt-5 text-2xl font-bold text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-body">
                      {service.summary}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {service.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-3 text-slate-body"
                        >
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-page p-8">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-muted">
                      What you receive
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-body">
                      {DELIVERABLES[service.id]?.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <CtaBand
        title="Not sure which services you need?"
        description="Tell us your product and goals. We will recommend the right combination of sourcing, verification, QC, and logistics for your situation."
        buttonText="Talk to a sourcing specialist"
      />
    </>
  )
}

const DELIVERABLES = {
  "supplier-sourcing": [
    "Shortlist of 2–4 qualified suppliers",
    "Compared quote sheet with price, MOQ, lead time",
    "Factory profile and capability summary",
  ],
  "factory-verification": [
    "Business license and registration confirmation",
    "On-site audit report with photos and video",
    "Capacity and quality system assessment",
  ],
  "quality-inspection": [
    "Detailed inspection report per AQL standard",
    "Defect classification with photos",
    "Clear pass / fail result before shipment",
  ],
  "production-follow-up": [
    "Weekly production status with on-site photos",
    "Schedule tracker with milestone dates",
    "Early-warning alerts on any delay risk",
  ],
  "shipping-logistics": [
    "Freight quote comparison (sea / air / express)",
    "Consolidation plan for multi-supplier orders",
    "Complete customs document set",
  ],
  "amazon-fba-prep": [
    "FNSKU labeling and barcode verification",
    "Poly-bagging and packaging per FBA rules",
    "Direct dispatch to Amazon fulfillment centers",
  ],
}
