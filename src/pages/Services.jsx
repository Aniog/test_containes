import { CheckCircle2, ClipboardCheck, Factory, MessageSquareText, Search, ShieldCheck, Ship } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import VisualPanel from '../components/VisualPanel.jsx'
import { services } from '../content.js'

const deliverables = [
  'Supplier shortlist with practical notes',
  'Factory verification summary',
  'Quotation and sample comparison',
  'QC checklist coordination',
  'Production milestone follow-up',
  'Export handover and shipping communication',
]

const icons = [Search, ShieldCheck, ClipboardCheck, Factory, Ship, MessageSquareText]

const Services = () => (
  <>
    <section className="bg-brand-cloud py-16 text-brand-ink lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <p id="services-eyebrow" className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">Services</p>
          <h1 id="services-title" className="mt-4 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">China sourcing services for overseas buyers</h1>
          <p id="services-desc" className="mt-6 text-lg leading-8 text-brand-slate">
            From finding factories to checking quality and preparing shipments, SSourcing China provides local execution support for practical B2B sourcing projects.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-brand-blue px-7 py-4 text-sm font-semibold text-white transition hover:bg-brand-navy">
            Get a Free Sourcing Quote
          </Link>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-soft">
          <VisualPanel
            id="services-factory-qc-desk-2b8d7f"
            query="[services-desc] [services-title] [services-eyebrow]"
            ratio="4x3"
            width="900"
            alt="Factory sourcing and quality control services in China"
            className="aspect-[4/3]"
          />
        </div>
      </div>
    </section>

    <section className="bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="What we do"
          title="Focused services for each sourcing stage"
          description="Use one service for a specific need or combine them into a complete sourcing workflow."
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index]
            return (
              <article key={service.id} className="rounded-3xl border border-brand-steel bg-white p-7 shadow-sm">
                <Icon className="h-9 w-9 text-brand-blue" />
                <h2 className="mt-5 text-xl font-bold text-brand-navy">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>

    <section className="bg-brand-navy py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">Deliverables</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Clear information before decisions</h2>
          <p className="mt-5 text-base leading-8 text-white/75">
            We do not replace buyer decisions. We give you clearer supplier information, quality checkpoints, and execution updates so you can decide with better context.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {deliverables.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 text-sm font-semibold leading-6 text-brand-navy">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-blue" /> {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
)

export default Services
