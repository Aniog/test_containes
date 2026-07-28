import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import PageHero from "@/components/sections/PageHero.jsx";
import { caseStudies } from "@/data/content.js";

const CaseStudies = () => {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Outcomes from real projects, in numbers that mean something"
        subtitle="A short selection of recent work, with the actual figures our clients saw after we got involved. Industry and client names are kept confidential; everything else is real."
        primaryCta={{ to: "/contact", label: "Start Your Project" }}
        secondaryCta={{ to: "/services", label: "See all services" }}
      />

      <section className="bg-white">
        <div className="container-page section-pad space-y-12">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              className="grid grid-cols-1 gap-8 rounded-2xl border border-ink-200 bg-white p-6 md:p-8 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-600">
                    {cs.industry}
                  </span>
                  <span className="flex items-center gap-1 text-ink-500">
                    <MapPin className="h-3.5 w-3.5" />
                    Buyer based in {cs.location}
                  </span>
                </div>
                <h2
                  id={`cs-page-${cs.id}-title`}
                  className="mt-4 text-2xl md:text-3xl font-bold text-ink-900 tracking-tight leading-tight"
                >
                  {cs.title}
                </h2>
                <p
                  id={`cs-page-${cs.id}-summary`}
                  className="mt-4 text-base text-ink-700 leading-relaxed"
                >
                  {cs.summary}
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="rounded-xl border border-ink-200 bg-ink-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-500">
                    Result
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-ink-900">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-success-600 shrink-0" />
                        <span className="font-medium">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink-50 border-t border-ink-200">
        <div className="container-page section-pad text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-ink-900 tracking-tight">
            Want to see a case study closer to your product?
          </h2>
          <p className="mt-3 text-base text-ink-700 max-w-2xl mx-auto">
            Tell us what you're sourcing. If we have done something similar,
            we will share the relevant detail (numbers, lessons learned,
            factory profile) before you decide whether to work with us.
          </p>
          <Link to="/contact" className="btn-primary mt-6">
            Get a Free Sourcing Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
