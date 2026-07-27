import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, FileText, Users, Search, Award, Truck } from 'lucide-react'
import CTASection from '../components/CTASection'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Submit Your Requirements',
      desc: 'Complete our inquiry form or schedule a call. We need to understand your product, target price, quality expectations, and timeline.',
      items: ['Product specifications and samples if available', 'Target price range and order quantity', 'Quality standards and certifications needed', 'Preferred delivery timeline'],
    },
    {
      number: '02',
      title: 'Supplier Research & Shortlisting',
      desc: 'We search our database and network to identify factories capable of meeting your requirements. We narrow it down to the most suitable options.',
      items: ['Initial supplier screening from our network', 'Capability and pricing comparison', 'Preliminary due diligence checks', 'Shortlist of 3-5 qualified factories'],
    },
    {
      number: '03',
      title: 'Factory Verification',
      desc: 'We visit the shortlisted factories in person. You receive a detailed report with photos, findings, and our recommendation.',
      items: ['On-site factory audit', 'Production capacity verification', 'Quality system assessment', 'Detailed written report with photos'],
    },
    {
      number: '04',
      title: 'Sample Evaluation',
      desc: 'We coordinate sample production and shipping. You evaluate quality, materials, and workmanship before committing to a production order.',
      items: ['Sample order placement support', 'Sample inspection before shipping', 'Sample shipping coordination', 'Feedback collection and supplier communication'],
    },
    {
      number: '05',
      title: 'Order Placement & Contracts',
      desc: 'We help negotiate terms, review contracts, and establish clear production milestones. Payment terms are structured to protect both parties.',
      items: ['Contract review and negotiation support', 'Payment term recommendations', 'Production schedule agreement', 'Quality criteria documentation'],
    },
    {
      number: '06',
      title: 'Production Monitoring',
      desc: 'We track production progress and conduct in-process inspections. You receive regular updates with photos and status reports.',
      items: ['Weekly progress reports', 'In-process quality checks', 'Issue identification and resolution', 'Timeline management'],
    },
    {
      number: '07',
      title: 'Pre-Shipment Inspection',
      desc: 'Before goods leave the factory, we conduct a final inspection. You decide whether to approve, request rework, or reject based on our findings.',
      items: ['Full pre-shipment inspection', 'Photo and video documentation', 'Detailed inspection report', 'Approval or rework coordination'],
    },
    {
      number: '08',
      title: 'Shipping & Delivery',
      desc: 'We coordinate freight booking, prepare export documentation, and track the shipment until it reaches your destination.',
      items: ['Freight booking and rate negotiation', 'Export documentation preparation', 'Customs clearance support', 'Delivery tracking and confirmation'],
    },
  ]

  const deliverables = [
    { icon: FileText, title: 'Written Reports', desc: 'Every verification, inspection, and milestone is documented in writing with photos.' },
    { icon: Users, title: 'Direct Introductions', desc: 'You receive direct contact information for factories. We do not act as a middleman.' },
    { icon: Search, title: 'Transparent Process', desc: 'You see the same information we see. No hidden supplier lists or undisclosed markups.' },
    { icon: Award, title: 'Quality Records', desc: 'Inspection reports, test results, and compliance documents are organized and shared.' },
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[2px] text-white/60 mb-4">OUR METHOD</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">How We Work</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A structured, transparent process designed to reduce risk and give you control at every stage.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-32 flex-shrink-0">
                <div className="text-4xl font-mono font-semibold text-slate-200">{step.number}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{step.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-slate-600">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">What You Receive</h2>
            <p className="text-slate-600">Every engagement includes these deliverables.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6">
                  <Icon className="w-6 h-6 text-slate-700 mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6 text-center">Typical Timeline</h2>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
            <span className="text-slate-600">Initial supplier shortlist</span>
            <span className="font-medium text-slate-900">7-10 business days</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
            <span className="text-slate-600">Factory verification reports</span>
            <span className="font-medium text-slate-900">2-3 weeks after shortlist approval</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
            <span className="text-slate-600">Sample production and evaluation</span>
            <span className="font-medium text-slate-900">3-6 weeks</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
            <span className="text-slate-600">Production lead time (varies by product)</span>
            <span className="font-medium text-slate-900">4-10 weeks</span>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-slate-600">Shipping to most destinations</span>
            <span className="font-medium text-slate-900">2-6 weeks</span>
          </div>
        </div>
        <p className="text-center text-xs text-slate-500 mt-6">Total time from inquiry to delivery: typically 8-16 weeks depending on product and production schedule.</p>
      </section>

      <CTASection 
        title="Ready to begin?" 
        subtitle="Submit your requirements and we'll prepare a customized sourcing plan." 
      />
    </div>
  )
}

export default HowItWorks
