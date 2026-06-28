import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, FileText, Package, Truck, ChevronRight } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Submit Your Requirements',
      description: 'Tell us what you need - product specifications, quantity, quality standards, target price, and timeline. The more details you provide, the better we can serve you.',
      icon: <FileText className="h-8 w-8 text-blue-600" />
    },
    {
      step: '02',
      title: 'Supplier Sourcing & Verification',
      description: 'We identify and verify potential suppliers through factory audits, business license checks, and capability assessments. We provide you with comparison reports.',
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />
    },
    {
      step: '03',
      title: 'Quotation & Negotiation',
      description: 'We help you evaluate quotations, negotiate better prices, and ensure all terms are clearly defined including payment terms, delivery timeline, and quality standards.',
      icon: <FileText className="h-8 w-8 text-blue-600" />
    },
    {
      step: '04',
      title: 'Production Monitoring',
      description: 'Once you confirm the supplier, we monitor production progress, conduct quality checks during manufacturing, and provide regular updates with photos.',
      icon: <Package className="h-8 w-8 text-blue-600" />
    },
    {
      step: '05',
      title: 'Quality Inspection',
      description: 'Before shipment, we conduct thorough pre-shipment inspection to ensure products meet your specifications and quality standards. You receive a detailed inspection report.',
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />
    },
    {
      step: '06',
      title: 'Shipping & Delivery',
      description: 'We coordinate shipping, handle documentation, and ensure your products are delivered to your door. We provide tracking information and support throughout.',
      icon: <Truck className="h-8 w-8 text-blue-600" />
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-blue-100">Our proven 6-step sourcing process</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    {step.icon}
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Contact us today for a free consultation</p>
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
