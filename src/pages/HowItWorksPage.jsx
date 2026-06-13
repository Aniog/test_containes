import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, Send, Search, Package, ClipboardCheck, Factory, Ship, CheckCircle, FileText } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Submit Your Sourcing Request',
    description: 'Tell us what you need — product details, specifications, target price, order quantity, and timeline. You can use our contact form or email us directly.',
    icon: Send,
  },
  {
    step: '02',
    title: 'Receive Your Free Quote',
    description: 'Within 24 hours, we review your requirements and provide a detailed sourcing plan with transparent pricing. No commitment required at this stage.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Supplier Identification',
    description: 'Our team searches across verified manufacturer databases, trade platforms, and our own network to identify the best suppliers for your product.',
    icon: Search,
  },
  {
    step: '04',
    title: 'Supplier Verification',
    description: 'We conduct on-site factory audits to verify business licenses, production capacity, quality systems, and working conditions before recommending any supplier.',
    icon: Factory,
  },
  {
    step: '05',
    title: 'Sample Coordination',
    description: 'We request samples from shortlisted suppliers, evaluate quality against your requirements, and coordinate revisions until you approve the final sample.',
    icon: Package,
  },
  {
    step: '06',
    title: 'Production & Quality Control',
    description: 'Once you place your order, we monitor production progress and conduct quality inspections at key stages to ensure everything meets your standards.',
    icon: ClipboardCheck,
  },
  {
    step: '07',
    title: 'Shipping & Delivery',
    description: 'We handle all logistics — freight forwarding, customs documentation, and delivery coordination — to get your products to your door safely and on time.',
    icon: Ship,
  },
]

export default function HowItWorksPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-[#1a2744] py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 id="how-it-works-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              How Our Sourcing Process Works
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A transparent, step-by-step approach from your initial inquiry to final delivery. We keep you informed at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12 md:space-y-16">
            {steps.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-[#d4a843]/30">{item.step}</span>
                    <div className="w-10 h-10 bg-[#1a2744]/5 rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="text-[#1a2744]" />
                    </div>
                  </div>
                  <h2 id={`process-step-${index}`} className="text-xl md:text-2xl font-bold text-[#1a2744] mb-3">{item.title}</h2>
                  <p className="text-[#4a5568] leading-relaxed">{item.description}</p>
                </div>
                <div
                  className={`aspect-video rounded-lg bg-[#f5f7fa] overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  data-strk-bg-id={`process-bg-${index}-a1b2c3`}
                  data-strk-bg={`[process-step-${index}] [how-it-works-title]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="800"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-[#f5f7fa]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a2744] mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">
              While every project is different, here is a general timeline for a standard sourcing project
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { phase: 'Supplier Sourcing', duration: '1-2 weeks' },
              { phase: 'Factory Verification', duration: '1 week' },
              { phase: 'Sample Development', duration: '2-4 weeks' },
              { phase: 'Production', duration: '4-8 weeks' },
              { phase: 'Quality Inspection', duration: '1 week' },
              { phase: 'Shipping', duration: '2-6 weeks' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 py-4 border-b border-[#e2e8f0] last:border-b-0">
                <CheckCircle size={20} className="text-[#d4a843] flex-shrink-0" />
                <span className="flex-1 text-[#1a2744] font-medium">{item.phase}</span>
                <span className="text-[#4a5568] text-sm">{item.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1a2744]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Sourcing Project?
            </h2>
            <p className="text-gray-300 mb-8">
              Submit your requirements today and receive a free sourcing quote within 24 hours.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
