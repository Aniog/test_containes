import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight, Users, Search, Truck, Package, MessageSquareText } from 'lucide-react'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages({}, containerRef.current)
  }, [])

  const steps = [
    {
      title: 'Step 1: Free Consultation',
      icon: MessageSquareText,
      desc: 'Send us your product requirements, target price, and estimated quantities. We review feasibility and provide initial feedback.'
    },
    {
      title: 'Step 2: Supplier Matching',
      icon: Users,
      desc: 'We scan our network and the wider market to shortlist 3-5 verified suppliers. We collect detailed quotes and factory profiles.'
    },
    {
      title: 'Step 3: Quality Verification',
      icon: Search,
      desc: 'We arrange samples, conduct virtual or in-person audits, and ensure the supplier meets your technical and compliance standards.'
    },
    {
      title: 'Step 4: Production Oversight',
      icon: Package,
      desc: 'Once you place the order, we monitor production timelines, quality milestones, and handle mid-production inspections.'
    },
    {
      title: 'Step 5: Inspection & Shipping',
      icon: Truck,
      desc: 'A final random inspection (FRI) is performed before shipping. We coordinate booking, document prep, and global logistics.'
    }
  ]

  return (
    <div ref={containerRef} className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="how-it-works-title" className="text-4xl font-bold text-slate-900 tracking-tight">Our Proven Sourcing Method</h1>
          <p id="how-it-works-subtitle" className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            We follow a systematic process that minimizes risk and maximizes efficiency for every shipment.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 relative">
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block" />
            
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2" />
                <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center -translate-x-0 md:-translate-x-1/2 z-10 border-4 border-white shadow-lg">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className={`md:w-1/2 pl-24 md:pl-0 ${i % 2 === 0 ? 'md:pr-24 md:text-right text-left pl-24' : 'md:pl-24 text-left'}`}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg mb-4">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your First Sourcing Project?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Tell us what you are looking for, and we will find the best factory for you.
            </p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition">
              Launch My Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
