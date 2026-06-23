import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Search, 
  Building2, 
  FileText, 
  Factory, 
  ClipboardCheck, 
  Truck,
  Package,
  Clock,
  Users,
  Shield,
  DollarSign
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'We start by understanding your product requirements, quantity, target price, quality standards, and timeline.',
    duration: '1-2 days',
    details: [
      'Product specifications review',
      'Target price discussion',
      'Quality requirements clarification',
      'Timeline and delivery expectations',
      'Any special requirements identification',
    ],
  },
  {
    number: 2,
    icon: Search,
    title: 'Supplier Research',
    description: 'We conduct comprehensive research to identify and shortlist qualified manufacturers in China matching your criteria.',
    duration: '3-5 days',
    details: [
      'Database and network research',
      'Trade show and directory search',
      'Supplier capability assessment',
      'Preliminary price comparison',
      'Shortlist of 3-5 qualified suppliers',
    ],
  },
  {
    number: 3,
    icon: Building2,
    title: 'Factory Verification',
    description: 'Our team visits shortlisted factories to verify their existence, legitimacy, production capacity, and reliability.',
    duration: '3-7 days',
    details: [
      'On-site factory visit',
      'Business license verification',
      'Production capacity assessment',
      'Quality systems review',
      'Certification authentication',
      'Detailed verification report',
    ],
  },
  {
    number: 4,
    icon: FileText,
    title: 'Sample Evaluation',
    description: 'We help you request and evaluate samples to ensure product quality before committing to production.',
    duration: '2-4 weeks',
    details: [
      'Sample request coordination',
      'Factory sample follow-up',
      'Sample receipt and inspection',
      'Quality assessment report',
      'Feedback and refinement',
    ],
  },
  {
    number: 5,
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits during production to monitor progress, address issues, and ensure quality standards.',
    duration: 'Ongoing',
    details: [
      'Production schedule tracking',
      'Weekly progress updates',
      'Material quality checks',
      'Issue identification and resolution',
      'Timeline management',
    ],
  },
  {
    number: 6,
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections ensure your products meet all specifications and quality standards.',
    duration: '1-3 days',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL-based sampling',
      'Product functionality testing',
      'Packaging and labeling check',
      'Detailed inspection report',
    ],
  },
  {
    number: 7,
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate freight forwarding and logistics to ensure safe and timely delivery to your destination.',
    duration: '2-6 weeks',
    details: [
      'Freight quote comparison',
      'Documentation preparation',
      'Factory to port logistics',
      'Customs clearance support',
      'Track and trace updates',
      'Door delivery coordination',
    ],
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Reduce risks of fraud, quality issues, and delivery delays through our systematic approach.',
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description: 'Leverage our relationships and expertise to get competitive pricing and avoid costly mistakes.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Save time on research, communication, and travel by letting us handle the details.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Benefit from our local presence, cultural understanding, and industry knowledge.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our systematic 7-step process ensures smooth, reliable China sourcing 
              from initial consultation to final delivery.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 7-Step Sourcing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology for successful China sourcing
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                  {/* Step Number & Icon */}
                  <div className="lg:col-span-3 flex items-start">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-4">
                        <step.icon className="w-8 h-8 text-blue-900" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Step {step.number}</div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center text-sm text-blue-900 font-medium">
                      <Clock className="w-4 h-4 mr-2" />
                      Estimated: {step.duration}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-5">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The benefits of working with our systematic approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-gray-600">
              How long does the complete sourcing process take?
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Supplier Research & Verification</span>
                <span className="text-blue-900 font-semibold">1-2 weeks</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Sample Evaluation</span>
                <span className="text-blue-900 font-semibold">2-4 weeks</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Production</span>
                <span className="text-blue-900 font-semibold">4-12 weeks</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700">Quality Inspection</span>
                <span className="text-blue-900 font-semibold">1-3 days</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-700">Shipping</span>
                <span className="text-blue-900 font-semibold">2-6 weeks</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Total estimated time:</strong> 8-24 weeks depending on product complexity, 
                quantity, and shipping method. We'll provide a detailed timeline during consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation. We'll explain how our process 
            can help you source from China successfully.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}