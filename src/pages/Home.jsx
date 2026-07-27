import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Clock, Ship,
  AlertTriangle, Eye, MessageSquare, Truck,
  ChevronDown, ChevronUp, ArrowRight, CheckCircle2
} from 'lucide-react'
import { services, sourcingSteps, productCategories, problems, trustPoints, caseStudies, faqs } from '@/data/content'

const iconMap = {
  Search, ShieldCheck, ClipboardCheck, Clock, Ship,
  AlertTriangle, Eye, MessageSquare, Truck, CheckCircle2,
}

function HeroSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-6d34fa"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <h1 id="hero-title" className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Find reliable suppliers. Verify factories. Inspect quality. Follow production. Coordinate shipping. We handle the entire sourcing process so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-light transition-colors duration-200"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-colors duration-200"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Sourcing Services</h2>
          <p className="text-slate-muted max-w-2xl mx-auto">
            End-to-end support from supplier search to delivery. Each service is designed to solve a real problem in the China sourcing process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Search
            return (
              <div key={service.id} className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-slate-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="inline-flex items-center text-navy-light font-semibold hover:text-navy transition-colors">
            View All Services <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Our Sourcing Process Works</h2>
          <p className="text-slate-muted max-w-2xl mx-auto">
            A clear, step-by-step process that keeps you informed and in control from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {sourcingSteps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                {step.number}
              </div>
              <h3 className="font-bold text-sm md:text-base mb-2">{step.title}</h3>
              <p className="text-slate-muted text-xs md:text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/how-it-works" className="inline-flex items-center text-navy-light font-semibold hover:text-navy transition-colors">
            Learn More About Our Process <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Products We Source</h2>
          <p className="text-slate-muted max-w-2xl mx-auto">
            We source across a wide range of product categories. If your product is made in China, we can find the right factory for it.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productCategories.map((cat) => (
            <div key={cat.id} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                alt={cat.title}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 id={cat.titleId} className="font-bold mb-2">{cat.title}</h3>
                <p id={cat.descId} className="text-slate-muted text-sm leading-relaxed">{cat.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="inline-flex items-center text-navy-light font-semibold hover:text-navy transition-colors">
            View All Product Categories <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProblemsSection() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Problems We Solve</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Sourcing from China comes with real challenges. Here are the most common ones we help our clients overcome.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem) => {
            const Icon = iconMap[problem.icon] || AlertTriangle
            return (
              <div key={problem.id} className="bg-navy-dark/50 border border-gray-600 rounded-lg p-6 md:p-8">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustPoints.map((point) => (
            <div key={point.id}>
              <div className="text-3xl md:text-4xl font-extrabold text-navy mb-2">{point.number}</div>
              <div className="text-slate-muted text-sm font-medium">{point.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudiesPreview() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-slate-muted max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses improve their China sourcing outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img
                alt={caseStudy.title}
                data-strk-img-id={caseStudy.imgId}
                data-strk-img={`[${caseStudy.descId}] [${caseStudy.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 id={caseStudy.titleId} className="font-bold mb-2">{caseStudy.title}</h3>
                <p id={caseStudy.descId} className="text-slate-muted text-sm leading-relaxed mb-4">{caseStudy.challenge.substring(0, 100)}...</p>
                <Link to="/case-studies" className="inline-flex items-center text-navy-light font-semibold text-sm hover:text-navy transition-colors">
                  Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/case-studies" className="inline-flex items-center text-navy-light font-semibold hover:text-navy transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-muted">
            Common questions about our sourcing services, quality inspections, and working process.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-navy hover:text-navy-light transition-colors"
              >
                {faq.question}
                {openId === faq.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openId === faq.id && (
                <div className="px-5 pb-5 text-slate-muted text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function InquirySection() {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Sourcing from China?</h2>
        <p className="text-gray-300 mb-8">
          Tell us about your product requirements and we will provide a free sourcing quote within 24 hours. No commitment required.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-gold text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold-light transition-colors duration-200"
        >
          Get a Free Sourcing Quote
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquirySection />
    </>
  )
}
