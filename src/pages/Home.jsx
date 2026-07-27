import React from 'react'
import { ArrowRight, CheckCircle2, ClipboardCheck, Factory, PackageCheck, Search, ShieldCheck, Ship, Truck } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/sections/SectionHeading'
import InquiryForm from '@/components/sections/InquiryForm'
import CTASection from '@/components/sections/CTASection'
import { caseStudies, faqs, problems, processSteps, productCategories, services, trustPoints } from '@/data'

const serviceIcons = [Search, ShieldCheck, ClipboardCheck, PackageCheck, Factory, Ship]

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-30" data-strk-bg-id="home-hero-factory-bg-a71d3e" data-strk-bg="[home-hero-subtitle] [home-hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1600" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/65" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100">China-based sourcing support for overseas buyers</p>
            <h1 id="home-hero-title" className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">China Sourcing Agent for Global Buyers</h1>
            <p id="home-hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              SSourcing China helps buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical local support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" className="gap-2">Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" /></Button>
              <Button href="/services" variant="light">View sourcing services</Button>
            </div>
            <div className="mt-10 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
              {['Supplier search', 'Factory verification', 'QC & shipping'].map((item) => (
                <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-amber-300" /> {item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="overflow-hidden rounded-2xl bg-white text-slate-900">
              <img
                alt="Quality control inspection in a Chinese factory"
                className="h-72 w-full object-cover"
                data-strk-img-id="home-hero-qc-image-c48f2a"
                data-strk-img="[home-hero-visual-query] [home-hero-subtitle] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <p id="home-hero-visual-query" className="sr-only" aria-hidden="true">quality control inspection inside modern Chinese factory production line supplier verification</p>
              <div className="grid gap-4 p-6 sm:grid-cols-3">
                {trustPoints.slice(0, 3).map((point) => (
                  <div key={point.value}>
                    <p className="font-bold text-slate-950">{point.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{point.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Services" title="Sourcing support from supplier search to shipment" description="Choose full project support or specific checkpoints where your team needs local China coordination." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[index]
              return (
                <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Process" title="A clear sourcing process for overseas buyers" description="Each step is designed to reduce uncertainty and keep decisions based on verified information." />
            <Button href="/how-it-works" className="mt-7">See how it works</Button>
          </div>
          <div className="grid gap-4">
            {processSteps.map(([number, title, text]) => (
              <article key={number} className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white">{number}</div>
                <div>
                  <h3 className="font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Products" title="Products we source" description="We focus on practical manufactured goods where supplier capability, specifications, and quality control matter." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category, index) => (
              <article key={category} className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm">
                <img
                  alt={category}
                  className="h-36 w-full object-cover"
                  data-strk-img-id={`home-product-${index}-b8d4${index}`}
                  data-strk-img={`[home-product-${index}-title] [home-products-heading]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-5">
                  <h3 id={`home-product-${index}-title`} className="font-bold text-slate-950">{category}</h3>
                </div>
              </article>
            ))}
          </div>
          <span id="home-products-heading" className="sr-only" aria-hidden="true">Products sourced by China sourcing agent</span>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Problems we solve</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Make China sourcing more transparent and manageable.</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">We provide local checks, supplier communication, and production visibility so your team can make better purchasing decisions.</p>
            <div className="mt-8 grid gap-3">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-3 rounded-xl bg-white/5 p-4 text-sm text-slate-100"><CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" /> {problem}</div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10">
              <img alt="Factory verification visit" className="h-64 w-full object-cover" data-strk-img-id="home-problem-factory-94c4b1" data-strk-img="[home-hero-subtitle] [home-hero-title]" data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:mt-20">
              <img alt="Shipping container coordination" className="h-64 w-full object-cover" data-strk-img-id="home-problem-shipping-42e7f8" data-strk-img="[shipping-card-title] [home-hero-subtitle]" data-strk-img-ratio="3x4" data-strk-img-width="600" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
              <p id="shipping-card-title" className="sr-only" aria-hidden="true">shipping containers logistics coordination China export</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Trust points" title="Built for practical procurement decisions" description="Our role is to help you compare options, understand risks, and keep sourcing tasks moving with clear documentation." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point) => (
              <article key={point.value} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-900">
                <h3 className="text-xl font-bold text-blue-700">{point.value}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{point.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading align="center" eyebrow="Case studies" title="Representative sourcing situations" description="Examples of how structured sourcing support helps buyers reduce uncertainty before and during production." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">{item.industry}</span>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.summary}</p>
                <p className="mt-5 border-t border-slate-200 pt-5 text-sm font-semibold leading-6 text-blue-800">{item.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions from sourcing buyers" description="Straightforward answers for buyers evaluating sourcing support in China." />
          <div className="grid gap-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-5 text-slate-900 shadow-sm" open={question === faqs[0][0]}>
                <summary className="cursor-pointer list-none font-bold text-slate-950">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-700">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Inquiry" title="Request a free sourcing quote" description="Provide your product brief and sourcing stage. We will outline what information is needed to evaluate suppliers and next steps." />
            <div className="mt-8 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
              <div className="flex gap-3"><Truck className="h-5 w-5 text-blue-700" /> Destination country and shipping needs</div>
              <div className="flex gap-3"><Factory className="h-5 w-5 text-blue-700" /> Supplier type or factory requirements</div>
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>

      <CTASection />
    </main>
  )
}
