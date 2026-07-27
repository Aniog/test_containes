import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '@/components/SectionHeader.jsx'
import Icon from '@/components/Icon.jsx'
import { SERVICES, PROCESS_STEPS, PRODUCT_CATEGORIES, PROBLEMS, TRUST_POINTS, CASE_STUDIES } from '@/data/site.js'

function useSectionRef() {
  const containerRef = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  return containerRef
}

export function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything between your idea and your warehouse"
          subtitle="One team manages the entire China side of your supply chain — from finding the factory to loading the container."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-7">
              <div className="inline-flex rounded-lg bg-brand-50 p-3 text-brand-600">
                <Icon name={s.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="A clear, five-step sourcing process"
          subtitle="You always know what happens next, what it costs, and who is responsible — before any money moves."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((step) => (
            <li key={step.id} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-3xl font-extrabold tracking-tight text-brand-100">{step.num}</span>
              <h3 className="mt-3 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.short}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            See the full process in detail <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ProductsSection() {
  const containerRef = useSectionRef()
  const featured = PRODUCT_CATEGORIES.slice(0, 6)
  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products We Source"
          title="Sourcing across 12+ product categories"
          subtitle="From consumer electronics to building materials — we place your product with factories that already make it well."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
            <article key={c.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-[3/2] w-full overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[cat-${c.id}-desc] [cat-${c.id}-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 id={`cat-${c.id}-title`} className="text-base font-semibold text-slate-900">{c.title}</h3>
                <p id={`cat-${c.id}-desc`} className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            View all product categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ProblemsSection() {
  return (
    <section className="bg-navy-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          dark
          eyebrow="Problems We Solve"
          title="The risks of importing from China, handled for you"
          subtitle="Most sourcing problems come down to distance, information gaps, and misaligned incentives. Our job is to close all three."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div key={p.id} className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-7">
              <div className="inline-flex rounded-lg bg-white/10 p-3 text-brand-300">
                <Icon name={p.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.problem}</p>
              <div className="mt-4 flex gap-2.5 border-t border-white/10 pt-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <p className="text-sm leading-relaxed text-slate-300">{p.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustSection() {
  const containerRef = useSectionRef()
  return (
    <section ref={containerRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Why Buyers Trust Us</p>
            <h2 id="trust-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              A sourcing partner that works for you — not the factory
            </h2>
            <p id="trust-subtitle" className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Importing works when someone on the ground is accountable to you alone. That is exactly
              how SSourcing China is set up.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {TRUST_POINTS.map((t) => (
                <div key={t.id} className="flex gap-3.5">
                  <div className="inline-flex h-fit rounded-lg bg-brand-50 p-2.5 text-brand-600">
                    <Icon name={t.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <img
              alt="Quality inspector checking goods on a factory floor"
              data-strk-img-id="trust-inspection-img-7c2e91"
              data-strk-img="[trust-subtitle] [trust-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function CaseStudiesSection() {
  const containerRef = useSectionRef()
  return (
    <section ref={containerRef} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case Studies"
          title="Real sourcing projects, measurable outcomes"
          subtitle="A few examples of how we helped importers reduce risk, cost, and lead time."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <article key={c.id} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  alt={c.title}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.id}-summary] [${c.id}-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                  {c.industry}
                </span>
                <h3 id={`${c.id}-title`} className="mt-3 text-base font-semibold leading-snug text-slate-900">{c.title}</h3>
                <p id={`${c.id}-summary`} className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.summary}</p>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <p className="text-base font-bold text-brand-600">{r.value}</p>
                      <p className="mt-0.5 text-[11px] leading-tight text-slate-500">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
            Read all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
