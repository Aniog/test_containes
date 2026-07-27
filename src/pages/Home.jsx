import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Factory, PackageCheck, ShipWheel } from 'lucide-react'
import SectionHeading from '@/components/site/SectionHeading'
import ServiceCard from '@/components/site/ServiceCard'
import ProcessTimeline from '@/components/site/ProcessTimeline'
import ProductCard from '@/components/site/ProductCard'
import ProblemCard from '@/components/site/ProblemCard'
import TrustList from '@/components/site/TrustList'
import CaseStudyCard from '@/components/site/CaseStudyCard'
import FaqList from '@/components/site/FaqList'
import InquiryForm from '@/components/site/InquiryForm'
import strkImgConfig from '@/strk-img-config.json'
import {
  caseStudies,
  faqs,
  primaryCtaLabel,
  problemsWeSolve,
  processSteps,
  productCategories,
  services,
  trustPoints,
} from '@/data/siteContent'

const metrics = [
  'China-based supplier communication support',
  'Factory verification and quality checkpoints',
  'Production follow-up and shipment coordination',
]

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      ImageHelper.disconnect(containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      <section className="overflow-hidden border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
              China-based sourcing support
            </div>
            <h1 id="home-hero-title" className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-description" className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              SSourcing China helps overseas buyers find reliable suppliers, verify
              factories, inspect quality, follow production, and coordinate shipping
              with practical communication from China.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                {primaryCtaLabel}
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <img
                alt="Factory quality inspection and sourcing coordination"
                className="absolute inset-0 h-full w-full object-cover"
                data-strk-img-id="home-hero-visual-factory-qc-84de19"
                data-strk-img="[home-hero-visual-detail] [home-hero-visual-scene]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-slate-950/45" />
              <div className="relative">
                <p id="home-hero-visual-detail" className="sr-only">
                  Industrial quality control inspector examining packaged export cartons with checklist
                </p>
                <p id="home-hero-visual-scene" className="sr-only">
                  Manufacturing warehouse production line packing boxes pallets and shipment preparation
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
                  Buyer priorities
                </p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-white">
                      <Factory className="h-5 w-5 text-teal-300" />
                      <p className="font-semibold">Reliable supplier screening</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-100">
                      Compare suppliers with clearer visibility into capability,
                      communication, and operational fit.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-white">
                      <PackageCheck className="h-5 w-5 text-teal-300" />
                      <p className="font-semibold">Quality control before shipment</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-100">
                      Use inspection checkpoints to reduce avoidable quality surprises.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur-sm">
                    <div className="flex items-center gap-3 text-white">
                      <ShipWheel className="h-5 w-5 text-teal-300" />
                      <p className="font-semibold">Shipment readiness coordination</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-100">
                      Align packaging, documents, and factory handoff with your shipment plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <img
                  alt="Quality inspector reviewing finished goods"
                  className="h-64 w-full object-cover"
                  data-strk-img-id="home-inspection-image-81c2f4"
                  data-strk-img="[home-qc-caption] [home-hero-description] [home-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-5">
                  <p id="home-qc-caption" className="text-sm leading-7 text-slate-700">
                    Inspection and production oversight from China with practical reporting.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <img
                  alt="Container loading and shipping coordination"
                  className="h-64 w-full object-cover"
                  data-strk-img-id="home-shipping-image-24b9de"
                  data-strk-img="[home-shipping-caption] [home-hero-description] [home-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="p-5">
                  <p id="home-shipping-caption" className="text-sm leading-7 text-slate-700">
                    Shipment readiness coordination that helps buyers prepare for export handoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Local sourcing support for the stages that matter most"
            description="From initial supplier search through shipment readiness, we help overseas buyers reduce risk and keep communication moving."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="A practical sourcing process with clear checkpoints"
            description="We keep the process structured so buyers know what happens next, what is being checked, and where decisions need to be made."
          />
          <div className="mt-12">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products we source"
            title="Support across common B2B product categories"
            description="We work with buyers sourcing practical product lines where supplier verification, production follow-up, and QC are important."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Problems we solve"
              title="Common sourcing issues that create delays, cost risk, and uncertainty"
              description="Many buyers reach out when they need better visibility into supplier reliability, production progress, or final shipment readiness."
            />
            <div className="mt-10 grid gap-5">
              {problemsWeSolve.map((item) => (
                <ProblemCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Why buyers choose us"
              title="Trust points built around practical execution"
              description="The goal is not to overstate. It is to help buyers make better sourcing decisions with clearer local support."
            />
            <div className="mt-10">
              <TrustList items={trustPoints} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case studies"
            title="Examples of sourcing support in real buyer situations"
            description="These examples show the type of problems buyers bring to us and how sourcing support can improve clarity and control."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-teal-700"
            >
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions buyers often ask before starting"
              description="If you already know your product and timeline, the fastest next step is to send us your sourcing brief."
            />
            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-teal-300" />
                <p className="text-sm leading-7 text-slate-200">
                  A clear inquiry helps us assess supplier search scope, verification needs,
                  and whether inspection or production follow-up should be included.
                </p>
              </div>
            </div>
          </div>
          <div>
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

export default Home
