import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Package,
  AlertTriangle,
  PackageX,
  Languages,
  Clock,
  FileWarning,
  ShieldAlert,
  CheckCircle2,
  Quote,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { SectionHeading } from "@/components/ui/SectionHeading"
import CtaBand from "@/components/sections/CtaBand"
import FaqList from "@/components/sections/FaqList"
import InquiryForm from "@/components/sections/InquiryForm"
import {
  SERVICES,
  PROCESS_STEPS,
  PRODUCT_CATEGORIES,
  PROBLEMS,
  TRUST_POINTS,
  CASE_STUDIES,
  FAQS,
} from "@/lib/content"

const ICONS = {
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  Package,
  AlertTriangle,
  PackageX,
  Languages,
  Clock,
  FileWarning,
  ShieldAlert,
}

function Hero() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-7f3a9c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/55" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            China-based sourcing agent
          </span>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl"
          >
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping — so you
            can source from China with confidence and without the guesswork.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              as={Link}
              to="/contact"
              size="lg"
              className="bg-brand text-white hover:bg-brand-dark"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              as={Link}
              to="/how-it-works"
              variant="secondary"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              See How It Works
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/75">
            {[
              "Verified suppliers only",
              "On-site factory audits",
              "AQL pre-shipment inspection",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="border-b border-border-soft bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4 md:px-6 lg:px-8">
        {TRUST_POINTS.map((tp) => (
          <div key={tp.label} className="text-center">
            <p className="text-3xl font-extrabold tracking-tight text-brand md:text-4xl">
              {tp.stat}
            </p>
            <p className="mt-1.5 text-sm text-muted">{tp.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="What we do"
          title="Sourcing services that cover the full journey"
          description="From finding the right factory to delivering inspected goods, we handle every step so you can focus on selling."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] || Search
            return (
              <Card
                key={service.id}
                className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="p-6 md:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-body">
                    {service.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-slate-body"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Button as={Link} to="/services" variant="outline" size="lg">
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="A clear process from request to delivery"
          description="Six defined steps keep your order transparent and on track at every stage."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-border-soft bg-page p-6 md:p-8"
            >
              <span className="text-4xl font-extrabold text-brand/20">
                {step.step}
              </span>
              <h3 className="mt-2 text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button as={Link} to="/how-it-works" variant="outline" size="lg">
            See the full process
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Products we source"
          title="Categories we source every day"
          description="We work across a wide range of consumer and industrial products, with category-specific QC standards."
        />
        <div
          ref={ref}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCT_CATEGORIES.map((cat) => (
            <Card
              key={cat.id}
              className="overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-page">
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
              <div className="p-6">
                <h3 id={cat.titleId} className="text-lg font-bold text-ink">
                  {cat.title}
                </h3>
                <p
                  id={cat.descId}
                  className="mt-2 text-sm leading-relaxed text-slate-body"
                >
                  {cat.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button as={Link} to="/products" variant="outline" size="lg">
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  return (
    <section className="bg-ink py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
            Problems we solve
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Common risks of sourcing from China — handled
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Most sourcing problems come from the same root causes. Here is how
            we address each one before it costs you money.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => {
            const Icon = ICONS[p.icon] || AlertTriangle
            return (
              <div
                key={p.problem}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-warm/20 text-accent-warm">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-white">
                  {p.problem}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                  {p.solution}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesSection() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Case studies"
          title="Real sourcing outcomes"
          description="A few examples of how our process translated into measurable results for global buyers."
        />
        <div ref={ref} className="mt-12 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((cs) => (
            <Card
              key={cs.id}
              className="flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-page">
                <img
                  alt={cs.client}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {cs.industry}
                </span>
                <h3
                  id={cs.titleId}
                  className="mt-2 text-lg font-bold text-ink"
                >
                  {cs.client}
                </h3>
                <p
                  id={cs.descId}
                  className="mt-2 text-sm leading-relaxed text-slate-body"
                >
                  {cs.result}
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border-soft pt-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="text-lg font-extrabold text-brand">
                        {m.value}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-tight text-muted">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button as={Link} to="/case-studies" variant="outline" size="lg">
            Read all case studies
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
        <Quote className="mx-auto h-10 w-10 text-brand/30" />
        <p className="mt-6 text-2xl font-medium leading-relaxed text-ink md:text-3xl">
          “They caught a quality issue during pre-shipment inspection that would
          have cost us a full container. Having a team on the ground in China
          paid for itself on the very first order.”
        </p>
        <div className="mt-8">
          <p className="font-bold text-ink">Operations Director</p>
          <p className="text-sm text-muted">
            North American consumer electronics brand
          </p>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Questions buyers ask us"
          description="Straight answers to the most common questions about working with a China sourcing agent."
        />
        <div className="mt-12">
          <FaqList items={FAQS.slice(0, 6)} />
        </div>
      </div>
    </section>
  )
}

function InquirySection() {
  return (
    <section id="inquiry" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get started"
              title="Request your free sourcing quote"
              description="Tell us what you want to source. We will review your requirements and reply within one business day with a clear plan and quote — no obligation."
            />
            <ul className="mt-8 space-y-4">
              {[
                "No commitment — the first quote is free",
                "Reply within one business day",
                "Your information stays confidential",
                "Bilingual team that understands your specs",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-slate-body">{t}</span>
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
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <TestimonialSection />
      <FaqSection />
      <InquirySection />
      <CtaBand />
    </>
  )
}
