import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Factory, ShieldCheck, Ship, Search, ClipboardCheck, PackageCheck, ArrowRight, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'We identify and vet reliable manufacturers that match your product requirements, budget, and quality standards.',
    icon: Search,
  },
  {
    title: 'Factory Verification',
    description: 'On-site audits to confirm factory legitimacy, capacity, certifications, and production capabilities.',
    icon: Factory,
  },
  {
    title: 'Quality Control',
    description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.',
    icon: ShieldCheck,
  },
  {
    title: 'Shipping Coordination',
    description: 'End-to-end logistics support including freight forwarding, customs documentation, and delivery tracking.',
    icon: Ship,
  },
]

const process = [
  { step: '1', title: 'Tell Us What You Need', description: 'Share product specs, quantities, target price, and timeline.' },
  { step: '2', title: 'We Source & Verify', description: 'We find matching suppliers and verify factories on your behalf.' },
  { step: '3', title: 'Samples & Negotiation', description: 'We coordinate samples, pricing, and contract terms.' },
  { step: '4', title: 'Production & QC', description: 'We monitor production and conduct quality inspections.' },
  { step: '5', title: 'Shipping & Delivery', description: 'We handle logistics and keep you updated until delivery.' },
]

const trustPoints = [
  { title: 'Experienced Local Team', description: 'Based in Guangzhou with deep supplier networks across China.' },
  { title: 'Transparent Pricing', description: 'Clear fees with no hidden charges. You know what you pay for.' },
  { title: 'Quality-First Approach', description: 'We protect your brand by enforcing strict QC standards.' },
  { title: 'End-to-End Support', description: 'From sourcing to shipping, one dedicated point of contact.' },
]

const faqs = [
  { question: 'What products can you source?', answer: 'We source a wide range of consumer goods, electronics, home products, industrial parts, and more. If you have a product in mind, tell us and we will assess feasibility.' },
  { question: 'How do you verify suppliers?', answer: 'We conduct factory audits, check business licenses, review production capacity, and may visit facilities in person before recommending a supplier.' },
  { question: 'What are your fees?', answer: 'Our fees depend on project scope. We typically charge a sourcing service fee plus a percentage of order value. Contact us for a transparent quote.' },
  { question: 'Do you handle shipping?', answer: 'Yes. We coordinate sea, air, and rail freight, prepare shipping documents, and work with trusted freight forwarders.' },
  { question: 'Can you inspect goods before shipment?', answer: 'Yes. We offer pre-shipment inspections and can provide detailed inspection reports with photos and measurements.' },
]

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            data-strk-img-id="hero-bg-8f2a9c"
            data-strk-img="[hero-subtitle] [hero-title]"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-4 text-lg text-slate-200">
              Find reliable suppliers, verify factories, inspect quality, and ship with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-300">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Verified suppliers</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> On-site QC</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> End-to-end shipping</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Our Sourcing Services</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">We cover the full sourcing journey so you can focus on growing your business.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="h-8 w-8 text-slate-900" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/services">View all services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A simple, transparent process from inquiry to delivery.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item) => (
              <div key={item.step} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">STEP {item.step}</div>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild>
              <Link to="/how-it-works">Learn more about our process</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Why Buyers Choose Us</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">We focus on reliability, transparency, and results.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Quick answers to common sourcing questions.</p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-slate-900">
                  {faq.question}
                  <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Ready to start sourcing?</h2>
                <p className="mt-3 text-slate-600">Tell us what you need and we will prepare a tailored sourcing plan with transparent pricing.</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4" /> Free initial consultation</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4" /> No-obligation quote</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4" /> Clear next steps and timeline</li>
                </ul>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link to="/contact">Get a Free Sourcing Quote</Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-2xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Verified suppliers</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-2xl font-bold text-slate-900">1,200+</div>
                  <div className="text-sm text-slate-600">Shipments completed</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Client satisfaction</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-2xl font-bold text-slate-900">12+</div>
                  <div className="text-sm text-slate-600">Years in business</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
