import { ArrowRight, ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Precision in Every
            <span className="block text-blue-400">Fold</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            ARTITECT MACHINERY delivers industry-leading sheet metal folding solutions.
            Engineered for precision, built for durability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 transition-all group"
            >
              Explore Our Machines
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-gray-900 transition-all"
            >
              Get a Quote
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">25+</div>
              <div className="text-sm text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">1000+</div>
              <div className="text-sm text-gray-400 mt-1">Machines Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-gray-400 mt-1">Countries Served</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white opacity-75" />
        </div>
      </div>
    </section>
  )
}

export default Hero
