import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { Section, SectionHeader } from '../components/Section'
import InquirySection from '../components/home/InquirySection'
import { MessageSquare, Search, FileText, Hammer, ClipboardCheck, Ship, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Tell us your requirements',
    summary:
      'Send your product details — including specifications, target quantity, price, packaging and any reference samples or images.',
    points: [
      'Free initial consultation',
      'NDA available on request',
      'Reply within 1 business day',
    ],
    imgId: 'step1-img',
    imgQuery: 'business video call buyer china',
  },
  {
    icon: Search,
    number: '02',
    title: 'Supplier search and shortlist',
    summary:
      'We look across our vetted network plus external Chinese suppliers, compare quotations, and recommend a shortlist with key data points.',
    points: [
      'Apples-to-apples quotation comparison',
      'MOQ, lead time and price benchmarking',
      'Verification of business licenses and capacity',
    ],
    imgId: 'step2-img',
    imgQuery: 'china factory floor workers supplier',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Samples and negotiation',
    summary:
      'We coordinate samples, evaluate them in person, and negotiate price, MOQ, payment and shipping terms before you place the order.',
    points: [
      'Consolidated sample shipping',
      'Detailed sample review report',
      'Locked golden sample for production',
    ],
    imgId: 'step3-img',
    imgQuery: 'product samples office inspection china',
  },
  {
    icon: Hammer,
    number: '04',
    title: 'Production and follow-up',
    summary:
      'Once production starts, we follow the line every week, share progress updates, and flag any delay or quality risk early.',
    points: [
      'Weekly written progress updates',
      'Photo and video evidence from the factory',
      'Risk escalation before deadlines slip',
    ],
    imgId: 'step4-img',
    imgQuery: 'china factory production line manufacturing',
  },
  {
    icon: ClipboardCheck,
    number: '05',
    title: 'Quality inspection',
    summary:
      'Independent QC engineers run pre-shipment inspections using AQL sampling, with full photo and video reports before goods leave the factory.',
    points: [
      'Pre-shipment inspection (PSI)',
      'AQL Z1.4 sampling',
      'Defect classification and rework decisions',
    ],
    imgId: 'step5-img',
    imgQuery: 'quality inspector checking products warehouse',
  },
  {
    icon: Ship,
    number: '06',
    title: 'Shipping and delivery',
    summary:
      'We arrange consolidation, customs, and shipping by sea, air, rail, or express directly to your warehouse, store, or FBA destination.',
    points: [
      'Multi-supplier consolidation in our warehouse',
      'Customs documents and HS code support',
      'Door-to-door and FBA direct delivery',
    ],
    imgId: 'step6-img',
    imgQuery: 'shipping containers port export china',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="A six-step process from inquiry to delivery"
        description="No black boxes. You stay in control with clear deliverables, written reports, and a single English-speaking project manager at every step."
      />

      <Section className="bg-white">
        <div ref={containerRef} className="space-y-12 md:space-y-16">
          {steps.map((step, idx) => {
            const reversed = idx % 2 === 1
            return (
              <div key={step.number} className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className={reversed ? 'lg:order-2' : ''}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">Step {step.number}</p>
                  <h2 id={`${step.imgId}-title`} className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
                    {step.title}
                  </h2>
                  <p id={`${step.imgId}-summary`} className="mt-4 text-base text-slate-600 leading-relaxed">
                    {step.summary}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {step.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={reversed ? 'lg:order-1' : ''}>
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 shadow-sm">
                    <img
                      alt={step.title}
                      className="h-full w-full object-cover"
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.imgId}-summary] [${step.imgId}-title] ${step.imgQuery}`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="900"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Start your sourcing project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <InquirySection />
    </>
  )
}
