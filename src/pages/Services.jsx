import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Search, Factory, ClipboardCheck, Ship, ShieldCheck, FileText, Package, Wrench, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTABanner from '@/components/CTABanner'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    subtitle: 'Find the right factory, not just any factory.',
    desc: 'We go beyond simple supplier lists. Our team researches your product category, identifies qualified manufacturers, and presents a curated shortlist with detailed profiles including production capacity, certifications, export experience, and client references.',
    points: [
      'Access to 5,000+ vetted factories across China',
      'Detailed supplier profiles with due diligence reports',
      'Sample arrangement and evaluation support',
      'Price benchmarking against market rates',
    ],
    imgId: 'services-detail-sourcing-8a1b2c',
  },
  {
    id: 'factory-verification',
    icon: Factory,
    title: 'Factory Verification & Audits',
    subtitle: 'Know exactly who you are dealing with.',
    desc: 'Before you commit to a supplier, we conduct comprehensive on-site factory audits. We verify business licenses, production equipment, quality management systems, working conditions, and financial standing — giving you full confidence in your supply chain.',
    points: [
      'On-site physical factory audit with photo evidence',
      'Business license and export license verification',
      'Production capacity and equipment assessment',
      'Social compliance and working condition review',
    ],
    imgId: 'services-detail-factory-3d4e5f',
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Your quality standards, enforced on the ground.',
    desc: 'Our QC engineers inspect your products throughout the production cycle. From initial production checks to pre-shipment inspections, we ensure every unit meets your specifications before it leaves the factory.',
    points: [
      'In-process quality control (IPQC) during production',
      'Pre-shipment inspection (PSI) per AQL standards',
      'Third-party lab testing for certifications',
      'Detailed inspection reports with photos',
    ],
    imgId: 'services-detail-qc-6g7h8i',
  },
  {
    id: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From factory floor to your door.',
    desc: 'We handle all logistics — sea freight, air freight, rail, courier, customs clearance, documentation, and insurance. Our team ensures your goods move smoothly from the factory to your destination.',
    points: [
      'Sea, air, and rail freight options',
      'Customs clearance and documentation',
      'Consolidation and warehousing services',
      'Real-time shipment tracking',
    ],
    imgId: 'services-detail-shipping-9j0k1l',
  },
  {
    id: 'product-development',
    icon: Wrench,
    title: 'Product Development & OEM',
    subtitle: 'Turn your idea into a manufactured product.',
    desc: 'Need custom products? We connect you with industrial designers, engineers, and prototyping services. From concept sketches to tooling and mass production, we support the entire OEM product development cycle.',
    points: [
      'Industrial design and engineering support',
      'Prototyping and 3D printing services',
      'Mold and tooling management',
      'Bill of materials optimization for cost savings',
    ],
    imgId: 'services-detail-oem-a1b2c3',
  },
  {
    id: 'contract-negotiation',
    icon: FileText,
    title: 'Contract & Payment Protection',
    subtitle: 'Secure terms that protect your interests.',
    desc: 'We help negotiate favorable contract terms including pricing, payment schedules, warranty clauses, and delivery timelines. Our familiarity with Chinese business practices ensures you get fair and enforceable agreements.',
    points: [
      'Price negotiation and cost breakdown analysis',
      'Contract drafting and review',
      'Payment term structuring (T/T, L/C, etc.)',
      'Dispute resolution support',
    ],
    imgId: 'services-detail-contract-d4e5f6',
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
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm tracking-wide uppercase mb-3">Our Services</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Complete China Sourcing Services
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From finding the right supplier to delivering finished goods, we offer a full suite of
            services to make your China sourcing experience seamless and risk-free.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h2 id={`svc-${service.id}-title`} className="text-2xl sm:text-3xl font-bold text-navy-950 mb-2">
                    {service.title}
                  </h2>
                  <p id={`svc-${service.id}-subtitle`} className="text-brand-600 font-medium text-lg mb-4">
                    {service.subtitle}
                  </p>
                  <p id={`svc-${service.id}-desc`} className="text-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
                  >
                    Inquire About This Service <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      alt={service.title}
                      data-strk-img-id={service.imgId}
                      data-strk-img={`[svc-${service.id}-desc] [svc-${service.id}-title] [svc-${service.id}-subtitle] China sourcing`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service You Need?"
        subtitle="Talk to our team. We will assess your requirements and recommend the right approach."
        buttonText="Schedule a Free Consultation"
      />
    </div>
  )
}
