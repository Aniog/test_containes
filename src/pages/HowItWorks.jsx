import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, FileCheck, Building2, ClipboardCheck, Package, Ship, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Requirement Analysis',
    description: 'We start with a detailed consultation to understand your product specifications, quality expectations, budget, and timeline. This forms the blueprint for your sourcing project.',
    details: [
      'Product specifications and drawings review',
      'Target price and MOQ discussion',
      'Quality standards and certification requirements',
      'Delivery timeline planning',
    ],
  },
  {
    icon: FileCheck,
    number: '02',
    title: 'Supplier Matching',
    description: 'Using our extensive supplier database and industry networks, we identify manufacturers that match your specific requirements and have a proven track record.',
    details: [
      'Database search across relevant manufacturing hubs',
      'Capability assessment against your requirements',
      'Initial quotation collection from shortlisted suppliers',
      'Comparative analysis report',
    ],
  },
  {
    icon: Building2,
    number: '03',
    title: 'Factory Verification',
    description: 'Our team visits shortlisted factories in person to verify their capabilities, certifications, and working conditions. You receive detailed reports before making decisions.',
    details: [
      'On-site physical audit by our local team',
      'Production capacity and equipment verification',
      'License and certification validation',
      'Detailed report with photo and video evidence',
    ],
  },
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Sample & Production',
    description: 'Once a supplier is selected, we coordinate sample production, review samples against specifications, and monitor the full production cycle.',
    details: [
      'Sample request and tracking coordination',
      'Sample review and feedback management',
      'Production schedule confirmation',
      'Regular progress reports during manufacturing',
    ],
  },
  {
    icon: Package,
    number: '05',
    title: 'Inspection & Packing',
    description: 'Before shipment, we conduct thorough quality inspections and supervise packing to ensure products arrive in perfect condition.',
    details: [
      'Pre-shipment inspection using AQL standards',
      'Packaging and labeling verification',
      'Container loading supervision',
      'Final inspection report with photos',
    ],
  },
  {
    icon: Ship,
    number: '06',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics from warehouse consolidation to customs clearance and freight booking, delivering your goods to the specified destination.',
    details: [
      'Warehouse consolidation and cargo preparation',
      'Export customs clearance documentation',
      'Sea, air, or rail freight booking',
      'Tracking updates until delivery',
    ],
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden">
        <div
          data-strk-bg-id="process-bg-7b3c5d"
          data-strk-bg="[process-title] [process-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-slate-900"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="process-title" className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            How It Works
          </h1>
          <p id="process-subtitle" className="text-lg text-blue-100/80 max-w-2xl mx-auto text-center">
            A straightforward 6-step process designed to minimize risk and maximize quality.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative pl-16">
                <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col items-center">
                  <div className="w-10 h-10 bg-brand-700 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-slate-200 mt-1" />
                  )}
                </div>
                <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-brand-700" />
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100/80 mb-8">
            Tell us about your product and we will guide you through the process.
          </p>
          <Link
            to="/contact"
            className="bg-accent-600 hover:bg-accent-700 text-white font-semibold px-8 py-3.5 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}