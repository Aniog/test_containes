import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Search, ShieldCheck, Factory, UserCheck, Truck, BarChart3, Clock } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const steps = [
    {
      title: "Inquiry & Consultation",
      desc: "Share your product requirements, drawings, and target prices with us. Our team reviews the feasibility and clarifies any details.",
      icon: Search,
      id: "step1"
    },
    {
      title: "Supplier Matching",
      desc: "We screen 50+ prospective suppliers and select the top 3-5 candidates who meet your quality and capacity requirements.",
      icon: Factory,
      id: "step2"
    },
    {
      title: "Sampling & Negotiation",
      desc: "We coordinate samples from selected factories, help evaluate them, and negotiate the best contract terms for you.",
      icon: UserCheck,
      id: "step3"
    },
    {
      title: "Quality Monitoring",
      desc: "During production, we monitor the progress and perform final pre-shipment inspections to ensure full compliance.",
      icon: ShieldCheck,
      id: "step4"
    },
    {
      title: "Shipping & Logistics",
      desc: "Finally, we coordinate the most efficient shipping method and handle all export documentation for a smooth delivery.",
      icon: Truck,
      id: "step5"
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sourcing Process</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">A transparent, step-by-step approach to securing your supply chain in China.</p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 items-start relative group">
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-16 bottom-0 w-px bg-slate-200 group-hover:bg-blue-300 transition-colors" />
                )}
                
                <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg relative z-20 transition-transform group-hover:scale-105">
                  <step.icon size={28} />
                </div>
                
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex-grow shadow-sm transition-all group-hover:bg-white group-hover:shadow-md group-hover:border-blue-100">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Step 0{idx + 1}</span>
                    <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-50" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -translate-x-1/4 opacity-30" />
      </section>

      {/* Efficiency Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Why Timing Matters</h2>
              <p className="text-lg text-slate-400">In global trade, delays cost money. Our local presence in China ensures your production stays on schedule.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                  <Clock className="text-blue-400 mb-4" />
                  <h4 className="font-bold mb-2">Real-time Updates</h4>
                  <p className="text-sm text-slate-500">Live communication with factories during business hours in China.</p>
                </div>
                <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                  <BarChart3 className="text-blue-400 mb-4" />
                  <h4 className="font-bold mb-2">Fast Turnaround</h4>
                  <p className="text-sm text-slate-500">Quick sourcing reports and sample evaluations within days.</p>
                </div>
              </div>
            </div>
            
            <div className="relative p-8">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full" />
              <img 
                data-strk-img-id="how-it-works-visual"
                data-strk-img="business meeting factory office china"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                className="rounded-2xl shadow-2xl relative z-10"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Business Negotiation"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Quote CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Experience Our Professionalism?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Start with a free consultation and see how we can optimize your China supply chain.</p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold transition-all shadow-lg">
            Start Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
