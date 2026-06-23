import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import { processSteps } from '../data/siteContent.js'

export default function HowItWorks() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How it works" title="From product brief to shipment handover" description="Our process keeps requirements, supplier communication, inspection, and shipping details organized for overseas purchasing teams." centered />
        </div>
      </section>
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <article key={step.step} className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[5rem_1fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-lg font-bold text-white">{step.step}</div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-950">{step.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-blue-700 p-8 text-white shadow-lg">
            <h2 className="text-2xl font-bold">Ready to discuss your sourcing project?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-50">A useful quote starts with a clear product brief, target quantity, market requirements, and timeline.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-50">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
