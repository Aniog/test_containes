import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="text-yellow-300 text-sm font-medium">Industry Leading Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Precision Metal
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                Folding Machines
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              ARTITECT MACHINERY delivers high-performance double folding machines and sheet metal folders engineered for accuracy, durability, and efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Products
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Request Quote
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-gray-400 text-sm mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-gray-400 text-sm mt-1">Machines Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-gray-400 text-sm mt-1">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 border border-gray-600">
                <img
                  data-strk-img-id="hero-machine-8f2a9c"
                  data-strk-img="[hero-title] [hero-subtitle]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="ARTITECT Metal Folding Machine"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white text-sm font-medium">Available for immediate delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50" size={32} />
        </div>
      </div>
    </section>
  )
}