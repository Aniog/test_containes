import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Boxes, ClipboardCheck, Factory, Ship, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquiryForm from '@/components/forms/InquiryForm'
import SectionHeading from '@/components/shared/SectionHeading'
import PageMeta from '@/components/shared/PageMeta'
import FAQList from '@/components/site/FAQList'
import QuoteBanner from '@/components/site/QuoteBanner'
import {
  caseStudies,
  faqs,
  heroPoints,
  homepageStats,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  trustPoints,
} from '@/content/siteContent'

const icons = {
  'supplier-search': Boxes,
  'supplier-verification': ShieldCheck,
  'quality-inspection': ClipboardCheck,
  'production-follow-up': Factory,
  'shipping-coordination': Ship,
}

const HomePage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageMeta
        title="China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
        description="SSourcing China helps global buyers source reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China."
      />

      <main ref={containerRef}>
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-center lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">SSourcing China</p>
              <h1 id="home-hero-title" className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="home-hero-desc" className="mt-6 text-lg leading-8 text-slate-600">
                We help overseas buyers find suitable suppliers, verify factories, inspect quality, follow production,
                and coordinate shipping with clear local execution in China.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Get a Free Sourcing Quote
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {homepageStats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-900">
                    <p className="text-2xl font-semibold tracking-tight text-slate-950">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-3">
                {heroPoints.map((point) => (
                  <div key={point} className="inline-flex items-start gap-3 text-base leading-7 text-slate-700">
                    <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div
                className="relative min-h-[25rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm"
                data-strk-bg-id="home-hero-bg-k4m9s2"
                data-strk-bg="[home-hero-desc] [home-hero-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
              >
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="max-w-sm rounded-[1.75rem] border border-white/20 bg-white/90 p-5 text-slate-900 shadow-sm backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Local execution</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">
                      Factory checks, QC follow-up, and shipment coordination with practical buyer communication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">For overseas buyers</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">Reduce sourcing risk before production starts.</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">For active projects</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">Keep visibility during production and before shipment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="Practical sourcing support from supplier search to shipping coordination"
              description="Choose focused support or combine services depending on your product, sourcing stage, and internal buying resources."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {services.map((service) => {
                const Icon = icons[service.slug] ?? ShieldCheck

                return (
                  <article
                    key={service.slug}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="How it works"
              title="A sourcing process built for clearer decisions and fewer surprises"
              description="We help structure the project in practical stages so the buyer has better visibility from sourcing brief to shipment readiness."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-5">
              {processSteps.map((step) => (
                <article key={step.number} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-slate-900">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">{step.number}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Products we source"
              title="Examples of categories we support"
              description="If your product is specialized, custom, or compliance-sensitive, send the brief and we can advise whether the sourcing approach is realistic."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {productCategories.map((category) => (
                <article key={category.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="h-56 w-full object-cover"
                    data-strk-img-id={category.imgId}
                    data-strk-img={`[${category.descId}] [${category.titleId}] [home-hero-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                  />
                  <div className="p-6 text-slate-900">
                    <h3 id={category.titleId} className="text-xl font-semibold tracking-tight text-slate-950">
                      {category.title}
                    </h3>
                    <p id={category.descId} className="mt-3 text-sm leading-7 text-slate-600">
                      {category.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Problems we solve"
                  title="Typical issues buyers want to reduce when sourcing from China"
                  description="Good sourcing is not only about price. It is also about fit, verification, execution, and timing control."
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {problemsWeSolve.map((problem) => (
                  <article key={problem.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-slate-900">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-950">{problem.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{problem.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-slate-100 shadow-sm md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Why buyers contact us</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Trust comes from clarity, process, and realistic communication.
                </h2>
                <div className="mt-8 grid gap-4">
                  {trustPoints.map((point) => (
                    <div key={point} className="inline-flex items-start gap-3 text-base leading-7 text-slate-300">
                      <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-blue-300" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {caseStudies.slice(0, 2).map((study) => (
                  <article key={study.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={study.title}
                      className="h-48 w-full object-cover"
                      data-strk-img-id={study.imgId}
                      data-strk-img={`[${study.descId}] [${study.titleId}] [home-hero-desc]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                    />
                    <div className="p-6 text-slate-900">
                      <h3 id={study.titleId} className="text-xl font-semibold tracking-tight text-slate-950">
                        {study.title}
                      </h3>
                      <p id={study.descId} className="mt-3 text-sm leading-7 text-slate-600">
                        {study.description}
                      </p>
                      <p className="mt-4 text-sm font-medium text-slate-800">{study.result}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div>
                <SectionHeading
                  eyebrow="FAQ"
                  title="Common questions from overseas buyers"
                  description="If your project has special requirements, the best way to check fit is to send us the sourcing brief."
                />
              </div>
              <FAQList items={faqs} />
            </div>
          </div>
        </section>

        <section id="inquiry-form" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <InquiryForm />
          </div>
        </section>

        <QuoteBanner />
      </main>
    </>
  )
}

export default HomePage
