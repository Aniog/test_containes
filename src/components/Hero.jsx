import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900" ref={containerRef}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="Industrial sheet metal folding machine in modern manufacturing facility"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Precision in Every
            <span className="block text-blue-400">Fold</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Leading manufacturer of sheet metal folding machines. 
            Engineered for accuracy, built for durability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#products"
              className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 group"
            >
              Explore Our Machines
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Request a Quote
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
