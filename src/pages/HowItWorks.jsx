import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import CTASection from '@/components/shared/CTASection'

const steps = [
  {
    number: '01',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and delivery timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product specifications & drawings', 'Target FOB/CIF price', 'Order quantity & MOQ flexibility', 'Required certifications (CE, FDA, etc.)', 'Delivery timeline'],
  },
  {
    number: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database, attends trade shows, and contacts manufacturers directly. Within 5–10 business days, you receive a comparison report with 3–5 qualified options.',
    details: ['Database & network search', 'Initial supplier screening', 'Price & capability comparison', 'Shortlist presentation with recommendations'],
  },
  {
    number: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit the top-ranked suppliers in person. Our audit covers business registration, production facilities, quality management systems, worker conditions, and export track record.',
    details: ['On-site factory visit', 'Business license verification', 'Production capacity assessment', 'Quality system evaluation', 'Detailed audit report with photos'],
  },
  {
    number: '04',
    title: 'Sample Development & Approval',
    desc: 'We coordinate sample production, review samples against your specs, and ship them to you for final approval. We manage revisions until the sample meets your standards.',
    details: ['Sample request coordination', 'Quality review before shipping', 'Revision management', 'Final approval confirmation'],
  },
  {
    number: '05',
    title: 'Order Placement & Production',
    desc: 'Once you approve the sample and terms, we place the order and monitor production. You receive regular updates with photos and progress reports. We flag any issues immediately.',
    details: ['Purchase order management', 'Production timeline tracking', 'Weekly photo updates', 'Issue identification & resolution'],
  },
  {
    number: '06',
    title: 'Quality Inspection',
    desc: 'Before shipment, we conduct a thorough pre-shipment inspection using AQL sampling standards. You receive a detailed report with pass/fail results, photos, and measurements.',
    details: ['AQL-based random sampling', 'Visual & functional testing', 'Measurement verification', 'Detailed photo report'],
  },
  {
    number: '07',
    title: 'Shipping & Delivery',
    desc: 'We arrange freight (sea, air, or rail), handle export documentation, coordinate customs clearance, and provide tracking until your goods arrive at your warehouse.',
    details: ['Freight mode selection & booking', 'Export documentation', 'Customs clearance support', 'Door-to-door tracking'],
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hiw-hero-bg-d5e6f7"
          data-strk-bg="[hiw-hero-desc]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            How It Works
          </h1>
          <p id="hiw-hero-desc" className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Our structured 7-step sourcing process is designed to minimize risk and deliver results. Here's exactly what happens after you contact us.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
                )}
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900">{step.title}</h2>
                    <p className="mt-3 text-slate-600 leading-relaxed">{step.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Typical Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { phase: 'Sourcing & Shortlist', time: '5–10 days' },
              { phase: 'Audit & Samples', time: '2–4 weeks' },
              { phase: 'Production', time: '3–8 weeks' },
              { phase: 'Shipping', time: '1–5 weeks' },
            ].map((item) => (
              <div key={item.phase} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-blue-800">{item.time}</div>
                <div className="text-sm text-slate-600 mt-2">{item.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Ready to Start?" subtitle="Submit your sourcing requirements and receive a free quote within 24 hours." />
    </div>
  )
}

export default HowItWorks
