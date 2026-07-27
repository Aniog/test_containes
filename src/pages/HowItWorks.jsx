import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/site/PageHeader";
import StrkImage from "@/components/site/StrkImage";
import Faq from "@/components/site/Faq";
import ContactStrip from "@/components/site/ContactStrip";
import { processSteps, faqs, services } from "@/data/site";

const deliverables = [
  {
    title: "Sourcing brief",
    summary:
      "A one-page document confirming product spec, target price, MOQ range, certifications and timeline. We send this back to you on day one.",
  },
  {
    title: "Supplier shortlist",
    summary:
      "3–5 factories, each with a one-page profile: legal entity, capacity, export history, photo evidence and a side-by-side FOB comparison.",
  },
  {
    title: "Sample report",
    summary:
      "Photo, video and written evaluation of every sample, with a clear pass / rework / fail recommendation and what needs to change before production.",
  },
  {
    title: "Factory audit",
    summary:
      "A 25-point on-site audit covering license, equipment, workforce, fire safety, working conditions and quality system. PDF with photos.",
  },
  {
    title: "Inspection reports",
    summary:
      "AQL-based inspection reports with on-site photos, defect log and a clear pass / fail verdict. Issued within 24 hours of the inspection.",
  },
  {
    title: "Production updates",
    summary:
      "Weekly photo and video updates against your PO milestones, with an honest read on whether the order is on track, at risk, or late.",
  },
  {
    title: "Export documents",
    summary:
      "Commercial invoice, packing list, certificate of origin, fumigation, and any product-specific certifications (FCC, CE, RoHS, REACH…).",
  },
  {
    title: "Shipping & delivery",
    summary:
      "Booked freight with a real-time tracker, customs paperwork, and door / port / FBA delivery confirmation. Includes DDP where available.",
  },
];

const HowItWorks = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="How it works"
        title="A 5-step process. Same every time. No surprises."
        subtitle="We document each step in writing, with photos and a deliverable you can share with your team. If anything changes, you hear about it the same day."
        primaryCtaLabel="Get a Free Sourcing Quote"
        primaryCtaTo="/contact"
      />

      <section className="section bg-white">
        <div className="container-x">
          <ol className="space-y-6">
            {processSteps.map((s, idx) => (
              <li
                key={s.step}
                className="card grid items-start gap-6 p-6 md:grid-cols-12 md:p-8"
                id={`howitworks-step-${s.step}`}
              >
                <div className="md:col-span-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[56px] font-bold leading-none tracking-tight text-accent-600">
                      {s.step}
                    </span>
                    <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Step {idx + 1} of 5
                    </span>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-[22px] font-semibold leading-snug text-ink-900 md:text-[26px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-600">
                    {s.summary}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-surface-50 px-3 py-2 text-[13.5px] text-ink-700">
                    <Check className="h-4 w-4 text-success-600" />
                    <span>
                      <span className="font-semibold text-ink-900">
                        Deliverable:
                      </span>{" "}
                      {s.deliverable}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-surface-50">
        <div className="container-x">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="eyebrow">What you receive</span>
              <h2
                id="howitworks-deliverables-title"
                className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[36px]"
              >
                Eight written deliverables. Photos and video where it matters.
              </h2>
            </div>
            <p
              id="howitworks-deliverables-subtitle"
              className="md:col-span-5 text-[15.5px] leading-relaxed text-ink-600"
            >
              You should never have to ask "what's happening with my order?"
              Each deliverable below is something we proactively send you,
              not a report you need to chase.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((d) => (
              <article
                key={d.title}
                className="card p-5"
                id={`howitworks-deliverable-${d.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-600">
                  Deliverable
                </p>
                <h3 className="mt-1.5 text-[16.5px] font-semibold text-ink-900">
                  {d.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-600">
                  {d.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">A realistic timeline</span>
              <h2
                id="howitworks-timeline-title"
                className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[36px]"
              >
                60–90 days from inquiry to delivered goods.
              </h2>
              <p
                id="howitworks-timeline-subtitle"
                className="mt-4 text-[15.5px] leading-relaxed text-ink-600"
              >
                The exact timeline depends on your product, MOQ and
                destination. This is a realistic working estimate for a
                typical import order.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="btn btn-primary">
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-surface-200">
                <StrkImage
                  imgId="howitworks-timeline-img-77c2b1"
                  query="[howitworks-timeline-subtitle] [howitworks-timeline-title]"
                  ratio="16x9"
                  width={1100}
                  alt="Gantt-style chart showing a sourcing project timeline"
                  imgClassName="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { day: "Day 1–2", label: "Brief confirmed" },
                  { day: "Day 3–7", label: "Supplier shortlist" },
                  { day: "Day 8–15", label: "Samples" },
                  { day: "Day 16–45", label: "Production" },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="rounded-md border border-surface-200 bg-white p-3"
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-accent-600">
                      {t.day}
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-ink-900">
                      {t.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface-50">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">What's included</span>
              <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[34px]">
                The full set of services in a typical project.
              </h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-ink-600">
                Most projects combine these services. We will recommend
                exactly what you need after the first call.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-start gap-3 rounded-md border border-surface-200 bg-white p-4"
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent-50 text-accent-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-ink-900">
                        {s.title}
                      </p>
                      <p className="text-[13.5px] text-ink-600">
                        {s.eyebrow}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[34px]">
                Process FAQ
              </h2>
            </div>
            <div className="md:col-span-8">
              <Faq items={faqs} idPrefix="howitworks-faq" />
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
};

export default HowItWorks;
