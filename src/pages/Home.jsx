import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, ClipboardCheck, Factory, Globe2, Search, ShieldCheck, Ship, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import InquiryForm from '../components/InquiryForm.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import { caseStudies, faqs, problems, processSteps, productCategories, services, trustPoints } from '../data/siteContent.js'

const iconMap = [Search, ShieldCheck, ClipboardCheck, Factory, Ship]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), [])

  return (
    <main ref={containerRef} className="bg-brand-surface text-brand-ink">
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="absolute inset-0 opacity-30" data-strk-bg-id="home-hero-bg-factory-qc-shipping-a82f4c" data-strk-bg="[hero-subtitle] [hero-title]" data-strk-bg-ratio="16x9" data-strk-bg-width="1600" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/55" />
        <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50 backdrop-blur">China-based sourcing support for overseas buyers</p>
            <h1 id="hero-title" className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">China Sourcing Agent for Global Buyers</h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">SSourcing China helps international buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with clear China-side execution.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-7 py-4 text-base font-bold text-white shadow-xl shadow-black/20 transition hover:bg-blue-700">Get a Free Sourcing Quote <ArrowRight className="h-5 w-5" /></Link>
              <Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:bg-white/20">See How It Works</Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {['Supplier screening', 'Factory checks', 'QC & shipping'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white backdrop-blur"><CheckCircle2 className="mb-3 h-5 w-5 text-cyan-200" />{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
            <img alt="Quality inspection in a Chinese factory" className="h-[460px] w-full rounded-[1.5rem] bg-slate-300 object-cover" data-strk-img-id="home-hero-inspection-visual-42dc19" data-strk-img="[hero-subtitle] [hero-title]" data-strk-img-ratio="3x4" data-strk-img-width="900" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-brand-border bg-white p-6 shadow-sm md:grid-cols-4 md:p-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-brand-ink"><Globe2 className="mb-4 h-7 w-7 text-brand-teal" /><h3 className="font-bold text-brand-ink">{point.title}</h3><p className="mt-2 text-sm leading-6 text-brand-muted">{point.desc}</p></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading id="services-title" eyebrow="Services" title="China sourcing services for practical buyer control" desc="Choose one focused service or combine sourcing, verification, QC, production follow-up, and shipping coordination into one managed workflow." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} service={service} sectionTitleId="services-title" />)}</div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="process-title" center eyebrow="Sourcing process" title="A clear process from brief to shipment" desc="We keep the workflow structured so buyers can compare options, understand risks, and move decisions forward with better information." />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {processSteps.map((item, index) => {
              const Icon = iconMap[index]
              return <div key={item.step} className="rounded-3xl border border-brand-border bg-brand-surface p-6 text-brand-ink"><div className="flex items-center justify-between gap-4"><span className="text-sm font-extrabold text-brand-blue">{item.step}</span><Icon className="h-7 w-7 text-brand-teal" /></div><h3 className="mt-6 text-lg font-bold text-brand-ink">{item.title}</h3><p className="mt-3 text-sm leading-6 text-brand-muted">{item.desc}</p></div>
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div><SectionHeading id="products-title" eyebrow="Products we source" title="Product categories commonly supported" desc="We work across many B2B and consumer product categories where supplier capability, inspection, packaging, and shipping coordination matter." /><Link to="/products-we-source" className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-blue px-6 py-3 font-bold text-brand-blue transition hover:bg-blue-50">View product categories <ArrowRight className="h-4 w-4" /></Link></div>
        <div className="grid gap-4 sm:grid-cols-2">{productCategories.map((item) => <div key={item} className="rounded-2xl border border-brand-border bg-white p-5 text-brand-ink shadow-sm"><CheckCircle2 className="mb-3 h-5 w-5 text-brand-teal" /><p className="font-semibold text-brand-ink">{item}</p></div>)}</div>
      </section>

      <section className="bg-brand-navy py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div><p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Problems we solve</p><h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Reduce the blind spots in China sourcing</h2><p className="mt-5 text-lg leading-8 text-blue-100">Many sourcing problems are caused by incomplete supplier checks, unclear specifications, weak follow-up, or late quality control. We help buyers control these practical risks.</p></div>
          <div className="grid gap-3">{problems.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 text-blue-50"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" /><span className="font-medium">{item}</span></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading id="case-title" eyebrow="Case studies" title="Examples of practical sourcing support" desc="Representative project scenarios showing how structured supplier review, QC, and follow-up help buyers make better decisions." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">{caseStudies.map((study) => <article key={study.title} className="rounded-3xl border border-brand-border bg-white p-6 text-brand-ink shadow-sm"><p className="text-sm font-bold text-brand-blue">{study.industry}</p><h3 className="mt-3 text-xl font-bold text-brand-ink">{study.title}</h3><p className="mt-4 text-sm leading-6 text-brand-muted"><strong className="text-brand-ink">Challenge:</strong> {study.challenge}</p><p className="mt-3 text-sm leading-6 text-brand-muted"><strong className="text-brand-ink">Approach:</strong> {study.approach}</p><p className="mt-3 text-sm leading-6 text-brand-muted"><strong className="text-brand-ink">Result:</strong> {study.result}</p></article>)}</div>
      </section>

      <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading id="faq-title" center eyebrow="FAQ" title="Common questions from overseas buyers" desc="Straightforward answers about China sourcing, factory verification, QC, and project coordination." /><div className="mx-auto mt-10 grid max-w-4xl gap-4">{faqs.map((item) => <details key={item.q} className="rounded-2xl border border-brand-border bg-brand-surface p-5 text-brand-ink open:bg-white open:shadow-sm"><summary className="cursor-pointer text-base font-bold text-brand-ink">{item.q}</summary><p className="mt-3 text-sm leading-6 text-brand-muted">{item.a}</p></details>)}</div></div></section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div><SectionHeading eyebrow="Start a project" title="Tell us what you need to source from China" desc="The more details you provide, the more useful our first reply can be. Photos, drawings, quality standards, packaging needs, and target quantities are helpful." /><div className="mt-8 rounded-3xl border border-brand-border bg-white p-6 text-brand-ink shadow-sm"><Truck className="h-8 w-8 text-brand-teal" /><h3 className="mt-4 text-xl font-bold text-brand-ink">Useful details to include</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-brand-muted"><li>Product photos, materials, dimensions, or reference links</li><li>Estimated order quantity and target market</li><li>Quality requirements, packaging, labels, or compliance needs</li><li>Timeline, shipment destination, and current supplier concerns</li></ul></div></div>
        <InquiryForm />
      </section>
    </main>
  )
}
