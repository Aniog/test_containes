import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, MessageSquare, Search, Factory, ClipboardCheck, Truck } from 'lucide-react'

const steps = [
  {
    id: 'step-inquiry',
    num: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    desc: 'Fill out our sourcing request form with your product details, specifications, target price, quantity, and timeline. The more detail you provide, the faster we can find the right match.',
    timeline: 'Day 1',
  },
  {
    id: 'step-research',
    num: '02',
    icon: Search,
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our database and visits markets and industrial zones to identify potential suppliers. We evaluate each against your criteria and create a shortlist of 3-5 qualified factories.',
    timeline: 'Week 1-2',
  },
  {
    id: 'step-verify',
    num: '03',
    icon: Factory,
    title: 'Factory Audit & Sampling',
    desc: 'We visit shortlisted factories to verify production capacity, quality systems, and certifications. We arrange product samples and negotiate pricing and terms on your behalf.',
    timeline: 'Week 2-3',
  },
  {
    id: 'step-production',
    num: '04',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    desc: 'Once you approve a supplier and place your order, we monitor production progress with regular factory visits. Our inspectors conduct quality checks at key milestones.',
    timeline: 'Week 4-8',
  },
  {
    id: 'step-shipping',
    num: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    desc: 'After final inspection approval, we coordinate logistics — booking freight, preparing export documents, and tracking shipment until it arrives at your warehouse.',
    timeline: 'Week 8-10',
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h1 id="hiw-page-title" className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              How It Works
            </h1>
            <p id="hiw-page-subtitle" className="text-white/70 text-lg">
              A transparent, step-by-step process that keeps you informed and in control from inquiry to delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative flex gap-6 pb-12 last:pb-0">
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-px bg-slate-200" />
                )}
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center relative z-10">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{step.timeline}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed m-0">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-navy mb-2">100%</div>
              <p className="text-slate-600 text-sm m-0">Transparency — you see every report, photo, and update</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-navy mb-2">No Hidden Fees</div>
              <p className="text-slate-600 text-sm m-0">Clear pricing agreed upfront before any work begins</p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl font-bold text-navy mb-2">Your Control</div>
              <p className="text-slate-600 text-sm m-0">You approve every decision — suppliers, samples, shipments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Start?</h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Submit your sourcing request today and receive a free consultation within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-7 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors no-underline"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
