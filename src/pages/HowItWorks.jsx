import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, Shield, Truck, CheckCircle, ArrowRight, Phone, FileText, Package } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Initial Consultation',
    description: 'Share your product requirements, specifications, target price, and quantity. We\'ll discuss your needs and provide initial guidance.',
    details: [
      'Free initial consultation call',
      'Product specification review',
      'Target price discussion',
      'Timeline and quantity planning',
    ],
  },
  {
    number: '02',
    icon: <Search className="w-8 h-8" />,
    title: 'Supplier Identification',
    description: 'We search our network and the market to find suppliers that match your requirements, then verify their credentials.',
    details: [
      'Market research and supplier screening',
      'Factory capability assessment',
      'Business license verification',
      'Shortlist presentation with recommendations',
    ],
  },
  {
    number: '03',
    icon: <FileText className="w-8 h-8" />,
    title: 'Sampling & Negotiation',
    description: 'We coordinate samples, help negotiate pricing and terms, and ensure specifications are met before moving to production.',
    details: [
      'Sample ordering and evaluation',
      'Specification confirmation',
      'Price and term negotiation',
      'Contract review and finalization',
    ],
  },
  {
    number: '04',
    icon: <Shield className="w-8 h-8" />,
    title: 'Quality Inspection',
    description: 'Our inspectors conduct on-site quality checks at multiple stages throughout the production process.',
    details: [
      'Pre-production material check',
      'During production inspection',
      'Pre-shipment quality check',
      'Detailed inspection reports',
    ],
  },
  {
    number: '05',
    icon: <Truck className="w-8 h-8" />,
    title: 'Shipping & Delivery',
    description: 'We handle all logistics, customs documentation, and shipping coordination to ensure smooth delivery.',
    details: [
      'Customs documentation preparation',
      'Freight forwarding arrangement',
      'Shipment tracking and updates',
      'Final delivery coordination',
    ],
  },
  {
    number: '06',
    icon: <Phone className="w-8 h-8" />,
    title: 'Ongoing Support',
    description: 'We provide continued support after delivery, helping with reorders, quality issues, and new product sourcing.',
    details: [
      'Post-delivery quality support',
      'Reorder coordination',
      'Supplier relationship management',
      'Continuous improvement recommendations',
    ],
  },
]

const HowItWorks = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-primary py-20 md:py-28">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm mb-6">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our streamlined process makes sourcing from China simple, transparent, and reliable.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`relative md:grid md:grid-cols-2 md:gap-12 md:items-center ${
                    index % 2 === 0 ? '' : 'md:direction-rtl'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-12 h-12 
                                bg-primary rounded-full items-center justify-center text-white 
                                font-bold text-lg z-10 top-1/2 -translate-y-1/2">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:order-2'}`}>
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 
                                  hover:shadow-lg transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 md:hidden bg-primary rounded-full flex items-center 
                                      justify-center text-white font-bold">
                          {step.number}
                        </div>
                        <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center 
                                      justify-center text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-navy mb-3">{step.title}</h3>
                      <p className="text-navy-500 mb-6">{step.description}</p>
                      
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-navy-600 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? '' : 'md:order-1'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Our Process Works</h2>
            <p className="section-subtitle mx-auto">
              Our proven process has helped hundreds of businesses successfully source from China.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center 
                            text-accent mx-auto mb-5">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Quality Focused</h3>
              <p className="text-navy-500">Multiple inspection points ensure products meet your standards.</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center 
                            text-primary mx-auto mb-5">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Risk Reduction</h3>
              <p className="text-navy-500">Verified suppliers and inspections minimize sourcing risks.</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center 
                            text-green-600 mx-auto mb-5">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Full Service</h3>
              <p className="text-navy-500">From sourcing to delivery, we handle everything.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Tell us about your project and we'll guide you through the process step by step.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Sourcing Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
