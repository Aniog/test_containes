import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import PageHeader from "@/components/site/PageHeader";
import StrkImage from "@/components/site/StrkImage";
import ContactStrip from "@/components/site/ContactStrip";
import { caseStudies } from "@/data/site";

const CaseStudies = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader
        eyebrow="Case studies"
        title="Real projects. Real numbers. Real factories."
        subtitle="Four representative engagements across the categories we work in most. Names are anonymized where our clients prefer — every figure is real."
        primaryCtaLabel="Get a Free Sourcing Quote"
        primaryCtaTo="/contact"
      />

      <section className="section bg-white">
        <div className="container-x space-y-10">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              id={`case-${cs.id}`}
              className="card overflow-hidden"
            >
              <div className="grid items-stretch md:grid-cols-12">
                <div className="md:col-span-5">
                  <StrkImage
                    imgId={`case-${cs.id}-detail-img`}
                    query={`[case-${cs.id}-desc] [case-${cs.id}-title]`}
                    ratio="3x2"
                    width={900}
                    alt={cs.title}
                    imgClassName="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:col-span-7 md:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-accent-50 px-2.5 py-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent-600">
                      {cs.industry}
                    </span>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                      Anonymized client
                    </span>
                  </div>
                  <h2
                    id={`case-${cs.id}-title`}
                    className="mt-3 text-[24px] font-semibold leading-snug text-ink-900 md:text-[28px]"
                  >
                    {cs.title}
                  </h2>
                  <p
                    id={`case-${cs.id}-desc`}
                    className="mt-3 text-[15.5px] leading-relaxed text-ink-600"
                  >
                    {cs.summary}
                  </p>

                  <dl className="mt-5 grid grid-cols-3 gap-4 rounded-lg border border-surface-200 bg-surface-50 p-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-ink-500">
                          {m.label}
                        </dt>
                        <dd className="mt-1 text-[20px] font-bold text-ink-900">
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-5 space-y-2 text-[14.5px] text-ink-700">
                    {[
                      "Verified the real factory behind an existing trading-company supplier",
                      "Re-negotiated the FOB price against an apples-to-apples specification",
                      "Ran pre-shipment inspection with written AQL report and photos",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-surface-50">
        <div className="container-x">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="eyebrow">What our clients typically say</span>
              <h2
                id="cases-testimonial-title"
                className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-ink-900 md:text-[36px]"
              >
                "We finally feel like we have a team on the ground in China."
              </h2>
              <p
                id="cases-testimonial-subtitle"
                className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-600"
              >
                Most of our new work still comes from existing clients. That
                is the metric we care about.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="btn btn-primary">
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="card p-6">
                <p className="text-[15.5px] leading-relaxed text-ink-700">
                  "We had two bad experiences before SSourcing. The
                  difference is they actually call us when something looks
                  wrong. We now run all our workwear and hi-vis program
                  through them — 80,000 pieces a quarter, and our defect
                  rate dropped from 4% to under half a percent."
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-surface-200 pt-4">
                  <div className="h-10 w-10 rounded-full bg-surface-100" />
                  <div>
                    <p className="text-[14px] font-semibold text-ink-900">
                      Operations Director
                    </p>
                    <p className="text-[12.5px] text-ink-500">
                      Industrial apparel brand · Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip
        title="Want to see what your project could look like?"
        subtitle="Send us a brief and we will share a written shortlist of factories, a price range and a realistic timeline."
      />
    </div>
  );
};

export default CaseStudies;
