import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { MessageSquare, Search, ShieldCheck, Package, ClipboardCheck, Ship, CheckCircle2 } from 'lucide-react'
import CTAButton from '../components/shared/CTAButton'

const steps = [
  {
    icon: MessageSquare,
    num: '01',
    title: 'Submit Your Requirements',
    desc: 'Fill out our inquiry form with your product details, target price, quantity, quality standards, and timeline. The more detail you provide, the faster we can find the right match.',
    duration: 'Day 1',
  },
  {
    icon: Search,
    num: '02',
    title: 'Supplier Research & Shortlisting',
    desc: 'Our sourcing team searches our verified supplier database and industry networks to identify 3–5 factories that match your criteria. We provide a comparison report with pricing, MOQ, and capabilities.',
    duration: 'Days 2–7',
  },
  {
    icon: ShieldCheck,
    num: '03',
    title: 'Factory Audit & Verification',
    desc: 'We visit shortlisted factories in person to verify business licenses, inspect production lines, assess quality systems, and evaluate capacity. You receive a detailed audit report with photos.',
    duration: 'Days 7–14',
  },
  {
    icon: Package,
    num: '04',
    title: 'Sample Development & Approval',
    desc: 'We coordinate sample production with your chosen factory. Samples are inspected by our team before shipping to you for final approval. Revisions are managed until you are satisfied.',
    duration: 'Days 14–28',
  },
  {
    icon: ClipboardCheck,
    num: '05',
    title: 'Production & Quality Control',
    desc: 'Once you approve the sample and place the order, we monitor production with regular factory visits. Inspections are conducted at pre-production, mid-production, and pre-shipment stages.',
    duration: 'Varies by order',
  },
  {
    icon: Ship,
    num: '06',
    title: 'Shipping & Delivery',
    desc: 'We arrange freight (sea, air, or rail), handle export documentation, coordinate customs clearance, and track your shipment until it arrives at your warehouse.',
    duration: 'Final stage',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-[#0f2a4a] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h1>
            <p className="text-lg text-slate-300">
              Our proven 6-step process takes you from initial brief to delivered goods — with full transparency at every stage.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative flex gap-6 pb-12 last:pb-0">
                {i < steps.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-slate-200" />
                )}
                <div className="shrink-0 relative z-10">
                  <div className="w-14 h-14 bg-[#0f2a4a] rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-[#e86c2b] uppercase tracking-wider">{step.duration}</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{step.num}. {step.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why This Process Works</h2>
            <p className="text-lg text-slate-600">Built from 10+ years of sourcing experience and refined across thousands of projects.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Full Transparency', desc: 'You receive reports, photos, and updates at every stage. No black boxes.' },
              { title: 'Risk Reduction', desc: 'Multi-layer verification eliminates unreliable suppliers before you commit.' },
              { title: 'Time Savings', desc: 'Our local presence and networks cut sourcing timelines by 50% or more.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-200">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-600 mb-8">Submit your sourcing requirements and receive a free plan within 48 hours.</p>
          <CTAButton>Get a Free Sourcing Quote</CTAButton>
        </div>
      </section>
    </div>
  )
}
