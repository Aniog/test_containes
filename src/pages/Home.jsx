import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import InquiryForm from '@/components/forms/InquiryForm.jsx'
import BulletList from '@/components/common/BulletList.jsx'
import CTASection from '@/components/common/CTASection.jsx'
import FAQList from '@/components/common/FAQList.jsx'
import ImageCard from '@/components/common/ImageCard.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import StatsBand from '@/components/common/StatsBand.jsx'
import { usePageSEO } from '@/hooks/usePageSEO.js'
import strkImgConfig from '@/strk-img-config.json'
import {
  caseStudies,
  faqItems,
  heroChecklist,
  homeSideVisualUrl,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  trustPoints,
} from '@/data/site-content.js'

const stats = [
  { value: 'China-based', label: 'Local coordination for overseas buyers needing practical follow-through.' },
  { value: 'Buyer-focused', label: 'Support structured around supplier fit, QC control, and shipment readiness.' },
  { value: 'English-first', label: 'Clear communication that helps teams make faster sourcing decisions.' },
  { value: 'Operational', label: 'Practical help across verification, production, inspection, and shipping.' },
]

const Home = () => {
  usePageSEO(
    'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
    'SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping from China.',
  )

  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <main ref={containerRef}>
      <section className="px-4 pb-16 pt-8 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 md:px-10 md:py-20">
            <div
              className="absolute inset-0 opacity-45"
              data-strk-bg-id="home-hero-bg-2fd1cc"
              data-strk-bg="[home-hero-subtitle] [home-hero-title]"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1600"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                SSourcing China
              </p>
              <h1 id="home-hero-title" className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
                China Sourcing Agent for Global Buyers
              </h1>
              <p id="home-hero-subtitle" className="mt-6 max-w-2xl text-base leading-7 text-slate-200 md:text-xl">
                Practical sourcing support for overseas buyers who need reliable suppliers, clear verification, quality control, production follow-up, and shipping coordination in China.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Get a Free Sourcing Quote
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
                >
                  Explore Services
                </Link>
              </div>
              <div className="mt-10 max-w-xl">
                <BulletList
                  items={heroChecklist}
                  itemClassName="text-slate-100"
                  dotClassName="bg-sky-300"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Why buyers contact us</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
                Reduce supplier risk and keep your sourcing process moving.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We support buyers who need practical help on supplier search, verification, inspection, production updates, and shipment coordination.
              </p>
              <div className="mt-6 grid gap-4">
                {trustPoints.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img
                alt="Factory quality review"
                className="h-64 w-full object-cover"
                data-strk-img-id="home-side-visual-51c12e"
                data-strk-img="[home-trust-visual-desc] [home-trust-visual-title] [home-hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src={homeSideVisualUrl}
              />
              <div className="p-6 md:p-8">
                <h3 id="home-trust-visual-title" className="text-xl font-semibold text-slate-950">
                  Real sourcing work, not generic outsourcing talk
                </h3>
                <p id="home-trust-visual-desc" className="mt-3 text-base leading-7 text-slate-600">
                  The site is designed around the actual steps buyers worry about: supplier fit, factory checks, quality visibility, production timing, and shipping handoff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatsBand items={stats} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Support across supplier search, verification, QC, and shipping readiness"
            description="Choose support for a full sourcing workflow or for one specific stage where your team needs help on the ground in China."
            titleId="home-services-title"
            descriptionId="home-services-desc"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <ImageCard key={service.id} item={service} sectionTitleId="home-services-title">
                <BulletList items={service.bullets} />
              </ImageCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title="A sourcing process built for clarity, control, and practical decisions"
            description="From initial brief to shipment readiness, each step is designed to help buyers reduce uncertainty and move with better visibility."
            titleId="home-process-title"
            descriptionId="home-process-desc"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Step {step.step}</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Products we source"
            title="Common product categories we help buyers source from China"
            description="We support practical buyer needs across consumer, packaging, custom OEM, and light industrial categories."
            titleId="home-products-title"
            descriptionId="home-products-desc"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((item) => (
              <ImageCard key={item.id} item={item} sectionTitleId="home-products-title" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
            <SectionHeading
              eyebrow="Problems we solve"
              title="Common issues that slow down overseas buying from China"
              description="Many inquiries start when buyers need better visibility, less supplier uncertainty, and tighter control over execution."
              titleId="home-problems-title"
              descriptionId="home-problems-desc"
            />
            <div className="mt-8">
              <BulletList items={problemsWeSolve} />
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Trust points</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              What buyers usually want most is clearer execution.
            </h2>
            <div className="mt-8 space-y-4">
              {trustPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-base leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Case studies"
            title="Examples of buyer needs we support"
            description="The case studies focus on practical sourcing situations rather than inflated claims."
            titleId="home-case-studies-title"
            descriptionId="home-case-studies-desc"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <ImageCard
                key={item.id}
                item={item}
                sectionTitleId="home-case-studies-title"
                linkTo="/case-studies"
                linkLabel="View case studies"
              >
                <div className="space-y-3 text-sm leading-6 text-slate-700">
                  <p><span className="font-semibold text-slate-950">Challenge:</span> {item.challenge}</p>
                  <p><span className="font-semibold text-slate-950">Outcome:</span> {item.outcome}</p>
                </div>
              </ImageCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions buyers often ask before starting"
              description="Clear expectations help the sourcing process start faster and with fewer misunderstandings."
              titleId="home-faq-title"
              descriptionId="home-faq-desc"
            />
          </div>
          <FAQList items={faqItems} />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <InquiryForm sourcePage="home" title="Tell us what you need to source, verify, inspect, or ship" />
        </div>
      </section>

      <CTASection />
    </main>
  )
}

export default Home
