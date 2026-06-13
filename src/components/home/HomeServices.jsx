import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Search, Factory, ClipboardCheck, Cog, Truck, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    desc: 'We identify and shortlist pre-vetted manufacturers matching your product specs, budget, and volume requirements.',
    imgId: 'home-svc-sourcing-d1e2f3',
    titleId: 'home-svc-title-sourcing',
    descId: 'home-svc-desc-sourcing',
  },
  {
    icon: Factory,
    title: 'Factory Verification',
    desc: 'We audit factories on-site — checking licenses, production capacity, equipment, and management systems.',
    imgId: 'home-svc-factory-g4h5i6',
    titleId: 'home-svc-title-factory',
    descId: 'home-svc-desc-factory',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    desc: 'Our QC engineers inspect every batch against your specifications with detailed reports before shipment.',
    imgId: 'home-svc-qc-j7k8l9',
    titleId: 'home-svc-title-qc',
    descId: 'home-svc-desc-qc',
  },
  {
    icon: Cog,
    title: 'Production Follow-Up',
    desc: 'Weekly production progress reports keep you informed and ensure your order stays on schedule.',
    imgId: 'home-svc-production-m0n1o2',
    titleId: 'home-svc-title-prod',
    descId: 'home-svc-desc-prod',
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    desc: 'We handle freight forwarding, customs documentation, and door-to-door logistics worldwide.',
    imgId: 'home-svc-shipping-p3q4r5',
    titleId: 'home-svc-title-ship',
    descId: 'home-svc-desc-ship',
  },
]

export default function HomeServices() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-3">Our Services</p>
          <h2 id="home-services-heading" className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            End-to-End Sourcing & Supply Chain Management
          </h2>
          <p id="home-services-sub" className="text-slate-600 text-lg leading-relaxed">
            From finding suppliers to delivering goods to your warehouse, we manage the entire
            sourcing lifecycle with transparency and precision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-5 bg-slate-200">
                <img
                  alt={svc.title}
                  data-strk-img-id={svc.imgId}
                  data-strk-img={`[${svc.descId}] [${svc.titleId}] [home-services-heading]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center mb-3">
                <svc.icon className="w-5 h-5 text-navy-700" />
              </div>
              <h3 id={svc.titleId} className="text-lg font-bold text-navy-800 mb-2">{svc.title}</h3>
              <p id={svc.descId} className="text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
