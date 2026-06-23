import { ArrowRight, CheckCircle2 } from 'lucide-react'
import CTASection from '../components/site/CTASection'
import PageHero from '../components/site/PageHero'
import SectionHeader from '../components/site/SectionHeader'
import { processSteps } from '../data/siteContent'

const HowItWorks = () => (
  <main className="bg-white text-slate-900">
    <PageHero
      eyebrow="How it works"
      title="A structured sourcing process from brief to shipment"
      description="SSourcing China keeps the project practical: understand requirements, screen suppliers, compare options, follow production, check quality, and coordinate shipment handover."
    />
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {processSteps.map((step, index) => (
            <article className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm md:grid-cols-[120px_1fr_40px] md:items-center" key={step.step}>
              <div className="text-4xl font-bold text-teal-700">{step.step}</div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-950">{step.title}</h2>
                <p className="mt-2 leading-7 text-slate-700">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && <ArrowRight className="hidden h-6 w-6 text-slate-300 md:block" />}
            </article>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200">
          <img
            alt="Production follow up and quality checklist"
            className="h-[440px] w-full object-cover"
            data-strk-img-id="process-qc-checklist-c75e10"
            data-strk-img="[process-visual-desc] [process-visual-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <h3 id="process-visual-title" className="sr-only">Production follow up and quality checklist</h3>
          <p id="process-visual-desc" className="sr-only">Quality control checklist, production follow-up, factory communication, and inspection report</p>
        </div>
        <div>
          <SectionHeader
            eyebrow="What you receive"
            title="Clear updates for practical decisions"
            description="Instead of vague supplier promises, you get organized communication, comparison notes, inspection findings, and next-step recommendations."
          />
          <div className="mt-8 grid gap-3">
            {['Supplier shortlist and comparison notes', 'Sample and quotation coordination', 'Production milestone updates', 'Inspection photos and practical findings'].map((item) => (
              <p className="flex items-center gap-3 rounded-2xl bg-white p-4 font-medium text-slate-800 ring-1 ring-slate-200" key={item}>
                <CheckCircle2 className="h-5 w-5 flex-none text-teal-700" /> {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CTASection />
  </main>
)

export default HowItWorks
