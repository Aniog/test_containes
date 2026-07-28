import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, BadgeCheck, Box, ClipboardCheck, Factory, PackageCheck, Search, ShipWheel, ShieldCheck } from 'lucide-react'
import ButtonLink from '@/components/common/ButtonLink'
import InquiryForm from '@/components/common/InquiryForm'
import SectionHeading from '@/components/common/SectionHeading'
import strkImgConfig from '@/strk-img-config.json'
import { services, processSteps, productCategories, problemPoints, trustPoints, caseStudies, faqs } from '@/content/siteContent'

const statItems = [
  'Supplier search and comparison',
  'Factory verification support',
  'Quality inspection coordination',
  'Production and shipping follow-up',
]

const serviceIcons = [Search, ShieldCheck, ClipboardCheck, Factory, PackageCheck, ShipWheel]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <main>
        <section className="bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">SSourcing China</p>
              <h1 id="home-hero-title" className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="home-hero-desc" className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China with a clear, practical process.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink to="/contact">Get a Free Sourcing Quote</ButtonLink>
                <ButtonLink to="/services" variant="ghostLight">
                  View Services
                </ButtonLink>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {statItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <BadgeCheck className="mt-0.5 h-5 w-5 text-sky-100" />
                    <p className="text-sm leading-6 text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-rows-[1.1fr_0.9fr]">
              <div
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl shadow-slate-950/10"
                data-strk-bg-id="home-hero-factory-6f1b20"
                data-strk-bg="[home-hero-desc] [home-hero-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
              >
                <div className="flex h-full min-h-[320px] items-end bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">On-the-ground support</p>
                    <p className="mt-2 max-w-sm text-lg font-medium text-white">Factory visits, verification, quality control, and export coordination in China.</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Buyer focus</p>
                  <p className="mt-4 text-3xl font-semibold text-white">B2B</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">Support for importers, wholesalers, brand owners, and procurement teams.</p>
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
                  <img
                    alt="Quality inspection in China"
                    className="h-full min-h-[220px] w-full object-cover"
                    data-strk-img-id="home-hero-qc-8a2c11"
                    data-strk-img="[home-hero-desc] [home-hero-title]"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="Sourcing support designed for overseas buyers working with China"
              description="Use one local partner to handle supplier search, factory checks, quality coordination, production follow-up, and shipment readiness support."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index]

                return (
                  <article key={service.title} className="rounded-3xl border border-slate-950/10 bg-slate-50 p-6 shadow-sm md:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700/75">{service.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeading
                eyebrow="How it works"
                title="A clear sourcing process from requirement to shipment"
                description="Keep sourcing decisions and supplier follow-up organized with defined milestones and local coordination."
              />
            </div>
            <div className="space-y-5">
              {processSteps.map((step) => (
                <div key={step.step} className="rounded-3xl border border-slate-950/10 bg-white p-6 shadow-sm md:flex md:gap-6 md:p-8">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">{step.step}</div>
                  <div className="mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700/75">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Products we source"
              title="Product categories commonly supported"
              description="We work across practical B2B categories where supplier screening, quality follow-up, and communication control matter."
              align="center"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {productCategories.map((category) => (
                <article key={category.title} className="rounded-3xl border border-slate-950/10 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 text-slate-950">
                    <Box className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700/75">{category.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-stone-100 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <div>
              <SectionHeading
                eyebrow="Problems we solve"
                title="Reduce sourcing uncertainty before it becomes a cost problem"
                description="Overseas buyers often need more than quotes. They need supplier clarity, local follow-up, and earlier risk visibility."
              />
              <div className="mt-8 grid gap-4">
                {problemPoints.map((point) => (
                  <div key={point} className="flex gap-4 rounded-2xl border border-slate-950/10 bg-white p-5 shadow-sm">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />
                    <p className="text-sm leading-7 text-slate-700/80">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-950/10 bg-white shadow-xl shadow-slate-950/10">
              <img
                alt="Container shipping coordination"
                className="h-full min-h-[420px] w-full object-cover"
                data-strk-img-id="home-shipping-1fd20b"
                data-strk-img="[home-hero-desc] [home-hero-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Why buyers work with us"
              title="Trust points that matter in operational sourcing"
              description="A sourcing partner should make supplier decisions clearer and execution steadier, not more complicated."
              tone="inverse"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {trustPoints.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Case studies"
              title="Examples of the type of sourcing support buyers look for"
              description="Presented in a grounded way to show typical business situations rather than exaggerated success claims."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article key={study.title} className="rounded-3xl border border-slate-950/10 bg-slate-50 p-6 shadow-sm md:p-8">
                  <h3 className="text-xl font-semibold text-slate-950">{study.title}</h3>
                  <p className="mt-4 text-sm font-medium text-blue-600">Challenge</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700/75">{study.summary}</p>
                  <p className="mt-5 text-sm font-medium text-blue-600">Support provided</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700/75">{study.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeading
                eyebrow="FAQ"
                title="Common questions from overseas buyers"
                description="Short, practical answers for first discussions and project qualification."
              />
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-3xl border border-slate-950/10 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700/75">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionHeading
                eyebrow="Inquiry form"
                title="Start your sourcing discussion"
                description="Tell us what you need to source, what stage you are in, and where the project is blocked. The goal is to generate qualified sourcing inquiries from serious overseas buyers."
              />
              <div className="mt-8 rounded-3xl border border-slate-950/10 bg-slate-50 p-6">
                <div className="flex items-start gap-4">
                  <Factory className="mt-1 h-6 w-6 text-blue-600" />
                  <div>
                    <p className="text-base font-semibold text-slate-950">Typical inquiry topics</p>
                    <p className="mt-2 text-sm leading-7 text-slate-700/75">
                      New supplier search, factory verification, inspection support, production issues, packaging control, and shipment coordination.
                    </p>
                  </div>
                </div>
                <ButtonLink to="/contact" className="mt-6 inline-flex items-center gap-2">
                  Go to Contact Page <ArrowRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>
    </div>
  )
}
