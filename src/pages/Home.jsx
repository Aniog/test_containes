import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import InquiryForm from '../components/forms/InquiryForm.jsx'
import ContentCard from '../components/shared/ContentCard.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import SectionShell from '../components/shared/SectionShell.jsx'
import {
  caseStudies,
  faqItems,
  homeStats,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  trustPoints,
} from '../siteContent.js'

const Home = () => {
  return (
    <main>
      <section className="border-b border-surface-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              China-based sourcing support for overseas buyers
            </p>
            <h1 id="home-hero-title" className="mt-4 text-4xl font-semibold tracking-tight text-brand-navy md:text-5xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-description" className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              SSourcing China helps overseas buyers find more reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clearer communication from China.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-surface-border bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
              >
                See How It Works
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {homeStats.map((item) => (
                <div key={item.value} className="rounded-2xl border border-surface-border bg-surface-canvas p-4">
                  <p className="text-lg font-semibold text-brand-navy">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div
              className="min-h-[260px] rounded-3xl border border-surface-border bg-surface-muted bg-cover bg-center shadow-soft md:col-span-2"
              data-strk-bg-id="home-hero-visual-factory-8f2a9c"
              data-strk-bg="[home-hero-description] [home-hero-title]"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
            />
            <ContentCard>
              <p id="hero-card-one-title" className="text-lg font-semibold text-brand-navy">Supplier verification before commitment</p>
              <p id="hero-card-one-desc" className="mt-3 text-sm leading-6 text-slate-600">
                Reduce avoidable sourcing risk with clearer checks on supplier background, manufacturing signals, and communication quality.
              </p>
            </ContentCard>
            <ContentCard>
              <p id="hero-card-two-title" className="text-lg font-semibold text-brand-navy">Quality follow-up before shipment</p>
              <p id="hero-card-two-desc" className="mt-3 text-sm leading-6 text-slate-600">
                Keep more visibility during production, inspection, and shipment readiness so fewer issues appear at the last minute.
              </p>
            </ContentCard>
          </div>
        </div>
      </section>

      <SectionShell>
        <SectionHeading
          eyebrow="Services"
          title="Core sourcing services for importers, brands, wholesalers, and procurement teams"
          description="We support the parts of the sourcing process where buyers often need extra local visibility, supplier checks, and practical coordination in China."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <ContentCard key={service.title} className="h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-brand-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-blue" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </ContentCard>
            )
          })}
        </div>
      </SectionShell>

      <section className="bg-brand-navy text-white">
        <SectionShell className="py-16 md:py-24">
          <SectionHeading
            eyebrow="How it works"
            title="A clear sourcing process with practical checkpoints"
            description="Our role is to help buyers move from initial requirement to supplier validation, production follow-up, and shipment readiness with fewer blind spots."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-3xl border border-slate-700 bg-slate-900/50 p-6">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-300">Step {step.step}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </SectionShell>
      </section>

      <SectionShell>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Products we source"
              title="Selected product categories where sourcing discipline matters"
              description="We support practical product sourcing across common B2B categories where supplier comparison, verification, quality checks, and shipment preparation all affect results."
            />
            <Link to="/products-we-source" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
              Explore product categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {productCategories.map((category, index) => {
              const Icon = category.icon
              const titleId = `home-category-title-${index + 1}`
              const descId = `home-category-desc-${index + 1}`

              return (
                <ContentCard key={category.title} className="relative overflow-hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 id={titleId} className="text-lg font-semibold text-brand-navy">{category.title}</h3>
                      <p id={descId} className="mt-3 text-sm leading-7 text-slate-600">{category.description}</p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <img
                    className="mt-6 h-48 w-full rounded-2xl object-cover"
                    alt={category.title}
                    data-strk-img-id={`home-category-image-${index + 1}-c1d2e3`}
                    data-strk-img={`[${descId}] [${titleId}] [home-hero-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </ContentCard>
              )
            })}
          </div>
        </div>
      </SectionShell>

      <section className="bg-surface-muted">
        <SectionShell>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Problems we solve"
                title="Where overseas buyers often need extra support in China"
                description="Most sourcing problems start with unclear supplier signals, weak follow-up, or limited visibility during production. We help buyers respond earlier and with better information."
              />
              <div className="mt-10 space-y-5">
                {problemsWeSolve.map((problem) => {
                  const Icon = problem.icon
                  return (
                    <ContentCard key={problem.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-navy">{problem.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{problem.description}</p>
                      </div>
                    </ContentCard>
                  )
                })}
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Why buyers choose us"
                title="Trust points that matter in a cross-border sourcing relationship"
                description="The goal is not exaggerated claims. It is better visibility, clearer reporting, and more reliable follow-up where sourcing decisions carry commercial risk."
              />
              <div className="mt-10 space-y-5">
                {trustPoints.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="rounded-3xl border border-surface-border bg-white p-6 shadow-soft">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-brand-navy">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </SectionShell>
      </section>

      <SectionShell>
        <SectionHeading
          eyebrow="Case studies"
          title="Examples of the sourcing situations we support"
          description="These examples show the kinds of practical sourcing and quality challenges that buyers ask us to help with in China."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <ContentCard key={item.title} className="h-full">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">{item.sector}</p>
              <h3 className="mt-4 text-xl font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-4 text-sm font-medium text-brand-navy">Challenge</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.challenge}</p>
              <p className="mt-4 text-sm font-medium text-brand-navy">How we helped</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.solution}</p>
              <p className="mt-4 text-sm font-medium text-brand-navy">Outcome</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.result}</p>
            </ContentCard>
          ))}
        </div>
      </SectionShell>

      <section className="bg-white">
        <SectionShell>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Common questions from overseas buyers"
                description="If you are planning a new sourcing project or need support with an existing supplier, these are the questions we hear most often."
              />
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <ContentCard key={item.question}>
                  <h3 className="text-lg font-semibold text-brand-navy">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </ContentCard>
              ))}
            </div>
          </div>
        </SectionShell>
      </section>

      <section className="bg-surface-muted">
        <SectionShell>
          <InquiryForm />
        </SectionShell>
      </section>
    </main>
  )
}

export default Home
