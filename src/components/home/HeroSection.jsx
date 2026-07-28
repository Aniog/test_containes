import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, Globe } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #0052CC 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Trusted by 500+ Global Buyers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Find reliable Chinese suppliers, verify factories, inspect quality, and coordinate 
              shipping — all with one trusted partner on the ground in China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-lg text-lg font-medium transition-all flex items-center justify-center"
              >
                How It Works
              </Link>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: CheckCircle, text: 'No Hidden Fees' },
                { icon: Globe, text: '50+ Countries Served' },
                { icon: Shield, text: '100% Verified Suppliers' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <item.icon className="h-5 w-5 text-trust-green" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image/Banner */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
              <div className="relative">
                <div
                  data-strk-bg-id="hero-factory-bg"
                  data-strk-bg="modern Chinese factory manufacturing facility production line warehouse"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                  className="w-full aspect-[4/3] rounded-xl bg-gray-200"
                />
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 flex-1 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary">1,200+</div>
                    <div className="text-xs text-gray-600">Verified Factories</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 flex-1 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 flex-1 text-center shadow-sm">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
