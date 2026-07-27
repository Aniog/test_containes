import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Factory, PackageCheck, Search, ShieldCheck, Ship, ClipboardCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import SectionHeader from '../components/SectionHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import InquiryForm from '../components/InquiryForm.jsx'
import { caseStudies, faqs, problems, processSteps, productGroups, services, trustPoints } from '../content.js'
import strkImgConfig from '../strk-img-config.json'

const icons = [Search, ShieldCheck, ClipboardCheck, PackageCheck, Factory, Ship]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <section className="relative overflow-hidden bg-white text-brand-ink">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-brand-soft lg:block" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-brand-border bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-blue">China sourcing support for overseas buyers</p>
            <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-brand-navy md:text-6xl">China Sourcing Agent for Global Buyers</h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear, practical communication.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-brand-navy">
                Get a Free Sourcing Quote
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center justify-center rounded-xl border border-brand-border bg-white px-6 py-4 text-base font-semibold text-brand-navy transition hover:bg-brand-soft">See how it works</Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {['Supplier search', 'Factory checks', 'QC & shipping'].map((item) => (
                <div key={item} className="rounded-2xl border border-brand-border bg-white p-4 text-sm font-semibold text-brand-navy shadow-sm">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-brand-green" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-brand-border bg-white p-3 shadow-soft">
            <div
              className="min-h-96 rounded-2xl bg-brand-soft bg-cover bg-center"
              data-strk-bg-id="hero-factory-qc-shipping-42d7f1"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1000"
            />
            <div className="grid gap-3 p-4 sm:grid-cols-3">
              {['Factory visits', 'Inspection reports', 'Export handover'].map((label) => (
                <div key={label} className="rounded-xl bg-brand-page px-3 py-3 text-center text-xs font-semibold text-brand-navy">{label}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Services" title="Practical sourcing support from supplier search to shipment">
            Choose the support you need, from early supplier research to factory verification, quality inspection, production tracking, and export coordination.
          </SectionHeader>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = icons[index]
              return (
                <article key={service.title} className="rounded-3xl border border-brand-border bg-white p-6 text-brand-ink shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <Icon className="h-8 w-8 text-brand-blue" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-brand-navy">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{service.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Process" title="A clear sourcing process with fewer blind spots" centered>
            We keep each step structured so buyers understand what has been checked, what still needs confirmation, and what decision comes next.
          </SectionHeader>
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {processSteps.map(([number, title, desc]) => (
              <article key={number} className="rounded-3xl border border-brand-border bg-brand-page p-5 text-brand-ink">
                <span className="text-sm font-bold text-brand-blue">{number}</span>
                <h3 className="mt-4 text-lg font-semibold text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader eyebrow="Products" title="Products we source for B2B buyers">
              We work across practical export categories where supplier capability, quality control, packaging, and documentation matter.
            </SectionHeader>
            <Link to="/products" className="mt-8 inline-flex items-center gap-2 rounded-xl border border-brand-border bg-white px-5 py-3 font-semibold text-brand-navy transition hover:bg-brand-soft">
              View product categories
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {productGroups.map((item) => (
              <div key={item} className="rounded-2xl border border-brand-border bg-white px-5 py-4 font-semibold text-brand-navy shadow-sm">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-navy py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">Problems we solve</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Reduce avoidable sourcing risk before it becomes expensive.</h2>
            <p className="mt-5 text-base leading-8 text-blue-100">China sourcing works best when specifications, supplier selection, production status, and shipment details are controlled early.</p>
          </div>
          <div className="grid gap-3">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-blue-50">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-green-300" aria-hidden="true" />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Trust points" title="Built for overseas buyers who need practical visibility" centered>
            We keep the work grounded: supplier facts, clear reports, production status, and shipping coordination.
          </SectionHeader>
          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-3xl border border-brand-border bg-white p-5 text-sm font-medium leading-7 text-brand-ink shadow-sm">
                <ShieldCheck className="mb-4 h-6 w-6 text-brand-green" aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Case studies" title="Examples of practical sourcing support" centered>
            These examples show the type of coordination buyers often need: verification, quality checks, and communication between supplier and forwarder.
          </SectionHeader>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.id} className="overflow-hidden rounded-3xl border border-brand-border bg-white text-brand-ink shadow-sm">
                <img
                  className="h-56 w-full object-cover"
                  alt={study.title}
                  data-strk-img-id={study.imgId}
                  data-strk-img={`[${study.descId}] [${study.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <p className="text-sm font-semibold text-brand-blue">{study.sector}</p>
                  <h3 id={study.titleId} className="mt-2 text-xl font-semibold text-brand-navy">{study.title}</h3>
                  <p id={study.descId} className="mt-3 text-sm leading-7 text-brand-muted">{study.desc}</p>
                  <p className="mt-4 rounded-2xl bg-brand-soft p-4 text-sm font-semibold text-brand-green">{study.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Common questions from overseas buyers" centered />
          <div className="mt-10 divide-y divide-brand-border rounded-3xl border border-brand-border bg-white px-6 shadow-sm">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="cursor-pointer list-none text-lg font-semibold text-brand-navy">{question}</summary>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader eyebrow="Inquiry" title="Get a Free Sourcing Quote">
              Send us the product details you have. If something is missing, we will help clarify the requirements before contacting suppliers.
            </SectionHeader>
            <div className="mt-8 rounded-3xl border border-brand-border bg-white p-6 text-sm leading-7 text-brand-muted shadow-sm">
              <strong className="text-brand-navy">Helpful details:</strong> product photos or drawings, material, dimensions, quantity, target market, packaging needs, certification requirements, and shipping destination.
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
      <CTASection />
    </main>
  )
}
