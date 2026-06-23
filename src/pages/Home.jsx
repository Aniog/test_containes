import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CheckCircle2, ClipboardCheck, Factory, Globe2, PackageCheck, SearchCheck, ShieldCheck, Ship, TrendingUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import InquiryForm from '../components/InquiryForm.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { caseStudies, faqs, problems, processSteps, productCategories, services, trustPoints } from '../data/siteContent.js'

const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/%3E'
const serviceIcons = [SearchCheck, ShieldCheck, ClipboardCheck, TrendingUp, Ship, PackageCheck]

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => ImageHelper.loadImages(strkImgConfig, pageRef.current), [])

  return (
    <main ref={pageRef} className="bg-white text-slate-950">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-30" data-strk-bg-id="home-hero-factory-bg-7a91c2" data-strk-bg="[hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1600" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:py-28 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit items-center rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100">China-based sourcing support for global buyers</p>
            <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">China Sourcing Agent for Global Buyers</h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical English communication from China.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800">Get a Free Sourcing Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">View services</Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {['Supplier screening', 'QC reports', 'Shipping handover'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-semibold text-white backdrop-blur">
                  <CheckCircle2 className="mb-2 h-5 w-5 text-blue-200" />{item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <img data-strk-img-id="hero-qc-inspection-3f8b1d" data-strk-img="[hero-subtitle] [hero-title]" data-strk-img-ratio="4x3" data-strk-img-width="900" src={placeholder} alt="Quality inspection in a China factory" className="h-full min-h-80 w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            ['Factory-first', 'Supplier checks before order decisions'],
            ['English reports', 'Clear updates for overseas teams'],
            ['QC focused', 'Inspection and issue tracking support'],
            ['Practical logistics', 'Carton, document, and handover coordination'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm">
              <p className="text-base font-bold">{title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Services" title="Sourcing support from supplier search to shipment" description="Use SSourcing China as your local coordination partner for practical supplier screening, production visibility, quality control, and shipping communication." centered />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => {
              const Icon = serviceIcons[index] || BadgeCheck
              return (
                <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader eyebrow="Sourcing process" title="A clear process for better sourcing decisions" description="Every project starts with a practical product brief and moves through screening, comparison, inspection, and shipment coordination." />
            <img data-strk-img-id="process-production-line-92d4ae" data-strk-img="[process-heading] [process-copy]" data-strk-img-ratio="4x3" data-strk-img-width="760" src={placeholder} alt="Factory production line review" className="mt-8 w-full rounded-3xl border border-slate-200 object-cover shadow-sm" />
            <h3 id="process-heading" className="sr-only">China factory production follow-up</h3>
            <p id="process-copy" className="sr-only">Supplier screening quality inspection production tracking and shipping coordination</p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((item) => (
              <article key={item.step} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm sm:grid-cols-[4rem_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">{item.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Products we source" title="Common categories for overseas buyers" description="We work across many B2B product categories. If your product requires custom specifications, samples, packaging, or inspection, send us the brief for review." centered />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <div key={category} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm">
                <Factory className="mb-4 h-6 w-6 text-blue-700" />
                <p className="font-semibold text-slate-900">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
            <SectionHeader inverse eyebrow="Problems we solve" title="Reduce common sourcing risks" description="Many sourcing problems start before production: unclear requirements, weak supplier screening, and limited visibility. We help buyers make these steps more structured." />
            <div className="mt-8 grid gap-3">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-100"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-blue-200" />{problem}</div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-blue-100 bg-white p-8 text-slate-950 shadow-sm md:p-10">
            <SectionHeader eyebrow="Trust points" title="Practical support, clear reporting" description="Our work is based on communication, verification, inspection, and follow-up rather than broad promises." />
            <div className="mt-8 grid gap-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"><BadgeCheck className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />{point}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Case studies" title="Examples of practical sourcing support" description="Representative project scenarios showing how structured sourcing support helps overseas buyers reduce uncertainty." centered />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article key={study.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-slate-950 shadow-sm">
                <img data-strk-img-id={`case-study-${index}-5ad9c${index}`} data-strk-img={`[case-title-${index}] [case-category-${index}]`} data-strk-img-ratio="4x3" data-strk-img-width="640" src={placeholder} alt={study.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <p id={`case-category-${index}`} className="text-sm font-semibold text-blue-700">{study.category}</p>
                  <h3 id={`case-title-${index}`} className="mt-2 text-xl font-bold text-slate-950">{study.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{study.summary}</p>
                  <p className="mt-4 rounded-2xl bg-emerald-50 p-3 text-sm font-medium leading-6 text-emerald-900">{study.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader eyebrow="FAQ" title="Common questions from overseas buyers" description="These answers are practical starting points. For project-specific advice, send your product brief and target quantity." />
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="quote">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Inquiry form</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Get a Free Sourcing Quote</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Send your product details and service needs. We will review the brief and respond with the information needed to move forward responsibly.</p>
            <div className="mt-8 grid gap-4 text-sm leading-6 text-slate-700">
              <div className="flex gap-3"><Globe2 className="h-5 w-5 flex-none text-blue-700" /> Suitable for importers, brands, ecommerce sellers, distributors, and purchasing teams.</div>
              <div className="flex gap-3"><ShieldCheck className="h-5 w-5 flex-none text-blue-700" /> Better results come from clear specs, quantities, timelines, and quality expectations.</div>
            </div>
          </div>
          <InquiryForm source="homepage" />
        </div>
      </section>
    </main>
  )
}
