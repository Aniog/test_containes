import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Search, CheckCircle, Factory, Package, Truck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Needs',
    description: 'Share your product requirements, specifications, target price, and quantity.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find Suppliers',
    description: 'Our team identifies and verifies suitable suppliers from our network.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Quality Verification',
    description: 'Factory audits and sample approval before production begins.',
  },
  {
    number: '04',
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular updates and quality checks throughout the manufacturing process.',
  },
  {
    number: '05',
    icon: Package,
    title: 'Final Inspection',
    description: 'Comprehensive pre-shipment inspection to ensure quality standards.',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'Coordinated logistics from factory to your specified destination.',
  },
]

export default function SourcingProcess() {
  return (
    <section className="section bg-gray-50" id="process">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Sourcing Process</h2>
          <p className="section-subtitle">
            A streamlined approach to sourcing products from China
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-8 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </div>
                
                <div className="flex items-start gap-4 mt-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
          >
            Learn More About Our Process
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
