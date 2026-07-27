import { Link } from "react-router-dom"
import { ArrowRight, Check, ClipboardList, MessageSquare, FileCheck2, Boxes, Truck } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Section, SectionHeader } from "@/components/ui/Section"
import { InquiryForm } from "@/components/shared/InquiryForm"
import { process } from "@/data/content"
import { FAQ } from "@/components/shared/FAQ"
import { homeFaqs } from "@/data/content"

const stageIcons = [
  MessageSquare,
  ClipboardList,
  FileCheck2,
  Boxes,
  ClipboardList,
  Truck,
]

export function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From your first email to the container arriving at your door"
        subtitle="A predictable six-step process with clear deliverables at each step, one coordinator, and a transparent fee. Most projects follow this exact path."
      />

      <Section bg="white">
        <div className="space-y-12 md:space-y-16">
          {process.map((p, i) => {
            const Icon = stageIcons[i] || ClipboardList
            return (
              <div
                key={p.step}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-accent-500 text-white font-bold text-sm">
                      {p.step}
                    </span>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-navy-50 text-navy-900">
                      <Icon className="w-5 h-5" />
                    </span>
                  </div>
                  <h2
                    id={`step-${p.step}-title`}
                    className="mt-4 text-2xl md:text-3xl font-bold text-slate-900"
                  >
                    {p.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p
                    id={`step-${p.step}-desc`}
                    className="text-base text-slate-600 leading-relaxed"
                  >
                    {p.desc}
                  </p>
                  <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Deliverable at this step
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {deliverables[i].map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* Timeline summary */}
      <Section bg="slate">
        <SectionHeader
          eyebrow="Typical timeline"
          title="What a standard first project looks like"
          subtitle="Indicative durations for a typical first order. Sampling complexity, factory capacity and certifications can shift these numbers by a week or two."
          align="center"
        />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { step: "Day 1", label: "Inquiry received" },
            { step: "Day 2–4", label: "Shortlist shared" },
            { step: "Week 2", label: "Samples shipped" },
            { step: "Week 3", label: "PO signed" },
            { step: "Week 4–6", label: "Production" },
            { step: "Week 7", label: "Container shipped" },
          ].map((t) => (
            <div
              key={t.label}
              className="rounded-lg bg-white border border-slate-200 p-4 text-center"
            >
              <p className="text-xs font-semibold text-accent-600 uppercase tracking-wider">
                {t.step}
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {t.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Frequently asked"
              title="Common questions about the process"
              align="left"
              className="!max-w-none"
            />
            <p className="mt-4 text-sm text-slate-600">
              These are the questions buyers ask most often before starting a
              first project with us.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-900 hover:text-accent-600"
            >
              Ask a different question <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <FAQ items={homeFaqs} />
          </div>
        </div>
      </Section>

      <Section bg="navySubtle" id="inquiry">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent-600">Start step 01</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Send us your product brief
            </h2>
            <p className="mt-4 text-base text-slate-600">
              A clear brief is the single biggest factor in getting useful
              supplier shortlists fast.
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

const deliverables = [
  [
    "Confirmation of understanding and clarifying questions",
    "Indicative service fee and timeline",
    "Mutual NDA (optional but recommended)",
  ],
  [
    "3–5 vetted manufacturers with company profile",
    "Formal quotes and lead times in a comparison sheet",
    "Recommended shortlist with pros and cons",
  ],
  [
    "Coordinated paid samples (often consolidated to save cost)",
    "On-site factory audit report with photos (if requested)",
    "Recommended 1–2 suppliers with reasoning",
  ],
  [
    "Negotiated pricing, payment terms and Incoterms",
    "Signed purchase order with both parties' details",
    "Production schedule and milestone plan",
  ],
  [
    "During-production check at ~30% completion",
    "Pre-shipment inspection at ~100% with AQL report",
    "Photo / video evidence of packing and loading",
  ],
  [
    "Booked freight (sea / air / rail) with quote comparison",
    "Commercial invoice, packing list, COO and certifications",
    "Tracking until the goods arrive at your port or warehouse",
  ],
]

export default HowItWorks
