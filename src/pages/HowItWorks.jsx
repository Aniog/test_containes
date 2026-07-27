import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Search, ClipboardCheck, PackageCheck, Ship, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: '1. Share Your Requirements',
    description: 'Tell us what you need: product type, specifications, target price, quantity, and timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: ['Product specifications', 'Quantity and budget', 'Quality requirements', 'Target delivery timeline'],
    icon: Search,
  },
  {
    title: '2. Supplier Sourcing & Verification',
    description: 'We search our network and online databases to find manufacturers that fit your needs. We then verify their credentials, capacity, and reliability.',
    details: ['Supplier identification', 'Business verification', 'Factory audits', 'Reference checks'],
    icon: ClipboardCheck,
  },
  {
    title: '3. Samples & Negotiation',
    description: 'We coordinate sample production and shipping, and help negotiate pricing, payment terms, and contract details to protect your interests.',
    details: ['Sample coordination', 'Price negotiation', 'Contract review', 'Terms clarification'],
    icon: PackageCheck,
  },
  {
    title: '4. Production & Quality Control',
    description: 'During production, we monitor progress and conduct inspections to ensure quality standards are met before shipment.',
    details: ['Production monitoring', 'Quality inspections', 'Defect management', 'Reporting and photos'],
    icon: CheckCircle2,
  },
  {
    title: '5. Shipping & Delivery',
    description: 'We handle logistics, prepare shipping documents, and coordinate with freight forwarders to get your goods delivered safely and on time.',
    details: ['Freight forwarding', 'Customs documentation', 'Shipment tracking', 'Final delivery coordination'],
    icon: Ship,
  },
]

const HowItWorks = () => {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h1>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">A clear, step-by-step process designed to make sourcing from China simple and reliable.</p>
          </div>
          <div className="mt-12 space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
                    <p className="mt-2 text-slate-600">{step.description}</p>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-slate-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-6 top-16 h-8 w-px bg-slate-200" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/contact">Start Your Sourcing Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
