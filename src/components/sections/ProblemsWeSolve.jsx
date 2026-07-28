import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { PROBLEMS } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

export default function ProblemsWeSolve() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section section-muted">
      <div className="max-w-container mx-auto container-px">
        <SectionHeader
          eyebrow="Problems we solve"
          title="What usually goes wrong, and how we fix it"
          description="Most of the issues we see on a first engagement are not exotic — they are the predictable gaps that show up when an overseas buyer is working without a local team."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="bg-white border border-brand-border rounded-lg p-6 shadow-card"
            >
              <div className="flex items-start gap-4">
                <span
                  id={`problem-${i}-icon`}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-brand-surface text-brand-navy shrink-0"
                >
                  <Icon name={p.icon} className="w-5 h-5" />
                </span>
                <div>
                  <h3
                    id={`problem-${i}-title`}
                    className="text-base font-semibold text-brand-ink"
                  >
                    {p.title}
                  </h3>
                  <p
                    id={`problem-${i}-body`}
                    className="mt-2 text-sm text-brand-slate leading-relaxed"
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
