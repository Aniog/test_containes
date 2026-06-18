import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Submit Your Sourcing Inquiry',
    desc: 'Fill out our inquiry form with your product details — category, specifications, target quantity, and budget. The more detail you provide, the faster we can match you with the right suppliers.',
    points: ['Product name and category', 'Technical specifications or reference samples', 'Target quantity (MOQ)', 'Target price range', 'Destination country and timeline'],
    imgId: 'hiw-step1-img-a1b2c3',
    titleId: 'hiw-step1-title',
    descId: 'hiw-step1-desc',
  },
  {
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified manufacturer database and conducts fresh market research. We identify 3–5 qualified suppliers that match your requirements and prepare a comparative overview.',
    points: ['Database and market research', 'Supplier capability screening', 'Price and MOQ comparison', 'Initial communication with factories', 'Shortlist report delivered to you'],
    imgId: 'hiw-step2-img-d4e5f6',
    titleId: 'hiw-step2-title',
    descId: 'hiw-step2-desc',
  },
  {
    num: '03',
    title: 'Factory Audit & Verification',
    desc: 'For shortlisted suppliers, we conduct on-site factory visits to verify production capacity, equipment, certifications, and working conditions. You receive a detailed audit report with photos.',
    points: ['On-site factory visit', 'Production capacity check', 'License and certification verification', 'Sample quality review', 'Audit report with photos'],
    imgId: 'hiw-step3-img-g7h8i9',
    titleId: 'hiw-step3-title',
    descId: 'hiw-step3-desc',
  },
  {
    num: '04',
    title: 'Sample Coordination & Negotiation',
    desc: 'We arrange product samples from your preferred supplier and coordinate shipping to your location. Once you approve the sample, we negotiate final pricing, payment terms, and lead times on your behalf.',
    points: ['Sample request and coordination', 'Sample shipping to your location', 'Price and terms negotiation', 'Contract review support', 'Order confirmation'],
    imgId: 'hiw-step4-img-j1k2l3',
    titleId: 'hiw-step4-title',
    descId: 'hiw-step4-desc',
  },
  {
    num: '05',
    title: 'Production Monitoring & QC',
    desc: 'Once production begins, we provide regular updates and conduct quality inspections at key milestones. Pre-shipment inspection ensures your goods meet agreed specifications before they leave the factory.',
    points: ['Production schedule tracking', 'In-line quality checks', 'Pre-shipment inspection (AQL)', 'Defect reporting and resolution', 'Final approval before shipment'],
    imgId: 'hiw-step5-img-m4n5o6',
    titleId: 'hiw-step5-title',
    descId: 'hiw-step5-desc',
  },
  {
    num: '06',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight forwarding, prepare export documentation, and track your shipment from the factory to your warehouse. We support sea freight, air freight, and express courier options.',
    points: ['Freight forwarder coordination', 'Export documentation preparation', 'Customs clearance support', 'Real-time shipment tracking', 'Delivery confirmation'],
    imgId: 'hiw-step6-img-p7q8r9',
    titleId: 'hiw-step6-title',
    descId: 'hiw-step6-desc',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">
              How We Source for You
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              A clear, structured process from your first inquiry to goods delivered at your warehouse.
              No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={step.num} className={`grid lg:grid-cols-2 gap-12 items-center`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-5xl font-extrabold text-blue-100 leading-none">{step.num}</span>
                      <div className="h-px flex-1 bg-blue-100" />
                    </div>
                    <h2 id={step.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h2>
                    <p id={step.descId} className="text-slate-600 leading-relaxed mb-6">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl overflow-hidden shadow-sm ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      alt={step.title}
                      className="w-full h-72 object-cover"
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [${step.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Typical Project Timeline</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { phase: 'Inquiry & Research', time: '3–5 days' },
              { phase: 'Factory Audit', time: '5–7 days' },
              { phase: 'Sample & Negotiation', time: '7–14 days' },
              { phase: 'Production', time: '20–45 days' },
              { phase: 'QC Inspection', time: '2–3 days' },
              { phase: 'Shipping (Sea)', time: '15–35 days' },
            ].map((item) => (
              <div key={item.phase} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                <div className="text-blue-700 font-bold text-lg">{item.time}</div>
                <div className="text-slate-600 text-sm mt-1">{item.phase}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm text-center mt-6">
            Timelines vary by product complexity, order size, and shipping method. We provide a project-specific estimate after your inquiry.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-blue-200 mb-8">
            Submit your inquiry today and receive a free sourcing plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
