import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Settings, Award } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="grid grid-cols-6 gap-0 h-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-r border-white/5" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-gold-400 text-xs font-medium uppercase tracking-wider">
                Premium Quality Machinery
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Precision{' '}
              <span className="text-gold-500">Metal Folding</span>
              {' '}Solutions
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg">
              Advanced double folding machines and sheet metal folders engineered for 
              accuracy, durability, and seamless productivity in modern fabrication.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products">
                <Button size="xl" className="bg-gold-500 text-navy-900 hover:bg-gold-400 font-semibold group">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="xl" variant="outline" className="border-white/20 text-white hover:bg-white/5 hover:border-gold-500">
                  Request Demo
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="text-white font-bold">5 Year</p>
                  <p className="text-white/40 text-xs">Warranty</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="text-white font-bold">2500+</p>
                  <p className="text-white/40 text-xs">Units Installed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="text-white font-bold">ISO 9001</p>
                  <p className="text-white/40 text-xs">Certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Decorative */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              {/* Decorative geometric elements */}
              <div className="absolute inset-0 rounded-2xl border border-gold-500/20 bg-gradient-to-br from-navy-800 to-navy-900 overflow-hidden">
                <div className="absolute top-8 left-8 w-24 h-24 border border-gold-500/30 rounded-lg rotate-12" />
                <div className="absolute bottom-12 right-8 w-32 h-32 border border-gold-500/20 rounded-lg -rotate-6" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-gold-500/20 rounded-full">
                  <div className="absolute inset-4 border border-gold-500/15 rounded-full" />
                </div>
                {/* Central icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Settings className="w-16 h-16 text-gold-500/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
    </section>
  )
}