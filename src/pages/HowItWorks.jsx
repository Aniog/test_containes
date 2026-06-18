import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, 
  Search, 
  Sample, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  Users,
  TrendingUp,
  MessageCircle
} from 'lucide-react'

const processSteps = [
  {
    id: 1,
    icon: FileText,
    title: 'Submit Your Request',
    description: 'Tell us what you need. Provide product details, specifications, quantity, target price, and any special requirements.',
    details: [
      'Product specifications and technical drawings',
      'Target price range',
      'Order quantity',
      'Quality standards required',
      'Packaging requirements',
      'Timeline expectations',
    ],
    timeline: 'Day 1',
  },
  {
    id: 2,
    icon: Search,
    title: 'We Find Suppliers',
    description: 'Our team researches and vets manufacturers to find the best matches for your requirements.',
    details: [
      'Market research across verified databases',
      'Supplier capability matching',
      'Initial price comparisons',
      'Factory verification checks',
      'Certification verification',
      'Shortlist of 3-5 qualified suppliers',
    ],
    timeline: 'Days 2-7',
  },
  {
    id: 3,
    icon: Sample,
    title: 'Sample & Negotiation',
    description: 'We coordinate sample requests, evaluate quality, and negotiate the best terms with suppliers.',
    details: [
      'Sample request coordination',
      'Quality evaluation',
      'Price negotiation',
      'Payment terms negotiation',
      'Lead time confirmation',
      'MOQ (Minimum Order Quantity) discussion',
    ],
    timeline: 'Days 8-21',
  },
  {
    id: 4,
    icon: Factory,
    title: 'Production & Monitoring',
    description: 'We monitor production progress and conduct quality inspections to ensure everything stays on track.',
    details: [
      'Production progress updates',
      'Pre-production inspections',
      'During-production inspections',
      'Issue resolution',
      'Timeline management',
      'Regular photo/video updates',
    ],
    timeline: 'Days 22-45',
  },
  {
    id: 5,
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics from factory to your doorstep, handling documentation and customs.',
    details: [
      'Pre-shipment inspection',
      'Container loading supervision',
      'Freight coordination',
      'Customs documentation',
      'Import clearance',
      'Door-to-door delivery',
    ],
    timeline: 'Days 46-60',
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Verified Suppliers',
    description: 'Every supplier we recommend has passed our rigorous verification process.',
  },
  {
    icon: Clock,
    title: 'Time Saved',
    description: 'We handle all the research, communication, and coordination, saving you weeks of effort.',
  },
  {
    icon: TrendingUp,
    title: 'Cost Effective',
    description: 'Our relationships with factories and volume expertise help you get competitive pricing.',
  },
  {
    icon: Users,
    title: 'Local Expertise',
    description: 'Our team in China provides on-the-ground support and cultural understanding.',
  },
]

const timelineOptions = [
  { label: 'Standard', duration: '8-12 weeks', description: 'For standard orders with flexible timelines' },
  { label: 'Express', duration: '4-6 weeks', description: 'Accelerated process for urgent requirements' },
  { label: 'Rush', duration: '2-3 weeks', description: 'Maximum acceleration, additional fees apply' },
]

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1)
  const currentStep = processSteps.find(s => s.id === activeStep)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Our Sourcing Works
            </h1>
            <p className="text-xl text-gray-300">
              A proven 5-step process to connect you with reliable Chinese suppliers
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  activeStep === step.id
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 text-sm">
                  {step.id}
                </span>
                {step.title}
              </button>
            ))}
          </div>

          {/* Step Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <currentStep.icon className="w-8 h-8 text-blue-900" />
              </div>
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {currentStep.timeline}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentStep.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {currentStep.description}
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">What Happens</h3>
              <ul className="space-y-3">
                {currentStep.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Step {currentStep.id} Details
              </h3>
              <div className="space-y-4">
                {currentStep.details.map((detail, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg">
                    <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="ml-4 text-gray-700">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-gray-600">
              While timelines vary by product complexity, here's what to expect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {timelineOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.label}</h3>
                <div className="text-3xl font-bold text-blue-900 mb-2">{option.duration}</div>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-blue-800">
              <strong>Note:</strong> Timeline starts from the day we receive complete product specifications. 
              Complex custom products may require additional time for supplier matching and sample development.
            </p>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures transparency, quality, and reliability at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Sourcing Journey?
            </h2>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Our team is ready to help you find the right suppliers. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks