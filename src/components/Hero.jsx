import { useEffect, useRef } from 'react'
import { ArrowRight, Award, Shield, Wrench } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 z-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-6">
            Industrial Excellence Since 1998
          </p>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            Precision Sheet Metal{' '}
            <span className="text-gold">Folding Solutions</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl"
          >
            ARTITECT MACHINERY engineers world-class double folding machines,
            sheet metal folders, and metal folding equipment trusted by
            manufacturers across the globe.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              onClick={(e) => handleScroll(e, '#products')}
              className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded text-base font-bold hover:bg-gold-dark transition-colors"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          {[
            {
              icon: Award,
              title: 'Certified Quality',
              desc: 'ISO 9001 certified manufacturing',
            },
            {
              icon: Shield,
              title: '2-Year Warranty',
              desc: 'Comprehensive coverage on all units',
            },
            {
              icon: Wrench,
              title: 'Global Support',
              desc: 'Service centers in 40+ countries',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            >
              <item.icon className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-white font-bold text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
