import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import { ArrowRight, Quote } from "lucide-react";
import strkImgConfig from "@/strk-img-config.json";
import { CASE_STUDIES } from "@/lib/site-data";
import PageHero from "@/components/site/PageHero";
import SectionHeader from "@/components/site/SectionHeader";

const TESTIMONIALS = [
  {
    quote:
      "SSourcing handled our entire kitchen range — supplier audit, packaging, QC and shipping. Defect rate dropped from over 6% to under 2% and we now have a single point of contact in China.",
    name: "Anna L.",
    role: "Procurement Manager, Home goods retailer",
    country: "Germany",
  },
  {
    quote:
      "They gave us realistic feedback, including which factories not to use. That honesty saved us from a bad supplier on our first OEM project.",
    name: "Marcus B.",
    role: "Founder, D2C fitness brand",
    country: "United States",
  },
  {
    quote:
      "Inspection reports were detailed and on time. We had clear photos of every defect with classification, which made claim resolution simple.",
    name: "Olivia R.",
    role: "Operations Lead, Lifestyle brand",
    country: "Australia",
  },
];

export default function CaseStudies() {
  const containerRef = useRef(null);
  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Case Studies"
        title="Real sourcing programs, measurable results"
        description="A selection of projects we have managed for buyers across different industries and countries. Names and identifying details are anonymized on request."
        titleId="cases-page-title"
        descId="cases-page-desc"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="cases-list">
          <div className="grid grid-cols-1 gap-8">
            {CASE_STUDIES.map((c, idx) => (
              <article
                key={c.id}
                className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden border border-slate-200 bg-white hover:shadow-md transition"
              >
                <div
                  className={`aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100 ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    alt={c.title}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`page-${c.imgId}`}
                    data-strk-img={`[${c.descId}-page] [${c.titleId}-page] case study sourcing china`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  />
                </div>
                <div className="p-7 md:p-9 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center rounded-full bg-navy-50 text-navy-700 font-semibold px-2.5 py-1">
                      {c.industry}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 font-medium px-2.5 py-1">
                      Client in {c.country}
                    </span>
                  </div>
                  <h2
                    id={`${c.titleId}-page`}
                    className="mt-4 text-xl md:text-2xl font-bold text-navy-900"
                  >
                    {c.title}
                  </h2>
                  <p
                    id={`${c.descId}-page`}
                    className="mt-3 text-slate-600 leading-relaxed flex-1"
                  >
                    {c.summary}
                  </p>
                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-200 pt-5">
                    {c.metrics.map((m) => (
                      <div key={m.k}>
                        <dt className="text-xs text-slate-500">{m.k}</dt>
                        <dd className="mt-1 text-lg md:text-xl font-bold text-navy-700">
                          {m.v}
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

      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What clients say"
            title="Feedback from buyers we work with"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-7 flex flex-col"
              >
                <Quote className="h-6 w-6 text-amber-600" />
                <blockquote className="mt-4 text-slate-700 leading-relaxed flex-1">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-slate-200 pt-4">
                  <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t.role} · {t.country}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-navy-900 text-white px-6 py-10 md:px-12 md:py-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Could your sourcing program look like this?
            </h2>
            <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
              Share a few details about your project and we will reply with a
              realistic plan and indicative pricing.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3.5 transition"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
