import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Shield, Zap, Wrench } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const features = [
    {
      title: 'Precision Control',
      desc: 'Micrometer-perfect folding for the most demanding technical specifications.',
      icon: Settings
    },
    {
      title: 'Industrial Durability',
      desc: 'Built with high-grade reinforced steel to withstand 24/7 industrial operations.',
      icon: Shield
    },
    {
      title: 'Rapid Cycle Times',
      desc: 'Optimized double folding technology that increases production speed by up to 40%.',
      icon: Zap
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-98123"
          data-strk-bg="[hero-title] [hero-subtitle] industrial metal folding machine factory"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-[#d4af37] text-slate-900 text-xs font-bold tracking-widest uppercase mb-6 rounded">
              Engineering Excellence
            </span>
            <h1 id="hero-title" className="text-5xl md:text-7xl font-serif font-black text-white leading-tight mb-6">
              The Architecture of <br />
              <span className="text-[#d4af37]">Metal Mastery.</span>
            </h1>
            <p id="hero-subtitle" className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Elevate your production with ARTITECT's signature double folding machines. 
              Precision-engineered for the modern fabricator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-[#d4af37] text-slate-900 px-8 py-4 rounded-md font-bold text-center hover:bg-[#c4a030] transition-all flex items-center justify-center gap-2"
              >
                View Machinery <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-md font-bold text-center hover:bg-white/20 transition-all"
              >
                Consult an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-serif font-black text-slate-900">30+</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-black text-slate-900">12k+</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">Machines Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-black text-slate-900">99.8%</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">Precision Rate</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-black text-slate-900">24/7</p>
              <p className="text-slate-500 text-sm uppercase tracking-wider">Global Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-black mb-4">Why FABRICATORS choose us</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our technology isn't just about bending metal. It's about empowering your business 
            with unparalleled reliability and innovative dual-fold capabilities.
          </p>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#d4af37] transition-colors">
                  <f.icon className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif font-black mb-4">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#d4af37]/10 rounded-full blur-3xl" />
                <img 
                  data-strk-img-id="showcase-img-1"
                  data-strk-img="sheet metal double folding machine precision industrial"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Precision Machining"
                  className="rounded-2xl shadow-2xl relative z-10 border-8 border-white"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-[#d4af37] font-bold tracking-widest text-sm uppercase block mb-4">Masterpiece in Motion</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">
                The 2026 ARTITECT <br /> Double-Folder Series
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                The peak of bending technology. Our latest series features synchronous dual-drive 
                cylinders and our proprietary "SmoothFold" AI controller, reducing setup time by 50%.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                  Auto-compensating crowning system
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                  Eco-friendly hybrid hydraulic power unit
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                  Integrated cloud-monitoring tools
                </li>
              </ul>
              <Link 
                to="/products"
                className="inline-flex items-center gap-2 text-slate-900 font-black border-b-2 border-[#d4af37] pb-1 hover:text-[#d4af37] transition-all"
              >
                Explore Full Specifications <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full" />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-6xl font-serif font-black text-white mb-8">
            Ready to <span className="text-[#d4af37]">REDEFINE</span> your workshop?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-lg">
            Schedule a virtual demo or visit our showroom to experience ARTITECT technology first-hand.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact" 
              className="bg-[#d4af37] text-slate-900 px-10 py-4 rounded-md font-bold text-lg hover:scale-105 transition-transform"
            >
              Request a Demo
            </Link>
            <a 
              href="tel:15551234567" 
              className="bg-white text-slate-900 px-10 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-colors"
            >
              Consult an Engineer
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
