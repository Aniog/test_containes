import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { MessageSquare, Search, FlaskConical, Factory, ClipboardCheck, Ship, CheckCircle2 } from 'lucide-react'
import CTAButton from '@/components/shared/CTAButton'
import SectionHeading from '@/components/shared/SectionHeading'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, specifications, target price, quantity, and timeline. The more detail you provide, the faster we can help.',
    id: 'step-submit',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our supplier database, trade platforms, and industry contacts to identify 3-5 qualified factories that match your needs.',
    id: 'step-research',
  },
  {
    icon: FlaskConical,
    step: '03',
    title: 'Samples & Evaluation',
    desc: 'We arrange product samples from shortlisted suppliers. You evaluate quality, and we help you compare options based on price, quality, and reliability.',
    id: 'step-samples',
  },
  {
    icon: Factory,
    step: '04',
    title: 'Factory Audit & Negotiation',
    desc: 'We visit the selected factory, verify their capabilities, negotiate final pricing and terms, and help you sign a clear purchase agreement.',
    id: 'step-audit',
  },
  {
    icon: ClipboardCheck,
    step: '05',
    title: 'Production Monitoring & QC',
    desc: 'During production, we provide regular updates, manage sample approvals, and conduct quality inspections at key milestones.',
    id: 'step-production',
  },
  {
    icon: Ship,
    step: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight booking, prepare export documents, supervise container loading, and track your shipment until it arrives at your warehouse.',
    id: 'step-shipping',
  },
]

const benefits = [
  'No upfront fees — pay only when you proceed',
  'Transparent pricing with no hidden charges',
  'Weekly progress reports with photos',
  'Direct communication with your dedicated agent',
  'Full documentation for every step',
  'Risk-free — cancel anytime before production',
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-accent-500/20 text-accent-400 mb-4">
              How It Works
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              A Clear, Step-by-Step Sourcing Process
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We've refined our process over thousands of orders to make China sourcing simple, transparent, and low-risk for you.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex gap-6 items-start">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-14 h-14 bg-accent-500/10 rounded-full flex items-center justify-center border-2 border-accent-500/20">
                    <step.icon className="w-6 h-6 text-accent-500" />
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 bg-white rounded-xl border border-slate-200 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-accent-500">Step {step.step}</span>
                    <h3 id={`${step.id}-title`} className="text-lg font-semibold text-slate-900">{step.title}</h3>
                  </div>
                  <p id={`${step.id}-desc`} className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Why Choose Us"
                title="Working with Us is Simple & Risk-Free"
                center={false}
              />
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton>Get a Free Sourcing Quote</CTAButton>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-72 md:h-96 bg-slate-100">
              <img
                data-strk-img-id="hiw-benefit-img-9c3d"
                data-strk-img="[hiw-benefit-text] quality inspection china factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Quality inspection at a Chinese factory"
                className="w-full h-full object-cover"
              />
              <span id="hiw-benefit-text" className="hidden">professional quality control inspection warehouse</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Start Your Sourcing Project Today
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Submit your requirements and receive a free sourcing plan within 24 hours.
          </p>
          <div className="mt-8">
            <CTAButton>Get a Free Sourcing Quote</CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
