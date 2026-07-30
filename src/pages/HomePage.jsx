import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Factory, Ship, CheckCircle2,
  Users, Globe, Award, TrendingUp, ArrowRight, MessageSquare
} from 'lucide-react'
import CTABanner from '@/components/CTABanner'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist verified suppliers that match your product specs, MOQ, and budget.', titleId: 'svc-sourcing-title', descId: 'svc-sourcing-desc' },
  { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, production capacity, certifications, and working conditions.', titleId: 'svc-verification-title', descId: 'svc-verification-desc' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container loading inspections with detailed reports.', titleId: 'svc-inspection-title', descId: 'svc-inspection-desc' },
  { icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule.', titleId: 'svc-production-title', descId: 'svc-production-desc' },
  { icon: Ship, title: 'Shipping Coordination', desc: 'End-to-end logistics support from factory to your warehouse, including customs documentation.', titleId: 'svc-shipping-title', descId: 'svc-shipping-desc' },
  { icon: MessageSquare, title: 'Negotiation Support', desc: 'Price negotiation, contract review, and payment term optimization on your behalf.', titleId: 'svc-negotiation-title', descId: 'svc-negotiation-desc' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Verify', desc: 'Our team identifies suppliers, visits factories, and shortlists the best options.' },
  { step: '03', title: 'Sample & Approve', desc: 'We arrange samples, coordinate feedback, and finalize your supplier selection.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production, conduct inspections, and ensure quality standards are met.' },
  { step: '05', title: 'Ship & Deliver', desc: 'We coordinate logistics and documentation until goods arrive at your door.' },
]

const trustPoints = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Globe, value: '35+', label: 'Countries Reached' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: TrendingUp, value: '98%', label: 'Client Retention' },
]

const problems = [
  'Struggling to find reliable suppliers online?',
  'Worried about factory scams or fake certifications?',
  'Received defective goods with no recourse?',
  'Can\'t visit China to verify suppliers yourself?',
  'Dealing with language barriers and time zones?',
  'Unsure about import regulations and shipping?',
]

export default function HomePage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-7f3a2c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block bg-orange/20 text-orange text-sm font-medium px-3 py-1 rounded-full mb-6">
              Trusted by 500+ Global Buyers
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We help you find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-orange text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-orange-dark transition text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition text-base"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <point.icon className="w-8 h-8 text-orange mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-navy">{point.value}</div>
                <div className="text-sm text-slate-500 mt-1">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange text-sm font-semibold uppercase tracking-wide">Our Services</span>
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              End-to-End Sourcing Support
            </h2>
            <p id="services-subtitle" className="text-slate-600 mt-4 max-w-2xl mx-auto">
              From finding the right supplier to delivering goods at your warehouse, we handle every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
                <service.icon className="w-10 h-10 text-navy mb-4" />
                <h3 id={service.titleId} className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p id={service.descId} className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-navy font-semibold hover:text-orange transition">
              View All Services <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange text-sm font-semibold uppercase tracking-wide">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Simple 5-Step Sourcing Process
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our streamlined process makes sourcing from China straightforward and risk-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <div className="text-3xl font-extrabold text-orange/30 mb-2">{item.step}</div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center text-navy font-semibold hover:text-orange transition">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Factory Image Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange text-sm font-semibold uppercase tracking-wide">Why Choose Us</span>
              <h2 id="why-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2 mb-6">
                Your Eyes and Ears in China
              </h2>
              <p id="why-subtitle" className="text-slate-600 leading-relaxed mb-6">
                With a local team based in Guangzhou and Yiwu, we provide on-the-ground support that remote sourcing platforms simply cannot match. We visit factories, inspect goods, and negotiate on your behalf.
              </p>
              <ul className="space-y-3">
                {['Local team with 12+ years of experience', 'On-site factory visits and audits', 'Transparent pricing with no hidden fees', 'Dedicated project manager for each client', 'Real-time updates and photo reports'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="factory-visit-4b8e1a"
                data-strk-img="[why-subtitle] [why-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory visit and quality inspection in China"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange text-sm font-semibold uppercase tracking-wide">Problems We Solve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mt-2">
              Common Sourcing Challenges
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              If any of these sound familiar, we can help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem) => (
              <div key={problem} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  )
}
