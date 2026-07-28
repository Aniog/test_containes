import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { caseStudies } from "@/data/content.js";

const CaseStudiesSection = () => {
  return (
    <section className="bg-white border-b border-ink-200">
      <div className="container-page section-pad">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Case studies</p>
            <h2
              id="cases-title"
              className="mt-3 text-3xl md:text-4xl font-bold text-ink-900 tracking-tight"
            >
              Real outcomes from real buyers, in their own numbers
            </h2>
            <p
              id="cases-sub"
              className="mt-4 text-base text-ink-700 leading-relaxed"
            >
              We share the projects where our involvement changed the result —
              shorter lead times, lower defect rates, cleaner launches.
            </p>
          </div>
          <Link to="/case-studies" className="btn-secondary">
            All case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {caseStudies.slice(0, 4).map((cs) => (
            <article
              key={cs.id}
              className="card card-hover p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-600">
                  {cs.industry}
                </span>
                <span className="flex items-center gap-1 text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {cs.location}
                </span>
              </div>
              <h3
                id={`case-${cs.id}-title`}
                className="mt-4 text-lg md:text-xl font-semibold text-ink-900 leading-snug"
              >
                {cs.title}
              </h3>
              <p
                id={`case-${cs.id}-summary`}
                className="mt-3 text-sm text-ink-700 leading-relaxed"
              >
                {cs.summary}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-900 border-t border-ink-200 pt-4">
                {cs.results.map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-success-600 shrink-0" />
                    <span className="font-medium">{r}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
