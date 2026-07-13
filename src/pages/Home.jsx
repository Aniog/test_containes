import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, CheckCircle2,
  Users, Globe, Award, ArrowRight, Star, ChevronDown, ChevronUp,
  Package, AlertTriangle, Clock, DollarSign, HelpCircle
} from 'lucide-react'
import { useState } from 'react'

const services = [
  { icon: Search, title: 'Supplier Sourcing', desc: 'We identify and shortlist verified suppliers that match your product specs, MOQ, and budget requirements.', titleId: 'svc-sourcing-title', descId: 'svc-sourcing-desc' },
  { icon: ShieldCheck, title: 'Factory Verification', desc: 'On-site factory audits to verify production capacity, certifications, and business legitimacy.', titleId: 'svc-verify-title', descId: 'svc-verify-desc' },
  { icon: ClipboardCheck, title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and container loading inspections with detailed photo reports.', titleId: 'svc-qc-title', descId: 'svc-qc-desc' },
  { icon: Factory, title: 'Production Follow-up', desc: 'Regular factory visits and progress updates to keep your order on schedule.', titleId: 'svc-production-title', descId: 'svc-production-desc' },
  { icon: Truck, title: 'Shipping Coordination', desc: 'End-to-end logistics support including freight booking, customs docs, and delivery tracking.', titleId: 'svc-shipping-title', descId: 'svc-shipping-desc' },
  { icon: Package, title: 'Sample Management', desc: 'We collect, inspect, and consolidate samples from multiple suppliers before shipping to you.', titleId: 'svc-sample-title', descId: 'svc-sample-desc' },
]

const processSteps = [
  { step: '01', title: 'Share Your Requirements', desc: 'Tell us what you need — product specs, target price, quantity, and timeline.' },
  { step: '02', title: 'We Source & Shortlist', desc: 'Our team identifies qualified suppliers and presents you with vetted options.' },
  { step: '03', title: 'Verify & Negotiate', desc: 'We audit factories, negotiate pricing, and confirm production terms.' },
  { step: '04', title: 'Production & QC', desc: 'We monitor production milestones and conduct quality inspections.' },
  { step: '05', title: 'Ship & Deliver', desc: 'We coordinate logistics and ensure your goods arrive safely and on time.' },
]

const problems = [
  { icon: AlertTriangle, title: 'Unreliable Suppliers', desc: 'Avoid scams and low-quality factories with our verified supplier network.' },
  { icon: Clock, title: 'Production Delays', desc: 'Our on-ground team monitors timelines and flags issues before they escalate.' },
  { icon: DollarSign, title: 'Hidden Costs', desc: 'Transparent pricing with no surprise fees. We negotiate the best terms for you.' },
  { icon: Globe, title: 'Communication Barriers', desc: 'Bilingual team bridges language and cultural gaps between you and suppliers.' },
]

const trustPoints = [
  { value: '500+', label: 'Verified Suppliers' },
  { value: '12+', label: 'Years Experience' },
  { value: '40+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
]

const faqs = [
  { q: 'What is a sourcing agent and why do I need one?', a: 'A sourcing agent acts as your local representative in China. We find suppliers, verify factories, negotiate prices, inspect quality, and coordinate shipping — saving you time, money, and risk.' },
  { q: 'How much does your service cost?', a: 'Our fees depend on the scope of work. Typically we charge a service fee of 5-8% of order value, or a fixed project fee for specific tasks like factory audits or inspections. We provide a clear quote upfront.' },
  { q: 'Can you source any type of product?', a: 'We source across most product categories including electronics, textiles, furniture, packaging, machinery, and consumer goods. If we cannot help with a specific category, we will let you know upfront.' },
  { q: 'How do you verify suppliers?', a: 'We conduct on-site factory visits, check business licenses, review production capacity, inspect quality systems, and verify export history. We provide a detailed audit report with photos.' },
  { q: 'What is your minimum order requirement?', a: 'We work with orders of all sizes. However, most Chinese factories have their own MOQs (typically 100-500 units depending on the product). We help you find suppliers that match your volume needs.' },
]

export default function Home() {
  const containerRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-a3f9c1"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-sm mb-6">
              <Globe className="w-4 h-4" />
              Trusted by buyers in 40+ countries
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can import with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors no-underline"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors no-underline border border-white/20"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-navy mb-1">{point.value}</div>
                <div className="text-sm text-slate-500">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">Our Services</span>
            <h2 id="services-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              End-to-End Sourcing Support
            </h2>
            <p id="services-section-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              From finding the right supplier to delivering goods at your door — we handle every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 id={svc.titleId} className="text-lg font-semibold text-slate-900 mb-2">{svc.title}</h3>
                <p id={svc.descId} className="text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors no-underline">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Simple 5-Step Sourcing Process
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We have streamlined the sourcing process so you can focus on growing your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative text-center">
                <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.step}
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-slate-200" />
                )}
                <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors no-underline">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Factory/QC Image Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</span>
              <h2 id="why-choose-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Your Eyes and Ears on the Ground in China
              </h2>
              <p id="why-choose-desc" className="text-lg text-slate-600 mb-8 leading-relaxed">
                With our local team based in China's key manufacturing hubs, we provide hands-on support that remote sourcing platforms simply cannot match.
              </p>
              <ul className="space-y-4">
                {[
                  'On-site factory visits and real-time updates',
                  'Bilingual team with deep industry knowledge',
                  'Transparent reporting with photos and data',
                  'No hidden fees — clear pricing from day one',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                data-strk-img-id="factory-visit-img-b7e2d4"
                data-strk-img="[why-choose-desc] [why-choose-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Factory inspection visit in China"
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
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">Problems We Solve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Common Sourcing Challenges
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Importing from China comes with risks. Here is how we help you avoid the most common pitfalls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center shrink-0">
                  <problem.icon className="w-6 h-6 text-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{problem.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">Case Studies</span>
            <h2 id="cases-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Real Results for Real Businesses
            </h2>
            <p id="cases-section-subtitle" className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              See how we have helped buyers around the world source products from China successfully.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
              <img
                data-strk-img-id="case-study-1-img-c4d5e6"
                data-strk-img="[case-1-desc] [case-1-title] [cases-section-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Electronics Accessories"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-orange bg-orange/10 px-2 py-0.5 rounded">USA</span>
                </div>
                <h3 id="case-1-title" className="text-lg font-semibold text-slate-900 mb-1">Electronics Accessories</h3>
                <p id="case-1-desc" className="text-sm text-slate-600">Saved 32% vs previous supplier</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
              <img
                data-strk-img-id="case-study-2-img-f7g8h9"
                data-strk-img="[case-2-desc] [case-2-title] [cases-section-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Home Textiles"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-orange bg-orange/10 px-2 py-0.5 rounded">Germany</span>
                </div>
                <h3 id="case-2-title" className="text-lg font-semibold text-slate-900 mb-1">Home Textiles</h3>
                <p id="case-2-desc" className="text-sm text-slate-600">Reduced defect rate from 8% to 0.5%</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
              <img
                data-strk-img-id="case-study-3-img-j1k2l3"
                data-strk-img="[case-3-desc] [case-3-title] [cases-section-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Custom Packaging"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-orange bg-orange/10 px-2 py-0.5 rounded">Australia</span>
                </div>
                <h3 id="case-3-title" className="text-lg font-semibold text-slate-900 mb-1">Custom Packaging</h3>
                <p id="case-3-desc" className="text-sm text-slate-600">Delivered 50,000 units in 3 weeks</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-navy-light transition-colors no-underline">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors border-none cursor-pointer"
                >
                  <span className="font-medium text-slate-900 pr-4">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Source from China?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us what you need and get a free, no-obligation sourcing quote within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors no-underline"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
