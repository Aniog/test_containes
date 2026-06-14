import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  FileText,
  Search,
  ClipboardCheck,
  Boxes,
  Eye,
  Ship,
  CheckCircle2,
  Clock,
  MessageSquare,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero.jsx"
import CTASection from "@/components/sections/CTASection.jsx"

const PHASES = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Brief & feasibility",
    duration: "Day 1 – Day 2",
    icon: FileText,
    summary:
      "We translate your business need into a sourcing brief: product, quantity, target price, must-have certifications, and timeline.",
    bullets: [
      "Discovery call (30 min) or written brief",
      "Feasibility check on product and quantity",
      "Indicative price range and MOQ guidance",
      "Aligned project plan with named owner",
    ],
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Sourcing & shortlist",
    duration: "Day 3 – Day 7",
    icon: Search,
    summary:
      "We map the relevant industrial cluster, request quotes from vetted suppliers, and shortlist the 3-5 most credible ones.",
    bullets: [
      "Industry cluster mapping and supplier outreach",
      "Quote comparison sheet (price, MOQ, lead time, Incoterms)",
      "Export history, license and capacity check",
      "Shortlist call to align with you before moving on",
    ],
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Audit & sample",
    duration: "Week 2 – Week 3",
    icon: ClipboardCheck,
    summary:
      "We audit the top candidate factories on-site or via live video, and arrange sealed samples for your team to approve.",
    bullets: [
      "On-site or remote factory audit with written report",
      "Risk grading: low / medium / high",
      "Sample production, photo and video evidence",
      "Sealed samples shipped to your door (DDP, on us)",
    ],
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Production follow-up",
    duration: "Week 4 onward",
    icon: Boxes,
    summary:
      "Once you sign off on the sample, we follow production week by week, with milestone photos and clear escalation if anything slips.",
    bullets: [
      "Deposit and PO support (we never hold your money)",
      "Weekly production status reports",
      "Inline inspections (DUPRO) at critical milestones",
      "Schedule risk alerts before things slip",
    ],
  },
  {
    id: "phase-5",
    phase: "Phase 5",
    title: "Pre-shipment inspection",
    duration: "Before shipping",
    icon: Eye,
    summary:
      "A final AQL-based PSI before goods leave the factory, with photos, video, and a clear accept / rework / reject decision.",
    bullets: [
      "AQL sampling per your spec (1.5 / 2.5 / 4.0)",
      "Carton, packaging and labeling checks",
      "24-hour report with corrective actions",
      "Sign-off before we authorize the factory to ship",
    ],
  },
  {
    id: "phase-6",
    phase: "Phase 6",
    title: "Shipping & delivery",
    duration: "Door-to-door",
    icon: Ship,
    summary:
      "We coordinate freight, customs and last-mile delivery, with a single point of contact until goods are in your warehouse.",
    bullets: [
      "Sea, air and rail freight options",
      "Customs documents, HS codes, certificates of origin",
      "FOB, CIF or DDP — your choice, in plain English",
      "Real-time tracking and exception handling",
    ],
  },
]

const TIMELINE_CHECKPOINTS = [
  { label: "First reply", value: "< 1 business day" },
  { label: "Shortlist ready", value: "5 – 7 days" },
  { label: "Sealed samples", value: "2 – 3 weeks" },
  { label: "Mass production", value: "30 – 60 days" },
  { label: "Door-to-door", value: "From 18 days (air)" },
]

const PRINCIPLES = [
  {
    icon: MessageSquare,
    title: "You always know who is doing the work",
    detail:
      "A named sourcing manager owns your project. You communicate with the same person, in English, throughout.",
  },
  {
    icon: CheckCircle2,
    title: "You approve before anything is paid",
    detail:
      "We never ask a factory to start production without your sample sign-off and your written PO.",
  },
  {
    icon: Clock,
    title: "You get reports you can act on",
    detail:
      "Every report is written in English, with photos, clear next steps, and a pass / rework / reject decision.",
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])
  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="How it works"
        title="A predictable process, from your first brief to your warehouse"
        subtitle="Six phases, each with a clear deliverable and a named owner. We work to your timeline and to your standards, not the other way around."
        bullets={["Average first reply: under 1 business day", "Reports in English within 24h of every inspection"]}
      />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The 6 phases</p>
            <h2 className="h2 mt-3">From brief to delivery, step by step</h2>
            <p className="lead mt-4">
              The same six phases apply whether you are doing a one-off trial order or
              a full-package program with multiple SKUs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PHASES.map((p) => (
              <div
                key={p.id}
                id={p.id}
                className="card flex h-full flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="pill-accent">{p.phase}</span>
                  <span className="text-xs font-medium text-slate-500">{p.duration}</span>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <span className="icon-bubble-accent">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{p.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Indicative timeline</p>
              <h2 className="h2 mt-3">What to expect, week by week</h2>
              <p className="lead mt-4">
                These are the timelines most of our projects follow. Your actual dates
                will depend on product complexity, customization and the factory's
                schedule, but the shape of the project will look like this.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {TIMELINE_CHECKPOINTS.map((t) => (
                  <div key={t.label} className="card-tinted">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                      {t.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      {t.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute -left-3 top-3 bottom-3 hidden w-1 rounded bg-navy-100 lg:block"
                aria-hidden="true"
              />
              <div className="space-y-5">
                {PRINCIPLES.map((p, i) => (
                  <div
                    key={p.title}
                    className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="icon-bubble-navy shrink-0">
                        <p.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-700">
                          Principle {i + 1}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-slate-900">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">{p.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Ready to start?</p>
            <h2 className="h2 mt-3">Send a brief, get a shortlist within a week</h2>
            <p className="lead mt-4">
              The first step is a 30-minute discovery call or a written brief. From
              there, we will reply within one business day with a shortlist and a clear
              plan.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                See services & pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
