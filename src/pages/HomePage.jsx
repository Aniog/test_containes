import { Link } from 'react-router-dom'
import InquiryForm from '@/components/InquiryForm.jsx'
import SectionHeading from '@/components/SectionHeading.jsx'
import {
  caseStudies,
  faqItems,
  metrics,
  primaryCta,
  problems,
  processSteps,
  products,
  services,
  trustPoints,
} from '@/data/siteContent.js'

function HomePage() {
  return (
    <main>
      <section className="bg-brand text-onbrand">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)] lg:px-8">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                China sourcing support for international buyers
              </span>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  China Sourcing Agent for Global Buyers
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
                  SSourcing China helps overseas buyers find suitable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear communication from inside China.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to={primaryCta.path}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-brand transition hover:bg-white"
              >
                {primaryCta.label}
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                See How It Works
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <article key={metric.title} className="rounded-3xl border border-white/10 bg-white/6 p-5">
                  <h2 className="text-base font-semibold text-white">{metric.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/72">{metric.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="min-h-80 rounded-[2rem] border border-white/10 bg-brand-soft shadow-2xl"
              data-strk-bg-id="hero-sourcing-visual-92d1ac"
              data-strk-bg="[hero-panel-caption] [hero-panel-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
            >
              <div className="flex min-h-80 flex-col justify-end rounded-[2rem] bg-gradient-to-t from-brand/80 via-brand/20 to-transparent p-8">
                <p id="hero-panel-caption" className="text-sm font-medium uppercase tracking-[0.22em] text-white/70">
                  Factory verification, QC, and shipping coordination
                </p>
                <h2 id="hero-panel-title" className="mt-3 max-w-md text-2xl font-semibold text-white">
                  Practical sourcing support across suppliers, production, and shipment readiness.
                </h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/8 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">What buyers need</p>
                <p className="mt-3 text-base leading-7 text-white/82">
                  Reliable supplier screening, realistic factory checks, inspection discipline, and clear order visibility.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/8 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">What we focus on</p>
                <p className="mt-3 text-base leading-7 text-white/82">
                  Helping buyers reduce sourcing risk, improve supplier visibility, and move orders more confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Support across supplier search, factory checks, quality control, and delivery coordination"
            description="SSourcing China is designed for overseas buyers who need sourcing help that stays practical, traceable, and focused on execution."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.id} className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent-strong" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Sourcing process"
              title="A clear sourcing workflow for international buyers"
              description="Every sourcing project is different, but a structured process makes supplier selection, order control, and shipment readiness easier to manage."
            />
            <Link
              to="/how-it-works"
              className="inline-flex rounded-full border border-border-soft px-5 py-3 text-sm font-semibold text-ink transition hover:bg-panel"
            >
              View the full process
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-strong">Step {item.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products we source"
            title="Categories commonly requested by overseas buyers"
            description="We support a wide range of B2B and private-label sourcing needs, especially where supplier comparison, factory verification, and QC visibility matter."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-3xl border border-border-soft bg-surface shadow-sm">
                <img
                  alt={product.title}
                  className="h-56 w-full object-cover"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="space-y-3 p-6">
                  <h3 id={product.titleId} className="text-xl font-semibold tracking-tight text-ink">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-sm leading-7 text-muted">
                    {product.description}
                  </p>
                  <p className="text-sm leading-7 text-ink">{product.notes}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Problems we solve"
              title="Common sourcing issues that slow buyers down"
              description="Most buyers do not need promises. They need better visibility, more reliable suppliers, and fewer avoidable surprises."
            />
            <div className="rounded-3xl border border-border-soft bg-panel p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-ink">Trust points</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-ink">
                {trustPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent-strong" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-4">
            {problems.map((problem) => (
              <article key={problem.title} className="rounded-3xl border border-border-soft bg-canvas p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-ink">{problem.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{problem.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            description="Representative scenarios showing the type of sourcing issues SSourcing China helps buyers manage."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.id} className="rounded-3xl border border-border-soft bg-surface p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong">{study.sector}</p>
                <div className="mt-5 space-y-4 text-sm leading-7">
                  <div>
                    <h3 className="font-semibold text-ink">Challenge</h3>
                    <p className="text-muted">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Action</h3>
                    <p className="text-muted">{study.action}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">Outcome</h3>
                    <p className="text-muted">{study.outcome}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Answers buyers often ask before starting"
              description="A sourcing brief with the right details usually saves time and makes next steps clearer."
            />
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <article key={faq.question} className="rounded-3xl border border-border-soft bg-canvas p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}

export default HomePage
