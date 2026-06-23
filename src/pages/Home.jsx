import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, CheckCircle2, Clock, Truck, Search, Briefcase, Award, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-slate-900"
          data-strk-bg-id="hero-bg-99221"
          data-strk-bg="[hero-title] [hero-subtitle] china factory sourcing"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-8 max-w-xl">
              From initial supplier search to final delivery, we handle the complexities of sourcing from China so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg text-center">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-slate-900 mb-1">10+</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">Years Experience</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-slate-900 mb-1">500+</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">Factories Verified</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-slate-900 mb-1">100%</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">Quality Guranteed</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="text-3xl font-bold text-slate-900 mb-1">24/7</span>
              <span className="text-sm text-slate-500 uppercase tracking-wider font-medium">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="services-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Source from China</h2>
            <p className="text-lg text-slate-600">Complete end-to-end supply chain management tailored to your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Product Sourcing", 
                desc: "Finding reliable manufacturers and getting the best competitive prices.", 
                icon: Search,
                id: "s1"
              },
              { 
                title: "Supplier Verification", 
                desc: "Conducting factory audits and background checks to reduce trade risks.", 
                icon: ShieldCheck,
                id: "s2"
              },
              { 
                title: "Quality Control", 
                desc: "Pre-shipment inspections to ensure products meet your exact standards.", 
                icon: CheckCircle2,
                id: "s3"
              },
              { 
                title: "Logistics Support", 
                desc: "Coordinating shipping, customs clearance, and local warehouse delivery.", 
                icon: Truck,
                id: "s4"
              }
            ].map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Stop Worrying About China Sourcing</h2>
              <p className="text-lg text-slate-600 mb-8">China sourcing can be challenging. We bridge the gap and eliminate common headaches.</p>
              
              <div className="space-y-6">
                {[
                  { title: "Communication Barriers", desc: "Native English & Chinese speakers handle all negotiations." },
                  { title: "Quality Inconsistency", desc: "Rigorous QC processes ensure every shipment is correct." },
                  { title: "Unreliable Suppliers", desc: "We only work with audited and proven manufacturers." },
                  { title: "Hidden Fees & Costs", desc: "Transparent pricing with no kickbacks or hidden markups." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-green-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                data-strk-img-id="qc-visual-1"
                data-strk-img="quality control inspection china factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="rounded-2xl shadow-2xl"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Quality Control"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden md:block max-w-[200px]">
                <p className="text-sm font-medium">"Their QC team in China saved us $30,000 on one shipment alone."</p>
                <p className="text-xs mt-2 opacity-80">- Satisfied Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 id="cta-section-title" className="text-3xl md:text-5xl font-bold mb-6">Ready to Source Better from China?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Get a free, no-obligation quote and supplier analysis for your project today.</p>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg text-xl font-bold transition-all shadow-xl">
            Request Free Quote Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
