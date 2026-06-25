import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/home/SectionHeading'
import { processSteps } from '@/lib/pageData'

export default function HowItWorks() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="A transparent sourcing process for global buyers"
            text="Each project starts with a practical brief and continues through supplier evaluation, quotation comparison, sample coordination, production follow-up, quality checks, and shipping handover when required."
          />
        </div>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <article key={step.step} className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm md:grid-cols-[120px_1fr] md:p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-700">{step.step}</div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-950">{step.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-700">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-bold text-white">Ready to discuss a sourcing project?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">A clear product brief helps us respond with useful next steps and realistic service suggestions.</p>
            <Link to="/contact#inquiry" className="mt-6 inline-flex items-center rounded-full bg-blue-700 px-6 py-3 text-sm font-bold text-white hover:bg-blue-600">
              Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
