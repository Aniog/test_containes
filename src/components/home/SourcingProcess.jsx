import React from 'react'
import { Link } from 'react-router-dom'
import { ClipboardList, Search, ShieldCheck, ClipboardCheck, Ship, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    num: '01',
    title: 'Submit Your Requirements',
    desc: 'Tell us what you need — product type, specifications, quantity, quality standards, and target budget.',
  },
  {
    icon: Search,
    num: '02',
    title: 'Supplier Search & Screening',
    desc: 'We search our network and market to find qualified suppliers, then screen them for capability and reliability.',
  },
  {
    icon: ShieldCheck,
    num: '03',
    title: 'Factory Verification',
    desc: 'We conduct on-site audits to verify the factory\'s legitimacy, production capacity, and quality management systems.',
  },
  {
    icon: ClipboardCheck,
    num: '04',
    title: 'Sample & Quality Check',
    desc: 'We arrange sample production, evaluate quality, and confirm specifications before mass production begins.',
  },
  {
    icon: PackageCheck,
    num: '05',
    title: 'Production Follow-up',
    desc: 'We monitor production progress, conduct mid-production inspections, and keep you updated on timeline status.',
  },
  {
    icon: Ship,
    num: '06',
    title: 'Final Inspection & Shipping',
    desc: 'Pre-shipment quality inspection, freight booking, customs documentation, and delivery coordination.',
  },
]

export default function SourcingProcess() {
  return (
    <section className="py-16 md:py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-neutral-mid max-w-2xl mx-auto">
            A structured, transparent process from your first inquiry to delivery at your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-extrabold text-accent">{step.num}</span>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
              <p className="text-neutral-mid text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold no-underline hover:bg-primary-light transition-colors"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}
