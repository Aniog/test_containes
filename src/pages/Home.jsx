import { ArrowRight, CheckCircle2, ClipboardCheck, Factory, PackageCheck, ShipWheel, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import InquiryForm from '@/components/common/InquiryForm'
import PrimaryCta from '@/components/common/PrimaryCta'
import SectionHeader from '@/components/common/SectionHeader'
import { caseStudies, faqs, problemsWeSolve, processSteps, productCategories, serviceItems, trustPoints } from '@/data/siteContent'
import { usePageMeta } from '@/hooks/usePageMeta'

const iconMap = [Factory, ShieldCheck, ClipboardCheck, PackageCheck, ShipWheel, CheckCircle2]

const stats = [
  { value: 'China-based', label: 'Local coordination with suppliers and factories' },
  { value: 'End-to-end', label: 'Support from supplier search to shipment readiness' },
  { value: 'B2B focused', label: 'Built for importers, brands, and procurement teams' },
]

const Home = () => {
  usePageMeta({
    title: 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
    description:
      'SSourcing China helps global buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.',
  })

  return (
    <div>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              China-based sourcing support for overseas buyers
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect product quality, follow production, and coordinate shipping with practical local support in China.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryCta />
              <Link
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                to="/how-it-works"
              >
                <span>See How It Works</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-rows-[minmax(0,1fr)_auto]">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-4 shadow-sm">
              <div
                className="absolute inset-0 opacity-0"
                data-strk-bg-id="hero-bg-ssourcing-home-a1f9c2"
                data-strk-bg="[hero-home-visual-detail] [hero-home-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
              />
              <div className="relative flex min-h-[420px] flex-col justify-end rounded-[1.5rem] bg-slate-900/35 p-8">
                <p id="hero-home-visual-detail" className="max-w-sm text-sm font-medium text-white/90">
                  Factory visits, quality checks, production follow-up, and shipment readiness support for international B2B buyers.
                </p>
                <p className="mt-4 max-w-lg text-2xl font-semibold text-white" id="hero-home-title">
                  Reliable sourcing decisions need better supplier visibility on the ground.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">What buyers need</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Supplier reliability, clearer communication, stronger quality control, and fewer last-minute shipment issues.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-blue-50 p-6 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">What we provide</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Structured sourcing support that helps your team make informed decisions before and during production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Support that covers the key sourcing risks"
            description="From supplier selection to shipment coordination, SSourcing China helps buyers reduce uncertainty and stay closer to factory reality."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((item, index) => {
              const Icon = iconMap[index % iconMap.length]
              return (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Problems we solve"
              title="Common sourcing issues that slow buyers down"
              description="A sourcing process becomes expensive when supplier selection, production follow-up, and quality control are handled with limited visibility."
            />
          </div>
          <div className="grid gap-4">
            {problemsWeSolve.map((problem) => (
              <div key={problem} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-base leading-7 text-slate-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="How it works"
            title="A practical sourcing process for better control"
            description="We keep the process structured so overseas buyers can move from request to shipment with clearer supplier information and more consistent follow-up."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-700">Step {step.step}</p>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Products we source"
            title="Product categories we commonly support"
            description="Examples of product areas where buyers often need supplier search, factory verification, quality checks, and shipment coordination."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => (
              <article key={category.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  alt={category.title}
                  className="h-56 w-full object-cover"
                  data-strk-img-id={`product-category-${index}-ssourcing-c4${index}`}
                  data-strk-img={`[product-category-${index}-desc] [product-category-${index}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-950" id={`product-category-${index}-title`}>
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600" id={`product-category-${index}-desc`}>
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why buyers choose us"
            title="Trust points that matter in real sourcing work"
            description="The value is not just getting quotes. It is getting more dependable information, better supplier follow-up, and clearer decision support."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point, index) => (
              <article
                key={point.title}
                className={`rounded-3xl border border-slate-200 p-6 shadow-sm ${
                  index % 3 === 0
                    ? 'bg-blue-50'
                    : index % 3 === 1
                      ? 'bg-emerald-50'
                      : 'bg-amber-50'
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-950">{point.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            description="Illustrative sourcing scenarios that reflect the type of buyer support SSourcing China provides."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article key={study.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  alt={study.client}
                  className="h-56 w-full object-cover"
                  data-strk-img-id={`case-study-${index}-ssourcing-k9${index}`}
                  data-strk-img={`[case-study-${index}-outcome] [case-study-${index}-client]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <p className="text-sm font-semibold text-blue-700" id={`case-study-${index}-client`}>
                    {study.client}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-slate-950">Challenge</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{study.challenge}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-950">Solution</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{study.solution}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-950">Outcome</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600" id={`case-study-${index}-outcome`}>
                    {study.outcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Get started"
              title="Request a free sourcing quote"
              description="Share your product and sourcing requirement. We will review the request and respond with the next practical steps."
            />
            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
              <p>Useful inquiry details include product type, target specifications, quantity, timeline, and any supplier or quality concerns.</p>
              <p>Clear briefs help us understand whether you need supplier search, verification, inspection, production follow-up, shipping coordination, or full sourcing support.</p>
            </div>
          </div>
          <InquiryForm sourcePage="home" />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions from overseas buyers"
            description="Clear answers to common questions before starting a sourcing project with China-based support."
            centered
          />
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
