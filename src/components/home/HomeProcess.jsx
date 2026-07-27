import { Link } from 'react-router-dom'
import { MessageSquare, Search, FileCheck, Truck, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your product specifications, target price, quantity, and quality requirements. We respond within 24 hours.',
    color: 'bg-brand-600',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find & Verify Suppliers',
    description: 'Our team identifies qualified suppliers, conducts factory audits, and verifies certifications and capabilities.',
    color: 'bg-blue-600',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Samples & Quality Check',
    description: 'We arrange product samples, conduct quality inspections, and ensure everything meets your specifications.',
    color: 'bg-purple-600',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Production & Shipping',
    description: 'We monitor production, perform final inspections, and coordinate shipping to your destination worldwide.',
    color: 'bg-green-600',
  },
]

const HomeProcess = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple 4-Step Sourcing Process
          </h2>
          <p className="text-lg text-slate-600">
            We make sourcing from China straightforward and transparent. Here's how we work with you
            from initial inquiry to final delivery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-slate-300" />
                )}

                <div className="bg-white rounded-xl p-8 text-center relative z-10 shadow-sm">
                  {/* Step Number */}
                  <div className="text-sm font-bold text-slate-400 mb-3">STEP {step.number}</div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-primary gap-2">
            See Full Process
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeProcess
