import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, MessageSquare, Search, Factory, FileText, Truck, ShieldCheck } from 'lucide-react'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const steps = [
    { title: "Step 1: Submit Inquiry", desc: "Tell us exactly what you need.", icon: <MessageSquare className="w-8 h-8" /> },
    { title: "Step 2: Supplier Sourcing", desc: "We screen our existing network for 3-5 verified suppliers.", icon: <Search className="w-8 h-8" /> },
    { title: "Step 3: Sample & Prototypes", desc: "We coordinate sample production for your approval.", icon: <FileText className="w-8 h-8" /> },
    { title: "Step 4: Production Follow-up", desc: "We monitor production and act as your on-site manager.", icon: <Factory className="w-8 h-8" /> },
    { title: "Step 5: Quality Inspection", desc: "Our inspectors perform detailed Pre-Shipment Inspection (PSI).", icon: <ShieldCheck className="w-8 h-8" /> },
    { title: "Step 6: Shipping & Logistics", desc: "We coordinate freight forwarding and customs documentation.", icon: <Truck className="w-8 h-8" /> }
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Process</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A proven, six-step system to ensure you get high-quality products from reliable Chinese manufacturers.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white font-inter">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            {steps.map((step, index) => (
              <div key={index} className="relative p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                <div className="bg-primary text-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 px-4 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-8">
           <h2 className="text-3xl font-bold">Ready to Start?</h2>
           <p className="text-slate-400">Join hundreds of businesses that trust SSourcing China for their procurement needs.</p>
           <Link to="/contact" className="bg-accent text-white px-10 py-4 rounded-md font-bold text-lg inline-block">Get a Free Consultation</Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
