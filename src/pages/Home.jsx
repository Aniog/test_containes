import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search,
  Factory,
  ClipboardCheck,
  Gauge,
  Ship,
  Settings,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CTAButton from '@/components/CTAButton'
import CTABand from '@/components/CTABand'
import FAQSection from '@/components/FAQSection'
import StrkImage from '@/components/StrkImage'
import {
  SERVICES,
  PROCESS_STEPS,
  PROBLEMS,
  PRODUCT_CATEGORIES,
  TRUST_STATS,
  TRUST_POINTS,
  CASE_STUDIES,
  FAQS,
} from '@/data/content'

const ICONS = { Search, Factory, ClipboardCheck, Gauge, Ship, Settings }

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-strk-bg-id="hero-bg-a1f3c9"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            Sourcing · Verification · QC · Shipping
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            We help overseas buyers find reliable Chinese suppliers, verify factories,
            inspect product quality, follow production and coordinate shipping — with a
            dedicated team on the ground in Shenzhen.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact">Get a Free Sourcing Quote</CTAButton>
            <CTAButton to="/how-it-works" variant="outlineDark">
              See How It Works
            </CTAButton>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
            {TRUST_STATS.map((stat) => (
              <div key={stat.id}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold text-white">{stat.value}</dd>
                <dd className="mt-1 text-sm text-slate-300">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything between your idea and your warehouse"
          lead="Use one service or the full chain. Each engagement comes with clear deliverables, photo documentation and reporting in English."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <article
                key={service.id}
                className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-light">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.short}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="A clear 6-step sourcing process"
          lead="You always know what happens next, what it costs and what you receive at each stage."
        />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <li key={step.id} className="relative rounded-xl border border-line bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                  {step.step}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {step.duration}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.short}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <CTAButton to="/how-it-works" variant="brand">
            View the Full Process
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  return (
    <section className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">Problems We Solve</p>
            <h2 id="problems-title" className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Sourcing from China is hard when you are not there
            </h2>
            <p id="problems-desc" className="mt-4 text-base leading-relaxed text-slate-300">
              Most sourcing problems come down to distance: you cannot see the factory,
              check the goods or sit across the table. We close that gap with a bilingual
              team that works where your products are made.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-white/15">
              <StrkImage
                imgId="problems-img-7b2e41"
                query="[problems-desc] [problems-title]"
                ratio="16x9"
                width="1000"
                alt="Quality inspector checking goods on a factory floor in China"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {PROBLEMS.map((item) => (
              <li key={item.id} className="rounded-xl border border-white/15 bg-white/5 p-5">
                <AlertTriangle className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-semibold text-white">{item.problem}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const featured = PRODUCT_CATEGORIES.slice(0, 6)
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products We Source"
          title="Categories we know from the factory floor up"
          lead="From consumer electronics to packaging — we source across China's major manufacturing clusters."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cat) => (
            <article
              key={cat.id}
              className="group overflow-hidden rounded-xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                <StrkImage
                  imgId={`home-cat-${cat.id}`}
                  query={`[home-cat-${cat.id}-desc] [home-cat-${cat.id}-name]`}
                  ratio="3x2"
                  width="700"
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 id={`home-cat-${cat.id}-name`} className="text-base font-semibold text-ink">
                  {cat.name}
                </h3>
                <p id={`home-cat-${cat.id}-desc`} className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {cat.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton to="/products" variant="outlineLight">
            See All Product Categories
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Why Buyers Trust Us</p>
            <h2 id="trust-title" className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Built for buyers who cannot afford surprises
            </h2>
            <p id="trust-desc" className="mt-4 text-base leading-relaxed text-slate-600">
              Trust in sourcing is earned with evidence: verified factories, documented
              inspections and honest reporting — even when the news is bad.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-line">
              <StrkImage
                imgId="trust-img-3d8a52"
                query="[trust-desc] [trust-title]"
                ratio="4x3"
                width="900"
                alt="Sourcing agent reviewing production documents with factory manager"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {TRUST_POINTS.map((point) => (
              <li key={point.id} className="rounded-xl border border-line bg-paper p-5">
                <CheckCircle2 className="h-5 w-5 text-brand" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-semibold text-ink">{point.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{point.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function CaseStudiesSection() {
  const featured = CASE_STUDIES.slice(0, 3)
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real projects, measurable outcomes"
          lead="A few examples of how we help buyers reduce cost, avoid defective shipments and simplify logistics."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((cs) => (
            <article
              key={cs.id}
              className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">{cs.industry}</p>
              <h3 className="mt-2 flex-1 text-lg font-semibold leading-snug text-ink">{cs.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{cs.challenge}</p>
              <p className="mt-4 border-t border-line pt-4 text-sm font-medium text-ink">
                {cs.results[0]}
              </p>
              <Link
                to="/case-studies"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
              >
                Read case study <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProblemsSection />
      <ProductsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection faqs={FAQS.slice(0, 6)} />
      <CTABand />
    </div>
  )
}
