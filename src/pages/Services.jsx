import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Timer, Ship, ArrowRight, CheckCircle, FileText, Camera, Phone } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquiryForm from '@/components/home/InquiryForm'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers that match your product requirements, quality standards, and budget. Our team searches across multiple channels including trade shows, industry directories, and our verified supplier network.',
    features: [
      'Product-specific supplier matching',
      'Initial capability assessment',
      'Quotation comparison and analysis',
      'Trading company vs. factory identification',
      'Background and reputation checks',
    ],
    imgId: 'svc-sourcing-k2l3m4',
  },
  {
    icon: Building2,
    title: 'Factory Verification',
    description: 'Before you place an order, we visit the factory to verify their credentials, production capacity, and quality management systems. This reduces the risk of working with unreliable or fraudulent suppliers.',
    features: [
      'Business license verification',
      'On-site factory audit',
      'Production capacity assessment',
      'Quality management system review',
      'Photo and video documentation',
      'Detailed audit report',
    ],
    imgId: 'svc-verification-n5o6p7',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our quality control team conducts thorough inspections at every stage of production to ensure your products meet specifications and quality standards before they leave the factory.',
    features: [
      'Pre-production inspection',
      'During-production checks',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Function and safety testing',
      'Detailed inspection reports with photos',
    ],
    imgId: 'svc-inspection-q8r9s1',
  },
  {
    icon: Timer,
    title: 'Production Follow-up',
    description: 'We monitor your order throughout the production process, providing regular updates and addressing issues before they become problems. You always know where your order stands.',
    features: [
      'Production schedule tracking',
      'Regular progress updates',
      'Issue identification and resolution',
      'Timeline management',
      'Communication with factory management',
    ],
    imgId: 'svc-production-t2u3v4',
  },
  {
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'From factory pickup to port loading, we handle all logistics documentation and coordinate with freight forwarders to ensure your goods arrive safely and on time.',
    features: [
      'Freight forwarding coordination',
      'Export documentation preparation',
      'Customs clearance support',
      'Container loading supervision',
      'Shipment tracking',
      'Insurance arrangement',
    ],
    imgId: 'svc-shipping-w5x6y7',
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
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2 mb-4">
              Complete Sourcing Services from China
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              From finding the right supplier to delivering goods to your warehouse, we manage every step of the sourcing process with transparency and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Services detail */}
      {services.map((service, index) => (
        <section key={service.title} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div
                  className="aspect-video rounded-lg bg-slate-100 mb-6 lg:mb-0"
                  data-strk-bg-id={service.imgId}
                  data-strk-bg={`[${service.title}-heading] [service-${index}-desc]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                />
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-800" />
                </div>
                <h2 id={`${service.title}-heading`} className="heading-2 mb-4">{service.title}</h2>
                <p id={`service-${index}-desc`} className="body-text mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-blue-800">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help Sourcing from China?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Tell us about your requirements and we will provide a customized sourcing plan — free of charge.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <InquiryForm />
    </div>
  )
}
