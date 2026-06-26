import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  ShieldCheck, 
  ClipboardCheck, 
  Ship, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  PackageCheck,
  Truck,
  FileSearch,
  Users,
  Award,
  Globe
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 'sourcing',
      icon: Search,
      title: 'Supplier Sourcing & Matching',
      description: 'We find and match you with reliable Chinese manufacturers that meet your product specifications, quality standards, and budget requirements.',
      features: [
        'Extensive verified supplier database across China',
        'Product specification matching and RFQ management',
        'Price negotiation and MOQ flexibility',
        'Supplier background checks and reference verification',
        'Multiple supplier options for comparison'
      ],
      benefits: 'Save 40+ hours of research time per project'
    },
    {
      id: 'verification',
      icon: ShieldCheck,
      title: 'Factory Verification & Audits',
      description: 'Comprehensive on-site factory audits to verify business legitimacy, production capacity, and quality management systems.',
      features: [
        'Business license and registration verification',
        'Factory facility tour and capacity assessment',
        'Quality management system evaluation (ISO, etc.)',
        'Financial stability and reputation checks',
        'Detailed audit reports with photos and findings'
      ],
      benefits: 'Avoid costly mistakes from unverified suppliers'
    },
    {
      id: 'qc',
      icon: ClipboardCheck,
      title: 'Quality Control & Inspection',
      description: 'Professional quality control services at every production stage to ensure your products meet specifications and quality standards.',
      features: [
        'Pre-production inspection (PPI)',
        'During production inspection (DPI)',
        'Pre-shipment inspection (PSI)',
        'Container loading supervision (CLS)',
        'Detailed inspection reports with photos and videos'
      ],
      benefits: 'Reduce defect rates by up to 60%'
    },
    {
      id: 'shipping',
      icon: Ship,
      title: 'Shipping & Logistics Coordination',
      description: 'End-to-end logistics management from factory to your warehouse, including freight forwarding and customs clearance.',
      features: [
        'Sea, air, and express freight options',
        'Customs documentation and clearance',
        'Cargo insurance coordination',
        'Warehousing and consolidation services',
        'Real-time shipment tracking'
      ],
      benefits: 'Streamlined delivery with full visibility'
    },
    {
      id: 'product-development',
      icon: PackageCheck,
      title: 'Product Development & Prototyping',
      description: 'Assistance with product design refinement, prototyping, and sample approval before mass production.',
      features: [
        'Design review and optimization suggestions',
        'Prototype production coordination',
        'Sample testing and quality verification',
        'Design for manufacturability (DFM) analysis',
        'Material sourcing recommendations'
      ],
      benefits: 'Faster time-to-market with optimized designs'
    },
    {
      id: 'price-negotiation',
      icon: Globe,
      title: 'Price Negotiation & Cost Optimization',
      description: 'Expert negotiation to secure the best possible pricing while maintaining quality standards.',
      features: [
        'Market price analysis and benchmarking',
        'Volume discount negotiation',
        'Long-term contract optimization',
        'Cost breakdown and value analysis',
        'Alternative material/supplier suggestions'
      ],
      benefits: 'Average 15-25% cost savings for clients'
    }
  ]

  const additionalServices = [
    {
      title: 'Trade Show Representation',
      description: 'We attend major Chinese trade shows on your behalf, sourcing new suppliers and products.',
      icon: Users
    },
    {
      title: 'Supplier Management',
      description: 'Ongoing relationship management with your suppliers to ensure consistent quality and communication.',
      icon: Award
    },
    {
      title: 'Compliance & Certification',
      description: 'Assistance with product certifications (CE, FCC, RoHS) and compliance requirements.',
      icon: FileSearch
    },
    {
      title: 'After-Sales Support',
      description: 'Continued support for warranty claims, replacements, and ongoing supplier issues.',
      icon: Truck
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive China sourcing solutions designed to help overseas buyers 
              find reliable suppliers, ensure quality, and streamline logistics.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-blue-100 text-blue-600 mb-6">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg text-blue-700">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-medium">{service.benefits}</span>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-video">
                    <img
                      data-strk-img-id={`service-${service.id}-img-${index}`}
                      data-strk-img={`[service-${service.id}-title] [service-${service.id}-desc]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <span id={`service-${service.id}-title`} className="hidden">{service.title}</span>
                    <span id={`service-${service.id}-desc`} className="hidden">{service.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer additional services to support your complete sourcing needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Streamline Your China Sourcing?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and customized sourcing solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/how-it-works">Learn Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
