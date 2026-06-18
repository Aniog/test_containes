import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  MessageSquare, Search, Building2, Eye, 
  ClipboardCheck, Truck, CheckCircle, ArrowRight,
  Clock, Shield, TrendingUp
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Request',
    description: 'Tell us what you need. Provide product specifications, quantity, target price, quality requirements, and any special needs.',
    details: [
      'Product specifications and technical drawings',
      'Target price and payment terms',
      'Quantity and delivery timeline',
      'Quality standards and certifications needed',
      'Packaging requirements',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find Suppliers',
    description: 'Our team researches, vets, and shortlists 3-5 qualified suppliers that match your criteria.',
    details: [
      'Extensive supplier database and network',
      'Market research and competitor analysis',
      'Supplier capability assessment',
      'Price comparison across multiple factories',
      'Initial supplier screening',
    ],
  },
  {
    number: '03',
    icon: Building2,
    title: 'Factory Verification',
    description: 'We visit factories in person to verify credentials, assess capabilities, and ensure legitimacy.',
    details: [
      'On-site factory visits',
      'Business license verification',
      'Production capacity assessment',
      'Quality management system review',
      'Worker conditions evaluation',
    ],
  },
  {
    number: '04',
    icon: Eye,
    title: 'Production Monitoring',
    description: 'Regular updates during production with photos, videos, and quality checkpoints.',
    details: [
      'Weekly progress reports',
      'Photo and video documentation',
      'Quality checkpoint inspections',
      'Issue identification and resolution',
      'Timeline management',
    ],
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections ensure products meet your specifications before loading.',
    details: [
      'AQL-based sampling inspection',
      'Product function and quality testing',
      'Packaging and labeling verification',
      'Compliance checking',
      'Detailed inspection reports',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics from factory to your door, handling all documentation.',
    details: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation handling',
      'Door-to-door delivery',
      'Shipment tracking',
    ],
  },
]

const timeline = [
  { stage: 'Initial Contact', time: 'Day 1' },
  { stage: 'Supplier Shortlist', time: '3-5 days' },
  { stage: 'Factory Verification', time: '7-14 days' },
  { stage: 'Sample Approval', time: '14-30 days' },
  { stage: 'Production', time: '30-60 days' },
  { stage: 'Inspection & Shipping', time: '7-14 days' },
  { stage: 'Delivery', time: 'Variable' },
]

const benefits = [
  {
    icon: Shield,
    title: 'Verified Suppliers',
    description: 'Every supplier we recommend has been personally verified through factory visits.',
  },
  {
    icon: Clock,
    title: 'Time Efficient',
    description: 'We handle all the legwork, saving you weeks of research and travel time.',
  },
  {
    icon: TrendingUp,
    title: 'Cost Effective',
    description: 'Our relationships with factories and shipping partners mean better prices for you.',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-[#1E3A5F] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Our proven 6-step process ensures quality suppliers and successful deliveries. From request to delivery, we handle every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-[#C9A227]/20">{step.number}</span>
                    <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                      <step.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">{step.title}</h2>
                  <p className="text-[#4A5568] mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-start gap-3">
                        <CheckCircle className="text-[#38A169] flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-[#4A5568]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    data-strk-img-id={`step-img-${index}`}
                    data-strk-img={`${step.title.toLowerCase()} process`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={step.title}
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-[#4A5568]">
              While timelines vary by project complexity, here's what to expect.
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-7 gap-4">
                {timeline.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-[#1E3A5F] text-white px-4 py-3 rounded-t-lg">
                      <p className="text-sm font-medium">{item.stage}</p>
                    </div>
                    <div className="bg-[#F8FAFC] border border-t-0 border-[#E2E8F0] px-4 py-3 rounded-b-lg">
                      <p className="text-sm text-[#C9A227] font-semibold">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Why Our Process Works
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              A systematic approach that minimizes risk and maximizes success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#C9A227]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-[#C9A227]" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{benefit.title}</h3>
                <p className="text-[#4A5568]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E3A5F] to-[#2C5282]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-[#A0AEC0] mb-8 max-w-2xl mx-auto">
            Submit your sourcing request today and let us find the perfect supplier for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#B8911F] transition-colors"
          >
            Start Your Sourcing Request
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}