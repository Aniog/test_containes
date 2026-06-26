import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  Container,
  Globe2,
  ClipboardCheck,
  Plus,
  Minus,
} from 'lucide-react'
import {
  SERVICES,
  PROCESS,
  CATEGORIES,
  PROBLEMS,
  TRUST_POINTS,
  CASE_STUDIES,
  FAQS,
} from '@/data/content.js'
import InquiryForm from '@/components/InquiryForm.jsx'
import { useState } from 'react'

function Eyebrow({ children }) {
  return (
    <span className="inline-block text-xs uppercase tracking-[0.18em] font-semibold text-red-600">
      {children}
    </span>
  )
}

function SectionHeader({ eyebrow, title, desc, align = 'left', titleId, descId }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={titleId} className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {desc && (
        <p id={descId} className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          {desc}
        </p>
      )}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="home-hero-bg-3f4a8d"
        data-strk-bg="[home-hero-title] industrial container port shipping cranes"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/60" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs uppercase tracking-[0.18em] font-semibold text-red-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              Verified by SSourcing China
            </span>
            <h1 id="home-hero-title" className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-subtitle" className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              We help overseas brands, retailers and Amazon sellers source reliable Chinese suppliers,
              verify factories, control quality, follow production and coordinate shipping —
              with transparent fees and weekly progress reports.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-600 bg-slate-900/40 px-6 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                See How It Works
              </Link>
            </div>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300">
              {[
                'Reply within 1 working day',
                'No supplier kickbacks',
                'AQL inspection included',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl">
              <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                <Star className="h-3 w-3 fill-current" />
                Trusted by 240+ overseas brands
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-800">
                <img
                  alt="Quality inspector reviewing products on a Chinese factory floor"
                  data-strk-img-id="home-hero-card-img-7e2c9a"
                  data-strk-img="[home-hero-title] quality inspector checking products inside a Chinese factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-slate-800/60 p-3">
                  <div className="text-xl font-bold text-white">240+</div>
                  <div className="text-[11px] uppercase tracking-wide text-slate-400 mt-1">Active buyers</div>
                </div>
                <div className="rounded-lg bg-slate-800/60 p-3">
                  <div className="text-xl font-bold text-white">12yr</div>
                  <div className="text-[11px] uppercase tracking-wide text-slate-400 mt-1">Experience</div>
                </div>
                <div className="rounded-lg bg-slate-800/60 p-3">
                  <div className="text-xl font-bold text-white">98%</div>
                  <div className="text-[11px] uppercase tracking-wide text-slate-400 mt-1">On-time ship</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_POINTS.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white border border-slate-200 text-red-600 shrink-0">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-900">{label}</div>
                <p className="text-xs text-slate-600 mt-0.5 leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Services"
            title="End-to-end sourcing, or just the parts you need"
            desc="Pick a single service or run a complete sourcing project with one accountable team. Every engagement starts with a written scope and a fixed fee."
          />
          <Link to="/services" className="text-sm font-semibold text-red-600 hover:text-red-700 inline-flex items-center gap-1">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ id, icon: Icon, title, short, points }) => (
            <article key={id} className="rounded-xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-red-50 text-red-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{short}</p>
              <ul className="mt-4 space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-600 shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="A 7-step sourcing process built for B2B buyers"
          desc="Predictable milestones, clear deliverables and one project manager from brief to delivery."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS.slice(0, 4).map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="relative rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-red-600">{step}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                  <Icon className="h-4.5 w-4.5" />
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROCESS.slice(4).map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="relative rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-red-600">{step}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                  <Icon className="h-4.5 w-4.5" />
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700">
            Read the full process <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Products We Source"
            title="Categories we work with every week"
            desc="Most projects fall into one of these nine categories. We can also support adjacent products on request."
          />
          <Link to="/products" className="text-sm font-semibold text-red-600 hover:text-red-700 inline-flex items-center gap-1">
            See all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {CATEGORIES.map(({ id, icon: Icon, title, desc }) => (
            <div key={id} className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-red-200 hover:bg-red-50/30 transition-colors">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-700 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Eyebrow>Problems We Solve</Eyebrow>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
            Importing from China shouldn't feel like a gamble
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            Most overseas buyers run into the same six issues. Here is how we prevent each one.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-red-600/15 text-red-400">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Case Studies"
            title="Real projects, real numbers"
            desc="A snapshot of recent client engagements across categories and regions."
          />
          <Link to="/case-studies" className="text-sm font-semibold text-red-600 hover:text-red-700 inline-flex items-center gap-1">
            All case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.slice(0, 4).map((c) => (
            <article key={c.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/2] overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}] ${c.category} factory production`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {c.category}
                </span>
                <h3 id={c.titleId} className="mt-3 text-lg font-semibold text-slate-900">{c.title}</h3>
                <p id={c.descId} className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>

                <div className="mt-5 grid grid-cols-3 gap-3 pt-5 border-t border-slate-100">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg font-bold text-slate-900">{m.value}</div>
                      <div className="text-[11px] uppercase tracking-wide text-slate-500 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          desc="Straight answers to the questions buyers ask before starting a project."
          align="center"
        />

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="rounded-xl border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900">{f.q}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700 shrink-0">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function InquirySection() {
  return (
    <section id="inquiry" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2">
            <Eyebrow>Get a Free Sourcing Quote</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Tell us what you need to source
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Share your product details and target quantity. A senior sourcing manager will reply
              within one working day with a feasibility check and next steps — no obligation.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <ClipboardCheck className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Free feasibility review</div>
                  <p className="text-sm text-slate-600">We assess MOQ, target price and timeline before any commitment.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">Serving 30+ countries</div>
                  <p className="text-sm text-slate-600">US, EU, UK, AU, JP, MENA, LATAM — buyers we work with daily.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Container className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">From sample to container</div>
                  <p className="text-sm text-slate-600">Source, inspect, ship — handled by one accountable team.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <CategoriesSection />
      <ProblemsSection />
      <CaseStudiesSection />
      <FaqSection />
      <InquirySection />
    </div>
  )
}
