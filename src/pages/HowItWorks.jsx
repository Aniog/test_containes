import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Camera, Box, Ship, ArrowRight, FileText, PhoneCall } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    num: '01',
    icon: PhoneCall,
    title: 'Initial Consultation',
    desc: 'You share your product requirements, target price range, quality standards, and timeline. We discuss your business goals and any specific concerns. This helps us understand exactly what you need before we begin searching.',
    details: [
      'Free 30-minute consultation call',
      'Product specification review',
      'Budget and timeline alignment',
      'Customized sourcing strategy proposal',
    ],
    imgId: 'process-step-01-bg-m1n2o3',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'We search our database of pre-vetted manufacturers, attend trade fairs, and leverage industry contacts to identify factories that match your requirements. We typically shortlist 5-8 candidates for your review.',
    details: [
      'Multi-channel supplier search',
      'Preliminary capability screening',
      'Price range estimation',
      'Shortlist presentation with profiles',
    ],
    imgId: 'process-step-02-bg-p4q5r6',
  },
  {
    num: '03',
    icon: Building2,
    title: 'Factory Audit & Verification',
    desc: 'We physically visit each shortlisted factory to conduct a thorough audit. We verify business licenses, inspect production lines, assess quality systems, and check working conditions. You receive a detailed report with photos.',
    details: [
      'On-site factory visits',
      'License & certification verification',
      'Equipment & capacity assessment',
      'Detailed audit report with photos',
    ],
    imgId: 'process-step-03-bg-s7t8u9',
  },
  {
    num: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Negotiation',
    desc: 'We request samples from the best-matched factories, evaluate quality, and negotiate pricing, payment terms, and production timelines on your behalf. We finalize the contract with terms that protect your interests.',
    details: [
      'Sample collection & evaluation',
      'Price and terms negotiation',
      'Contract review & finalization',
      'Payment term arrangement',
    ],
    imgId: 'process-step-04-bg-v0w1x2',
  },
  {
    num: '05',
    icon: Box,
    title: 'Production & Quality Control',
    desc: 'During production, we visit the factory weekly to monitor progress, conduct quality inspections at key stages, and send you updates with photos. We catch issues early so they do not become expensive problems later.',
    details: [
      'Weekly factory visits',
      'Multi-stage quality inspections',
      'Progress reports with photos',
      'Issue resolution & rework management',
    ],
    imgId: 'process-step-05-bg-y3z4a5',
  },
  {
    num: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    desc: 'When production is complete, we supervise container loading, manage all export documentation, coordinate with freight forwarders, and track your shipment until it reaches your destination.',
    details: [
      'Container loading supervision',
      'Export documentation preparation',
      'Freight & logistics coordination',
      'Delivery tracking & confirmation',
    ],
    imgId: 'process-step-06-bg-b6c7d8',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">How It Works</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Our Sourcing Process
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            A structured, transparent approach that takes your product from idea to delivery.
            Every step is managed by our team on the ground in China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => (
              <div key={step.num} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={idx % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-extrabold text-accent/20">{step.num}</span>
                    <div className="w-10 h-10 bg-tint rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">{step.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{step.desc}</p>
                  <ul className="space-y-2.5">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-1.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 0 ? 'lg:order-2' : ''}>
                  <div
                    data-strk-bg-id={step.imgId}
                    data-strk-bg={`[process-step-title-${step.num}] china sourcing process`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                    className="rounded-2xl shadow-lg overflow-hidden"
                    style={{ paddingTop: '75%', backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  <span className="hidden" id={`process-step-title-${step.num}`}>{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <FileText className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold text-navy">Typical Timeline</h3>
            </div>
            <div className="space-y-4">
              {[
                { phase: 'Consultation & Research', time: '1-2 weeks' },
                { phase: 'Factory Audits & Verification', time: '2-3 weeks' },
                { phase: 'Sampling & Negotiation', time: '2-3 weeks' },
                { phase: 'Production', time: '3-8 weeks (varies by product)' },
                { phase: 'Shipping & Delivery', time: '2-5 weeks (varies by destination)' },
              ].map((item) => (
                <div key={item.phase} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-gray-700">{item.phase}</span>
                  <span className="text-sm font-semibold text-navy">{item.time}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-5">
              Timelines are estimates. Actual duration depends on product complexity, order volume, and shipping destination.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start your sourcing journey?</h2>
          <p className="text-gray-300 mb-8">Contact us for a free consultation and let us help you find the right suppliers in China.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md">
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}