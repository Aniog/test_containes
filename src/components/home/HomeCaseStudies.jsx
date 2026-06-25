import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage";
import { caseStudies } from "@/data/caseStudies";

export function HomeCaseStudies() {
  const containerRef = useRef(null);
  useStrkImages(containerRef, []);

  const featured = caseStudies.slice(0, 2);

  return (
    <Section id="case-studies" size="default" tone="paper">
      <div ref={containerRef} className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Case studies"
            title="Recent projects across the UK, EU, US and Australia"
            description="A small selection of sourcing projects from the past 18 months. We share results, not slogans."
          />
          <div className="flex-shrink-0">
            <Button to="/case-studies" variant="outline" size="md">
              All case studies
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {featured.map((cs) => (
            <article
              key={cs.id}
              id={`home-case-${cs.slug}`}
              className="flex flex-col h-full rounded-2xl border border-brand-line bg-white overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-mist">
                <StrkImage
                  imgId={`home-case-${cs.slug}-img`}
                  query={`[home-case-${cs.slug}-industry] [home-case-${cs.slug}-title] ${cs.image}`}
                  ratio="16x9"
                  width={1200}
                  alt={cs.title}
                />
              </div>
              <div className="flex flex-col flex-1 p-6 md:p-7">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-brand-teal">
                  <span id={`home-case-${cs.slug}-industry`}>{cs.industry}</span>
                  <span className="text-brand-ink-soft">·</span>
                  <span className="text-brand-ink-muted">{cs.region}</span>
                </div>
                <h3
                  id={`home-case-${cs.slug}-title`}
                  className="mt-3 text-lg md:text-xl font-semibold text-brand-navy leading-snug"
                >
                  {cs.title}
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-brand-ink-muted">
                  {cs.summary}
                </p>
                <ul className="mt-5 grid grid-cols-3 gap-3">
                  {cs.metrics.map((m) => (
                    <li
                      key={m.label}
                      className="rounded-md bg-brand-mist px-3 py-2.5"
                    >
                      <p className="text-sm md:text-base font-semibold text-brand-navy">
                        {m.value}
                      </p>
                      <p className="text-[0.7rem] uppercase tracking-[0.12em] text-brand-ink-muted mt-0.5">
                        {m.label}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    to={`/case-studies#${cs.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-2"
                  >
                    Read full case study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="inline-flex items-center gap-1.5 text-xs text-brand-ink-muted">
                    <Quote className="h-3.5 w-3.5" />
                    {cs.client}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
