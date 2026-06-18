import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  FileText, 
  Handshake, 
  ClipboardCheck,
  Truck,
  Clock,
  Shield,
  Users,
  Star
} from 'lucide-react'

const steps = [
  {
    step: 1,
    title: 'Submit Your Request',
    description: 'Tell us what you need',
    details: [
      'Product specifications and requirements',
      'Target quantity and budget',
      'Quality standards and certifications',
      'Timeline and delivery location',
    ],
    icon: FileText,
  },
  {
    step: 2,
    title: 'We Find Suppliers',
    description: 'Research and vet potential factories',
    details: [
      'Comprehensive supplier research',
      'Background verification',
      'Factory capability assessment',
      'Shortlist 3-5 best matches',
    ],
    icon: Users,
  },
  {
    step: 3,
    title: 'Sample & Negotiation',
    description: 'Evaluate and negotiate terms',
    details: [
      'Sample arrangement and testing',
      'Price and payment term negotiation',
      'MOQ (Minimum Order Quantity) discussion',
      'Contract and agreement drafting',
    ],
    icon: MessageSquare,
  },
  {
    step: 4,
    title: 'Production & QC',
    description: 'Monitor and ensure quality',
    details: [
      'Production schedule tracking',
      'Quality inspections at key stages',
      'Issue resolution and updates',
      'Pre-shipment final inspection',
    ],
    icon: ClipboardCheck,
  },
  {
    step: 5,
    title: 'Shipping & Delivery',
    description: 'Coordinate logistics to your door',
    details: [
      'Freight forwarding coordination',
      'Customs documentation',
      'Shipment tracking',
      'Door-to-door delivery',
    ],
    icon: Truck,
  },
]

const timeline = [
  { phase: 'Week 1-2', activity: 'Supplier research and verification' },
  { phase: 'Week 2-3', activity: 'Sample requests and evaluation' },
  { phase: 'Week 3-4', activity: 'Negotiation and contract signing' },
  { phase: 'Week 4-8', activity: 'Production phase (varies by product)' },
  { phase: 'Week 8-10', activity: 'QC inspection and final approval' },
  { phase: 'Week 10-12', activity: 'Shipping and delivery' },
]

const benefits = [
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'We verify every supplier and inspect every shipment, minimizing your risk significantly.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Skip the research and coordination—we handle everything, saving you weeks of effort.',
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: 'Professional QC at multiple stages ensures your products meet specifications.',
  },
  {
    icon: Handshake,
    title: 'Better Terms',
    description: 'Our expertise helps negotiate better prices and payment terms with suppliers.',
  },
]

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | China Sourcing Process | SSourcing China</title>
        <meta name="description" content="Learn about our 5-step sourcing process: from submitting your request to receiving quality products delivered to your door." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Our proven 5-step process ensures a smooth, risk-free sourcing experience 
              from China. Here's what to expect when you work with us.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.step}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                    <div className="w-16 h-1 bg-blue-100 rounded"></div>
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{step.title}</h2>
                  <p className="text-lg text-slate-600 mb-6">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-slate-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square max-w-sm mx-auto flex items-center justify-center">
                    <step.icon className="w-32 h-32 text-blue-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-slate-600">
              While timelines vary by product complexity, here's what to expect.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600">{item.phase}</span>
                  </div>
                  <div className="flex-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full absolute -ml-9 mt-1.5"></div>
                    <span className="text-slate-700">{item.activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm mt-6">
            * Timeline is approximate and varies based on product type, quantity, and customization requirements.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our systematic approach delivers consistent results for clients worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Submit your sourcing request today and receive a detailed quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg"
          >
            Start Your Sourcing Request
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default HowItWorks