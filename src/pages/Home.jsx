import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Globe, Shield, Truck, Search, Factory, ClipboardCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 z-0 hero-gradient"
          data-strk-bg-id="hero-bg-9922"
          data-strk-bg="[hero-title] [hero-subtitle] shipping port factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl mb-8 text-blue-50">
              Your boots on the ground in China. We find reliable suppliers, verify factories, and manage production from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-accent hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-md flex items-center justify-center transition shadow-lg">
                Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-md border border-white/30 flex items-center justify-center transition">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-primary w-8 h-8 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-800">100% Reliable</p>
                <p className="text-sm text-slate-500">Verified Suppliers Only</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="text-primary w-8 h-8 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-800">Quality Assured</p>
                <p className="text-sm text-slate-500">Rigorous Inspections</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-primary w-8 h-8 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-800">Export Ready</p>
                <p className="text-sm text-slate-500">Global Logistics</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="text-primary w-8 h-8 flex-shrink-0" />
              <div>
                <p className="font-bold text-slate-800">Fast Delivery</p>
                <p className="text-sm text-slate-500">Optimized Shipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Complete Sourcing Solutions</h2>
            <p className="text-lg text-slate-600">We handle the complexities of sourcing from China so you can focus on growing your business.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-10 h-10 text-primary" />,
                title: "Supplier Sourcing",
                desc: "We find the top 3-5 manufacturers for your specific product requirements.",
                imgId: "srv-src-1"
              },
              {
                icon: <Factory className="w-10 h-10 text-primary" />,
                title: "Factory Verification",
                desc: "On-site audits to verify factory scale, history, and compliance.",
                imgId: "srv-fact-2"
              },
              {
                icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
                title: "Quality Control",
                desc: "Strict pre-shipment inspections to ensure 100% satisfaction.",
                imgId: "srv-qc-3"
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow text-center">
                <div className="mb-6 inline-block p-4 bg-slate-50 rounded-xl">
                  {service.icon}
                </div>
                <h3 id={`srv-title-${idx}`} className="text-2xl font-bold mb-4">{service.title}</h3>
                <p id={`srv-desc-${idx}`} className="text-slate-600 mb-8">{service.desc}</p>
                <img 
                   data-strk-img-id={service.imgId}
                   data-strk-img={`[srv-desc-${idx}] [srv-title-${idx}] sourcing agent`}
                   data-strk-img-ratio="3x2"
                   data-strk-img-width="400"
                   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                   className="w-full h-48 object-cover rounded-xl mb-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 italic">"Building the Bridge to Chinese Manufacturing Excellence"</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Ready to streamline your supply chain and reduce costs without compromising quality?
          </p>
          <Link to="/contact" className="bg-accent hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-md transition text-lg inline-block shadow-2xl">
            Get Started with a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
