import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Package,
  ArrowRight, CheckCircle, BarChart3, FileText, Camera, Boxes
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const serviceDetails = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    tagline: 'Find the right factory, not just any factory.',
    description: 'We leverage our network of 2,400+ verified suppliers and deep market knowledge to identify the best manufacturing partners for your specific product, budget, and volume requirements.',
    features: [
      'Market research and supplier identification across 15 provinces',
      'MOQ negotiation and price benchmarking',
      'Capability assessment against your technical requirements',
      'Shortlist of 3-5 qualified suppliers with comparison report',
    ],
    imgQuery: 'factory manufacturing supplier sourcing',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification',
    tagline: 'Know who you are doing business with.',
    description: 'Our on-site auditors visit factories in person to verify legitimacy, production capacity, quality systems, and compliance. You receive a detailed report with photos and risk assessment.',
    features: [
      'Business license and registration verification',
      'Production line and equipment inspection',
      'Quality management system audit (ISO, BSCI, etc.)',
      'Social compliance and environmental assessment',
    ],
    imgQuery: 'factory audit verification inspection',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    tagline: 'Catch defects before they become your problem.',
    description: 'We implement multi-stage quality inspections at critical points in the production cycle, protecting your investment and your brand reputation.',
    features: [
      'Pre-production material and component checks',
      'During-production (DUPRO) inspections',
      'Pre-shipment inspection (PSI) with AQL sampling',
      'Container loading supervision and seal verification',
    ],
    imgQuery: 'quality control inspection product testing',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    tagline: 'Stay informed. Stay on schedule.',
    description: 'We act as your eyes and ears on the factory floor, monitoring production progress, addressing issues proactively, and ensuring your orders stay on track.',
    features: [
      'Weekly production progress reports with photos',
      'On-site visits at key production milestones',
      'Issue escalation and resolution with factory management',
      'Schedule management and delivery coordination',
    ],
    imgQuery: 'production line factory floor manufacturing',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    tagline: 'From factory door to your warehouse.',
    description: 'We manage the logistics chain end-to-end, coordinating with freight forwarders, handling documentation, and tracking shipments to ensure smooth delivery.',
    features: [
      'Freight forwarding and carrier selection',
      'Customs documentation and export clearance',
      'Shipment consolidation and container optimization',
      'Door-to-door tracking and delivery confirmation',
    ],
    imgQuery: 'shipping container logistics port',
  },
  {
    icon: Package,
    title: 'Product Development',
    tagline: 'Turn your idea into a finished product.',
    description: 'From initial concept to mass production, we support custom product development including prototyping, sampling, packaging design, and OEM/ODM project management.',
    features: [
      'Prototype and sample coordination',
      'Mold development and tooling management',
      'Packaging and labeling design support',
      'OEM/ODM supplier matching and project oversight',
    ],
    imgQuery: 'product prototype development design',
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
      <section className="bg-slate-900 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              End-to-End Sourcing Services
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              From supplier discovery to final delivery, we provide comprehensive sourcing support tailored to your business needs. Choose the services you need or let us manage the entire process.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-md hover:bg-secondary-hover transition-colors"
            >
              Request a Custom Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceDetails.map((service, idx) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">{service.title}</h2>
                  <p className="text-primary font-semibold mb-4">{service.tagline}</p>
                  <p className="text-slate-500 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors"
                  >
                    Inquire about this service <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div
                    className="aspect-[4/3] rounded-lg bg-slate-100 overflow-hidden"
                    data-strk-bg-id={`service-bg-${idx}-ssourcing`}
                    data-strk-bg={`[service-title-${idx}]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                  <span id={`service-title-${idx}`} className="sr-only">{service.imgQuery}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Not sure which services you need?
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            Schedule a free consultation and we will recommend the right approach for your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white text-base font-semibold rounded-md hover:bg-secondary-hover transition-colors"
          >
            Book a Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}