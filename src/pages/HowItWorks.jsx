import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'
import VisualPanel from '../components/VisualPanel.jsx'
import { processSteps } from '../content.js'

const HowItWorks = () => (
  <>
    <section className="bg-brand-cloud py-16 text-brand-ink lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A transparent sourcing process from RFQ to shipment"
          description="We keep communication practical and milestone-based, so overseas buyers understand supplier options, production status, inspection findings, and shipping handover details."
          align="center"
        />
      </div>
    </section>

    <section className="bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <VisualPanel
              id="how-it-works-qc-shipping-7c3f1d"
              query="[how-process-visual-desc] [how-process-title]"
              ratio="3x4"
              width="800"
              alt="China sourcing process with quality inspection and shipping coordination"
              className="aspect-[3/4]"
            />
          </div>
          <p id="how-process-title" className="mt-5 text-xl font-bold text-brand-navy">Supplier search, QC checks, and shipment coordination</p>
          <p id="how-process-visual-desc" className="mt-2 text-sm leading-7 text-brand-slate">A practical China sourcing workflow for overseas buyers from RFQ through factory verification and export handover.</p>
        </div>

        <div className="grid gap-6">
          {processSteps.map((step) => (
            <article key={step.step} className="rounded-3xl border border-brand-steel bg-brand-cloud p-7 shadow-sm">
              <span className="inline-flex rounded-full bg-brand-amber/15 px-4 py-2 text-sm font-bold text-brand-navy">Step {step.step}</span>
              <h2 className="mt-5 text-2xl font-bold text-brand-navy">{step.title}</h2>
              <p className="mt-3 text-base leading-8 text-brand-slate">{step.description}</p>
            </article>
          ))}
          <div className="rounded-3xl bg-brand-navy p-8 text-white">
            <h2 className="text-2xl font-bold">Ready to discuss your sourcing project?</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">Send your product details, estimated quantity, quality requirements, and destination market. We will review the fit and respond with the next practical steps.</p>
            <Link to="/contact" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-mist">
              Get a Free Sourcing Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default HowItWorks
