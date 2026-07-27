import { Link } from "react-router-dom"
import { ArrowRight, Check, Clock } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import Button from "@/components/ui/Button"
import PageHero from "@/components/shared/PageHero"
import { PROCESS_STEPS } from "@/data/site"

const TIMING = [
  { stage: "Step 1-2", label: "Sourcing & shortlist", duration: "5-7 days" },
  { stage: "Step 3", label: "Sampling & negotiation", duration: "2-4 weeks" },
  { stage: "Step 4", label: "Factory verification", duration: "3-5 days" },
  { stage: "Step 5", label: "Production & QC", duration: "30-45 days" },
  { stage: "Step 6", label: "Shipping & delivery", duration: "20-40 days" },
]

const HowItWorks = () => {
  return (
    <>
      <PageHero
        id="how"
        eyebrow="How it works"
        title="A clear 6-step process, with a deliverable at every step"
        subtitle="From initial brief to delivered goods, you always know what stage we are at, who is responsible, and what the next milestone is."
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="uppercase tracking-wider text-xs font-semibold text-[#D62828] mb-3">
                  The 6-step process
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight tracking-tight">
                  Brief to delivery in roughly 10-14 weeks
                </h2>
                <p className="mt-4 text-base text-ink-subtle leading-relaxed">
                  Timelines below assume a typical product with one round of
                  sample revisions. Highly customized or first-of-kind products
                  may take longer, and we will tell you upfront.
                </p>
                <Button as={Link} to="/contact" variant="primary" size="md" className="mt-6">
                  Start your project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ol className="space-y-5">
                {PROCESS_STEPS.map((step) => (
                  <li
                    key={step.n}
                    id={`how-step-${step.n}`}
                    className="relative rounded-xl border border-line bg-white p-6 md:p-7"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#0B2545] text-white flex items-center justify-center font-bold text-base">
                        {step.n}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-ink">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm md:text-base text-ink-subtle leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-[#F4F6F9]">
        <Container>
          <SectionHeader
            eyebrow="Typical timeline"
            title="Roughly how long each phase takes"
            subtitle="Use this as a planning reference. We will give you a tailored timeline in our first reply."
            align="center"
            className="mb-10 md:mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl bg-white border border-line overflow-hidden">
              {TIMING.map((t, i) => (
                <div
                  key={t.stage}
                  className={`grid grid-cols-12 items-center gap-4 px-5 md:px-7 py-4 ${
                    i !== TIMING.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <div className="col-span-4 md:col-span-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
                      {t.stage}
                    </span>
                  </div>
                  <div className="col-span-5 md:col-span-7">
                    <span className="text-sm md:text-base font-semibold text-ink">
                      {t.label}
                    </span>
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B2545]">
                      <Clock className="w-3.5 h-3.5" />
                      {t.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Engagement models */}
      <section className="py-16 md:py-24 bg-white">
        <Container>
          <SectionHeader
            eyebrow="Engagement models"
            title="Pick the model that fits your project"
            subtitle="We work in three ways, depending on how much of the process you want to own."
            align="center"
            className="mb-10 md:mb-14"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Project-based",
                best: "Best for first-time importers and one-off orders",
                items: [
                  "Defined brief, defined fee",
                  "End-to-end management",
                  "Fixed deliverables per phase",
                ],
              },
              {
                title: "Retainer",
                best: "Best for brands with multiple ongoing orders",
                items: [
                  "Monthly minimum commitment",
                  "Reserved QC capacity",
                  "Priority response within 4 hours",
                ],
              },
              {
                title: "Pay-as-you-go",
                best: "Best for occasional inspections and ad-hoc work",
                items: [
                  "Book any service individually",
                  "Per-man-day or per-inspection pricing",
                  "No long-term commitment",
                ],
              },
            ].map((m, i) => (
              <article
                key={m.title}
                className={`rounded-xl p-6 md:p-7 border ${
                  i === 0
                    ? "bg-[#0B2545] text-white border-[#0B2545]"
                    : "bg-white border-line"
                }`}
              >
                <h3
                  className={`text-xl font-bold ${
                    i === 0 ? "text-white" : "text-ink"
                  }`}
                >
                  {m.title}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    i === 0 ? "text-white/80" : "text-ink-subtle"
                  }`}
                >
                  {m.best}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {m.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          i === 0 ? "text-[#C9A227]" : "text-[#0B2545]"
                        }`}
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-sm ${
                          i === 0 ? "text-white/85" : "text-ink-subtle"
                        }`}
                      >
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default HowItWorks
