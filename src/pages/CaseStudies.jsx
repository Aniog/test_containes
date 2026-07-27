import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Quote, Check } from "lucide-react";
import { Section, SectionHeader } from "../components/ui/Primitives.jsx";
import CTABanner from "../components/sections/CTABanner.jsx";
import { caseStudies } from "../data/site.js";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

export default function CaseStudies() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!strkImgConfig || Object.keys(strkImgConfig).length === 0) return;
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <>
      <section ref={heroRef} className="bg-navy text-white">
        <div className="container-content py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="kicker text-accent mb-3">Case studies</p>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Real projects, real numbers, real outcomes
            </h1>
            <p className="mt-5 text-lg text-white/80">
              A few representative engagements from our recent work. Each one includes
              the problem, the approach, and the measurable result.
            </p>
            <div className="mt-7">
              <Link to="/contact" className="btn-primary">
                Start your own project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="space-y-10">
          {caseStudies.map((cs, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <article
                key={cs.slug}
                id={cs.slug}
                className="card !p-0 overflow-hidden scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 ${reverse ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                    <img
                      alt={`${cs.industry} case study from ${cs.region}`}
                      data-strk-img-id={`case-${cs.slug}-img-1a2b3c`}
                      data-strk-img={`[case-${cs.slug}-title] [case-${cs.slug}-industry] [case-${cs.slug}-region]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className={`lg:col-span-7 p-6 md:p-8 ${reverse ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 text-xs text-muted mb-3">
                      <span className="badge-accent">{cs.industry}</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {cs.region}
                      </span>
                    </div>
                    <h2
                      id={`case-${cs.slug}-title`}
                      className="text-navy text-2xl font-bold leading-tight"
                    >
                      {cs.title}
                    </h2>
                    <p id={`case-${cs.slug}-industry`} className="sr-only">{cs.industry}</p>
                    <p id={`case-${cs.slug}-region`} className="sr-only">{cs.region}</p>

                    <div className="mt-5 space-y-4">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted font-semibold">Challenge</div>
                        <p className="mt-1 text-ink/80">{cs.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted font-semibold">Approach</div>
                        <p className="mt-1 text-ink/80">{cs.solution}</p>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-widest text-muted font-semibold">Results</div>
                        <ul className="mt-2 space-y-1.5">
                          {cs.results.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-ink/80 text-sm">
                              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={2.5} />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 rounded-md bg-steel border border-hairline p-4">
                      <Quote className="w-4 h-4 text-accent" />
                      <p className="mt-2 text-ink italic">"{cs.quote}"</p>
                      <p className="mt-2 text-xs text-muted">— {cs.quoteAuthor}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="surface-steel">
        <div className="max-w-3xl mx-auto text-center">
          <p className="kicker text-accent mb-3">Want references?</p>
          <h2 className="text-navy text-3xl md:text-4xl font-bold leading-tight">
            We can put you in touch with past clients
          </h2>
          <p className="mt-4 text-lg text-ink/80">
            On request, we'll connect you with a past client in your industry for a
            reference call — once we've had an initial conversation about your project.
          </p>
          <div className="mt-7">
            <Link to="/contact" className="btn-primary">
              Start a project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
