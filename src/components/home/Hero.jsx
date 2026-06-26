import { Settings2 } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-primary text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Settings2 className="w-4 h-4" />
              <span className="text-sm font-medium text-white/90">Precision Sheet Metal Solutions</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Advanced Sheet Metal
              <span className="block text-accent-light">Folding Machinery</span>
            </h1>

            <p id="hero-subtitle" className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Engineering excellence in double folding machines. Precision-engineered for industrial applications, delivering consistent quality and unmatched reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#products"
                className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-200 text-center shadow-lg hover:shadow-xl"
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 text-center backdrop-blur-sm border border-white/20"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="Industrial sheet metal folding machine"
                className="w-full h-auto object-cover"
                data-strk-img-id="hero-machine-8f2a9c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 md:p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Settings2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">25+</p>
                  <p className="text-sm text-text-secondary">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
