import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle, Globe } from 'lucide-react'

const HomeHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container-max relative section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-700/50 rounded-full mb-6">
              <Globe size={16} className="text-brand-300" />
              <span className="text-brand-200 text-sm font-medium">Trusted by 500+ Global Buyers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              China Sourcing Agent for Global Buyers
            </h1>

            <p className="text-lg md:text-xl text-brand-200 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping
              — all with one trusted partner in China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="btn-accent text-base px-8 py-4 gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/how-it-works"
                className="btn-secondary bg-transparent border-brand-400 text-white hover:bg-brand-800 hover:border-brand-300 text-base px-8 py-4"
              >
                How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-brand-200">
                <CheckCircle size={18} className="text-green-400" />
                <span className="text-sm font-medium">No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-brand-200">
                <CheckCircle size={18} className="text-green-400" />
                <span className="text-sm font-medium">Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2 text-brand-200">
                <CheckCircle size={18} className="text-green-400" />
                <span className="text-sm font-medium">Quality Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right - Stats/Badges */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-brand-200 text-sm">Global Clients Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">2,000+</div>
                <div className="text-brand-200 text-sm">Verified Suppliers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-brand-200 text-sm">Quality Pass Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-brand-200 text-sm">Years Experience</div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Shield size={24} className="text-green-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Verified & Trusted</div>
                  <div className="text-brand-200 text-sm">All suppliers undergo strict verification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

export default HomeHero
