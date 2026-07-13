import Seo from "@/components/shared/Seo.jsx"
import PageHero from "@/components/shared/PageHero.jsx"
import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import FAQ from "@/components/shared/FAQ.jsx"
import InquiryForm from "@/components/shared/InquiryForm.jsx"
import CtaBanner from "@/components/shared/CtaBanner.jsx"
import { howItWorksSteps } from "@/data/howItWorks.js"
import { faqs } from "@/data/faq.js"

export default function HowItWorks() {
  return (
    <>
      <Seo
        title="How It Works | China Sourcing Process | SSourcing China"
        description="A clear 6-step China sourcing process: briefing, supplier search, factory audit, sampling, production with AQL inspections, and shipping."
      />
      <PageHero
        eyebrow="How it works"
        title="A clear 6-step process, from brief to shipment"
        description="A typical first engagement takes 10–14 weeks end to end, depending on product complexity, tooling, and how aggressive your timeline is. The exact scope is agreed up front."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {howItWorksSteps.map((step) => (
            <article key={step.id} className="card p-6 md:p-7 h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-800 font-bold text-sm tracking-wider">
                  Step {step.number}
                </span>
                <span className="h-px flex-1 bg-slate-200" />
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  {step.duration}
                </span>
              </div>
              <h3 className="h-card">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-slate-200 pt-4">
                {step.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-800 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeader
          eyebrow="What we need from you"
          title="Three things that make the process smoother"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-4xl mx-auto">
          {[
            { t: "A clear product brief", d: "Product description, key specs, materials, target price, and any reference photos or competitor products you can share." },
            { t: "Realistic targets", d: "An honest target quantity, target price, and timeline. We can stress-test these against what is achievable in China." },
            { t: "Decisions on time", d: "Timely sign-off on shortlisted suppliers, pre-production samples, and inspection reports. Delays on your side push the schedule out." },
          ].map((x) => (
            <div key={x.t} className="card p-6 text-center">
              <h3 className="h-card">{x.t}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Start your project</p>
            <h2 className="h-section">Ready to brief us on your project?</h2>
            <p className="body-base mt-4">
              The fastest way to start is to send a short brief using the form
              on this page. A sourcing specialist will come back with a written
              sourcing plan and a transparent quote within one business day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm sourcePageHint="/how-it-works" />
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeader
          eyebrow="Process FAQ"
          title="Common questions about the sourcing process"
          align="center"
        />
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs.slice(2, 8)} />
        </div>
      </Section>

      <CtaBanner
        eyebrow="A 20-minute call is usually enough"
        title="Talk through your project with a sourcing specialist."
        description="Bring a product description and a rough timeline. We will tell you honestly whether China is the right place to source it and what to budget."
        primaryTo="/contact"
        primaryLabel="Get a Free Sourcing Quote"
        secondaryTo="/services"
        secondaryLabel="See Services"
      />
    </>
  )
}
