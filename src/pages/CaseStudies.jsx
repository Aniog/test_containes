import PageHeader from "@/components/shared/PageHeader"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section, Container } from "@/components/ui/Section"
import { CASE_STUDIES } from "@/data/site"
import { Target, Compass, TrendingUp } from "lucide-react"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="How we help buyers source from China"
        description="Real project summaries showing the challenge, our approach, and the outcome — without exaggerated claims."
      />

      <Section className="bg-white">
        <Container>
          <div className="space-y-12">
            {CASE_STUDIES.map((study) => (
              <article
                key={study.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 lg:aspect-auto">
                    <img
                      alt={study.client}
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="1000"
                      src={PLACEHOLDER}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1B6CA8]">
                      {study.industry}
                    </span>
                    <h2 id={study.titleId} className="mt-2 text-2xl font-bold text-[#0B2545]">
                      {study.client}
                    </h2>
                    <p id={study.descId} className="mt-2 text-sm leading-relaxed text-slate-600">
                      {study.summary}
                    </p>

                    <div className="mt-6 space-y-5">
                      <div>
                        <div className="flex items-center gap-2">
                          <Target className="h-5 w-5 text-[#B45309]" />
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Challenge
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Compass className="h-5 w-5 text-[#1B6CA8]" />
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Our Approach
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          {study.approach}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-[#0E7C66]" />
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                            Result
                          </h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="Want results like these for your order?"
        description="Tell us about your product and goals. We'll outline a sourcing plan tailored to your category and timeline."
      />
    </>
  )
}
