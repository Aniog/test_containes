import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "@/data/content";
import SectionHeader from "@/components/sections/SectionHeader";

export default function SourcingProcess() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section bg-surface-muted">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <SectionHeader
            eyebrow="How It Works"
            title="A clear, five-step process"
            subtitle="From the first email to the container on the water — every step is yours to see."
          />
          <Link to="/how-it-works" className="btn-ghost self-start md:self-end shrink-0">
            Detailed process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.n}
              className="relative card p-6 hover:shadow-elevated transition-shadow"
            >
              <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-soft">
                {step.n}
              </span>
              <h3
                id={`process-${step.n}-title`}
                className="mt-2 text-base md:text-lg font-semibold text-ink"
              >
                {step.title}
              </h3>
              <p
                id={`process-${step.n}-body`}
                className="mt-2 text-sm text-ink-soft leading-relaxed"
              >
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
