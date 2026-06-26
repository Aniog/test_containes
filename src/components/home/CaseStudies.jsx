import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { CASES } from "@/data/site";

export default function CaseStudies() {
  return (
    <section className="bg-ink-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            eyebrow="Case studies"
            title="Recent projects across categories and continents"
            description="Real client engagements. Numbers reflect the projects described and are shared with client permission."
          />
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:text-accent-800"
          >
            All case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.id}
              className="flex flex-col rounded-2xl border border-ink-200 bg-white p-7"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-accent-50 px-2.5 py-1 font-semibold text-accent-700 ring-1 ring-inset ring-accent-200">
                  {c.industry}
                </span>
                <span className="inline-flex items-center gap-1 text-ink-500">
                  <MapPin className="h-3.5 w-3.5" />
                  {c.region}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                <span className="font-semibold text-brand-900">Challenge: </span>
                {c.challenge}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                <span className="font-semibold text-brand-900">Approach: </span>
                {c.approach}
              </p>
              <ul className="mt-4 space-y-2 border-t border-ink-200 pt-4 text-sm text-ink-700">
                {c.outcome.map((o) => (
                  <li key={o} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}