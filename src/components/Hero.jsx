import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="w-12 h-0.5 bg-gold" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-tight text-white">
              Precision Sheet
              <br />
              Metal Folding
              <br />
              <span className="text-gold">Machines</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Engineered for accuracy and built to last. ARTITECT double folding machines
              deliver industrial-grade performance with elegant simplicity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-block rounded-md bg-gold text-navy px-8 py-3.5 font-semibold tracking-wide hover:bg-[#d4b068] transition-colors"
              >
                Explore Machines
              </a>
              <a
                href="#contact"
                className="inline-block rounded-md border border-gold text-gold px-8 py-3.5 font-semibold tracking-wide hover:bg-gold hover:text-navy transition-colors"
              >
                Request a Demo
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg"
              data-strk-bg-id="hero-machine-bg-8f2a9c"
              data-strk-bg="[hero-machine-label]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            <span id="hero-machine-label" className="hidden">
              industrial sheet metal double folding machine workshop
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
