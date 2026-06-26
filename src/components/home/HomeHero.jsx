import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HomeHero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
              Precision Sheet Metal Folding Solutions
            </h1>
            <p id="hero-subtitle" className="mt-6 text-lg leading-8 text-muted-foreground">
              Experience the pinnacle of engineering with ARTITECT MACHINERY. Our range of double folding and sheet metal machines deliver unmatched accuracy and reliability.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/products"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all flex items-center group"
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
                Contact Sales <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div
              data-strk-bg-id="hero-bg-99c1d2"
              data-strk-bg="[hero-subtitle] [hero-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="1200"
              className="aspect-4/3 rounded-2xl bg-muted object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
