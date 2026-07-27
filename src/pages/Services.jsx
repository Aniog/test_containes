import { Link } from "react-router-dom"
import {
  Search,
  Building2,
  ShieldCheck,
  ClipboardList,
  Truck,
  Package,
  Check,
  ArrowRight,
} from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Section, SectionHeader } from "@/components/ui/Section"
import { StrkImage } from "@/components/ui/StrkImage"
import { InquiryForm } from "@/components/shared/InquiryForm"
import { services } from "@/data/content"

const iconMap = {
  search: Search,
  building: Building2,
  shield: ShieldCheck,
  clipboard: ClipboardList,
  truck: Truck,
  package: Package,
}

const imgHints = {
  sourcing: "supplier meeting factory buyer handshake",
  verification: "factory floor audit inspection",
  inspection: "quality inspector checking product",
  production: "production line worker factory",
  shipping: "shipping container port logistics",
  packaging: "custom packaging box labeling",
}

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Sourcing, QC, production and shipping — under one roof"
        subtitle="Six services that cover the full buyer journey in China. Pick what you need, or hand the whole project to us."
      />

      {/* Service details */}
      <Section bg="white">
        <div className="space-y-20 md:space-y-24">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Search
            const reverse = i % 2 === 1
            return (
              <div
                key={s.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
                  <StrkImage
                    imgId={`svc-img-${s.id}`}
                    query={`[svc-${s.id}-title] [svc-${s.id}-desc] ${imgHints[s.id] || ""}`.trim()}
                    ratio="4x3"
                    width={900}
                    alt={s.title}
                    className="aspect-[4/3]"
                  />
                </div>
                <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-navy-900 bg-navy-50 rounded-md px-2.5 py-1.5">
                    <Icon className="w-4 h-4" />
                    Service {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2
                    id={`svc-${s.id}-title`}
                    className="mt-4 text-2xl md:text-3xl font-bold text-slate-900"
                  >
                    {s.title}
                  </h2>
                  <p
                    id={`svc-${s.id}-desc`}
                    className="mt-3 text-base text-slate-600 leading-relaxed"
                  >
                    {s.summary}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <Check className="w-4.5 h-4.5 text-accent-500 mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Engagement model */}
      <Section bg="slate">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="How we charge"
              title="A simple, transparent engagement model"
              subtitle="We work on a flat service fee, agreed in advance. We do not take commissions from suppliers — your price is your price."
              align="left"
              className="!max-w-none"
            />
            <p className="mt-6 text-sm text-slate-600 leading-relaxed">
              A typical engagement combines a project / sourcing management fee
              with optional per-check fees for factory audits, inspections and
              sample consolidation. For ongoing programs, we offer a monthly
              retainer option with discounted per-check rates.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-accent-600"
            >
              Request a fee schedule <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "One-off project",
                  desc: "Sourcing for a specific product, fixed fee based on scope.",
                },
                {
                  title: "Per-order support",
                  desc: "Service fee + per-check fees (audit, inspection, sample).",
                },
                {
                  title: "Ongoing retainer",
                  desc: "Monthly fee for continuous sourcing, QC and shipping.",
                },
              ].map((m) => (
                <div
                  key={m.title}
                  className="card p-6 bg-white"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 card p-6 bg-white">
              <h3 className="text-base font-semibold text-slate-900">
                What's always included
              </h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                {[
                  "Dedicated English-speaking coordinator",
                  "Quote and lead-time comparisons",
                  "Sample coordination and consolidated shipping",
                  "Weekly project status updates",
                  "Standard English reporting templates",
                  "Confidentiality of your product and pricing",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="navySubtle" id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent-600">Ready when you are</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Tell us which services you need
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The more detail you can share about the product, quantity and
              timeline, the faster we can come back with a useful answer.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>
    </>
  )
}

export default Services
