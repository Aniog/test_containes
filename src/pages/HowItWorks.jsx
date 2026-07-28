import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PROCESS_STEPS } from "@/data/content";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/sections/InquiryForm";

const DELIVERABLES = {
  "01": ["Project brief review", "Initial feasibility", "Indicative pricing"],
  "02": ["Shortlist of 3–5 factories", "Quotations and lead times", "Verification notes"],
  "03": ["Sample shipment", "Terms and conditions", "Side-by-side comparison"],
  "04": ["Weekly progress reports", "PPI / DPI / PSI reports", "Photo and video updates"],
  "05": ["Booking confirmation", "Export documents", "Container loading photos"],
};

export default function HowItWorks() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="A clear five-step process from inquiry to delivery"
        subtitle="Each step has a defined deliverable. You see the work in real time, not just at the end."
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "How It Works" },
        ]}
      />

      <section ref={ref} className="section bg-white">
        <div className="container-x">
          <ol className="space-y-6 md:space-y-8">
            {PROCESS_STEPS.map((step, idx) => (
              <li
                key={step.n}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 card p-6 md:p-8 scroll-mt-24"
                id={`step-${step.n}`}
              >
                <div className="md:col-span-3 flex md:block items-center gap-4">
                  <span className="w-14 h-14 rounded-md bg-primary text-white text-xl font-bold flex items-center justify-center shadow-soft">
                    {step.n}
                  </span>
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary md:mt-3">
                    Step {idx + 1} of {PROCESS_STEPS.length}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <h2
                    id={`step-${step.n}-title`}
                    className="text-xl md:text-2xl font-bold text-ink mb-2"
                  >
                    {step.title}
                  </h2>
                  <p
                    id={`step-${step.n}-body`}
                    className="text-sm md:text-base text-ink-soft leading-relaxed"
                  >
                    {step.body}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-xs uppercase tracking-wider font-semibold text-ink-muted mb-2">
                    What you receive
                  </p>
                  <ul className="space-y-1.5">
                    {DELIVERABLES[step.n]?.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-ink"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-accent">
              Start with a free inquiry <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section className="section bg-surface-muted">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-ink">Ready to start?</h2>
            <p className="mt-3 text-base text-ink-soft">
              Send us your product details. We reply within one business day with a shortlist and an indicative plan.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
