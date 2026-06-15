import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight, Drill, Settings, ShieldCheck } from 'lucide-react'

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="hero-bg-artitect"
          data-strk-bg="[hero-title] industrial machinery metal folding"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Elegance in <span className="text-[#d4af37]">Industrial</span> Precision
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
            Mastering the art of sheet metal folding. ARTITECT MACHINERY delivers high-performance 
            double folding solutions for the modern fabrication industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/products" 
              className="bg-[#d4af37] text-[#1a1a1a] px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center group"
            >
              Explore Products <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border border-white text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 id="capabilities-title" className="text-sm font-bold tracking-[0.3em] uppercase text-[#d4af37] mb-4">Our Expertise</h2>
            <h3 id="capabilities-heading" className="text-4xl font-bold text-[#1a1a1a]">State-of-the-Art Solutions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                id: 'folding', 
                title: 'Double Folding', 
                desc: 'Maximum flexibility with our advanced double folder technology, perfectly suited for complex profiles.',
                icon: <Drill className="h-10 w-10 text-[#d4af37]" />
              },
              { 
                id: 'precision', 
                title: 'Unrivaled Precision', 
                desc: 'Digital controls and high-torque motors ensure every fold meet microscopic tolerances.',
                icon: <Settings className="h-10 w-10 text-[#d4af37]" />
              },
              { 
                id: 'durability', 
                title: 'Built to Last', 
                desc: 'Industrial-grade materials and obsessive engineering result in machines that endure decades of heavy use.',
                icon: <ShieldCheck className="h-10 w-10 text-[#d4af37]" />
              }
            ].map((feature) => (
              <div key={feature.id} className="group p-8 border border-gray-100 hover:border-[#d4af37] transition-all duration-300 bg-gray-50/50 hover:bg-white shadow-sm hover:shadow-xl">
                <div className="mb-6">{feature.icon}</div>
                <h4 id={`feature-${feature.id}-title`} className="text-xl font-bold mb-4 text-[#1a1a1a]">{feature.title}</h4>
                <p id={`feature-${feature.id}-desc`} className="text-gray-600 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1a1a1a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img 
            data-strk-img-id="pattern-overlay"
            data-strk-img="machinery blueprint texture"
            data-strk-img-ratio="1x1"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div>
              <h2 id="cta-title" className="text-3xl md:text-5xl font-bold mb-6">Ready to elevate your <span className="text-[#d4af37]">production</span>?</h2>
              <p className="text-gray-400 text-lg font-light max-w-xl">
                Contact our engineering team today to discuss custom folding solutions tailored to your unique requirements.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="bg-[#d4af37] text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-[#1a1a1a] transition-all whitespace-nowrap"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
