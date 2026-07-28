import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { MessageSquare, Search, FileCheck, Factory, PackageCheck, Truck, ArrowRight, Clock, Shield, DollarSign } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Requirements',
    description: 'Start by telling us what you need. Share product specifications, target quantities, quality requirements, budget range, and your desired timeline. The more detail you provide, the better we can match you with the right suppliers.',
    details: [
      'Fill out our simple online inquiry form',
      'Include product photos, drawings, or reference samples if available',
      'Specify target price, quantity, and delivery timeline',
      'We respond within 24 hours with initial feedback',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification & Verification',
    description: 'Our sourcing team searches our database of 2,000+ verified suppliers and conducts outreach to find the best match for your requirements. We verify each supplier through on-site factory audits before presenting options to you.',
    details: [
      'Search across China\'s major manufacturing hubs',
      'Verify business licenses and certifications',
      'Conduct on-site factory audits',
      'Provide detailed supplier comparison reports',
    ],
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Sample Development & Approval',
    description: 'We coordinate product samples from shortlisted suppliers, evaluate quality against your specifications, and work with factories on any necessary improvements. You approve the final samples before production begins.',
    details: [
      'Coordinate samples from multiple suppliers',
      'Evaluate quality, materials, and workmanship',
      'Provide detailed feedback and comparison',
      'Iterate until samples meet your standards',
    ],
  },
  {
    number: '04',
    icon: Factory,
    title: 'Production & Quality Control',
    description: 'Once you approve samples, we negotiate final terms and begin production. Our QC team monitors the entire manufacturing process, conducting inspections at key stages to catch issues early.',
    details: [
      'Negotiate pricing, terms, and contracts',
      'Monitor production progress with weekly reports',
      'Conduct in-line quality inspections',
      'Resolve production issues promptly',
    ],
  },
  {
    number: '05',
    icon: PackageCheck,
    title: 'Final Inspection & Shipment',
    description: 'Before products leave the factory, we conduct a comprehensive pre-shipment inspection covering dimensions, functionality, appearance, packaging, and labeling. Products ship only after passing inspection.',
    details: [
      'AQL-based sampling inspection',
      'Functional and safety testing',
      'Packaging and labeling verification',
      'Detailed inspection report with photos',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We arrange the most cost-effective shipping method for your order — sea, air, or rail freight — and handle all customs documentation and clearance. Track your shipment from factory to your door.',
    details: [
      'Compare sea, air, and rail freight options',
      'Handle export and import documentation',
      'Arrange customs clearance',
      'Door-to-door delivery worldwide',
    ],
  },
]

const benefits = [
  { icon: Clock, title: 'Save Time', description: 'We handle the entire sourcing process so you can focus on growing your business.' },
  { icon: Shield, title: 'Reduce Risk', description: 'Our verification and QC processes protect you from fraud, quality issues, and delays.' },
  { icon: DollarSign, title: 'Lower Costs', description: 'Direct factory pricing and expert negotiation save you 15-40% on average.' },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">Our Process</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">How It Works</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Our streamlined 6-step process makes sourcing from China simple, transparent, and risk-free. Here is exactly what to expect.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-gray-200 hidden lg:block" />
                  )}
                  
                  <div className="flex gap-8 items-start">
                    {/* Step Number */}
                    <div className="hidden lg:flex flex-col items-center shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white font-bold text-lg">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-brand-slate rounded-xl p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-orange/10 lg:hidden">
                          <span className="text-sm font-bold text-brand-orange">{step.number}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon className="h-6 w-6 text-brand-navy" />
                          <h2 className="text-xl font-bold text-brand-navy">{step.title}</h2>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-5">{step.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-brand-slate">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-8 bg-white rounded-xl">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/10">
                      <Icon className="h-7 w-7 text-brand-orange" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-navy mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Tell us what you need and we will provide a free sourcing quote within 24 hours.
          </p>
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8">
            <Link to="/contact" className="flex items-center gap-2">
              Get Your Free Quote <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
