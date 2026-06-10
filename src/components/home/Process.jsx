import { Link } from 'react-router-dom'
import { Search, FileText, Package, Truck, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Submit Your Request',
    description: 'Tell us what you need - product details, quantities, target price, and quality requirements.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Supplier Matching',
    description: 'We identify and shortlist verified suppliers that match your specifications and production needs.',
  },
  {
    number: '03',
    icon: Package,
    title: 'Samples & Negotiation',
    description: 'We arrange samples, facilitate negotiations, and help you select the best supplier for your project.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Production & QC',
    description: 'Regular production monitoring and quality inspections ensure your order meets all standards.',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle customs, and ensure your goods arrive safely at your door.',
  },
]

export function Process() {
  return (
    <section className="py-20 bg-neutral-50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Simple, Transparent Process
          </h2>
          <p className="text-lg text-neutral-600">
            Our streamlined sourcing process makes China procurement straightforward 
            and risk-free. Here's how we bring your products to life.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-7 h-7 text-primary-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 text-center">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/how-it-works" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors">
            See Detailed Process
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}