import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Package, Truck, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    description: 'Fill out our inquiry form with your product specifications, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can find the right match.',
    details: ['Product specs and reference images', 'Target FOB/CIF price', 'Order quantity and frequency', 'Required certifications'],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    description: 'Our sourcing team searches our database and visits markets and trade fairs to identify 3-5 qualified manufacturers that match your requirements.',
    details: ['Supplier capability matching', 'Initial quotation collection', 'Background screening', 'Comparison report delivered to you'],
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    description: 'We visit the shortlisted factories in person to verify their production capacity, quality systems, certifications, and business legitimacy.',
    details: ['On-site facility tour', 'Equipment and capacity check', 'Business license verification', 'Photo/video audit report'],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sampling & Negotiation',
    description: 'We manage the sample process, negotiate pricing and payment terms, and finalize the supplier agreement on your behalf.',
    details: ['Sample coordination', 'Price negotiation', 'Payment term structuring', 'Contract review and signing'],
  },
  {
    number: '05',
    icon: Package,
    title: 'Production Monitoring',
    description: 'During production, we visit the factory regularly to monitor progress, check quality, and ensure your order stays on schedule.',
    details: ['Weekly progress updates', 'In-line quality checks', 'Timeline management', 'Issue resolution'],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Final QC & Shipping',
    description: 'Before shipment, we conduct a final inspection following AQL standards. Once approved, we coordinate logistics to your destination.',
    details: ['Pre-shipment inspection', 'Defect documentation', 'Freight booking', 'Customs documentation'],
  },
]

const HowItWorks = () => {
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  return (
    <div ref={pageRef}>
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process from your initial inquiry to goods delivered at your door. No guesswork, no surprises.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">Step {step.number}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-dark mt-1 mb-3">{step.title}</h2>
                    <p className="text-brand-muted mb-4 leading-relaxed">{step.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-brand-dark">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                          {detail}
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

      <section className="py-16 md:py-20 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Ready to Get Started?</h2>
          <p className="text-brand-muted mb-8 text-lg">Submit your sourcing requirements and receive a free plan within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-orange-600 transition"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
