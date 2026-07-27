import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Ship, ArrowRight,
  CheckCircle2, Factory, FileText, Camera, Package,
} from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing & Identification',
    subtitle: 'Find the right manufacturing partner in China',
    desc: 'We leverage our extensive network and database of 500+ verified factories across China to identify suppliers that match your exact product specifications, quality requirements, budget, and volume needs. We present you with a shortlist of 3-5 vetted candidates with detailed profiles.',
    details: [
      'Product requirements analysis and specification review',
      'Supplier database search across multiple industrial regions',
      'Initial supplier screening and qualification',
      'RFQ distribution and quotation collection',
      'Comparison report with pricing, MOQ, lead time analysis',
      'Shortlist of 3-5 best-matched suppliers',
    ],
    bgImgId: 'services-sourcing-bg-a1b2c3',
    titleId: 'services-sourcing-title',
    descId: 'services-sourcing-desc',
  },
  {
    icon: ShieldCheck,
    title: 'Factory Audit & Verification',
    subtitle: 'Verify before you commit',
    desc: 'Before you place an order, we conduct comprehensive on-site factory audits. Our team visits the factory in person to verify business licenses, production capabilities, quality management systems, and working conditions. You receive a detailed audit report with photos and our professional assessment.',
    details: [
      'Business license and certification verification',
      'Production line and equipment assessment',
      'Quality management system evaluation (ISO, BSCI, etc.)',
      'Workforce capacity and skill level review',
      'Export experience and reference check',
      'Detailed audit report with photos and recommendations',
    ],
    bgImgId: 'services-factory-bg-d4e5f6',
    titleId: 'services-factory-title',
    descId: 'services-factory-desc',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Ensure your products meet specifications',
    desc: 'Our QC team follows AQL international standards for all inspections. We offer in-line inspection during production to catch issues early, and pre-shipment inspection to verify final quality before containers leave the factory. You receive a detailed inspection report with photos within 24 hours.',
    details: [
      'Pre-production inspection (PPI)',
      'During production inspection (DUPRO)',
      'Pre-shipment inspection (PSI) per AQL standards',
      'Container loading supervision (CLS)',
      'Detailed inspection reports with photos within 24 hours',
      'Third-party lab testing coordination when required',
    ],
    bgImgId: 'services-qc-bg-g7h8i9',
    titleId: 'services-qc-title',
    descId: 'services-qc-desc',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics Coordination',
    subtitle: 'From factory floor to your destination',
    desc: 'We manage the entire logistics chain — from booking containers and preparing export documentation to coordinating freight forwarding and tracking shipments until they reach your destination port or warehouse. We handle FCL, LCL, air freight, and express shipping.',
    details: [
      'FCL, LCL, air freight, and express shipping options',
      'Export documentation preparation (CI, PL, BL, CO, etc.)',
      'Customs clearance coordination',
      'Freight forwarder selection and rate negotiation',
      'Shipment tracking and status updates',
      'Door-to-door delivery coordination',
    ],
    bgImgId: 'services-shipping-bg-j1k2l3',
    titleId: 'services-shipping-title',
    descId: 'services-shipping-desc',
  },
]

const addons = [
  { icon: FileText, title: 'Product Design & Development', desc: 'Connect with Chinese design engineers and prototyping services.' },
  { icon: Camera, title: 'Production Monitoring', desc: 'Weekly progress updates with photos from the production line.' },
  { icon: Package, title: 'Sample Coordination', desc: 'We coordinate and ship samples to you for approval.' },
  { icon: Factory, title: 'Trade Show Representation', desc: 'We attend Canton Fair and other trade shows on your behalf.' },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-wider">Our Services</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">End-to-End China Sourcing Solutions</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Professional services covering every stage of your China sourcing journey — from supplier discovery to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-main">
          <div className="space-y-20">
            {services.map((svc, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-center`}>
                <div className="flex-1">
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                    <svc.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h2 id={svc.titleId} className="text-2xl md:text-3xl font-bold text-navy">{svc.title}</h2>
                  <p className="mt-2 text-lg text-accent-blue font-medium">{svc.subtitle}</p>
                  <p id={svc.descId} className="mt-4 text-slate-600 leading-relaxed">{svc.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {svc.details.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="rounded-xl overflow-hidden h-72 md:h-96 w-full">
                    <div
                      data-strk-bg-id={svc.bgImgId}
                      data-strk-bg={`[${svc.descId}] [${svc.titleId}]`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="800"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-[#f7f8fa] section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">Additional Services</h2>
            <p className="mt-3 text-slate-600">Complementary services to support your sourcing journey.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <item.icon className="w-8 h-8 text-navy mb-4" />
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold text-navy">Not Sure Which Service You Need?</h2>
          <p className="mt-3 text-slate-600 max-w-xl mx-auto">
            Tell us about your project and we'll recommend the right service package for you.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-white font-semibold px-8 py-3.5 rounded-lg transition-colors"
          >
            Get a Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
