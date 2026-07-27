import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ClipboardList, Search, ShieldCheck, ClipboardCheck, PackageCheck, Ship, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    num: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us what you need — product type, specifications, quantity, quality standards, and target budget. You can fill out our inquiry form or send us an email.',
    detail: 'We review your requirements within 24 hours and confirm our understanding before starting the search.',
    titleId: 'step-1-title',
    descId: 'step-1-desc',
    imgId: 'step-1-img-y3z4',
  },
  {
    icon: Search,
    num: '02',
    title: 'Supplier Search & Screening',
    desc: 'We search our verified factory network and broader market to find qualified suppliers matching your criteria.',
    detail: 'We evaluate 3–5 candidate suppliers, compare their capabilities, pricing, and track records, and present you with the best options.',
    titleId: 'step-2-title',
    descId: 'step-2-desc',
    imgId: 'step-2-img-a5b6',
  },
  {
    icon: ShieldCheck,
    num: '03',
    title: 'Factory Verification',
    desc: 'We conduct on-site audits to verify the factory\'s legitimacy, production capacity, and quality management systems.',
    detail: 'Our audit covers business license verification, facility inspection, equipment assessment, and quality system review. You receive a detailed audit report.',
    titleId: 'step-3-title',
    descId: 'step-3-desc',
    imgId: 'step-3-img-c7d8',
  },
  {
    icon: ClipboardCheck,
    num: '04',
    title: 'Sample & Quality Check',
    desc: 'We arrange sample production, evaluate quality, and confirm specifications before mass production begins.',
    detail: 'Samples are evaluated against your specifications. We provide a sample evaluation report with photos and measurements for your approval.',
    titleId: 'step-4-title',
    descId: 'step-4-desc',
    imgId: 'step-4-img-e9f0',
  },
  {
    icon: PackageCheck,
    num: '05',
    title: 'Production Follow-up',
    desc: 'We monitor production progress, conduct mid-production inspections, and keep you updated on timeline status.',
    detail: 'Regular factory visits, progress reports, and milestone tracking ensure your order stays on schedule and quality stays on target.',
    titleId: 'step-5-title',
    descId: 'step-5-desc',
    imgId: 'step-5-img-g1h2',
  },
  {
    icon: Ship,
    num: '06',
    title: 'Final Inspection & Shipping',
    desc: 'Pre-shipment quality inspection, freight booking, customs documentation, and delivery coordination.',
    detail: 'A final PSI confirms product quality before shipment. We then handle freight booking, customs paperwork, and logistics to your destination.',
    titleId: 'step-6-title',
    descId: 'step-6-desc',
    imgId: 'step-6-img-i3j4',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="hiw-page-title" className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            How It Works
          </h1>
          <p id="hiw-page-subtitle" className="text-white/80 max-w-2xl mx-auto">
            A structured, transparent sourcing process from your first inquiry to delivery at your door. Here is what happens at each step.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img
                    alt={step.title}
                    data-strk-img-id={step.imgId}
                    data-strk-img={`[${step.descId}] [${step.titleId}] [hiw-page-subtitle] [hiw-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg bg-neutral-light object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-extrabold text-accent">{step.num}</span>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h2 id={step.titleId} className="text-2xl font-bold text-primary mb-3">
                    {step.title}
                  </h2>
                  <p id={step.descId} className="text-neutral-mid leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  <p className="text-sm text-neutral-dark leading-relaxed bg-neutral-light rounded-lg p-4">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start Your Sourcing Project Today
          </h2>
          <p className="text-white/80 mb-8">
            Submit your requirements and we will begin the process within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-semibold no-underline hover:bg-accent-light transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
