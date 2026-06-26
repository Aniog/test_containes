import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="relative py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div
        className="absolute inset-0"
        data-strk-bg-id="cta-bg-v7w8x9"
        data-strk-bg="[cta-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Ready to Upgrade Your Metalworking Operations?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Get a customized quote for your specific requirements. Our experts are ready to help
          you find the perfect folding solution.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/25"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
