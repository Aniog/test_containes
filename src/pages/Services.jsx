import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  Search,
  ShieldCheck,
  FlaskConical,
  Handshake,
  ClipboardCheck,
  Factory,
  Ship,
  Tag,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { services } from "@/data/content"

const iconMap = {
  sourcing: Search,
  verification: ShieldCheck,
  samples: FlaskConical,
  negotiation: Handshake,
  inspection: ClipboardCheck,
  production: Factory,
  shipping: Ship,
  "private-label": Tag,
}

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <Section background="light" className="pt-12 md:pt-20" id="top">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Services
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-navy-600 tracking-tight">
            End-to-end China sourcing, audit, QC, and shipping
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Pick a single service or hand us the full chain. Every engagement
            is run by our in-house bilingual team in China — never
            subcontracted.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button to="/contact" variant="primary" size="md">
              Get a Free Sourcing Quote
            </Button>
            <Button to="/how-it-works" variant="secondary" size="md">
              See how it works
            </Button>
          </div>
        </div>
      </Section>

      <Section background="white" className="pt-0">
        <div ref={ref} className="space-y-20">
          {services.map((s, idx) => {
            const Icon = iconMap[s.id] || Search
            const reverse = idx % 2 === 1
            return (
              <div
                key={s.id}
                id={s.id}
                className="grid lg:grid-cols-12 gap-10 items-center scroll-mt-24"
              >
                <div className={reverse ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"}>
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-navy-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl md:text-3xl font-bold text-navy-600 tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-lg text-slate-600 leading-relaxed">
                    {s.summary}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-500 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={reverse ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card">
                    <img
                      alt={`${s.title} - China sourcing service`}
                      data-strk-img-id={`services-${s.id}-img-7a8c2d`}
                      data-strk-img={`[${s.id}-deliverables] [${s.id}-summary] [${s.id}-title] services sourcing factory`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                    <ul className="sr-only" id={`${s.id}-deliverables`}>
                      {s.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                    <p className="sr-only" id={`${s.id}-summary`}>{s.summary}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      <Section background="navy">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Not sure which services you need?
            </h2>
            <p className="mt-4 text-lg text-slate-200 leading-relaxed max-w-2xl">
              Send us a brief and we will recommend the right scope. Most
              first-time buyers start with sourcing + a sample round + one
              inspection, and add services as the project matures.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Button to="/contact" variant="primary" size="lg">
              Get a tailored scope
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-white"
            >
              Or read case studies →
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
