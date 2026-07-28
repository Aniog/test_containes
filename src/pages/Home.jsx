import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, Globe2, PackageCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { Link } from 'react-router-dom'
import SectionIntro from '@/components/layout/SectionIntro'
import CaseStudyGrid from '@/components/sections/CaseStudyGrid'
import FaqList from '@/components/sections/FaqList'
import ImageShowcase from '@/components/sections/ImageShowcase'
import InquiryForm from '@/components/sections/InquiryForm'
import ProblemsList from '@/components/sections/ProblemsList'
import ProcessSteps from '@/components/sections/ProcessSteps'
import ProductGrid from '@/components/sections/ProductGrid'
import ServiceGrid from '@/components/sections/ServiceGrid'
import TrustPointGrid from '@/components/sections/TrustPointGrid'
import TrustStats from '@/components/sections/TrustStats'
import { siteMeta } from '@/data/siteContent'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let dispose
    const frameId = window.requestAnimationFrame(() => {
      if (!containerRef.current) {
        return
      }

      dispose = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof dispose === 'function') {
        dispose()
      }
    }
  }, [])

  return (
    <div ref={containerRef}>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-blue">China-based sourcing support</p>
            <h1 id="home-hero-title" className="mt-5 max-w-3xl text-5xl font-bold tracking-tight text-brand-navy md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-description" className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SSourcing China helps overseas buyers find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping with practical reporting from China.
            </p>
            <p id="home-hero-visual-context" hidden>
              Professional factory quality inspector checking finished goods and packaging on an export production line in China
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-blue/90"
              >
                {siteMeta.cta}
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-sky"
              >
                See How It Works <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-line bg-surface p-5">
                <Globe2 className="h-5 w-5 text-brand-blue" />
                <p className="mt-3 text-sm font-semibold text-brand-navy">For overseas buyers</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Clear communication and structured sourcing support from China.</p>
              </div>
              <div className="rounded-2xl border border-line bg-surface p-5">
                <CheckCircle2 className="h-5 w-5 text-brand-blue" />
                <p className="mt-3 text-sm font-semibold text-brand-navy">Supplier risk reduction</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Verification, QC coordination, and milestone follow-up.</p>
              </div>
              <div className="rounded-2xl border border-line bg-surface p-5">
                <PackageCheck className="h-5 w-5 text-brand-blue" />
                <p className="mt-3 text-sm font-semibold text-brand-navy">Shipment readiness support</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Packing, timing, and handover coordination before export.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-line bg-white p-3 shadow-soft">
              <img
                alt="Factory quality inspection in China"
                className="h-[360px] w-full rounded-[1.5rem] object-cover"
                data-strk-img-id="home-hero-factory-qc-v4n27m"
                data-strk-img="[home-hero-visual-context]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
        <TrustStats />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Core services"
          title="Support across sourcing, factory checks, QC, production, and shipping"
          description="We help international buyers manage the practical parts of sourcing in China with clearer supplier comparison, verification, and execution follow-up."
        />
        <div className="mt-10">
          <ServiceGrid />
        </div>
      </section>

      <section className="border-y border-line bg-brand-sky/50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="How it works"
            title="A practical sourcing process with visibility at each step"
            description="Our process is built for overseas buyers who need organized supplier screening, production tracking, and inspection coordination."
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionIntro
            eyebrow="Problems we solve"
            title="Common sourcing gaps that cost buyers time, margin, and confidence"
            description="We focus on the practical issues buyers face when managing suppliers remotely across sourcing, quality, timing, and shipment preparation."
          />
          <div className="mt-8">
            <ProblemsList />
          </div>
        </div>
        <ImageShowcase
          idPrefix="home-problems-visual"
          title="On-the-ground coordination for supplier checks and shipment readiness"
          description="Realistic sourcing support means clearer updates, better issue escalation, and fewer surprises before goods leave the factory."
          imageAlt="China sourcing coordination and export logistics"
          ratio="3x4"
        />
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Products we source"
            title="Product categories frequently supported for global buyers"
            description="We work across practical consumer goods, packaging programs, selected industrial items, and custom OEM or ODM projects."
          />
          <div className="mt-10">
            <ProductGrid />
          </div>
        </div>
      </section>

      <section className="bg-brand-navy">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <SectionIntro
            eyebrow="Why buyers work with us"
            title="Reliable local coordination without exaggerated promises"
            description="We keep the process practical, transparent, and focused on supplier visibility, production progress, and quality follow-up."
            tone="dark"
          />
          <div className="mt-10">
            <TrustPointGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <SectionIntro
          eyebrow="Case studies"
          title="Examples of sourcing support challenges buyers bring to us"
          description="Each sourcing project is different, but the common need is better supplier visibility and smoother execution from China."
        />
        <div className="mt-10">
          <CaseStudyGrid />
        </div>
      </section>

      <section className="border-y border-line bg-brand-sky/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionIntro
              eyebrow="FAQ"
              title="Questions overseas buyers often ask before starting"
              description="If you are comparing suppliers or need support during an active order, these are common starting points."
            />
            <div className="mt-8">
              <FaqList />
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}

export default Home
