import React from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquare,
  Search,
  FileCheck,
  Factory,
  ClipboardCheck,
  Truck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, specifications, target price, and quantity. We respond within 24 hours.',
    details: ['Product specs & samples', 'Target pricing', 'Order quantity', 'Timeline requirements'],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching',
    description: 'We source and shortlist qualified suppliers from our verified network, comparing pricing and capabilities.',
    details: ['3-5 supplier options', 'Price comparisons', 'Capability assessment', 'Lead time estimates'],
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Samples & Negotiation',
    description: 'We arrange samples, negotiate pricing and terms, and help you select the best supplier.',
    details: ['Sample procurement', 'Price negotiation', 'Contract terms', 'Payment structure'],
  },
  {
    icon: Factory,
    step: '04',
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections to ensure standards are met.',
    details: ['Production tracking', 'Quality inspections', 'Photo/video updates', 'Issue resolution'],
  },
  {
    icon: Truck,
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics, customs clearance, and documentation for smooth delivery to your door.',
    details: ['Freight booking', 'Customs clearance', 'Documentation', 'Door-to-door delivery'],
  },
]

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/5 rounded-full text-primary text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Sourcing Journey in 5 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            We streamline the entire process from initial inquiry to final delivery,
            making China sourcing simple and risk-free.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-5 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-primary/20 z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary/20 rounded-full" />
                  </div>
                )}
                
                <div className="relative bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Step {step.step}
                  </div>
                  
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 mt-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-1.5">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors group"
          >
            Learn More About Our Process
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
