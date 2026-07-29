import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, MessageSquare, Search, ClipboardCheck, Factory, Truck, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can find the right match.',
    details: ['Product specifications and drawings', 'Target FOB/CIF price range', 'Order quantity and frequency', 'Required certifications or standards', 'Preferred delivery timeline'],
    imgId: 'hiw-step1-2a3b4c',
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our verified supplier database, attends trade shows, and contacts factories directly to build a shortlist of 3-5 qualified manufacturers.',
    details: ['Database and market research', 'Initial factory screening', 'Capability and capacity check', 'Price and MOQ comparison', 'Shortlist presentation with recommendations'],
    imgId: 'hiw-step2-5d6e7f',
  },
  {
    num: '03',
    icon: ClipboardCheck,
    title: 'Factory Audit & Sampling',
    desc: 'We visit shortlisted factories in person to verify their operations. Once you select a supplier, we coordinate sample production and ship samples to you for approval.',
    details: ['On-site factory audit', 'Production line inspection', 'Sample development coordination', 'Sample shipping to your location', 'Feedback and modification rounds'],
    imgId: 'hiw-step3-8g9h0i',
  },
  {
    num: '04',
    icon: Factory,
    title: 'Order Placement & Production Monitoring',
    desc: 'After sample approval, we help negotiate final terms, place the order, and monitor production with regular factory visits and progress reports.',
    details: ['Contract and payment term negotiation', 'Order confirmation and deposit', 'Weekly production updates', 'In-line quality checks', 'Issue resolution and timeline management'],
    imgId: 'hiw-step4-1j2k3l',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Final Inspection & Shipping',
    desc: 'Before shipment, we conduct a thorough pre-shipment inspection. Once approved, we coordinate logistics and documentation for delivery to your warehouse.',
    details: ['Pre-shipment quality inspection', 'Detailed inspection report with photos', 'Booking freight (sea/air/rail)', 'Export documentation preparation', 'Shipment tracking until delivery'],
    imgId: 'hiw-step5-4m5n6o',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="hiw-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p id="hiw-page-subtitle" className="text-lg text-slate-300 max-w-2xl">
            Our structured 5-step process takes the guesswork out of sourcing from China. Here's exactly what happens from your first inquiry to final delivery.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isEven = idx % 2 === 0
              return (
                <div key={step.num} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}>
                  <div className="w-full lg:w-1/2">
                    <div className="rounded-xl overflow-hidden h-64 md:h-80">
                      <img
                        data-strk-img-id={step.imgId}
                        data-strk-img={`[hiw-step-${step.num}-title] [hiw-page-title]`}
                        data-strk-img-ratio="3x2"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.num}
                      </div>
                      <h2 id={`hiw-step-${step.num}-title`} className="text-2xl font-bold text-brand-navy">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-4">{step.desc}</p>
                    <ul className="space-y-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-brand-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-8">Submit your sourcing requirements and receive a free quote within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
