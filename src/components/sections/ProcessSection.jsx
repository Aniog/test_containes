import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, FileCheck, Boxes, Ship, Handshake } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share product specs, target price, order volume, and destination. We review requirements and confirm feasibility.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Supplier Research',
    description: 'We shortlist 3-5 qualified manufacturers from our verified network and fresh market research.',
  },
  {
    step: '03',
    icon: FileCheck,
    title: 'Verification & Sampling',
    description: 'Factories are vetted, samples are checked, and quotations are compared before you place an order.',
  },
  {
    step: '04',
    icon: Boxes,
    title: 'Production Monitoring',
    description: 'We track milestones, conduct inspections, and report progress so delays and defects are caught early.',
  },
  {
    step: '05',
    icon: Ship,
    title: 'Quality Control & Shipping',
    description: 'Final inspection, export documentation, and freight coordination through to delivery.',
  },
  {
    step: '06',
    icon: Handshake,
    title: 'Ongoing Support',
    description: 'We remain your local contact for reorders, supplier issues, and continuous improvement.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-label">How It Works</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">A Simple, Transparent Sourcing Process</h2>
          <p className="text-lg text-slate-600 mt-4">
            Six clear steps from inquiry to delivery. You stay informed at every stage.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative p-6 rounded-xl border border-slate-200 bg-page hover:shadow-md transition-shadow">
              <span className="absolute top-6 right-6 text-5xl font-bold text-slate-200 select-none">
                {item.step}
              </span>
              <div className="w-12 h-12 rounded-lg bg-brand-700 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold pr-10">{item.title}</h3>
              <p className="text-slate-600 mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/how-it-works" className="btn-secondary">
            Read the Full Process
          </Link>
        </div>
      </div>
    </section>
  )
}
