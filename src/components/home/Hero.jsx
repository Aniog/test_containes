import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative bg-primary overflow-hidden py-24 sm:py-32"
    >
      <div 
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-ssourcing"
        data-strk-bg="[hero-title] [hero-subtitle] China factory production shipping logistics"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Your boots on the ground in China to ensure your supply chain is secure and efficient.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">Get a Free Sourcing Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/services" className="flex items-center gap-2">
                  Explore Our Services <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Multilingual Support (EN/CN)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Comprehensive QC Reports</span>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2">
              <img
                className="w-full rounded-md"
                data-strk-img-id="hero-image-product"
                data-strk-img="[hero-title] professional China sourcing agent meeting factory office"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'%3E%3C/svg%3E"
                alt="SSourcing China Sourcing Services"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
