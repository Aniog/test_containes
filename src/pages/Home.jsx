import { Link } from 'react-router-dom'
import { CheckCircle2, ClipboardCheck, Factory, PackageCheck, Search, ShieldCheck, Ship, TrendingUp } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'
import InquiryForm from '../components/InquiryForm.jsx'
import VisualPanel from '../components/VisualPanel.jsx'
import { caseStudies, faqs, problems, processSteps, products, services, trustPoints } from '../content.js'

const serviceIcons = [Search, ShieldCheck, ClipboardCheck, TrendingUp, Ship, Factory]

const Home = () => (
  <>
    <section className="bg-brand-cloud text-brand-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p id="hero-eyebrow" className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">China-based sourcing agent</p>
          <h1 id="hero-title" className="mt-5 text-4xl font-bold tracking-tight text-brand-navy md:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-brand-slate">
            SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical local support.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-brand-blue px-7 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-navy">
              Get a Free Sourcing Quote
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-brand-steel bg-white px-7 py-4 text-sm font-semibold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue">
              View sourcing services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {['Supplier screening', 'QC inspection', 'Shipping coordination'].map((item) => (
              <div key={item} className="rounded-2xl border border-brand-steel bg-white p-4 text-sm font-semibold text-brand-navy shadow-sm">
                <CheckCircle2 className="mb-3 h-5 w-5 text-brand-blue" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft">
            <VisualPanel
              id="hero-factory-qc-shipping-4f8a1c"
              query="[hero-subtitle] [hero-title] [hero-eyebrow]"
              ratio="4x3"
              width="1000"
              alt="Factory quality inspection and shipping coordination in China"
              className="aspect-[4/3]"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-brand-navy p-5 text-white shadow-soft md:left-auto md:w-80">
            <p className="text-sm font-semibold text-white/80">Practical sourcing workflow</p>
            <p className="mt-2 text-2xl font-bold">Supplier → QC → Shipment</p>
            <p className="mt-2 text-sm leading-6 text-white/70">Clear follow-up for overseas buyers who need visibility before payment and shipping.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Sourcing support from supplier search to shipment handover"
          description="Choose focused support for a single sourcing project or ongoing local coordination for repeat China purchases."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <article key={service.id} className="rounded-2xl border border-brand-steel bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <Icon className="h-8 w-8 text-brand-blue" />
                <h3 id={`service-${service.id}-title`} className="mt-5 text-xl font-bold text-brand-navy">{service.title}</h3>
                <p id={`service-${service.id}-desc`} className="mt-3 text-sm leading-7 text-brand-slate">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>

    <section className="bg-brand-cloud py-16 text-brand-ink lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div className="overflow-hidden rounded-3xl shadow-soft">
          <VisualPanel
            id="process-factory-production-line-91b2e3"
            query="[process-description] [process-title]"
            ratio="3x4"
            width="800"
            alt="Production follow-up and factory workflow in China"
            className="aspect-[3/4]"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="How it works"
            title="A clear sourcing process for overseas buyers"
            description="Every project is different, but we keep the workflow transparent so you can make informed decisions at each step."
          />
          <p id="process-title" className="sr-only">China sourcing process</p>
          <p id="process-description" className="sr-only">Supplier search factory verification samples production quality inspection shipping handover</p>
          <div className="mt-10 grid gap-4">
            {processSteps.map((step) => (
              <div key={step.step} className="grid gap-4 rounded-2xl border border-brand-steel bg-white p-5 shadow-sm sm:grid-cols-[4rem_1fr]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-amber/15 text-lg font-bold text-brand-navy">{step.step}</span>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-slate">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          title="Common categories for China sourcing projects"
          description="We evaluate each project by product complexity, supplier fit, order volume, certification needs, and practical execution risk."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product} className="rounded-2xl border border-brand-steel bg-brand-cloud p-5 text-sm font-semibold text-brand-navy">
              <PackageCheck className="mb-4 h-6 w-6 text-brand-blue" /> {product}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-brand-navy py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">Problems we solve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Reduce sourcing uncertainty before it becomes expensive</h2>
          <div className="mt-8 grid gap-3">
            {problems.map((problem) => (
              <p key={problem} className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 text-sm leading-6 text-white/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-amber" /> {problem}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">Trust points</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Practical checks, transparent updates, and measured advice</h2>
          <div className="mt-8 grid gap-3">
            {trustPoints.map((point) => (
              <p key={point} className="rounded-2xl border border-white/10 bg-white p-4 text-sm font-semibold leading-6 text-brand-navy">
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-brand-cloud py-16 text-brand-ink lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          title="Examples of practical sourcing support"
          description="Representative project situations showing how local follow-up can improve sourcing clarity."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.id} className="rounded-3xl border border-brand-steel bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-brand-blue">{study.industry}</p>
              <h3 id={`case-${study.id}-title`} className="mt-3 text-xl font-bold text-brand-navy">{study.title}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-slate"><strong className="text-brand-ink">Challenge:</strong> {study.challenge}</p>
              <p className="mt-3 text-sm leading-7 text-brand-slate"><strong className="text-brand-ink">Action:</strong> {study.action}</p>
              <p className="mt-3 text-sm leading-7 text-brand-slate"><strong className="text-brand-ink">Result:</strong> {study.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 text-brand-ink lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions from overseas buyers"
            description="Straight answers about our role, inspections, shipping coordination, and sourcing expectations."
          />
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-brand-steel bg-brand-cloud p-5 text-brand-ink">
                <summary className="cursor-pointer text-base font-bold text-brand-navy">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <InquiryForm compact />
      </div>
    </section>
  </>
)

export default Home
