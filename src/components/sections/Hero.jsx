import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-dark"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Industry Leading Solutions</span>
          </div>
          
          <h1 
            id="hero-title"
            className="heading-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
          >
            Precision Metal
            <span className="block text-brand-gold">Folding Excellence</span>
          </h1>
          
          <p 
            id="hero-subtitle"
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl text-body"
          >
            Advanced double folding machines and sheet metal solutions engineered for superior performance and reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <button className="btn-secondary inline-flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">25+</div>
              <div className="text-white/60 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-white/60 text-sm mt-1">Machines Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-white/60 text-sm mt-1">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
