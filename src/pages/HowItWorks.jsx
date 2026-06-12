import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle, MessageSquare, Search, FileCheck, Factory, Truck } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and delivery timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product specifications & drawings', 'Target unit price & MOQ', 'Quality certifications needed', 'Delivery timeline & destination'],
  },
  {
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team searches our database and network of verified manufacturers. We evaluate potential suppliers based on your criteria and present you with a shortlist of 3–5 qualified options.',
    details: ['Database & network search', 'Initial supplier screening', 'Capability assessment', 'Shortlist presentation with comparison'],
  },
  {
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify their production capacity, certifications, equipment, and working conditions. You receive a detailed audit report with photos.',
    details: ['On-site factory visit', 'Production line inspection', 'Certification verification', 'Detailed audit report with photos'],
  },
  {
    num: '04',
    icon: FileCheck,
    title: 'Sampling & Negotiation',
    desc: 'We coordinate sample production, review quality, and negotiate the best pricing and terms on your behalf. Once you approve the sample, we finalize the purchase order.',
    details: ['Sample production coordination', 'Quality review & feedback', 'Price & terms negotiation', 'Purchase order finalization'],
  },
  {
    num: '05',
    icon: CheckCircle,
    title: 'Production Monitoring & QC',
    desc: 'Throughout production, we provide regular progress updates and conduct quality inspections at key stages to ensure your order meets specifications.',
    details: ['Weekly progress reports', 'In-line quality checks', 'Pre-shipment final inspection', 'Defect resolution management'],
  },
  {
    num: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'We handle freight booking, export documentation, customs clearance, and delivery tracking. Your goods arrive at your warehouse safely and on schedule.',
    details: ['Freight booking & consolidation', 'Export documentation', 'Customs clearance support', 'Delivery tracking & confirmation'],
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Our Process</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">
              How It Works
            </h1>
            <p className="text-slate-300 text-lg mt-4 leading-relaxed">
              A transparent, step-by-step sourcing process designed to minimize risk and maximize results for international buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.num}</span>
                  </div>
                  <div className="w-px flex-1 bg-slate-200 mt-3" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-4">{step.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Ready to Start Sourcing?
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Submit your product requirements and receive a free sourcing proposal within 24 hours. No commitment required.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors shrink-0"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
