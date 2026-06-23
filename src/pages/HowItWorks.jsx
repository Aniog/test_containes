import { ClipboardCheck, Factory, PackageCheck, Search, Ship } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import { processSteps } from '../data/siteContent.js'

const icons = [Search, ClipboardCheck, PackageCheck, Factory, Ship]

export default function HowItWorks() {
  return (
    <main className="bg-brand-surface text-brand-ink">
      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading eyebrow="How it works" title="A practical sourcing process built for overseas buyers" desc="The workflow is designed to turn an initial product brief into supplier options, verified information, quality checks, and coordinated shipment details." /></div></section>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8"><div className="space-y-5">{processSteps.map((step, index) => { const Icon = icons[index]; return <article key={step.step} className="grid gap-5 rounded-3xl border border-brand-border bg-white p-6 shadow-sm md:grid-cols-[90px_1fr]"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-surface text-brand-blue"><Icon className="h-8 w-8" /></div><div><p className="text-sm font-extrabold text-brand-blue">Step {step.step}</p><h2 className="mt-2 text-2xl font-bold text-brand-ink">{step.title}</h2><p className="mt-3 leading-7 text-brand-muted">{step.desc}</p></div></article> })}</div></section>
    </main>
  )
}
