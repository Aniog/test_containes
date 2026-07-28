import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PROCESS_STEPS } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProcessSteps() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section section-muted">
      <div className="max-w-container mx-auto container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Sourcing process"
            title="Six steps from brief to delivered goods"
            description="A predictable, documented process — not a black box. You see the same short-list, the same audit, the same report we do."
          />
          <Link to="/how-it-works" className="btn-ghost self-start md:self-end">
            See full process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCESS_STEPS.map((p) => (
            <div
              key={p.step}
              className="bg-white border border-brand-border rounded-lg p-6 shadow-card"
            >
              <div className="flex items-baseline gap-3">
                <span
                  id={`process-step-${p.step}-num`}
                  className="text-3xl font-semibold text-brand-navy tracking-tight"
                >
                  {p.step}
                </span>
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-brand-slate">
                  Step
                </span>
              </div>
              <h3
                id={`process-step-${p.step}-title`}
                className="mt-3 text-lg font-semibold text-brand-ink"
              >
                {p.title}
              </h3>
              <p
                id={`process-step-${p.step}-body`}
                className="mt-2 text-sm text-brand-slate leading-relaxed"
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
