import React from 'react'
import { Link } from 'react-router-dom'
import { 
  MessageSquare, Search, FileCheck, Factory, 
  Eye, Truck, CheckCircle 
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, specifications, and target price. We\'ll review and provide initial feedback within 24 hours.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Discovery',
    description: 'We search our verified supplier network and industry contacts to find manufacturers that match your exact needs.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Factory Verification',
    description: 'Our team visits factories to verify legitimacy, production capabilities, quality systems, and compliance standards.',
  },
  {
    number: '04',
    icon: Factory,
    title: 'Sample & Negotiation',
    description: 'We coordinate sample production, conduct quality checks, and negotiate the best pricing on your behalf.',
  },
  {
    number: '05',
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress updates ensure your production stays on schedule and meets quality standards.',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We handle all logistics, customs documentation, and coordinate door-to-door shipping to your location.',
  },
]

export default function SourcingProcess() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="section-title">
          <h2>Our Sourcing Process</h2>
          <p>
            A streamlined 6-step process that takes you from product idea to delivered goods, 
            with full transparency at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex gap-6 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step number */}
                <div className="hidden lg:flex flex-shrink-0 w-20 h-20 bg-primary rounded-full items-center justify-center relative z-10">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Content card */}
                <div className="card flex-1">
                  <div className="card-padding">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="lg:hidden flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="heading-4 text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-primary text-lg px-8 py-4">
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}
