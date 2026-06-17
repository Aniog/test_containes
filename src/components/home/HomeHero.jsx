import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ChevronRight, Settings, ShieldCheck, Zap } from 'lucide-react'

const HomeHero = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 id="hero-title" className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
              Precision Sheet Metal <span className="text-accent">Folding Solutions</span>
            </h1>
            <p id="hero-subtitle" className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              ARTITECT MACHINERY provides industry-leading double folding machines and sheet metal folders engineered for accuracy, speed, and durability.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90">
                View Products
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 border-primary text-primary text-primary-foreground hover:bg-secondary">
                Request a Demo
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Settings className="h-6 w-6 text-accent mb-2" />
                <span className="text-sm font-semibold text-primary">High Precision</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <ShieldCheck className="h-6 w-6 text-accent mb-2" />
                <span className="text-sm font-semibold text-primary">Certified Quality</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Zap className="h-6 w-6 text-accent mb-2" />
                <span className="text-sm font-semibold text-primary">Rapid Output</span>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-2xl overflow-hidden lg:max-w-md">
              <img
                data-strk-img-id="hero-image-metal-folder"
                data-strk-img="[hero-subtitle] [hero-title] heavy industrial folding machine detail"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Architectural Sheet Metal Folding Machine"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
