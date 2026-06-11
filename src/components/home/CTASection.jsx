import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative py-16 md:py-24">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="cta-bg-g7h8i9"
        data-strk-bg="[cta-title] [cta-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-title" className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white mb-4">
          Ready to Upgrade Your Operations?
        </h2>
        <p id="cta-subtitle" className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Get in touch with our team for a customized quote and expert consultation on the right folding machine for your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-primary">
            Contact Us <ArrowRight size={18} className="ml-2" />
          </Link>
          <Link to="/products" className="btn-secondary border-white text-white hover:bg-white hover:text-slate-900">
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  )
}
