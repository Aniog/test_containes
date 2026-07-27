import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ShieldCheck, ClipboardCheck, Ship, Package,
  ArrowRight, CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import SectionHeader from '@/components/home/SectionHeader'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturing partner',
    desc: 'We search our network of 50,000+ pre-vetted suppliers to find factories that match your exact product specifications, quality standards, and budget. We provide a shortlist of 3-5 qualified candidates with detailed profiles so you can compare options side by side.',
    features: [
      'Product and market analysis',
      'Supplier identification and shortlisting',
      'Factory capability assessment',
      'Competitive price comparison',
      'Sample coordination and evaluation',
    ],
    imgId: 'svc-sourcing-detail-a1b2c3',
  },
  {
    icon: Factory,
    title: 'Factory Verification & Audits',
    subtitle: 'Know who you are working with',
    desc: 'Before you commit, we visit every factory in person. Our comprehensive audits verify business licenses, production capacity, quality management systems, certifications (ISO, BSCI, SEDEX), equipment condition, workforce, and export experience. You receive a detailed audit report with photos.',
    features: [
      'On-site factory visit and inspection',
      'Business license verification',
      'Production line and equipment assessment',
      'Quality management system review',
      'Certification and compliance check',
      'Detailed audit report with photos',
    ],
    imgId: 'svc-factory-detail-d4e5f6',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Ensure your products meet specifications',
    desc: 'Quality issues are the #1 concern when sourcing from China. Our QC engineers conduct inspections at every critical stage — from incoming raw materials to final shipment. All inspections follow international AQL standards with detailed photo reports delivered within 24 hours.',
    features: [
      'Raw material inspection',
      'In-process quality control (IPQC)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision (CLS)',
      'AQL-based sampling and testing',
      '24-hour inspection reports with photos',
    ],
    imgId: 'svc-qc-detail-g7h8i9',
  },
  {
    icon: ClipboardCheck,
    title: 'Production Monitoring',
    subtitle: 'Stay informed throughout production',
    desc: 'We provide regular production updates so you always know the status of your orders. Our team visits the factory on a scheduled basis, takes photos of work in progress, checks against the production timeline, and alerts you immediately if there are any issues or delays.',
    features: [
      'Weekly production status reports',
      'Progress photos and videos',
      'Timeline tracking and alerts',
      'Issue identification and resolution',
      'Final production sign-off',
    ],
    imgId: 'svc-production-detail-j0k1l2',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    subtitle: 'Get your products delivered on time',
    desc: 'We handle the entire logistics chain — from factory floor to your warehouse. Our team coordinates freight (sea, air, rail), manages documentation (bill of lading, certificate of origin, packing list), handles customs clearance, and tracks your shipment until delivery.',
    features: [
      'Freight forwarding (FCL, LCL, air, rail)',
      'Customs documentation and clearance',
      'Shipping cost optimization',
      'Real-time shipment tracking',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-detail-m3n4o5',
  },
  {
    icon: Package,
    title: 'Consolidation & Warehousing',
    subtitle: 'Save costs by combining shipments',
    desc: 'If you order from multiple suppliers, we can consolidate everything at our partner warehouse. We inspect each shipment, repack as needed, and combine into one consolidated container — reducing your shipping costs and simplifying logistics.',
    features: [
      'Multi-supplier order consolidation',
      'Incoming goods inspection',
      'Repacking and labeling',
      'Inventory management',
      'Consolidated container loading',
    ],
    imgId: 'svc-warehouse-detail-p6q7r8',
  },
]

export default function Services() {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Hero */}
      <section className="bg-brand-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent-400 font-medium text-sm mb-3">WHAT WE DO</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            Complete sourcing solutions — from supplier discovery to final delivery. Every service designed to give you confidence in your China supply chain.
          </p>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, i) => (
        <section key={i} className={`py-16 md:py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-brand-600" />
                </div>
                <p className="text-accent-500 font-semibold text-sm mb-2">{service.subtitle}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">{service.title}</h2>
                <p className="text-slate-500 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden shadow-lg">
                  <img
                    alt={service.title}
                    data-strk-img-id={service.imgId}
                    data-strk-img={`[svc-${i}-desc] [svc-${i}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="hidden">
                  <span id={`svc-${i}-title`}>{service.title}</span>
                  <span id={`svc-${i}-desc`}>{service.subtitle} {service.desc}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-brand-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start sourcing?</h2>
          <p className="text-slate-200 mb-8">Tell us about your product and get a free quote within 24 hours.</p>
          <Button variant="accent" size="xl" onClick={() => navigate('/contact')}>
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}