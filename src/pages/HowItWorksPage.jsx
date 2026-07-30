import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle2 } from 'lucide-react'
import CTASection from '@/components/CTASection'

const steps = [
  {
    step: '01',
    title: 'Submit Your Sourcing Brief',
    desc: 'Fill out our inquiry form with your product requirements, target specifications, quantity, budget, and timeline. The more detail you provide, the faster we can match you with the right suppliers.',
    details: ['Product description and specifications', 'Target unit price and order quantity', 'Quality standards and certifications needed', 'Preferred delivery timeline'],
  },
  {
    step: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our team researches potential suppliers across China\'s manufacturing regions. We evaluate factories based on capability, capacity, certifications, and export track record.',
    details: ['Database search across 10,000+ factories', 'Initial capability screening', 'Preliminary price and MOQ comparison', 'Shortlist of 3-5 qualified candidates'],
  },
  {
    step: '03',
    title: 'Factory Verification & Samples',
    desc: 'We visit shortlisted factories to verify their legitimacy and capabilities. We coordinate sample production so you can evaluate quality before committing to a full order.',
    details: ['On-site factory audit', 'Business license and certification check', 'Sample coordination and shipping', 'Detailed audit report with photos'],
  },
  {
    step: '04',
    title: 'Negotiation & Order Placement',
    desc: 'We negotiate the best pricing, payment terms, and production timeline on your behalf. Once you approve, we place the order and confirm all specifications with the factory.',
    details: ['Price and term negotiation', 'Payment structure advice', 'Production agreement review', 'Order confirmation and deposit coordination'],
  },
  {
    step: '05',
    title: 'Production Monitoring',
    desc: 'During production, we conduct regular factory visits to check progress, verify quality at key milestones, and ensure your order stays on schedule.',
    details: ['Weekly progress updates', 'In-line quality checks', 'Issue identification and resolution', 'Timeline tracking and adjustment'],
  },
  {
    step: '06',
    title: 'Quality Inspection',
    desc: 'Before shipment, our inspectors conduct a thorough pre-shipment inspection following AQL standards. You receive a detailed report with photos and pass/fail recommendation.',
    details: ['AQL sampling inspection', 'Functionality and appearance checks', 'Packaging and labeling verification', 'Detailed photo report'],
  },
  {
    step: '07',
    title: 'Shipping & Delivery',
    desc: 'We coordinate freight booking, customs documentation, and delivery logistics. You receive tracking information and support until goods arrive at your warehouse.',
    details: ['Freight method selection (sea/air/rail)', 'Export documentation and customs', 'Shipment tracking', 'Delivery confirmation'],
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-navy/10 text-navy text-sm font-medium px-3 py-1 rounded-full mb-4">
              Our Process
            </span>
            <h1 id="hiw-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              How Our Sourcing Process Works
            </h1>
            <p id="hiw-subtitle" className="text-lg text-slate-600 max-w-2xl mx-auto">
              A transparent, step-by-step approach that takes you from product idea to delivered goods with full visibility at every stage.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-12">
              {steps.map((item) => (
                <div key={item.step} className="relative grid lg:grid-cols-[80px_1fr] gap-6">
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                      {item.step}
                    </div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
                    <div className="lg:hidden inline-flex items-center justify-center w-10 h-10 bg-navy rounded-full text-white font-bold text-sm mb-4">
                      {item.step}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{item.title}</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="inline-block bg-orange text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-dark transition-colors text-lg"
            >
              Start Your Sourcing Project
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
