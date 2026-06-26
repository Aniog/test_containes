import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Shield, Award, Ruler } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-slate-900/60"
          data-strk-bg-id="hero-bg-v1"
          data-strk-bg="[hero-title] [hero-subtitle] industrial factory machinery"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
              Precision Engineering For <span className="text-blue-500">Master Craftsmen.</span>
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-200 mb-10 font-light leading-relaxed">
              Premium double folding and sheet metal machinery designed for the most demanding industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 active:scale-95 group"
              >
                Explore Machinery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-semibold rounded-lg hover:bg-white/20 transition-all active:scale-95"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Features Banner */}
      <section className="bg-slate-50 py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900 mb-1">25+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900 mb-1">500+</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">Machines Installed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900 mb-1">0.1mm</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">Precision Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900 mb-1">24/7</p>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-medium">Technical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 id="value-title" className="text-4xl font-bold text-slate-900 tracking-tight mb-4">Why ARTITECT?</h2>
            <p id="value-subtitle" className="text-lg text-slate-600 leading-relaxed">
              We combine cutting-edge technology with robust engineering to deliver machinery that redefines workshop productivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: 'Unmatched Durability', desc: 'Constructed with premium Swedish steel for lifetime operation in heavy industrial environments.' },
              { icon: Ruler, title: 'Extreme Precision', desc: 'Advanced CNC control systems ensuring accuracy down to the tenth of a millimeter.' },
              { icon: Settings, title: 'Ease of Use', desc: 'Intuitive user interface that reduces training time and eliminates mechanical operator errors.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Machine Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <img 
                data-strk-img-id="featured-machine-img"
                data-strk-img="[featured-name] metal folding machine"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Featured Machine"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                Featured Product
              </div>
              <h2 id="featured-name" className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">The ARTITECT XL Double Folder</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The flagship of our fleet. A masterpiece of engineering that allows for complex double-folding operations in a single pass, significantly reducing labor costs and material handling.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Up to 4.0mm sheet thickness capacity',
                  'Dual-sided folding capability',
                  'Smart touch CNC integration',
                  'Automated material clamping'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <Award className="w-5 h-5 text-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/products"
                className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                View Full Specifications
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-slate-900 p-12 md:p-20 text-center">
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              data-strk-bg-id="cta-bg"
              data-strk-bg="abstract industrial metal texture"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1920"
            />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Upgrade Your Workshop?</h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-light">
                Consult with our expert engineers today to find the perfect machinery solution for your production needs.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-all active:scale-95 shadow-lg shadow-white/10"
              >
                Get a Personalized Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
