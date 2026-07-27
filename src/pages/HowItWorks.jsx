import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeader, Bullet } from "../components/ui/Primitives.jsx";
import InquiryForm from "../components/ui/InquiryForm.jsx";
import CTABanner from "../components/sections/CTABanner.jsx";
import { processSteps } from "../data/site.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

const stageDetails = [
  {
    title: "Stage 1 — Briefing & supplier search",
    deliverables: [
      "Written confirmation of your spec, target price, and timeline",
      "3–5 factory candidates with side-by-side capability comparison",
      "Initial quotation range with realistic MOQs and lead times",
    ],
    timing: "5–7 business days",
  },
  {
    title: "Stage 2 — Factory verification & sampling",
    deliverables: [
      "Factory audit report (license, capacity, QC, references)",
      "Samples shipped to your office with photos and measurements",
      "Sample-to-spec comparison and improvement notes",
    ],
    timing: "7–15 business days",
  },
  {
    title: "Stage 3 — Quotation & PO",
    deliverables: [
      "Itemised quotation with tooling, setup, and unit costs",
      "Realistic landed-cost estimate (freight, duties, insurance)",
      "Finalised purchase order with payment terms",
    ],
    timing: "3–5 business days",
  },
  {
    title: "Stage 4 — Production & quality control",
    deliverables: [
      "Weekly production status updates with photos",
      "During-production inspection (DPI) at 30–40% complete",
      "Pre-shipment inspection (PSI) using AQL sampling",
    ],
    timing: "20–60 business days",
  },
  {
    title: "Stage 5 — Shipping & delivery",
    deliverables: [
      "Freight quote comparison (sea / air / rail / courier)",
      "Export documentation: commercial invoice, packing list, COO",
      "Tracking and post-shipment support until goods arrive",
    ],
    timing: "5–35 days transit",
  },
];

export default function HowItWorks() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <>
      <section ref={heroRef} className="bg-navy text-white">
        <div className="container-content py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="kicker text-accent mb-3">How it works</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              A clear, documented workflow from RFQ to delivery
            </h1>
            <p className="mt-5 text-lg text-white/80">
              We follow a 5-stage process with written deliverables at every step. You
              always know what is happening, what is next, and what you need to decide.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Start a sourcing project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary-light">
                See all services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-lg border border-hairline bg-white p-5"
            >
              <div className="w-9 h-9 rounded-md bg-navy text-white font-bold text-sm flex items-center justify-center mb-3">
                {step.step}
              </div>
              <h3 className="text-navy font-semibold text-base leading-snug">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/75 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="surface-steel">
        <SectionHeader
          kicker="Stage by stage"
          title="What we deliver at each stage"
          subtitle="Every stage produces a written deliverable you can review, share with your team, and archive."
        />
        <div className="space-y-5">
          {stageDetails.map((stage) => (
            <article key={stage.title} className="card">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4">
                  <h3 className="text-navy font-semibold text-lg leading-snug">{stage.title}</h3>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted font-medium uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {stage.timing}
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <ul className="space-y-2 text-sm">
                    {stage.deliverables.map((d, i) => (
                      <Bullet key={i}>{d}</Bullet>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              kicker="Quality control"
              title="AQL-based inspections, documented in photos and video"
              subtitle="Pre-shipment inspections follow the international AQL standard, with clear pass/fail criteria and corrective-action recommendations."
            />
            <ul className="mt-6 space-y-3 text-sm text-ink/80">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                <span>AQL 1.0 critical / 2.5 major / 4.0 minor by default</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                <span>Sample size per ISO 2859-1 sampling tables</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                <span>Photo evidence for every defect found</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                <span>Functional testing on a percentage of samples</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.5} />
                <span>Same-day decision support: pass / rework / reject</span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-lg overflow-hidden border border-hairline">
              <img
                alt="Quality inspector checking product measurements at a Chinese factory"
                data-strk-img-id="howitworks-qc-img-7e8f9a"
                data-strk-img="[howitworks-qc-title] [howitworks-qc-subtitle]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 id="howitworks-qc-title" className="sr-only">AQL quality inspections</h3>
            <p id="howitworks-qc-subtitle" className="sr-only">
              Pre-shipment inspections with AQL sampling and photo evidence
            </p>
          </div>
        </div>
      </Section>

      <Section id="inquiry" className="surface-steel">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader
              kicker="Get started"
              title="Ready to brief us on a project?"
              subtitle="Share a product spec or a reference sample. We'll respond within 1 business day with a written scope and a quote for the first stage."
            />
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
