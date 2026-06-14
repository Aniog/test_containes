import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { 
  Search, ClipboardCheck, Package, Truck, FileCheck, 
  Users, Building2, DollarSign, ArrowRight, CheckCircle,
  Shield, Clock, MessageSquare
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    shortDesc: 'Verify factories before you commit',
    fullDesc: 'Our supplier verification service includes on-site factory visits to confirm business legitimacy, production capacity, equipment quality, workforce competence, and compliance standards. We provide detailed reports with photos and video documentation.',
    benefits: [
      'Business license verification',
      'Production capacity assessment',
      'Equipment and facility inspection',
      'Quality management systems review',
      'Worker conditions evaluation',
      'Financial stability check',
    ],
    image: 'factory inspection verification'
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    shortDesc: 'Professional QC at every stage',
    fullDesc: 'Our qualified inspectors conduct thorough quality checks during production and before shipment. We follow international inspection standards and provide detailed reports with photographic evidence of any issues found.',
    benefits: [
      'Pre-production inspection',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Full inspection report with photos',
      'Defect classification and analysis',
    ],
    image: 'quality control inspection worker'
  },
  {
    icon: Package,
    title: 'Production Follow-up',
    shortDesc: 'Keep your orders on track',
    fullDesc: 'We monitor your production progress with regular factory visits and status updates. This includes tracking production schedules, addressing issues as they arise, and ensuring quality standards are maintained throughout the manufacturing process.',
    benefits: [
      'Weekly production progress updates',
      'Factory visit reports',
      'Schedule management',
      'Issue escalation and resolution',
      'Sample approval coordination',
      'Production photo documentation',
    ],
    image: 'manufacturing production monitoring'
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    shortDesc: 'Streamlined logistics management',
    fullDesc: 'We handle all aspects of shipping coordination including freight forwarding, customs documentation, consolidation services, and delivery tracking. Our logistics team ensures your goods reach their destination efficiently and cost-effectively.',
    benefits: [
      'Freight forwarding (sea, air, express)',
      'Customs documentation preparation',
      'Container consolidation',
      'Port handling and coordination',
      'Delivery tracking',
      'Insurance coordination',
    ],
    image: 'container shipping logistics freight'
  },
  {
    icon: FileCheck,
    title: 'Product Development',
    shortDesc: 'From concept to production',
    fullDesc: 'We assist with product development processes including sample sourcing, prototype coordination, material sourcing, and manufacturing process optimization. Perfect for businesses looking to create custom products.',
    benefits: [
      'Sample sourcing and evaluation',
      'Prototype development coordination',
      'Material sourcing assistance',
      'Design for manufacturing review',
      'Cost optimization analysis',
      'Patent and IP protection',
    ],
    image: 'product development prototype'
  },
  {
    icon: Users,
    title: 'Custom Sourcing',
    shortDesc: 'Find any product in China',
    fullDesc: 'Need something specific? Our custom sourcing service helps you find manufacturers for unique or hard-to-source products. We leverage our network of verified suppliers to locate the right partners for your specific requirements.',
    benefits: [
      'Specific product identification',
      'Supplier matching based on requirements',
      'Capability assessment',
      'Competitive quote comparison',
      'Negotiation support',
      'Long-term supplier relationship management',
    ],
    image: 'custom product sourcing manufacturing'
  },
]

const process = [
  { step: '1', title: 'Initial Consultation', desc: 'We discuss your requirements, specifications, and goals.' },
  { step: '2', title: 'Service Selection', desc: 'Choose the services that match your needs and risk tolerance.' },
  { step: '3', title: 'Execution', desc: 'Our team executes the selected services with regular updates.' },
  { step: '4', title: 'Reporting', desc: 'You receive detailed reports with findings and recommendations.' },
  { step: '5', title: 'Ongoing Support', desc: 'We continue supporting your China operations as needed.' },
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-4">Our Services</span>
            <h1 className="heading-xl mb-6">Comprehensive China Sourcing Services</h1>
            <p className="text-lead text-slate-300 mb-8">
              From supplier verification to final delivery, we provide end-to-end support for your China sourcing operations. Our services are designed to reduce risk, ensure quality, and streamline your supply chain.
            </p>
            <Link to="/contact" className="btn-primary bg-cyan-600 text-white hover:bg-cyan-700">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="heading-md mb-2">{service.title}</h2>
                  <p className="text-cyan-600 font-medium mb-4">{service.shortDesc}</p>
                  <p className="text-slate-600 mb-6">{service.fullDesc}</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-72 lg:h-96 rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div 
                    className="absolute inset-0"
                    data-strk-bg-id={`service-bg-${i}`}
                    data-strk-bg={`[service-title-page-${i}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                  <span id={`service-title-page-${i}`} className="hidden">{service.image}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge mb-4">Our Process</span>
            <h2 className="heading-lg mb-4">How We Work With You</h2>
            <p className="section-subtitle">
              A structured approach that ensures transparency and results at every step.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-slate-50 rounded-xl p-6 text-center h-full">
                  <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">Transparent Pricing</span>
              <h2 className="heading-lg mb-4">Fair Fees, Real Value</h2>
              <p className="text-slate-600 mb-6">
                We believe in transparent, value-based pricing. Our fees are straightforward - no hidden costs, no surprises. We provide detailed quotes before any engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Success-Based Fees</h3>
                    <p className="text-sm text-slate-600">A percentage of order value for full sourcing services - our success depends on yours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Fixed Service Fees</h3>
                    <p className="text-sm text-slate-600">Flat fees for specific services like inspections and verification - know your costs upfront.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Free Initial Consultation</h3>
                    <p className="text-sm text-slate-600">We discuss your needs and provide a no-obligation quote before any commitment.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-6">What's Included in Our Service Fee</h3>
              <ul className="space-y-4">
                {[
                  'Supplier identification and initial screening',
                  'Communication and negotiation in English',
                  'Factory visit reports with photos',
                  'Regular production status updates',
                  'Quality inspection reports',
                  'Shipping coordination and documentation',
                  'Ongoing support via email and chat',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Get Started?</h2>
          <p className="text-lead text-cyan-100 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. We'll discuss your sourcing needs and provide a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-cyan-700 hover:bg-cyan-50">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href="mailto:info@ssourcingchina.com" className="btn-outline border-white/30 text-white hover:bg-white/10">
              Email Us
              <MessageSquare className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services