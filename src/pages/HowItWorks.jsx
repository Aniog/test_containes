import React from 'react'
import { Link } from 'react-router-dom'
import { 
  MessageSquare, Search, CheckCircle, Factory, Package, Truck, 
  ArrowRight, Phone, Mail, Clock, DollarSign, Shield 
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Requirements',
    description: 'Share your product specifications, target price, quantity, and delivery timeline.',
    details: [
      'Product specifications and requirements',
      'Target price range',
      'Quantity needed',
      'Delivery timeline',
      'Quality standards and certifications',
    ],
    timeline: 'Day 1',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    description: 'We search our network to find suppliers that match your requirements.',
    details: [
      'Market research and supplier screening',
      'Factory capability assessment',
      'Price comparison and negotiation',
      'Supplier shortlisting',
      'Initial quotation presentation',
    ],
    timeline: 'Days 2-5',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Sample & Verification',
    description: 'We arrange samples and conduct factory verification before production.',
    details: [
      'Sample ordering and evaluation',
      'Factory audit and verification',
      'Quality standard confirmation',
      'Price and terms finalization',
      'Contract preparation',
    ],
    timeline: 'Days 6-20',
  },
  {
    number: '04',
    icon: Factory,
    title: 'Production & Monitoring',
    description: 'We follow production closely and provide regular updates.',
    details: [
      'Production schedule tracking',
      'Raw material verification',
      'During-production inspection',
      'Progress reporting',
      'Issue resolution',
    ],
    timeline: 'Days 21-50',
  },
  {
    number: '05',
    icon: Package,
    title: 'Quality Inspection',
    description: 'Comprehensive inspection before shipment to ensure quality standards.',
    details: [
      'Pre-shipment inspection',
      'AQL sampling and testing',
      'Defect classification',
      'Corrective action if needed',
      'Inspection report',
    ],
    timeline: 'Days 51-55',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics and handle all documentation.',
    details: [
      'Freight booking and arrangement',
      'Customs documentation',
      'Container loading supervision',
      'Shipment tracking',
      'Delivery coordination',
    ],
    timeline: 'Days 56-70',
  },
]

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'We handle all supplier communication, negotiations, and logistics coordination.',
  },
  {
    icon: DollarSign,
    title: 'Reduce Costs',
    description: 'Our negotiation expertise and supplier network help secure competitive pricing.',
  },
  {
    icon: Shield,
    title: 'Minimize Risk',
    description: 'Thorough verification and quality control protect your investment.',
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              A simple, transparent process to source products from China with confidence.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Start Your Sourcing Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-white" id="process">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our 6-Step Process</h2>
            <p className="section-subtitle">
              From initial inquiry to delivery, we guide you through every step
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-gray-50 rounded-2xl p-8 md:p-12"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-8 bg-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                  Step {step.number}
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mt-4">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <span className="text-sm text-primary font-medium">
                          {step.timeline}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div 
                    className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl aspect-[4/3] flex items-center justify-center"
                    data-strk-bg-id={`how-it-works-${step.number}-bg`}
                    data-strk-bg={`[how-it-works-title] [step-${step.number}-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  >
                    <step.icon className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                
                {/* Hidden element for interpolation */}
                <h3 id={`step-${step.number}-title`} className="sr-only">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden element for interpolation */}
      <h1 id="how-it-works-title" className="sr-only">How Our Sourcing Process Works</h1>

      {/* Benefits */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Our Process Works</h2>
            <p className="section-subtitle">
              Benefits of our structured sourcing approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your needs and receive a customized sourcing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div className="flex items-center justify-center gap-6">
              <a href="tel:+8612345678900" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
