import { Link } from 'react-router-dom'
import {
  caseStudies,
  faqItems,
  heroBenefits,
  problemList,
  processSteps,
  productCategories,
  serviceDetails,
  trustPoints,
} from '@/content/siteContent'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'
import InquiryPanel from '@/components/shared/InquiryPanel'
import MetricStrip from '@/components/shared/MetricStrip'
import ProblemList from '@/components/shared/ProblemList'

const metrics = [
  { value: 'China-based', label: 'Local sourcing follow-up for overseas buyers' },
  { value: 'End-to-end', label: 'Support from supplier search to shipment coordination' },
  { value: 'Practical', label: 'Clear updates, risk visibility, and process control' },
  { value: 'B2B', label: 'Designed for importers, brands, distributors, and project teams' },
]

const Home = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="SSourcing China"
        title="China Sourcing Agent for Global Buyers"
        description="SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear local support from China."
        titleId="home-hero-title"
        descriptionId="home-hero-description"
        visualId="home-hero-bg-41af2d"
        visualBadge="Factory verification, quality inspection, and export shipping support"
        visualNote="A practical sourcing workflow for buyers who want reliable supplier communication, better factory visibility, and fewer surprises before shipment."
        chips={heroBenefits}
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'See How It Works', to: '/how-it-works' }}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <MetricStrip items={metrics} />
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Services"
            title="Core sourcing support for international buyers"
            description="Our role is to make supplier decisions, quality checkpoints, production follow-up, and shipment readiness easier to manage from overseas."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {serviceDetails.slice(0, 4).map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Problems we solve"
            title="Common sourcing difficulties for overseas buyers"
            description="The real challenge is usually not finding any supplier in China. It is choosing the right one, keeping quality visible, and making sure execution stays on track."
          />
          <ProblemList items={problemList} />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <SectionHeading
            eyebrow="How it works"
            title="A clear process from sourcing brief to shipment readiness"
            description="We keep each step visible so you can move from supplier search to production follow-up with better control."
            align="center"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  Step {step.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-200">
                  {step.deliverables.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Products we source"
          title="Product categories commonly sourced from China"
          description="We support a range of practical B2B categories. The right supplier search strategy depends on product type, quality expectation, packaging, and quantity."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((category) => (
            <article
              key={category.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                alt={category.title}
                className="h-56 w-full object-cover"
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}] [products-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="space-y-4 p-6">
                <h3 id={category.titleId} className="text-xl font-semibold text-slate-900">
                  {category.title}
                </h3>
                <p id={category.descId} className="text-base leading-7 text-slate-600">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <h2 id="products-section-title" className="sr-only">
          Product categories commonly sourced from China
        </h2>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <SectionHeading
            eyebrow="Trust points"
            title="Built around local execution, clear communication, and practical sourcing control"
            description="Trust is usually created by how a sourcing process is handled. We focus on visibility, coordination, and suitability rather than exaggerated promises."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trustPoints.map((point) => {
              const Icon = point.icon
              return (
                <article
                  key={point.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {point.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Case studies"
            title="Examples of the kinds of sourcing support buyers ask for"
            description="These examples are written to show the practical role of sourcing coordination, verification, and inspection support in real buying situations."
          />

          <div className="grid gap-5">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    {study.sector}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900">
                  {study.title}
                </h3>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                      Challenge
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                      Support
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                      Result
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{study.result}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions buyers often ask before starting"
            description="Straightforward answers to common sourcing, verification, inspection, and shipping coordination questions."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <InquiryPanel />
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Next step
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Discuss your sourcing needs with SSourcing China
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
              If you want a practical sourcing partner in China, we can start with your product brief and expected buying requirements.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
