import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Eye, Truck, FileCheck, Boxes,
  ArrowRight, CheckCircle, Globe, Users
} from 'lucide-react'
import InquiryFormSection from '../components/home/InquiryFormSection'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    tagline: 'Find the right supplier, not just any supplier.',
    description: 'We leverage our network of 500+ verified suppliers across China\'s major manufacturing hubs — including Guangzhou, Shenzhen, Yiwu, Ningbo, and Dongguan — to find the perfect match for your product requirements and budget.',
    features: [
      'Detailed supplier shortlisting with side-by-side comparison',
      'On-site factory visits by our local team',
      'Business license and export license verification',
      'Production capability and capacity assessment',
      'Quality management system evaluation',
      'Financial stability and reference checks',
    ],
    imgId: 'service-supplier-sourcing-h3k9m5',
    query: '[service-supplier-title] China supplier factory verification audit',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    tagline: 'Catch problems before they reach your customers.',
    description: 'Our QC inspectors conduct rigorous quality checks at every stage of production. We use internationally recognized AQL standards to ensure your products meet specifications and are free from defects.',
    features: [
      'Pre-production material and component inspection',
      'In-line production monitoring',
      'Pre-shipment final inspection (AQL-based)',
      'Detailed photo and video inspection reports',
      'Product functionality and safety testing',
      'Packaging and labeling verification',
    ],
    imgId: 'service-quality-inspection-j2l7n8',
    query: '[service-inspection-title] quality control inspection factory workers checking products',
  },
  {
    id: 'production-followup',
    icon: Eye,
    title: 'Production Follow-up',
    tagline: 'Stay on schedule, every time.',
    description: 'Our project managers maintain regular contact with your suppliers, track production milestones, and intervene early when issues arise. You receive regular updates so you always know the status of your orders.',
    features: [
      'Production timeline tracking and milestone reporting',
      'Regular photo/video progress updates',
      'Early issue detection and escalation',
      'Raw material and inventory verification',
      'Coordination between multiple suppliers',
      'Reorder planning and forecasting',
    ],
    imgId: 'service-production-followup-m5p3q7',
    query: '[service-production-title] factory production line manufacturing',
  },
  {
    id: 'shipping-logistics',
    icon: Truck,
    title: 'Shipping & Logistics',
    tagline: 'From factory to your door, fully managed.',
    description: 'We coordinate the entire logistics chain — from factory pickup to final delivery. Our relationships with major freight forwarders allow us to secure competitive rates for ocean, air, and rail freight.',
    features: [
      'Ocean freight (FCL and LCL)',
      'Air freight for time-sensitive orders',
      'Rail freight to Europe',
      'Customs clearance and documentation',
      'Door-to-door delivery with tracking',
      'Cargo insurance coordination',
    ],
    imgId: 'service-shipping-logistics-a8c4r6',
    query: '[service-shipping-title] international freight shipping container logistics',
  },
  {
    id: 'customs-compliance',
    icon: FileCheck,
    title: 'Customs & Compliance',
    tagline: 'Navigate regulations with confidence.',
    description: 'Import regulations vary by country. We handle all the paperwork, certifications, and compliance requirements to ensure your goods clear customs without delays or unexpected duties.',
    features: [
      'Import/export documentation preparation',
      'Product certifications (CE, FCC, FDA, UL)',
      'Country-specific labeling requirements',
      'HS code classification',
      'Certificate of origin',
      'Compliance consulting for your target market',
    ],
    imgId: 'service-customs-compliance-d6f2s4',
    query: '[service-customs-title] customs documentation compliance certificates',
  },
  {
    id: 'oem-private-label',
    icon: Boxes,
    title: 'OEM & Private Label',
    tagline: 'Launch your own brand, manufactured in China.',
    description: 'From concept to finished product, we manage OEM and private label manufacturing. We help with product design refinement, mold creation, custom packaging, and brand registration to protect your intellectual property.',
    features: [
      'Product design and specification refinement',
      'Mold and tooling development',
      'Custom packaging and labeling design',
      'Logo printing and brand application',
      'Intellectual property protection guidance',
      'Brand registration assistance',
    ],
    imgId: 'service-oem-private-label-g4h8t3',
    query: '[service-oem-title] private label OEM product custom packaging branding',
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
      <section className="bg-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent-500/30">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              End-to-End Sourcing
              <br />
              <span className="text-accent-400">Services for Global Buyers</span>
            </h1>
            <p className="text-lg text-steel-200 leading-relaxed max-w-xl">
              From initial supplier search to final delivery, we manage every step
              of your China sourcing journey with local expertise and proven processes.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-steel-200">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '500+', label: 'Verified Suppliers' },
              { number: '6', label: 'Core Services' },
              { number: '50+', label: 'Countries Served' },
              { number: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="stat-number mb-1">{stat.number}</div>
                <p className="text-sm text-steel-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => {
              const Icon = service.icon
              const isReversed = index % 2 === 1

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isReversed ? 'lg:direction-rtl' : ''
                  }`}
                >
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-500" />
                      </div>
                      <span className="label-tag">{service.title}</span>
                    </div>
                    <h2 id={`${service.id}-title`} className="text-2xl md:text-3xl font-bold text-brand-800 mb-2">
                      {service.tagline}
                    </h2>
                    <p className="text-body mb-6">{service.description}</p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4.5 h-4.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-steel-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact" className="btn-primary">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        alt={service.title}
                        data-strk-img-id={service.imgId}
                        data-strk-img={service.query}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-72 md:h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-50">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-section mb-4">Ready to Start Sourcing?</h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Tell us what products you need and we will provide a free sourcing quote
            with supplier options within 24 hours.
          </p>
          <Link to="/contact" className="btn-accent text-base px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <InquiryFormSection />
    </div>
  )
}
