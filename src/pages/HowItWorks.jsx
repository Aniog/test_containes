import { Link } from 'react-router-dom'
import { MessageSquare, Search, FileText, Package, ClipboardCheck, Truck, CheckCircle, ArrowRight, Clock, DollarSign, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Submit Your Request',
    description: 'Fill out our inquiry form with your product requirements, quantities, target price, quality standards, and timeline. The more details you provide, the better we can assist you.',
    details: [
      'Product specifications and requirements',
      'Target pricing and quantity',
      'Quality standards and certifications needed',
      'Timeline and delivery expectations',
    ],
    timeline: '5-10 minutes',
  },
  {
    number: 2,
    icon: Search,
    title: 'We Find Suppliers',
    description: 'Our team identifies and evaluates potential suppliers from our verified network and conducts additional research to find the best matches for your project.',
    details: [
      'Supplier identification from 500+ verified manufacturers',
      'Capability and capacity assessment',
      'Price benchmarking',
      'Background verification',
    ],
    timeline: '1-2 weeks',
  },
  {
    number: 3,
    icon: FileText,
    title: 'Receive Recommendations',
    description: 'You receive a detailed report with 2-4 supplier recommendations, including profiles, pricing, samples, and our professional assessment of each option.',
    details: [
      'Supplier profiles with photos and capabilities',
      'Price quotes and comparison',
      'Sample availability and terms',
      'Our recommendation with reasoning',
    ],
    timeline: '3-5 business days',
  },
  {
    number: 4,
    icon: Package,
    title: 'Samples & Negotiation',
    description: 'We help you evaluate samples, negotiate terms, and finalize the best supplier for your needs. Our team facilitates clear communication throughout.',
    details: [
      'Sample ordering and evaluation support',
      'Price and payment term negotiation',
      'Contract drafting and review',
      'Communication facilitation',
    ],
    timeline: '2-4 weeks',
  },
  {
    number: 5,
    icon: ClipboardCheck,
    title: 'Production & QC',
    description: 'Once production begins, we monitor progress, conduct quality inspections at key stages, and keep you informed of any developments.',
    details: [
      'Production scheduling and tracking',
      'Regular progress updates',
      'Inline and pre-shipment inspections',
      'Issue resolution and quality assurance',
    ],
    timeline: '4-12 weeks (varies by order size)',
  },
  {
    number: 6,
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics, handle documentation, and ensure your products arrive safely at your designated location.',
    details: [
      'Freight booking and tracking',
      'Customs clearance support',
      'Documentation management',
      'Delivery confirmation',
    ],
    timeline: '2-6 weeks (varies by shipping method)',
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Factory verification and quality inspections protect you from fraud and defects.',
  },
  {
    icon: DollarSign,
    title: 'Cost Savings',
    description: 'Direct factory pricing and efficient logistics reduce your overall costs.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'We handle all the research, communication, and coordination.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Bilingual professionals with deep manufacturing and logistics expertise.',
  },
]

export function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            How It Works
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our streamlined sourcing process makes China procurement straightforward 
            and risk-free. Here's a step-by-step overview of how we work together.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-12 top-24 w-0.5 h-32 bg-primary-200"></div>
                )}

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Step Number */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                          {step.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-primary-600">
                          <Clock className="w-4 h-4" />
                          {step.timeline}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-2">
                    <p className="text-lg text-neutral-600 mb-6">
                      {step.description}
                    </p>
                    <div className="bg-neutral-50 rounded-xl p-6">
                      <h4 className="font-semibold text-neutral-900 mb-4">What Happens:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Use Our Process?
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Our structured approach delivers measurable benefits for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-neutral-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Submit your inquiry and we'll respond within 24 hours with a customized plan.
          </p>
          <Link to="/contact">
            <Button size="lg">
              Start Your Sourcing Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}