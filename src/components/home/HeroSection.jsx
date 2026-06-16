import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, Clock, Users } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f2a9c"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />

      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Award className="w-4 h-4" />
            Industry-Leading Precision Engineering
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Precision Sheet Metal
            <span className="block text-accent">Folding Solutions</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl"
          >
            Artitect Machinery delivers world-class double folding machines and sheet metal folders 
            engineered for accuracy, durability, and peak performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-accent">
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Request a Quote
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10">
            {[
              { icon: Shield, value: '25+', label: 'Years Experience' },
              { icon: Award, value: '500+', label: 'Machines Delivered' },
              { icon: Clock, value: '24/7', label: 'Technical Support' },
              { icon: Users, value: '50+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <stat.icon className="w-6 h-6 text-accent mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
