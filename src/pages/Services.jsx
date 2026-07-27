import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  Search, ShieldCheck, ClipboardCheck, Clock, Ship,
  ArrowRight, CheckCircle2
} from 'lucide-react'
import { services } from '@/data/content'

const iconMap = { Search, ShieldCheck, ClipboardCheck, Clock, Ship, CheckCircle2 }

const serviceDetails = {
  'supplier-search': {
    benefits: [
      'Access to a vetted network of 500+ factories across China',
      'Supplier reports with factory photos, capacity data, and pricing',
      'Multiple supplier options so you can compare and choose',
      'Ongoing relationship management with your chosen supplier',
    ],
    imgId: 'svc-search-detail-a1b2',
    titleId: 'svc-search-detail-title',
    descId: 'svc-search-detail-desc',
  },
  'factory-verification': {
    benefits: [
      'On-site factory visits by our local team',
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system review',
      'Worker conditions and environmental compliance check',
    ],
    imgId: 'svc-verify-detail-c3d4',
    titleId: 'svc-verify-detail-title',
    descId: 'svc-verify-detail-desc',
  },
  'quality-inspection': {
    benefits: [
      'Pre-production inspections to verify materials and components',
      'During-production inspections to catch issues early',
      'Pre-shipment inspections based on AQL standards',
      'Detailed photo reports with defect classification',
      'Clear pass/fail recommendations for each order',
    ],
    imgId: 'svc-qc-detail-e5f6',
    titleId: 'svc-qc-detail-title',
    descId: 'svc-qc-detail-desc',
  },
  'production-follow-up': {
    benefits: [
      'Weekly production progress reports with photos',
      'Early warning on potential delays',
      'Coordination with factory on schedule adjustments',
      'Material procurement tracking',
      'Transparent timeline management',
    ],
    imgId: 'svc-production-detail-g7h8',
    titleId: 'svc-production-detail-title',
    descId: 'svc-production-detail-desc',
  },
  'shipping-coordination': {
    benefits: [
      'Freight quote comparison (sea, air, express)',
      'Customs documentation and compliance',
      'Container loading supervision',
      'Consolidated shipping for cost savings',
      'Door-to-door delivery coordination',
    ],
    imgId: 'svc-shipping-detail-i9j0',
    titleId: 'svc-shipping-detail-title',
    descId: 'svc-shipping-detail-desc',
  },
}

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Sourcing Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive China sourcing support — from finding the right factory to delivering quality products to your door.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Search
            const details = serviceDetails[service.id]
            const isEven = index % 2 === 0

            return (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="w-14 h-14 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-navy" />
                  </div>
                  <h2 id={details?.titleId} className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p id={details?.descId} className="text-slate-muted leading-relaxed mb-6">{service.description}</p>
                  {details?.benefits && (
                    <ul className="space-y-3">
                      {details.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-gold mt-0.5" />
                          <span className="text-slate-muted">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <img
                    alt={service.title}
                    data-strk-img-id={details?.imgId}
                    data-strk-img={`[${details?.descId}] [${details?.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Specific Sourcing Service?</h2>
          <p className="text-gray-300 mb-8">
            Tell us what you need and we will tailor a service package for your project. Free consultation, no commitment.
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
    </div>
  )
}
