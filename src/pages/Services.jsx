import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, ShieldCheck, ClipboardCheck, Truck, 
  FileText, Package, BarChart3, Handshake,
  ArrowRight, CheckCircle
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We verify factory credentials, business licenses, production capacity, and certifications to ensure you work with legitimate suppliers.',
    features: [
      'Business license verification',
      'Factory facility inspection',
      'Production capacity assessment',
      'Certification verification (CE, FCC, ISO, etc.)',
      'Reference checks',
      'Financial stability assessment',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Audits',
    description: 'Comprehensive on-site audits including facility inspections, quality management systems review, and capability assessments.',
    features: [
      'On-site factory visits',
      'Quality management system audit',
      'Production line inspection',
      'Worker conditions assessment',
      'Capacity and capability analysis',
      'Compliance verification',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-shipment inspections at key production stages. We check product quality, specifications, packaging, and compliance.',
    features: [
      'Pre-production inspection',
      'During production inspection',
      'Pre-shipment inspection',
      'AQL-based sampling',
      'Lab testing coordination',
      'Detailed photo/video reports',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
    features: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation handling',
      'Door-to-door delivery',
      'Insurance coordination',
      'Shipping cost optimization',
    ],
  },
  {
    icon: FileText,
    title: 'Product Development',
    description: 'We help you develop new products from concept to production, working with factories to create samples and prototypes.',
    features: [
      'Sample development',
      'Prototype creation',
      'Technical specification review',
      'Material sourcing',
      'Manufacturing process optimization',
      'Cost reduction analysis',
    ],
  },
  {
    icon: Handshake,
    title: 'Negotiation & Contract',
    description: 'We negotiate favorable terms with suppliers and ensure contracts protect your interests.',
    features: [
      'Price negotiation',
      'Payment term negotiation',
      'Contract drafting assistance',
      'MOQ optimization',
      'Lead time management',
      'Risk mitigation',
    ],
  },
]

const benefits = [
  {
    title: 'Risk Reduction',
    description: 'Minimize the risk of fraud, quality issues, and delivery delays through thorough verification and monitoring.',
  },
  {
    title: 'Time Savings',
    description: 'Save time on supplier research, communication, and travel by letting us handle the details.',
  },
  {
    title: 'Cost Efficiency',
    description: 'Leverage our relationships with verified factories to get competitive pricing and favorable terms.',
  },
  {
    title: 'Quality Assurance',
    description: 'Ensure consistent product quality through systematic inspection at every production stage.',
  },
]

export default function Services() {
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
              Our Sourcing Services
            </h1>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Comprehensive solutions to de-risk your China sourcing. From supplier verification to final delivery, we handle every step.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-[#E2E8F0]"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">{service.title}</h2>
                    <p className="text-[#4A5568] mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className="text-[#38A169] flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-sm text-[#4A5568]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#F8FAFC] p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        data-strk-img-id={`service-img-${index}`}
                        data-strk-img={`${service.title.toLowerCase()} china sourcing`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={service.title}
                        className="rounded-xl shadow-lg w-full max-w-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              The benefits of partnering with a professional China sourcing agent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]"
              >
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">{benefit.title}</h3>
                <p className="text-sm text-[#4A5568]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E3A5F] to-[#2C5282]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help With Your Sourcing?
          </h2>
          <p className="text-lg text-[#A0AEC0] mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we'll create a customized solution for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A227] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#B8911F] transition-colors"
          >
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}