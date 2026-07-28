import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Search, 
  Building2, 
  ClipboardCheck, 
  TrendingUp, 
  Ship, 
  HeadphonesIcon,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturers for your products',
    desc: 'We conduct comprehensive market research to identify suppliers that match your specific product requirements, quality standards, and budget. Our team leverages extensive databases, industry connections, and trade show relationships to find the best options.',
    features: [
      'Product-specific supplier shortlisting',
      'Capability and capacity assessment',
      'Pricing and MOQ negotiation',
      'Background and reputation checks',
      'Competitive comparison reports',
    ],
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    subtitle: 'On-the-ground audits you can trust',
    desc: 'Our team visits factories in person to verify their legitimacy, production capacity, and working conditions. We provide photo and video evidence, detailed reports, and honest assessments so you can make informed decisions.',
    features: [
      'Business license and registration checks',
      'Production line and equipment inspection',
      'Quality management system review',
      'Workforce and capacity evaluation',
      'Certification and compliance verification',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch issues before they reach your customers',
    desc: 'We conduct thorough quality inspections at every stage of production. Our inspectors follow international standards (AQL) and provide detailed reports with photos, measurements, and pass/fail recommendations.',
    features: [
      'Raw material inspection',
      'During-production (DUPRO) inspection',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed reporting with photo evidence',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Production Follow-up',
    subtitle: 'Stay informed at every stage',
    desc: 'We monitor your production schedule, track milestones, and flag potential delays before they become problems. Regular progress reports keep you informed without the need for constant back-and-forth.',
    features: [
      'Weekly production progress reports',
      'Material sourcing and verification',
      'Production timeline management',
      'Issue identification and escalation',
      'Photo and video updates',
    ],
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    subtitle: 'From factory to your doorstep',
    desc: 'We coordinate the entire logistics chain, from freight booking to customs clearance. Our team ensures your goods are properly packed, documented, and shipped on schedule.',
    features: [
      'Freight forwarding (sea, air, rail)',
      'Export documentation and customs clearance',
      'Packaging and labeling verification',
      'Warehousing and consolidation',
      'Door-to-door delivery coordination',
    ],
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    subtitle: 'A partner you can rely on',
    desc: 'Beyond individual transactions, we build long-term relationships with our clients. We provide ongoing supplier management, quality monitoring, and strategic sourcing advice.',
    features: [
      'Dedicated account manager',
      'Supplier relationship management',
      'Continuous quality monitoring',
      'Market intelligence and trends',
      'Issue resolution and mediation',
    ],
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-500 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-brand-200 leading-relaxed">
              Comprehensive China sourcing services covering every step of your supply chain — from supplier discovery to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{service.title}</h2>
                  <p className="text-accent-500 font-medium text-sm mb-4">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-2.5">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                        <span className="text-sm text-gray-600">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    <div 
                      data-strk-bg-id={`service-bg-${i}`}
                      data-strk-bg={`[service-title-${i}] [service-section-title]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="800"
                      className="w-full h-64 md:h-80 rounded-xl bg-cover bg-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Sourcing?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us about your project and we will create a tailored sourcing plan with transparent pricing.
          </p>
          <Link to="/contact">
            <Button variant="default" size="xl">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}