import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ClipboardList,
  Search,
  Beaker,
  Factory,
  ClipboardCheck,
  Ship,
  Mail,
  ArrowRight,
} from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";
import PageHeader from "../components/site/PageHeader";
import CtaBanner from "../components/site/CtaBanner";
import SectionHeader from "../components/site/SectionHeader";

const steps = [
  {
    icon: ClipboardList,
    n: "01",
    title: "Brief & sourcing plan",
    deliver: "Sourcing plan, timeline, indicative budget",
    desc: "You share your specs, target price, MOQ, certifications and timeline. Within one business day we send a written sourcing plan, expected timeline and indicative budget so you can decide whether to proceed.",
    duration: "1–2 days",
    imgId: "how-step-1-7c9ad1",
  },
  {
    icon: Search,
    n: "02",
    title: "Supplier shortlist",
    deliver: "2–3 verified factories with quotations",
    desc: "We search our network and outside it, screen out trading companies, verify legal entities and run on-site checks where needed. You receive a shortlist of 2–3 best-fit factories with side-by-side quotations.",
    duration: "5–10 days",
    imgId: "how-step-2-1e3b58",
  },
  {
    icon: Beaker,
    n: "03",
    title: "Samples & approval",
    deliver: "Approved sample and signed PO",
    desc: "We coordinate sample requests, log feedback rounds and manage refinements with the factory. Once you approve a sample, we prepare a bilingual purchase order with clear terms and milestones.",
    duration: "1–3 weeks",
    imgId: "how-step-3-9d4f12",
  },
  {
    icon: Factory,
    n: "04",
    title: "Production follow-up",
    deliver: "Weekly status reports with photos",
    desc: "We follow production weekly, push the factory on schedule, flag risks early and translate any issues into clear English summaries with recommended decisions.",
    duration: "Throughout production",
    imgId: "how-step-4-2a8c47",
  },
  {
    icon: ClipboardCheck,
    n: "05",
    title: "Quality inspection",
    deliver: "Inspection report with photos / video",
    desc: "Independent QC at the agreed stages — IPC, DUPRO, pre-shipment or container loading. You receive a written report with pass/fail criteria and clear photo and video evidence.",
    duration: "1–2 days per inspection",
    imgId: "how-step-5-6b1e85",
  },
  {
    icon: Ship,
    n: "06",
    title: "Shipping & delivery",
    deliver: "Door-to-door delivery with tracking",
    desc: "We consolidate from multiple suppliers if needed, prepare export documents, book sea, air or rail freight and coordinate customs clearance and last-mile delivery.",
    duration: "Depends on route",
    imgId: "how-step-6-3f2d18",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="How it works"
        title="A clear, predictable process from brief to delivery"
        description="No surprises, no black box. Every stage has a clear deliverable, a clear owner and a clear timeline."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const reverse = idx % 2 === 1;
              return (
                <li
                  key={step.n}
                  id={`how-step-${step.n}`}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start`}
                >
                  <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-700 text-white font-semibold text-sm">
                        {step.n}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent-500">
                        {step.duration}
                      </span>
                    </div>
                    <h2
                      id={`how-step-${step.n}-title`}
                      className="mt-4 text-2xl md:text-3xl font-semibold text-brand-800 tracking-tight"
                    >
                      {step.title}
                    </h2>
                    <p
                      id={`how-step-${step.n}-desc`}
                      className="mt-3 text-ink-700 leading-relaxed"
                    >
                      {step.desc}
                    </p>
                    <div className="mt-5 inline-flex items-start gap-2 rounded-md border border-line bg-surface-50 px-4 py-2.5 text-sm text-ink-700">
                      <Icon className="w-4 h-4 mt-0.5 text-brand-700" />
                      <span>
                        <span className="font-semibold text-brand-800">
                          You receive:
                        </span>{" "}
                        {step.deliver}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
                  >
                    <div className="rounded-xl overflow-hidden border border-line bg-surface-100">
                      <img
                        alt={step.title}
                        className="w-full h-auto block"
                        data-strk-img-id={step.imgId}
                        data-strk-img={`[how-step-${step.n}-desc] [how-step-${step.n}-title]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="700"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-surface-50 py-16 md:py-24 border-y border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Working together"
            title="What you can expect from us, week to week"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Mail,
                title: "Weekly written updates",
                desc: "A short, structured update every week, with photos, decisions needed and risks flagged.",
              },
              {
                icon: ClipboardCheck,
                title: "Documented decisions",
                desc: "Every spec change, price change and approval is logged in writing — protecting you long-term.",
              },
              {
                icon: Factory,
                title: "Boots on the ground",
                desc: "When something is unclear, we visit the factory in person rather than relying on emails.",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-xl border border-line bg-white p-6"
                >
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-brand-50 text-brand-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-brand-800">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent-500 hover:bg-accent-600 text-white font-semibold px-5 py-3 transition"
            >
              Start your sourcing project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
