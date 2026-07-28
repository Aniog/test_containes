import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ClipboardCheck, Factory, Truck, Shield, Users, FileCheck,
  Package, ArrowRight, CheckCircle, Phone, Mail
} from 'lucide-react'

const SectionHeader = ({ eyebrow, title, description, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    {eyebrow && <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg leading-relaxed">{description}</p>}
  </div>
)

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We conduct thorough due diligence on potential suppliers to ensure they are legitimate, capable, and trustworthy.',
    features: [
      'Business license verification',
      'Factory facility inspection',
      'Production capacity assessment',
      'Financial stability check',
      'Client reference verification',
      'Sample quality evaluation',
    ],
    image: 'factory inspection verification',
    imageId: 'service-verification',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description: 'Our QC services catch issues early, saving you from costly returns and reputation damage.',
    features: [
      'Pre-production inspection (DUPRO)',
      'During-production inspection (PPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Lab testing coordination',
      'Detailed photographic reports',
    ],
    image: 'quality control inspection products',
    imageId: 'service-qc',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'We monitor your orders throughout production to ensure timelines and quality standards are met.',
    features: [
      'Production schedule monitoring',
      'Weekly progress updates',
      'Issue identification & resolution',
      'Compliance verification',
      'Timeline management',
      'Supplier communication',
    ],
    image: 'production monitoring manufacturing',
    imageId: 'service-production',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'End-to-end logistics management from factory to your destination.',
    features: [
      'Freight forwarding services',
      'Customs clearance handling',
      'Documentation preparation',
      'Consolidation services',
      'Track & trace updates',
      'Last-mile coordination',
    ],
    image: 'shipping containers logistics freight',
    imageId: 'service-shipping',
  },
]

const additionalServices = [
  {
    icon: FileCheck,
    title: 'Contract Negotiation',
    description: 'We help negotiate favorable terms with suppliers, protecting your interests.',
  },
  {
    icon: Package,
    title: 'Product Development',
    description: 'From concept to production, we assist with product development and prototyping.',
  },
  {
    icon: Users,
    title: 'Translation Services',
    description: 'Professional translation of documents, specifications, and ongoing communications.',
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Identifying and mitigating risks in your China supply chain.',
  },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="services-hero-bg"
            data-strk-bg="sourcing agent factory quality inspection"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive China sourcing solutions designed to protect your business and ensure successful partnerships with verified manufacturers.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="What We Offer"
            title="Core Sourcing Services"
            description="Everything you need to successfully source products from China, backed by local expertise and rigorous quality standards."
          />
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-800" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-2xl" />
                  <img
                    data-strk-img-id={service.imageId}
                    data-strk-img={service.image}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={service.title}
                    className="relative rounded-2xl shadow-xl w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="More Services"
            title="Additional Support"
            description="Beyond our core services, we offer supplementary support to address all your China sourcing needs."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-800" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services Matter */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Professional Sourcing Services Matter
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Without professional support, China sourcing carries significant risks. Hidden costs, quality issues, and communication barriers can quickly erode margins and damage your reputation.
              </p>
              <div className="space-y-4">
                {[
                  { stat: '67%', text: 'of businesses report quality issues without QC services' },
                  { stat: '40%', text: 'average cost overrun when not using professional sourcing' },
                  { stat: '85%', text: 'of inspection failures are caught with pre-shipment checks' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-2xl font-bold text-orange-500">{item.stat}</span>
                    <p className="text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-teal-600/20 rounded-2xl" />
              <img
                data-strk-img-id="services-why-img"
                data-strk-img="professional team meeting business collaboration"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Professional team collaboration"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your sourcing needs and receive a customized service proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcing.cn"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
