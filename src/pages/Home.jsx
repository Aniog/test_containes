import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import ButtonLink from '@/components/shared/ButtonLink'
import InfoCard from '@/components/shared/InfoCard'
import InquiryForm from '@/components/shared/InquiryForm'
import Seo from '@/components/shared/Seo'
import {
  services,
  processSteps,
  productCategories,
  painPoints,
  trustPoints,
  caseStudies,
  faqs,
  stats,
} from '@/data/siteContent'

function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <Seo
        title="China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China"
        description="SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China."
      />
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <p id="home-hero-visual-cue" className="hidden">
          china factory sourcing agent quality inspection production follow up shipping coordination warehouse export
        </p>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-12 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-300">
              SSOURCING CHINA
            </p>
            <h1 id="home-hero-title" className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-lead" className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping with practical support on the ground in China.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Get a Free Sourcing Quote</ButtonLink>
              <ButtonLink to="/services" variant="dark">
                Explore Services
              </ButtonLink>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.value} className="rounded-2xl border border-white/10 bg-slate-900/55 p-4 backdrop-blur-sm">
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-slate-950/20">
            <img
              className="h-[340px] w-full rounded-[1.5rem] object-cover"
              alt="Factory quality inspection in China"
              data-strk-img-id="home-hero-img-9c4ad7"
              data-strk-img="[home-hero-visual-cue]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="mt-5 grid gap-4 rounded-[1.5rem] bg-slate-900/80 p-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Typical support</p>
                <p className="mt-2 text-sm leading-6 text-white">Supplier search, audits, QC inspections, and production follow-up.</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Ideal clients</p>
                <p className="mt-2 text-sm leading-6 text-white">Importers, distributors, brands, and procurement teams buying from China.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Practical sourcing support from supplier search to shipment handover"
            description="SSourcing China supports the core activities buyers usually struggle to manage remotely."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <InfoCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="A clear sourcing process for overseas buyers"
              description="We keep the process structured so you can assess suppliers, quality, timelines, and shipping readiness with more confidence."
            />
          </div>
          <div className="grid gap-5">
            {processSteps.map((step) => (
              <InfoCard key={step.step} title={step.title} description={step.description} index={step.step} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Products we source"
            title="Flexible support across common B2B sourcing categories"
            description="We support both repeat purchasing programs and new supplier development projects, depending on category fit and sourcing requirements."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category, index) => (
              <article key={category.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  className="h-52 w-full object-cover"
                  alt={category.title}
                  data-strk-img-id={`product-cat-${index + 1}-3fd91a`}
                  data-strk-img={`[product-cat-desc-${index}] [product-cat-title-${index}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-6">
                  <h3 id={`product-cat-title-${index}`} className="text-xl font-semibold tracking-tight text-slate-950">
                    {category.title}
                  </h3>
                  <p id={`product-cat-desc-${index}`} className="mt-3 text-base leading-7 text-slate-600">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Problems we solve"
              title="Common sourcing problems that create cost, delays, and uncertainty"
              description="Many overseas buyers lose time and margin because the right checks happen too late or not at all."
              light
            />
            <div className="mt-8 grid gap-3">
              {painPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base leading-7 text-slate-200">
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p id="home-shipping-visual-cue" className="hidden">
              china shipping containers cargo port logistics export warehouse loading freight coordination
            </p>
            <div className="relative mb-8 min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
              <div
                className="absolute inset-0 opacity-55"
                data-strk-bg-id="home-shipping-bg-9a1d2c"
                data-strk-bg="[home-shipping-visual-cue]"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/30" />
              <div className="relative flex min-h-[280px] items-end p-6 md:p-8">
                <div className="max-w-md">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">Shipping coordination</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Keep handover, packing, and freight preparation aligned</h3>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    Visual checkpoints across packaging, loading readiness, and shipment coordination help buyers reduce last-minute surprises.
                  </p>
                </div>
              </div>
            </div>
            <SectionHeading
              eyebrow="Why buyers work with us"
              title="Trust points built around practical execution"
              description="We focus on clarity, process control, and communication support rather than exaggerated claims."
              light
            />
            <div className="mt-8 grid gap-5">
              {trustPoints.map((item) => (
                <InfoCard key={item.title} title={item.title} description={item.description} dark />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Case studies"
              title="Examples of sourcing support for international buyers"
              description="Short examples of how structured sourcing support can improve supplier visibility and execution."
            />
            <Link to="/case-studies" className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-600">
              View all case studies
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.slug} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{study.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{study.summary}</p>
                <p className="mt-4 text-sm font-medium text-emerald-700">Outcome: {study.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions buyers often ask before starting"
              description="A few practical questions we hear from sourcing teams and importers exploring support in China."
            />
            <div className="mt-8 grid gap-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Inquiry form"
              title="Tell us about your sourcing requirement"
              description="Use the inquiry form to outline your project and get a free sourcing quote."
            />
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
