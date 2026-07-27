import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

import PageHero from "@/components/layout/PageHero";
import Section, { SectionHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/sections/InquiryForm";
import { CASE_STUDIES } from "@/data/site";
import { cn } from "@/lib/utils";

export default function CaseStudies() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [active]);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case studies"
        title="Real projects, real numbers, real suppliers"
        description="A small selection of recent work. Each case study includes the brief, the scope we ran, and the result the buyer measured."
        breadcrumb={[{ label: "Case Studies" }]}
      />

      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <ul className="space-y-3">
              {CASE_STUDIES.map((c, i) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "w-full text-left rounded-lg border p-4 transition-colors",
                      active === i
                        ? "border-brand-500 bg-brand-50"
                        : "border-ink-200 bg-white hover:border-brand-300"
                    )}
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 font-semibold uppercase tracking-wider",
                          active === i
                            ? "bg-brand-600 text-white"
                            : "bg-ink-100 text-ink-600"
                        )}
                      >
                        {c.region}
                      </span>
                      <span className="text-ink-500">{c.industry}</span>
                    </div>
                    <p
                      className={cn(
                        "mt-2 text-sm font-semibold",
                        active === i ? "text-brand-800" : "text-ink-900"
                      )}
                    >
                      {c.summary.length > 90
                        ? c.summary.slice(0, 90) + "…"
                        : c.summary}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <article className="rounded-lg border border-ink-200 bg-white overflow-hidden shadow-card">
              <div className="relative">
                <img
                  alt={`${CASE_STUDIES[active].industry} case study`}
                  data-strk-img-id={`cs-detail-${CASE_STUDIES[active].id}-img-6e2b9c`}
                  data-strk-img={`[cs-detail-${CASE_STUDIES[active].id}-industry] [cs-detail-${CASE_STUDIES[active].id}-summary] [cs-detail-${CASE_STUDIES[active].id}-region]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700">
                    {CASE_STUDIES[active].region}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-brand-700/90 px-3 py-1 text-xs font-semibold text-white">
                    {CASE_STUDIES[active].industry}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h2
                  id={`cs-detail-${CASE_STUDIES[active].id}-summary`}
                  className="text-2xl font-bold text-ink-900"
                >
                  {CASE_STUDIES[active].summary}
                </h2>
                <p
                  id={`cs-detail-${CASE_STUDIES[active].id}-industry`}
                  className="mt-2 text-sm text-ink-500"
                >
                  {CASE_STUDIES[active].industry} · {CASE_STUDIES[active].region}
                </p>
                <p
                  id={`cs-detail-${CASE_STUDIES[active].id}-region`}
                  className="mt-5 text-[15px] text-ink-700"
                >
                  <span className="font-semibold text-ink-900">Result: </span>
                  {CASE_STUDIES[active].result}
                </p>
                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                    Scope of work
                  </div>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[15px] text-ink-800">
                    {CASE_STUDIES[active].scope.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-7">
                  <Button as="link" to="/contact" icon={ArrowRight}>
                    Start a similar project
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section bg="brandSoft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Your project next"
              title="Tell us about your product and we will reply within one business day"
            />
          </div>
          <div className="lg:col-span-7">
            <InquiryForm compact />
          </div>
        </div>
      </Section>
    </div>
  );
}
