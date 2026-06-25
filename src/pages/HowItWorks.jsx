import {
  MessageSquareText,
  ListChecks,
  Building2,
  Cog,
  ClipboardCheck,
  Ship,
  CheckCircle2,
  Clock4,
  FileCheck2,
  Camera,
  MessageCircle,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { StrkImage } from "@/components/ui/StrkImage";
import { InquiryForm } from "@/components/ui/InquiryForm";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    n: "01",
    icon: MessageSquareText,
    title: "Brief & scope",
    summary:
      "You share your spec, target price, order profile and timeline. We confirm a scope and flat-fee quote in writing.",
    bullets: [
      "Spec sheet, reference products or photos",
      "Target unit price (FOB / EXW / DDP)",
      "Order profile: volume, repeat cadence",
      "Timeline and any compliance requirements",
    ],
    deliverable:
      "Written scope of work with deliverables, timeline and flat-fee quote.",
    sla: "Within 1 business day",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Supplier shortlist",
    summary:
      "We identify 3–5 candidate factories against your spec, run RFQs and recommend the best fit with reasons.",
    bullets: [
      "Search across our pre-qualified factory database",
      "On-platform and off-platform outreach (Alibaba, Made-in-China, 1688)",
      "Side-by-side quotation comparison sheet",
      "Written recommendation with pros and cons",
    ],
    deliverable:
      "Shortlist report with 3–5 supplier profiles and a written recommendation.",
    sla: "5–10 business days",
  },
  {
    n: "03",
    icon: Building2,
    title: "Factory verification",
    summary:
      "We visit the recommended factory on-site, walk the floor and confirm the supplier is real, capable and ready.",
    bullets: [
      "Business license and ownership verification",
      "Production floor walk-through with photos",
      "Machinery, capacity and workforce review",
      "Export history and reference customer check",
    ],
    deliverable:
      "Audit report with Pass / Conditional / Fail verdict and supporting evidence.",
    sla: "3–5 business days per visit",
  },
  {
    n: "04",
    icon: Cog,
    title: "Sampling & tooling",
    summary:
      "We coordinate reference samples, prototypes and mould adjustments until the spec is right.",
    bullets: [
      "Reference samples from shortlisted factories",
      "Prototype rounds with structured feedback",
      "Tooling, mould and artwork coordination",
      "Consolidated sample shipment to your office",
    ],
    deliverable:
      "Approved samples, prototype sign-off, and tooling cost breakdown if applicable.",
    sla: "2–6 weeks depending on complexity",
  },
  {
    n: "05",
    icon: ClipboardCheck,
    title: "Production & QC",
    summary:
      "PO confirmed, we run weekly production reports plus a DPI / PSI inspection aligned to your AQL standard.",
    bullets: [
      "PO confirmation and deposit milestone",
      "Weekly written production status report",
      "During Production Inspection (DPI) at 30–40%",
      "Pre-Shipment Inspection (PSI) at 80–100%",
    ],
    deliverable:
      "Weekly status report plus AQL inspection report with photo and video evidence within 24 hours of each visit.",
    sla: "Throughout production run",
  },
  {
    n: "06",
    icon: Ship,
    title: "Shipping & delivery",
    summary:
      "We book freight, prepare export paperwork and track the cargo until it reaches your nominated warehouse.",
    bullets: [
      "FCL / LCL / air / rail quote comparison",
      "Booking with vetted forwarders",
      "Commercial invoice, packing list, COO prep",
      "Cargo tracking with milestone updates",
    ],
    deliverable:
      "Booking confirmation, B/L or AWB, full export document set and tracking until delivery.",
    sla: "Door-to-door support",
  },
];

