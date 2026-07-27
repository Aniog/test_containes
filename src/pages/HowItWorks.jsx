import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquare,
  Search,
  Factory,
  ClipboardCheck,
  Package,
  Ship,
  Handshake,
  ArrowRight,
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    description:
      'Start by telling us what you need. Send us your product specs, target price range, order quantity, and desired delivery timeline. You can use our inquiry form, email, or schedule a call. The more detail you provide, the faster we can move.',
    imgId: 'hiw-step1-a1b2c3',
    descId: 'hiw-step1-desc',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Research',
    description:
      'Our team searches our vetted supplier database and conducts fresh market research to identify 3–5 manufacturers that match your criteria. We filter by product fit, production capacity, certifications, and export experience.',
    imgId: 'hiw-step2-d4e5f6',
    descId: 'hiw-step2-desc',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Factory Verification',
    description:
      'Before any quotes are shared, we verify each shortlisted factory. This includes an on-site or virtual audit of their facilities, review of business licenses, and reference checks with past international clients.',
    imgId: 'hiw-step3-g7h8i9',
    descId: 'hiw-step3-desc',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Sample & Quote Review',
    description:
      'We collect quotations, request samples where needed, and present you with a comparison report. Our team negotiates terms on your behalf and helps you evaluate sample quality before you commit to an order.',
    imgId: 'hiw-step4-j0k1l2',
    descId: 'hiw-step4-desc',
  },
  {
    number: '05',
    icon: Package,
    title: 'Production Monitoring',
    description:
      'Once production begins, we provide weekly status reports with photos. We track material arrivals, line starts, mid-production checks, and packing details. If issues arise, we escalate immediately and propose solutions.',
    imgId: 'hiw-step5-m3n4o5',
    descId: 'hiw-step5-desc',
  },
  {
    number: '06',
    icon: Ship,
    title: 'Inspection & Shipping',
    description:
      'Before goods leave the factory, we conduct a pre-shipment inspection based on agreed AQL standards. After approval, we coordinate freight forwarding, prepare export documentation, and track the shipment to your door.',
    imgId: 'hiw-step6-p6q7r8',
    descId: 'hiw-step6-desc',
  },
  {
    number: '07',
    icon: Handshake,
    title: 'After-Sales Support',
    description:
      'Our relationship does not end at delivery. We remain available for supplier communication, warranty claims, reorder facilitation, and continuous improvement discussions for your next production run.',
    imgId: 'hiw-step7-s9t0u1',
    descId: 'hiw-step7-desc',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hiw-title" className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              How It Works
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our 7-step process is designed to be transparent, efficient, and low-risk. You stay informed at every stage while we handle the complexity on the ground in China.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
          {steps.map((step, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={step.number}
                className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-slate-100 select-none">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-brand" />
                    </div>
                  </div>
                  <h2 id={`${step.descId}-title`} className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                    {step.title}
                  </h2>
                  <p id={step.descId} className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className={isReversed ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[${step.descId}] [hiw-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Start Your First Project?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Share your requirements and we will get back to you with a tailored plan within 24 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold text-base px-8 py-4 rounded-lg transition-colors"
          >
            Request a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
