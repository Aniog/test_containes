import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import PageHero from "@/components/sections/PageHero"
import { Button } from "@/components/ui/Button"
import CtaBand from "@/components/sections/CtaBand"
import { PROCESS_STEPS } from "@/lib/content"

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A transparent process from first request to final delivery"
        description="Every order follows the same clear, documented path. You always know what is happening, what comes next, and what we need from you."
        ctaLabel="Start your sourcing project"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <ol className="relative space-y-10 before:absolute before:left-[27px] before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-border-soft md:before:left-[31px]">
            {PROCESS_STEPS.map((step) => (
              <li key={step.step} className="relative flex gap-6">
                <span className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-page bg-brand text-lg font-extrabold text-white">
                  {step.step}
                </span>
                <div className="pt-1.5">
                  <h2 className="text-xl font-bold text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate-body">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
                What you can expect
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
                Working with us, in practice
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-body">
                We act as your local team in China. You keep full control of
                decisions — we provide the information, verification, and
                coordination to make those decisions with confidence.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "One dedicated point of contact for your project",
                  "All reports and quotes in clear English",
                  "You approve samples, suppliers, and shipments — never us",
                  "Transparent fees with no hidden factory commissions",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-body">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button as={Link} to="/contact" size="lg">
                  Get a Free Sourcing Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border-soft bg-page p-8">
              <h3 className="text-lg font-bold text-ink">
                Typical timeline
              </h3>
              <div className="mt-6 space-y-5">
                {TIMELINE.map((t) => (
                  <div
                    key={t.phase}
                    className="flex items-start justify-between gap-4 border-b border-border-soft pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-semibold text-ink">{t.phase}</p>
                      <p className="text-sm text-muted">{t.detail}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-brand">
                      {t.duration}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted">
                Timelines vary by product complexity, sample rounds, and
                production volume. These are typical ranges, not guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

const TIMELINE = [
  { phase: "Requirements & sourcing", detail: "Brief, supplier search, shortlist", duration: "3–7 days" },
  { phase: "Factory verification", detail: "On-site audit and documentation", duration: "3–5 days" },
  { phase: "Samples & confirmation", detail: "Sample production, evaluation, approval", duration: "1–3 weeks" },
  { phase: "Production", detail: "Mass production with follow-up", duration: "3–8 weeks" },
  { phase: "Inspection & shipping", detail: "PSI, consolidation, freight, customs", duration: "2–6 weeks" },
]
