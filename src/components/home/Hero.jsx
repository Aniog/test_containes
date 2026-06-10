import React from 'react'
import { ArrowRight, Play, Award, Shield, Wrench } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span className="text-blue-400 text-sm font-medium">Industry Leading Quality</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              PRECISION
              <span className="block text-blue-500">SHEET METAL</span>
              FOLDING SOLUTIONS
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Engineering excellence in every fold. Our double folding machines deliver unmatched precision, 
              reliability, and performance for modern manufacturing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 group"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-700 transition-all duration-200"
              >
                <Play className="w-5 h-5" />
                Request Demo
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-slate-300 text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-blue-500" />
                <span className="text-slate-300 text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                <span className="text-slate-300 text-sm font-medium">10+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>500+</div>
              <p className="text-slate-400 text-sm">Machines Delivered</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>99.8%</div>
              <p className="text-slate-400 text-sm">Accuracy Rate</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>50+</div>
              <p className="text-slate-400 text-sm">Countries Served</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}">24/7</div>
              <p className="text-slate-400 text-sm">Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-slate-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
