import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  Package, 
  FileCheck, 
  BarChart3, 
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Users,
  Globe,
  MapPin,
  Mail,
  Phone
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const services = [
    {
      id: 'verification',
      icon: Search,
      title: 'Supplier Verification',
      description: 'Comprehensive factory audits to ensure you work with legitimate, capable, and reliable manufacturers.',
      features: [
        'Business license verification',
        'Production capacity assessment',
        'Quality management system review',
        'Financial stability check',
        'Certification verification (ISO, CE, FCC, etc.)',
        'On-site factory visits',
        'Reference checks with existing clients'
      ],
      process: [
        'Initial supplier research and shortlisting',
        'Document verification (business license, certifications)',
        'On-site factory audit by our team',
        'Production capability assessment',
        'Quality systems evaluation',
        'Detailed verification report with recommendations'
      ]
    },
    {
      id: 'quality',
      icon: ClipboardCheck,
      title: 'Quality Control Inspection',
      description: 'Professional inspection services at every stage of production to ensure your products meet specifications.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'Initial production inspection (IPI)',
        'Loading supervision',
        'AQL-based sampling',
        'Detailed photo/video reports',
        'Lab testing coordination'
      ],
      process: [
        'Receive your product specifications and quality standards',
        'Schedule inspection at appropriate production stage',
        'Conduct on-site inspection using AQL standards',
        'Provide detailed report with photos within 24 hours',
        'Recommend corrective actions if needed',
        'Follow up on remediation'
      ]
    },
    {
      id: 'production',
      icon: Factory,
      title: 'Production Follow-up',
      description: 'Regular factory visits and progress monitoring to keep your order on track and address issues promptly.',
      features: [
        'Weekly progress updates',
        'Production schedule monitoring',
        'Material quality tracking',
        'Production bottleneck identification',
        'Issue escalation and resolution',
        'Timeline management',
        'Communication between you and factory'
      ],
      process: [
        'Establish production timeline and milestones',
        'Schedule regular factory visits',
        'Monitor production progress weekly',
        'Report any delays or issues immediately',
        'Coordinate between your team and factory',
        'Ensure on-time delivery'
      ]
    },
    {
      id: 'shipping',
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end shipping coordination from factory to your doorstep, handling all documentation and customs.',
      features: [
        'Freight forwarding coordination',
        'Customs clearance handling',
        'Documentation preparation',
        'Multi-modal shipping (sea, air, express)',
        'Door-to-door delivery',
        'Cargo insurance',
        'Tracking and updates'
      ],
      process: [
        'Discuss shipping requirements and timeline',
        'Compare shipping options and costs',
        'Coordinate with freight forwarders',
        'Prepare all export documentation',
        'Monitor shipment in transit',
        'Coordinate customs clearance',
        'Arrange final delivery'
      ]
    }
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Verified Suppliers',
      description: 'Every supplier we recommend has been thoroughly vetted through our rigorous verification process.'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save weeks of research and communication by leveraging our established supplier network.'
    },
    {
      icon: BarChart3,
      title: 'Quality Assurance',
      description: 'Our QC inspections ensure products meet your specifications before shipment.'
    },
    {
      icon: Globe,
      title: 'Local Presence',
      description: 'Our team is based in China, providing on-the-ground support and rapid response.'
    }
  ]

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions to ensure your China sourcing is smooth, reliable, and cost-effective. From supplier verification to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get a Quote for This Service
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gray-200">
                    <img
                      data-strk-img-id={`service-${service.id}`}
                      data-strk-img={`[service-title-${service.id}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 id={`service-title-${service.id}`} className="text-lg font-semibold text-gray-900 mb-4">Our Process:</h3>
                    <ol className="space-y-3">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                            {stepIndex + 1}
                          </span>
                          <span className="text-gray-600 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring expertise, local presence, and proven processes to make your China sourcing successful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact us today for a free consultation and quote tailored to your sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services