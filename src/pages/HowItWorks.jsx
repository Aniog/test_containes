import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, MessageSquare, ListChecks, PackageSearch, FileSignature, ClipboardCheck, Ship, Check } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import Section, { SectionHeader } from '@/components/shared/Section'
import InquiryForm from '@/components/shared/InquiryForm'
import FAQ from '@/components/shared/FAQ'
import { PROCESS_STEPS, FAQS } from '@/content/site'

const STEP_ICONS = {
  '01': MessageSquare,
  '02': ListChecks,
  '03': PackageSearch,
  '04': FileSignature,
  '05': ClipboardCheck,
  '06': Ship,
}

const STEP_IMAGES = {
  '01': 'business inquiry email consultation sourcing',
  '02': 'factory shortlist comparison on a desk',
  '03': 'product samples laid out for evaluation',
  '04': 'signing a manufacturing purchase order',
  '05': 'QC inspector at a production line in China',
  '06': 'shipping containers loaded at a Chinese port',
}

const Hero = () => {
  const ref = useRef(null)
  useEffect(() => ImageHelper.loadImages(strkImgConfig, ref.current), [])
  return (
    <section ref={ref} className="bg-white border-b border-slate-200">
      <div className="container-content py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="kicker">How it works</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight">
            Six steps from inquiry to delivery
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-600 leading-relaxed">
            Our process is structured so you always know what is happening with your order. Each step has a written deliverable, an owner on our team, and a target turnaround time.
          </p>
        </div>
        <div className="mt-10 aspect-[21/9] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
          <img
            data-strk-img-id="hiw-hero-img-7a91c2"
            data-strk-img="[hiw-hero-title]"
            data-strk-img-ratio="21x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Aerial view of a busy container port at sunset"
            className="w-full h-full object-cover"
          />
        </div>
        <p id="hiw-hero-title" className="sr-only">Container port in China</p>
      </div>
    </section>
  )
}

const Steps = () => {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="space-y-12 md:space-y-16">
      {PROCESS_STEPS.map((step, idx) => {
        const Icon = STEP_ICONS[step.n] || ClipboardCheck
        const reverse = idx % 2 === 1
        return (
          <div
            key={step.n}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center`}
          >
            <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <img
                  data-strk-img-id={`hiw-step-${step.n}-img-3c${idx}`}
                  data-strk-img={`[step-${step.n}-title]`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={STEP_IMAGES[step.n]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-extrabold text-lg">
                  {step.n}
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary-50 text-primary">
                  <Icon className="w-5 h-5" />
                </span>
              </div>
              <h3 id={`step-${step.n}-title`} className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-base md:text-lg text-primary-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const HowItWorks = () => (
  <>
    <Hero />

    <Section>
      <SectionHeader
        kicker="Step by step"
        title="The full process"
        description="Each step has a written deliverable, an owner on our team, and a typical turnaround time. We share those times during the first call."
      />
      <Steps />
    </Section>

    <Section soft>
      <SectionHeader
        kicker="What you receive"
        title="Reports and documentation at every step"
        description="Our work is documented in plain English with photos and tables — files you can keep, share with your team, and refer back to."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[
          { title: 'Supplier shortlist report', desc: 'A side-by-side comparison of 3–5 candidate factories on capability, capacity, price, and risk.' },
          { title: 'Factory audit report', desc: 'A 70-point on-site audit with photos, scores, and recommendations.' },
          { title: 'Sample evaluation log', desc: 'A consolidated log of every sample, with measurements, photos, and shipping dates.' },
          { title: 'Weekly production report', desc: 'Production %, milestone status, photos, and any issues that need escalation.' },
          { title: 'AQL inspection report', desc: 'A standard AQL report with photos, defect classification, and accept/reject decision.' },
          { title: 'Shipping file', desc: 'Commercial invoice, packing list, COO, certificates, and freight quote summary.' },
        ].map((d) => (
          <div key={d.title} className="card h-full">
            <h3 className="text-base md:text-lg font-semibold text-primary mb-1.5">{d.title}</h3>
            <p className="text-sm text-primary-600 leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section id="faq">
      <SectionHeader
        kicker="FAQ"
        title="Common questions about the process"
        description="Answers to the questions buyers ask most often about how a typical project runs."
      />
      <FAQ items={FAQS} />
    </Section>

    <Section soft>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <p className="kicker">Get started</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
            Send us your first inquiry.
          </h2>
          <p className="mt-4 md:mt-5 text-base md:text-lg text-primary-600 leading-relaxed">
            We will reply within one business day with a sourcing plan, a list of candidate factories, and a transparent fee structure.
          </p>
          <Link to="/contact" className="btn-primary mt-6">
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm sourcePage="how-it-works" />
        </div>
      </div>
    </Section>
  </>
)

export default HowItWorks
