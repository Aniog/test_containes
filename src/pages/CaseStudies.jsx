import { MapPin, PackageCheck, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import CTA from "@/components/shared/CTA";
import { CASES } from "@/data/site";

export default function CaseStudies() {
  return (
    <>
      <section className="border-b border-ink-200 bg-ink-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case studies"
            title="Recent client engagements, anonymised for confidentiality"
            description="Each story shows the original problem, what we did about it, and the outcome. Numbers are project-specific and shared with client permission."
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                  <span className="inline-flex items-center gap-1 text-ink-500">
                    <PackageCheck className="h-3.5 w-3.5" />
                    {c.volume}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-brand-900">
                  {c.title}
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink-600">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      Challenge
                    </h3>
                    <p className="mt-1.5">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      Approach
                    </h3>
                    <p className="mt-1.5">{c.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                      Outcome
                    </h3>
                    <ul className="mt-2 space-y-2">
                      {c.outcome.map((o) => (
                        <li key={o} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Across categories"
            title="What our client base looks like"
            description="We work with importers, brands, and distributors. Most clients stay with us for 3+ years."
          />

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Stat label="Repeat clients" value="78%" />
            <Stat label="Avg. years per client" value="3.4" />
            <Stat label="Avg. MOQ" value="500–5,000" />
            <Stat label="Top destinations" value="US, EU, AU" />
          </dl>
        </div>
      </section>

      <CTA
        title="Curious whether we can do the same for you?"
        description="Send a brief description of your product and target market. We'll tell you what we can do and what it would cost."
        primary={{ to: "/contact", label: "Get a Free Sourcing Quote" }}
        secondary={{ to: "/services", label: "See services" }}
      />
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-6 text-center">
      <dt className="text-xs uppercase tracking-wider text-ink-500">{label}</dt>
      <dd className="mt-2 text-2xl font-semibold text-brand-900">{value}</dd>
    </div>
  );
}