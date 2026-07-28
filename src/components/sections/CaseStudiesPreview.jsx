import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CASE_STUDIES } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CaseStudiesPreview() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="section section-muted">
      <div className="max-w-container mx-auto container-px">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Case studies"
            title="Selected work from the last 12 months"
            description="A few examples of how the process plays out in practice. Names are kept confidential on request."
          />
          <Link to="/case-studies" className="btn-ghost self-start md:self-end">
            All case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {CASE_STUDIES.slice(0, 4).map((c) => (
            <Link
              to="/case-studies"
              key={c.slug}
              className="card card-hover overflow-hidden flex flex-col sm:flex-row group"
            >
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-brand-surface">
                <img
                  alt={c.title}
                  data-strk-img-id={`cs-${c.slug}-img-9c4d11`}
                  data-strk-img={`[cs-${c.slug}-title] [cs-${c.slug}-industry] [case-studies-eyebrow]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-xs text-brand-slate">
                  <span
                    id={`cs-${c.slug}-industry`}
                    className="font-semibold text-brand-navy"
                  >
                    {c.industry}
                  </span>
                  <span>·</span>
                  <span>{c.region}</span>
                </div>
                <h3
                  id={`cs-${c.slug}-title`}
                  className="mt-2 text-lg font-semibold text-brand-ink leading-snug"
                >
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-brand-slate leading-relaxed flex-1">
                  {c.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-brand-slate">
                  {c.facts.slice(0, 3).map((f) => (
                    <span key={f.k}>
                      <span className="font-medium text-brand-ink">
                        {f.v}
                      </span>{" "}
                      {f.k}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-navy group-hover:text-brand-red">
                  Read case study <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <span id="case-studies-eyebrow" className="sr-only">Case studies</span>
      </div>
    </section>
  );
}
