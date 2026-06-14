import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Truck, BadgeCheck } from "lucide-react";
import { useStrkImages } from "@/components/layout/useStrkImages";
import SectionHeader from "@/components/sections/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";
import { PROCESS_STEPS } from "@/data/content";

export default function HowItWorks() {
  const ref = useStrkImages();
  return (
    <div ref={ref} className="bg-white">
      <section className="bg-navy text-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">How it works</p>
            <h1 id="how-it-works-title" className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white text-balance">
              A clear, six-step process from your brief to delivered goods
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-2xl">
              Every step has a written deliverable. You always know what is happening, what we are doing for you, and what the factory is doing on its side.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-24">
          <ol className="relative border-l-2 border-border md:ml-6 space-y-10">
            {PROCESS_STEPS.map((s, i) => (
              <li key={s.step} className="pl-6 md:pl-10">
                <span className="absolute -left-[14px] flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white text-xs font-bold">
                  {s.step}
                </span>
                <div className="card p-6 md:p-7">
                  <h2 className="text-xl md:text-2xl font-semibold text-ink">{s.title}</h2>
                  <p className="mt-2 text-base leading-7 text-ink-soft">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Deliverables />
      <Timeline />
      <Cta />
    </div>
  );
}

function Deliverables() {
  return (
    <section className="bg-muted">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="What you receive"
          title="Concrete deliverables, at every step"
          subtitle="No vague status updates. Each milestone produces a document you can share with your team, investor, or board."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: FileText, title: "Factory shortlist report", body: "Side-by-side comparison of 3–5 vetted factories: capability, capacity, MOQ, lead time, indicative pricing." },
            { icon: BadgeCheck, title: "Factory audit report", body: "On-site audit with photos covering license, production line, workforce, QC, and export history." },
            { icon: CheckCircle2, title: "Inspection report", body: "Pre-shipment inspection against AQL. Photographic evidence, defect counts, and pass/fail decision." },
            { icon: FileText, title: "Production status report", body: "Weekly written update with photos from the factory floor, milestone tracking, and risks." },
            { icon: Truck, title: "Freight comparison sheet", body: "Sea, air, and rail options compared on cost, transit time, and reliability for your lane." },
            { icon: FileText, title: "Export document pack", body: "Commercial invoice, packing list, certificate of origin, and any product-specific certificates." },
          ].map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="card p-6">
                <div className="icon-tile">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-ink-soft">{d.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    { day: "Day 0", label: "Brief received" },
    { day: "Day 1", label: "Sourcing manager assigned" },
    { day: "Days 3–5", label: "Factory shortlist delivered" },
    { day: "Days 7–14", label: "Samples produced & shipped to you" },
    { day: "Day 21", label: "Sample approval & PO signed" },
    { day: "Days 25–55", label: "Production & DUPRO check" },
    { day: "Days 55–60", label: "Pre-shipment inspection" },
    { day: "Days 60–95", label: "Transit to your destination port" },
  ];
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-24">
        <SectionHeader
          eyebrow="Indicative timeline"
          title="Roughly 60 days from approved sample to ex-factory"
          subtitle="Actual times depend on product complexity, capacity at the factory, and the season. We confirm a realistic schedule in writing before deposit."
        />
        <ol className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <li key={it.day} className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Step {i + 1}
              </p>
              <p className="mt-1 text-base font-semibold text-ink">{it.day}</p>
              <p className="mt-1.5 text-sm text-ink-soft">{it.label}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="bg-muted">
      <div className="container-x py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow">Ready to brief us?</p>
            <h2 className="section-title mt-3 text-balance">
              Send your product brief and we will reply within 24 hours
            </h2>
            <p className="section-subtitle">
              Three minutes to fill in. You can attach photos, sketches, or a spec sheet by replying to our confirmation email.
            </p>
            <Link to="/services" className="btn-ghost mt-4">
              See our services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
