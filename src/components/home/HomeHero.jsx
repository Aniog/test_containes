import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HomeHero = () => {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-brand-charcoal">
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        data-strk-bg-id="hero-bg-928374"
        data-strk-bg="[hero-title] [hero-desc] industrial metal folding machinery elegant architecture"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-charcoal to-transparent opacity-60" />
      
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 md:px-6">
        <div className="max-w-3xl space-y-6">
          <div className="inline-block rounded-none border border-brand-gold/50 bg-brand-gold/10 px-3 py-1 text-sm font-medium tracking-wider text-brand-gold uppercase">
            Engineering Excellence
          </div>
          <h1 id="hero-title" className="text-5xl font-serif font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            The Art of Precision <br />
            <span className="text-brand-gold">Metal Folding</span>
          </h1>
          <p id="hero-desc" className="text-lg text-brand-ivory/80 md:text-xl max-w-2xl leading-relaxed">
            ARTITECT Machinery sets the standard for high-end sheet metal folders and double folding machines. 
            Elegance meets industrial durability for unmatched fabrication results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link 
              to="/products" 
              className="inline-flex h-12 items-center justify-center bg-brand-gold px-8 text-sm font-bold text-brand-charcoal transition-all hover:bg-brand-gold/90"
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex h-12 items-center justify-center border border-white/20 px-8 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
