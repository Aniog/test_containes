import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[600px] md:min-h-[680px] flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-ssourcing-7a3c2b"
        data-strk-bg="[hero-subtitle] [hero-title] [hero-desc]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-[#1A365D]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 bg-[#C27A3E]/20 text-[#F5EDE3] text-xs font-medium tracking-wider uppercase rounded-full mb-6">
            Trusted by 500+ Global Buyers
          </span>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-desc" className="text-lg md:text-xl text-slate-200 leading-relaxed mb-4 max-w-xl">
            Find reliable suppliers, verify factories, inspect quality, and ship with confidence. We handle the complexity so you can focus on growing your business.
          </p>
          <p id="hero-subtitle" className="text-slate-300 text-sm mb-8">
            Based in Shenzhen with 12+ years of on-the-ground sourcing experience.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#C27A3E] text-white text-sm font-semibold rounded-md hover:bg-[#A8642E] transition-colors shadow-lg"
            >
              Get a Free Sourcing Quote
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 border-t border-white/10">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">12+</p>
            <p className="text-slate-400 text-sm mt-1">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
            <p className="text-slate-400 text-sm mt-1">Clients Served</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">3,000+</p>
            <p className="text-slate-400 text-sm mt-1">Factories in Network</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-white">98%</p>
            <p className="text-slate-400 text-sm mt-1">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
