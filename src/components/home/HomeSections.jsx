import { ArrowRight, CheckCircle2, ChevronRight, CircleHelp, PackageSearch, ShieldCheck, ShipWheel, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import InquiryForm from '@/components/site/InquiryForm'
import SectionHeader from '@/components/site/SectionHeader'
import StockImage from '@/components/site/StockImage'
import { caseStudies, faqs, problems, processSteps, products, services, trustPoints } from '@/siteData'

function ServiceGrid() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Support across the sourcing workflow"
          description="From supplier search to pre-shipment checks, we help buyers manage the practical steps that influence supplier selection, order quality, and shipping readiness."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-slate-900">{service.title}</p>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessOverview() {
  return (
    <section className="border-y border-slate-200 bg-slate-900 py-16 text-white md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A clear process for overseas buyers"
          description="We keep the sourcing workflow structured so you can move from requirement review to supplier comparison, production follow-up, and shipping preparation with more visibility."
          align="center"
          theme="dark"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step) => (
            <article key={step.step} className="rounded-3xl border border-slate-700 bg-slate-800 p-6 text-slate-100 shadow-sm">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-300">Step {step.step}</p>
              <p className="mt-4 text-xl font-semibold text-white">{step.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            to="/how-it-works"
          >
            View the full sourcing process
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductShowcase() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          title="Selected categories we help buyers source from China"
          description="We support a broad range of B2B and private-label sourcing projects, especially when supplier selection, production follow-up, and quality control are important."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
            <StockImage
              alt="Product sourcing categories"
              className="h-full min-h-[420px] w-full object-cover"
              imgId="home-products-grid-cff291"
              query="[home-products-desc] [home-products-title]"
              ratio="4x3"
              width="1000"
            />
          </div>
          <div>
            <h2 id="home-products-title" className="sr-only">
              Selected categories we help buyers source from China
            </h2>
            <p id="home-products-desc" className="sr-only">
              Product sourcing support for overseas buyers working with China suppliers in home goods, accessories, packaging, industrial components, and custom OEM projects.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {products.map((product) => (
                <article key={product.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-lg font-semibold text-slate-900">{product.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemsWeSolve() {
  const icons = [PackageSearch, ShieldCheck, Wrench, CheckCircle2, CircleHelp, ShipWheel]

  return (
    <section className="border-y border-slate-200 bg-sky-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Problems we solve"
          title="Where overseas buyers often need help on the ground"
          description="Many sourcing issues do not come from price alone. They come from unclear supplier capability, slow follow-up, inconsistent production control, and weak shipment preparation."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = icons[index]

            return (
              <article key={problem} className="rounded-3xl border border-sky-200 bg-white p-6 shadow-sm">
                <Icon className="h-6 w-6 text-sky-700" />
                <p className="mt-4 text-base leading-7 text-slate-700">{problem}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TrustPoints() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Why SSourcing China"
            title="Trust built on practical sourcing support"
            description="We keep the message clear: buyers need useful information, reliable follow-up, and better visibility into supplier and production realities in China."
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {trustPoints.map((point) => (
            <article key={point.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-slate-900">{point.title}</p>
              <p className="mt-4 text-base leading-7 text-slate-600">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudyPreview() {
  return (
    <section className="border-y border-slate-200 bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Case studies"
            title="Examples of sourcing support in practice"
            description="These examples show the kind of sourcing, verification, and shipment-preparation support buyers often need when working with China suppliers."
          />
          <Link className="inline-flex items-center text-sm font-semibold text-slate-900" to="/case-studies">
            See all case studies
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-xl font-semibold text-slate-900">{study.title}</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <p><span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}</p>
                <p><span className="font-semibold text-slate-900">Solution:</span> {study.solution}</p>
                <p><span className="font-semibold text-slate-900">Result:</span> {study.result}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions from buyers"
          description="Short, practical answers to help buyers understand how our sourcing support works."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-lg font-semibold text-slate-900">{faq.question}</p>
              <p className="mt-4 text-base leading-7 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function InquirySection() {
  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <InquiryForm />
      </div>
    </section>
  )
}

export {
  CaseStudyPreview,
  FaqPreview,
  InquirySection,
  ProblemsWeSolve,
  ProcessOverview,
  ProductShowcase,
  ServiceGrid,
  TrustPoints,
}
