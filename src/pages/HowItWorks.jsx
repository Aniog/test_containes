import { ArrowDown, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import { processSteps } from '../data/siteContent.js'

const HowItWorks = () => (
  <main className="bg-white text-slate-950">
    <PageHero
      eyebrow="How it works"
      title="A structured sourcing process with clear checkpoints"
      description="From your first sourcing brief to inspection and export handover, we keep each step documented so your team knows what has been checked and what still needs a decision."
    />

    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {processSteps.map((step, index) => (
            <div key={step.step}>
              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-start">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-lg font-bold text-white">
                    {step.step}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-950">{step.title}</h2>
                    <p className="mt-3 text-base leading-8 text-slate-600">{step.description}</p>
                  </div>
                </div>
              </article>
              {index < processSteps.length - 1 && (
                <div className="flex justify-center py-4 text-blue-700">
                  <ArrowDown className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">What you receive during the process</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {['Supplier comparison notes', 'Factory verification findings', 'Inspection photos and reports', 'Shipping handover coordination'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
              <p className="mt-3 text-sm font-semibold leading-6 text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
)

export default HowItWorks
