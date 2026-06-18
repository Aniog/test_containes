import { Link } from 'react-router-dom'
import { ArrowRight, Search, FileText, Factory, CheckCircle, Truck, Phone, Mail, Clock, Shield, Users, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Request',
    description: 'Tell us what you need - product specifications, quantity, target price, quality standards, and timeline.',
    details: [
      'Product specifications and technical drawings',
      'Target price range and quantity',
      'Quality requirements and standards',
      'Required certifications',
      'Delivery timeline and destination',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find Suppliers',
    description: 'Our team researches and identifies verified manufacturers in China matching your specific criteria.',
    details: [
      'Comprehensive supplier database research',
      'Initial supplier screening and shortlisting',
      'Verification of production capabilities',
      'Pricing comparison and negotiation',
      'Creation of supplier shortlist (3-5 suppliers)',
    ],
  },
  {
    number: '03',
    icon: Shield,
    title: 'Factory Verification',
    description: 'We conduct on-site audits to confirm factory legitimacy, capacity, and compliance.',
    details: [
      'On-site factory visits',
      'Business license verification',
      'Production capacity assessment',
      'Certification verification',
      'Worker conditions evaluation',
    ],
  },
  {
    number: '04',
    icon: Factory,
    title: 'Sample Evaluation',
    description: 'You review product samples and provide feedback before mass production begins.',
    details: [
      'Sample request coordination',
      'Sample shipping management',
      'Quality evaluation reports',
      'Feedback collection and communication',
      'Sample approval process',
    ],
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Production & QC',
    description: 'We monitor production and perform quality inspections to ensure everything stays on track.',
    details: [
      'Regular production progress updates',
      'On-site production monitoring',
      'Pre-production inspections',
      'In-process quality checks',
      'Pre-shipment final inspections',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics and ensure smooth customs clearance for delivery to your location.',
    details: [
      'Freight forwarding coordination',
      'Customs documentation preparation',
      'Cargo tracking',
      'Customs clearance assistance',
      'Final delivery coordination',
    ],
  },
]

const timeline = [
  { stage: 'Supplier Sourcing', duration: '1-2 weeks' },
  { stage: 'Factory Verification', duration: '1 week' },
  { stage: 'Sample Evaluation', duration: '2-4 weeks' },
  { stage: 'Production', duration: '4-12 weeks' },
  { stage: 'Shipping', duration: '2-6 weeks' },
]

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Skip months of research and verification. We streamline the entire process.',
  },
  {
    icon: Shield,
    title: 'Reduce Risk',
    description: 'Avoid costly mistakes with our verification and quality control processes.',
  },
  {
    icon: TrendingUp,
    title: 'Better Outcomes',
    description: 'Access to verified suppliers often means better pricing and quality.',
  },
  {
    icon: Users,
    title: 'Professional Support',
    description: 'Bilingual team with deep China sourcing expertise.',
  },
]

export default function HowItWorks() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p className="text-lg text-gray-300">
              Our transparent, step-by-step process ensures your China sourcing is 
              smooth, safe, and successful from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-blue-100">{step.number}</span>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  
                  <h3 className="font-semibold text-gray-900 mb-3">What happens:</h3>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-gray-100 rounded-2xl p-8 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-center">
                    <step.icon className="w-24 h-24 text-blue-900 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-900">{step.number}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-gray-600">
              Timeline varies based on product complexity and specific requirements.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-medium text-blue-900">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-900">{item.stage}</span>
                  </div>
                  <span className="text-gray-600">{item.duration}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <span className="text-lg font-medium text-gray-900">Total: </span>
              <span className="text-lg text-blue-900 font-semibold">10-26 weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach addresses common sourcing challenges and ensures successful outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get a free consultation and quote. We'll explain how our process works for your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}