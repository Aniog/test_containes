import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react'
import CTAButton from '@/components/layout/CTAButton'
import SectionHeading from '@/components/sections/SectionHeading'
import CTABand from '@/components/sections/CTABand'
import InquiryForm from '@/components/sections/InquiryForm'
import {
  SERVICES,
  PROCESS_STEPS,
  PRODUCT_CATEGORIES,
  PROBLEMS,
  TRUST_POINTS,
  STATS,
  CASE_STUDIES,
  FAQS,
} from '@/data/content'

function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <section ref={ref} className="relative overflow-hidden bg-primary">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            China-based sourcing agent
          </span>
          <h1
            id="hero-title"
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 max-w-2xl text-lg text-primary-foreground/85 sm:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            can import from China with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton className="px-7 py-3.5 text-base" />
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold text-primary-foreground transition hover:bg-white/10"
            >
              See how it works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
            {[
              'Vetted suppliers',
              'On-site factory audits',
              'Independent QC inspection',
              'End-to-end shipping',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cta" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="text-3xl font-bold text-accent sm:text-4xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="What we do"
          title="Sourcing services that cover the whole journey"
          description="From finding the right factory to delivering goods that pass inspection, we manage every step on the ground in China."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-accent/40 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="A clear sourcing process, step by step"
          description="You always know where your order stands, from the first inquiry to final delivery."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div
                key={step.id}
                className="relative rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-2xl font-bold text-muted/60">{step.step}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            See the full process
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Products() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <section ref={ref} className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Products we source"
          title="Categories we know how to source well"
          description="We work across a wide range of consumer and industrial products, with QC tailored to each category."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.id}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full bg-muted">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-accent" />
                    <h3 id={cat.titleId} className="text-base font-semibold text-foreground">
                      {cat.title}
                    </h3>
                  </div>
                  <p id={cat.descId} className="mt-2 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Browse all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Problems() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Problems we solve"
          title="Common risks when importing from China"
          description="Most importers run into the same issues. Here is how we address each one."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.id}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-danger/10 text-danger">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Trust() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Why buyers trust us"
          title="A local team you can rely on"
          description="We are based in China and work independently of the factories, so our reports reflect what we actually see."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((t) => {
            const Icon = t.icon
            return (
              <div
                key={t.id}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesPreview() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <section ref={ref} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Case studies"
          title="Results from real sourcing projects"
          description="A few examples of how our sourcing, QC, and logistics work helped buyers import more reliably."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.id}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <div className="aspect-[16/9] w-full bg-muted">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {cs.industry}
                </span>
                <h3 id={cs.titleId} className="mt-2 text-base font-semibold text-foreground">
                  {cs.title}
                </h3>
                <p id={cs.descId} className="mt-2 text-sm text-muted-foreground">
                  {cs.result}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Straight answers to the questions buyers ask before working with a sourcing agent."
        />
        <div className="mt-10 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-foreground">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function InquirySection() {
  return (
    <section id="inquiry" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Get started"
              title="Request a free sourcing quote"
              description="Tell us about your product and requirements. We will review your request and shortlist vetted suppliers — with no obligation to proceed."
            />
            <ul className="mt-8 space-y-3">
              {[
                'Free initial review of your sourcing request',
                'Shortlist of 2–3 vetted suppliers with transparent pricing',
                'Reply within one business day',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <InquiryForm />
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Products />
      <Problems />
      <Trust />
      <CaseStudiesPreview />
      <FAQ />
      <InquirySection />
      <CTABand />
    </>
  )
}
