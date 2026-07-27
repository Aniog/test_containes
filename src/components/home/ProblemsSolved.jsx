import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import SectionHeader from "@/components/shared/SectionHeader";

const PROBLEMS = [
  {
    title: "Trading companies posing as factories",
    titleId: "prob-trader-title",
    desc: "Many suppliers on B2B platforms are middlemen, not manufacturers. We confirm ownership, production lines and workforce on-site.",
    descId: "prob-trader-desc",
    fix: "On-site verification report with photos, license check and key person interview.",
    fixId: "prob-trader-fix",
    image:
      "[prob-trader-fix] [prob-trader-desc] [prob-trader-title] [home-problems-eyebrow] [home-problems-title]",
    imageId: "home-prob-trader-c4d5e6",
  },
  {
    title: "Quality drift after the first order",
    titleId: "prob-quality-title",
    desc: "Samples look great, mass production does not. We run AQL inspections at every stage and refuse shipment that misses your spec.",
    descId: "prob-quality-desc",
    fix: "DPI during production, PSI before shipment, photo and video evidence.",
    fixId: "prob-quality-fix",
    image:
      "[prob-quality-fix] [prob-quality-desc] [prob-quality-title] [home-problems-eyebrow] [home-problems-title]",
    imageId: "home-prob-quality-d5e6f7",
  },
  {
    title: "Hidden costs and surprise fees",
    titleId: "prob-cost-title",
    desc: "Tooling, packaging, certificates, port fees — costs get added at every step. We price the full landed cost upfront.",
    descId: "prob-cost-desc",
    fix: "Line-item quotes, sample cost, tooling cost, freight and duty in one number.",
    fixId: "prob-cost-fix",
    image:
      "[prob-cost-fix] [prob-cost-desc] [prob-cost-title] [home-problems-eyebrow] [home-problems-title]",
    imageId: "home-prob-cost-e6f7a8",
  },
  {
    title: "Communication gaps and missed deadlines",
    titleId: "prob-comm-title",
    desc: "Time zones, language and factory priorities cause delays. You get one named agent who owns the timeline.",
    descId: "prob-comm-desc",
    fix: "Weekly status reports, milestone tracking, escalation paths in writing.",
    fixId: "prob-comm-fix",
    image:
      "[prob-comm-fix] [prob-comm-desc] [prob-comm-title] [home-problems-eyebrow] [home-problems-title]",
    imageId: "home-prob-comm-f7a8b9",
  },
];

export function ProblemsSolved() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="problems" className="section bg-muted">
      <div className="container-x">
        <SectionHeader
          eyebrow="Problems we solve"
          title="The four most common reasons sourcing from China goes wrong"
          titleId="home-problems-title"
          description="Most failures come from a small set of repeated issues. We built our service to remove each one."
          descriptionId="home-problems-desc"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROBLEMS.map((p) => (
            <article
              key={p.titleId}
              className="overflow-hidden rounded-xl border border-border bg-white shadow-card"
            >
              <div className="grid gap-0 sm:grid-cols-5">
                <div className="relative sm:col-span-2">
                  <img
                    alt={p.title}
                    data-strk-img-id={p.imageId}
                    data-strk-img={p.image}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-48 w-full object-cover sm:h-full"
                  />
                </div>
                <div className="space-y-4 p-6 sm:col-span-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-warning/10 text-warning">
                      <AlertTriangle className="h-4 w-4" />
                    </span>
                    <div>
                      <h3
                        id={p.titleId}
                        className="text-base font-semibold text-primary"
                      >
                        {p.title}
                      </h3>
                      <p
                        id={p.descId}
                        className="mt-1 text-sm text-muted-foreground"
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 border-t border-border pt-4">
                    <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-success/10 text-success">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        How we fix it
                      </p>
                      <p
                        id={p.fixId}
                        className="mt-1 text-sm font-medium text-ink"
                      >
                        {p.fix}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemsSolved;
