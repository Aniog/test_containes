import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import StrkImage from "@/components/site/StrkImage";
import { caseStudies } from "@/data/site";

const CaseStudiesSection = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section bg-surface-50">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Case studies</span>
            <h2
              id="cases-section-title"
              className="mt-3 text-[32px] font-bold leading-tight tracking-tight text-ink-900 md:text-[42px]"
            >
              Real projects, real numbers, real factories.
            </h2>
          </div>
          <Link to="/case-studies" className="btn btn-outline btn-sm">
            See all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              id={`case-${cs.id}-card`}
              className="card overflow-hidden"
            >
              <div className="relative">
                <StrkImage
                  imgId={`case-${cs.id}-img`}
                  query={`[case-${cs.id}-desc] [case-${cs.id}-title] [cases-section-title]`}
                  ratio="16x9"
                  width={900}
                  alt={cs.title}
                  imgClassName="aspect-[16/9] w-full object-cover"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1 text-[12px] font-semibold text-ink-900">
                  <MapPin className="h-3.5 w-3.5 text-accent-600" />
                  {cs.industry}
                </span>
              </div>
              <div className="p-6">
                <h3
                  id={`case-${cs.id}-title`}
                  className="text-[19px] font-semibold leading-snug text-ink-900"
                >
                  {cs.title}
                </h3>
                <p
                  id={`case-${cs.id}-desc`}
                  className="mt-2.5 text-[14.5px] leading-relaxed text-ink-600"
                >
                  {cs.summary}
                </p>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-surface-200 pt-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                        {m.label}
                      </dt>
                      <dd className="mt-1 text-[18px] font-bold text-ink-900">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
