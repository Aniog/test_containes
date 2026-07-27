import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, CircleHelp, Factory, PackageCheck, ShipWheel, ShieldCheck } from 'lucide-react'
import SectionIntro from '@/components/shared/SectionIntro'
import {
  caseStudies,
  faqs,
  problemsWeSolve,
  processSteps,
  productCategories,
  serviceItems,
  trustPoints,
} from '@/data/siteContent'


export function HomeHero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800">
            China-based sourcing support for overseas buyers
          </p>
          <h1
            id="home-hero-title"
            className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="home-hero-desc" className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            SSourcing China helps overseas buyers find suitable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping with clearer local
            execution in China.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              Get a Free Sourcing Quote
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              'Supplier verification and screening',
              'Quality control before shipment',
              'Production and shipping coordination',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
            <img
              alt="Factory sourcing coordination"
              className="h-72 w-full rounded-[1.4rem] object-cover"
              data-strk-img-id="home-hero-main-3f6b41"
              data-strk-img="[home-hero-desc] [home-hero-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
              <img
                alt="Quality inspection in China"
                className="h-40 w-full rounded-[1.3rem] object-cover"
                data-strk-img-id="home-hero-qc-4c2d80"
                data-strk-img="[home-hero-desc] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
              <img
                alt="Shipping coordination"
                className="h-40 w-full rounded-[1.3rem] object-cover"
                data-strk-img-id="home-hero-shipping-19aa7b"
                data-strk-img="[home-hero-desc] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesPreview() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Services"
          title="Practical sourcing support across the full order cycle"
          description="We support buyers who need local execution in China, from supplier screening to pre-shipment coordination."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((item, index) => {
            const Icon = [ShieldCheck, Factory, PackageCheck, CheckCircle2, ShipWheel, ArrowRight][index]

            return (
              <article key={item.id} className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-800">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 id={item.titleId} className="mt-5 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p id={item.descId} className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-700" />
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
  )
}

export function ProcessSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="How it works"
          title="A clear sourcing process for overseas buyers"
          description="We keep the process practical, documented, and aligned with your product and shipment goals."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {processSteps.map((item) => (
            <article key={item.step} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">Step {item.step}</p>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Products we source"
            title="Categories commonly handled for international buyers"
            description="We focus on practical product categories where supplier comparison, quality follow-up, and shipment coordination matter."
          />
          <Link to="/products-we-source" className="text-sm font-semibold text-blue-700 transition hover:text-blue-800">
            View categories
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {productCategories.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img
                alt={item.title}
                className="h-56 w-full object-cover"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <h3 id={item.titleId} className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p id={item.descId} className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProblemsAndTrustSection() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
          <SectionIntro
            eyebrow="Problems we solve"
            title="Support for the sourcing issues buyers face most often"
            description="We help reduce uncertainty when supplier credibility, quality, communication, or shipment timing is unclear."
            light
          />
          <div className="mt-8 space-y-4">
            {problemsWeSolve.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-4 text-sm leading-7 text-slate-200">
                <CircleHelp className="mt-1 h-5 w-5 text-blue-300" />
                <p>{problem}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-slate-900 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">Why buyers contact us</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">Trust points that matter in B2B sourcing</h3>
          <div className="mt-8 space-y-4">
            {trustPoints.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950 px-4 py-4 text-sm text-slate-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function CaseStudiesSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Case studies"
            title="Examples of sourcing support buyers ask for"
            description="Short examples showing how verification, QC, and coordination support can reduce sourcing friction."
          />
          <Link to="/case-studies" className="text-sm font-semibold text-blue-700 transition hover:text-blue-800">
            View case studies
          </Link>
        </div>
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-sm">
              <img
                alt={item.title}
                className="h-56 w-full object-cover"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="p-6">
                <p className="text-sm font-medium text-blue-700">{item.client}</p>
                <h3 id={item.titleId} className="mt-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p id={item.descId} className="mt-3 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  <span className="font-semibold text-slate-900">Outcome:</span> {item.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQSection() {
  return (
    <section className="bg-slate-100 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="FAQ"
          title="Common questions from overseas buyers"
          description="A few practical answers before you send your sourcing inquiry."
          centered
        />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
