import CTASection from '@/components/shared/CTASection'
import PageHero from '@/components/shared/PageHero'
import SectionIntro from '@/components/shared/SectionIntro'
import { processSteps, trustPoints } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'
import { CheckCircle2 } from 'lucide-react'

export default function HowItWorksPage() {
  usePageMeta(
    'How It Works | SSourcing China',
    'See the sourcing process SSourcing China uses to help overseas buyers move from inquiry to shipment with clearer supplier and quality control.'
  )

  return (
    <div>
      <PageHero
        eyebrow="How it works"
        title="A structured sourcing process from request to shipment readiness"
        description="We keep the workflow clear so buyers know what happens next, what information is needed, and where local follow-up adds value."
      />
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Process"
            title="Five steps to move sourcing forward with fewer unknowns"
            description="The exact scope depends on your product and order stage, but the process below reflects how many sourcing projects are handled."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Step {item.step}</p>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">What buyers provide</p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
              <li>Product type or sample reference</li>
              <li>Estimated quantity and target price direction</li>
              <li>Target market and compliance considerations</li>
              <li>Current supplier status, if you already have one</li>
              <li>Deadline, shipment timing, or launch plan</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Why the process works</p>
            <div className="mt-6 space-y-4">
              {trustPoints.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700">
                  <CheckCircle2 className="mt-1 h-4 w-4 text-blue-700" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
