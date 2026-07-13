import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle2, MessageSquare, Search, ClipboardCheck, Factory, Truck } from 'lucide-react'

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">Our Process</span>
            <h1 id="hiw-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              How It Works
            </h1>
            <p id="hiw-page-subtitle" className="text-lg text-slate-300 leading-relaxed">
              Our proven 5-step process takes the complexity out of China sourcing. From your first inquiry to final delivery, we manage every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold">01</div>
                  <MessageSquare className="w-5 h-5 text-navy" />
                </div>
                <h2 id="step-1-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Share Your Requirements</h2>
                <p id="step-1-desc" className="text-slate-600 leading-relaxed mb-6">Fill out our inquiry form with your product specifications, target price, quantity, quality standards, and delivery timeline. The more detail you provide, the faster we can help.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Product description and specifications</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Target unit price and total budget</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Required quantity and MOQ flexibility</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Quality standards and certifications needed</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Preferred delivery timeline</li>
                </ul>
              </div>
              <div>
                <img data-strk-img-id="step-1-img-e4f5g6" data-strk-img="[step-1-desc] [step-1-title] [hiw-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Share Your Requirements" className="rounded-xl shadow-sm w-full" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold">02</div>
                  <Search className="w-5 h-5 text-navy" />
                </div>
                <h2 id="step-2-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">We Source & Shortlist Suppliers</h2>
                <p id="step-2-desc" className="text-slate-600 leading-relaxed mb-6">Our team searches our verified supplier database and conducts market research to identify 3-5 qualified factories that match your requirements.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Database search of 500+ verified suppliers</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Market research for new supplier options</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Initial price and capability comparison</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Shortlist presentation with supplier profiles</li>
                </ul>
              </div>
              <div className="lg:order-1">
                <img data-strk-img-id="step-2-img-h7i8j9" data-strk-img="[step-2-desc] [step-2-title] [hiw-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="We Source and Shortlist Suppliers" className="rounded-xl shadow-sm w-full" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold">03</div>
                  <Factory className="w-5 h-5 text-navy" />
                </div>
                <h2 id="step-3-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Verify & Negotiate</h2>
                <p id="step-3-desc" className="text-slate-600 leading-relaxed mb-6">We visit shortlisted factories, audit their production capabilities, verify certifications, and negotiate the best pricing and terms on your behalf.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />On-site factory audit with photo report</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Business license and certification verification</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Price negotiation and payment terms</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Sample production and approval</li>
                </ul>
              </div>
              <div>
                <img data-strk-img-id="step-3-img-k1l2m3" data-strk-img="[step-3-desc] [step-3-title] [hiw-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Verify and Negotiate" className="rounded-xl shadow-sm w-full" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold">04</div>
                  <ClipboardCheck className="w-5 h-5 text-navy" />
                </div>
                <h2 id="step-4-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Production & Quality Control</h2>
                <p id="step-4-desc" className="text-slate-600 leading-relaxed mb-6">Once you approve the supplier and samples, we monitor production progress and conduct quality inspections at key milestones.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Production timeline monitoring</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />During-production inspection (DPI)</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Pre-shipment inspection (PSI)</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Detailed QC report with photos and data</li>
                </ul>
              </div>
              <div className="lg:order-1">
                <img data-strk-img-id="step-4-img-n4o5p6" data-strk-img="[step-4-desc] [step-4-title] [hiw-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Production and Quality Control" className="rounded-xl shadow-sm w-full" />
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center text-sm font-bold">05</div>
                  <Truck className="w-5 h-5 text-navy" />
                </div>
                <h2 id="step-5-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Shipping & Delivery</h2>
                <p id="step-5-desc" className="text-slate-600 leading-relaxed mb-6">We coordinate logistics, prepare customs documentation, book freight, and track your shipment until it arrives at your destination.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Freight forwarder selection and booking</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Export customs documentation</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Shipment tracking and updates</li>
                  <li className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />Delivery confirmation and follow-up</li>
                </ul>
              </div>
              <div>
                <img data-strk-img-id="step-5-img-q7r8s9" data-strk-img="[step-5-desc] [step-5-title] [hiw-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="700" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Shipping and Delivery" className="rounded-xl shadow-sm w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Submit your sourcing requirements and receive a free quote within 24 hours.
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
