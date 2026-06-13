import { ArrowRight, BadgeCheck, ClipboardCheck, Factory, PackageCheck, Search, ShipWheel, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import InquiryForm from '../components/common/InquiryForm.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import CTASection from '../components/common/CTASection.jsx'
import {
  caseStudies,
  faqItems,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  trustPoints,
} from '../siteContent.js'
import { usePageMeta } from '../lib/usePageMeta.js'

const heroStats = [
  'Supplier search and quotation comparison',
  'Factory verification and audit support',
  'Quality inspection and production follow-up',
  'Shipping coordination with clear communication',
]

const serviceIcons = [Search, ShieldCheck, Factory, ClipboardCheck, PackageCheck, ShipWheel]

const Home = () => {
  usePageMeta(
    'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
    'China-based sourcing support for global buyers. SSourcing China helps with supplier verification, factory checks, quality inspection, production follow-up, and shipping coordination.',
  )

  return (
    <>
      <section className="overflow-hidden bg-slate-50 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                China-based sourcing support for overseas buyers
              </span>
              <div className="space-y-4">
                <h1 id="hero-title" className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                  China Sourcing Agent for Global Buyers
                </h1>
                <p id="hero-description" className="max-w-3xl text-base leading-8 text-slate-600 md:text-xl">
                  SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical on-the-ground support in China.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                See How It Works
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {heroStats.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                  <BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory quality inspection in China"
                className="h-[340px] w-full object-cover"
                data-strk-img-id="ssourcing-home-hero-81v3nq"
                data-strk-img="[hero-description] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-slate-900 p-6 text-white">
                <p className="text-sm font-medium text-blue-100">Who we help</p>
                <p className="mt-3 text-lg font-semibold">Importers, brands, wholesalers, and procurement teams buying from China.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-medium text-slate-500">What buyers want to avoid</p>
                <p className="mt-3 text-lg font-semibold text-slate-900">Unverified suppliers, late issue discovery, and weak production visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Services"
            title="End-to-end sourcing support where buyers usually need local help"
            description="Use one service or combine several. We support the sourcing process from supplier search to shipping coordination."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index]

              return (
                <article key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{service.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-700" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="How it works"
            title="A clear sourcing process with fewer blind spots"
            description="We keep the process structured so buyers can compare suppliers, reduce risk, and move orders forward with better visibility."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-sm font-semibold text-blue-700">{step.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="Problems we solve"
              title="Where overseas buyers often lose time or take unnecessary risk"
              description="Many sourcing issues are not caused by one major mistake, but by limited visibility across supplier checks, production, and shipment readiness."
            />
            <div className="grid gap-4">
              {problemsWeSolve.map((problem) => (
                <div key={problem} className="rounded-3xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-900">
                  {problem}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-slate-900 p-6 text-white shadow-sm md:p-8">
            <SectionIntro
              eyebrow="Trust points"
              title="Built for practical sourcing support"
              description="SSourcing China is positioned as a local sourcing partner focused on operational clarity, supplier due diligence, and production follow-through."
              light
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {trustPoints.map((point) => (
                <article key={point.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Products we source"
            title="Examples of product categories we commonly support"
            description="We focus on practical supplier matching, verification, and order support across a range of B2B product categories."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => {
              const titleId = `home-category-title-${index}`
              const descId = `home-category-desc-${index}`

              return (
                <article key={category.title} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="h-56 w-full object-cover"
                    data-strk-img-id={`home-category-img-${index}-x2k9`}
                    data-strk-img={`[${descId}] [${titleId}] [hero-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                  />
                  <div className="p-6">
                    <h3 id={titleId} className="text-xl font-semibold text-slate-900">
                      {category.title}
                    </h3>
                    <p id={descId} className="mt-3 text-base leading-7 text-slate-600">
                      {category.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Case studies"
            title="Examples of sourcing support in practice"
            description="Representative scenarios that show how buyers use sourcing, verification, inspection, and coordination support."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                  {study.industry}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{study.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                  <p><span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}</p>
                  <p><span className="font-semibold text-slate-900">Solution:</span> {study.solution}</p>
                  <p><span className="font-semibold text-slate-900">Outcome:</span> {study.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="space-y-6">
            <SectionIntro
              eyebrow="FAQ"
              title="Common questions from overseas buyers"
              description="Straight answers to the sourcing topics buyers usually ask before getting started."
            />
            <div className="space-y-4">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="inquiry-form" className="space-y-6">
            <SectionIntro
              eyebrow="Inquiry form"
              title="Tell us what you need to source"
              description="Share your product category, target market, and the support you need. We use this information to review the inquiry and respond with suitable next steps."
            />
            <InquiryForm />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default Home
