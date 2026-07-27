import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Container from '../components/site/Container.jsx'
import SectionHeader from '../components/site/SectionHeader.jsx'

const steps = [
  ['1', 'Send requirements', 'Share product photos, specifications, target quantity, market requirements, and any current supplier information.'],
  ['2', 'Project assessment', 'We review feasibility, sourcing route, required checks, likely supplier types, and what information is still missing.'],
  ['3', 'Supplier search', 'Factories or suppliers are compared by product fit, communication quality, export experience, pricing structure, and order suitability.'],
  ['4', 'Verification and samples', 'We coordinate document checks, factory verification when needed, samples, revisions, and buyer feedback.'],
  ['5', 'Order follow-up', 'During production, we track milestones, confirm packaging, arrange inspections, and help resolve practical issues.'],
  ['6', 'Shipping coordination', 'Before shipment, we help align carton data, shipping marks, documents, forwarder requirements, and handover timing.'],
]

const HowItWorks = () => (
  <>
    <section className="bg-slate-50 py-20 text-slate-900 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title="A clear sourcing workflow from inquiry to shipment"
          description="SSourcing China keeps the process structured so overseas buyers can compare suppliers, control quality, and move orders forward with fewer surprises."
          align="center"
        />
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
          <img
            alt="China sourcing workflow including supplier verification quality inspection and shipping"
            className="h-72 w-full rounded-2xl object-cover md:h-96"
            data-strk-img-id="workflow-factory-shipping-img-f5e70c"
            data-strk-img="[workflow-image-caption] [workflow-heading]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1300"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <p id="workflow-image-caption" className="px-4 py-4 text-sm leading-6 text-slate-600">
            From sourcing and verification to production follow-up, inspection, and shipping coordination.
          </p>
          <span id="workflow-heading" className="sr-only">China sourcing agent workflow</span>
        </div>
      </Container>
    </section>

    <section className="bg-white py-16 text-slate-900 md:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, text]) => (
            <article key={number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-lg font-semibold text-white">{number}</span>
                <ArrowRight className="h-5 w-5 text-slate-300" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-brand-navy">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section className="bg-brand-navy py-16 text-white md:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {['Clear scope before supplier outreach', 'Documented updates during production', 'Actionable QC and shipping follow-up'].map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-white/15 bg-white/10 p-5 text-sm font-semibold text-white">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-amber" />
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  </>
)

export default HowItWorks