function PageHero() {
  return (
    <Section size="lg" tone="paper">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="eyebrow text-brand-teal">How it works</span>
          <h1
            id="hiw-hero-title"
            className="mt-4 font-bold tracking-tight text-brand-navy text-4xl md:text-5xl leading-[1.08]"
          >
            From your brief to a delivered shipment — in six predictable stages
          </h1>
          <p
            id="hiw-hero-subtitle"
            className="mt-5 text-base md:text-lg leading-relaxed text-brand-ink-muted max-w-2xl"
          >
            Every sourcing project we run follows the same six-stage workflow.
            You always know what stage you are at, what we are doing, what you
            receive, and how long it takes.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button to="/contact" variant="primary" size="lg">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/services" variant="outline" size="lg">
              See services
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl border border-brand-line bg-brand-mist overflow-hidden">
              <StrkImage
                imgId="hiw-hero-img-1"
                query="[hiw-hero-title] [hiw-hero-subtitle] China sourcing agent meeting supplier at factory showroom"
                ratio="3x4"
                width={700}
                alt="Sourcing agent meeting with supplier in a Chinese factory showroom"
              />
            </div>
            <div className="aspect-[3/4] rounded-2xl border border-brand-line bg-brand-mist overflow-hidden mt-10">
              <StrkImage
                imgId="hiw-hero-img-2"
                query="[hiw-hero-title] [hiw-hero-subtitle] shipping container yard freight forwarder coordinating export China"
                ratio="3x4"
                width={700}
                alt="Freight forwarder coordinating shipping container yard in China"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function StageTimeline() {
  return (
    <Section size="default" tone="default">
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="The full process"
          title="Six stages, with deliverables and SLAs in writing"
          description="What we do, what you receive, and how long each stage takes. We share this with you at project kick-off and update it as the project progresses."
        />

        <ol className="relative grid grid-cols-1 gap-6">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <li
                key={stage.n}
                id={`hiw-stage-${stage.n}`}
                className={cn(
                  "relative rounded-2xl border border-brand-line bg-white p-6 md:p-8 scroll-mt-header",
                  idx === 0 && "ring-1 ring-brand-red/10"
                )}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                  <div className="flex-shrink-0 flex items-start gap-4 lg:w-64">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-navy text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p
                        id={`hiw-stage-${stage.n}-num`}
                        className="text-xs font-semibold tracking-[0.18em] text-brand-ink-soft"
                      >
                        Stage {stage.n}
                      </p>
                      <h3
                        id={`hiw-stage-${stage.n}-title`}
                        className="mt-1 text-xl md:text-2xl font-semibold text-brand-navy leading-tight"
                      >
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p
                      id={`hiw-stage-${stage.n}-summary`}
                      className="text-base md:text-lg text-brand-ink leading-relaxed"
                    >
                      {stage.summary}
                    </p>
                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stage.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-teal" />
                          <span className="text-sm text-brand-ink leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:w-72 lg:flex-shrink-0 grid grid-cols-1 gap-3">
                    <div className="rounded-md bg-brand-mist p-4">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-ink-muted">
                        Deliverable
                      </p>
                      <p className="mt-1.5 text-sm text-brand-navy leading-snug">
                        {stage.deliverable}
                      </p>
                    </div>
                    <div className="rounded-md bg-brand-paper p-4">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-ink-muted">
                        Typical timing
                      </p>
                      <p className="mt-1.5 text-sm text-brand-navy leading-snug">
                        {stage.sla}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}

function CommunicationCadence() {
  return (
    <Section size="default" tone="paper">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="How we communicate"
            title="One project manager. One inbox. No chasing."
            description="You do not talk to a chatbot. You do not get passed between sales, ops and accounts. A single named project manager owns your project from brief to delivery."
          />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="rounded-xl border border-brand-line bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <Clock4 className="h-5 w-5" />
              </span>
              <p className="mt-4 text-base font-semibold text-brand-navy">
                Reply within one business day
              </p>
              <p className="mt-1.5 text-sm text-brand-ink-muted">
                On every email and message, every business day, in your time
                zone.
              </p>
            </li>
            <li className="rounded-xl border border-brand-line bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <FileCheck2 className="h-5 w-5" />
              </span>
              <p className="mt-4 text-base font-semibold text-brand-navy">
                Weekly written status reports
              </p>
              <p className="mt-1.5 text-sm text-brand-ink-muted">
                During production, every Friday. Same template. Same data.
              </p>
            </li>
            <li className="rounded-xl border border-brand-line bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <Camera className="h-5 w-5" />
              </span>
              <p className="mt-4 text-base font-semibold text-brand-navy">
                Photo and video evidence
              </p>
              <p className="mt-1.5 text-sm text-brand-ink-muted">
                Every audit, inspection and milestone backed by timestamped
                media.
              </p>
            </li>
            <li className="rounded-xl border border-brand-line bg-white p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-red/10 text-brand-red">
                <MessageCircle className="h-5 w-5" />
              </span>
              <p className="mt-4 text-base font-semibold text-brand-navy">
                Weekly project call
              </p>
              <p className="mt-1.5 text-sm text-brand-ink-muted">
                30-minute video call every Monday or Friday — your call.
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
            <StrkImage
              imgId="hiw-comm-p7q8r9"
              query="China sourcing agent project manager video call with overseas buyer reviewing weekly production report"
              ratio="4x3"
              width={1200}
              alt="Project manager on a video call reviewing a weekly production report"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section size="default" tone="mist">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Next step"
            title="See how the process applies to your product"
            description="Tell us a few details about your product, target price and order profile. We will map the six stages to your project and send back a written scope of work and flat-fee quote within one business day."
          />
          <ul className="mt-10 space-y-4">
            {[
              "A named project manager assigned at kick-off",
              "A written scope of work with deliverables",
              "A flat-fee quote — no mark-ups, no commissions",
              "Weekly reporting cadence agreed in writing",
            ].map((row) => (
              <li key={row} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-teal" />
                <span className="text-sm md:text-base text-brand-ink">{row}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <InquiryForm
            eyebrow="Get a written scope"
            title="Request a written scope and quote"
            description="We will reply within one business day."
            submitLabel="Get a Free Sourcing Quote"
          />
        </div>
      </div>
    </Section>
  );
}

export default function HowItWorks() {
  return (
    <>
      <PageHero />
      <StageTimeline />
      <CommunicationCadence />
      <FinalCTA />
    </>
  );
}
