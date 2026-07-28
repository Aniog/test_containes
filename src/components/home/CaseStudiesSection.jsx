import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/content";
import SectionHeader from "@/components/sections/SectionHeader";

export default function CaseStudiesSection() {
  return (
    <section className="section bg-surface-muted">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-12">
          <SectionHeader
            eyebrow="Case Studies"
            title="Recent work with buyers like you"
            subtitle="A short read on what the project looked like, what we did, and the result."
          />
          <Link to="/case-studies" className="btn-ghost self-start md:self-end shrink-0">
            All case studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASE_STUDIES.map((cs, i) => (
            <article
              key={cs.id}
              className="card p-6 md:p-7 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="badge">{cs.industry}</span>
                <span className="text-xs text-ink-muted">{cs.region}</span>
              </div>
              <h3
                id={`cs-${cs.id}-title`}
                className="text-lg font-semibold text-ink mb-2"
              >
                {cs.industry} for {cs.region}
              </h3>
              <p
                id={`cs-${cs.id}-summary`}
                className="text-sm text-ink-soft leading-relaxed mb-4"
              >
                {cs.summary}
              </p>

              <div className="mt-auto">
                <p className="text-xs uppercase tracking-wider font-semibold text-primary mb-2">
                  Result
                </p>
                <p className="text-sm text-ink leading-relaxed">{cs.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
