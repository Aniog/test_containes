import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, ClipboardCheck, Factory, Globe2, PackageCheck, Search, ShieldCheck, Ship, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import InquiryForm from '../components/InquiryForm.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { caseStudies, faqs, problems, processSteps, productCategories, services, trustPoints } from '../data/siteContent.js'
import strkImgConfig from '../strk-img-config.json'

const iconMap = [Search, ShieldCheck, ClipboardCheck, Factory, Ship, Globe2]
const statItems = [
  ['Supplier checks', 'Background, capability, and responsiveness review'],
  ['QC reports', 'Clear photo-based findings before shipment'],
  ['Shipping support', 'Packing, documents, and forwarder handover'],
]

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef} className="bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-white" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:py-24 lg:px-8">
          <div className="flex flex-col justify-center">
            <p id="hero-eyebrow" className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              China-based sourcing agent for overseas buyers
            </p>
            <h1 id="hero-title" className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SSourcing China helps international buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical local support.
            </p>
            <p id="hero-visual-context" className="sr-only" aria-hidden="true">
              professional quality inspector checking manufactured products in a modern Chinese factory with production line and export cartons
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800">
                Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">
                View sourcing services
              </Link>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {statItems.map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-950 shadow-sm">
                  <p className="font-semibold text-slate-950">{title}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-36 w-36 rounded-full bg-blue-100" />
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-amber-100" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-300/60">
              <img
                alt="Quality inspector reviewing products in a Chinese factory"
                className="h-[420px] w-full object-cover"
                data-strk-img-id="ssourcing-hero-modern-qc-5f3c21"
                data-strk-img="[hero-visual-context] [hero-subtitle] [hero-title] [hero-eyebrow]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 text-slate-950 shadow-lg backdrop-blur">
                <div className="flex items-start gap-3">
                  <PackageCheck className="mt-1 h-5 w-5 text-emerald-700" />
                  <div>
                    <p className="font-semibold text-slate-950">Practical sourcing control</p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">Supplier fit, specification clarity, production status, and pre-shipment checks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {['Supplier search', 'Factory verification', 'QC inspection', 'Shipping coordination'].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-white">
              <CheckCircle2 className="h-5 w-5 text-emerald-300" />
              <span className="text-sm font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="China sourcing services built around buyer risk reduction"
            description="From early supplier search to final shipment coordination, SSourcing China gives overseas buyers practical local support at the points where mistakes are costly."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[index]
              return (
                <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                  <ul className="mt-5 grid gap-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Sourcing process"
              title="A clear workflow from product brief to shipment handover"
              description="Our process is designed to make supplier comparison, quality control, and production communication easier to manage from overseas."
            />
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
              <img
                alt="Factory production line and sourcing coordination"
                className="h-80 w-full object-cover"
                data-strk-img-id="ssourcing-process-factory-51d8f2"
                data-strk-img="[process-visual-caption] [process-section-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <p id="process-visual-caption" className="mt-4 text-sm leading-6 text-slate-600">
              Realistic follow-up means checking facts, documents, samples, production status, and shipment readiness before decisions are made.
            </p>
          </div>
          <div id="process-section-title" className="grid gap-4">
            {processSteps.map((step) => (
              <article key={step.step} className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950 md:grid-cols-[4rem_1fr]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">{step.step}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Products we source"
            title="Support for industrial, consumer, and custom product sourcing"
            description="We work best when buyers have defined requirements, target markets, and order expectations. If the product requires compliance testing, we help clarify supplier documents and next steps."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {productCategories.map((category) => (
                <div key={category} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800 shadow-sm">
                  {category}
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/70">
              <img
                alt="Warehouse products prepared for export shipping"
                className="h-full min-h-80 w-full object-cover"
                data-strk-img-id="ssourcing-products-warehouse-7e19aa"
                data-strk-img="[products-section-caption] [products-section-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
          <p id="products-section-title" className="sr-only">Industrial products, consumer goods, packaging, private label products, warehouse export shipping</p>
          <p id="products-section-caption" className="mt-5 text-center text-sm text-slate-600">Product sourcing should connect specifications, supplier capability, QC expectations, and shipping requirements.</p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Problems we solve"
              title="Common sourcing problems become expensive when handled too late"
              description="SSourcing China helps buyers add local checks, clearer communication, and structured follow-up before orders move too far."
            />
            <div className="mt-8 grid gap-3">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-800">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                  <p className="text-sm leading-6">{problem}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Trust points</p>
            <div className="mt-8 grid gap-5">
              {trustPoints.map((item) => (
                <article key={item.title} className="rounded-2xl bg-white/10 p-5 text-white">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Case studies"
            title="Examples of practical sourcing support"
            description="These scenarios show the type of supplier, QC, and coordination work buyers commonly ask us to handle."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{study.sector}</span>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{study.title}</h3>
                <p className="mt-4 text-sm font-semibold text-slate-800">Challenge</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{study.challenge}</p>
                <p className="mt-4 text-sm font-semibold text-slate-800">Support</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{study.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              align="left"
              eyebrow="FAQ"
              title="Questions buyers ask before working with a sourcing agent"
              description="Clear expectations help both sides decide whether sourcing support is a good fit."
            />
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-950">
              <Truck className="h-8 w-8 text-blue-700" />
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Need help with an existing order? Share supplier details, product status, and shipment deadline in the inquiry form.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-950 open:bg-white open:shadow-sm">
                <summary className="cursor-pointer text-base font-bold text-slate-950">{faq.question}</summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-100 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Inquiry form</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">Get a Free Sourcing Quote</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Send your product brief and sourcing needs. A qualified inquiry should include product details, quantity, market, timeline, and the type of support you need.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  )
}

export default Home
