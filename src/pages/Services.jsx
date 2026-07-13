import Seo from "@/components/shared/Seo.jsx"
import PageHero from "@/components/shared/PageHero.jsx"
import Section, { SectionHeader } from "@/components/shared/Section.jsx"
import IconByName from "@/components/shared/IconByName.jsx"
import FAQ from "@/components/shared/FAQ.jsx"
import InquiryForm from "@/components/shared/InquiryForm.jsx"
import CtaBanner from "@/components/shared/CtaBanner.jsx"
import { services } from "@/data/services.js"
import { faqs } from "@/data/faq.js"

export default function Services() {
  return (
    <>
      <Seo
        title="Sourcing Services | Supplier Search, QC & Shipping | SSourcing China"
        description="A complete set of China sourcing services: supplier search, factory audits, sampling, price negotiation, AQL inspections, production follow-up, and shipping."
      />
      <PageHero
        eyebrow="Services"
        title="A complete set of China sourcing services"
        description="You can engage us for one step of the process (for example a single factory audit) or for the full job from brief to delivery. Below is the full menu."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="card p-6 md:p-7 h-full flex flex-col"
            >
              <div className="icon-tile mb-4">
                <IconByName name={service.iconKey} className="w-5 h-5" />
              </div>
              <h3 className="h-card">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                {service.summary}
              </p>
              <ul className="mt-5 space-y-2.5">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-800 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Service scope</p>
            <h2 className="h-section">What an engagement usually looks like</h2>
            <p className="body-base mt-4">
              Most clients start with supplier search and factory verification,
              then add inspections and shipping as the project matures. We send
              a clear, line-item quote for each phase so there are no surprises.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-2.5 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-800 shrink-0" />
                Fixed project fees for supplier search and shortlist
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-800 shrink-0" />
                Per-visit or per-man-day rates for audits and inspections
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-800 shrink-0" />
                Pass-through shipping and freight fees (no markup)
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-800 shrink-0" />
                Optional OEM / private-label programme management
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm sourcePageHint="/services" />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Services FAQ"
          title="Common questions about our services"
          description="A few of the things buyers ask before signing off on a service scope."
          align="center"
        />
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs.slice(0, 6)} />
        </div>
      </Section>

      <CtaBanner
        eyebrow="Not sure which services you need?"
        title="Send us a short brief and we will recommend a scope."
        description="A 20-minute conversation is usually enough to figure out which services you actually need and which you can skip."
        primaryTo="/contact"
        primaryLabel="Get a Free Sourcing Quote"
        secondaryTo="/how-it-works"
        secondaryLabel="See How It Works"
      />
    </>
  )
}
