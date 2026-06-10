import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Mail, MessageSquare, FileText, Search, ClipboardCheck, PackageCheck } from 'lucide-react'
import PageHero, { CtaBanner } from '@/components/PageHero.jsx'
import SectionHeading from '@/components/SectionHeading.jsx'
import { PROCESS_STEPS } from '@/data/content.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const TOUCHPOINTS = [
  {
    icon: Mail,
    title: 'Day 1 — You send the brief',
    text: 'A short form: product, quantity, must-have specs, timeline, certifications. Photos or reference links are gold.',
  },
  {
    icon: Search,
    title: 'Day 2–3 — We research factories',
    text: 'We contact pre-screened suppliers, request quotes, and compare capabilities, MOQ, and lead time.',
  },
  {
    icon: FileText,
    title: 'Day 3–5 — You receive the shortlist',
    text: 'A side-by-side comparison with 3–5 vetted suppliers, indicative pricing, and our recommendation.',
  },
  {
    icon: MessageSquare,
    title: 'Week 1+ — Sampling and confirmation',
    text: 'You pick finalists, we coordinate samples, consolidate, and ship to you. You confirm before bulk.',
  },
  {
    icon: ClipboardCheck,
    title: 'Production + inspections',
    text: 'We track milestones and arrange the inspections you need at the right production stages.',
  },
  {
    icon: PackageCheck,
    title: 'Shipping and delivery',
    text: 'We coordinate freight, docs, and customs. Your goods arrive at the agreed destination port.',
  },
]

export default function HowItWorks() {
  const ref = useStrkImages()

  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A clear, six-step process from your brief to your port"
        description="Every project follows the same structured workflow. You always know what is happening, what is next, and what we need from you."
      />

      <section ref={ref} className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="The sourcing process"
            title="Six steps, designed to keep you in control"
            description="This is the workflow we use for almost every project — from a small sample run to a recurring production program."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-ink text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                {idx < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-mist">
        <div className="container-page">
          <SectionHeading
            eyebrow="What to expect"
            title="A week-by-week view of a typical first project"
            description="Every product is different, but this is roughly what happens after you send us your first brief."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TOUCHPOINTS.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.title} className="rounded-xl border border-slate-200 bg-white p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-accent-soft text-brand-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-brand-ink">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid gap-8 rounded-2xl bg-brand-ink p-8 text-white md:grid-cols-12 md:gap-10 md:p-12">
            <div className="md:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                What we need from you
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                To give you the best shortlist, share as much as you can
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 md:text-base">
                Photos, drawings, and reference products are extremely helpful. If you have a target unit price, share it — it lets us recommend the right factory cluster and material grade.
              </p>
            </div>
            <ul className="space-y-3 md:col-span-5">
              {[
                'Product description and key specs (materials, dimensions, color, finish)',
                'Estimated annual or per-order quantity',
                'Target unit price (if you have one) and currency',
                'Required certifications (FDA, CE, LFGB, ISO, BSCI, etc.)',
                'Reference photos, drawings, or competitor products',
                'Target delivery date and destination port',
              ].map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-slate-100">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
