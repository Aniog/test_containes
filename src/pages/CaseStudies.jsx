import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/data/content";
import PageHero from "@/components/sections/PageHero";
import InquiryForm from "@/components/sections/InquiryForm";

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Recent work with overseas buyers"
        subtitle="A short read on each project — what the buyer needed, what we did, and the result. Names are kept confidential; details are real."
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Case Studies" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-x space-y-10">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.id} className="card p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge">{cs.industry}</span>
                    <span className="text-xs text-ink-muted">{cs.region}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-ink">
                    {cs.industry} project — {cs.region}
                  </h2>
                  <div className="mt-4 rounded-md bg-surface-muted p-4">
                    <p className="text-xs uppercase tracking-wider font-semibold text-primary mb-1">
                      Outcome
                    </p>
                    <p className="text-sm text-ink leading-relaxed">{cs.result}</p>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-wider font-semibold text-ink-muted mb-1">
                      Situation
                    </p>
                    <p className="text-base text-ink-soft leading-relaxed">{cs.summary}</p>
                  </div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-ink-muted mb-2">
                    Approach
                  </p>
                  <ul className="space-y-2.5">
                    {cs.approach.map((a, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                        <span className="w-5 h-5 rounded-full bg-primary-light text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-surface-muted">
        <div className="container-x">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-ink">Your project could be next</h2>
            <p className="mt-3 text-base text-ink-soft">
              Send us a short description of what you need. We will reply with a clear plan and a transparent quote.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
