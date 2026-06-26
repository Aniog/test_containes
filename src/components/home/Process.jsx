import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, ThumbsUp } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quantity, and quality requirements. We respond within 24 hours.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Search & Screening',
    desc: 'We search our verified supplier network and screen candidates based on your criteria, then present the best options.',
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification',
    desc: 'We visit shortlisted factories to verify capabilities, certifications, and quality systems before you place an order.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Quality Check',
    desc: 'We arrange samples, conduct inspections, and ensure the product meets your specifications before mass production begins.',
  },
  {
    icon: Truck,
    step: '05',
    title: 'Production & Shipping',
    desc: 'We follow production progress, conduct final inspections, and coordinate shipping to your destination.',
  },
  {
    icon: ThumbsUp,
    step: '06',
    title: 'Delivery & After-Support',
    desc: 'Your goods arrive, and we remain available for any follow-up needs, reorders, or issue resolution.',
  },
]

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight mb-4">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A clear, structured process from your first inquiry to final delivery. You stay informed at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="relative bg-white rounded-xl p-6 md:p-8 border border-slate-200">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-extrabold text-accent/20">{item.step}</span>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-7 py-3 rounded-lg transition-colors"
          >
            See Full Process Details
          </Link>
        </div>
      </div>
    </section>
  )
}
