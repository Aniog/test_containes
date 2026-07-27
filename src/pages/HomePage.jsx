import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, CircleHelp, Factory, SearchCheck, ShieldCheck, ShipWheel, SquareCheckBig } from 'lucide-react'
import { Link } from 'react-router-dom'
import InquiryForm from '@/components/shared/InquiryForm.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'
import StatsStrip from '@/components/shared/StatsStrip.jsx'
import strkImgConfig from '@/strk-img-config.json'
import {
  caseStudies,
  faqItems,
  primaryCta,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  trustPoints,
} from '@/content/siteContent.js'

const stats = [
  { value: 'China-based', label: 'Local sourcing follow-up and supplier communication support' },
  { value: 'B2B focused', label: 'Built for importers, brands, wholesalers, and procurement teams' },
  { value: 'End-to-end', label: 'Support covering supplier search through shipment coordination' },
  { value: 'Practical', label: 'Clear reporting, visible issues, and actionable next steps' },
]

const trustIcons = [SearchCheck, ShieldCheck, Factory, ShipWheel]
const problemIcons = [CircleHelp, CircleHelp, CircleHelp, CircleHelp, CircleHelp, CircleHelp]

function HomePage() {
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={pageRef}>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center gap-6">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              SSourcing China
            </span>
            <div className="space-y-4">
              <h1 id="home-hero-title" className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="home-hero-desc" className="max-w-2xl text-lg leading-8 text-slate-700">
                SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clearer on-the-ground support in China.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to={primaryCta.to}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                {primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Supplier Verification', 'Quality Inspection', 'Production Follow-Up', 'Shipping Coordination'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                  <SquareCheckBig className="h-5 w-5 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
              <p id="home-hero-visual" className="sr-only">
                China sourcing agent working with factory verification, product quality inspection, supplier communication, and export shipping logistics for global buyers
              </p>
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-strk-bg-id="home-hero-main-8f2a9c"
                data-strk-bg="[home-hero-visual] [home-hero-desc] [home-hero-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/45 to-transparent" />
              <div className="relative flex h-full flex-col justify-end gap-3 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Reliable sourcing support in China
                </p>
                <p className="max-w-md text-base leading-7 text-slate-100">
                  Realistic factory, inspection, and shipping support for practical B2B buying decisions.
                </p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  id: 'home-secondary-factory-d1a2b3',
                  title: 'Factory Verification',
                  desc: 'Review supplier legitimacy and operating conditions before you move forward.',
                },
                {
                  id: 'home-secondary-qc-e4f5g6',
                  title: 'Quality Inspection',
                  desc: 'Check product quality before shipment to reduce costly surprises later.',
                },
              ].map((item) => (
                <article key={item.id} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                  <img
                    alt={item.title}
                    className="h-48 w-full object-cover"
                    data-strk-img-id={item.id}
                    data-strk-img={`[${item.id}-desc] [${item.id}-title] [home-hero-desc] [home-hero-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                  <div className="space-y-2 p-5">
                    <h3 id={`${item.id}-title`} className="text-lg font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p id={`${item.id}-desc`} className="text-sm leading-6 text-slate-700">
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <StatsStrip items={stats} />
      </section>

      <section className="bg-slate-950 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Support across the key sourcing stages"
            description="We help overseas buyers reduce guesswork in supplier selection, production follow-up, quality control, and shipment readiness."
            tone="dark"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.summary}</p>
                <ul className="mt-5 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                      <SquareCheckBig className="mt-0.5 h-4 w-4 text-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="How It Works"
            title="A clearer sourcing process for overseas buyers"
            description="Our process is designed to keep sourcing practical, documented, and easier to manage from the first brief to shipment readiness."
          />
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products We Source"
            title="Product categories commonly sourced with buyer support"
            description="We support a range of B2B product categories where supplier qualification, production monitoring, and quality clarity matter."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => (
              <article key={category.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{category.note}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span key={example} className="rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Problems We Solve"
              title="Common sourcing issues we help buyers manage"
              description="Many overseas buyers do not need hype. They need better visibility, faster clarification, and practical support on the ground in China."
            />
            <div className="mt-8 grid gap-4">
              {problemsWeSolve.map((problem, index) => {
                const Icon = problemIcons[index]

                return (
                  <div key={problem} className="flex items-start gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <Icon className="mt-0.5 h-5 w-5 text-blue-600" />
                    <p className="text-sm leading-7 text-slate-700">{problem}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Why Buyers Work With Us"
              title="Trust points that matter in B2B sourcing"
              description="The goal is not to overpromise. It is to provide clearer sourcing support that helps buyers make better decisions."
            />
            <div className="mt-8 grid gap-4">
              {trustPoints.map((point, index) => {
                const Icon = trustIcons[index]

                return (
                  <article key={point.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500/15 text-blue-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{point.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Examples of practical sourcing support"
            description="Illustrative examples of the type of sourcing, quality, and shipment coordination support overseas buyers often need."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                  {study.market}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{study.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                  <p><span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}</p>
                  <p><span className="font-semibold text-slate-900">Support:</span> {study.solution}</p>
                  <p><span className="font-semibold text-slate-900">Outcome:</span> {study.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions buyers often ask before starting"
              description="If you are exploring supplier search, verification, inspection, or shipping support, these are common starting questions."
            />
            <div className="mt-8 space-y-4">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
