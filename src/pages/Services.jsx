import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'
import { Search, ShieldCheck, ClipboardCheck, Eye, Truck, FileText, PackageCheck, Globe, Handshake } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    description: 'We search our extensive network of verified manufacturers across China\'s major production hubs — Guangdong, Zhejiang, Jiangsu, and more — to find suppliers that match your exact product specifications, quality standards, and budget requirements.',
    features: ['Database of 2,000+ verified suppliers', 'Industry-specific supplier matching', 'Competitive pricing comparison', 'MOQ flexibility assessment'],
  },
  {
    icon: ShieldCheck,
    title: 'Factory Verification & Audits',
    description: 'Our team conducts comprehensive on-site factory audits to verify legitimacy, assess production capabilities, check certifications, and ensure compliance with international standards and ethical manufacturing practices.',
    features: ['On-site factory visits', 'Business license verification', 'Production capacity assessment', 'ISO/BSCI/SA8000 compliance checks'],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection Services',
    description: 'We conduct rigorous quality inspections at every stage of production — from raw materials to finished goods — to ensure your products meet specifications before they leave the factory.',
    features: ['Pre-production material checks', 'In-line production inspections', 'Pre-shipment final inspection', 'Detailed photo/video reports'],
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description: 'We maintain regular contact with your suppliers throughout the manufacturing process, providing status updates, resolving production issues, and ensuring your order stays on schedule.',
    features: ['Weekly production reports', 'Schedule tracking & alerts', 'Issue resolution management', 'Photo documentation of progress'],
  },
  {
    icon: FileText,
    title: 'Sample Management',
    description: 'We coordinate the entire sample process — from initial prototypes to production-ready samples — evaluating quality, providing detailed feedback, and ensuring samples match your requirements before bulk orders.',
    features: ['Sample coordination with multiple suppliers', 'Quality evaluation & comparison', 'Specification compliance review', 'Iterative improvement process'],
  },
  {
    icon: Handshake,
    title: 'Price Negotiation',
    description: 'Leveraging our deep market knowledge and supplier relationships, we negotiate the best possible pricing and payment terms on your behalf, ensuring fair deals without compromising quality.',
    features: ['Market price benchmarking', 'Volume discount negotiation', 'Payment term optimization', 'Transparent cost breakdowns'],
  },
  {
    icon: PackageCheck,
    title: 'Product Compliance & Certification',
    description: 'We help ensure your products meet the regulatory requirements of your target market, coordinating testing and certification with accredited laboratories.',
    features: ['CE/FCC/FDA compliance guidance', 'Lab testing coordination', 'Documentation preparation', 'Regulatory requirement analysis'],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We manage the entire logistics chain from factory to your door, including freight forwarding, customs documentation, warehousing, and last-mile delivery worldwide.',
    features: ['Sea, air & rail freight options', 'Customs clearance management', 'Cargo insurance arrangement', 'Door-to-door delivery worldwide'],
  },
  {
    icon: Globe,
    title: 'Ongoing Sourcing Management',
    description: 'For businesses with regular sourcing needs, we provide ongoing management of your China supply chain — handling reorders, quality control, supplier relations, and continuous improvement.',
    features: ['Dedicated account manager', 'Supplier relationship management', 'Reorder coordination', 'Cost optimization programs'],
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
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-brand-orange uppercase tracking-wider">What We Do</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">Our Sourcing Services</h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            End-to-end sourcing solutions designed to help global buyers source products from China with confidence, efficiency, and transparency.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isReversed = index % 2 !== 0
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10">
                        <Icon className="h-6 w-6 text-brand-orange" />
                      </div>
                      <h2 className="text-2xl font-bold text-brand-navy">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden bg-gray-100 aspect-[4/3] ${isReversed ? 'lg:order-1' : ''}`}>
                    <img
                      data-strk-img-id={`service-img-${index}`}
                      data-strk-img={`[services-page-title] ${service.title} China sourcing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hidden section title for image context */}
      <span id="services-page-title" className="sr-only">SSourcing China Professional Services</span>

      {/* CTA */}
      <section className="py-16 bg-brand-slate">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Need a Custom Sourcing Solution?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Every business has unique sourcing needs. Contact us to discuss how we can tailor our services to your requirements.
          </p>
          <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8">
            <Link to="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
