import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Truck, Factory, Package,
  ArrowRight, CheckCircle2
} from 'lucide-react'

export default function Services() {
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
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">Our Services</span>
            <h1 id="services-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Full-Service China Sourcing Solutions
            </h1>
            <p id="services-page-subtitle" className="text-lg text-slate-300 leading-relaxed">
              Whether you need a single factory audit or complete end-to-end sourcing support, we have the expertise and local presence to deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Supplier Sourcing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-navy" />
                </div>
                <h2 id="svc-detail-sourcing-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Supplier Sourcing</h2>
                <p id="svc-detail-sourcing-desc" className="text-slate-600 leading-relaxed mb-6">We leverage our network of 500+ verified suppliers and conduct market research to find the best match for your product requirements, budget, and timeline.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Product matching</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Price comparison</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />MOQ negotiation</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Sample coordination</li>
                </ul>
              </div>
              <div>
                <img
                  data-strk-img-id="svc-sourcing-img-m4n5o6"
                  data-strk-img="[svc-detail-sourcing-desc] [svc-detail-sourcing-title] [services-page-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Supplier Sourcing"
                  className="rounded-xl shadow-sm w-full"
                />
              </div>
            </div>

            {/* Factory Verification */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="lg:order-2">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-navy" />
                </div>
                <h2 id="svc-detail-verify-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Factory Verification</h2>
                <p id="svc-detail-verify-desc" className="text-slate-600 leading-relaxed mb-6">Our team conducts comprehensive on-site factory audits to verify production capabilities, quality systems, certifications, and business legitimacy.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Business license check</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Production capacity audit</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Quality system review</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Worker conditions assessment</li>
                </ul>
              </div>
              <div className="lg:order-1">
                <img
                  data-strk-img-id="svc-verify-img-p7q8r9"
                  data-strk-img="[svc-detail-verify-desc] [svc-detail-verify-title] [services-page-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Factory Verification"
                  className="rounded-xl shadow-sm w-full"
                />
              </div>
            </div>

            {/* Quality Inspection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6 text-navy" />
                </div>
                <h2 id="svc-detail-qc-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Quality Inspection</h2>
                <p id="svc-detail-qc-desc" className="text-slate-600 leading-relaxed mb-6">We perform inspections at every stage — during production, pre-shipment, and container loading — with detailed reports including photos and measurements.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />During-production inspection</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Pre-shipment inspection</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Container loading check</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Defect classification reports</li>
                </ul>
              </div>
              <div>
                <img
                  data-strk-img-id="svc-qc-img-s1t2u3"
                  data-strk-img="[svc-detail-qc-desc] [svc-detail-qc-title] [services-page-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Quality Inspection"
                  className="rounded-xl shadow-sm w-full"
                />
              </div>
            </div>

            {/* Production Follow-up */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="lg:order-2">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-navy" />
                </div>
                <h2 id="svc-detail-prod-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Production Follow-up</h2>
                <p id="svc-detail-prod-desc" className="text-slate-600 leading-relaxed mb-6">Regular factory visits and progress tracking ensure your order stays on schedule. We flag potential delays early so corrective action can be taken.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Weekly progress reports</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Timeline monitoring</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Issue escalation</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Photo documentation</li>
                </ul>
              </div>
              <div className="lg:order-1">
                <img
                  data-strk-img-id="svc-prod-img-v4w5x6"
                  data-strk-img="[svc-detail-prod-desc] [svc-detail-prod-title] [services-page-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Production Follow-up"
                  className="rounded-xl shadow-sm w-full"
                />
              </div>
            </div>

            {/* Shipping Coordination */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-navy" />
                </div>
                <h2 id="svc-detail-ship-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Shipping Coordination</h2>
                <p id="svc-detail-ship-desc" className="text-slate-600 leading-relaxed mb-6">End-to-end logistics management including freight booking, customs documentation, and delivery tracking to your warehouse or port.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Freight forwarder selection</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Customs documentation</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Shipment tracking</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Delivery confirmation</li>
                </ul>
              </div>
              <div>
                <img
                  data-strk-img-id="svc-ship-img-y7z8a9"
                  data-strk-img="[svc-detail-ship-desc] [svc-detail-ship-title] [services-page-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Shipping Coordination"
                  className="rounded-xl shadow-sm w-full"
                />
              </div>
            </div>

            {/* Sample Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="lg:order-2">
                <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-navy" />
                </div>
                <h2 id="svc-detail-sample-title" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Sample Management</h2>
                <p id="svc-detail-sample-desc" className="text-slate-600 leading-relaxed mb-6">We collect, inspect, photograph, and consolidate samples from multiple suppliers, then ship them to you in a single package to save time and cost.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Sample collection</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Quality check</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Photo documentation</li>
                  <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />Consolidated shipping</li>
                </ul>
              </div>
              <div className="lg:order-1">
                <img
                  data-strk-img-id="svc-sample-img-b1c2d3"
                  data-strk-img="[svc-detail-sample-desc] [svc-detail-sample-title] [services-page-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Sample Management"
                  className="rounded-xl shadow-sm w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Every project is different. Tell us your requirements and we will put together a tailored plan for you.
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
