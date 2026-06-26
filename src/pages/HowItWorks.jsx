import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, ThumbsUp, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quantity, and quality requirements. We respond within 24 hours with an initial assessment.',
    details: 'You can reach us through our contact form, email, or phone. The more detail you provide, the faster we can start. We will ask clarifying questions if needed.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Search & Screening',
    desc: 'We search our verified supplier network and screen candidates based on your criteria, then present the best options with detailed profiles.',
    details: 'We typically present 3-5 qualified suppliers with pricing, capabilities, and certifications. You choose which ones to proceed with for verification.',
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification',
    desc: 'We visit shortlisted factories to verify capabilities, certifications, and quality systems before you place an order.',
    details: 'Our team conducts on-site visits, checks business licenses, reviews production equipment, and assesses quality management systems. You receive a detailed verification report with photos.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Quality Check',
    desc: 'We arrange samples, conduct inspections, and ensure the product meets your specifications before mass production begins.',
    details: 'Samples are checked against your specifications and sent to you for approval. We also establish quality checkpoints for the production run.',
  },
  {
    icon: Truck,
    step: '05',
    title: 'Production & Shipping',
    desc: 'We follow production progress, conduct final inspections, and coordinate shipping to your destination.',
    details: 'Regular production updates, pre-shipment inspection, freight booking, customs documentation, and shipment tracking until delivery.',
  },
  {
    icon: ThumbsUp,
    step: '06',
    title: 'Delivery & After-Support',
    desc: 'Your goods arrive, and we remain available for any follow-up needs, reorders, or issue resolution.',
    details: 'We stay available for quality disputes, reorders, and ongoing supplier management. Many of our clients work with us on a long-term basis.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How It Works
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            A clear, structured process from your first inquiry to final delivery. You stay informed at every step.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.step} className="relative">
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-slate-200 hidden md:block" />
                  )}
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center relative z-10">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-accent font-bold text-sm">Step {item.step}</span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">{item.title}</h2>
                      <p className="text-slate-600 leading-relaxed mb-3">{item.desc}</p>
                      <p className="text-slate-500 text-sm leading-relaxed bg-slate-50 rounded-lg p-4">{item.details}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            The first step is simple — tell us what you need. We handle the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
