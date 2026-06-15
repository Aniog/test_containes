import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            We help overseas buyers find reliable suppliers, verify factories,
            inspect quality, follow production, and coordinate shipping from China.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>

            <Link
              to="/how-it-works"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              Learn How It Works
            </Link>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-sm text-blue-200">
            <div className="flex items-center">
              <span className="font-semibold text-white text-2xl mr-2">500+</span>
              <span>Clients Served</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-white text-2xl mr-2">10+</span>
              <span>Years Experience</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-white text-2xl mr-2">1000+</span>
              <span>Projects Completed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  )
}

export default HeroSection
