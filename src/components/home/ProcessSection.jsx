import { ArrowRight } from 'lucide-react'
import { processSteps } from '@/data/siteContent'

export default function ProcessSection() {
  return (
    <section id="process" className="bg-machine-950 py-16 text-steel-50 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brass-300">Simple buying process</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-steel-50 md:text-5xl">Find the right metal folder without confusion.</h2>
          </div>
          <p className="text-base leading-7 text-steel-200 md:text-lg">
            A user-friendly product path helps visitors move from interest to inquiry with confidence, whether they need a double folding machine or a sheet metal folder.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-[1.5rem] border border-steel-700 bg-machine-900 p-6 text-steel-50">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-500 text-sm font-bold text-machine-950">0{index + 1}</span>
              <p className="mt-6 text-lg font-semibold leading-7 text-steel-50">{step}</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-brass-500 px-6 py-3 text-sm font-semibold text-machine-950 transition hover:bg-brass-400">
          Start your inquiry <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
