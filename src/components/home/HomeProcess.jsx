import { useRef } from "react";
import { MessageSquareText, ListChecks, Building2, Cog, ClipboardCheck, Ship } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessageSquareText,
    title: "Brief & scope",
    body:
      "You share your product spec, target price, order profile and timeline. We confirm scope, deliverables and a flat quote in writing.",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Supplier shortlist",
    body:
      "We identify and qualify 3–5 candidate factories against your spec, send RFQs, collect quotes and recommend the best fit with reasons.",
  },
  {
    n: "03",
    icon: Building2,
    title: "Factory verification",
    body:
      "Before commitment we walk the floor, check the license, machinery, capacity and export record. You receive a Pass / Conditional / Fail report.",
  },
  {
    n: "04",
    icon: Cog,
    title: "Sampling & tooling",
    body:
      "We coordinate reference samples, prototypes and mould adjustments until the spec is right. Samples are consolidated and shipped to you.",
  },
  {
    n: "05",
    icon: ClipboardCheck,
    title: "Production & QC",
    body:
      "PO confirmed, we run weekly production reports and a DPI / PSI inspection aligned to your AQL standard. Issues caught early, fixed at the factory.",
  },
  {
    n: "06",
    icon: Ship,
    title: "Shipping & delivery",
    body:
      "We book the freight (FCL, LCL, air or rail), prepare export paperwork and track the cargo until it reaches your nominated warehouse or 3PL.",
  },
];

export function HomeProcess() {
  const containerRef = useRef(null);
  useStrkImages(containerRef, []);

  return (
    <Section id="how-it-works" size="default" tone="paper">
      <div ref={containerRef} className="flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Sourcing process"
              title="A predictable, six-step workflow from brief to delivery"
              description="Every project runs the same way. You always know what stage the order is at, what comes next, and what is expected of both sides."
            />
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-line bg-brand-mist">
              <StrkImage
                imgId="home-process-overview-d4e5f6"
                query="[home-process-eyebrow] [home-process-title] [home-process-description] supplier quotation meeting samples factory floor"
                ratio="4x3"
                width={1200}
                alt="Sourcing manager reviewing supplier quotations with samples on a factory table"
              />
            </div>
            <p
              id="home-process-description"
              className="sr-only"
              aria-hidden="true"
            >
              A predictable six-step sourcing workflow.
            </p>
          </div>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.n}
                id={`home-step-${step.n}`}
                className="relative rounded-xl border border-brand-line bg-white p-6 md:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-navy text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span
                    id={`home-step-${step.n}-num`}
                    className="text-sm font-semibold text-brand-ink-soft tracking-tight"
                  >
                    {step.n}
                  </span>
                </div>
                <h3
                  id={`home-step-${step.n}-title`}
                  className="mt-5 text-lg font-semibold text-brand-navy"
                >
                  {step.title}
                </h3>
                <p
                  id={`home-step-${step.n}-body`}
                  className="mt-2 text-sm leading-relaxed text-brand-ink-muted"
                >
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-brand-line bg-white p-6 md:p-7">
          <div>
            <p className="text-base md:text-lg font-semibold text-brand-navy">
              Ready to see the full process in detail?
            </p>
            <p className="mt-1 text-sm text-brand-ink-muted">
              We walk through every stage, including the documents you receive
              and the SLAs behind them.
            </p>
          </div>
          <Button to="/how-it-works" variant="secondary" size="md">
            Read the full process
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}
