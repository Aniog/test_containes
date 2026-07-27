import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Building2, ClipboardCheck, Timer, Ship, FileText, DollarSign, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify manufacturers that match your product requirements, quality standards, and budget. Our team searches through our verified network and conducts initial screening to present you with the best options.',
    features: [
      'Product-specific supplier matching',
      'Initial capability assessment',
      'Competitive quotation collection',
      'Supplier comparison report',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'Before you commit to an order, we visit the factory in person to verify their business license, production capacity, quality management systems, and working conditions.',
    features: [
      'Business license verification',
      'On-site factory audit',
      'Production capacity assessment',
      'Photo and video documentation',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our QC inspectors check your products at every stage — from raw materials to finished goods — ensuring they meet your specifications before they leave the factory.',
    features: [
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection (PSI)',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Timer,
    title: 'Production Follow-up',
    description: 'We monitor your order throughout the production process, providing regular updates and catching issues early so they can be resolved before they become costly problems.',
    features: [
      'Production schedule tracking',
      'Milestone updates',
      'Issue escalation and resolution',
      'Regular status reports',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'We handle the logistics of getting your goods from the factory in China to your warehouse — including freight forwarding, customs documentation, and shipment tracking.',
    features: [
      'Freight forwarding (sea, air, express)',
      'Export documentation preparation',
      'Customs clearance assistance',
      'Shipment tracking and updates',
    ],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We coordinate sample requests, collect samples from multiple suppliers, and ship them to you for evaluation — saving you time and shipping costs.',
    features: [
      'Sample request coordination',
      'Sample collection and consolidation',
      'International sample shipping',
      'Sample evaluation feedback',
    ],
  },
  {
    icon: DollarSign,
    title: 'Price Negotiation',
    description: 'With our knowledge of local market prices and supplier relationships, we negotiate on your behalf to get the best possible pricing without compromising quality.',
    features: [
      'Market price benchmarking',
      'Multi-supplier price comparison',
      'Volume-based negotiation',
      'Transparent cost breakdown',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Communication Management',
    description: 'Language barriers and time zone differences can slow down production. Our English-speaking team handles all communication with suppliers, keeping you informed at every step.',
    features: [
      'English-speaking project manager',
      'Supplier communication handling',
      'Translation and interpretation',
      'Regular progress updates',
    ],
  },
]

export default function ServicesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Complete Sourcing Services</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              From finding the right supplier to delivering goods to your door, we provide end-to-end
              sourcing support tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-border p-6 lg:p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Sourcing from China?</h2>
            <p className="text-muted-foreground mb-8">
              Tell us about your product requirements and we will recommend the right services for your project.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
