import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-2xl">
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Precision Sheet Metal
              <span className="block text-slate-700">Folding Solutions</span>
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg text-slate-600 leading-relaxed">
              ARTITECT MACHINERY delivers industry-leading double folding machines 
              and sheet metal folders engineered for precision, durability, and 
              unmatched performance in modern manufacturing.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-medium rounded-lg border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto">
              <img
                data-strk-img-id="hero-machine-img-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY - Precision Sheet Metal Folding Machine"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-slate-200/50 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
