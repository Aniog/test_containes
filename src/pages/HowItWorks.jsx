import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/shared/SectionHeading'
import CTA from '@/components/shared/CTA'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = 'How It Works | China Sourcing Process | SSourcing China'
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      duration: '1-3 days',
      desc: 'We discuss your product requirements, target price range, quality standards, order volume, and timeline. We clarify what success looks like for your project.',
      deliverables: ['Requirements document', 'Preliminary timeline', 'Fee proposal'],
    },
    {
      number: '02',
      title: 'Supplier Research',
      duration: '2-4 weeks',
      desc: 'We search our database and supplier network for manufacturers that match your specifications. We screen for legitimacy, capability, and willingness to work with overseas buyers.',
      deliverables: ['Supplier shortlist (5-8)', 'Initial pricing comparison', 'Capability summary'],
    },
    {
      number: '03',
      title: 'Factory Verification',
      duration: '2-4 weeks',
      desc: 'We conduct on-site audits of shortlisted factories. This includes verification of business registration, production capacity, quality systems, and working conditions.',
      deliverables: ['Audit reports with photos', 'Risk assessment', 'Recommended suppliers'],
    },
    {
      number: '04',
      title: 'Sampling & Negotiation',
      duration: '3-6 weeks',
      desc: 'We coordinate sample production and evaluation. We help negotiate pricing, payment terms, and production schedules. We document all agreements clearly.',
      deliverables: ['Approved samples', 'Supplier comparison', 'Draft purchase order'],
    },
    {
      number: '05',
      title: 'Production Monitoring',
      duration: '4-12 weeks',
      desc: 'We track production progress against the agreed schedule. We conduct in-line inspections and report any issues. We coordinate corrective actions when needed.',
      deliverables: ['Weekly progress reports', 'Inspection reports', 'Issue logs'],
    },
    {
      number: '06',
      title: 'Quality Inspection',
      duration: '3-7 days',
      desc: 'Before shipment, we conduct a pre-shipment inspection based on your acceptance criteria. We document findings with photos and measurements.',
      deliverables: ['Detailed inspection report', 'Photo documentation', 'Pass/fail recommendation'],
    },
    {
      number: '07',
      title: 'Shipping Coordination',
      duration: '1-6 weeks',
      desc: 'We assist with freight booking, documentation, and coordination between the factory and your logistics provider. We track the shipment until delivery.',
      deliverables: ['Shipping documents', 'Tracking updates', 'Delivery confirmation'],
    },
  ]

  const whatWeDo = [
    'Verify supplier legitimacy and capabilities through on-site visits',
    'Provide written reports with photos and findings at each stage',
    'Communicate in English and respond during your business hours',
    'Escalate issues promptly and document all communications',
    'Maintain independence—we do not own factories or take commissions from suppliers',
  ]

  const whatWeDoNot = [
    'Guarantee supplier performance or product quality',
    'Handle payments to suppliers on your behalf',
    'Take legal responsibility for contracts between you and suppliers',
    'Work with suppliers we have not verified',
    'Accept orders below minimum viable volumes for our process',
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="howitworks-hero-bg"
          data-strk-bg="China sourcing agent meeting factory inspection"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">How It Works</h1>
          <p className="text-lg text-slate-600">A structured, transparent process designed to reduce sourcing risk. Each step has defined deliverables and timelines.</p>
        </div>
      </section>

      <section className="section max-w-5xl mx-auto px-6">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="grid md:grid-cols-12 gap-x-8 gap-y-4 border-b border-slate-200 pb-10 last:border-0 last:pb-0">
              <div className="md:col-span-3">
                <div className="text-4xl font-semibold text-slate-200 mb-1">{step.number}</div>
                <div className="font-semibold text-lg">{step.title}</div>
                <div className="text-sm text-slate-500 mt-1">{step.duration}</div>
                <div className="mt-3 rounded overflow-hidden">
                  <img
                    data-strk-img-id={`step-${idx}`}
                    data-strk-img={`step-${idx}-title China factory production inspection`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    alt={step.title}
                    className="w-full h-24 object-cover"
                  />
                  <div id={`step-${idx}-title`} className="sr-only">{step.title}</div>
                </div>
              </div>
              <div className="md:col-span-6">
                <p className="text-slate-600 mb-4">{step.desc}</p>
              </div>
              <div className="md:col-span-3">
                <div className="text-xs font-medium text-slate-500 mb-2">DELIVERABLES</div>
                <ul className="space-y-1 text-sm">
                  {step.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> What We Do
              </h3>
              <ul className="space-y-3 text-sm">
                {whatWeDo.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> What We Do Not Do
              </h3>
              <ul className="space-y-3 text-sm">
                {whatWeDoNot.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section max-w-4xl mx-auto px-6">
        <SectionHeading title="Typical Project Timeline" />
        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-slate-200 pb-3">
              <span className="text-slate-600">Simple products, repeat orders</span>
              <span className="font-medium">8-12 weeks total</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-3">
              <span className="text-slate-600">New products or new suppliers</span>
              <span className="font-medium">12-18 weeks total</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Complex or regulated products</span>
              <span className="font-medium">18-26 weeks total</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-6">Timelines depend on product complexity, supplier responsiveness, and your decision speed. We provide a project-specific timeline during consultation.</p>
        </div>
      </section>

      <CTA />
    </div>
  )
}

export default HowItWorks
