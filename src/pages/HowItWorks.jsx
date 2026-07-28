import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, Factory, ClipboardCheck, Truck, CheckCircle, ArrowRight, Clock, Shield, Globe } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation & Requirements',
    description: 'Share your product requirements, specifications, target price, quantity, and timeline. We respond within 24 hours with initial guidance and questions.',
    details: [
      'Product specifications and requirements',
      'Target price range and budget',
      'Quantity and order frequency',
      'Quality standards and certifications needed',
      'Delivery timeline and destination',
    ],
    duration: '1-2 days',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification & Verification',
    description: 'Our team identifies suitable suppliers from our verified network and conducts thorough vetting to ensure they meet your requirements.',
    details: [
      'Database search and supplier matching',
      'Initial capability assessment',
      'Business license verification',
      'Production capacity evaluation',
      'Reference and track record check',
    ],
    duration: '3-5 days',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Sample Development & Evaluation',
    description: 'We coordinate sample production, review quality, and facilitate any modifications needed to meet your exact specifications.',
    details: [
      'Sample request and coordination',
      'Quality evaluation against specifications',
      'Modification coordination if needed',
      'Final sample approval',
      'Pricing negotiation based on samples',
    ],
    duration: '7-14 days',
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Order Placement & Production',
    description: 'Once samples are approved, we assist with order placement, contract terms, and begin production monitoring.',
    details: [
      'Purchase order and contract assistance',
      'Payment terms negotiation',
      'Production schedule confirmation',
      'Quality control plan establishment',
      'Regular progress updates begin',
    ],
    duration: '1-3 days',
  },
  {
    number: '05',
    icon: Shield,
    title: 'Quality Control & Inspection',
    description: 'Our QC team conducts inspections at multiple stages to ensure products meet your standards before they leave the factory.',
    details: [
      'Pre-production sample comparison',
      'During production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'AQL sampling and testing',
      'Detailed inspection reports with photos',
    ],
    duration: 'Throughout production',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We handle all logistics including freight forwarding, customs clearance, and coordinate delivery to your specified location.',
    details: [
      'Freight booking (sea, air, or rail)',
      'Customs documentation preparation',
      'Loading supervision',
      'Real-time shipment tracking',
      'Door-to-door delivery coordination',
    ],
    duration: '15-45 days',
  },
  {
    number: '07',
    icon: CheckCircle,
    title: 'Follow-Up & Ongoing Support',
    description: 'Our relationship does not end at delivery. We provide ongoing support for reorders, quality improvements, and supply chain optimization.',
    details: [
      'Post-delivery quality feedback',
      'Reorder coordination',
      'Supplier performance review',
      'Continuous improvement recommendations',
      'Long-term partnership development',
    ],
    duration: 'Ongoing',
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Avoid weeks of research and communication. We streamline the entire process.',
  },
  {
    icon: Shield,
    title: 'Reduce Risk',
    description: 'Verified suppliers and quality inspections protect your investment.',
  },
  {
    icon: Globe,
    title: 'Local Expertise',
    description: 'On-the-ground team with deep knowledge of Chinese manufacturing.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            How Our Sourcing Process Works
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A clear, step-by-step approach that makes sourcing from China straightforward, 
            transparent, and stress-free. Here is exactly what to expect.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex gap-8">
                    {/* Step number circle */}
                    <div className="hidden md:flex flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                        {step.number}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="md:hidden w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {step.number}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <step.icon className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-bold text-navy">{step.title}</h3>
                          </div>
                          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            Duration: {step.duration}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-5">{step.description}</p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {step.details.map((detail, dIndex) => (
                          <li key={dIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-trust-green flex-shrink-0 mt-1" />
                            <span className="text-sm text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Why Use Our Process?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center border border-gray-100">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            The first step is simple — tell us what you need. We will handle the rest.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            Start Your Sourcing Project
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
