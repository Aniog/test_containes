import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, Users, Search, Beaker, ClipboardCheck, 
  Truck, CheckCircle, ArrowRight, Clock, Shield, Star
} from 'lucide-react'
import Button from '@/components/ui/Button'

const steps = [
  {
    step: 1,
    icon: FileText,
    title: 'Submit Your Request',
    description: 'Fill out our inquiry form with your product requirements, including specifications, quantity, target price, and timeline.',
    details: [
      'Product specifications and requirements',
      'Estimated order quantity',
      'Target price range',
      'Required delivery timeline',
      'Any special requirements or certifications needed',
    ],
    timeline: '5 minutes',
  },
  {
    step: 2,
    icon: Users,
    title: 'Initial Consultation',
    description: 'Our sourcing team reviews your requirements and contacts you to discuss details and clarify any questions.',
    details: [
      'Requirements review and clarification',
      'Initial supplier identification',
      'Pricing estimates',
      'Timeline assessment',
      'Service scope discussion',
    ],
    timeline: 'Within 24 hours',
  },
  {
    step: 3,
    icon: Search,
    title: 'Supplier Matching',
    description: 'We identify and verify suitable factories from our network of 2000+ vetted suppliers.',
    details: [
      'Factory capability matching',
      'Business license verification',
      'Site visit coordination',
      'Production capacity assessment',
      'Quality system evaluation',
    ],
    timeline: '3-5 business days',
  },
  {
    step: 4,
    icon: Beaker,
    title: 'Sample & Negotiation',
    description: 'We coordinate sample requests, facilitate negotiations, and help you make informed decisions.',
    details: [
      'Sample request and shipping',
      'Quality evaluation support',
      'Price negotiation',
      'Terms and conditions review',
      'Contract preparation',
    ],
    timeline: '2-4 weeks',
  },
  {
    step: 5,
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    description: 'Regular production monitoring with quality inspections at key stages to ensure standards are met.',
    details: [
      'Production schedule tracking',
      'Weekly progress updates',
      'Quality inspections (as needed)',
      'Issue identification and resolution',
      'Timeline management',
    ],
    timeline: 'Ongoing throughout production',
  },
  {
    step: 6,
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle documentation, and ensure smooth delivery to your destination.',
    details: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Shipment tracking',
      'Customs clearance support',
      'Final delivery confirmation',
    ],
    timeline: 'Based on shipping method',
  },
]

const processTypes = [
  {
    title: 'Full Service Sourcing',
    description: 'Complete end-to-end support from supplier identification to delivery.',
    price: 'Custom quote based on project scope',
    features: [
      'Supplier verification',
      'Sample coordination',
      'Production monitoring',
      'Quality inspections',
      'Shipping coordination',
    ],
  },
  {
    title: 'Quality Inspection Only',
    description: 'If you already have suppliers, we provide professional QC services.',
    price: 'Starting from $200 per inspection',
    features: [
      'Pre-shipment inspection',
      'During production inspection',
      'Full container loading supervision',
      'Detailed inspection reports',
      'AQL sampling',
    ],
  },
  {
    title: 'Consultation Service',
    description: 'Expert advice and guidance for your China sourcing strategy.',
    price: 'Starting from $150/hour',
    features: [
      'Supplier selection advice',
      'Negotiation support',
      'Compliance guidance',
      'Risk assessment',
      'Ongoing advisory',
    ],
  },
]

const faqs = [
  {
    question: 'How long does the entire sourcing process take?',
    answer: 'The timeline varies based on product complexity, quantity, and availability. A typical new sourcing project takes 4-12 weeks from inquiry to delivery, depending on the product and shipping method chosen.',
  },
  {
    question: 'What information do you need to start?',
    answer: 'To provide the best service, we need: product specifications or samples, estimated quantity, target price range, required delivery timeline, and any certifications or compliance requirements.',
  },
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct site visits to verify factory existence, check business licenses, assess production capacity, review quality control systems, and evaluate worker conditions. We provide detailed reports with photos.',
  },
  {
    question: 'Can you work with our existing suppliers?',
    answer: 'Yes, we can provide quality inspection and production monitoring services for your existing suppliers. We can also help verify new suppliers you identify.',
  },
  {
    question: 'What payment terms do you accept?',
    answer: 'We accept bank transfers and major credit cards. Payment terms for our services are typically 50% upfront and 50% upon completion. Supplier payment terms vary by factory.',
  },
]

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            A clear, transparent process from your first inquiry to final delivery
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                        {step.step}
                      </div>
                      <div className="w-16 h-0.5 bg-primary-200 hidden lg:block" />
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="h-4 w-4" />
                        {step.timeline}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-surface rounded-2xl aspect-video flex items-center justify-center ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}>
                    <div className="text-center p-8">
                      <step.icon className="h-16 w-16 text-primary-300 mx-auto mb-4" />
                      <p className="text-primary-500 font-medium">Step {step.step}</p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <ArrowRight className="h-6 w-6 text-gray-300 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the level of support that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <p className="text-lg font-semibold text-primary mb-6">{type.price}</p>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full" variant="outline">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Submit your requirements today and receive a detailed quote within 24 hours.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-primary-50">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
