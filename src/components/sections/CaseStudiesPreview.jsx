import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote, MapPin } from "lucide-react";
import { Section, SectionHeader } from "../ui/Primitives.jsx";
import { caseStudies } from "../../data/site.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";

export default function CaseStudiesPreview() {
  const containerRef = useRef(null);
  const featured = caseStudies.slice(0, 3);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Section className="surface-steel" id="case-studies">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <SectionHeader
          kicker="Case studies"
          title="Real projects, real numbers, real outcomes"
          subtitle="A few representative engagements from our recent work. Full case studies available with detailed timelines and metrics."
        />
        <Link
          to="/case-studies"
          className="btn-ghost md:self-start md:mt-2 text-sm font-semibold"
        >
          All case studies
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {featured.map((cs) => (
          <article key={cs.slug} className="card card-hover flex flex-col h-full overflow-hidden !p-0">
            <div className="relative">
              <img
                alt={`${cs.industry} sourcing case study from ${cs.region}`}
                data-strk-img-id={`case-${cs.slug}-img-3f4a5b`}
                data-strk-img={`[case-${cs.slug}-title] [case-${cs.slug}-industry]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-44 object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 text-xs text-muted mb-3">
                <span className="badge-accent">{cs.industry}</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {cs.region}
                </span>
              </div>
              <h3 id={`case-${cs.slug}-title`} className="text-navy font-semibold leading-snug">
                {cs.title}
              </h3>
              <p id={`case-${cs.slug}-industry`} className="sr-only">{cs.industry} case study</p>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">{cs.summary}</p>

              <div className="mt-4 pt-4 border-t border-hairline">
                <Quote className="w-4 h-4 text-accent" />
                <p className="mt-2 text-sm text-ink italic leading-relaxed">"{cs.quote}"</p>
                <p className="mt-2 text-xs text-muted">{cs.quoteAuthor}</p>
              </div>

              <Link
                to={`/case-studies#${cs.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent"
              >
                Read case study <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
