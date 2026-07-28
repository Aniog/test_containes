import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Users, Truck } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PROCESS_STEPS } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";
import Icon from "@/components/ui/Icon";
import InquiryForm from "@/components/ui/InquiryForm";
import CtaBanner from "@/components/sections/CtaBanner";

const DELIVERABLES = [
  {
    icon: FileText,
    title: "Written deliverables",
    body:
      "Every step ends in a written deliverable: a short-list, an audit report, an inspection report, a production update, a shipping file. No verbal-only status.",
  },
  {
    icon: Users,
    title: "Dedicated account manager",
    body:
      "One named account manager owns your project. They reply in English, join your calls, and are accountable for the outcome.",
  },
  {
    icon: Truck,
    title: "One shipment, one bill",
    body:
      "If we consolidate, you receive one freight quote, one B/L, one invoice. No fragmentation across multiple forwarders.",
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
        title="Six steps from brief to delivered goods"
        description="The process is the same on every project, regardless of product. Predictable, documented, and reviewed against a written brief before each step starts."
      />

      {/* Timeline */}
      <section className="section">
        <div className="max-w-container mx-auto container-px">
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((p, i) => (
              <li
                key={p.step}
                className="relative card p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <span
                    id={`howit-step-${p.step}-num`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-navy text-white font-semibold"
                  >
                    {p.step}
                  </span>
                  <span className="text-xs font-semibold tracking-[0.16em] uppercase text-brand-slate">
                    Step {i + 1} of {PROCESS_STEPS.length}
                  </span>
                </div>
                <h3
                  id={`howit-step-${p.step}-title`}
                  className="mt-4 text-lg font-semibold text-brand-ink"
                >
                  {p.title}
                </h3>
                <p
                  id={`howit-step-${p.step}-body`}
                  className="mt-2 text-sm text-brand-slate leading-relaxed flex-1"
                >
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What you get */}
      <section className="section section-muted">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow">What you get</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-brand-ink tracking-tight">
                Three things every project includes
              </h2>
              <p className="mt-4 text-brand-slate leading-relaxed">
                The deliverables below are non-negotiable. They are the reason
                our clients come back.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Acknowledged within one business day",
                  "A short-list of 3–5 qualified factories",
                  "A written factory audit before first PO",
                  "A pass / fail PSI before any goods ship",
                  "A full shipping file at delivery",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2.5 text-sm text-brand-ink"
                  >
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-success shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {DELIVERABLES.map((d, i) => (
                <div key={d.title} className="card p-6">
                  <span
                    id={`howit-deliv-${i}-icon`}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-surface text-brand-navy"
                  >
                    <Icon name={d.icon} className="w-5 h-5" />
                  </span>
                  <h3
                    id={`howit-deliv-${i}-title`}
                    className="mt-3 text-base font-semibold text-brand-ink"
                  >
                    {d.title}
                  </h3>
                  <p
                    id={`howit-deliv-${i}-body`}
                    className="mt-2 text-sm text-brand-slate leading-relaxed"
                  >
                    {d.body}
                  </p>
                </div>
              ))}
              <div className="card p-6 sm:col-span-2 overflow-hidden">
                <img
                  alt="Process overview"
                  data-strk-img-id="howit-process-img-7d4f0a"
                  data-strk-img="[howit-process-title] [howit-eyebrow]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  className="w-full h-full object-cover rounded-md"
                />
                <h3
                  id="howit-process-title"
                  className="mt-3 text-base font-semibold text-brand-ink"
                >
                  A documented process, not a black box
                </h3>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed">
                  Every step is logged, every report is dated, and every
                  decision is recorded. You can hand the project file to a
                  colleague and they can pick it up.
                </p>
              </div>
            </div>
          </div>
          <span id="howit-eyebrow" className="sr-only">How it works</span>
        </div>
      </section>

      <section className="section">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow">Start a project</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-brand-ink tracking-tight">
                Share your brief
              </h2>
              <p className="mt-4 text-brand-slate leading-relaxed">
                We will reply within one business day with a short-list, a
                sample quote, and a transparent cost estimate.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
