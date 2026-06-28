import { ArrowRight, BadgeCheck, Boxes, ClipboardCheck, Factory, PackageCheck, ShipWheel, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import InquiryForm from '@/components/forms/InquiryForm'
import SectionIntro from '@/components/shared/SectionIntro'
import {
  caseStudies,
  faqItems,
  primaryCta,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  trustPoints,
} from '@/content/siteContent'

const Home = () => {
  return (
    <div>
      <section className="border-b border-site-border bg-site-surface">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">SSourcing China</p>
            <h1 id="home-hero-title" className="mt-5 text-4xl font-semibold tracking-tight text-site-ink md:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-desc" className="mt-6 max-w-2xl text-lg leading-8 text-site-muted">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical support on the ground in China.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark" to="/contact#inquiry-form">
                {primaryCta}
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-site-border bg-white px-6 py-3 text-sm font-semibold text-site-ink transition hover:bg-site-bg" to="/services">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Supplier verification', icon: ShieldCheck },
                { label: 'Quality inspection', icon: ClipboardCheck },
                { label: 'Shipping coordination', icon: ShipWheel },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="rounded-3xl border border-site-border bg-white p-5 shadow-sm">
                    <Icon className="h-6 w-6 text-brand" />
                    <p className="mt-3 text-sm font-semibold text-site-ink">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="overflow-hidden rounded-[2rem] border border-site-border bg-white shadow-sm">
              <img
                alt="Factory sourcing and supplier verification in China"
                className="h-72 w-full object-cover"
                data-strk-img-id="home-hero-factory-01"
                data-strk-img="[home-hero-desc] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="grid gap-4 p-6 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">What buyers need</p>
                  <p className="mt-3 text-base leading-7 text-site-muted">
                    Clear supplier screening, practical follow-up, and fewer surprises during production and shipment.
                  </p>
                </div>
                <div className="rounded-3xl bg-site-bg p-5">
                  <p className="text-sm font-semibold text-site-ink">Support areas</p>
                  <ul className="mt-3 space-y-3 text-sm text-site-muted">
                    <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-brand" />Factory checks and qualification</li>
                    <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-brand" />Inspection before shipment</li>
                    <li className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-brand" />Production and logistics coordination</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Why SSourcing China</p>
                <p className="mt-4 text-2xl font-semibold tracking-tight text-site-ink">
                  Local execution for international buyers who need clearer sourcing control.
                </p>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-site-border bg-white shadow-sm">
                <img
                  alt="Quality inspection and carton check"
                  className="h-full w-full object-cover"
                  data-strk-img-id="home-qc-card-02"
                  data-strk-img="[home-problems-title] [home-process-title] [home-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow="Services"
            title="Support that covers supplier selection, quality control, and delivery coordination"
            description="We help buyers reduce sourcing uncertainty with practical execution in the areas that most often create delays, quality issues, or supplier risk."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const icons = [Factory, ShieldCheck, ClipboardCheck, Boxes, ShipWheel, PackageCheck]
              const Icon = icons[index]
              return (
                <article key={service.title} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
                  <Icon className="h-8 w-8 text-brand" />
                  <h3 className="mt-5 text-xl font-semibold text-site-ink">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-site-muted">{service.summary}</p>
                  <ul className="mt-5 space-y-3 text-sm text-site-muted">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 h-4 w-4 text-brand" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-site-border bg-site-surface py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionIntro
              eyebrow="How it works"
              title="A sourcing process built to give buyers clearer checkpoints"
              description="From the initial brief to shipment handoff, our process is designed to make supplier evaluation, quality control, and production follow-up easier to manage."
            />
          </div>

          <div>
            <ol className="grid gap-4">
              {processSteps.map((step) => (
                <li key={step.step} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Step {step.step}</p>
                      <h3 id={step.step === '01' ? 'home-process-title' : undefined} className="mt-2 text-xl font-semibold text-site-ink">{step.title}</h3>
                    </div>
                    <ArrowRight className="h-5 w-5 text-brand" />
                  </div>
                  <p className="mt-4 text-base leading-7 text-site-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow="Products we source"
            title="Product categories we commonly support"
            description="Our work often covers practical consumer and industrial categories where supplier fit, consistency, and execution matter more than just finding a low headline price."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productCategories.map((category, index) => (
              <article key={category.title} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">0{index + 1}</div>
                <h3 className="mt-4 text-xl font-semibold text-site-ink">{category.title}</h3>
                <p className="mt-3 text-base leading-7 text-site-muted">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-site-border bg-site-surface py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <SectionIntro
              eyebrow="Problems we solve"
              title="Where overseas buyers usually need local support most"
              description="Many sourcing problems do not start with one major mistake. They build up through unclear verification, limited follow-up, and poor visibility during execution."
            />
            <ul className="mt-8 grid gap-4">
              {problemsWeSolve.map((problem, index) => (
                <li key={problem} className="rounded-[2rem] border border-site-border bg-white p-5 text-base leading-7 text-site-ink shadow-sm">
                  <span id={index === 0 ? 'home-problems-title' : undefined} className="font-semibold text-brand">{String(index + 1).padStart(2, '0')}</span>
                  <span className="ml-3 text-site-muted">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2rem] border border-site-border bg-white shadow-sm">
              <img
                alt="Container loading and shipping coordination"
                className="h-80 w-full object-cover"
                data-strk-img-id="home-shipping-card-03"
                data-strk-img="[home-trust-title] [home-hero-title] [home-hero-desc]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Trust points</p>
              <h3 id="home-trust-title" className="mt-4 text-2xl font-semibold tracking-tight text-site-ink">
                Practical reasons buyers work with a China-based sourcing partner
              </h3>
              <ul className="mt-6 grid gap-3 text-base leading-7 text-site-muted">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <BadgeCheck className="mt-1 h-5 w-5 text-brand" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow="Case studies"
            title="Examples of sourcing support for overseas buyers"
            description="These examples reflect the types of sourcing situations where verification, production visibility, and quality control make a practical difference."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">{study.sector}</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-site-ink">{study.title}</h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-site-muted">
                  <p><span className="font-semibold text-site-ink">Challenge:</span> {study.challenge}</p>
                  <p><span className="font-semibold text-site-ink">Approach:</span> {study.approach}</p>
                  <p><span className="font-semibold text-site-ink">Outcome:</span> {study.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-site-border bg-site-surface py-16 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <SectionIntro
            align="center"
            eyebrow="FAQ"
            title="Questions buyers commonly ask before getting started"
            description="If you are considering sourcing support in China, these are the areas buyers usually want clarified first."
          />

          <div className="mt-10 grid gap-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-[2rem] border border-site-border bg-white p-6 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold text-site-ink">{item.question}</summary>
                <p className="mt-4 text-base leading-7 text-site-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

export default Home
