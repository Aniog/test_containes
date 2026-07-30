import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, Factory, ClipboardCheck, ShieldCheck, Truck, Package,
  ArrowRight, CheckCircle
} from 'lucide-react'

const services = [
  {
    id: 'sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    subtitle: 'Find the right manufacturer for your product',
    features: [
      'Identify qualified factories from our verified network',
      'Match suppliers to your specs, MOQ, and budget',
      'Shortlist 3–5 candidates with detailed profiles',
      'Facilitate introductions and initial negotiations',
    ],
    imgId: 'svc-page-sourcing-img-a1b2',
    titleId: 'svc-page-sourcing-title',
    descId: 'svc-page-sourcing-desc',
  },
  {
    id: 'factory',
    icon: Factory,
    title: 'Factory Verification',
    subtitle: 'Confirm suppliers are legitimate and capable',
    features: [
      'On-site factory audit by our local team',
      'Business license and certification checks',
      'Production capacity and equipment assessment',
      'Worker conditions and compliance review',
    ],
    imgId: 'svc-page-factory-img-c3d4',
    titleId: 'svc-page-factory-title',
    descId: 'svc-page-factory-desc',
  },
  {
    id: 'qc',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    subtitle: 'Catch defects before goods leave China',
    features: [
      'Pre-shipment inspection (PSI) against your specs',
      'In-line production checks at key milestones',
      'Detailed inspection reports with photos',
      'Pass/fail recommendations before you release payment',
    ],
    imgId: 'svc-page-qc-img-e5f6',
    titleId: 'svc-page-qc-title',
    descId: 'svc-page-qc-desc',
  },
  {
    id: 'production',
    icon: ShieldCheck,
    title: 'Production Follow-up',
    subtitle: 'Stay in control of your order timeline',
    features: [
      'Regular production status updates',
      'Photo and video documentation at each stage',
      'Issue escalation and resolution with the factory',
      'Delivery schedule monitoring',
    ],
    imgId: 'svc-page-prod-img-g7h8',
    titleId: 'svc-page-prod-title',
    descId: 'svc-page-prod-desc',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping Coordination',
    subtitle: 'Reliable logistics from China to your door',
    features: [
      'Sea freight, air freight, and express options',
      'Freight forwarder selection and booking',
      'Export customs documentation support',
      'Tracking and delivery confirmation',
    ],
    imgId: 'svc-page-ship-img-i9j0',
    titleId: 'svc-page-ship-title',
    descId: 'svc-page-ship-desc',
  },
  {
    id: 'oem',
    icon: Package,
    title: 'Private Label & OEM',
    subtitle: 'Build your own branded product line',
    features: [
      'Product design and specification development',
      'OEM manufacturer identification and vetting',
      'Sample coordination and approval rounds',
      'Packaging design and branding support',
    ],
    imgId: 'svc-page-oem-img-k1l2',
    titleId: 'svc-page-oem-title',
    descId: 'svc-page-oem-desc',
  },
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-300 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              China Sourcing Services for Global Buyers
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We provide a complete range of sourcing, verification, quality control, and logistics services — so you can import from China without the guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map(({ id, icon: Icon, title, subtitle, features, imgId, titleId, descId }, idx) => (
              <div
                key={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-lightblue rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 id={titleId} className="text-2xl md:text-3xl font-bold text-textdark mb-2">{title}</h2>
                  <p id={descId} className="text-muted text-lg mb-6">{subtitle}</p>
                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-textdark text-sm md:text-base">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-md aspect-video bg-lightblue ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-lightblue">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-textdark mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-muted text-lg mb-8">
            Tell us about your product and we'll recommend the right combination of services for your situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
