import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { CASE_STUDIES } from "@/data/site";
import PageHeader from "@/components/ui/PageHeader";
import InquiryForm from "@/components/ui/InquiryForm";
import CtaBanner from "@/components/sections/CtaBanner";

export default function CaseStudies() {
  const ref = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div ref={ref}>
      <PageHeader
        eyebrow="Case studies"
        title="Selected work from the last 12 months"
        description="A few examples of how the process plays out in practice. Client names are kept confidential on request."
      />

      <section className="section">
        <div className="max-w-container mx-auto container-px space-y-8">
          {CASE_STUDIES.map((c) => (
            <article
              key={c.slug}
              id={c.slug}
              className="card overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-4 aspect-[4/3] lg:aspect-auto overflow-hidden bg-brand-surface">
                <img
                  alt={c.title}
                  data-strk-img-id={`cs-detail-${c.slug}-img-3e0b81`}
                  data-strk-img={`[cs-detail-${c.slug}-title] [cs-detail-${c.slug}-industry] [case-studies-page-eyebrow]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-8 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span
                    id={`cs-detail-${c.slug}-industry`}
                    className="font-semibold text-brand-navy uppercase tracking-wide"
                  >
                    {c.industry}
                  </span>
                  <span className="text-brand-slate">·</span>
                  <span className="text-brand-slate">{c.region}</span>
                </div>
                <h2
                  id={`cs-detail-${c.slug}-title`}
                  className="mt-3 text-xl md:text-2xl font-semibold text-brand-ink leading-snug"
                >
                  {c.title}
                </h2>
                <p className="mt-3 text-brand-slate leading-relaxed">
                  {c.summary}
                </p>

                <dl className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-brand-border pt-5">
                  {c.facts.map((f) => (
                    <div key={f.k}>
                      <dt className="text-[11px] uppercase tracking-wide text-brand-slate">
                        {f.k}
                      </dt>
                      <dd className="mt-1 text-base font-semibold text-brand-ink">
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-5 text-sm text-brand-slate leading-relaxed">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
          <span id="case-studies-page-eyebrow" className="sr-only">Case studies</span>
        </div>
      </section>

      <section className="section section-muted">
        <div className="max-w-container mx-auto container-px">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow">Start a project</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-brand-ink tracking-tight">
                Your project could be next
              </h2>
              <p className="mt-4 text-brand-slate leading-relaxed">
                Send a brief. We will reply within one business day.
              </p>
            </div>
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
