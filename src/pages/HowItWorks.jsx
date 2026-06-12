import PageHeader from '@/components/sections/PageHeader'
import SourcingProcess from '@/components/sections/SourcingProcess'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'
import { FileText, MessageSquare, ClipboardList, Truck } from 'lucide-react'

const TIMELINE = [
  {
    icon: FileText,
    title: 'Day 0 — Brief received',
    desc: 'You send specs, target price, MOQ and any reference samples. We confirm scope and assign a project lead.',
  },
  {
    icon: MessageSquare,
    title: 'Day 1–10 — Sourcing & quotes',
    desc: 'Shortlist of 3–5 vetted factories with quotes, MOQs, lead times and capability profiles.',
  },
  {
    icon: ClipboardList,
    title: 'Day 10–25 — Samples & approval',
    desc: 'Sample requests, revisions, photo & video reviews, customer approval, and tooling kick-off if required.',
  },
  {
    icon: Truck,
    title: 'Day 25 onwards — Production & shipping',
    desc: 'Production follow-up, DUPRO inspections, pre-shipment AQL inspection, then shipping coordination.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <PageHeader
        kicker="How it works"
        title="A clear, repeatable sourcing workflow"
        subtitle="The same process for every order — so you always know what's happening, who's responsible, and what to expect next."
      />

      <SourcingProcess kicker="Step by step" title="Our 7-step process, in detail" />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">Typical timeline</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              From brief to shipped goods
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Most stock-or-light-customization orders fit the schedule below. Custom tooling and
              regulated categories add weeks for sampling and certification.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t) => {
              const Icon = t.icon
              return (
                <article
                  key={t.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <FAQ kicker="Process FAQ" title="Common questions about how we work" />
      <CTASection />
    </>
  )
}
