import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck,
  CheckCircle, ArrowRight, FileText, Users, Phone
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share Your Requirements',
    what: 'Fill out our inquiry form or send us an email with your product details, specifications, target price, quantity, and delivery timeline.',
    whatYouGet: 'A detailed response within 24 hours with initial sourcing feasibility assessment and estimated costs.',
    duration: 'Day 1',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Matching & Quotes',
    what: 'Our team researches and shortlists 3-5 verified suppliers from our network. We compare pricing, capabilities, certifications, and lead times.',
    whatYouGet: 'A comprehensive supplier comparison report with factory profiles, pricing breakdowns, and our recommendation.',
    duration: '3-5 days',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Factory Verification',
    what: 'Our local team visits the top candidates in person. We verify business licenses, inspect production lines, check quality systems, and assess working conditions.',
    whatYouGet: 'A detailed factory audit report with photos, verification checklist, and our professional assessment.',
    duration: '5-7 days',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Sample Approval',
    what: 'We arrange product samples from your chosen supplier. Our team inspects the samples against your specifications before shipping them to you for final approval.',
    whatYouGet: 'Physical samples with our QC inspection report, photos, and measurement data.',
    duration: '7-15 days',
  },
  {
    number: '05',
    icon: ClipboardCheck,
    title: 'Production & Quality Control',
    what: 'After order confirmation, we monitor the entire production process. Our QC team conducts in-line inspections and a comprehensive pre-shipment inspection using AQL standards.',
    whatYouGet: 'Regular progress updates, photo/video reports, and a full pre-shipment inspection report with pass/fail decision.',
    duration: '2-6 weeks',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    what: 'We coordinate freight (ocean, air, or rail), handle customs documentation, and arrange door-to-door delivery. You receive tracking information at every stage.',
    whatYouGet: 'Bill of lading, customs clearance documents, tracking updates, and confirmed delivery to your specified address.',
    duration: '2-5 weeks',
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent-500/20 text-accent-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent-500/30">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              A Transparent Process
              <br />
              <span className="text-accent-400">From Inquiry to Delivery</span>
            </h1>
            <p className="text-lg text-steel-200 leading-relaxed max-w-xl">
              Our six-step sourcing process is designed to give you full visibility and
              control at every stage. No surprises, no hidden steps.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="relative"
                >
                  <div className="card-base card-hover">
                    <div className="grid md:grid-cols-4 gap-6 md:gap-8">
                      {/* Step number & icon */}
                      <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                        <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <span className="text-3xl font-extrabold text-brand-100 block">Step {step.number}</span>
                          <span className="text-sm font-medium text-accent-500">{step.duration}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-3">
                        <h3 className="text-xl md:text-2xl font-bold text-brand-800 mb-4">{step.title}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-semibold text-steel-500 uppercase tracking-wider mb-2">What we do</h4>
                            <p className="text-body text-sm">{step.what}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-steel-500 uppercase tracking-wider mb-2">What you get</h4>
                            <p className="text-body text-sm">{step.whatYouGet}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex justify-center py-2">
                      <div className="w-0.5 h-8 bg-brand-200" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="section-padding bg-steel-50">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-section mb-4">Typical Project Timeline</h2>
          <p className="text-body text-lg mb-10 max-w-2xl mx-auto">
            From initial inquiry to product delivery, most sourcing projects take
            8-16 weeks depending on complexity and shipping method.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { time: '24 hrs', label: 'Initial Response' },
              { time: '1-2 weeks', label: 'Supplier & Sample' },
              { time: '2-6 weeks', label: 'Production' },
              { time: '2-5 weeks', label: 'Shipping' },
            ].map((item) => (
              <div key={item.label} className="card-base text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-accent-500 mb-1">{item.time}</div>
                <p className="text-sm text-steel-600 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-50">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-section mb-4">Start Your First Sourcing Project</h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            No commitment required. Share your product requirements and we will
            respond with a tailored plan within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-accent text-base px-8 py-4">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/services" className="btn-secondary text-base px-8 py-4">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
