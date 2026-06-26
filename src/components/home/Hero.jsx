import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Button } from '@/components/ui/Button'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-artitect"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-am-bg via-am-bg/90 to-am-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-am-bg via-transparent to-am-bg/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-am-gold mb-6">
            Industrial Precision Since 1998
          </span>
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-am-text leading-[1.05] mb-6"
          >
            ARTITECT
            <br />
            <span className="text-am-gold">MACHINERY</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-am-muted max-w-2xl mb-10 leading-relaxed"
          >
            Engineered double folding machines, sheet metal folders, and metal
            folding solutions built for precision, durability, and effortless
            operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products">
              <Button>
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary">Request a Quote</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
