import React from 'react'
import { MessageSquare, Search, Shield, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Tell Us What You Need',
    description: 'Share your product requirements, specifications, target price, and quantity. We respond within 24 hours.',
  },
  {
    number: '02',
    icon: <Search className="w-6 h-6" />,
    title: 'We Find & Verify Suppliers',
    description: 'Our team identifies suitable suppliers, verifies their credentials, and provides you with a shortlist of options.',
  },
  {
    number: '03',
    icon: <Shield className="w-6 h-6" />,
    title: 'Samples & Quality Check',
    description: 'We arrange samples, conduct quality inspections, and ensure products meet your standards before mass production.',
  },
  {
    number: '04',
    icon: <Truck className="w-6 h-6" />,
    title: 'Production & Shipping',
    description: 'We monitor production, conduct final inspections, and coordinate shipping to your destination.',
  },
]

const ProcessSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="section-title">Simple 4-Step Sourcing Process</h2>
          <p className="section-subtitle mx-auto">
            Getting started with sourcing from China is easy. We guide you through every step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gray-200 z-0" />
              )}
              
              <div className="relative z-10 bg-white rounded-xl p-6 border border-gray-100 
                            hover:border-primary-200 hover:shadow-lg transition-all duration-300">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full 
                              flex items-center justify-center text-white text-sm font-bold">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center 
                              text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  {step.icon}
                </div>
                
                <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-navy-500 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
