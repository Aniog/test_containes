import Seo from "@/components/shared/Seo.jsx"
import PageHero from "@/components/shared/PageHero.jsx"
import Section from "@/components/shared/Section.jsx"
import InquiryForm from "@/components/shared/InquiryForm.jsx"
import CtaBanner from "@/components/shared/CtaBanner.jsx"
import { caseStudies } from "@/data/caseStudies.js"

export default function CaseStudies() {
  return (
    <>
      <Seo
        title="Case Studies | China Sourcing Results | SSourcing China"
        description="Real examples of how we have helped overseas buyers find suppliers, run inspections, and ship product from China."
      />
      <PageHero
        eyebrow="Case studies"
        title="What we have helped recent buyers achieve"
        description="Short, specific stories from real engagements. Client names are omitted by request, but the numbers and challenges are accurate."
      />

      <Section>
        <div className="space-y-6">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              className="card p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8"
            >
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="pill">{cs.industry}</span>
                  <span>{cs.region}</span>
                </div>
                <h2 className="h-card mt-3 text-xl md:text-2xl">{cs.title}</h2>
                <div className="mt-5 space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
                      The challenge
                    </h3>
                    <p>{cs.summary}</p>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
                      The outcome
                    </h3>
                    <p>{cs.result}</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {cs.tags.map((t) => (
                    <li key={t} className="pill">{t}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 bg-brand-50 rounded-xl p-5 md:p-6 flex flex-col">
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Key metrics
                </p>
                <div className="mt-4 space-y-4 flex-1">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-2xl md:text-3xl font-bold text-brand-800 tracking-tight">
                        {m.value}
                      </p>
                      <p className="text-xs text-slate-600 leading-tight mt-1">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Your story next?</p>
            <h2 className="h-section">Tell us about your project</h2>
            <p className="body-base mt-4">
              Whether you are placing your first trial order or scaling your
              tenth, we are happy to scope a project with you. The conversation
              starts with a short brief.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm sourcePageHint="/case-studies" />
          </div>
        </div>
      </Section>

      <CtaBanner
        eyebrow="See it in action"
        title="Ready to be our next case study?"
        description="Start with a short brief. We will come back with a sourcing plan, a transparent quote, and a clear next step within one business day."
        primaryTo="/contact"
        primaryLabel="Get a Free Sourcing Quote"
        secondaryTo="/how-it-works"
        secondaryLabel="See How It Works"
      />
    </>
  )
}
